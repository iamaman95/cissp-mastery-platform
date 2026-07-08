import { Link } from 'react-router-dom';
import { domains, allTopics } from '../data/domains';
import { useProgress } from '../lib/useProgress';
import { domainCompletionPct, allDomainsComplete, overallCompletionPct } from '../lib/progressStore';
import ProgressBar from '../components/ProgressBar';

export default function Dashboard() {
  useProgress();
  const allTopicIds = allTopics().map((t) => t.topic.id);
  const examsUnlocked = allDomainsComplete(allTopicIds);
  const overallPct = overallCompletionPct();

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-slate-900">Your CISSP Study Dashboard</h1>
        <p className="text-slate-600 mt-1">
          Work through each domain topic by topic: learn, quiz, remediate if needed, then move on.
        </p>
        <div className="mt-4 max-w-md">
          <div className="flex justify-between text-sm text-slate-600 mb-1">
            <span>Overall progress</span>
            <span>{Math.round(overallPct * 100)}%</span>
          </div>
          <ProgressBar pct={overallPct} />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {domains.map((d) => {
          const topicIds = d.topics.map((t) => t.id);
          const pct = domainCompletionPct(topicIds);
          return (
            <Link
              key={d.id}
              to={`/domain/${d.id}`}
              className="block bg-white border border-slate-200 rounded-lg p-4 hover:shadow-md transition-shadow"
            >
              <div className="flex justify-between items-baseline">
                <h2 className="font-semibold text-slate-900">
                  Domain {d.number}: {d.title}
                </h2>
                <span className="text-xs text-slate-500">{Math.round(d.weight * 100)}% of exam</span>
              </div>
              <div className="mt-2">
                <ProgressBar pct={pct} />
              </div>
              <div className="text-xs text-slate-500 mt-1">
                {Math.round(pct * 100)}% complete • {d.topics.length} topics
              </div>
            </Link>
          );
        })}
      </div>

      <div className="bg-white border border-slate-200 rounded-lg p-6">
        <h2 className="font-semibold text-slate-900 mb-2">Final Exam Simulations</h2>
        <p className="text-sm text-slate-600 mb-3">
          {examsUnlocked
            ? 'All domains complete — the 5 full-length simulation exams are unlocked.'
            : 'Unlocks once every domain reaches 100% completion.'}
        </p>
        <Link
          to="/exams"
          className={`inline-block px-4 py-2 rounded-md text-sm font-medium ${
            examsUnlocked ? 'bg-slate-900 text-white hover:bg-slate-700' : 'bg-slate-100 text-slate-400 pointer-events-none'
          }`}
        >
          {examsUnlocked ? 'Go to Final Exams' : 'Locked'}
        </Link>
      </div>
    </div>
  );
}
