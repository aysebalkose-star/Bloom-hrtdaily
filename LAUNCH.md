# HRT Daily — Launch Checklist

A practical, do-this-in-order checklist to take HRT Daily from repo → live → first sales.

---

## Phase 1 · Go live (½ hour)

- [ ] **Deploy to Vercel.** vercel.com → *Add New → Project* → import `Bloom-hrtdaily` (your repo).
      Framework preset **Other**, no build command, no output dir → **Deploy**.
- [ ] **Buy the domain** `hrtdaily.com` (Vercel → Project → Settings → Domains, or any registrar ~$11/yr).
- [ ] **Connect the domain** — add `hrtdaily.com` **and** `www.hrtdaily.com`; follow Vercel's DNS steps.
- [ ] **Test on a phone:** open the site, tap *Open the app*, add a treatment, log a dose, do a check-in,
      then *Add to Home Screen* and confirm it works offline (airplane mode).

## Phase 2 · Payment (Payhip)

- [ ] Create a **Payhip** account and add a product (digital product / "link" works — you're selling access to a web app).
- [ ] Set the price to **$19** (Payhip auto-converts for other countries).
- [ ] In the product's delivery/redirect, point buyers to **https://hrtdaily.com/app.html**
      (and/or email them the link + the install guide).
- [ ] Copy your real Payhip product URL, then **replace `https://payhip.com/YOUR-PRODUCT`** in `index.html`
      — it appears in **4 places**: two "Buy" buttons, the reviews link, and the `offers.url` in the JSON-LD.
      *(Paste the URL to me and I'll do this in one commit.)*
- [ ] Do one real **test purchase** end-to-end.

> **Decision to make:** the app is currently free to open at `/app.html` — anyone can use it without paying.
> That's fine for a "pay what feels fair / support us" model, but if you want the app *gated* behind
> purchase, that needs a small licensing step (e.g. a Payhip licence key check, or Gumroad). Tell me if
> you want that — it's a real feature, not a copy tweak.

## Phase 3 · Get found (SEO / AI search)

- [ ] **Google Search Console** → add property `hrtdaily.com` → verify → submit `https://hrtdaily.com/sitemap.xml`.
- [ ] **Bing Webmaster Tools** → same (also feeds ChatGPT/Copilot search).
- [ ] Test structured data at **search.google.com/test/rich-results** for `/`, `/guide.html`, `/perimenopause-symptoms.html`.
- [ ] Ask ChatGPT / Perplexity *"private menopause HRT tracker app"* a few weeks after launch to see if you're cited.
- [ ] (Optional) Replace the auto-generated `og-image.png` with a real screenshot of the app for nicer social shares.

## Phase 4 · Distribution — where your buyers actually are

**Be genuinely helpful first; these communities dislike hard selling. Answer questions, mention the free app where relevant, link the guides — not the buy page.**

**US-leaning**
- [ ] **Reddit — r/Menopause** (very large, US-heavy) and **r/perimenopause**. Read the rules; share the *guide*,
      not the product. A helpful comment linking `perimenopause-symptoms.html` beats an ad.
- [ ] **Facebook groups** — search "menopause support" / "perimenopause" groups; introduce the free tracker.
- [ ] **TikTok / Instagram Reels** — short "how I track my HRT" or "perimenopause symptom checklist" clips.

**UK-leaning**
- [ ] **Mumsnet** (Menopause board), UK menopause Facebook groups.
- [ ] Menopause hashtags on Instagram; comment helpfully on menopause creators' posts.

**Evergreen**
- [ ] Pinterest — pin the symptom checklist graphic (Pinterest indexes well for "menopause symptoms").
- [ ] Answer questions on **Quora** about tracking HRT / perimenopause and link the guide.

## Phase 5 · Keep the flywheel turning

- [ ] Publish **one new guide a month** (ideas below) — fresh, useful pages are what compound in Google *and* AI answers.
- [ ] Collect a few **reviews/testimonials** and add them to the landing page (replaces the current "reviews live on Payhip" section).
- [ ] Watch Search Console "Queries" to see what people actually search, then write to match.

### Guide ideas (high-intent, low-competition)
- Estradiol patch: how to use, change days, and track it
- HRT and sleep: why you wake at 3am (and what helps)
- Cyclical vs continuous HRT explained
- Testosterone for women: what it does and how it's prescribed
- Menopause weight & joint aches: tracking what actually changes

---

## Content still to finalise before promoting

| Item | Where | Status |
|---|---|---|
| Real Payhip URL | `index.html` (×4) | ⏳ placeholder |
| Price `$19` | `index.html`, JSON-LD | ✅ done |
| US + UK terminology | all pages | ✅ done |
| Two SEO guides | `/guide.html`, `/perimenopause-symptoms.html` | ✅ done |
| Real testimonials | `index.html` reviews section | ⏳ after first users |
| App screenshot as og-image | `og-image.png` | ⏳ optional |

> Reminder: HRT Daily is a personal tracking tool, **not a medical device**, and gives no medical advice.
> Keep that disclaimer on every page (it's already there) — it protects you and sets honest expectations.
