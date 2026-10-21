// 언어 고르기: 처음 온 사람은 브라우저 언어가 한국어면 한국어 페이지로 보낸다.
// EN/한국어 링크를 한 번 누르면 그 선택을 기억하고 더는 자동으로 옮기지 않는다.
(function () {
  var KEY = 'tochi-lang';
  function saved() { try { return localStorage.getItem(KEY); } catch (e) { return null; } }
  function save(v) { try { localStorage.setItem(KEY, v); } catch (e) {} }

  document.addEventListener('click', function (e) {
    var link = e.target.closest && e.target.closest('[data-lang]');
    if (link) save(link.getAttribute('data-lang'));
  });

  var root = document.documentElement;
  var koPage = root.getAttribute('data-ko-page');
  if (root.lang !== 'en' || !koPage || saved()) return;
  var langs = navigator.languages && navigator.languages.length ? navigator.languages : [navigator.language || ''];
  if (String(langs[0]).toLowerCase().indexOf('ko') === 0) location.replace(koPage + location.hash);
})();
