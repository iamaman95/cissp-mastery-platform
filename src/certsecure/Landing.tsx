import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ShieldCheck,
  Cloud,
  Building2,
  Network,
  Crosshair,
  GanttChartSquare,
  Lock,
  Star,
  ChevronDown,
  ArrowRight,
  Rocket,
  BrainCircuit,
  Infinity as InfinityIcon,
  Target,
  BellRing,
  Quote,
  Globe,
  Share2,
  AtSign,
  Mail,
} from 'lucide-react';
import CyberBackground from './CyberBackground';
import Navbar from './Navbar';
import LoginModal from './LoginModal';
import ReviewModal from './ReviewModal';
import { Reveal, StatCounter, accent, type Accent } from './ui';
import { liveCourse, comingSoon } from './data';
import { useReviews } from './reviewsStore';
import { useAuth } from './AuthContext';
import { useToast } from './Toast';

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  ShieldCheck,
  Cloud,
  Building2,
  Network,
  Crosshair,
  GanttChartSquare,
};

export default function Landing() {
  const [loginOpen, setLoginOpen] = useState(false);
  const [reviewOpen, setReviewOpen] = useState(false);
  const navigate = useNavigate();
  const { isAuthed, enroll } = useAuth();

  // Course is publicly accessible: anyone can start it. Signed-in users also
  // get it tracked as an enrollment.
  function startCourse() {
    if (isAuthed) enroll('cissp');
    navigate('/cissp');
  }

  const openLogin = () => setLoginOpen(true);

  return (
    <div id="home" className="relative min-h-screen overflow-x-hidden bg-abyss text-white">
      <CyberBackground />
      <div className="pointer-events-none fixed inset-0 -z-10 grid-overlay opacity-40" />
      {/* ambient radial glows */}
      <div className="pointer-events-none fixed -left-40 top-0 -z-10 h-[520px] w-[520px] rounded-full bg-cyber-cyan/10 blur-[120px]" />
      <div className="pointer-events-none fixed -right-40 top-[40%] -z-10 h-[520px] w-[520px] rounded-full bg-cyber-purple/10 blur-[120px]" />

      <Navbar onLogin={openLogin} />

      <main>
        <Hero onStart={startCourse} onLogin={openLogin} />
        <Stats />
        <Featured onStart={startCourse} onLogin={openLogin} />
        <ComingSoonSection />
        <Reviews onWriteReview={() => setReviewOpen(true)} onLogin={openLogin} />
        <Faq />
        <FinalCta onStart={startCourse} onLogin={openLogin} />
      </main>

      <Footer />

      <LoginModal open={loginOpen} onClose={() => setLoginOpen(false)} />
      <ReviewModal open={reviewOpen} onClose={() => setReviewOpen(false)} />
    </div>
  );
}

/* ---------------- Hero ---------------- */
function Hero({ onStart, onLogin }: { onStart: () => void; onLogin: () => void }) {
  return (
    <section className="relative flex min-h-screen items-center justify-center px-5 pt-24">
      <div className="mx-auto max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyber-cyan/30 bg-abyss/50 px-4 py-1.5 text-xs font-medium text-cyber-cyan"
        >
          <span className="h-2 w-2 animate-pulse rounded-full bg-neon-green" />
          Dedicated to cybersecurity &amp; network security certifications
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-display text-4xl font-black leading-[1.05] tracking-tight sm:text-6xl md:text-7xl"
        >
          Unlock Cybersecurity <span className="gradient-text text-glow-cyan">Mastery</span>.
          <br />
          Get Certified. Lead the Future.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mx-auto mt-6 max-w-2xl text-base text-silver/75 sm:text-lg"
        >
          Industry-trusted certification prep, powered by expert-led learning paths, exam-realistic
          question banks, and analytics that make you truly test-ready.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <button
            onClick={onStart}
            className="group flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyber-cyan to-tech-blue px-7 py-3.5 font-display text-sm font-bold text-abyss animate-pulse-glow"
          >
            <Rocket size={18} />
            Start CISSP Mastery
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </button>
          <a
            href="#featured"
            className="flex items-center gap-2 rounded-xl border border-cyber-cyan/40 bg-abyss/40 px-7 py-3.5 font-display text-sm font-bold text-cyber-cyan transition hover:bg-cyber-cyan/10"
          >
            Explore Courses
          </a>
        </motion.div>

        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          onClick={onLogin}
          className="mt-8 text-xs text-silver/50 underline-offset-4 transition hover:text-cyber-cyan hover:underline"
        >
          Already enrolled? Sign in to your workspace
        </motion.button>
      </div>

      <a
        href="#stats"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-cyber-cyan/60 transition hover:text-cyber-cyan"
        aria-label="Scroll down"
      >
        <ChevronDown className="animate-bounce" size={26} />
      </a>
    </section>
  );
}

