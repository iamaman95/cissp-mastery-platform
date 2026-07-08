import { Routes, Route, Link, useLocation } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import DomainPage from './pages/DomainPage';
import TopicLearnPage from './pages/TopicLearnPage';
import TopicQuizPage from './pages/TopicQuizPage';
import RemediationPage from './pages/RemediationPage';
import ExamsHome from './pages/ExamsHome';
import ExamPage from './pages/ExamPage';
import ExamResultsPage from './pages/ExamResultsPage';
import AnalyticsPage from './pages/AnalyticsPage';

function NavBar() {
  const location = useLocation();
  const linkClass = (path: string) =>
    `px-3 py-2 rounded-md text-sm font-medium ${
      location.pathname === path ? 'bg-slate-900 text-white' : 'text-slate-700 hover:bg-slate-100'
    }`;
  return (
    <header className="border-b border-slate-200 bg-white sticky top-0 z-10">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center gap-4">
        <Link to="/" className="font-bold text-lg text-slate-900">
          CISSP Mastery
        </Link>
        <nav className="flex gap-2 ml-auto">
          <Link to="/" className={linkClass('/')}>
            Dashboard
          </Link>
          <Link to="/exams" className={linkClass('/exams')}>
            Final Exams
          </Link>
          <Link to="/analytics" className={linkClass('/analytics')}>
            Analytics
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50">
      <NavBar />
      <main className="max-w-6xl mx-auto px-4 py-8">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/domain/:domainId" element={<DomainPage />} />
          <Route path="/domain/:domainId/topic/:topicId/learn" element={<TopicLearnPage />} />
          <Route path="/domain/:domainId/topic/:topicId/quiz" element={<TopicQuizPage />} />
          <Route path="/domain/:domainId/topic/:topicId/remediation" element={<RemediationPage />} />
          <Route path="/exams" element={<ExamsHome />} />
          <Route path="/exam/:examSlot" element={<ExamPage />} />
          <Route path="/exam/:examSlot/results" element={<ExamResultsPage />} />
          <Route path="/analytics" element={<AnalyticsPage />} />
        </Routes>
      </main>
    </div>
  );
}
