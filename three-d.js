// Effets 3D du portfolio : scène de l'accueil, cartes inclinables et apparitions.
(() => {
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;

  // 1. Scène 3D décorative dans l'accueil (sphère, anneaux en orbite, cubes).
  const orbit = document.querySelector('.hero-orbit');
  if (orbit && !orbit.querySelector('.scene')) {
    const face = (labels) => labels.map((label) => `<span>${label}</span>`).join('');
    const scene = document.createElement('div');
    scene.className = 'scene';
    scene.innerHTML = `
      <div class="ring ring-2"><i></i></div>
      <div class="ring ring-1"><i></i></div>
      <div class="ring ring-3"><i></i></div>
      <div class="cube cube-a">${face(['&lt;/&gt;', 'IA', 'JS', 'PHP', 'SQL', 'CSS'])}</div>
      <div class="cube cube-b">${face(['{ }', 'AI', 'UI', 'DB', 'UX', 'API'])}</div>`;
    const sphere = document.createElement('div');
    sphere.className = 'sphere';
    // La sphère reste hors du calque 3D pour éviter qu'un anneau ne la coupe en deux.
    orbit.prepend(sphere, scene);

    if (finePointer && !reduceMotion) {
      window.addEventListener('pointermove', (event) => {
        const x = event.clientX / window.innerWidth - 0.5;
        const y = event.clientY / window.innerHeight - 0.5;
        scene.style.setProperty('--sy', `${x * 30}deg`);
        scene.style.setProperty('--sx', `${-8 - y * 22}deg`);
      }, { passive: true });
    }
  }

  // 2. Cartes qui s'inclinent en perspective sous la souris.
  const tiltTargets = document.querySelectorAll('.skill-card, .project-card, .timeline-item, .contact-card, .contact-form, .recruitment-cta, .portrait, .fact-list > div, .case-details > div');
  tiltTargets.forEach((element) => {
    element.setAttribute('data-tilt', '');
    if (!finePointer || reduceMotion) return;
    const strength = element.matches('.project-card, .contact-form, .recruitment-cta, .portrait') ? 6 : 10;
    element.addEventListener('pointermove', (event) => {
      const rect = element.getBoundingClientRect();
      const px = (event.clientX - rect.left) / rect.width;
      const py = (event.clientY - rect.top) / rect.height;
      element.classList.add('is-tilting');
      element.style.setProperty('--ry', `${(px - 0.5) * strength}deg`);
      element.style.setProperty('--rx', `${(0.5 - py) * strength}deg`);
      element.style.setProperty('--mx', `${px * 100}%`);
      element.style.setProperty('--my', `${py * 100}%`);
    });
    element.addEventListener('pointerleave', () => {
      element.classList.remove('is-tilting');
      element.style.setProperty('--rx', '0deg');
      element.style.setProperty('--ry', '0deg');
    });
  });

  // 3. Apparition en profondeur au défilement.
  if (reduceMotion || !('IntersectionObserver' in window)) return;
  const revealTargets = document.querySelectorAll('.page-hero, .section-head, .skill-card, .project-card, .timeline-item, .case-copy, .about-copy, .contact-intro, .contact-form, .recruitment-cta');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const target = entry.target;
      target.classList.add('is-visible');
      observer.unobserve(target);
      // Une fois apparu, on rend la main à l'effet d'inclinaison.
      setTimeout(() => {
        target.classList.remove('reveal', 'is-visible');
        target.style.transitionDelay = '';
      }, 1300);
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
  revealTargets.forEach((element, index) => {
    element.classList.add('reveal');
    element.style.transitionDelay = `${Math.min(index % 4, 3) * 80}ms`;
    observer.observe(element);
  });
})();
