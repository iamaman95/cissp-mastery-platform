import { Link } from 'react-router-dom';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { getExams } from '../lib/progressStore';
import { computeDomainTrends, computeQualifierStats, computeStyleStats, computePrioritizedList } from '../lib/analytics';

const COLORS = ['#4f46e5', '#dc2626', '#059669', '#d97706', '#0891b2', '#7c3aed', '#db2777', '#65a30d'];

export default function AnalyticsPage() {
  const exams = getExams();

  if (exams.length === 0) {
    return (
      <div className="max-w-xl">
        <h1 className="text-2xl font-bold text-slate-900 mb-2">Cross-Exam Analytics</h1>
        <p className="text-slate-600">Complete at least one simulation exam to see analytics.</p>
        <Link to="/exams" className="text-indigo-700 underline text-sm mt-3 inline-block">
          Go to exams
        </Link>
      </div>
    );
  }

  const trends = computeDomainTrends(exams);
  const qualifierStats = computeQualifierStats(exams);
  const styleStats = computeStyleStats(exams);
  const prioritized = computePrioritizedList(trends);

  const chartData = Array.from({ length: exams.length }, (_, i) => {
    const point: Record<string, number> = { exam: i + 1 };
    for (const t of trends) point[t.title] = Math.round(t.points[i].pct * 100);
    return point;
  });

  const weakDomains = trends.filter((t) => t.classification === 'weak');
  const strongDomains = trends.filter((t) => t.classification === 'strong');

  return (
    <div className="space-y-8 max-w-4xl">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">Cross-Exam Analytics</h1>
        <p className="text-slate-600 mt-1">Aggregated across {exams.length} of 5 simulation exam(s).</p>
      </div>

      <section>
        <h2 className="font-semibold text-slate-900 mb-2">Domain Score Trend (Exam 1 → {exams.length})</h2>
        <div className="bg-white border border-slate-200 rounded-lg p-4" style={{ height: 320 }}>
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="exam" label={{ value: 'Exam #', position: 'insideBottom', offset: -5 }} />
              <YAxis domain={[0, 100]} unit="%" />
              <Tooltip />
              <Legend wrapperStyle={{ fontSize: 11 }} />
              {trends.map((t, i) => (
                <Line key={t.domainId} type="monotone" dataKey={t.title} stroke={COLORS[i % COLORS.length]} strokeWidth={2} />
              ))}
            </LineChart>
          </ResponsiveContainer>
        </div>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <section className="bg-rose-50 border border-rose-200 rounded-lg p-4">
          <h2 className="font-semibold text-rose-900 mb-2">Consistently Weak Domains (&lt;70% in 3+ exams)</h2>
          {weakDomains.length === 0 ? (
            <p className="text-sm text-rose-800">None yet.</p>
          ) : (
            <ul className="text-sm text-rose-900 space-y-1">
              {weakDomains.map((d) => (
                <li key={d.domainId}>
                  {d.title} — avg {Math.round(d.avgPct * 100)}%
                </li>
              ))}
            </ul>
          )}
        </section>
        <section className="bg-emerald-50 border border-emerald-200 rounded-lg p-4">
          <h2 className="font-semibold text-emerald-900 mb-2">Consistently Strong Domains</h2>
          {strongDomains.length === 0 ? (
            <p className="text-sm text-emerald-800">None yet.</p>
          ) : (
            <ul className="text-sm text-emerald-900 space-y-1">
              {strongDomains.map((d) => (
                <li key={d.domainId}>
                  {d.title} — avg {Math.round(d.avgPct * 100)}%
                </li>
              ))}
            </ul>
          )}
        </section>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <section>
          <h2 className="font-semibold text-slate-900 mb-2">Qualifier-Word Accuracy</h2>
          <p className="text-xs text-slate-500 mb-2">Lowest accuracy first — reveals MOST/BEST/FIRST/LEAST/PRIMARY confusion patterns.</p>
          <div className="space-y-1">
            {qualifierStats.map((q) => (
              <div key={q.qualifier} className="flex justify-between text-sm border border-slate-200 rounded-md px-3 py-1.5 bg-white">
                <span>{q.qualifier}</span>
                <span className={q.accuracy < 0.7 ? 'text-rose-600 font-medium' : 'text-slate-700'}>
                  {q.correct}/{q.total} ({Math.round(q.accuracy * 100)}%)
                </span>
              </div>
            ))}
          </div>
        </section>
        <section>
          <h2 className="font-semibold text-slate-900 mb-2">Recall vs Scenario Accuracy</h2>
          <div className="space-y-1">
            {styleStats.map((s) => (
              <div key={s.style} className="flex justify-between text-sm border border-slate-200 rounded-md px-3 py-1.5 bg-white">
                <span className="capitalize">{s.style}</span>
                <span className={s.accuracy < 0.7 ? 'text-rose-600 font-medium' : 'text-slate-700'}>
                  {s.correct}/{s.total} ({Math.round(s.accuracy * 100)}%)
                </span>
              </div>
            ))}
          </div>
          {styleStats.length === 2 &&
            styleStats.find((s) => s.style === 'scenario')!.accuracy <
              styleStats.find((s) => s.style === 'recall')!.accuracy - 0.05 && (
              <p className="text-xs text-amber-700 mt-2">
                Scenario-based questions are pulling your score down disproportionately relative to recall questions.
              </p>
            )}
        </section>
      </div>

      <section>
        <h2 className="font-semibold text-slate-900 mb-2">Prioritized Study List (weakness × exam weight)</h2>
        <ol className="space-y-1">
          {prioritized.map((p, i) => (
            <li key={p.domainId} className="flex justify-between text-sm border border-slate-200 rounded-md px-3 py-2 bg-white">
              <span>
                {i + 1}. {p.title} <span className="text-slate-400">({Math.round(p.weight * 100)}% weight)</span>
              </span>
              <span className="text-slate-700">avg {Math.round(p.avgPct * 100)}%</span>
            </li>
          ))}
        </ol>
      </section>
    </div>
  );
}
