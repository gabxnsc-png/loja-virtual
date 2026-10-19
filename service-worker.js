const CACHE_NAME = "loja-virtual-v1";

const arquivos = [
    "./",
    "./index.html",
    "./api.js",
    "./spa.js",
    "./manifest.json"
];

self.addEventListener("install", (evento) => {
    evento.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            return cache.addAll(arquivos);
        })
    );
});

self.addEventListener("fetch", (evento) => {
    if (evento.request.method !== "GET") {
        return;
    }

    if (new URL(evento.request.url).origin !== self.location.origin) {
        return;
    }

    evento.respondWith(
        caches.match(evento.request).then((resposta) => {
            return resposta || fetch(evento.request);
        })
    );
});