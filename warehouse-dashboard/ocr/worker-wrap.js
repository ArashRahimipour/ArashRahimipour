// Serves the English language data from a base64 text file (the host can't serve .gz), then starts the OCR worker.
(function () {
  var realFetch = self.fetch.bind(self);
  self.fetch = function (url, opts) {
    var u = String(url && url.url ? url.url : url);
    if (/eng\.traineddata(\.gz)?$/.test(u)) {
      var txtUrl = new URL('eng-traineddata-gz-base64.txt', self.location.href).href;
      return realFetch(txtUrl).then(function (r) {
        if (!r.ok) return r;
        return r.text().then(function (t) {
          var bin = atob(t.trim()), bytes = new Uint8Array(bin.length);
          for (var i = 0; i < bin.length; i++) bytes[i] = bin.charCodeAt(i);
          return new Response(bytes, { status: 200, headers: { 'Content-Type': 'application/octet-stream' } });
        });
      });
    }
    return realFetch(url, opts);
  };
  importScripts('worker.min.js');
})();
