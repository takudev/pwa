self.addEventListener('fetch', function(){});
self.addEventListener('push', ev => {
  ev.waitUntil(
    self.registration.showNotification("title  message", {'body':"body message"})
  );
});