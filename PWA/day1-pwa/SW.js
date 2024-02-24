const cacheName = "Mearn";
const assets = [
    "/index.html",
    "/pages/about.html",
    "/pages/recipes.html",
    "/pages/about.html",
    "/App.js",
    "/manifest.webmanifest.json",
    "/icon-192x192.png",
    "/node_modules/bootstrap/dist/css/bootstrap.min.css",
    "/node_modules/bootstrap/dist/js/bootstrap.bundle.min.js",

];

this.addEventListener("install",(installedEvent)=>{
installedEvent.waitUntil(
    caches.open(cacheName).then((cache)=>{
        console.log("Installed");
        cache.all(assets).then().catch()
    }).catch(err=>console.log(err))
)
});

this.addEventListener("activate",(activatedEvent)=>{
activatedEvent.waitUntil(
    caches.keys().then((key)=>{
        console.log("activated");
        return Promise.all(
            key.filter((k)=>k != cacheName).map((k)=>caches.delete(k))
        )
    })
)
});


this.addEventListener("fetch", (fetchEvent) => {
    fetchEvent.respondWith(
        caches.match(fetchEvent.request).then((res) => {
            return res;
        }).catch(err => console.log(err))
    )
})
