# HRT Daily — Payhip listing kit

Everything here is ready to upload to Payhip. Follow the steps at the bottom.

---

## Product name
**HRT Daily — Menopause HRT Tracker (Lifetime Access)**

## Price
**$19** one-time (Payhip will show each buyer their local currency; it also handles EU/UK VAT for you).

## Short tagline (for the top of the listing)
Never guess your HRT again. A private, offline menopause HRT tracker — patches, pills, gels & pellets.

## Full description (paste into Payhip)
Menopause gives you enough to carry — which patch, which day, whether it's even working. **HRT Daily** quietly keeps track so your brain doesn't have to.

It's a simple, private tracker for your hormone therapy:

• **Today** — see every dose due today and log it in one tap
• **Plan** — tap the dates you take each treatment, so you never count days in your head again
• **Calendar** — your whole month at a glance, each treatment in its own colour
• **Journal** — a quiet daily note for how you're really feeling

Works for every kind of HRT — estrogen (oestrogen) patches, gels, tablets and pellets, plus progesterone and testosterone — on any schedule, from daily to twice-weekly to every 12 weeks.

**Completely private.** No account, no cloud, nothing uploaded. Everything you enter stays on your own device, and it works fully offline — even on a plane.

**Buy once, yours for life.** Use it in any browser on your phone or computer, and install it to your home screen like an app.

After checkout you'll receive a short welcome guide with your access link and simple install instructions.

_HRT Daily is a personal tracking tool, not a medical device, and does not provide medical advice. Always follow your prescriber's instructions._

## Tags / keywords
hrt tracker, menopause, hormone therapy, menopause tracker, hrt planner, estrogen, progesterone, perimenopause, patch tracker, medication tracker, menopause app, health tracker

---

## Files in this kit
**Product images (upload in this order — first one becomes the cover):**
1. `01-cover.png` — branded cover with price
2. `02-showcase.png` — the four screens (Today / Calendar / Plan / Journal)
3. `03-screen-today.png`
4. `04-screen-calendar.png`
5. `05-screen-plan.png`
6. `06-screen-journal.png`

**The file buyers download (the product itself):**
- `HRT-Daily-Welcome-Guide.pdf` (polished) — or `HRT-Daily-Welcome-Guide.txt` if you prefer plain text.

---

## Step-by-step: make it active on Payhip
1. Go to **payhip.com** → sign in → **Add new product** → **Digital product**.
2. **Upload the file** buyers receive: `HRT-Daily-Welcome-Guide.pdf`.
3. **Name:** HRT Daily — Menopause HRT Tracker (Lifetime Access). **Price:** 19 USD.
4. **Description:** paste the full description above.
5. **Product images:** upload `01-cover.png` first, then `02`–`06`.
6. (Settings) Turn on **VAT/tax handling** if offered, so Payhip collects it for you.
7. **Publish**, then copy the product link (looks like `https://payhip.com/b/XXXXX`).
8. **Send me that link** — I'll paste it into both "Get lifetime access" buttons on the site so checkout opens in a modal.

## ⚠️ One thing to line up first
The welcome guide tells buyers their app link is **https://hrtdaily.com**. Connect that domain in Vercel **before** you start selling, so the link works — or tell me your current live URL and I'll swap it into the guide for the interim.

---

## How access works (freemium — Lever B)
- The app is **free to try**: anyone can track **one treatment** free.
- Adding a **second treatment** shows an unlock screen (Buy → `payhip.com/b/1Rwq8`, or "Enter your code").
- After purchase, the buyer gets the **Welcome Guide** with the lifetime **unlock code** (`HRTDAILY-LIFETIME`) — they enter it once per device to unlock unlimited treatments.
- It's a *soft* gate (client-side): good enough for a $19 product; the enforced model is the future Google Play subscription.

**To change the unlock code:** update `CODE_HASH` in `/paywall.js` (sha-256 of the new code) and the code in this guide. Ask me and I'll regenerate both.
