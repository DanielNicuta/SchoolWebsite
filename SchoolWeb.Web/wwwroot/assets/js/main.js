/* wwwroot/assets/js/main.js — MVC-safe + full inits */
(function () {
  'use strict';

  // Helpers
  const $ = (sel, all = false) => {
    sel = sel.trim();
    return all ? Array.from(document.querySelectorAll(sel)) : document.querySelector(sel);
  };
  const on = (type, sel, handler, all = false) => {
    const el = $(sel, all);
    if (!el) return;
    (Array.isArray(el) ? el : [el]).forEach(e => e && e.addEventListener(type, handler));
  };

  // Header scrolled toggle
  const header = $('#header');
  const onScrollHeader = () => {
    if (!header) return;
    header.classList.toggle('header-scrolled', window.scrollY > 100);
  };
  window.addEventListener('load', onScrollHeader);
  document.addEventListener('scroll', onScrollHeader);

  // Back-to-top
  const backToTop = $('.back-to-top');
  const toggleBackToTop = () => {
    if (!backToTop) return;
    backToTop.classList.toggle('active', window.scrollY > 100);
  };
  window.addEventListener('load', toggleBackToTop);
  document.addEventListener('scroll', toggleBackToTop);

  // Mobile nav toggle
  on('click', '.mobile-nav-toggle', function () {
    const navbar = $('#navbar');
    if (!navbar) return;
    navbar.classList.toggle('navbar-mobile');
    this.classList.toggle('bi-list');
    this.classList.toggle('bi-x');
  });

  // Mobile nav dropdowns
  on('click', '.navbar .dropdown > a', function (e) {
    const navbar = $('#navbar');
    if (!navbar || !navbar.classList.contains('navbar-mobile')) return;
    e.preventDefault();
    const next = this.nextElementSibling;
    if (next) next.classList.toggle('dropdown-active');
  }, true);

  // Smooth scroll for links with .scrollto
  const scrollto = (el) => { if (el) window.scrollTo({ top: el.offsetTop, behavior: 'smooth' }); };
  on('click', '.scrollto', function (e) {
    const target = $(this.hash);
    if (target) {
      e.preventDefault();
      const navbar = $('#navbar');
      if (navbar && navbar.classList.contains('navbar-mobile')) {
        navbar.classList.remove('navbar-mobile');
        const tgl = $('.mobile-nav-toggle');
        if (tgl) { tgl.classList.add('bi-list'); tgl.classList.remove('bi-x'); }
      }
      scrollto(target);
    }
  }, true);

  // Active nav on scroll
  const navLinks = $('#navbar .scrollto', true) || [];
  const setActive = () => {
    const pos = window.scrollY + 200;
    navLinks.forEach(link => {
      if (!link.hash) return;
      const section = $(link.hash);
      if (!section) return;
      const inView = pos >= section.offsetTop && pos <= section.offsetTop + section.offsetHeight;
      link.classList.toggle('active', inView);
    });
  };
  window.addEventListener('load', setActive);
  document.addEventListener('scroll', setActive);

  // AOS / GLightbox / Swiper
  if (typeof AOS !== 'undefined') AOS.init({ duration: 600, easing: 'ease-in-out', once: true, mirror: false });
  if (typeof GLightbox !== 'undefined') GLightbox({ selector: '.glightbox' });
  if (typeof Swiper !== 'undefined') {
    const swipers = $('.swiper', true) || [];
    swipers.forEach(el => { new Swiper(el, { speed: 400, loop: true, autoplay: { delay: 5000, disableOnInteraction: false }, pagination: { el: el.querySelector('.swiper-pagination'), clickable: true } }); });
  }

  // ✅ PureCounter (numbers animation) — requires <span data-purecounter-...>
  try { if (typeof PureCounter !== 'undefined') { /* eslint-disable no-new */ new PureCounter(); } } catch { /* ignore */ }

  // ✅ Isotope (filterable grids)
  // Mark your grid with: data-isotope-container, and filter buttons with data-isotope-filter="*|.class"
  if (typeof Isotope !== 'undefined') {
    const container = $('[data-isotope-container]');
    if (container) {
      const iso = new Isotope(container, {
        itemSelector: '[data-isotope-item]',
        layoutMode: 'fitRows'
      });
      on('click', '[data-isotope-filter]', function (e) {
        e.preventDefault();
        const filter = this.getAttribute('data-isotope-filter') || '*';
        iso.arrange({ filter });
        // active class on buttons
        const btns = $('[data-isotope-filter]', true) || [];
        btns.forEach(b => b.classList.remove('filter-active'));
        this.classList.add('filter-active');
      }, true);
    }
  }

  // Preloader (optional)
  const preloader = $('#preloader');
  if (preloader) window.addEventListener('load', () => { preloader.style.display = 'none'; });
})();
