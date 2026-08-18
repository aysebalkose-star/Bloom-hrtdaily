# Bloom — HRT Tracker

A gentle, private, offline-capable PWA for tracking hormone replacement therapy —
doses, monthly planning, symptoms and a journal. All data lives in the visitor's
own browser (localStorage); there is no account and no server.

**Live site:** https://hrtdaily.com · **App:** https://hrtdaily.com/app.html

---

## Files

| File | What it is |
|------|------------|
| `index.html` | Marketing landing page. **Static, SEO / AI-search optimised** — the text is in the HTML itself (no JavaScript needed to read it). |
| `app.html` | The tracker app (Claude-designed, rendered by `support.js`). Marked `noindex`. |
| `support.js` | App runtime (required — keep next to the HTML files). |
| `manifest.webmanifest`, `sw.js`, `icon-192.png`, `icon-512.png` | PWA install + offline files. |
| `og-image.png` | 1200×630 social-share image (Open Graph / Twitter). |
| `robots.txt`, `sitemap.xml` | Search + AI-crawler directives. |
| `vercel.json` | Security headers + caching for Vercel. |

---

## SEO / GEO / AEO — what was added and why

Claude Design exports a **client-rendered** page: the marketing copy only appears
after React runs in the browser. Most AI crawlers (ChatGPT/GPTBot, Perplexity,
ClaudeBot, Google AI Overviews) don't run JavaScript, so they'd have seen an
empty page. To fix that:

- **`index.html` is now static, semantic HTML** (`<h1>`/`<h2>`/`<article>`/`<section>`),
  so search engines and AI answer-engines read the real content directly. Looks
  identical to the original design and loads faster (better Core Web Vitals).
- **Full `<head>` metadata**: unique `<title>`, meta description, canonical URL,
  Open Graph + Twitter cards, `lang="en"`.
- **Structured data (JSON-LD)** in `index.html`: `SoftwareApplication` +
  `FAQPage` + `Organization`. This is what earns rich results in Google and
  makes the app quotable in AI answers.
- **`robots.txt`** explicitly welcomes AI crawlers (GPTBot, ClaudeBot,
  PerplexityBot, Google-Extended, Applebot, CCBot…) and points to the sitemap.
- **`sitemap.xml`** lists the homepage.
- **`app.html`** is `noindex` — it's the private tool, not a landing page.

---

## Before you publish

1. **Payhip link + price.** In `index.html`, replace `https://payhip.com/YOUR-PRODUCT`
   (3 places: two buy buttons + the reviews link) with your real Payhip product
   URL, and update the `£15` price text if needed. Also update the `offers` block
   in the JSON-LD near the top of `index.html`.
2. **Domain.** Everything is set to `https://hrtdaily.com`. If you use a different
   domain, search-and-replace it in: `index.html` (canonical, OG/Twitter, JSON-LD),
   `app.html` (canonical), `robots.txt`, and `sitemap.xml`.

---

## Deploy to Vercel

1. Push this repo to GitHub (already done if you're reading this there).
2. vercel.com → **Add New → Project** → import this repo.
3. Framework preset: **Other**. No build command, no output directory. Deploy.
4. Live at `https://<project>.vercel.app`.
5. **Custom domain:** Project → Settings → Domains → add `hrtdaily.com`
   (and `www.hrtdaily.com`). Follow Vercel's DNS instructions at your registrar.
6. Google Search Console → add the property → submit `https://hrtdaily.com/sitemap.xml`.

PWA install (Add to Home Screen) only works over **https**, i.e. on the deployed
site — not when opening the file directly.

---

## Updating

Push to GitHub → Vercel redeploys automatically. When you change any cached file,
bump the cache name in `sw.js` (`bloom-v2` → `bloom-v3`) so installed users get
the new version.

> ⚠ User data lives in each visitor's browser (localStorage). Deploys never touch it.
> Bloom is a personal tracking tool, **not a medical device**, and gives no medical advice.
