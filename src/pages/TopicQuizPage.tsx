import { useState } from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { getDomain, getTopic } from '../data/domains';
import { getQuestionSet } from '../lib/registry';
import { getTopicProgress, recordTopicAttempt } from '../lib/progressStore';
import QuestionCard from '../components/QuestionCard';

export default function TopicQuizPage() {
  const { domainId, topicId } = useParams();
  const domain = domainId ? getDomain(domainId) : undefined;
  const topic = domainId && topicId ? getTopic(domainId, topicId) : undefined;

  // Captured once at mount so submitting mid-quiz (which appends a new attempt
  // to the progress store) can't flip the set or question list out from under
  // the answers already recorded in state.
  const [setToUse] = useState<'A' | 'B'>(() => {
    const progress = topicId ? getTopicProgress(topicId) : undefined;
    return (progress?.attempts.length ?? 0) % 2 === 0 ? 'A' : 'B';
  });
  const [questions] = useState(() => (topicId ? getQuestionSet(topicId, setToUse).slice(0, 10) : []));

  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [submitted, setSubmitted] = useState(false);

  if (!domain || !topic) return <Navigate to="/cissp" replace />;
  if (questions.length === 0) {
    return (
      <div className="space-y-3">
        <Link to={`/cissp/domain/${domain.id}/topic/${topic.id}/learn`} className="text-sm text-slate-500">
          ← {topic.title}
        </Link>
        <p className="text-slate-600">No quiz questions available for this topic yet.</p>
      </div>
    );
  }

  const allAnswered = questions.every((q) => answers[q.id] !== undefined);

  const handleSubmit = () => {
    const missedIds = questions.filter((q) => !q.options[answers[q.id]]?.correct).map((q) => q.id);
    const score = questions.length - missedIds.length;
    recordTopicAttempt(topic.id, score, missedIds, setToUse, 8);
    setSubmitted(true);
  };

  if (submitted) {
    const missedIds = questions.filter((q) => !q.options[answers[q.id]]?.correct).map((q) => q.id);
    const score = questions.length - missedIds.length;
    const passed = score >= 8;
    return (
      <div className="max-w-2xl space-y-4">
        <div className={`rounded-lg p-6 border ${passed ? 'bg-emerald-50 border-emerald-200' : 'bg-rose-50 border-rose-200'}`}>
          <h1 className="text-2xl font-bold text-slate-900">
            {score}/10 — {passed ? 'Passed!' : 'Not yet — remediation needed'}
          </h1>
          <p className="text-slate-700 mt-2">
            {passed
              ? 'Great work. This topic is now complete and the next topic is unlocked.'
              : `You need 8/10 to pass. Review your missed questions and re-study the weak subtopics before retaking.`}
          </p>
          <div className="mt-4 flex gap-3">
            {passed ? (
              <Link to={`/cissp/domain/${domain.id}`} className="bg-slate-900 text-white px-4 py-2 rounded-md text-sm font-medium">
                Back to {domain.title}
              </Link>
            ) : (
              <Link
                to={`/cissp/domain/${domain.id}/topic/${topic.id}/remediation`}
                className="bg-slate-900 text-white px-4 py-2 rounded-md text-sm font-medium"
              >
                Go to Remediation
              </Link>
            )}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-2xl space-y-4">
      <Link to={`/cissp/domain/${domain.id}/topic/${topic.id}/learn`} className="text-sm text-slate-500 hover:text-slate-700">
        ← {topic.title}
      </Link>
      <h1 className="text-2xl font-bold text-slate-900">Quiz: {topic.title}</h1>
      <p className="text-slate-600 text-sm">10 questions • Pass threshold 8/10 (80%)</p>

      <div className="space-y-4">
        {questions.map((q, i) => (
          <QuestionCard
            key={q.id}
            question={q}
            index={i}
            selected={answers[q.id]}
            onSelect={(optIdx) => setAnswers((a) => ({ ...a, [q.id]: optIdx }))}
          />
        ))}
      </div>

      <button
        disabled={!allAnswered}
        onClick={handleSubmit}
        className="bg-slate-900 text-white px-5 py-2.5 rounded-md font-medium hover:bg-slate-700 disabled:bg-slate-300 disabled:cursor-not-allowed"
      >
        Submit Quiz ({Object.keys(answers).length}/{questions.length} answered)
      </button>
    </div>
  );
}
