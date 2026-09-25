// sw.js - Basic PWA Service Worker

// 1. Install event
self.addEventListener('install', (event) => {
  // Forces the waiting service worker to become the active service worker
  self.skipWaiting();
});

// 2. Activate event
self.addEventListener('activate', (event) => {
  // Claims control of uncontrolled clients instantly
  event.waitUntil(self.clients.claim());
});

// 3. Fetch event (Required by Android Chrome for PWA installability)
self.addEventListener('fetch', (event) => {
  // Simply fetches assets directly from the network
  event.respondWith(fetch(event.request));
});