/* ---------------- Stats ---------------- */
function Stats() {
  const stats = [
    { value: 1320, suffix: '+', label: 'Exam-Grade Questions' },
    { value: 66, suffix: '', label: 'Structured Modules' },
    { value: 98, suffix: '%', label: 'Reported Pass Confidence' },
    { value: 8, suffix: '', label: 'CISSP Domains Covered' },
  ];
  return (
    <section id="stats" className="relative px-5 py-20">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-4 md:grid-cols-4">
        {stats.map((s, i) => (
          <Reveal key={s.label} delay={i * 0.08}>
            <div className="glass rounded-2xl border-cyber-cyan/15 p-6 text-center transition hover:border-cyber-cyan/40 hover:shadow-[0_0_30px_-8px_rgba(0,217,255,0.5)]">
              <div className="font-display text-3xl font-black gradient-text sm:text-4xl">
                <StatCounter value={s.value} suffix={s.suffix} />
              </div>
              <div className="mt-2 text-xs font-medium uppercase tracking-wider text-silver/60">
                {s.label}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* ---------------- Featured course ---------------- */
function Featured({ onStart, onLogin }: { onStart: () => void; onLogin: () => void }) {
  const { isAuthed, isEnrolled } = useAuth();
  const enrolled = isEnrolled('cissp');

  const benefits = [
    { icon: BrainCircuit, title: 'Personalized Learning Paths', text: 'Adaptive remediation targets exactly the sub-topics you miss.' },
    { icon: Target, title: 'Real-World Case Studies', text: 'Scenario-based items that mirror the real (ISC)² exam style.' },
    { icon: InfinityIcon, title: 'Lifetime Access & Updates', text: 'Keep your progress and every future content refresh.' },
  ];

  return (
    <section id="featured" className="relative px-5 py-20">
      <div className="mx-auto max-w-6xl">
        <Reveal className="mb-12 text-center">
          <SectionTag>Featured Course</SectionTag>
          <h2 className="mt-3 font-display text-3xl font-black sm:text-4xl">
            Your first mission: <span className="gradient-text">CISSP Mastery</span>
          </h2>
        </Reveal>

        <div className="grid gap-6 lg:grid-cols-5">
          {/* main course card */}
          <Reveal className="lg:col-span-3">
            <div className="glass glow-border group relative h-full overflow-hidden rounded-3xl p-8">
              <div className="animate-shimmer pointer-events-none absolute inset-0 opacity-40" />
              <div className="relative">
                <div className="flex items-center gap-3">
                  <span className="grid h-12 w-12 place-items-center rounded-xl bg-cyber-cyan/10 ring-1 ring-cyber-cyan/40">
                    <ShieldCheck className="text-cyber-cyan" size={24} />
                  </span>
                  <div>
                    <span className="rounded-full bg-neon-green/15 px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wider text-neon-green ring-1 ring-neon-green/40">
                      ● Live
                    </span>
                    <div className="mt-1 font-mono-tech text-xs text-silver/60">{liveCourse.tag}</div>
                  </div>
                </div>

                <h3 className="mt-5 font-display text-2xl font-bold text-white">{liveCourse.name}</h3>
                <p className="mt-2 max-w-xl text-sm leading-relaxed text-silver/75">{liveCourse.description}</p>

                <div className="mt-6 grid grid-cols-3 gap-3">
                  {[
                    { k: `${liveCourse.modules}`, v: 'Modules' },
                    { k: `${liveCourse.questions}+`, v: 'Questions' },
                    { k: liveCourse.difficulty!, v: 'Level' },
                  ].map((m) => (
                    <div key={m.v} className="rounded-xl border border-cyber-cyan/15 bg-abyss/40 px-3 py-3 text-center">
                      <div className="font-display text-lg font-bold text-cyber-cyan">{m.k}</div>
                      <div className="text-[11px] uppercase tracking-wide text-silver/55">{m.v}</div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 flex flex-wrap items-center gap-4">
                  <button
                    onClick={onStart}
                    className="group/btn flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyber-cyan to-tech-blue px-6 py-3 font-display text-sm font-bold text-abyss transition hover:shadow-[0_0_28px_-4px_rgba(0,217,255,0.85)]"
                  >
                    {enrolled ? 'Continue Learning' : isAuthed ? 'Enroll Now' : 'Start CISSP Mastery'}
                    <ArrowRight size={16} className="transition-transform group-hover/btn:translate-x-1" />
                  </button>
                  <div className="flex items-center gap-2 text-xs text-silver/60">
                    <span className="grid h-7 w-7 place-items-center rounded-full bg-cyber-purple/20 font-display text-[11px] font-bold text-cyber-purple ring-1 ring-cyber-purple/40">
                      AP
                    </span>
                    Instructor · {liveCourse.instructor}
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          {/* benefit cards */}
          <div className="grid gap-4 lg:col-span-2">
            {benefits.map((b, i) => (
              <Reveal key={b.title} delay={i * 0.1}>
                <div className="glass group flex h-full items-start gap-4 rounded-2xl border-cyber-cyan/15 p-5 transition hover:-translate-y-1 hover:border-cyber-cyan/40 hover:shadow-[0_0_28px_-8px_rgba(0,217,255,0.5)]">
                  <span className="grid h-11 w-11 flex-none place-items-center rounded-xl bg-tech-blue/10 text-cyber-cyan ring-1 ring-tech-blue/30 transition group-hover:scale-110">
                    <b.icon size={20} />
                  </span>
                  <div>
                    <h4 className="font-display text-sm font-bold text-white">{b.title}</h4>
                    <p className="mt-1 text-xs leading-relaxed text-silver/65">{b.text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
            {!isAuthed && (
              <Reveal delay={0.3}>
                <button
                  onClick={onLogin}
                  className="w-full rounded-2xl border border-dashed border-cyber-cyan/30 px-4 py-3 text-xs text-silver/60 transition hover:border-cyber-cyan/60 hover:text-cyber-cyan"
                >
                  Sign in to track your progress across sessions →
                </button>
              </Reveal>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Coming soon ---------------- */
function ComingSoonSection() {
  const toast = useToast();
  return (
    <section id="coming-soon" className="relative px-5 py-20">
      <div className="mx-auto max-w-6xl">
        <Reveal className="mb-12 text-center">
          <SectionTag accent="purple">On the Roadmap</SectionTag>
          <h2 className="mt-3 font-display text-3xl font-black sm:text-4xl">
            More certifications, <span className="gradient-text">incoming</span>
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm text-silver/65">
            CERTsecure is expanding into a full arsenal of security and IT certification tracks.
          </p>
        </Reveal>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {comingSoon.map((c, i) => {
            const Icon = iconMap[c.icon] ?? Lock;
            const a = accent(c.accent as Accent);
            return (
              <Reveal key={c.id} delay={i * 0.07}>
                <div
                  className={`glass group relative h-full overflow-hidden rounded-2xl border-silver/10 p-6 transition hover:-translate-y-1.5 ${a.ring} ${a.glow}`}
                >
                  {/* locked badge */}
                  <div className="absolute right-4 top-4 flex flex-col items-center">
                    <span className="animate-chain text-silver/40">
                      <Lock size={18} />
                    </span>
                  </div>

                  <span className={`grid h-12 w-12 place-items-center rounded-xl bg-white/5 ring-1 ring-white/10 ${a.text} transition group-hover:scale-110`}>
                    <Icon size={24} />
                  </span>

                  <div className="mt-4 font-mono-tech text-[11px] uppercase tracking-wider text-silver/50">{c.tag}</div>
                  <h3 className="mt-1 font-display text-lg font-bold text-white">{c.name}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-silver/65">{c.description}</p>

                  <div className="mt-5 flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-cyber-purple/15 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider text-cyber-purple ring-1 ring-cyber-purple/30">
                      <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-cyber-purple" />
                      Coming {c.launch}
                    </span>
                    <button
                      onClick={() => toast(`We'll notify you when ${c.name} launches.`, 'info')}
                      className="flex items-center gap-1.5 rounded-lg border border-white/10 px-3 py-1.5 text-xs font-medium text-silver/80 transition hover:border-cyber-cyan/50 hover:text-cyber-cyan"
                    >
                      <BellRing size={13} /> Notify Me
                    </button>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Reviews ---------------- */
function Reviews({ onWriteReview, onLogin }: { onWriteReview: () => void; onLogin: () => void }) {
  const reviews = useReviews();
  const { isAuthed } = useAuth();
  const toast = useToast();

  function handleWrite() {
    if (!isAuthed) {
      toast('Please sign in to share your review.', 'info');
      onLogin();
      return;
    }
    onWriteReview();
  }

  return (
    <section id="reviews" className="relative px-5 py-20">
      <div className="mx-auto max-w-6xl">
        <Reveal className="mb-12 text-center">
          <SectionTag accent="green">Success Stories</SectionTag>
          <h2 className="mt-3 font-display text-3xl font-black sm:text-4xl">
            Trusted by <span className="gradient-text">certified professionals</span>
          </h2>
        </Reveal>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {reviews.map((r, i) => (
            <Reveal key={r.id} delay={(i % 3) * 0.08}>
              <div className="glass group h-full rounded-2xl border-white/10 p-6 transition hover:-translate-y-1 hover:border-neon-green/40 hover:shadow-[0_0_28px_-10px_rgba(57,255,20,0.5)]">
                <Quote className="text-cyber-cyan/40" size={22} />
                <p className="mt-3 text-sm leading-relaxed text-silver/80">“{r.testimonial}”</p>
                <div className="mt-4 flex gap-0.5">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star
                      key={s}
                      size={15}
                      className={`transition-transform group-hover:scale-110 ${
                        s <= r.rating ? 'text-neon-green' : 'text-silver/25'
                      }`}
                      fill={s <= r.rating ? 'currentColor' : 'none'}
                    />
                  ))}
                </div>
                <div className="mt-5 flex items-center gap-3 border-t border-white/10 pt-4">
                  <span className="grid h-10 w-10 flex-none place-items-center rounded-full bg-gradient-to-br from-cyber-cyan/30 to-cyber-purple/30 font-display text-xs font-bold text-white ring-1 ring-white/15">
                    {r.avatar}
                  </span>
                  <div>
                    <div className="text-sm font-semibold text-white">{r.name}</div>
                    <div className="text-[11px] text-silver/55">
                      {r.role} · <span className="text-cyber-cyan/80">{r.certification}</span>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-10 text-center">
          <button
            onClick={handleWrite}
            className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-neon-green/90 to-cyber-cyan px-6 py-3 font-display text-sm font-bold text-abyss transition hover:shadow-[0_0_28px_-4px_rgba(57,255,20,0.7)]"
          >
            <Star size={16} fill="currentColor" /> Share Your Success
          </button>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- FAQ ---------------- */
function Faq() {
  const items = [
    {
      q: 'How does CISSP Mastery work?',
      a: 'Each of the 66 topics has a learn page and a 10-question quiz. Pass with 8/10 to unlock the next topic; miss questions and you get a remediation screen with full rationales and a fresh question set on retake. Complete every domain to unlock five full-length simulation exams and a cross-exam analytics report.',
    },
    {
      q: 'Do I get lifetime access?',
      a: 'Yes. Your progress is saved and you keep access to the course and every future content update. No recurring subscription for enrolled courses.',
    },
    {
      q: 'What if I don’t pass my certification?',
      a: 'The platform is built to make that unlikely — analytics pinpoint your weak domains and question types before test day. The simulation exams mirror real domain weightings so you walk in knowing your readiness.',
    },
    {
      q: 'Are the questions like the real exam?',
      a: 'Around 80% are scenario-based and use the signature MOST / BEST / FIRST / LEAST / PRIMARY qualifiers, each with four plausible options and a documented rationale for every choice — closely modeling the real (ISC)² style.',
    },
    {
      q: 'What certifications are coming next?',
      a: 'AWS Security Specialty, CISM, PMP, Cloud Security Architect, and Red Team Operations are on the roadmap. Hit “Notify Me” on any coming-soon card to be first in line.',
    },
  ];
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="relative px-5 py-20">
      <div className="mx-auto max-w-3xl">
        <Reveal className="mb-10 text-center">
          <SectionTag>Questions</SectionTag>
          <h2 className="mt-3 font-display text-3xl font-black sm:text-4xl">
            Frequently <span className="gradient-text">asked</span>
          </h2>
        </Reveal>

        <div className="space-y-3">
          {items.map((it, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={it.q} delay={i * 0.05}>
                <div className={`glass overflow-hidden rounded-xl border ${isOpen ? 'border-cyber-cyan/40' : 'border-white/10'}`}>
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                  >
                    <span className="font-display text-sm font-semibold text-white">{it.q}</span>
                    <ChevronDown
                      size={18}
                      className={`flex-none text-cyber-cyan transition-transform ${isOpen ? 'rotate-180' : ''}`}
                    />
                  </button>
                  <motion.div
                    initial={false}
                    animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
                    className="overflow-hidden"
                  >
                    <p className="px-5 pb-5 text-sm leading-relaxed text-silver/70">{it.a}</p>
                  </motion.div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Final CTA ---------------- */
function FinalCta({ onStart, onLogin }: { onStart: () => void; onLogin: () => void }) {
  const { isAuthed } = useAuth();
  return (
    <section className="relative px-5 py-24">
      <Reveal className="mx-auto max-w-4xl">
        <div className="glass glow-border relative overflow-hidden rounded-3xl px-8 py-14 text-center">
          <div className="animate-shimmer pointer-events-none absolute inset-0 opacity-50" />
          <div className="pointer-events-none absolute left-1/2 top-0 h-40 w-40 -translate-x-1/2 rounded-full bg-cyber-cyan/20 blur-3xl" />
          <div className="relative">
            <h2 className="font-display text-3xl font-black sm:text-5xl">
              Ready to <span className="gradient-text text-glow-cyan">master cybersecurity?</span>
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-silver/75">
              Join 1,000+ security professionals turning certification anxiety into exam-day confidence.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <button
                onClick={onStart}
                className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyber-cyan to-cyber-purple px-8 py-3.5 font-display text-sm font-bold text-abyss animate-pulse-glow"
              >
                <Rocket size={18} /> Start Your Journey
              </button>
              {!isAuthed && (
                <button
                  onClick={onLogin}
                  className="rounded-xl border border-cyber-cyan/40 px-8 py-3.5 font-display text-sm font-bold text-cyber-cyan transition hover:bg-cyber-cyan/10"
                >
                  Sign In
                </button>
              )}
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

/* ---------------- Footer ---------------- */
function Footer() {
  const toast = useToast();
  const [email, setEmail] = useState('');
  return (
    <footer className="relative border-t border-white/10 px-5 py-12">
      <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2.5">
            <span className="grid h-9 w-9 place-items-center rounded-lg bg-cyber-cyan/10 ring-1 ring-cyber-cyan/50">
              <ShieldCheck className="text-cyber-cyan" size={20} />
            </span>
            <span className="font-display text-xl font-extrabold">
              <span className="text-white">CERT</span>
              <span className="gradient-text">secure</span>
            </span>
          </div>
          <p className="mt-4 max-w-sm text-sm text-silver/60">
            A dedicated platform for network security and cybersecurity certification preparation.
            Get certified. Lead the future.
          </p>
          <div className="mt-5 flex gap-3">
            {[Globe, Share2, AtSign, Mail].map((Icon, i) => (
              <button
                key={i}
                onClick={() => toast('Social links coming soon.', 'info')}
                className="grid h-9 w-9 place-items-center rounded-lg border border-white/10 text-silver/60 transition hover:-translate-y-0.5 hover:border-cyber-cyan/50 hover:text-cyber-cyan"
              >
                <Icon size={16} />
              </button>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-display text-sm font-bold text-white">Explore</h4>
          <ul className="mt-4 space-y-2 text-sm text-silver/60">
            <li><a href="#featured" className="transition hover:text-cyber-cyan">Courses</a></li>
            <li><a href="#coming-soon" className="transition hover:text-cyber-cyan">Coming Soon</a></li>
            <li><a href="#reviews" className="transition hover:text-cyber-cyan">Reviews</a></li>
            <li><a href="#faq" className="transition hover:text-cyber-cyan">FAQ</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-sm font-bold text-white">Stay in the loop</h4>
          <p className="mt-4 text-xs text-silver/60">New course drops &amp; exam tips.</p>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              if (!email.trim()) return;
              toast('Subscribed! Watch your inbox.', 'success');
              setEmail('');
            }}
            className="mt-3 flex overflow-hidden rounded-lg border border-white/10 focus-within:border-cyber-cyan/50"
          >
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="you@domain.com"
              className="min-w-0 flex-1 bg-abyss/50 px-3 py-2 text-sm text-white placeholder-silver/40 outline-none"
            />
            <button className="bg-gradient-to-r from-cyber-cyan to-tech-blue px-3 text-abyss" aria-label="Subscribe">
              <ArrowRight size={16} />
            </button>
          </form>
        </div>
      </div>

      <div className="mx-auto mt-10 flex max-w-6xl flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-xs text-silver/45 sm:flex-row">
        <span>© {new Date().getFullYear()} CERTsecure. All rights reserved.</span>
        <div className="flex gap-4">
          <button onClick={() => toast('Privacy policy coming soon.', 'info')} className="transition hover:text-silver">Privacy</button>
          <button onClick={() => toast('Terms coming soon.', 'info')} className="transition hover:text-silver">Terms</button>
        </div>
      </div>
    </footer>
  );
}

/* ---------------- shared bits ---------------- */
function SectionTag({ children, accent: acc = 'cyan' }: { children: React.ReactNode; accent?: 'cyan' | 'purple' | 'green' }) {
  const color =
    acc === 'purple' ? 'text-cyber-purple ring-cyber-purple/30' : acc === 'green' ? 'text-neon-green ring-neon-green/30' : 'text-cyber-cyan ring-cyber-cyan/30';
  return (
    <span className={`inline-block rounded-full bg-white/5 px-3 py-1 font-mono-tech text-[11px] uppercase tracking-[0.2em] ring-1 ${color}`}>
      {children}
    </span>
  );
}
