import { Link, useNavigate, useParams, Navigate } from 'react-router-dom';
import { getDomain, getTopic } from '../data/domains';
import { getTopicContent } from '../lib/registry';
import { markStudied } from '../lib/progressStore';
import { useProgress } from '../lib/useProgress';

export default function TopicLearnPage() {
  useProgress();
  const { domainId, topicId } = useParams();
  const navigate = useNavigate();
  const domain = domainId ? getDomain(domainId) : undefined;
  const topic = domainId && topicId ? getTopic(domainId, topicId) : undefined;
  const content = topicId ? getTopicContent(topicId) : undefined;

  if (!domain || !topic) return <Navigate to="/cissp" replace />;
  if (!content) {
    return (
      <div className="space-y-4">
        <Link to={`/cissp/domain/${domain.id}`} className="text-sm text-slate-500 hover:text-slate-700">
          ← {domain.title}
        </Link>
        <h1 className="text-2xl font-bold text-slate-900">{topic.title}</h1>
        <p className="text-slate-600">Content for this topic hasn't been written yet.</p>
      </div>
    );
  }

  return (
    <div className="max-w-3xl space-y-6">
      <Link to={`/cissp/domain/${domain.id}`} className="text-sm text-slate-500 hover:text-slate-700">
        ← {domain.title}
      </Link>
      <h1 className="text-2xl font-bold text-slate-900">{topic.title}</h1>

      <section>
        <h2 className="font-semibold text-slate-900 mb-2">Overview</h2>
        <p className="text-slate-700 whitespace-pre-line">{content.overview}</p>
      </section>

      <section className="bg-indigo-50 border border-indigo-100 rounded-lg p-4">
        <h2 className="font-semibold text-indigo-900 mb-2">How (ISC)² Wants You to Think About This</h2>
        <p className="text-indigo-950 whitespace-pre-line">{content.examFraming}</p>
      </section>

      <section>
        <h2 className="font-semibold text-slate-900 mb-2">Key Terms</h2>
        <div className="overflow-x-auto border border-slate-200 rounded-lg">
          <table className="w-full text-sm text-left">
            <thead className="bg-slate-100">
              <tr>
                <th className="px-3 py-2 font-medium text-slate-700">Term</th>
                <th className="px-3 py-2 font-medium text-slate-700">Definition</th>
              </tr>
            </thead>
            <tbody>
              {content.keyTerms.map((kt) => (
                <tr key={kt.term} className="border-t border-slate-200">
                  <td className="px-3 py-2 font-medium text-slate-900 align-top whitespace-nowrap">{kt.term}</td>
                  <td className="px-3 py-2 text-slate-700">{kt.definition}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <h2 className="font-semibold text-slate-900 mb-2">Scenario</h2>
        <p className="text-slate-700 bg-slate-100 rounded-lg p-4 whitespace-pre-line">{content.scenario}</p>
      </section>

      {content.comparisonTables?.map((table) => (
        <section key={table.caption}>
          <h2 className="font-semibold text-slate-900 mb-2">{table.caption}</h2>
          <div className="overflow-x-auto border border-slate-200 rounded-lg">
            <table className="w-full text-sm text-left">
              <thead className="bg-slate-100">
                <tr>
                  {table.headers.map((h) => (
                    <th key={h} className="px-3 py-2 font-medium text-slate-700">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {table.rows.map((row, i) => (
                  <tr key={i} className="border-t border-slate-200">
                    {row.map((cell, j) => (
                      <td key={j} className="px-3 py-2 text-slate-700 align-top">
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      ))}

      <section className="bg-rose-50 border border-rose-100 rounded-lg p-4">
        <h2 className="font-semibold text-rose-900 mb-2">Common Exam Traps</h2>
        <ul className="list-disc list-inside space-y-1 text-rose-950">
          {content.examTraps.map((trap, i) => (
            <li key={i}>{trap}</li>
          ))}
        </ul>
      </section>

      <button
        onClick={() => {
          markStudied(topic.id);
          navigate(`/cissp/domain/${domain.id}/topic/${topic.id}/quiz`);
        }}
        className="bg-slate-900 text-white px-5 py-2.5 rounded-md font-medium hover:bg-slate-700"
      >
        Mark as Studied → Take Quiz
      </button>
    </div>
  );
}
