# HRT Daily — Google Play prep (subscription app)

Two products, one codebase:
- **Web** — pay once, own it: £19 / ~$19, sold via Payhip, on hrtdaily.com.
- **Google Play** — subscription: £3/mo (or local equivalent), the same PWA wrapped as an Android app.

This doc tracks what's needed to ship the Play version. The web pay-once product is separate and ships first.

## How the Android app works (TWA)
The Android app is a **Trusted Web Activity (TWA)** — a thin native wrapper that loads the live PWA (hrtdaily.com) full-screen with no browser UI. We do **not** rebuild the app natively; we package the existing web app.

Build it with one of:
- **PWABuilder** (pwabuilder.com) — paste the URL, download an Android package. Easiest.
- **Bubblewrap** (Google's CLI: `npm i -g @bubblewrap/cli`, then `bubblewrap init --manifest https://hrtdaily.com/manifest.webmanifest`).

## Readiness checklist
- [x] Valid web manifest (name, icons incl. 512 maskable, start_url, standalone, theme) — `manifest.webmanifest`
- [x] Service worker + offline — `sw.js`
- [x] HTTPS on a real domain — once `hrtdaily.com` is connected in Vercel
- [x] Manifest screenshots for a richer listing — added (narrow form factor)
- [x] Digital Asset Links file in place — `.well-known/assetlinks.json` (needs the fingerprint below)
- [x] Privacy policy URL — https://hrtdaily.com/privacy.html
- [ ] Google Play Developer account — **one-time $25**
- [ ] Decide the **package name** (currently placeholder `com.hrtdaily.app`)
- [ ] Build the signed `.aab` (PWABuilder/Bubblewrap)
- [ ] Paste the **app-signing SHA-256 fingerprint** into `.well-known/assetlinks.json` (from Play Console → Setup → App integrity, or Bubblewrap output), then redeploy — this hides the URL bar
- [ ] Store listing: icon (512), feature graphic (1024×500), screenshots, descriptions, content rating, **Data Safety** form, target audience
- [ ] Closed test → production review → launch
- [ ] Swap the landing-page "coming soon on Google Play" badge for the real store link (`index.html`, marked with a comment)

## ⚠️ The subscription is the real work
A £3/mo subscription has to be **enforced**, which the current app is not built for (it is deliberately account-free, local-only). To charge monthly on Play you need:
1. **Google Play Billing** for the subscription product (Play requires its own billing for in-app digital goods; it takes ~15%).
2. **User accounts + a backend** so entitlement ("is this person's subscription active?") follows them across devices and sessions. **Supabase** fits well (auth + a tiny table + an edge function to verify Play purchases via the Play Developer API / Real-time Developer Notifications).
3. A **paywall/gate** in the app that unlocks features when the subscription is active.

This is a separate build phase. The web pay-once product needs none of it.

## What I need from you to progress Play
- Confirm the **package name** (default `com.hrtdaily.app`).
- A **Google Play Developer account** ($25) so we can create the app + subscription product.
- Later: the **app-signing SHA-256 fingerprint** to finalise `assetlinks.json`.
- A decision on the **subscription backend** (recommend Supabase) when you're ready for phase 2.
