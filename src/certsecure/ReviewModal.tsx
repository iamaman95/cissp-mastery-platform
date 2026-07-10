import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Star, X } from 'lucide-react';
import { addReview } from './reviewsStore';
import { useToast } from './Toast';

export default function ReviewModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const toast = useToast();
  const [name, setName] = useState('');
  const [role, setRole] = useState('');
  const [cert, setCert] = useState('CISSP');
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [text, setText] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    if (open) {
      setName('');
      setRole('');
      setCert('CISSP');
      setRating(0);
      setHover(0);
      setText('');
      setError('');
    }
  }, [open]);

  function submit(e: React.FormEvent) {
    e.preventDefault();
    if (!name.trim() || !text.trim() || rating === 0) {
      setError('Please add your name, a rating, and a short testimonial.');
      return;
    }
    addReview({
      name: name.trim(),
      role: role.trim() || 'Security Professional',
      certification: cert,
      rating,
      testimonial: text.trim(),
    });
    toast('Thanks! Your review is now live.', 'success');
    onClose();
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
            className="glass glow-border-purple relative w-full max-w-lg rounded-2xl p-7"
          >
            <button
              onClick={onClose}
              className="absolute right-4 top-4 text-silver/70 transition hover:text-white"
              aria-label="Close"
            >
              <X size={20} />
            </button>

            <h3 className="font-display text-lg font-bold text-white">Share Your Success</h3>
            <p className="mb-5 text-xs text-silver/70">Tell future candidates how CERTsecure helped you.</p>

            <form onSubmit={submit} className="space-y-4">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <Input label="Name" value={name} onChange={setName} placeholder="Your name" autoFocus />
                <Input label="Role" value={role} onChange={setRole} placeholder="e.g. Security Analyst" />
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <label className="block">
                  <span className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-silver/60">
                    Certification
                  </span>
                  <select
                    value={cert}
                    onChange={(e) => setCert(e.target.value)}
                    className="w-full rounded-xl border border-cyber-purple/25 bg-abyss/60 px-3.5 py-2.5 text-white outline-none focus:border-cyber-purple/70"
                  >
                    <option>CISSP</option>
                    <option>AWS Security Specialty</option>
                    <option>CISM</option>
                    <option>PMP</option>
                    <option>Other</option>
                  </select>
                </label>
                <div>
                  <span className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-silver/60">
                    Rating
                  </span>
                  <div className="flex items-center gap-1 pt-1.5">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <button
                        key={s}
                        type="button"
                        onMouseEnter={() => setHover(s)}
                        onMouseLeave={() => setHover(0)}
                        onClick={() => setRating(s)}
                        className="transition-transform hover:scale-125"
                        aria-label={`${s} star${s > 1 ? 's' : ''}`}
                      >
                        <Star
                          size={26}
                          className={
                            (hover || rating) >= s ? 'text-neon-green' : 'text-silver/30'
                          }
                          fill={(hover || rating) >= s ? 'currentColor' : 'none'}
                        />
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <label className="block">
                <span className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-silver/60">
                  Testimonial
                </span>
                <textarea
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                  rows={3}
                  placeholder="What made the difference for you?"
                  className="w-full resize-none rounded-xl border border-cyber-purple/25 bg-abyss/60 px-3.5 py-2.5 text-white placeholder-silver/40 outline-none focus:border-cyber-purple/70"
                />
              </label>

              {error && <p className="text-sm text-cyber-red">{error}</p>}

              <button
                type="submit"
                className="w-full rounded-xl bg-gradient-to-r from-cyber-purple to-tech-blue py-3 font-display text-sm font-bold text-white transition hover:shadow-[0_0_28px_-4px_rgba(179,0,255,0.8)]"
              >
                Submit Review
              </button>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function Input({
  label,
  value,
  onChange,
  placeholder,
  autoFocus,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  autoFocus?: boolean;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-silver/60">{label}</span>
      <input
        autoFocus={autoFocus}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full rounded-xl border border-cyber-purple/25 bg-abyss/60 px-3.5 py-2.5 text-white placeholder-silver/40 outline-none focus:border-cyber-purple/70"
      />
    </label>
  );
}
