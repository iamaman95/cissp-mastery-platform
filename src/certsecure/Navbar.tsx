import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LogOut, Menu, ShieldCheck, UserCircle2, X } from 'lucide-react';
import { useAuth } from './AuthContext';

const links = [
  { label: 'Home', href: '#home' },
  { label: 'Courses', href: '#featured' },
  { label: 'Coming Soon', href: '#coming-soon' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'FAQ', href: '#faq' },
];

export default function Navbar({ onLogin }: { onLogin: () => void }) {
  const { user, isAuthed, logout } = useAuth();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass border-b border-cyber-cyan/15 py-2.5' : 'py-4'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5">
        <a href="#home" className="flex items-center gap-2.5">
          <span className="grid h-9 w-9 place-items-center rounded-lg bg-cyber-cyan/10 ring-1 ring-cyber-cyan/50 animate-pulse-glow">
            <ShieldCheck className="text-cyber-cyan" size={20} />
          </span>
          <span className="font-display text-xl font-extrabold tracking-wide">
            <span className="text-white">CERT</span>
            <span className="gradient-text">secure</span>
          </span>
        </a>

        <nav className="hidden items-center gap-7 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-silver/80 transition hover:text-cyber-cyan hover:text-glow-cyan"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          {isAuthed ? (
            <div className="flex items-center gap-3">
              <span className="flex items-center gap-2 rounded-full border border-cyber-cyan/30 bg-abyss/50 px-3 py-1.5 text-sm text-white">
                <UserCircle2 size={16} className="text-cyber-cyan" />
                {user?.displayName}
              </span>
              <button
                onClick={logout}
                className="grid h-9 w-9 place-items-center rounded-full border border-silver/20 text-silver/70 transition hover:border-cyber-red/50 hover:text-cyber-red"
                aria-label="Log out"
                title="Log out"
              >
                <LogOut size={16} />
              </button>
            </div>
          ) : (
            <button
              onClick={onLogin}
              className="rounded-full bg-gradient-to-r from-cyber-cyan to-tech-blue px-5 py-2 font-display text-sm font-bold text-abyss transition hover:shadow-[0_0_24px_-4px_rgba(0,217,255,0.8)]"
            >
              Login
            </button>
          )}
        </div>

        <button className="text-white md:hidden" onClick={() => setOpen((o) => !o)} aria-label="Menu">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden md:hidden"
          >
            <div className="glass mx-4 mt-3 flex flex-col gap-1 rounded-2xl border border-cyber-cyan/15 p-4">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-2.5 text-sm font-medium text-silver/85 transition hover:bg-cyber-cyan/10 hover:text-cyber-cyan"
                >
                  {l.label}
                </a>
              ))}
              <div className="mt-2 border-t border-silver/10 pt-3">
                {isAuthed ? (
                  <button
                    onClick={() => {
                      logout();
                      setOpen(false);
                    }}
                    className="flex w-full items-center gap-2 rounded-lg px-3 py-2.5 text-sm text-cyber-red"
                  >
                    <LogOut size={16} /> Log out ({user?.displayName})
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      onLogin();
                      setOpen(false);
                    }}
                    className="w-full rounded-lg bg-gradient-to-r from-cyber-cyan to-tech-blue py-2.5 font-display text-sm font-bold text-abyss"
                  >
                    Login
                  </button>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
