import { useEffect, useRef } from 'react';

/**
 * Full-viewport canvas: subtle "digital rain" columns plus drifting glow
 * particles. Fixed behind all content, pointer-events none, and it pauses
 * for users who prefer reduced motion.
 */
export default function CyberBackground() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let w = 0;
    let h = 0;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);

    const glyphs = 'アカサタナ01ABCDEF{}<>/\\#$%*+=CISSP'.split('');
    let columns: { x: number; y: number; speed: number; len: number }[] = [];
    let particles: { x: number; y: number; vx: number; vy: number; r: number; hue: number }[] = [];

    function setup() {
      w = canvas!.clientWidth;
      h = canvas!.clientHeight;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas!.width = Math.floor(w * dpr);
      canvas!.height = Math.floor(h * dpr);
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);

      const colSpacing = 22;
      const colCount = Math.floor(w / colSpacing);
      columns = Array.from({ length: colCount }, (_, i) => ({
        x: i * colSpacing + 6,
        y: Math.random() * -h,
        speed: 0.6 + Math.random() * 1.4,
        len: 6 + Math.floor(Math.random() * 14),
      }));

      const pCount = Math.min(70, Math.floor((w * h) / 26000));
      particles = Array.from({ length: pCount }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
        r: 0.6 + Math.random() * 1.8,
        hue: Math.random() > 0.5 ? 190 : 280, // cyan-ish or purple-ish
      }));
    }

    let raf = 0;
    function frame() {
      ctx!.clearRect(0, 0, w, h);

      // digital rain
      ctx!.font = '13px "Fira Code", monospace';
      for (const c of columns) {
        for (let k = 0; k < c.len; k++) {
          const yy = c.y - k * 16;
          if (yy < -16 || yy > h + 16) continue;
          const head = k === 0;
          const alpha = head ? 0.85 : Math.max(0, 0.5 - k * 0.045);
          ctx!.fillStyle = head
            ? `rgba(180, 255, 255, ${alpha})`
            : `rgba(0, 217, 255, ${alpha})`;
          ctx!.fillText(glyphs[(Math.floor(yy + c.x) % glyphs.length + glyphs.length) % glyphs.length], c.x, yy);
        }
        c.y += c.speed * 2.4;
        if (c.y - c.len * 16 > h) {
          c.y = Math.random() * -120;
          c.speed = 0.6 + Math.random() * 1.4;
          c.len = 6 + Math.floor(Math.random() * 14);
        }
      }

      // drifting particles + faint links
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = w;
        if (p.x > w) p.x = 0;
        if (p.y < 0) p.y = h;
        if (p.y > h) p.y = 0;
        ctx!.beginPath();
        ctx!.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx!.fillStyle = `hsla(${p.hue}, 100%, 65%, 0.55)`;
        ctx!.fill();
        for (let j = i + 1; j < particles.length; j++) {
          const q = particles[j];
          const dx = p.x - q.x;
          const dy = p.y - q.y;
          const d2 = dx * dx + dy * dy;
          if (d2 < 120 * 120) {
            ctx!.strokeStyle = `rgba(0, 217, 255, ${0.12 * (1 - d2 / 14400)})`;
            ctx!.lineWidth = 1;
            ctx!.beginPath();
            ctx!.moveTo(p.x, p.y);
            ctx!.lineTo(q.x, q.y);
            ctx!.stroke();
          }
        }
      }

      raf = requestAnimationFrame(frame);
    }

    setup();
    if (reduced) {
      // draw a single static frame
      frame();
      cancelAnimationFrame(raf);
    } else {
      frame();
    }

    const onResize = () => {
      cancelAnimationFrame(raf);
      setup();
      if (!reduced) frame();
    };
    window.addEventListener('resize', onResize);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return (
    <canvas
      ref={ref}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 h-full w-full opacity-60"
    />
  );
}
