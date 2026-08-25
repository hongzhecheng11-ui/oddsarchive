const CACHE_NAME = "oddsarchive-v129-home-advantage";
const CORE_ASSETS = [
  "/",
  "/index.html",
  "/styles.css",
  "/app.js",
  "/assets/app-icon.svg?v=91",
  "/assets/app-icon-192.png",
  "/assets/app-icon-512.png",
  "/assets/app-icon-maskable-512.png",
  "/data/api-odds-pack.js",
  "/data/team-context-pack.js",
  "/data/match-statistics-pack.js",
  "/data/upset-candidate-audit.json",
  "/src/lib/i18n.js?v=13",
  "/src/lib/telemetry.js",
  "/src/lib/favorite-sync.js",
  "/src/lib/auth.js?v=4",
  "/src/lib/translations/leagues.js",
  "/src/lib/translations/teams.js",
  "/privacy.html",
  "/terms.html",
  "/account-deletion.html",
  "/legal.css",
  "/manifest.webmanifest"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(CORE_ASSETS))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (event) => {
  const request = event.request;
  const url = new URL(request.url);

  if (url.pathname.startsWith("/api/")) return;
  if (request.method !== "GET") return;

  if (
    request.mode === "navigate" ||
    url.pathname.endsWith(".html") ||
    url.pathname.endsWith(".css") ||
    url.pathname.endsWith(".js")
  ) {
    event.respondWith(
      fetch(request)
        .then((response) => {
          const clone = response.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(request, clone));
          return response;
        })
        .catch(() => caches.match(request))
    );
    return;
  }

  event.respondWith(
    caches.match(request).then((cached) => {
      if (cached) return cached;
      return fetch(request).then((response) => {
        const clone = response.clone();
        caches.open(CACHE_NAME).then((cache) => cache.put(request, clone));
        return response;
      });
    })
  );
});
