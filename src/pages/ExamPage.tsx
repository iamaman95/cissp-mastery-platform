import { useEffect, useMemo, useRef, useState } from 'react';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { generateExam } from '../lib/examEngine';
import { recordExamAttempt } from '../lib/progressStore';
import type { QuestionResult, DomainBreakdownEntry } from '../lib/progressStore';
import QuestionCard from '../components/QuestionCard';

const EXAM_SECONDS = 3 * 60 * 60;

function formatTime(sec: number) {
  const h = Math.floor(sec / 3600);
  const m = Math.floor((sec % 3600) / 60);
  const s = sec % 60;
  return `${h}:${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
}

export default function ExamPage() {
  const { examSlot } = useParams();
  const navigate = useNavigate();
  const questions = useMemo(() => generateExam(125), []);
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [secondsLeft, setSecondsLeft] = useState(EXAM_SECONDS);
  const startedAt = useRef(Date.now());
  const submittedRef = useRef(false);

  const handleSubmit = () => {
    if (submittedRef.current) return;
    submittedRef.current = true;
    const results: QuestionResult[] = questions.map((q) => ({
      questionId: q.id,
      domainId: q.domainId,
      qualifier: q.qualifier,
      style: q.style,
      correct: !!q.options[answers[q.id] ?? -1]?.correct,
    }));
    const domainMap = new Map<string, DomainBreakdownEntry>();
    for (const r of results) {
      const entry = domainMap.get(r.domainId) ?? { domainId: r.domainId, correct: 0, total: 0 };
      entry.total += 1;
      if (r.correct) entry.correct += 1;
      domainMap.set(r.domainId, entry);
    }
    const correctCount = results.filter((r) => r.correct).length;
    const attempt = {
      id: `exam-${examSlot}-${Date.now()}`,
      date: new Date().toISOString(),
      durationSec: Math.round((Date.now() - startedAt.current) / 1000),
      questionIds: questions.map((q) => q.id),
      score: correctCount / questions.length,
      correctCount,
      totalCount: questions.length,
      domainBreakdown: Array.from(domainMap.values()),
      results,
    };
    recordExamAttempt(attempt);
    navigate(`/cissp/exam/${examSlot}/results`);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setSecondsLeft((s) => {
        if (s <= 1) {
          clearInterval(timer);
          handleSubmit();
          return 0;
        }
        return s - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!examSlot) return <Navigate to="/cissp/exams" replace />;
  if (questions.length === 0) {
    return <p className="text-slate-600">No questions available yet — populate the question bank first.</p>;
  }

  const q = questions[current];
  const answeredCount = Object.keys(answers).length;

  return (
    <div className="max-w-3xl space-y-4">
      <div className="flex items-center justify-between sticky top-16 bg-slate-50 py-2 z-10">
        <div className="text-sm text-slate-600">
          Exam {examSlot} • Question {current + 1} of {questions.length} • {answeredCount} answered
        </div>
        <div className="text-sm font-mono font-medium text-slate-900">{formatTime(secondsLeft)}</div>
      </div>

      <QuestionCard
        question={q}
        index={current}
        selected={answers[q.id]}
        onSelect={(optIdx) => setAnswers((a) => ({ ...a, [q.id]: optIdx }))}
      />

      <div className="flex flex-wrap gap-1">
        {questions.map((qq, i) => (
          <button
            key={qq.id}
            onClick={() => setCurrent(i)}
            className={`w-7 h-7 text-xs rounded ${
              i === current ? 'bg-slate-900 text-white' : answers[qq.id] !== undefined ? 'bg-emerald-100 text-emerald-700' : 'bg-slate-200 text-slate-600'
            }`}
          >
            {i + 1}
          </button>
        ))}
      </div>

      <div className="flex justify-between">
        <button
          disabled={current === 0}
          onClick={() => setCurrent((c) => Math.max(0, c - 1))}
          className="px-4 py-2 rounded-md text-sm font-medium bg-slate-100 text-slate-700 disabled:opacity-40"
        >
          ← Previous
        </button>
        {current < questions.length - 1 ? (
          <button
            onClick={() => setCurrent((c) => Math.min(questions.length - 1, c + 1))}
            className="px-4 py-2 rounded-md text-sm font-medium bg-slate-100 text-slate-700"
          >
            Next →
          </button>
        ) : (
          <button onClick={handleSubmit} className="px-4 py-2 rounded-md text-sm font-medium bg-slate-900 text-white">
            Submit Exam
          </button>
        )}
      </div>
    </div>
  );
}
