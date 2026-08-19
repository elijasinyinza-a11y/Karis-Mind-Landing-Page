/* ============================================================
   KARIS MIND — Nav behaviour
   js/nav.js

   Mobile hamburger toggle.
   Active nav state based on current page filename.
   ============================================================ */

(function () {

  /* ── Mobile hamburger ── */
  const hamBtn   = document.getElementById('hamBtn');
  const mobileMenu = document.getElementById('mobileMenu');

  if (hamBtn && mobileMenu) {
    hamBtn.addEventListener('click', function () {
      const open = mobileMenu.classList.toggle('open');
      this.setAttribute('aria-expanded', String(open));
    });

    /* Close on outside click */
    document.addEventListener('click', function (e) {
      if (!hamBtn.contains(e.target) && !mobileMenu.contains(e.target)) {
        mobileMenu.classList.remove('open');
        hamBtn.setAttribute('aria-expanded', 'false');
      }
    });
  }

  /* ── Active nav item ── */
  const page = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-trigger[data-page]').forEach(function (el) {
    if (el.dataset.page === page) {
      el.style.color = 'var(--ink)';
      el.style.fontWeight = '600';
    }
  });

  /* ── Audience tabs (index page) ── */
  document.querySelectorAll('.aud-tab').forEach(function (tab) {
    tab.addEventListener('click', function () {
      const a = this.dataset.a;
      document.querySelectorAll('.aud-tab').forEach(function (t) {
        t.classList.remove('active');
        t.setAttribute('aria-selected', 'false');
      });
      document.querySelectorAll('.aud-panel').forEach(function (p) {
        p.classList.remove('active');
      });
      this.classList.add('active');
      this.setAttribute('aria-selected', 'true');
      const panel = document.getElementById('ap-' + a);
      if (panel) panel.classList.add('active');
    });
  });

  /* ── Contact form (contact page) ── */
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const btn = this.querySelector('.btn-submit');
      btn.textContent = 'Message sent — we\'ll be in touch shortly.';
      btn.disabled = true;
      btn.style.background = 'var(--teal)';
    });
  }

}());
