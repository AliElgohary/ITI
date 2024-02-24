// this.addEventListener("")
const cacheName = "Mearn";
const assets = [
    "/index.html",
    "/about.html",
    "/App.js",
    "/manifest.webmanifest.json",
    "/icon-192x192.png",
    "/node_modules/bootstrap/dist/css/bootstrap.min.css",
    "/node_modules/bootstrap/dist/js/bootstrap.bundle.min.js",

];

self.addEventListener("install",(installedEvent)=>{
installedEvent.waitUntil(
    caches.open(cacheName).then((cache)=>{
        cache.addAll(assets).then().catch()
    }).catch(err=>console.log(err))
)
});

self.addEventListener("activate",(activatedEvent)=>{
activatedEvent.waitUntil(
    caches.keys().then((key)=>{
        return Promise.all(
            key.filter((k)=>k != cacheName).map((k)=>caches.delete(k))
        )
    })
)
});

self.addEventListener("fetch",(fetchEvent)=>{
fetchEvent.respondWith(
    caches.match(fetchEvent.request).then((res)=>{
        return res;
    }).catch(err=>console.log(err))
)
})