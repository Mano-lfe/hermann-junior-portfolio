const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const visualStyle = document.createElement('style');
visualStyle.textContent = '#particle-canvas{opacity:.68!important}.github-loading{grid-column:1/-1;margin:0;padding:50px 25px;background:#eaf8ff;color:#55708b;font-size:.9rem}.github-loading span{display:inline-block;width:12px;height:12px;border:2px solid #8dd6ff;border-top-color:#087ed1;border-radius:50%;margin-right:10px;animation:rotate 1s linear infinite}.github-loading a{color:#087ed1;font-weight:700}.direct-contact{display:flex;flex-wrap:wrap;gap:12px;margin-top:31px}.direct-contact a{min-width:230px;background:#eaf8ff;color:#082b4d;text-decoration:none;padding:14px 16px;font:700 .82rem Manrope;transition:transform .2s,background .2s}.direct-contact a:hover{background:#087ed1;color:white;transform:translateY(-3px)}.direct-contact small{display:block;margin-bottom:5px;color:#55708b;font:500 .61rem DM Mono;text-transform:uppercase;letter-spacing:.08em}.direct-contact a:hover small{color:#d5f2ff}.direct-contact span{float:right;color:#087ed1;font-size:1rem}.direct-contact a:hover span{color:white}.portrait-photo{background:#c5edff!important}.portrait-photo:before{display:none}.portrait-photo img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;object-position:50% 31%;z-index:1}.portrait-photo i{z-index:2;box-shadow:0 0 0 6px rgba(255,255,255,.36)}@media(max-width:760px){.direct-contact{display:block}.direct-contact a{display:block;min-width:0;margin-bottom:10px}.portrait-photo img{object-position:50% 24%}}';
document.head.append(visualStyle);
const iconStyle = document.createElement('style');
iconStyle.textContent = '.project-icon{position:absolute;z-index:5;right:18px;top:17px;display:grid;place-items:center;min-width:39px;height:39px;padding:0 9px;border:1px solid rgba(255,255,255,.7);border-radius:50%;background:rgba(7,48,86,.24);backdrop-filter:blur(7px);color:white;font:700 .82rem DM Mono;box-shadow:0 5px 17px rgba(0,32,59,.18);transition:transform .3s,background .3s}.project-card:hover .project-icon,.feature-card:hover .project-icon{transform:rotate(12deg) scale(1.12);background:rgba(255,255,255,.25)}.project-icon.icon-code{border-radius:9px;font-size:.72rem}.project-icon.icon-tool{border-radius:12px;font-size:1rem}.feature-card .project-icon{right:20px;top:19px}';
document.head.append(iconStyle);
const photoStyle = document.createElement('style');
photoStyle.textContent = '.project-icon{display:none!important}.project-photo{position:absolute!important;inset:0!important;width:100%!important;height:100%!important;object-fit:cover!important;z-index:0!important;filter:saturate(.9) contrast(1.05)}.project-art:after,.feature-card:after{content:"";position:absolute;inset:0;z-index:1;background:linear-gradient(180deg,rgba(3,35,64,.12) 8%,rgba(3,38,68,.72) 100%)!important}.project-art:before{z-index:1!important}.project-art>span,.project-art>p{z-index:3!important}.feature-card .card-number,.feature-card .card-copy,.feature-card .card-arrow{z-index:3!important}.feature-card .neural-shape,.feature-card .dashboard-shape{display:none}.project-card:hover .project-photo,.feature-card:hover .project-photo{transform:scale(1.055)}.project-photo{transition:transform .55s ease}';
document.head.append(photoStyle);
const layoutStyle = document.createElement('style');
layoutStyle.textContent = '.project-controls{display:none!important}';
document.head.append(layoutStyle);
const educationStyle = document.createElement('style');
educationStyle.textContent = '.education-section{padding:118px 0;background:#fff}.education-heading{display:flex;justify-content:space-between;gap:50px;align-items:flex-end;margin-bottom:45px}.education-heading h2{font-size:clamp(2.7rem,4.9vw,5rem);line-height:.97;letter-spacing:-.075em;max-width:720px;margin:20px 0 0}.education-heading h2 em{font-family:Georgia,serif;font-weight:400;color:#087ed1;letter-spacing:-.09em}.education-heading>p{max-width:310px;font-size:.83rem;line-height:1.7;color:#55708b;margin:0}.education-list{border-top:1px solid #d8e8f2}.education-list article{display:grid;grid-template-columns:160px 1fr;gap:28px;padding:25px 0;border-bottom:1px solid #d8e8f2;transition:padding .25s}.education-list article:hover{padding-left:13px}.education-list span{font:500 .66rem DM Mono;color:#087ed1}.education-list h3{font-size:1.05rem;letter-spacing:-.035em;margin:0 0 6px}.education-list p{font-size:.79rem;color:#55708b;margin:0}@media(max-width:760px){.education-section{padding:80px 0}.education-heading{display:block;margin-bottom:34px}.education-heading>p{margin-top:25px}.education-list article{grid-template-columns:96px 1fr;gap:15px;padding:20px 0}.education-list h3{font-size:.9rem}}';
document.head.append(educationStyle);
const formationStyle = document.createElement('style');
formationStyle.textContent = '.about-page .education-section{display:none!important}.formation-intro{padding-bottom:52px}.formation-cloud{position:relative;display:grid;grid-template-columns:repeat(12,1fr);grid-auto-rows:88px;gap:18px;padding:14px 0 128px}.education-bubble{position:relative;overflow:hidden;display:flex;flex-direction:column;justify-content:center;padding:30px;border-radius:50%;background:linear-gradient(145deg,#e6f7ff,#b7e6ff);color:#082b4d;box-shadow:0 16px 38px rgba(8,126,209,.15);transition:transform .3s,box-shadow .3s}.education-bubble:before{content:"";position:absolute;width:120px;height:120px;border:1px solid rgba(8,126,209,.17);border-radius:50%;right:-35px;top:-35px}.education-bubble:hover{transform:translateY(-10px) rotate(2deg);box-shadow:0 25px 42px rgba(8,126,209,.25)}.education-bubble span{position:relative;font:500 .62rem DM Mono;color:#087ed1;margin-bottom:10px}.education-bubble h2{position:relative;font-size:clamp(1rem,1.55vw,1.35rem);line-height:1.12;letter-spacing:-.05em;margin:0}.education-bubble p{position:relative;font-size:.7rem;line-height:1.45;color:#55708b;margin:9px 0 0}.education-bubble.b1{grid-column:1/span 6;grid-row:1/span 4;border-radius:49% 51% 42% 58% / 50% 43% 57% 50%;background:linear-gradient(145deg,#b5e8ff,#eaf9ff)}.education-bubble.b2{grid-column:7/span 6;grid-row:1/span 3;border-radius:59% 41% 50% 50% / 48% 55% 45% 52%;background:linear-gradient(145deg,#d8f3ff,#9edbff)}.education-bubble.b3{grid-column:8/span 5;grid-row:4/span 3;border-radius:43% 57% 55% 45% / 52% 41% 59% 48%;background:linear-gradient(145deg,#b2e3ff,#effaff)}.education-bubble.b4{grid-column:1/span 4;grid-row:5/span 3;border-radius:58% 42% 48% 52% / 43% 58% 42% 57%;background:linear-gradient(145deg,#dff6ff,#b6e7ff)}.education-bubble.b5{grid-column:5/span 3;grid-row:5/span 3;border-radius:50%;background:linear-gradient(145deg,#9cdcff,#e8f8ff)}.education-bubble.b6{grid-column:1/span 7;grid-row:8/span 3;border-radius:52% 48% 57% 43% / 48% 56% 44% 52%;background:linear-gradient(145deg,#cdefff,#f1fbff)}.bubble-note{position:absolute;right:5%;bottom:95px;color:#55708b;font:500 .63rem DM Mono;letter-spacing:.06em}@media(max-width:760px){.formation-intro{padding-bottom:32px}.formation-cloud{display:flex;flex-direction:column;gap:16px;padding-bottom:78px}.education-bubble,.education-bubble.b1,.education-bubble.b2,.education-bubble.b3,.education-bubble.b4,.education-bubble.b5,.education-bubble.b6{width:100%;min-height:220px;border-radius:47% 53% 44% 56% / 52% 46% 54% 48%;padding:38px}.education-bubble h2{font-size:1.22rem}.education-bubble p{font-size:.78rem}.bubble-note{display:none}}';
document.head.append(formationStyle);
const portfolioStyle = document.createElement('style');
portfolioStyle.textContent = '.availability-note{max-width:530px;margin:27px 0 -35px;padding-left:15px;border-left:2px solid #087ed1;color:#55708b;font:500 .7rem DM Mono;line-height:1.65}.button-cv{white-space:nowrap}.featured-work{padding:0 0 72px}.featured-work-head{display:flex;justify-content:space-between;align-items:end;gap:30px;margin-bottom:26px}.featured-work-head h2{font-size:clamp(2.2rem,4.2vw,4.3rem);letter-spacing:-.07em;line-height:.96;margin:18px 0 0}.featured-work-head p:last-child{max-width:325px;font-size:.82rem;line-height:1.65;color:#55708b;margin:0}.case-grid{display:grid;grid-template-columns:1.3fr .7fr .7fr;gap:18px}.case-card{position:relative;min-height:335px;padding:24px;overflow:hidden;display:flex;flex-direction:column;justify-content:flex-end;color:#fff;background:#073a65;box-shadow:0 15px 36px rgba(6,65,107,.13);transition:transform .3s,box-shadow .3s}.case-card:hover{transform:translateY(-7px);box-shadow:0 24px 44px rgba(6,65,107,.23)}.case-card:before{content:"";position:absolute;inset:0;background:linear-gradient(180deg,rgba(3,32,55,.05),rgba(3,32,55,.84));z-index:1}.case-card img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;z-index:0;transition:transform .55s}.case-card:hover img{transform:scale(1.06)}.case-card>*:not(img){position:relative;z-index:2}.case-card .case-type{font:500 .62rem DM Mono;color:#bce9ff;letter-spacing:.08em;text-transform:uppercase;margin:0 0 auto}.case-card h3{font-size:clamp(1.55rem,2.8vw,2.7rem);letter-spacing:-.07em;line-height:.95;margin:0 0 11px}.case-card p{font-size:.76rem;line-height:1.6;margin:0;max-width:480px;color:#e0f5ff}.case-card .case-link{align-self:flex-start;margin-top:18px;color:#fff;font:700 .69rem Manrope;text-decoration:none;border-bottom:1px solid #9edfff;padding-bottom:4px}.case-card .case-link:hover{color:#8cd9ff}.case-card.small h3{font-size:1.5rem}.case-card.small{min-height:335px}.dark-theme .featured-work-head p:last-child{color:#a8c3d8}.dark-theme .case-card{box-shadow:0 18px 36px rgba(0,0,0,.3)}.dark-theme .availability-note{color:#a8c3d8}@media(max-width:760px){.availability-note{margin:22px 0 -20px;font-size:.64rem}.hero-actions{margin-top:37px}.case-grid{display:block}.case-card,.case-card.small{min-height:285px;margin-bottom:15px}.featured-work{padding-bottom:52px}.featured-work-head{display:block}.featured-work-head p:last-child{margin-top:20px}.button-cv{width:100%}}';
document.head.append(portfolioStyle);
const themeStyle = document.createElement('style');
themeStyle.textContent = '.theme-toggle{display:inline-flex;align-items:center;justify-content:center;gap:7px;min-width:78px;padding:8px 10px;border:1px solid #c7dfed;border-radius:30px;background:#fff;color:#082b4d;font:500 .62rem DM Mono;cursor:pointer;transition:transform .2s,background .2s}.theme-toggle:hover{transform:translateY(-2px);background:#eaf8ff}.theme-toggle .theme-symbol{font-size:1rem;line-height:1}.dark-theme{--ink:#e5f5ff;--navy:#061a2b;--blue:#58bfff;--sky:#9cdeff;--pale:#0a2943;--white:#071c30;--muted:#a8c3d8;--line:#1f4a6c;background:#071c30!important;color:#e5f5ff}.dark-theme .site-header nav a,.dark-theme .logo,.dark-theme .status,.dark-theme .text-link,.dark-theme .button-ghost,.dark-theme .site-footer{color:#e5f5ff}.dark-theme .theme-toggle{background:#103550;border-color:#2d648a;color:#e5f5ff}.dark-theme .theme-toggle:hover{background:#164868}.dark-theme .hero-orbit{filter:saturate(1.2)}.dark-theme .button-ghost{background:#103550;border-color:#2d648a}.dark-theme .button-white{background:#e5f5ff;color:#082b4d}.dark-theme .skills-section,.dark-theme .education-section{background:#0a2943!important}.dark-theme .contact-form-section form{background:#0a2943!important}.dark-theme .social-links a,.dark-theme .direct-contact a{background:#103550!important;color:#e5f5ff!important}.dark-theme .direct-contact small{color:#a8c3d8!important}.dark-theme .project-meta h2,.dark-theme .project-meta p,.dark-theme .story-copy>p:not(.eyebrow):not(.big-copy),.dark-theme .timeline-list p,.dark-theme .education-list p,.dark-theme .skill-grid p,.dark-theme .section-note,.dark-theme .contact-hero>p,.dark-theme .contact-tip p{color:#a8c3d8}.dark-theme .tags span,.dark-theme .tag-row i,.dark-theme .skill-grid li{border-color:#2d648a;color:#bde8ff}.dark-theme .contact-form-section input,.dark-theme .contact-form-section textarea{color:#e5f5ff;border-color:#2d648a}.dark-theme .contact-tip{border-color:#1f4a6c}.dark-theme .portrait-placeholder{background:#0b3c60}.dark-theme .education-bubble{background:linear-gradient(145deg,#0c426b,#0a2c4a);color:#e5f5ff;box-shadow:0 16px 38px rgba(0,0,0,.25)}.dark-theme .education-bubble p{color:#b5d7e9}.dark-theme .github-loading{background:#0a2943!important;color:#b5d7e9!important}@media(max-width:760px){.theme-toggle{position:absolute;right:44px;top:20px;min-width:38px;padding:7px}.theme-toggle .theme-label{display:none}}';
document.head.append(themeStyle);

const menuToggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('#main-menu');
const currentPage = location.pathname.split('/').pop() || 'index.html';
if (!document.querySelector('link[rel="icon"]')) {
  const favicon = document.createElement('link');
  favicon.rel = 'icon'; favicon.type = 'image/svg+xml'; favicon.href = 'favicon.svg';
  document.head.append(favicon);
}
if (currentPage === 'about.html') {
  document.body.classList.add('about-page');
  document.querySelector('.timeline')?.remove();
}
const pageNumbers = { 'about.html': '01', 'formation.html': '02', 'projects.html': '03', 'contact.html': '04' };
const pageNumber = document.querySelector('.page-hero .kicker span, .contact-hero .kicker span');
if (pageNumber && pageNumbers[currentPage]) pageNumber.textContent = pageNumbers[currentPage];
if (currentPage === 'index.html') {
  const actions = document.querySelector('.hero-actions');
  if (actions && !actions.querySelector('.button-cv')) {
    const cv = document.createElement('a');
    cv.className = 'button button-ghost button-cv'; cv.href = 'CV-Hermann-Junior-FEHA.pdf';
    cv.setAttribute('download', 'CV-Hermann-Junior-FEHA.pdf');
    cv.textContent = 'Télécharger mon CV ↓'; actions.append(cv);
  }
  const heroActions = document.querySelector('.hero-actions');
  if (heroActions && !document.querySelector('.availability-note')) {
    const availability = document.createElement('p');
    availability.className = 'availability-note';
    availability.textContent = 'Recherche une alternance dès septembre 2026 · 3 semaines en entreprise / 1 semaine en école';
    heroActions.before(availability);
  }
}
if (menu && !menu.querySelector('[href="formation.html"]')) {
  const formationLink = document.createElement('a');
  formationLink.href = 'formation.html'; formationLink.textContent = 'Formation';
  const projectsLink = menu.querySelector('[href="projects.html"]');
  projectsLink ? menu.insertBefore(formationLink, projectsLink) : menu.append(formationLink);
}
const header = document.querySelector('.site-header');
if (header && !header.querySelector('.theme-toggle')) {
  const toggle = document.createElement('button');
  toggle.type = 'button'; toggle.className = 'theme-toggle';
  toggle.innerHTML = '<span class="theme-symbol" aria-hidden="true"></span><span class="theme-label"></span>';
  const renderThemeButton = () => {
    const dark = document.body.classList.contains('dark-theme');
    toggle.querySelector('.theme-symbol').textContent = dark ? '☀' : '☾';
    toggle.querySelector('.theme-label').textContent = dark ? 'Jour' : 'Nuit';
    toggle.setAttribute('aria-label', dark ? 'Passer en mode jour' : 'Passer en mode nuit');
  };
  try { if (localStorage.getItem('portfolio-theme') === 'dark') document.body.classList.add('dark-theme'); } catch (_) {}
  renderThemeButton();
  toggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
    try { localStorage.setItem('portfolio-theme', document.body.classList.contains('dark-theme') ? 'dark' : 'light'); } catch (_) {}
    renderThemeButton();
  });
  const status = header.querySelector('.status');
  status ? header.insertBefore(toggle, status) : header.append(toggle);
}
const socialStyle = document.createElement('style');
socialStyle.textContent = '.site-footer .social-icon{display:grid;place-items:center;width:28px;height:28px;border:1px solid #c7dfed;border-radius:50%;color:#55708b;transition:transform .2s,background .2s,color .2s}.site-footer .social-icon:hover{background:#087ed1;color:#fff;border-color:#087ed1;transform:translateY(-3px)}.site-footer .social-icon svg{width:13px;height:13px;fill:currentColor}.dark-theme .site-footer .social-icon{border-color:#2d648a;color:#bde8ff}.dark-theme .site-footer .social-icon:hover{background:#58bfff;border-color:#58bfff;color:#082b4d}';
document.head.append(socialStyle);
const socialIcons = {
  LinkedIn: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.34V8.98h3.42v1.57h.05c.48-.9 1.64-1.85 3.37-1.85 3.61 0 4.27 2.37 4.27 5.46v6.29zM5.32 7.41a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14zm-1.78 13.04h3.57V8.98H3.54v11.47zM22.23 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.21 0 22.23 0z"/></svg>',
  GitHub: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 .5a12 12 0 0 0-3.79 23.39c.6.11.82-.26.82-.58v-2.23c-3.34.73-4.04-1.42-4.04-1.42-.55-1.38-1.33-1.75-1.33-1.75-1.09-.74.08-.73.08-.73 1.2.08 1.84 1.23 1.84 1.23 1.07 1.83 2.81 1.3 3.5.99.11-.77.42-1.3.76-1.6-2.67-.3-5.48-1.33-5.48-5.94 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.53.12-3.19 0 0 1.01-.32 3.3 1.23A11.5 11.5 0 0 1 12 6.22c1.02 0 2.05.14 3.01.41 2.29-1.55 3.3-1.23 3.3-1.23.66 1.66.24 2.89.12 3.19.77.84 1.24 1.91 1.24 3.22 0 4.62-2.81 5.63-5.49 5.93.43.37.81 1.09.81 2.2v3.27c0 .32.21.7.82.58A12 12 0 0 0 12 .5z"/></svg>'
};
document.querySelectorAll('.site-footer a').forEach((link) => {
  const name = link.textContent.trim();
  if (!socialIcons[name]) return;
  link.classList.add('social-icon');
  link.setAttribute('aria-label', name);
  link.innerHTML = socialIcons[name];
});
if (menuToggle && menu) {
  menuToggle.addEventListener('click', () => {
    const open = menuToggle.getAttribute('aria-expanded') === 'true';
    menuToggle.setAttribute('aria-expanded', String(!open));
    menu.classList.toggle('open', !open);
  });
}

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach((element) => revealObserver.observe(element));

