# CISSP Mastery Platform

A self-paced CISSP exam-prep web app covering all 8 (ISC)² 2024 domains, topic by topic, with a **learn → quiz → remediate → next** loop, five full-length simulation exams, and a cross-exam analytics report.

## What's inside

- **8 domains, 66 topics, 1,320 questions** — every topic has a learn page and a 20-question bank (two non-overlapping 10-question sets so remediation retakes never repeat).
- Questions mirror real CISSP style: ~80% scenario-based, deliberate use of MOST/BEST/FIRST/LEAST/PRIMARY qualifiers, four plausible options, and a documented rationale for **every** option.
- A dedicated 6-page **cryptography cluster** (symmetric, asymmetric/key exchange, hashing & digital signatures, PKI, key management, cryptanalysis).
- **Topic quiz engine** — pass threshold 8/10; on fail, a remediation screen surfaces missed questions with rationale, a "what to re-review" summary, and curated resource links, then a fresh question set on retake.
- **Progress tracking** — per-topic status, attempts, and remediation counts persisted to the browser (`localStorage`); domains unlock the final exams only when every topic is complete.
- **Final exams** — five independent 125-question exams, selected proportionally to the official domain weights, timed (~3h), with per-domain score breakdown.
- **Cross-exam analytics** — domain trend lines, consistently weak/strong domains, qualifier-word accuracy, recall-vs-scenario split, and a prioritized study list.

## Tech stack

React + Vite + TypeScript, Tailwind CSS v4, React Router, Recharts. No backend — the question bank ships as versioned JSON/TS data files and all learner progress lives in `localStorage`.

## Run locally

```bash
npm install
npm run dev      # dev server on http://localhost:5175
npm run build    # production build to dist/
npm run preview  # preview the production build
```

## Project structure

```
src/
  content/{dN}/{dN-tM}.ts        # topic learn-page content (exports `content: TopicContent`)
  data/questions/{dN}/{dN-tM}.json  # 20-question bank per topic (sets A & B)
  data/domains.ts               # domain taxonomy + official exam weights
  lib/registry.ts               # auto-discovers content & questions via import.meta.glob
  lib/progressStore.ts          # localStorage learner profile
  lib/examEngine.ts             # weight-proportioned exam generation
  lib/analytics.ts              # cross-exam analytics
  pages/                        # dashboard, domain, learn, quiz, remediation, exam, analytics
scripts/validate-bank.mjs       # validates all content + question banks against the schema
```

## Adding content

New topics register themselves automatically — drop a `{topicId}.ts` in `src/content/{domain}/` and a matching `{topicId}.json` in `src/data/questions/{domain}/` following the existing schema. No app-logic changes needed. Validate with:

```bash
node scripts/validate-bank.mjs
```

## Deployment & access

See [DEPLOY.md](DEPLOY.md) for hosting options and how to restrict access to a link with a password/login gate.
