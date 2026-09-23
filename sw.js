const CACHE = 'hrtdaily-v3';
const ASSETS = ['./', './index.html', './app.html', './blog.html', './guide.html', './perimenopause-symptoms.html', './hrt-and-sleep.html', './which-hrt-patch-did-i-put-on.html', './support.js', './manifest.webmanifest', './icon-192.png', './icon-512.png', './og-image.png'];
self.addEventListener('install', e => { e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)).then(() => self.skipWaiting())); });
self.addEventListener('activate', e => { e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim())); });
self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  e.respondWith(caches.match(e.request, { ignoreSearch: true }).then(hit => hit || fetch(e.request).then(res => {
    const copy = res.clone(); caches.open(CACHE).then(c => c.put(e.request, copy)); return res;
  }).catch(() => caches.match('./index.html'))));
});