const projectPhotos = [
  'https://images.unsplash.com/photo-1675320458457-fe4576cbd0f8?auto=format&fit=crop&w=1600&q=85',
  'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1600&q=85',
  'https://images.unsplash.com/photo-1529429612779-c8e40ef2f36d?auto=format&fit=crop&w=1600&q=85'
];
document.querySelectorAll('.feature-card').forEach((card, index) => {
  const photo = document.createElement('img');
  photo.className = 'project-photo'; photo.alt = ''; photo.loading = 'lazy';
  photo.src = `https://opengraph.githubassets.com/1/${repo.full_name}`;
  photo.addEventListener('error', () => { photo.src = projectPhotos[index % projectPhotos.length]; }, { once: true });
  card.append(photo);
});

// Fond de particules : plus dense et plus lumineux, tout en restant décoratif.
const canvas = document.querySelector('#particle-canvas');
if (canvas && !reduceMotion) {
  const ctx = canvas.getContext('2d');
  const pointer = { x: -999, y: -999 };
  let dots = [];
  let width = 0;
  let height = 0;
  const makeDot = () => ({ x: Math.random() * width, y: Math.random() * height, vx: (Math.random() - .5) * .34, vy: (Math.random() - .5) * .34, r: 1.35 + Math.random() * 2.35 });
  const resize = () => {
    const scale = Math.min(devicePixelRatio || 1, 2);
    width = innerWidth; height = innerHeight;
    canvas.width = width * scale; canvas.height = height * scale;
    ctx.setTransform(scale, 0, 0, scale, 0, 0);
    dots = Array.from({ length: Math.min(82, Math.max(36, Math.floor(width * height / 15000))) }, makeDot);
  };
  const draw = () => {
    ctx.clearRect(0, 0, width, height);
    dots.forEach((dot, index) => {
      dot.x += dot.vx; dot.y += dot.vy;
      if (dot.x < 0 || dot.x > width) dot.vx *= -1;
      if (dot.y < 0 || dot.y > height) dot.vy *= -1;
      if (Math.hypot(pointer.x - dot.x, pointer.y - dot.y) < 155) {
        dot.x += (dot.x - pointer.x) * .016;
        dot.y += (dot.y - pointer.y) * .016;
      }
      for (let nextIndex = index + 1; nextIndex < dots.length; nextIndex += 1) {
        const next = dots[nextIndex];
        const distance = Math.hypot(dot.x - next.x, dot.y - next.y);
        if (distance < 155) {
          ctx.beginPath();
          ctx.strokeStyle = `rgba(8, 126, 209, ${.19 * (1 - distance / 155)})`;
          ctx.lineWidth = 1;
          ctx.moveTo(dot.x, dot.y); ctx.lineTo(next.x, next.y); ctx.stroke();
        }
      }
      ctx.beginPath();
      ctx.fillStyle = 'rgba(8, 126, 209, .53)';
      ctx.shadowBlur = 10; ctx.shadowColor = 'rgba(51, 177, 239, .55)';
      ctx.arc(dot.x, dot.y, dot.r, 0, Math.PI * 2); ctx.fill();
      ctx.shadowBlur = 0;
    });
    requestAnimationFrame(draw);
  };
  addEventListener('resize', resize);
  addEventListener('pointermove', (event) => { pointer.x = event.clientX; pointer.y = event.clientY; });
  resize(); draw();
}

