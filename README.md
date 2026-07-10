# CERTsecure

A premium, cybersecurity-focused **certification prep platform** with an immersive sci-fi aesthetic. CERTsecure is the umbrella brand; its first live course is **CISSP Mastery**, with AWS Security Specialty, CISM, PMP and more on the roadmap.

## The platform

- **Landing page (`/`)** — animated sci-fi hero, live stats, featured course, coming-soon course grid, customer reviews with star ratings, FAQ, and CTAs. Built with Framer Motion, a custom canvas cyber-background (digital rain + particle mesh), Orbitron/Inter fonts, and a neon/glass design system.
- **Auth (MVP)** — username + password with a simulated OTP second factor; session stored in the browser. Reviews require sign-in.
  - Demo login → user `student` · pass `CERTsecure@2026` · OTP `123456`
- **Reviews** — visitors can submit a star-rated testimonial (after login); it persists locally and appears instantly.
- **CISSP Mastery course (`/cissp`)** — the full course is integrated as the platform's first offering: all 8 (ISC)² domains, 66 topics, 1,320 questions, a learn → quiz → remediate loop, five weight-proportioned simulation exams, and cross-exam analytics. Lazy-loaded so the landing page stays fast.

## Tech stack

React + Vite + TypeScript, Tailwind CSS v4, React Router, Framer Motion, lucide-react, Recharts. No backend — course content ships as versioned JSON/TS data files and all state (progress, session, reviews) lives in `localStorage`.

## Run locally

```bash
npm install
npm run dev      # http://localhost:5175
npm run build    # production build to dist/
```

## Project structure

```
src/
  certsecure/          # CERTsecure landing, auth, reviews, animated UI
    Landing.tsx        # all landing sections
    Navbar.tsx  LoginModal.tsx  ReviewModal.tsx  Toast.tsx  CyberBackground.tsx
    AuthContext.tsx  reviewsStore.ts  data.ts  ui.tsx
  App.tsx              # router: "/" = landing, "/cissp/*" = course (lazy)
  CisspApp.tsx         # CISSP course shell + nested routes
  pages/               # CISSP course pages (dashboard, domain, quiz, exam, analytics)
  content/ data/ lib/  # CISSP topic content, question banks, engines
scripts/validate-bank.mjs   # validates all CISSP content + question banks
```

## Adding a course later

Add a card to `src/certsecure/data.ts` (`comingSoon` for a placeholder, or a new `live` course with a `route`), then mount its route in `App.tsx` — the same pattern used to integrate CISSP Mastery.

## Deployment & access

Auto-deploys to GitHub Pages on every push to `main` (`.github/workflows/deploy.yml`). See [DEPLOY.md](DEPLOY.md) for hosting and how to add a real password/login gate. Future roadmap: real database + auth, payments, email OTP, admin dashboard, certificate generation.
