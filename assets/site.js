/* ============================================================
   CLEARANCE WAREHOUSE COMPANY — site.js
   Saffron design system: pill nav, full-screen drawer, search
   ============================================================ */

(function () {
  'use strict';

  /* --- MOBILE DRAWER --- */
  const hamburger = document.getElementById('hamburger');
  const overlay   = document.getElementById('mobile-overlay');
  const closeBtn  = document.getElementById('mobile-close');

  function openMenu() {
    if (!overlay) return;
    overlay.classList.add('open');
    hamburger && hamburger.setAttribute('aria-expanded', 'true');
    document.body.classList.add('no-scroll');
  }
  function closeMenu() {
    if (!overlay) return;
    overlay.classList.remove('open');
    hamburger && hamburger.setAttribute('aria-expanded', 'false');
    document.body.classList.remove('no-scroll');
  }
  hamburger && hamburger.addEventListener('click', () => {
    const isOpen = overlay && overlay.classList.contains('open');
    if (isOpen) closeMenu(); else openMenu();
  });
  closeBtn && closeBtn.addEventListener('click', closeMenu);

  // Close on nav link / mobile CTA tap
  document.querySelectorAll('.mobile-nav-link, .mobile-cta').forEach(link => {
    link.addEventListener('click', closeMenu);
  });

  // Close on Escape key
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeMenu();
  });

  /* --- FAQ ACCORDIONS --- */
  document.querySelectorAll('.faq-question').forEach(btn => {
    btn.addEventListener('click', () => {
      const item     = btn.closest('.faq-item');
      if (!item) return;
      const expanded = item.classList.contains('open');

      document.querySelectorAll('.faq-item.open').forEach(open => {
        open.classList.remove('open');
        const q = open.querySelector('.faq-question');
        q && q.setAttribute('aria-expanded', 'false');
      });

      if (!expanded) {
        item.classList.add('open');
        btn.setAttribute('aria-expanded', 'true');
      }
    });
  });

  /* --- COUNTRY SEARCH (home page) --- */
  const countrySearch = document.getElementById('country-search');
  const countryGrid   = document.getElementById('country-grid');
  const noResult      = document.getElementById('country-no-result');

  if (countrySearch && countryGrid) {
    countrySearch.addEventListener('input', () => {
      const q = countrySearch.value.toLowerCase().trim();
      const cards = countryGrid.querySelectorAll('.country-card');
      let visible = 0;

      cards.forEach(card => {
        const match = card.dataset.country.includes(q);
        card.style.display = match ? '' : 'none';
        if (match) visible++;
      });

      if (noResult) noResult.style.display = visible === 0 ? 'block' : 'none';
    });
  }

  /* --- BLOG ARCHIVE SEARCH --- */
  const blogSearch = document.getElementById('blog-search');
  const blogGrid   = document.getElementById('blog-grid');
  const blogNoRes  = document.getElementById('blog-no-result');

  if (blogSearch && blogGrid) {
    blogSearch.addEventListener('input', () => {
      const q     = blogSearch.value.toLowerCase().trim();
      const cards = blogGrid.querySelectorAll('.blog-card');
      let visible = 0;

      cards.forEach(card => {
        const text = card.textContent.toLowerCase();
        const show = !q || text.includes(q);
        card.style.display = show ? '' : 'none';
        if (show) visible++;
      });

      if (blogNoRes) blogNoRes.style.display = visible === 0 ? 'block' : 'none';
    });
  }

  /* --- SMOOTH SCROLL FOR ANCHOR LINKS --- */
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const href = a.getAttribute('href');
      if (href === '#' || href.length < 2) return;
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        const offset = 90;
        const top = target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });

})();
