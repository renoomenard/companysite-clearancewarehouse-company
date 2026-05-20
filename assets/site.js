/* ============================================================
   CLEARANCE WAREHOUSE COMPANY — site.js
   ============================================================ */

(function () {
  'use strict';

  /* --- NAV SCROLL BEHAVIOUR --- */
  const header = document.getElementById('site-header');
  if (header) {
    const onScroll = () => {
      header.classList.toggle('scrolled', window.scrollY > 60);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  /* --- HAMBURGER MENU --- */
  const hamburger = document.getElementById('hamburger');
  const overlay   = document.getElementById('mobile-overlay');
  const closeBtn  = document.getElementById('mobile-close');

  function openMenu() {
    hamburger && hamburger.classList.add('active');
    hamburger && hamburger.setAttribute('aria-expanded', 'true');
    overlay  && overlay.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
  function closeMenu() {
    hamburger && hamburger.classList.remove('active');
    hamburger && hamburger.setAttribute('aria-expanded', 'false');
    overlay  && overlay.classList.remove('open');
    document.body.style.overflow = '';
  }
  hamburger && hamburger.addEventListener('click', openMenu);
  closeBtn  && closeBtn.addEventListener('click', closeMenu);

  // Close on nav link click
  document.querySelectorAll('.mobile-nav-link').forEach(link => {
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
      const expanded = item.classList.contains('open');

      // Close all
      document.querySelectorAll('.faq-item.open').forEach(open => {
        open.classList.remove('open');
        open.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
      });

      // Open clicked if was closed
      if (!expanded) {
        item.classList.add('open');
        btn.setAttribute('aria-expanded', 'true');
      }
    });
  });

  /* --- COUNTRY SEARCH --- */
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

  /* --- BLOG ARCHIVE SEARCH (blog/index.html) --- */
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
      const target = document.querySelector(a.getAttribute('href'));
      if (target) {
        e.preventDefault();
        const offset = 80;
        const top = target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });

})();
