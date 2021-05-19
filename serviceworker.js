const cacheName = 'FreeTime';
const cacheAssets = [
    'js/app.js',
    'index.html',
    'pages/courses.html',
    'pages/community.html',
    'pages/hobby_scrollpage.html',
    'pages/gear.html',
    'pages/profile.html',
];

self.addEventListener("install", e => {
    console.log("Service Worker: Installed");
    e.waitUntil(
        caches.open(cacheName).then(cache => {
            console.log('ServiceWorker: Caching files');
            cache.addAll(cacheAssets);
        })
        .then(() => self.skipWaiting())
    );
});

self.addEventListener("activate", e => {
    console.log("Service Worker: Activated");
    e.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cache => {
                    if(cache !== cacheName) {
                        console.log('Serviceworker: Clearing Old Cache');
                        return caches.delete(cache);
                    }
                })
            );
        })
    );
});

self.addEventListener("fetch", e => {
    console.log("Service Worker: Fetching");
    // e.respondWidth(
    //     fetch(e.request).then(res => {
    //         const resClone = res.clone();
    //         caches.open(cacheName).then(cache => {
    //             cache.put(e.request, resClone);
    //         });
    //         return res;
    //     }).catch(err => caches.match(e.request).then(res => res))
    // );
});

self.addEventListener("push", e => {
  	console.log("Service Worker: Pushing...");
})
