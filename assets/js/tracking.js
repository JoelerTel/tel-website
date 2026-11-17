/**
 * TEL Tracking — production-only
 * Loads GA4 (G-SPC4SZL39E) + Google Ads (AW-11469859729) + Hotjar (5349272)
 * ONLY when hostname is www.texaselectricandlight.com
 * No tags fire on Vercel preview deployments or localhost.
 */
(function () {
  if (location.hostname !== 'www.texaselectricandlight.com') return;

  /* ── Google tag (GA4 + Ads) ── */
  var gtagScript = document.createElement('script');
  gtagScript.async = true;
  gtagScript.src = 'https://www.googletagmanager.com/gtag/js?id=G-SPC4SZL39E';
  document.head.appendChild(gtagScript);

  window.dataLayer = window.dataLayer || [];
  function gtag() { dataLayer.push(arguments); }
  window.gtag = gtag;
  gtag('js', new Date());
  gtag('config', 'G-SPC4SZL39E');
  gtag('config', 'AW-11469859729');

  /* ── Hotjar ── */
  (function (h, o, t, j, a, r) {
    h.hj = h.hj || function () { (h.hj.q = h.hj.q || []).push(arguments); };
    h._hjSettings = { hjid: 5349272, hjsv: 6 };
    a = o.getElementsByTagName('head')[0];
    r = o.createElement('script'); r.async = 1;
    r.src = t + h._hjSettings.hjid + j + h._hjSettings.hjsv;
    a.appendChild(r);
  })(window, document, 'https://static.hotjar.com/c/hotjar-', '.js?sv=');

  /* ── Phone click event ── */
  document.addEventListener('click', function (e) {
    var el = e.target.closest('a[href^="tel:"]');
    if (!el) return;
    if (typeof window.gtag !== 'function') return;
    window.gtag('event', 'phone_click', {
      page_path: location.pathname,
      phone_number: el.getAttribute('href')
    });
    /* NOTE: Direct Ads conversion label bgd_CPXfgKYaEJHXoN0q removed per Nov 2026 audit.
       phone_click GA4 event is retained above. Re-add conversion here if re-approved. */
  });
})();
