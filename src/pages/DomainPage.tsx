import { Link, useParams, Navigate } from 'react-router-dom';
import { getDomain } from '../data/domains';
import { useProgress } from '../lib/useProgress';
import { getTopicProgress, isTopicUnlocked } from '../lib/progressStore';
import { hasTopicContent } from '../lib/registry';

const statusLabel: Record<string, string> = {
  'not-started': 'Not started',
  'in-progress': 'Studying',
  remediation: 'Needs remediation',
  complete: 'Complete',
};

const statusClass: Record<string, string> = {
  'not-started': 'bg-slate-100 text-slate-600',
  'in-progress': 'bg-amber-100 text-amber-700',
  remediation: 'bg-rose-100 text-rose-700',
  complete: 'bg-emerald-100 text-emerald-700',
};

export default function DomainPage() {
  useProgress();
  const { domainId } = useParams();
  const domain = domainId ? getDomain(domainId) : undefined;
  if (!domain) return <Navigate to="/" replace />;

  const orderedIds = domain.topics.map((t) => t.id);

  return (
    <div className="space-y-6">
      <div>
        <Link to="/" className="text-sm text-slate-500 hover:text-slate-700">
          ← Dashboard
        </Link>
        <h1 className="text-2xl font-bold text-slate-900 mt-1">
          Domain {domain.number}: {domain.title}
        </h1>
        <p className="text-slate-600">{Math.round(domain.weight * 100)}% of the CISSP exam</p>
      </div>

      <ol className="space-y-2">
        {domain.topics.map((topic, idx) => {
          const progress = getTopicProgress(topic.id);
          const unlocked = isTopicUnlocked(domain.id, idx, orderedIds);
          const contentReady = hasTopicContent(topic.id);
          const target = `/domain/${domain.id}/topic/${topic.id}/learn`;
          return (
            <li
              key={topic.id}
              className={`flex items-center justify-between border border-slate-200 rounded-lg p-4 bg-white ${
                !unlocked ? 'opacity-50' : ''
              }`}
            >
              <div>
                <div className="text-xs text-slate-400">Topic {idx + 1}</div>
                <div className="font-medium text-slate-900">{topic.title}</div>
                {!contentReady && <div className="text-xs text-amber-600 mt-0.5">Content coming soon</div>}
              </div>
              <div className="flex items-center gap-3">
                <span className={`text-xs px-2 py-1 rounded-full ${statusClass[progress.status]}`}>
                  {statusLabel[progress.status]}
                </span>
                {unlocked && contentReady ? (
                  <Link to={target} className="text-sm font-medium text-slate-900 hover:underline">
                    {progress.status === 'not-started' ? 'Start' : 'Open'} →
                  </Link>
                ) : (
                  <span className="text-sm text-slate-400">Locked</span>
                )}
              </div>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
