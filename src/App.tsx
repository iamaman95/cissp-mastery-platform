import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Landing from './certsecure/Landing';

// The CISSP course (and its ~1,300-question bank) is lazy-loaded so the
// CERTsecure landing page stays lightweight and fast.
const CisspApp = lazy(() => import('./CisspApp'));

function CourseLoader() {
  return (
    <div className="grid min-h-screen place-items-center bg-slate-50">
      <div className="flex flex-col items-center gap-3 text-slate-500">
        <div className="h-8 w-8 animate-spin rounded-full border-2 border-slate-300 border-t-cyan-500" />
        <span className="text-sm font-medium">Loading CISSP Mastery…</span>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route
        path="/cissp/*"
        element={
          <Suspense fallback={<CourseLoader />}>
            <CisspApp />
          </Suspense>
        }
      />
    </Routes>
  );
}
