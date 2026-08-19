/* ============================================================
   KARIS MIND — Shared layout: nav + footer
   js/layout.js

   Single source of truth for the site nav and footer.
   Injected into every page via:
     <div id="site-nav"></div>
     <div id="site-footer"></div>
   ============================================================ */

(function () {

  const NAV_HTML = `
<nav class="site-nav" role="navigation" aria-label="Main navigation">
  <div class="container">
    <div class="nav-inner">
      <a href="index.html" class="nav-logo">Karis <span>Mind</span></a>

      <ul class="nav-menu" role="list">

        <li class="nav-item">
          <button class="nav-trigger" aria-haspopup="true" data-page="instruments.html">
            Instruments
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true"><path d="M2 4l4 4 4-4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
          </button>
          <div class="mega-drop" style="min-width:520px">
            <div class="mega-col" style="min-width:230px">
              <div class="mega-col-label">Leadership &amp; Culture</div>
              <a class="mega-link" href="instruments.html#gold">
                <span class="mega-link-dot" style="background:var(--gold)"></span>
                <div>
                  <div class="mega-link-name">GOLD™</div>
                  <div class="mega-link-sub">Leadership assessment — four dimensions</div>
                </div>
              </a>
              <a class="mega-link" href="instruments.html#ocam">
                <span class="mega-link-dot" style="background:var(--teal)"></span>
                <div>
                  <div class="mega-link-name">OCAM™</div>
                  <div class="mega-link-sub">Culture diagnostic — seven subscales</div>
                </div>
              </a>
              <div class="mega-divider"></div>
              <div class="mega-section-label">Strategy</div>
              <a class="mega-link" href="instruments.html#strategy">
                <span class="mega-link-dot" style="background:var(--blue)"></span>
                <div>
                  <div class="mega-link-name">Strategy — 7Cs</div>
                  <div class="mega-link-sub">Strategic management operating system</div>
                </div>
              </a>
            </div>
            <div class="mega-col" style="min-width:200px">
              <div class="mega-col-label">Built-in Tools</div>
              <a class="mega-link" href="instruments.html#tools">
                <span class="mega-link-dot" style="background:var(--violet)"></span>
                <div>
                  <div class="mega-link-name">Cascade</div>
                  <div class="mega-link-sub">Workplan decomposition and execution</div>
                </div>
              </a>
              <a class="mega-link" href="instruments.html#tools">
                <span class="mega-link-dot" style="background:var(--cyan)"></span>
                <div>
                  <div class="mega-link-name">Meeting Toolkit</div>
                  <div class="mega-link-sub">Plan, capture, minutes, action points</div>
                </div>
              </a>
            </div>
          </div>
        </li>

        <li class="nav-item">
          <a href="practitioners.html" class="nav-trigger" data-page="practitioners.html">Practitioners</a>
        </li>

        <li class="nav-item">
          <a href="resources.html" class="nav-trigger" data-page="resources.html">Resources</a>
        </li>

      </ul>

      <div class="nav-right">
        <a href="https://app.karismind.com" class="btn-signin">Sign in</a>
        <a href="https://app.karismind.com" class="btn-signin">Sign in</a>
        <a href="contact.html" class="btn-nav-primary">Book a Demo</a>
      </div>

      <button class="nav-hamburger" id="hamBtn" aria-label="Open menu" aria-expanded="false">
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
          <path d="M3 6h16M3 11h16M3 16h16" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>
        </svg>
      </button>
    </div>
  </div>

  <div class="nav-mobile" id="mobileMenu">
    <div class="mob-label">Instruments</div>
    <a href="instruments.html#gold">GOLD™ — Leadership assessment</a>
    <a href="instruments.html#ocam">OCAM™ — Culture diagnostic</a>
    <a href="instruments.html#strategy">Strategy — 7Cs framework</a>
    <div class="mob-label">Tools</div>
    <a href="instruments.html#tools">Cascade</a>
    <a href="instruments.html#tools">Meeting Toolkit</a>
    <div class="mob-divider"></div>
    <a href="practitioners.html">Practitioners</a>
    <a href="resources.html">Resources</a>
    <a href="contact.html">Contact</a>
    <div class="mob-actions">
      <a href="https://app.karismind.com" class="btn-mo-ghost">Sign in</a>
      <a href="contact.html" class="btn-mo-solid">Book a Demo</a>
    </div>
  </div>
</nav>`;

  const FOOTER_HTML = `
<footer class="site-footer">
  <div class="container">
    <div class="footer-grid">
      <div>
        <a href="index.html" class="footer-logo">Karis <span>Mind</span></a>
        <p class="footer-tag">Organisational Transformation Intelligence. Built on 14 years of practice in Zambia's water sector.</p>
      </div>
      <div class="footer-col">
        <div class="footer-col-label">Instruments</div>
        <ul>
          <li><a href="instruments.html#gold">GOLD™ — Leadership</a></li>
          <li><a href="instruments.html#ocam">OCAM™ — Culture</a></li>
          <li><a href="instruments.html#strategy">Strategy — 7Cs</a></li>
          <li><a href="instruments.html#tools">Cascade &amp; Meeting Toolkit</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <div class="footer-col-label">Platform</div>
        <ul>
          <li><a href="practitioners.html">Become a practitioner</a></li>
          <li><a href="practitioners.html#certification">Certification tracks</a></li>
          <li><a href="resources.html">Resources</a></li>
          <li><a href="contact.html">Book a Demo</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <div class="footer-col-label">Account</div>
        <ul>
          <li><a href="https://app.karismind.com">Sign in</a></li>
          <li><a href="contact.html">Book a Demo</a></li>
          <li><a href="contact.html">Book a Demo</a></li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      <div class="footer-legal">
        &copy; 2026 Karis Technologies (Pty) Ltd.
        <a href="#">Privacy</a>
        <a href="#">Terms</a>
      </div>
      <div class="footer-badge">
        Published by <span>Divine Keys Publishing</span> &middot; Lusaka, Zambia
      </div>
    </div>
  </div>
</footer>`;

  /* Inject */
  const navEl    = document.getElementById('site-nav');
  const footerEl = document.getElementById('site-footer');
  if (navEl)    navEl.outerHTML    = NAV_HTML;
  if (footerEl) footerEl.outerHTML = FOOTER_HTML;

}());
