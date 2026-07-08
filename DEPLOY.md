# Deployment & Access Control

This is a static single-page app (Vite build → `dist/`). It has **no backend and no secrets** — all data ships in the bundle and learner progress is stored in the browser. That means access control has to be enforced at the **hosting layer**, not in the app.

Goal: **only people with the link can open it, and they must enter a password / sign in first.**

Plain **GitHub Pages cannot do this** on a free/Pro account — a Pages site is publicly viewable and search-indexable even if the source repo is private (private Pages requires GitHub Enterprise). Keep the code in a private GitHub repo, but deploy the **site** to a host that supports access gating.

## Recommended options (password / login required)

### Cloudflare Pages + Cloudflare Access (free email allowlist)
1. Connect the private GitHub repo to Cloudflare Pages.
   - Build command: `npm run build`
   - Output directory: `dist`
2. In **Zero Trust → Access → Applications**, add a self-hosted app for the `*.pages.dev` URL.
3. Add an **allowlist policy** (e.g., specific email addresses). Visitors get a one-time email code / login before the site loads.
   - Free for a small number of users. This is the closest match to "link + login required" at no cost.

### Netlify (site-wide password — paid)
1. Connect the private repo. Build `npm run build`, publish `dist`.
2. **Site settings → Access control → Visitor access → Password protection**, set a site password.
   - Simplest single shared password, but password protection is a paid (Pro) feature.

### Vercel (deployment protection — paid)
1. Import the private repo. Framework preset: Vite. Output `dist`.
2. **Settings → Deployment Protection → Password Protection** (paid), or Vercel Authentication to require a Vercel login.

## Just an unlisted link (no password)

If you later decide a password isn't needed, any of the above (or GitHub Pages) will serve the app at an unguessable URL. Add a no-index hint so search engines skip it — put this in `index.html`'s `<head>`:

```html
<meta name="robots" content="noindex, nofollow" />
```

Note: an unlisted URL is *obscure*, not *secure* — anyone the link is shared with can open it.

## Build settings (all hosts)

| Setting | Value |
| --- | --- |
| Build command | `npm run build` |
| Output directory | `dist` |
| Node version | 20+ |
| SPA routing | Serve `index.html` for all routes (add a `/* → /index.html 200` rewrite so deep links like `/exam/1` work) |
