const CACHE = 'hrtdaily-v12';
const ASSETS = ['./', './index.html', './app.html', './paywall.js', './blog.html', './guide.html', './perimenopause-symptoms.html', './hrt-and-sleep.html', './which-hrt-patch-did-i-put-on.html', './calming-your-mind-menopause.html', './life-after-menopause.html', './why-track-hormones-and-emotions.html', './menopause-journaling.html', './self-love-menopause.html', './best-hrt-tracker-app.html', './hrt-patch-change-reminder.html', './estradiol-patch-guide.html', './is-my-hrt-working.html', './hot-flashes-tracker.html', './how-to-keep-track-of-hrt-doses.html', './remember-progesterone-at-night.html', './twice-weekly-hrt-patch-schedule.html', './hrt-diary-for-your-review.html', './switching-hrt-how-to-track.html', './estrogen-gel-how-to-track.html', './about.html', './terms.html', './privacy.html', './refunds.html', './support.js', './manifest.webmanifest', './icon-192.png', './icon-512.png', './og-image.png', './shots/today.png', './shots/calendar.png', './shots/plan.png', './shots/journal.png'];
self.addEventListener('install', e => { e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)).then(() => self.skipWaiting())); });
self.addEventListener('activate', e => { e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim())); });
// HTML pages and app code (.js) use network-first so updates show immediately;
// images/fonts/manifest use cache-first for speed. Everything still works offline.
function isFresh(req) {
  if (req.mode === 'navigate' || req.destination === 'document') return true;
  const u = req.url.split('?')[0];
  return u.endsWith('.html') || u.endsWith('.js') || u.endsWith('/');
}
self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  if (isFresh(e.request)) {
    e.respondWith(fetch(e.request).then(res => {
      const copy = res.clone(); caches.open(CACHE).then(c => c.put(e.request, copy)); return res;
    }).catch(() => caches.match(e.request, { ignoreSearch: true }).then(hit => hit || caches.match('./index.html'))));
  } else {
    e.respondWith(caches.match(e.request, { ignoreSearch: true }).then(hit => hit || fetch(e.request).then(res => {
      const copy = res.clone(); caches.open(CACHE).then(c => c.put(e.request, copy)); return res;
    })));
  }
});
