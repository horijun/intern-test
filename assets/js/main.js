// シンプルな現在ページのナビ強調
(function () {
  try {
    var path = location.pathname.split('/').pop() || 'index.html';
    var links = document.querySelectorAll('.nav a');
    links.forEach(function (a) {
      var href = a.getAttribute('href');
      if ((path === '' && href === 'index.html') || href === path) {
        a.setAttribute('aria-current', 'page');
      }
    });
  } catch (e) {}
})();
