import { Link, Navigate, useParams } from 'react-router-dom';
import { getDomain, getTopic } from '../data/domains';
import { getTopicContent, getTopicQuestions } from '../lib/registry';
import { getTopicProgress } from '../lib/progressStore';
import QuestionCard from '../components/QuestionCard';

export default function RemediationPage() {
  const { domainId, topicId } = useParams();
  const domain = domainId ? getDomain(domainId) : undefined;
  const topic = domainId && topicId ? getTopic(domainId, topicId) : undefined;
  const content = topicId ? getTopicContent(topicId) : undefined;
  const progress = topicId ? getTopicProgress(topicId) : undefined;

  if (!domain || !topic) return <Navigate to="/cissp" replace />;

  const lastAttempt = progress?.attempts[progress.attempts.length - 1];
  if (!lastAttempt) return <Navigate to={`/cissp/domain/${domain.id}/topic/${topic.id}/quiz`} replace />;

  const allQuestions = getTopicQuestions(topic.id);
  const missedQuestions = allQuestions.filter((q) => lastAttempt.missedIds.includes(q.id));
  const weakSubtopics = Array.from(new Set(missedQuestions.map((q) => q.subtopicTag)));

  return (
    <div className="max-w-2xl space-y-6">
      <Link to={`/cissp/domain/${domain.id}/topic/${topic.id}/learn`} className="text-sm text-slate-500 hover:text-slate-700">
        ← {topic.title}
      </Link>
      <div>
        <h1 className="text-2xl font-bold text-slate-900">Remediation: {topic.title}</h1>
        <p className="text-slate-600 mt-1">
          You scored {lastAttempt.score}/10 (attempt #{progress?.remediationCount ?? 1}). Review what you missed, then
          retake a fresh set of questions.
        </p>
      </div>

      {content && (
        <section className="bg-amber-50 border border-amber-200 rounded-lg p-4">
          <h2 className="font-semibold text-amber-900 mb-2">What to Re-Review</h2>
          <ul className="list-disc list-inside text-amber-950 space-y-1 mb-3">
            {weakSubtopics.map((tag) => (
              <li key={tag}>{tag}</li>
            ))}
          </ul>
          <p className="text-sm text-amber-900 font-medium mb-1">Exam traps to keep in mind:</p>
          <ul className="list-disc list-inside text-sm text-amber-900 space-y-1">
            {content.examTraps.map((t, i) => (
              <li key={i}>{t}</li>
            ))}
          </ul>
          {content.resources.length > 0 && (
            <div className="mt-3">
              <p className="text-sm text-amber-900 font-medium mb-1">Curated resources:</p>
              <ul className="list-disc list-inside text-sm space-y-1">
                {content.resources.map((r) => (
                  <li key={r.url}>
                    <a href={r.url} target="_blank" rel="noreferrer" className="text-indigo-700 underline">
                      {r.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </section>
      )}

      <section className="space-y-4">
        <h2 className="font-semibold text-slate-900">Missed Questions ({missedQuestions.length})</h2>
        {missedQuestions.map((q, i) => (
          <QuestionCard key={q.id} question={q} index={i} revealAnswer />
        ))}
      </section>

      <Link
        to={`/cissp/domain/${domain.id}/topic/${topic.id}/learn`}
        className="inline-block bg-slate-100 text-slate-700 px-4 py-2 rounded-md text-sm font-medium mr-3"
      >
        Re-Study Topic
      </Link>
      <Link
        to={`/cissp/domain/${domain.id}/topic/${topic.id}/quiz`}
        className="inline-block bg-slate-900 text-white px-4 py-2 rounded-md text-sm font-medium"
      >
        Retake Quiz (fresh set)
      </Link>
    </div>
  );
}