const projectList = document.querySelector('#project-list');
if (projectList && !document.querySelector('.featured-work')) {
  const selection = document.createElement('section');
  selection.className = 'featured-work wrap reveal is-visible';
  selection.innerHTML = `<div class="featured-work-head"><div><p class="eyebrow">Sélection</p><h2>Des projets avec une intention claire.</h2></div><p>Une sélection de réalisations qui illustre mes compétences en intelligence artificielle, développement web et expérience utilisateur.</p></div><div class="case-grid"><article class="case-card"><img src="mesuria-cover.png" alt="Capture de l’application Mesuria"><p class="case-type">Intelligence artificielle · Projet phare</p><h3>Mesuria</h3><p>Application web qui utilise l’intelligence artificielle pour extraire automatiquement des mensurations corporelles à partir d’une photo fournie par l’utilisateur.</p><a class="case-link" href="https://github.com/Mano-lfe/Mesuria" target="_blank" rel="noreferrer">Voir le code sur GitHub ↗</a></article><article class="case-card small"><img src="thair-cover.png" alt="Devanture de T-Hair"><p class="case-type">Web · Expérience</p><h3>T-Hair</h3><p>Création d’un site internet pour une entreprise de coiffure, avec HTML, CSS, JavaScript et SQL.</p></article><article class="case-card small"><img src="https://images.unsplash.com/photo-1529429612779-c8e40ef2f36d?auto=format&fit=crop&w=900&q=85" alt="Développement e-commerce"><p class="case-type">Web · Académique</p><h3>E-commerce</h3><p>Conception d’un site e-commerce relié à une base de données pour le stockage et la gestion des données.</p></article></div>`;
  projectList.before(selection);
  projectList.classList.add('workshop-project-list');
}
const filters = document.querySelectorAll('.filter');
const webLanguages = new Set(['JavaScript', 'TypeScript', 'HTML', 'CSS', 'Vue', 'Svelte', 'PHP']);
const iaTerms = ['ai', 'ia', 'llm', 'rag', 'machine-learning', 'machine learning', 'deep-learning', 'deep learning', 'openai', 'chatbot', 'vision'];
const getCategories = (repo) => {
  const text = `${repo.description || ''} ${(repo.topics || []).join(' ')}`.toLowerCase();
  const categories = ['tool'];
  if (webLanguages.has(repo.language)) categories.push('web');
  if (iaTerms.some((term) => text.includes(term))) categories.push('ia');
  if (repo.name.toLowerCase() === 'mesuria') categories.push('ia');
  return [...new Set(categories)];
};
const artClass = (index) => ['art-insight', 'art-metric', 'art-form'][index % 3];
const makeProject = (repo, index) => {
  const card = document.createElement('article');
  const categories = getCategories(repo);
  card.className = 'project-card github-card';
  card.dataset.category = categories.join(' ');
  const art = document.createElement('div');
  art.className = `project-art ${artClass(index)}`;
  const number = document.createElement('span'); number.textContent = String(index + 1).padStart(2, '0'); art.append(number);
  const photo = document.createElement('img');
  photo.className = 'project-photo'; photo.alt = ''; photo.loading = 'lazy';
  photo.src = projectPhotos[index % projectPhotos.length];
  art.append(photo);
  const artTitle = document.createElement('p'); artTitle.textContent = repo.name.replace(/[-_]/g, ' ').toUpperCase(); art.append(artTitle);
  const meta = document.createElement('div'); meta.className = 'project-meta';
  const text = document.createElement('div'); const title = document.createElement('h2'); title.textContent = repo.name.replace(/[-_]/g, ' ');
  const description = document.createElement('p'); description.textContent = repo.description || 'Projet open source disponible sur GitHub.'; text.append(title, description);
  const year = document.createElement('span'); year.textContent = new Date(repo.updated_at).getFullYear(); meta.append(text, year);
  const tags = document.createElement('div'); tags.className = 'tag-row';
  [repo.language, ...(repo.topics || []).slice(0, 2)].filter(Boolean).forEach((label) => { const tag = document.createElement('i'); tag.textContent = label; tags.append(tag); });
  if (!tags.childElementCount) { const tag = document.createElement('i'); tag.textContent = 'GitHub'; tags.append(tag); }
  const link = document.createElement('a'); link.className = 'open-project open-repo'; link.href = repo.homepage || repo.html_url; link.target = '_blank'; link.rel = 'noreferrer'; link.textContent = repo.homepage ? 'Voir la démo ↗' : 'Voir sur GitHub ↗';
  card.append(art, meta, tags, link);
  return card;
};
const applyFilter = (value) => {
  document.querySelectorAll('.github-card').forEach((card) => {
    card.classList.toggle('is-hidden', value !== 'all' && !card.dataset.category.includes(value));
  });
};
filters.forEach((filter) => filter.addEventListener('click', () => {
  filters.forEach((item) => item.classList.toggle('active', item === filter));
  applyFilter(filter.dataset.filter);
}));

// Les dépôts sont obtenus depuis l'API publique : aucune clé ni donnée privée n'est utilisée.
if (projectList) {
  fetch('https://api.github.com/users/Mano-lfe/repos?per_page=100&sort=updated')
    .then((response) => { if (!response.ok) throw new Error('GitHub indisponible'); return response.json(); })
    .then((repos) => {
      const publicRepos = repos.filter((repo) => !repo.fork && !repo.archived);
      const workshopRepos = publicRepos.filter((repo) => /atelier|workshop/i.test(`${repo.name} ${repo.description || ''}`));
      projectList.replaceChildren(...workshopRepos.map(makeProject));
      if (!workshopRepos.length) projectList.remove();
    })
    .catch(() => {
      projectList.innerHTML = '<p class="github-loading">Les projets ne peuvent pas être chargés pour le moment. <a href="https://github.com/Mano-lfe?tab=repositories" target="_blank" rel="noreferrer">Voir mes dépôts sur GitHub ↗</a></p>';
    });
}

const form = document.querySelector('#contact-form');
if (form) {
  form.action = 'https://formsubmit.co/fehajunior@gmail.com';
  form.method = 'post';
  const addHiddenField = (name, value) => {
    const field = document.createElement('input');
    field.type = 'hidden'; field.name = name; field.value = value;
    form.append(field); return field;
  };
  addHiddenField('_subject', 'Nouveau message depuis votre portfolio');
  addHiddenField('_template', 'table');
  addHiddenField('_honey', '');
  const replyTo = addHiddenField('_replyto', '');
  if (location.protocol !== 'file:') addHiddenField('_next', `${location.origin}${location.pathname}?sent=1`);
  const status = document.querySelector('#form-status');
  if (new URLSearchParams(location.search).get('sent') === '1') {
    status.textContent = 'Merci, votre message a bien été envoyé.';
    status.classList.add('success');
  }
  form.addEventListener('submit', (event) => {
    replyTo.value = form.elements.email.value;
    status.textContent = 'Envoi de votre message…';
  });
}

