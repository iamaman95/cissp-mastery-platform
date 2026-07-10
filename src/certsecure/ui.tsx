import { useEffect, useRef, useState, type ReactNode } from 'react';
import { motion, useInView } from 'framer-motion';

/** Fade + slide up when scrolled into view. */
export function Reveal({
  children,
  delay = 0,
  className = '',
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/** Counts up to `value` when scrolled into view. */
export function StatCounter({ value, suffix = '' }: { value: number; suffix?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const dur = 1400;
    const start = performance.now();
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / dur);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(Math.round(value * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value]);

  return (
    <span ref={ref}>
      {n.toLocaleString()}
      {suffix}
    </span>
  );
}

const accentMap = {
  cyan: { text: 'text-cyber-cyan', ring: 'hover:border-cyber-cyan/60', glow: 'hover:shadow-[0_0_34px_-6px_rgba(0,217,255,0.55)]' },
  purple: { text: 'text-cyber-purple', ring: 'hover:border-cyber-purple/60', glow: 'hover:shadow-[0_0_34px_-6px_rgba(179,0,255,0.55)]' },
  green: { text: 'text-neon-green', ring: 'hover:border-neon-green/60', glow: 'hover:shadow-[0_0_34px_-6px_rgba(57,255,20,0.5)]' },
  blue: { text: 'text-tech-blue', ring: 'hover:border-tech-blue/60', glow: 'hover:shadow-[0_0_34px_-6px_rgba(0,128,255,0.55)]' },
  red: { text: 'text-cyber-red', ring: 'hover:border-cyber-red/60', glow: 'hover:shadow-[0_0_34px_-6px_rgba(255,0,110,0.5)]' },
} as const;

export type Accent = keyof typeof accentMap;
export const accent = (a: Accent) => accentMap[a];
