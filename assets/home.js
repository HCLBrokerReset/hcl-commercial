// HCL Commercial homepage: mobile menu and footer year only. No tracking, cookies or storage.
(function () {
  var toggle = document.querySelector('.menu-toggle');
  var nav = document.getElementById('navigation');
  if (toggle && nav) {
    var setOpen = function (open) {
      toggle.setAttribute('aria-expanded', String(open));
      nav.classList.toggle('open', open);
    };
    toggle.addEventListener('click', function () {
      setOpen(toggle.getAttribute('aria-expanded') !== 'true');
    });
    nav.addEventListener('click', function (e) {
      if (e.target.closest('a')) setOpen(false);
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
        setOpen(false);
        toggle.focus();
      }
    });
  }
  var year = document.querySelector('[data-year]');
  if (year) year.textContent = new Date().getFullYear();
})();