// HJ Assistant : un concierge de portfolio qui répond à partir des informations publiques de Hermann.
const assistantStyle = document.createElement('style');
assistantStyle.textContent = `
  .hj-assistant{position:fixed;right:25px;bottom:23px;z-index:80;font-family:Manrope,Arial,sans-serif}
  .hj-assistant__launcher{position:relative;width:60px;height:60px;padding:0;border:2px solid #fff;border-radius:50%;display:grid;place-items:center;background:linear-gradient(135deg,#075f9f,#27b6ef);color:#fff;box-shadow:0 15px 34px rgba(8,126,209,.38);cursor:pointer;transition:transform .25s,box-shadow .25s}
  .hj-assistant__launcher:hover{transform:translateY(-5px) scale(1.045);box-shadow:0 22px 42px rgba(8,126,209,.46)}.hj-assistant__launcher:focus-visible{outline:3px solid #8edcff;outline-offset:4px}
  .hj-assistant__launcher:before{content:'';position:absolute;inset:-8px;border:1px solid rgba(8,126,209,.42);border-radius:50%;animation:hj-launcher-ring 2.8s ease-out infinite;pointer-events:none}.hj-assistant__launcher:after{content:'';position:absolute;z-index:2;width:12px;height:12px;right:-1px;top:-1px;border:3px solid #fff;border-radius:50%;background:#35c796;box-shadow:0 0 0 3px rgba(8,126,209,.18)}
  .hj-assistant__launcher svg{position:relative;z-index:1;width:26px;height:26px;fill:none;stroke:currentColor;stroke-width:1.8;stroke-linecap:round;stroke-linejoin:round}
  .hj-assistant__panel{position:absolute;right:0;bottom:78px;width:min(400px,calc(100vw - 32px));overflow:hidden;border:1px solid rgba(143,210,242,.75);border-radius:24px;background:rgba(255,255,255,.98);color:#082b4d;box-shadow:0 30px 75px rgba(2,43,77,.27);opacity:0;pointer-events:none;transform:translateY(18px) scale(.965);transform-origin:bottom right;transition:opacity .27s ease,transform .27s cubic-bezier(.2,.8,.2,1)}
  .hj-assistant.is-open .hj-assistant__panel{opacity:1;pointer-events:auto;transform:none}
  .hj-assistant__top{position:relative;display:flex;align-items:center;gap:12px;min-height:83px;padding:17px 18px;overflow:hidden;background:linear-gradient(120deg,#05365e,#087ed1 70%,#20aee7);color:#fff}.hj-assistant__top:before{content:'';position:absolute;width:170px;height:170px;right:-55px;top:-112px;border:1px solid rgba(216,247,255,.34);border-radius:50%;box-shadow:0 0 0 28px rgba(216,247,255,.06)}.hj-assistant__top>*{position:relative;z-index:1}
  .hj-assistant__avatar{width:39px;height:39px;display:grid;place-items:center;flex:0 0 auto;border:1px solid rgba(255,255,255,.45);border-radius:13px;background:rgba(255,255,255,.14);font:800 .93rem 'DM Mono',monospace;letter-spacing:-.1em;box-shadow:inset 0 1px 0 rgba(255,255,255,.28)}
  .hj-assistant__identity{min-width:0}.hj-assistant__title{margin:0;font-size:.88rem;letter-spacing:-.025em}.hj-assistant__subtitle{display:block;margin-top:2px;color:#d0f2ff;font:500 .58rem 'DM Mono',monospace;letter-spacing:.07em}.hj-assistant__availability{display:flex;align-items:center;gap:5px;margin-top:5px;color:#eefaff;font-size:.61rem}.hj-assistant__availability i{width:6px;height:6px;border-radius:50%;background:#8df3c8;box-shadow:0 0 0 3px rgba(141,243,200,.14)}
  .hj-assistant__close{position:relative;margin-left:auto;width:30px;height:30px;border:1px solid rgba(255,255,255,.2);border-radius:10px;background:rgba(255,255,255,.12);color:#fff;font-size:1.2rem;line-height:1;cursor:pointer;transition:background .2s,transform .2s}.hj-assistant__close:hover{background:rgba(255,255,255,.26);transform:rotate(90deg)}
  .hj-assistant__messages{display:flex;flex-direction:column;gap:12px;min-height:221px;max-height:285px;overflow-y:auto;padding:17px 17px 18px;background:radial-gradient(circle at 100% 0,#e1f5ff 0,transparent 34%),linear-gradient(180deg,#f8fdff,#edf8ff)}.hj-assistant__messages::-webkit-scrollbar{width:5px}.hj-assistant__messages::-webkit-scrollbar-thumb{border-radius:10px;background:#b8dff1}
  .hj-assistant__message{position:relative;max-width:90%;margin:0;padding:24px 12px 11px;border-radius:15px;font-size:.75rem;line-height:1.58;animation:hj-message-in .28s ease-out}.hj-assistant__message:before{content:attr(data-author);position:absolute;top:9px;left:12px;font:700 .51rem 'DM Mono',monospace;letter-spacing:.09em}.hj-assistant__message--bot{align-self:flex-start;border:1px solid #e1f0f8;border-bottom-left-radius:4px;background:#fff;box-shadow:0 7px 18px rgba(8,85,137,.07);color:#315977}.hj-assistant__message--bot:before{color:#087ed1}.hj-assistant__message--user{align-self:flex-end;border-bottom-right-radius:4px;background:linear-gradient(135deg,#087ed1,#1ea7e2);color:#fff;box-shadow:0 7px 16px rgba(8,126,209,.22)}.hj-assistant__message--user:before{color:#d8f4ff}
  .hj-assistant__typing{display:flex;align-items:center;gap:4px;align-self:flex-start;width:max-content;padding:11px 14px;border:1px solid #e1f0f8;border-radius:14px;border-bottom-left-radius:4px;background:#fff;box-shadow:0 5px 14px rgba(8,85,137,.06)}.hj-assistant__typing i{width:5px;height:5px;border-radius:50%;background:#57b3e4;animation:hj-typing .9s infinite alternate}.hj-assistant__typing i:nth-child(2){animation-delay:.18s}.hj-assistant__typing i:nth-child(3){animation-delay:.36s}
  .hj-assistant__suggestions{display:grid;grid-template-columns:repeat(2,1fr);gap:7px;padding:13px 14px 14px;background:#edf8ff;border-top:1px solid #dceef7}.hj-assistant__suggestions>p{grid-column:1/-1;margin:0 0 1px;color:#5a7c94;font:700 .56rem 'DM Mono',monospace;letter-spacing:.08em;text-transform:uppercase}.hj-assistant__suggestions button{display:flex;align-items:center;gap:8px;min-width:0;border:1px solid #cce7f5;border-radius:12px;background:rgba(255,255,255,.86);color:#214f6d;padding:8px;text-align:left;cursor:pointer;transition:transform .2s,background .2s,border-color .2s,box-shadow .2s}.hj-assistant__suggestions button:hover{transform:translateY(-2px);border-color:#75c8ec;background:#fff;box-shadow:0 6px 13px rgba(8,126,209,.1)}.hj-assistant__topic-mark{display:grid;place-items:center;width:22px;height:22px;flex:0 0 auto;border-radius:8px;background:#dff4ff;color:#087ed1;font:700 .55rem 'DM Mono',monospace}.hj-assistant__suggestions strong,.hj-assistant__suggestions small{display:block}.hj-assistant__suggestions strong{font:700 .63rem Manrope,Arial,sans-serif}.hj-assistant__suggestions small{margin-top:1px;color:#6a8ba2;font:500 .52rem Manrope,Arial,sans-serif}
  .hj-assistant__form{display:flex;gap:8px;padding:12px 13px 8px;background:#fff;border-top:1px solid #e0eff6}.hj-assistant__form input{min-width:0;flex:1;border:1px solid #c4e1f0;border-radius:12px;padding:11px 12px;color:#082b4d;font:400 .72rem Manrope,Arial,sans-serif;outline:none;transition:border-color .2s,box-shadow .2s}.hj-assistant__form input:focus{border-color:#087ed1;box-shadow:0 0 0 3px rgba(8,126,209,.11)}.hj-assistant__form button{width:40px;border:0;border-radius:12px;background:linear-gradient(135deg,#087ed1,#19a3df);color:#fff;font-size:1.1rem;cursor:pointer;box-shadow:0 5px 12px rgba(8,126,209,.2);transition:transform .2s,filter .2s}.hj-assistant__form button:hover{filter:brightness(1.07);transform:translateY(-2px)}.hj-assistant__notice{margin:0;padding:0 14px 12px;background:#fff;color:#7692a5;font-size:.53rem;line-height:1.4}
  .dark-theme .hj-assistant__panel{border-color:#2e658c;background:#0a2943;color:#e5f5ff}.dark-theme .hj-assistant__messages{background:radial-gradient(circle at 100% 0,#103e60 0,transparent 33%),#08243b}.dark-theme .hj-assistant__messages::-webkit-scrollbar-thumb{background:#285779}.dark-theme .hj-assistant__message--bot,.dark-theme .hj-assistant__typing{border-color:#245271;background:#103550;color:#d5ebf8;box-shadow:none}.dark-theme .hj-assistant__message--bot:before{color:#74cbfa}.dark-theme .hj-assistant__suggestions{background:#08243b;border-color:#1e4b69}.dark-theme .hj-assistant__suggestions>p{color:#9fc2d6}.dark-theme .hj-assistant__suggestions button{border-color:#275978;background:#103550;color:#e1f4ff}.dark-theme .hj-assistant__suggestions small{color:#a3c7dc}.dark-theme .hj-assistant__topic-mark{background:#164868;color:#8bd5fb}.dark-theme .hj-assistant__form,.dark-theme .hj-assistant__notice{background:#0a2943;border-color:#1e4b69}.dark-theme .hj-assistant__form input{background:#0d3452;border-color:#2d648a;color:#e5f5ff}.dark-theme .hj-assistant__notice{color:#8eb4ca}
  @keyframes hj-message-in{from{opacity:0;transform:translateY(7px)}to{opacity:1;transform:none}}@keyframes hj-typing{to{transform:translateY(-3px);opacity:.45}}@keyframes hj-launcher-ring{0%,100%{transform:scale(.86);opacity:.7}70%{transform:scale(1.2);opacity:0}}
  @media(max-width:760px){.hj-assistant{right:17px;bottom:17px}.hj-assistant__panel{bottom:74px;width:min(390px,calc(100vw - 28px));border-radius:21px}.hj-assistant__launcher{width:56px;height:56px}.hj-assistant__messages{min-height:204px;max-height:248px}.hj-assistant__suggestions{padding:11px}.hj-assistant__suggestions button{padding:7px}.hj-assistant__form{padding:10px 11px 7px}}
  @media(prefers-reduced-motion:reduce){.hj-assistant *, .hj-assistant *:before, .hj-assistant *:after{animation:none!important;transition:none!important}}
`;
document.head.append(assistantStyle);

