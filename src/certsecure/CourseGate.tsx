import { useState, type ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { Lock, ShieldCheck, ChevronLeft } from 'lucide-react';
import { useAuth } from './AuthContext';
import LoginModal from './LoginModal';

/**
 * Protects the CISSP course routes. Unauthenticated visitors (including direct
 * links / refreshes to /cissp/*) see a sign-in gate instead of the course.
 * Once authenticated, the children render in place — so a deep link resumes
 * at the same route after login.
 */
export default function CourseGate({ children }: { children: ReactNode }) {
  const { isAuthed } = useAuth();
  const [loginOpen, setLoginOpen] = useState(false);

  if (isAuthed) return <>{children}</>;

  return (
    <div className="relative grid min-h-screen place-items-center overflow-hidden bg-abyss px-5 text-white">
      <div className="pointer-events-none absolute inset-0 grid-overlay opacity-30" />
      <div className="pointer-events-none absolute -left-40 top-0 h-[420px] w-[420px] rounded-full bg-cyber-cyan/10 blur-[120px]" />
      <div className="pointer-events-none absolute -right-40 bottom-0 h-[420px] w-[420px] rounded-full bg-cyber-purple/10 blur-[120px]" />

      <div className="glass glow-border relative w-full max-w-md rounded-2xl p-8 text-center">
        <div className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-cyber-cyan/10 ring-1 ring-cyber-cyan/40 animate-pulse-glow">
          <Lock className="text-cyber-cyan" size={26} />
        </div>
        <h1 className="mt-5 font-display text-2xl font-bold">Members Only</h1>
        <p className="mt-2 text-sm text-silver/70">
          Sign in to access <span className="text-cyber-cyan">CISSP Mastery</span> and your workspace.
        </p>

        <button
          onClick={() => setLoginOpen(true)}
          className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyber-cyan to-tech-blue py-3 font-display text-sm font-bold text-abyss transition hover:shadow-[0_0_28px_-4px_rgba(0,217,255,0.8)]"
        >
          <ShieldCheck size={18} /> Sign In to Continue
        </button>

        <Link
          to="/"
          className="mt-4 inline-flex items-center gap-1.5 text-xs text-silver/60 transition hover:text-cyber-cyan"
        >
          <ChevronLeft size={14} /> Back to CERTsecure
        </Link>
      </div>

      <LoginModal open={loginOpen} onClose={() => setLoginOpen(false)} />
    </div>
  );
}
