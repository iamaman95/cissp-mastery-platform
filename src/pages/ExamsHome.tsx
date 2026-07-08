import { Link } from 'react-router-dom';
import { allTopics } from '../data/domains';
import { allDomainsComplete, getExams } from '../lib/progressStore';
import { useProgress } from '../lib/useProgress';

const EXAM_COUNT = 5;

export default function ExamsHome() {
  useProgress();
  const allTopicIds = allTopics().map((t) => t.topic.id);
  const unlocked = allDomainsComplete(allTopicIds);
  const exams = getExams();

  if (!unlocked) {
    return (
      <div className="max-w-xl">
        <h1 className="text-2xl font-bold text-slate-900 mb-2">Final Exams Locked</h1>
        <p className="text-slate-600">
          Complete every topic across all 8 domains (learn → quiz → pass) to unlock the 5 full-length simulation
          exams.
        </p>
        <Link to="/" className="text-indigo-700 underline text-sm mt-3 inline-block">
          Back to dashboard
        </Link>
      </div>
    );
  }

  const allExamsDone = exams.length >= EXAM_COUNT;

  return (
    <div className="space-y-6 max-w-2xl">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">Final Exam Simulations</h1>
        <p className="text-slate-600 mt-1">
          5 independent, non-overlapping full-length exams (100–150 questions each), weighted to the official domain
          percentages.
        </p>
      </div>

      <ol className="space-y-2">
        {Array.from({ length: EXAM_COUNT }).map((_, i) => {
          const attempt = exams[i];
          return (
            <li key={i} className="flex items-center justify-between border border-slate-200 rounded-lg p-4 bg-white">
              <div>
                <div className="font-medium text-slate-900">Simulation Exam {i + 1}</div>
                {attempt && (
                  <div className="text-xs text-slate-500 mt-0.5">
                    Score: {Math.round(attempt.score * 100)}% • {new Date(attempt.date).toLocaleDateString()}
                  </div>
                )}
              </div>
              {attempt ? (
                <Link to={`/exam/${i + 1}/results`} className="text-sm font-medium text-slate-900 hover:underline">
                  View Results →
                </Link>
              ) : i === exams.length ? (
                <Link to={`/exam/${i + 1}`} className="bg-slate-900 text-white px-4 py-2 rounded-md text-sm font-medium">
                  Start Exam
                </Link>
              ) : (
                <span className="text-sm text-slate-400">Locked</span>
              )}
            </li>
          );
        })}
      </ol>

      {allExamsDone && (
        <Link to="/analytics" className="inline-block bg-indigo-600 text-white px-4 py-2 rounded-md text-sm font-medium">
          View Cross-Exam Analytics →
        </Link>
      )}
    </div>
  );
}
