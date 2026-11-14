/*
 * Language selection for CONCEPTUAL s.r.o.
 *
 * - Clicking a language in the switcher remembers the choice (localStorage).
 * - The Czech home page (marked with data-lang-auto) sends a visitor to /en/ or /de/
 *   when they chose that language before, or, on a first visit, when their browser
 *   prefers it. Czech (and Slovak) browsers and all other languages stay on Czech.
 * - Explicit /en/ and /de/ URLs never redirect, so shared links open as sent.
 */
(function () {
  var KEY = 'lang';
  var PATHS = { cs: '', en: 'en/', de: 'de/' };

  function load() {
    try { return localStorage.getItem(KEY); } catch (e) { return null; }
  }

  function save(lang) {
    try { localStorage.setItem(KEY, lang); } catch (e) { /* storage blocked: choice lasts this page only */ }
  }

  function detect() {
    var list = navigator.languages && navigator.languages.length
      ? navigator.languages
      : [navigator.language || ''];
    for (var i = 0; i < list.length; i++) {
      var primary = String(list[i]).toLowerCase().split('-')[0];
      if (primary === 'cs' || primary === 'sk') return 'cs';
      if (primary === 'en' || primary === 'de') return primary;
    }
    return 'cs';
  }

  document.addEventListener('click', function (event) {
    var link = event.target.closest && event.target.closest('a[data-set-lang]');
    if (link) save(link.getAttribute('data-set-lang'));
  });

  if (!document.documentElement.hasAttribute('data-lang-auto')) return;
  // Let search engines index the Czech page instead of following the redirect.
  if (/bot|crawl|spider|slurp|lighthouse/i.test(navigator.userAgent)) return;

  var saved = load();
  var lang = Object.prototype.hasOwnProperty.call(PATHS, saved) ? saved : detect();
  if (lang !== 'cs') {
    location.replace(PATHS[lang] + location.search + location.hash);
  }
})();
