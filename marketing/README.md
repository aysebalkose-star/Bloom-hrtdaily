# Marketing & store assets

A home for everything used to **sell and promote** HRT Daily — kept in the repo for version control and reuse. These files are **not part of the website** and are excluded from the live Vercel deploy via `.vercelignore`.

Add to these folders over time as the brand grows.

## Structure

### `payhip/` — the web product listing
- `01-cover.png`, `02-showcase.png` — product images (cover + feature showcase)
- `03-06-screen-*.png` — individual app screenshots for the gallery
- `HRT-Daily-Welcome-Guide.pdf` / `.txt` — the file buyers download after purchase
- `PRODUCT-LISTING.md` — product name, price, full description, tags, and step-by-step Payhip setup

Live product: https://payhip.com/b/1Rwq8 · wired into the site's "Get lifetime access" buttons.

### `pinterest/` — social distribution
- `pin-<slug>.png` — one 1000×1500 pin per blog post (upload to Pinterest, link to the matching article)
- `PINS-INDEX.md` — maps each pin → destination URL + suggested title/description
- `_contact-sheet.png` — overview of all pins

### `seo/` — content strategy
- `LONG-TAIL-CONTEXT.md` — the "tracking hormone intakes" keyword cluster + next post ideas

## Related docs in the repo root
- `PLAY.md` — Google Play (TWA) prep checklist
- `DEPLOY.md`, `LAUNCH.md` — deployment / launch notes

## Notes
- The raw app screenshots also live in `/shots/` (used by the landing page).
- When adding new blog posts, generate a matching pin and add it to `pinterest/` + `PINS-INDEX.md`.
