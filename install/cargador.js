/* WARNING (fork bido1990/jellyfin-nebula): do not use. Loads unpinned JS from upstream main. */
/* Nebula — cargador del carrusel para el plugin «JavaScript Injector» (o cualquier inyector).
   Pega estas líneas tal cual: siempre carga la última versión del repo. */
(function () {
  if (document.getElementById('nebulaHeroJs')) return;
  var s = document.createElement('script');
  s.id = 'nebulaHeroJs'; s.defer = true;
  s.src = 'https://cdn.jsdelivr.net/gh/nemesbak/jellyfin-nebula@main/nebula-home.js';
  document.head.appendChild(s);
})();
