# Deploying HRT Daily

The site is a **static** set of files at the repo root — no build step. Vercel
just serves them. Framework preset: **Other**. No build command. No output dir.

## One-time setup (Vercel)
1. vercel.com → **Add New → Project** → import **`Bloom-hrtdaily`**.
2. Framework preset **Other** → **Deploy**.
3. **Settings → Deployment Protection → turn OFF Vercel Authentication**
   (otherwise the `*.vercel.app` URL asks visitors to log in).
4. **Settings → Domains** → add `hrtdaily.com` and `www.hrtdaily.com`, follow the DNS steps.

## How updates go live
Every push to `main` auto-deploys. That's it — change files, push, done.

> **Important:** the repo must be **public** for auto-deploys to work on Vercel's
> free (Hobby) plan. On a private repo, Hobby **blocks** any deploy whose commit
> author isn't the Vercel account owner (this project is pushed to by an
> assistant), so deployments show as **BLOCKED**. Making the repo public fixes
> this permanently. (Keeping it private instead needs Vercel **Pro**.)
> The app is fully client-side, so a public repo exposes nothing the live site doesn't.

## If a deploy shows BLOCKED
- Confirm the repo is **Public** (GitHub → repo → Settings → Danger Zone).
- Then Vercel → project → latest deployment → **Redeploy** (a fresh deploy picks
  up the public setting; older blocked ones don't retro-unblock).

## Housekeeping
- Live project: **`hrtdaily`**. A duplicate `hrt-daily` exists — keep one, delete the other.
- An old **`bloom-hrtdaily`** Vercel project was deleted; any `bloom-hrtdaily.vercel.app`
  link (e.g. in GitHub's Deployments/Environments) is dead history and can be ignored/removed.

## Before promoting for sales
- Replace `https://payhip.com/YOUR-PRODUCT` in `index.html` (4 places) with your real Payhip URL.
- Submit `https://hrtdaily.com/sitemap.xml` in Google Search Console.