if (!document.querySelector('.hj-assistant')) {
  const assistant = document.createElement('aside');
  assistant.className = 'hj-assistant';
  assistant.setAttribute('aria-label', 'HJ Assistant, assistant du portfolio');
  assistant.innerHTML = `
    <section class="hj-assistant__panel" aria-labelledby="hj-assistant-title">
      <header class="hj-assistant__top">
        <span class="hj-assistant__avatar" aria-hidden="true">HJ</span>
        <div class="hj-assistant__identity"><h2 class="hj-assistant__title" id="hj-assistant-title">HJ Assistant</h2><span class="hj-assistant__subtitle">ASSISTANT DU PORTFOLIO</span><span class="hj-assistant__availability"><i aria-hidden="true"></i>Disponible pour vous aider</span></div>
        <button class="hj-assistant__close" type="button" aria-label="Fermer HJ Assistant">×</button>
      </header>
      <div class="hj-assistant__messages" aria-live="polite"></div>
      <div class="hj-assistant__suggestions" aria-label="Questions suggérées">
        <p>Explorer le profil</p>
        <button type="button" data-question="Quels sont ses projets ?"><span class="hj-assistant__topic-mark" aria-hidden="true">01</span><span><strong>Projets</strong><small>Mesuria & web</small></span></button>
        <button type="button" data-question="Quelles sont ses compétences ?"><span class="hj-assistant__topic-mark" aria-hidden="true">02</span><span><strong>Compétences</strong><small>Web & IA</small></span></button>
        <button type="button" data-question="Quelle est sa formation ?"><span class="hj-assistant__topic-mark" aria-hidden="true">03</span><span><strong>Formation</strong><small>SUPINFO Paris</small></span></button>
        <button type="button" data-question="Comment le contacter ?"><span class="hj-assistant__topic-mark" aria-hidden="true">04</span><span><strong>Contact</strong><small>Échange rapide</small></span></button>
      </div>
      <form class="hj-assistant__form">
        <input type="text" name="question" autocomplete="off" maxlength="260" placeholder="Posez votre question…" aria-label="Votre question à HJ Assistant">
        <button type="submit" aria-label="Envoyer la question">↑</button>
      </form>
      <p class="hj-assistant__notice">Réponses basées sur les informations publiques du portfolio.</p>
    </section>
    <button class="hj-assistant__launcher" type="button" aria-expanded="false" aria-controls="hj-assistant-title" aria-label="Ouvrir HJ Assistant">
      <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 11.5a7.5 7.5 0 0 1-8 7.48 8.3 8.3 0 0 1-3.17-.65L4 20l1.31-3.45A7.25 7.25 0 0 1 4 12a7.5 7.5 0 0 1 8-7.48A7.5 7.5 0 0 1 20 11.5Z"/><path d="M8 11.5h.01M12 11.5h.01M16 11.5h.01"/></svg>
    </button>`;
  document.body.append(assistant);

  const launcher = assistant.querySelector('.hj-assistant__launcher');
  const close = assistant.querySelector('.hj-assistant__close');
  const input = assistant.querySelector('input');
  const chatForm = assistant.querySelector('.hj-assistant__form');
  const messages = assistant.querySelector('.hj-assistant__messages');
  let waitingForAnswer = false;

  const addMessage = (content, from = 'bot') => {
    const message = document.createElement('p');
    message.className = `hj-assistant__message hj-assistant__message--${from}`;
    message.dataset.author = from === 'bot' ? 'HJ ASSISTANT' : 'VOUS';
    message.textContent = content;
    messages.append(message);
    messages.scrollTop = messages.scrollHeight;
  };
  const setOpen = (open) => {
    assistant.classList.toggle('is-open', open);
    launcher.setAttribute('aria-expanded', String(open));
    launcher.setAttribute('aria-label', open ? 'Fermer HJ Assistant' : 'Ouvrir HJ Assistant');
    if (open) setTimeout(() => input.focus(), 120);
  };
  const normalise = (value) => value.toLocaleLowerCase('fr-FR').normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  const getAnswer = (question) => {
    const text = normalise(question);
    if (/(bonjour|bonsoir|salut|hello|coucou)/.test(text)) return 'Bonjour ! Je peux vous présenter Hermann Junior FEHA, ses projets, ses compétences ou sa formation.';
    if (/(mesuria|projet|projets|realisation|portfolio)/.test(text)) return 'Le projet phare est Mesuria : une application qui s’appuie sur l’IA pour extraire des mensurations corporelles à partir d’une photo. Hermann a aussi réalisé T-Hair, un site pour une entreprise de coiffure, un site e-commerce relié à une base de données et Atelier Responsive.';
    if (/(competence|competences|skill|technologie|html|css|javascript|php|mysql|ia|intelligence artificielle|web)/.test(text)) return 'Hermann travaille notamment avec HTML, CSS, JavaScript, PHP et MySQL. Il s’intéresse aussi à l’intelligence artificielle et à la conception de solutions web concrètes, rigoureuses et utiles.';
    if (/(formation|etude|etudes|ecole|supinfo|epsi|bachelor|diplome)/.test(text)) return 'Hermann est étudiant en 3e année de Bachelor Informatique à SUPINFO Paris, avec une spécialisation Développement Web & IA. Son parcours comprend également deux années à EPSI Paris.';
    if (/(alternance|disponibilite|disponible|recrut|recruter|emploi|stage)/.test(text)) return 'Hermann recherche une alternance dès septembre 2026, avec un rythme de 3 semaines en entreprise et 1 semaine en école.';
    if (/(contact|email|mail|telephone|tel|joindre|linkedin|github)/.test(text)) return 'Vous pouvez contacter Hermann à fehajunior@gmail.com ou au +33 6 12 43 65 90. Ses liens GitHub et LinkedIn sont aussi disponibles sur la page Contact.';
    if (/(cv|parcours|profil|hermann|feha)/.test(text)) return 'Hermann Junior FEHA est un développeur web orienté IA. Il conçoit des solutions digitales en s’appuyant sur une pratique de terrain et recherche aujourd’hui une alternance.';
    return 'Je peux vous aider sur les projets, les compétences, la formation, l’alternance ou les coordonnées de Hermann. Quelle information vous intéresse ?';
  };
  const answer = (question) => {
    const value = question.trim();
    if (!value || waitingForAnswer) return;
    waitingForAnswer = true;
    addMessage(value, 'user');
    input.value = '';
    const typing = document.createElement('div');
    typing.className = 'hj-assistant__typing';
    typing.setAttribute('aria-label', 'HJ Assistant rédige une réponse');
    typing.innerHTML = '<i></i><i></i><i></i>';
    messages.append(typing);
    messages.scrollTop = messages.scrollHeight;
    setTimeout(() => {
      typing.remove();
      addMessage(getAnswer(value));
      waitingForAnswer = false;
    }, reduceMotion ? 0 : 420);
  };

  addMessage('Bonjour, je suis HJ Assistant. Posez-moi une question sur le profil de Hermann ou choisissez un sujet ci-dessous.');
  launcher.addEventListener('click', () => setOpen(!assistant.classList.contains('is-open')));
  close.addEventListener('click', () => setOpen(false));
  chatForm.addEventListener('submit', (event) => { event.preventDefault(); answer(input.value); });
  assistant.querySelectorAll('[data-question]').forEach((button) => button.addEventListener('click', () => answer(button.dataset.question)));
  document.addEventListener('keydown', (event) => { if (event.key === 'Escape') setOpen(false); });
}

