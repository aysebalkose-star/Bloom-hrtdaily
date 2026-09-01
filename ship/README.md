# Bloom — HRT Tracker (shipping package)

A private, offline-capable PWA for tracking hormone replacement therapy.

## Files
- `index.html` — landing / marketing page (with install guides + Payhip buy buttons)
- `app.html` — the tracker app
- `support.js` — app runtime (required, keep next to the HTML files)
- `manifest.webmanifest`, `sw.js`, `icon-192.png`, `icon-512.png` — PWA install + offline files

## Before you publish
1. Open `index.html` in a text editor and replace `https://payhip.com/YOUR-PRODUCT` (2 places) with your real Payhip product link. Update the `$9` price text if needed.
2. Optional: change the app name in `manifest.webmanifest`.

## Deploy to Vercel via GitHub
1. Create a new GitHub repository (e.g. `bloom-hrt-tracker`).
2. Upload everything in this `ship/` folder to the repo **root** (GitHub → "Add file" → "Upload files").
3. Go to vercel.com → "Add New… → Project" → import the repo.
4. Framework preset: **Other**. No build command, no output directory. Deploy.
5. Your app is live at `https://<project-name>.vercel.app`. Set a nicer name under Project → Settings → Domains.

PWA install (the install button / Add to Home Screen) only works over **https** — it will work on the vercel.app address, not when opening the file directly.

## Updating
Push changes to GitHub — Vercel redeploys automatically. Bump `bloom-v1` to `bloom-v2` in `sw.js` whenever you update, so installed users get the new version.

⚠ User data lives in each visitor's browser (localStorage) — deploys never touch it.
