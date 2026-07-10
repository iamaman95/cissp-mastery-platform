import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Lock, Mail, ShieldCheck, User, X } from 'lucide-react';
import { DEMO_OTP, DEMO_PASSWORD, DEMO_USERNAME, useAuth } from './AuthContext';
import { useToast } from './Toast';

export default function LoginModal({
  open,
  onClose,
  onSuccess,
}: {
  open: boolean;
  onClose: () => void;
  onSuccess?: () => void;
}) {
  const { verifyCredentials, verifyOtp } = useAuth();
  const toast = useToast();
  const [step, setStep] = useState<'creds' | 'otp'>('creds');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [otp, setOtp] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    if (open) {
      setStep('creds');
      setUsername('');
      setPassword('');
      setOtp('');
      setError('');
    }
  }, [open]);

  function submitCreds(e: React.FormEvent) {
    e.preventDefault();
    if (verifyCredentials(username, password)) {
      setError('');
      setStep('otp');
      toast('OTP sent to your registered email', 'info');
    } else {
      setError('Invalid username or password.');
    }
  }

  function submitOtp(e: React.FormEvent) {
    e.preventDefault();
    if (verifyOtp(otp)) {
      toast('Access granted. Welcome back, operator.', 'success');
      onClose();
      onSuccess?.();
    } else {
      setError('Incorrect OTP code.');
    }
  }

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[90] flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="absolute inset-0 bg-abyss/80 backdrop-blur-sm" onClick={onClose} />
          <motion.div
            initial={{ scale: 0.92, y: 20, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.95, y: 10, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 300, damping: 26 }}
            className="glass glow-border relative w-full max-w-md rounded-2xl p-7"
          >
            <button
              onClick={onClose}
              className="absolute right-4 top-4 text-silver/70 transition hover:text-white"
              aria-label="Close"
            >
              <X size={20} />
            </button>

            <div className="mb-6 flex items-center gap-3">
              <div className="grid h-11 w-11 place-items-center rounded-xl bg-cyber-cyan/10 ring-1 ring-cyber-cyan/40">
                <ShieldCheck className="text-cyber-cyan" size={22} />
              </div>
              <div>
                <h3 className="font-display text-lg font-bold text-white">
                  {step === 'creds' ? 'Secure Access' : 'Verify Identity'}
                </h3>
                <p className="text-xs text-silver/70">
                  {step === 'creds' ? 'Authenticate to unlock your workspace' : 'Two-factor authentication'}
                </p>
              </div>
            </div>

            {step === 'creds' ? (
              <form onSubmit={submitCreds} className="space-y-4">
                <Field icon={<User size={16} />} label="Username">
                  <input
                    autoFocus
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="w-full bg-transparent text-white placeholder-silver/40 outline-none"
                    placeholder="student"
                  />
                </Field>
                <Field icon={<Lock size={16} />} label="Password">
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full bg-transparent text-white placeholder-silver/40 outline-none"
                    placeholder="••••••••••••"
                  />
                </Field>
                {error && <p className="text-sm text-cyber-red">{error}</p>}
                <button
                  type="submit"
                  className="w-full rounded-xl bg-gradient-to-r from-cyber-cyan to-tech-blue py-3 font-display text-sm font-bold text-abyss transition hover:shadow-[0_0_28px_-4px_rgba(0,217,255,0.8)]"
                >
                  Continue →
                </button>
              </form>
            ) : (
              <form onSubmit={submitOtp} className="space-y-4">
                <p className="flex items-center gap-2 rounded-lg bg-tech-blue/10 px-3 py-2 text-xs text-cyber-cyan ring-1 ring-tech-blue/30">
                  <Mail size={14} /> A 6-digit code was sent to your registered email.
                </p>
                <Field icon={<ShieldCheck size={16} />} label="OTP Code">
                  <input
                    autoFocus
                    inputMode="numeric"
                    maxLength={6}
                    value={otp}
                    onChange={(e) => setOtp(e.target.value.replace(/\D/g, ''))}
                    className="w-full bg-transparent font-mono-tech text-lg tracking-[0.5em] text-white placeholder-silver/30 outline-none"
                    placeholder="000000"
                  />
                </Field>
                {error && <p className="text-sm text-cyber-red">{error}</p>}
                <button
                  type="submit"
                  className="w-full rounded-xl bg-gradient-to-r from-cyber-cyan to-cyber-purple py-3 font-display text-sm font-bold text-abyss transition hover:shadow-[0_0_28px_-4px_rgba(179,0,255,0.8)]"
                >
                  Verify &amp; Enter
                </button>
              </form>
            )}

            <div className="mt-6 rounded-lg border border-dashed border-silver/20 bg-abyss/40 px-3 py-2 text-[11px] leading-relaxed text-silver/60">
              <span className="font-mono-tech text-cyber-cyan">demo access</span> · user{' '}
              <span className="font-mono-tech text-white">{DEMO_USERNAME}</span> · pass{' '}
              <span className="font-mono-tech text-white">{DEMO_PASSWORD}</span> · otp{' '}
              <span className="font-mono-tech text-white">{DEMO_OTP}</span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function Field({ icon, label, children }: { icon: React.ReactNode; label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-silver/60">{label}</span>
      <div className="flex items-center gap-2.5 rounded-xl border border-cyber-cyan/20 bg-abyss/50 px-3.5 py-2.5 transition focus-within:border-cyber-cyan/70 focus-within:shadow-[0_0_20px_-8px_rgba(0,217,255,0.7)]">
        <span className="text-cyber-cyan/70">{icon}</span>
        {children}
      </div>
    </label>
  );
}