// Finitions utiles au recrutement : accessibilité, étude de cas et appel à l’alternance.
const polishStyle = document.createElement('style');
polishStyle.textContent = `
  .skip-link{position:fixed;z-index:200;left:16px;top:12px;transform:translateY(-170%);padding:10px 14px;border-radius:8px;background:#082b4d;color:#fff;font:700 .72rem Manrope,Arial,sans-serif;text-decoration:none;box-shadow:0 9px 22px rgba(0,33,61,.2);transition:transform .2s}.skip-link:focus{transform:none}
  a:focus-visible,button:focus-visible,input:focus-visible,textarea:focus-visible{outline:3px solid #63c9f7;outline-offset:3px}
  .recruitment-cta{margin:0 auto 92px;padding:34px;overflow:hidden;position:relative;background:linear-gradient(125deg,#06345c,#087ed1);color:#fff;box-shadow:0 20px 48px rgba(7,72,119,.18)}.recruitment-cta:before{content:'';position:absolute;width:410px;height:410px;right:-115px;top:-265px;border:1px solid rgba(206,244,255,.32);border-radius:50%;box-shadow:0 0 0 47px rgba(206,244,255,.06)}.recruitment-cta>*{position:relative;z-index:1}.recruitment-cta__grid{display:grid;grid-template-columns:1.2fr .8fr;gap:34px;align-items:end}.recruitment-cta .eyebrow{color:#bcecff}.recruitment-cta h2{max-width:570px;margin:14px 0 12px;font-size:clamp(2rem,3.6vw,3.8rem);line-height:.98;letter-spacing:-.07em}.recruitment-cta h2 em{font-family:Georgia,serif;font-weight:400;color:#c5efff}.recruitment-cta__copy{max-width:590px;margin:0;color:#d8f3ff;font-size:.84rem;line-height:1.7}.recruitment-facts{display:grid;grid-template-columns:repeat(2,1fr);gap:9px}.recruitment-facts div{min-height:86px;padding:13px;border:1px solid rgba(204,242,255,.28);background:rgba(255,255,255,.08);backdrop-filter:blur(6px)}.recruitment-facts b,.recruitment-facts span{display:block}.recruitment-facts b{font-size:.78rem}.recruitment-facts span{margin-top:5px;color:#cdeeff;font:500 .61rem 'DM Mono',monospace;line-height:1.4}.recruitment-actions{display:flex;flex-wrap:wrap;gap:10px;margin-top:25px}.recruitment-actions .button{min-width:168px}.recruitment-actions .button-ghost{background:rgba(255,255,255,.1);border-color:rgba(255,255,255,.6);color:#fff}.recruitment-actions .button-ghost:hover{background:#fff;color:#07375f}
  .mesuria-case-study{padding:0 0 78px}.mesuria-case-study__head{display:flex;align-items:end;justify-content:space-between;gap:28px;margin-bottom:24px}.mesuria-case-study__head h2{max-width:650px;margin:15px 0 0;font-size:clamp(2rem,4vw,4.1rem);line-height:.98;letter-spacing:-.07em}.mesuria-case-study__head h2 em{font-family:Georgia,serif;font-weight:400;color:#087ed1}.mesuria-case-study__head>p{max-width:310px;margin:0;color:#55708b;font-size:.81rem;line-height:1.65}.mesuria-case-study__body{display:grid;grid-template-columns:.88fr 1.12fr;min-height:405px;background:#effaff;box-shadow:0 16px 40px rgba(9,91,141,.1)}.mesuria-case-study__visual{position:relative;overflow:hidden;background:#0c2745}.mesuria-case-study__visual:after{content:'';position:absolute;inset:0;background:linear-gradient(135deg,rgba(2,33,58,.05),rgba(2,33,58,.55))}.mesuria-case-study__visual img{width:100%;height:100%;object-fit:cover;display:block;transition:transform .55s}.mesuria-case-study__body:hover .mesuria-case-study__visual img{transform:scale(1.035)}.mesuria-case-study__label{position:absolute;z-index:1;left:18px;top:18px;padding:7px 9px;border:1px solid rgba(255,255,255,.52);background:rgba(5,37,65,.32);color:#fff;font:500 .59rem 'DM Mono',monospace;letter-spacing:.08em;text-transform:uppercase}.mesuria-case-study__content{padding:37px 39px;display:flex;flex-direction:column}.mesuria-case-study__content h3{font-size:clamp(1.7rem,2.6vw,2.65rem);letter-spacing:-.065em;line-height:1;margin:0 0 14px}.mesuria-case-study__content>p{max-width:550px;margin:0;color:#55708b;font-size:.83rem;line-height:1.7}.mesuria-case-study__details{display:grid;grid-template-columns:repeat(3,1fr);gap:12px;margin:28px 0 0}.mesuria-case-study__details div{padding-top:10px;border-top:1px solid #bfdeed}.mesuria-case-study__details dt{color:#087ed1;font:500 .58rem 'DM Mono',monospace;letter-spacing:.08em;text-transform:uppercase}.mesuria-case-study__details dd{margin:7px 0 0;color:#3c6680;font-size:.7rem;line-height:1.55}.mesuria-case-study__footer{display:flex;justify-content:space-between;align-items:center;gap:18px;margin-top:auto;padding-top:28px}.mesuria-case-study__tags{display:flex;flex-wrap:wrap;gap:6px}.mesuria-case-study__tags span{border:1px solid #bcdceb;border-radius:50px;padding:5px 8px;color:#37647f;font:500 .59rem 'DM Mono',monospace}.mesuria-case-study__link{color:#082b4d;font:700 .7rem Manrope,Arial,sans-serif;text-decoration:none;border-bottom:1px solid #8fc9e7;padding-bottom:5px;white-space:nowrap}.mesuria-case-study__link:hover{color:#087ed1}
  .dark-theme .recruitment-cta{box-shadow:0 20px 45px rgba(0,0,0,.27)}.dark-theme .mesuria-case-study__body{background:#0a2943}.dark-theme .mesuria-case-study__head>p,.dark-theme .mesuria-case-study__content>p{color:#a8c3d8}.dark-theme .mesuria-case-study__content h3,.dark-theme .mesuria-case-study__link{color:#e5f5ff}.dark-theme .mesuria-case-study__details div{border-color:#245271}.dark-theme .mesuria-case-study__details dd{color:#b5d7e9}.dark-theme .mesuria-case-study__tags span{border-color:#2d648a;color:#bde8ff}
  @media(max-width:760px){.recruitment-cta{margin-bottom:74px;padding:27px 23px}.recruitment-cta__grid,.mesuria-case-study__body{display:block}.recruitment-cta h2{font-size:2.25rem}.recruitment-facts{margin-top:25px}.recruitment-actions .button{width:100%}.mesuria-case-study{padding-bottom:58px}.mesuria-case-study__head{display:block}.mesuria-case-study__head>p{margin-top:18px}.mesuria-case-study__visual{height:245px}.mesuria-case-study__content{padding:28px 23px}.mesuria-case-study__details{grid-template-columns:1fr;gap:13px;margin-top:23px}.mesuria-case-study__footer{display:block;padding-top:23px}.mesuria-case-study__link{display:inline-block;margin-top:18px}}
`;
document.head.append(polishStyle);

