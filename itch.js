(() => {
  var referrer, domain, uploadId;

  referrer = document.referrer;
  domain = referrer ? (referrer.match(/\/\/([^\/]+)/)?.[1]) : null;

  uploadId = window.location.href.match(/\/html\/(\d+)/)?.[1];

  console.log("Embedded on:", domain || "unknown-domain");
  if (uploadId) console.log("Upload ID:", uploadId);

})();
