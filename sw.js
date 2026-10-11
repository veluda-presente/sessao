/* Sessão a Dois: guarda o app no celular para funcionar sem internet.
   Ao publicar uma nova versão do app, aumente o número abaixo (v1, v2, v3...). */
const VERSAO = 'sessao-a-dois-v3';

const ARQUIVOS = [
  './',
  './index.html',
  './manifest.webmanifest',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './icons/maskable-512.png',
  './icons/apple-touch-icon.png',
  './icons/favicon.png',
  './icons/logo.png',
  './fonts/cg-500.woff2',
  './fonts/cg-600.woff2',
  './fonts/cg-500i.woff2',
  './fonts/cg-600i.woff2',
  './fonts/jo-400.woff2',
  './fonts/jo-500.woff2'
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(VERSAO).then(c => c.addAll(ARQUIVOS)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(chaves => Promise.all(chaves.filter(k => k !== VERSAO).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET' || new URL(req.url).origin !== location.origin) return;

  // Abrir o app (inclusive pela tag NFC): usa a cópia guardada, mesmo sem internet
  if (req.mode === 'navigate') {
    e.respondWith(
      caches.match('./index.html').then(guardado => {
        const daRede = fetch(req).then(r => {
          if (r && r.ok) caches.open(VERSAO).then(c => c.put('./index.html', r.clone()));
          return r;
        }).catch(() => guardado);
        return guardado || daRede;
      })
    );
    return;
  }

  e.respondWith(
    caches.match(req, { ignoreSearch: true }).then(guardado => guardado || fetch(req))
  );
});