const mainContent = document.querySelector('main');
if (mainContent) {
  mainContent.id = mainContent.id || 'contenu-principal';
  if (!document.querySelector('.skip-link')) {
    const skipLink = document.createElement('a');
    skipLink.className = 'skip-link'; skipLink.href = `#${mainContent.id}`; skipLink.textContent = 'Aller au contenu';
    document.body.prepend(skipLink);
  }
}
document.querySelectorAll('.case-card img, .portrait-photo img').forEach((image) => { image.decoding = 'async'; });

if (currentPage === 'projects.html' && !document.querySelector('.mesuria-case-study')) {
  const featuredWork = document.querySelector('.featured-work');
  if (featuredWork) {
    const study = document.createElement('section');
    study.className = 'mesuria-case-study wrap reveal is-visible';
    study.setAttribute('aria-labelledby', 'mesuria-case-study-title');
    study.innerHTML = `<div class="mesuria-case-study__head"><div><p class="eyebrow">Étude de cas · Projet phare</p><h2 id="mesuria-case-study-title">Mesuria, l’IA au service de la <em>mesure.</em></h2></div><p>Un aperçu clair du besoin auquel répond le projet et de la valeur apportée à l’utilisateur.</p></div><article class="mesuria-case-study__body"><div class="mesuria-case-study__visual"><img src="mesuria-cover.png" alt="Logo Mesuria"><span class="mesuria-case-study__label">Projet IA</span></div><div class="mesuria-case-study__content"><h3>Obtenir des mensurations plus simplement.</h3><p>Mesuria est une application web qui s’appuie sur l’intelligence artificielle pour extraire automatiquement des mensurations corporelles à partir d’une image fournie par l’utilisateur.</p><dl class="mesuria-case-study__details"><div><dt>Besoin</dt><dd>Rendre la prise de mesures plus rapide et accessible.</dd></div><div><dt>Approche</dt><dd>Associer une interface web à un traitement assisté par IA.</dd></div><div><dt>Valeur</dt><dd>Transformer une image en informations utiles, de manière simple.</dd></div></dl><div class="mesuria-case-study__footer"><div class="mesuria-case-study__tags"><span>Web</span><span>IA</span><span>Analyse d’images</span></div><a class="mesuria-case-study__link" href="https://github.com/Mano-lfe/Mesuria" target="_blank" rel="noreferrer">Consulter le code sur GitHub ↗</a></div></div></article>`;
    featuredWork.after(study);
  }
}

if (['about.html', 'formation.html', 'projects.html'].includes(currentPage) && !document.querySelector('.recruitment-cta')) {
  const footer = document.querySelector('.site-footer');
  if (footer) {
    const recruitment = document.createElement('section');
    recruitment.className = 'recruitment-cta wrap reveal is-visible';
    recruitment.setAttribute('aria-labelledby', 'recruitment-title');
    recruitment.innerHTML = `<div class="recruitment-cta__grid"><div><p class="eyebrow">Alternance · Septembre 2026</p><h2 id="recruitment-title">Prêt à contribuer à votre <em>prochain projet.</em></h2><p class="recruitment-cta__copy">Je recherche une alternance en développement web et intelligence artificielle, avec l’envie de transformer des besoins concrets en solutions digitales utiles.</p></div><div class="recruitment-facts"><div><b>Septembre 2026</b><span>Disponibilité</span></div><div><b>3 sem. / 1 sem.</b><span>Entreprise / école</span></div></div></div><div class="recruitment-actions"><a class="button button-white" href="contact.html">Me contacter <span>↗</span></a><a class="button button-ghost" href="CV-Hermann-Junior-FEHA.pdf" download="CV-Hermann-Junior-FEHA.pdf">Télécharger mon CV <span>↓</span></a></div>`;
    footer.before(recruitment);
  }
}

// Menu mobile : contraste renforcé et panneau plus compact dans les deux thèmes.
const mobileNavStyle = document.createElement('style');
mobileNavStyle.textContent = `
  @media(max-width:760px){
    .site-header nav{top:64px!important;right:0!important;left:auto!important;width:min(330px,calc(100vw - 38px));padding:10px!important;gap:2px!important;border:1px solid var(--line);border-radius:16px;background:var(--white)!important;box-shadow:0 18px 38px rgba(2,43,77,.2)}
    .site-header nav a{width:100%;padding:11px 12px;border-bottom:1px solid var(--line);color:var(--ink)!important;font-size:.78rem!important}.site-header nav a:last-child{border-bottom:0}.site-header nav a:after{left:12px!important;bottom:4px!important}
    .site-header nav.open{display:flex;animation:mobile-nav-in .22s ease-out}.dark-theme .site-header nav{border-color:#2d648a;background:#0a2943!important}.dark-theme .site-header nav a{border-color:#1f4a6c;color:#e5f5ff!important}
    @keyframes mobile-nav-in{from{opacity:0;transform:translateY(-8px) scale(.98)}to{opacity:1;transform:none}}
  }
`;
document.head.append(mobileNavStyle);
if (menuToggle && menu) {
  document.addEventListener('click', (event) => {
    if (!menu.classList.contains('open') || menu.contains(event.target) || menuToggle.contains(event.target)) return;
    menu.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
  });
}
