/* Shared chrome (utility bar, nav, footer) — injected on every page.
   Keeps the 8 pages in lockstep without a build step. */
(function(){
  // Alphabetized dropdowns
  const DEPTS_ALPHA = [
    { slug:'academics',                  name:'Academics' },
    { slug:'adcl',                       name:'ADCL' },
    { slug:'ayush',                      name:'AYUSH' },
    { slug:'chitradurga',                name:'Chitradurga' },
    { slug:'ecology-environment',        name:'Ecology & Environment' },
    { slug:'kalaburagi',                 name:'Kalaburagi' },
    { slug:'kali-tiger-reserve',         name:'Kali Tiger Reserve' },
    { slug:'karnataka-forest-department',name:'Karnataka Forest Department' },
    { slug:'kfcsc',                      name:'KFCSC' },
    { slug:'kspcb',                      name:'KSPCB' },
    { slug:'nagarhole-national-park',    name:'Nagarhole National Park' },
    { slug:'shimoga',                    name:'Shimoga' }
  ];
  window.SR_DEPTS_ALPHA = DEPTS_ALPHA;

  // CV chronological order — earliest
  window.SR_DEPTS_CV = [
    { slug:'chitradurga',                 name:'Chitradurga Division',                 code:'F-01', period:'1999-2002', kind:'District Forest' },
    { slug:'shimoga',                     name:'Shimoga Division',                     code:'F-02', period:'2002-2005', kind:'District Forest' },
    { slug:'kalaburagi',                  name:'Kalaburagi Division',                  code:'F-03', period:'2005-2008', kind:'District Forest' },
    { slug:'academics',                   name:'Academics',                   code:'F-04', period:'2008-2010', kind:'Research & Teaching' },
    { slug:'adcl',                        name:'ADCL',                        code:'F-05', period:'2010-2012', kind:'Welfare Corporation' },
    { slug:'kfcsc',                       name:'KFCSC',                       code:'F-06', period:'2012-2014', kind:'Cooperative Body' },
    { slug:'kspcb',                       name:'KSPCB',                       code:'F-07', period:'2014-2017', kind:'Pollution Board' },
    { slug:'kali-tiger-reserve',          name:'Kali Tiger Reserve',          code:'F-08', period:'2013-2015', kind:'Tiger Reserve' },
    { slug:'nagarhole-national-park',     name:'Nagarhole National Park',     code:'F-09', period:'2015-2017', kind:'National Park' },
    { slug:'karnataka-forest-department', name:'Karnataka Forest Department', code:'F-10', period:'2017-2020', kind:'Wildlife Wing' },
    { slug:'ayush',                       name:'AYUSH',                       code:'F-11', period:'2020-2022', kind:'Traditional Medicine' },
    { slug:'ecology-environment',         name:'Ecology & Environment',       code:'F-12', period:'2022-Present', kind:'Principal Secretary' }
  ];

  // Logo URLs (preserved from original site)
  window.SR_LOGOS = {
    'kspcb': 'https://static.wixstatic.com/media/f453f3_4ff3108d8f634e838fab62ca56fffc96~mv2.png',
    'ayush': 'https://static.wixstatic.com/media/f453f3_17e9ae17fcef4f208620014a703c4dd0~mv2.png',
    'kalaburagi': 'https://static.wixstatic.com/media/f453f3_1c1354dbeab64557bcc9d5d6ee0096e6~mv2.png',
    'shimoga': 'https://static.wixstatic.com/media/f453f3_441ae3bd6cdd4bf2a0e8842c7993c960~mv2.png',
    'academics': 'https://static.wixstatic.com/media/f453f3_8affe3ef7ad64ffea272c0980e8981e2~mv2.png',
    'chitradurga': 'https://static.wixstatic.com/media/f453f3_acd8279650af4b8088840c01285ff8a5~mv2.png',
    'kfcsc': 'https://static.wixstatic.com/media/f453f3_e08ab165d103428989198955bb9d62f3~mv2.png',
    'ecology-environment': 'images/feed.png',
    'karnataka-forest-department': 'https://static.wixstatic.com/media/f453f3_aca3d434c40c4d10b761d578c93bcade~mv2.png',
    'adcl': 'https://static.wixstatic.com/media/f453f3_7f56d5d0a9664f56bc7c74743d1a0f55~mv2.png',
    'nagarhole-national-park': 'images/NTRlogo.png',
    'kali-tiger-reserve': 'images/kalitigerreservelogo.png'
  };

  function ddItems(href){
    return DEPTS_ALPHA.map(d => `<li><a href="${href}?dept=${d.slug}">${d.name}</a></li>`).join('')
      + `<li><a href="${href}" class="dd-all">View all departments →</a></li>`;
  }

  // active page
  const path = (location.pathname.split('/').pop() || 'index.html').toLowerCase();
  function active(name){ return path === name ? ' class="is-current"' : ''; }
  function mActive(name){ return path === name ? ' class="is-current"' : ''; }

  const navbar = `
    <header class="nav-bar" role="navigation" aria-label="Primary">
      <div class="container">
        <a href="index.html" class="brand">
          <span class="brand-mark">S</span>
          <span>
            <span class="brand-name">Srinivasulu IFS</span>
            <span class="brand-sub">Indian Forest Service</span>
          </span>
        </a>
        <ul class="nav-primary">
          <li${active('index.html')}><a href="index.html">Home</a></li>
          <li${active('cv.html')}><a href="cv.html">CV</a></li>
          <li${active('honours.html')}><a href="honours.html">Honours and awards</a></li>
          <li${active('accomplishments.html')}><a href="accomplishments.html">Accomplishments <i data-lucide="chevron-down" class="icon-sm"></i></a>
            <ul class="nav-dropdown" role="menu">${ddItems('accomplishments.html')}</ul>
          </li>
          <li${active('publications.html')}><a href="publications.html">Publications <i data-lucide="chevron-down" class="icon-sm"></i></a>
            <ul class="nav-dropdown" role="menu">${ddItems('publications.html')}</ul>
          </li>
          <li><a href="#">Media <i data-lucide="chevron-down" class="icon-sm"></i></a>
            <ul class="nav-dropdown" role="menu">
              <li><a href="photos.html">Photos</a></li>
              <li><a href="videos.html">Videos</a></li>
            </ul>
          </li>
          <li${active('blog.html')}><a href="blog.html">Blog</a></li>
        </ul>
        <div class="nav-tools">
          <a href="contact.html" class="btn btn-primary btn-sm ctxt">Contact</a>
        </div>
        <button class="hamburger" id="hamburger" aria-label="Open menu" aria-expanded="false" aria-controls="mobileDrawer">
          <span></span><span></span><span></span>
        </button>
      </div>
    </header>`;

  const mobileDrawer = `
    <div class="scrim" id="mobileScrim" aria-hidden="true"></div>
    <aside class="mobile-drawer" id="mobileDrawer" role="dialog" aria-modal="true" aria-label="Menu">
      <div class="mobile-drawer-head">
        <a href="index.html" class="brand">
          <span class="brand-mark">S</span>
          <span><span class="brand-name">Srinivasulu IFS</span></span>
        </a>
        <button class="mobile-drawer-close" id="mobileClose" aria-label="Close menu"><i data-lucide="x"></i></button>
      </div>
      <nav class="mobile-nav">
        <span class="mobile-nav-section">Browse</span>
        <a href="index.html"${mActive('index.html')}><i data-lucide="home" class="icon-sm"></i>Home</a>
        <a href="cv.html"${mActive('cv.html')}><i data-lucide="user" class="icon-sm"></i>CV</a>
        <a href="honours.html"${mActive('honours.html')}><i data-lucide="award" class="icon-sm"></i>Honours and awards</a>
        <a href="accomplishments.html"${mActive('accomplishments.html')}><i data-lucide="briefcase" class="icon-sm"></i>Accomplishments</a>
        <a href="publications.html"${mActive('publications.html')}><i data-lucide="book-open" class="icon-sm"></i>Publications</a>
        <span class="mobile-nav-section">Media</span>
        <a href="photos.html"${mActive('photos.html')}><i data-lucide="image" class="icon-sm"></i>Photos</a>
        <a href="videos.html"${mActive('videos.html')}><i data-lucide="play-circle" class="icon-sm"></i>Videos</a>
        <span class="mobile-nav-section">More</span>
        <a href="blog.html"${mActive('blog.html')}><i data-lucide="newspaper" class="icon-sm"></i>Blog</a>
        <a href="contact.html"${mActive('contact.html')}><i data-lucide="mail" class="icon-sm"></i>Contact</a>
      </nav>
    </aside>`;

  const footer = `
    <footer>
      <div class="container">
        <div class="footer-grid">
          <div class="footer-col">
            <div class="footer-brand">
              <span class="brand-mark">S</span>
              <span>
                <span class="brand-name">Srinivasulu IFS</span>
                <span class="brand-sub">Indian Forest Service · 1997 Batch</span>
              </span>
            </div>
            <p class="footer-tag">Principal Secretary, Ecology &amp; Environment, Government of Karnataka.</p>
            <div class="footer-social" aria-label="Social channels">
              <a href="https://www.youtube.com/@srinivasifs4051" aria-label="YouTube" target="_blank" rel="noopener"><svg class="sr-social-svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M21.58 6.186a2.51 2.51 0 0 0-1.768-1.768C18.254 4 12 4 12 4s-6.254 0-7.814.418A2.51 2.51 0 0 0 2.42 6.186C2 7.746 2 12 2 12s0 4.254.42 5.814a2.51 2.51 0 0 0 1.766 1.768C5.746 20 12 20 12 20s6.254 0 7.812-.418a2.51 2.51 0 0 0 1.768-1.768C22 16.254 22 12 22 12s0-4.254-.42-5.814zM10 15.5v-7l6 3.5-6 3.5z"/></svg></a>
              <a href="https://www.facebook.com/srinivasulu.krishnamurthy" aria-label="Facebook" target="_blank" rel="noopener"><svg class="sr-social-svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987H7.898V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.99 22 12z"/></svg></a>
              <a href="https://www.instagram.com/sriniforest/" aria-label="Instagram" target="_blank" rel="noopener"><svg class="sr-social-svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r=".9" fill="currentColor" stroke="none"/></svg></a>
              <a href="#" aria-label="LinkedIn"><svg class="sr-social-svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14zM8.34 17v-7H6.07v7h2.27zM7.2 8.5a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5zM18 17v-4.04c0-2.04-1.1-3.06-2.6-3.06-1.18 0-1.78.63-2.13 1.07V10H11v7h2.27v-3.7c0-.62.14-1.24.94-1.24.79 0 .82.74.82 1.28V17H18z"/></svg></a>
            </div>
          </div>
          <div class="footer-col">
            <h4>Portfolio</h4>
            <ul>
              <li><a href="cv.html">CV</a></li>
              <li><a href="honours.html">Honours and awards</a></li>
              <li><a href="accomplishments.html">Accomplishments</a></li>
              <li><a href="publications.html">Publications</a></li>
            </ul>
          </div>
          <div class="footer-col">
            <h4>Media</h4>
            <ul>
              <li><a href="photos.html">Photos</a></li>
              <li><a href="videos.html">Videos</a></li>
              <li><a href="blog.html">Blog</a></li>
              <li><a href="contact.html">Contact</a></li>
            </ul>
          </div>
          <div class="footer-col">
            <h4>Government</h4>
            <ul>
              <li><a href="contact.html#map">Sitemap</a></li>
              <li style="display:none;"><a href="#">Accessibility</a></li>
              <li style="display:none;"><a href="#">Privacy &amp; Disclaimer</a></li>
              <li style="display:none;"><a href="#">Help</a></li>
            </ul>
          </div>
        </div>
        <div class="footer-bottom">
          <span>© 2025 Srinivasulu IFS · Maintained by Vanalok</span>
          <span>Last updated: <time datetime="2025-11-15">15 November 2025</time></span>
        </div>
      </div>
    </footer>`;

  // Inject
  function inject(){
    const host = document.getElementById('sr-chrome-top') || document.body;
    if (document.getElementById('sr-chrome-top')){
      host.innerHTML = navbar + mobileDrawer;
    } else {
      // Fallback: prepend at body start
      const wrap = document.createElement('div');
      wrap.innerHTML = navbar + mobileDrawer;
      document.body.insertBefore(wrap, document.body.firstChild);
    }
    const fHost = document.getElementById('sr-chrome-footer');
    if (fHost) fHost.innerHTML = footer; else {
      const f = document.createElement('div'); f.innerHTML = footer; document.body.appendChild(f);
    }
    if (window.SrIcons) window.SrIcons();
    if (window.bindMobileDrawer) {
      window.bindMobileDrawer();
    }
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', inject);
  else inject();
})();
