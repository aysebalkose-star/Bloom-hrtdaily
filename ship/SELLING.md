# Selling Bloom on Payhip & Etsy

You are selling **access to your hosted app** (a link), not the code. Recommended model: one-time purchase → buyer receives the app link + install guide.

## Option A (recommended): sell a "license + link" PDF/TXT
Buyers on both platforms receive `etsy-payhip/BUYER-GUIDE.txt` (customize it first!). Simple, and you can update the app for everyone at once.

## Payhip setup
1. payhip.com → Add Product → **Digital product**.
2. Upload `etsy-payhip/BUYER-GUIDE.txt` (or export it as a nicer PDF).
3. Set price, add screenshots of the app as product images.
4. Copy your product link into `index.html` (replace YOUR-PRODUCT) and redeploy.
5. Payhip handles checkout, VAT and delivery automatically.

## Etsy setup
1. Etsy → Add a listing → type **Digital files**.
2. Upload the same BUYER-GUIDE file (Etsy allows up to 5 files / 20MB each).
3. Category: "Digital Prints / Planners" style listings do well; tag: hrt tracker, menopause planner, health tracker app.
4. Etsy buyers download the file instantly after purchase.

## Option B: sell the whole app as files
Zip this `ship/` folder and upload the zip as the digital product — buyers self-host or open `index.html` locally. More technical for buyers; offline install features require them to host it. Option A is easier for your audience.

## Tips
- Take 3–5 screenshots (Today, Calendar, Check-in, Planner) for listings.
- Make the free landing page public and put the buy link on it — Etsy/Payhip listings can link back to it as a live demo? Note: Etsy discourages off-Etsy sales links in listings; keep the demo link only in the file buyers download or on Payhip.
- Consider a small free tier (landing + demo) and sell the "full personal license" link.
- Not medical advice disclaimer is already on the landing page — keep it in listings too.
