# Getting Bloom into app stores

Bloom is a PWA — it already installs on Android, iPhone/iPad, Mac and Windows from the browser with NO store, no fees, no review process. Store listings are optional reach, not a requirement.

## Recommendation: phased
1. **Now**: ship the PWA on vercel.app. Sell via Payhip/Etsy. Zero cost.
2. **Next**: Google Play via PWABuilder (easy, $25 one-time).
3. **Later / maybe never**: Apple App Store ($99/year + Mac needed + strict review). Skip for now — iPhone users can already install via Safari's "Add to Home Screen", and Apple often rejects thin web wrappers.

## Google Play (Android) — via PWABuilder
1. Go to pwabuilder.com, enter your vercel.app URL.
2. It validates the manifest + service worker (already included in this package) and generates an Android package (a "Trusted Web Activity" — your real web app in a native shell).
3. Create a Google Play Console account ($25 one-time), upload the package, add screenshots/description, submit. Review usually takes a few days.
4. Updates: you just redeploy the website — the Play app always shows the live site. No re-submission unless you change icons/name.
- Health-app note: Play may ask you to fill in a Health apps declaration and a privacy policy URL. Add a simple privacy page ("all data stored locally, nothing collected") — see PRIVACY suggestion below.

## Microsoft Store (Windows) — also via PWABuilder
Same flow, free developer account is cheap, very low friction. Worth doing.

## Apple App Store (iPhone/iPad/Mac) — when you're ready
- Requires: Apple Developer Program $99/year, a Mac with Xcode, and packaging the PWA (PWABuilder can generate the iOS project too).
- Apple guideline 4.2 rejects apps that are "just a website" — you may need to add native-feeling extras (notifications, widgets) to pass.
- Meanwhile iOS users are fully served by Safari → Share → Add to Home Screen (guide is on your landing page).

## In-app reviews (already built in)
The app now shows a gentle "Enjoying Bloom?" card on the Today screen after 8 logged doses:
- "Leave a review" opens your review link (set it in app.html: search for YOUR-PRODUCT, or via Tweaks) — point it at your Payhip product page (Payhip has built-in reviews) or your Etsy listing's review page.
- "Maybe later" snoozes it 14 days; once tapped through, it never shows again.
- If you later list on Google Play, change the link to your Play Store page (market://details?id=... or the https play.google.com link) — store reviews matter most there.

## Do you need separate systems?
No. One codebase, one deployment:
- Website + PWA install: the vercel.app URL (all platforms, today)
- Google Play & Microsoft Store: thin wrappers around the SAME URL via PWABuilder
- Apple: same approach, just costlier — defer it.

## Also worth adding before Play submission
- A privacy policy page (required by Play). One paragraph is fine given no data leaves the device.
- 4–8 screenshots (phone-sized) for the listing.
