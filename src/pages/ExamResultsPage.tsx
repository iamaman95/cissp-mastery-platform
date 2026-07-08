import { Link, Navigate, useParams } from 'react-router-dom';
import { getDomain } from '../data/domains';
import { getExams, loadProfile } from '../lib/progressStore';

export default function ExamResultsPage() {
  const { examSlot } = useParams();
  const exams = getExams();
  const idx = Number(examSlot) - 1;
  const attempt = exams[idx];
  const passTarget = loadProfile().settings.examPassTarget;

  if (!examSlot || !attempt) return <Navigate to="/exams" replace />;

  const passed = attempt.score >= passTarget;

  return (
    <div className="max-w-2xl space-y-6">
      <Link to="/exams" className="text-sm text-slate-500 hover:text-slate-700">
        ← All Exams
      </Link>
      <div className={`rounded-lg p-6 border ${passed ? 'bg-emerald-50 border-emerald-200' : 'bg-rose-50 border-rose-200'}`}>
        <h1 className="text-2xl font-bold text-slate-900">
          Exam {examSlot}: {Math.round(attempt.score * 100)}% — {passed ? 'Pass' : 'Fail'}
        </h1>
        <p className="text-slate-700 mt-1">
          {attempt.correctCount}/{attempt.totalCount} correct • target {Math.round(passTarget * 100)}% • completed in{' '}
          {Math.round(attempt.durationSec / 60)} min
        </p>
      </div>

      <section>
        <h2 className="font-semibold text-slate-900 mb-2">Domain Breakdown</h2>
        <div className="space-y-2">
          {attempt.domainBreakdown.map((b) => {
            const domain = getDomain(b.domainId);
            const pct = b.total ? b.correct / b.total : 0;
            return (
              <div key={b.domainId} className="flex items-center justify-between border border-slate-200 rounded-md p-3 bg-white">
                <span className="text-sm text-slate-800">{domain?.title ?? b.domainId}</span>
                <span className={`text-sm font-medium ${pct < 0.7 ? 'text-rose-600' : 'text-emerald-600'}`}>
                  {b.correct}/{b.total} ({Math.round(pct * 100)}%)
                </span>
              </div>
            );
          })}
        </div>
      </section>

      <Link to="/exams" className="inline-block bg-slate-900 text-white px-4 py-2 rounded-md text-sm font-medium">
        Back to Exams
      </Link>
    </div>
  );
}
