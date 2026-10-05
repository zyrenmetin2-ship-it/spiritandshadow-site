(function () {
  var k = 'ss-lang', l = null, q = /[?&]lang=(en|ro)/.exec(location.search);
  try { l = localStorage.getItem(k); } catch (e) {}
  l = (q && q[1]) || l || ((navigator.language || '').toLowerCase().indexOf('ro') === 0 ? 'ro' : 'en');
  document.documentElement.dataset.lang = l; document.documentElement.lang = l;
  function mark() { document.querySelectorAll('.lang button').forEach(function (x) { x.classList.toggle('on', x.dataset.set === l); }); }
  document.addEventListener('DOMContentLoaded', function () {
    mark();
    document.querySelectorAll('.lang button').forEach(function (b) {
      b.onclick = function () { l = b.dataset.set; document.documentElement.dataset.lang = l; document.documentElement.lang = l; try { localStorage.setItem(k, l); } catch (e) {} mark(); };
    });
  });
})();
