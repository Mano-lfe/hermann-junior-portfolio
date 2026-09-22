(() => {
  const body = document.body;
  const themeButton = document.querySelector('.theme-toggle');
  const menuButton = document.querySelector('.menu-toggle');
  const menu = document.querySelector('.site-nav');
  const page = location.pathname.split('/').pop() || 'index.html';

  const setTheme = (theme) => {
    body.classList.toggle('theme-light', theme === 'light');
    const isDark = theme !== 'light';
    themeButton?.setAttribute('aria-label', isDark ? 'Passer en mode clair' : 'Passer en mode nuit');
    if (themeButton) {
      themeButton.innerHTML = `<span aria-hidden="true">${isDark ? '☀' : '☾'}</span><span>${isDark ? 'Clair' : 'Nuit'}</span>`;
    }
  };

  let savedTheme = null;
  try { savedTheme = localStorage.getItem('portfolio-theme'); } catch (_) { /* stockage indisponible */ }
  setTheme(savedTheme || 'dark');

  themeButton?.addEventListener('click', () => {
    const nextTheme = body.classList.contains('theme-light') ? 'dark' : 'light';
    setTheme(nextTheme);
    try { localStorage.setItem('portfolio-theme', nextTheme); } catch (_) { /* stockage indisponible */ }
  });

  document.querySelectorAll('.site-nav a').forEach((link) => {
    if (link.getAttribute('href') === page) link.setAttribute('aria-current', 'page');
  });

  menuButton?.addEventListener('click', () => {
    const opened = menu?.classList.toggle('open');
    menuButton.setAttribute('aria-expanded', String(Boolean(opened)));
  });

  menu?.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
    menu.classList.remove('open');
    menuButton?.setAttribute('aria-expanded', 'false');
  }));

  const form = document.querySelector('#contact-form');
  if (form) {
    form.action = 'https://formsubmit.co/fehajunior@gmail.com';
    form.method = 'post';
    const addField = (name, value) => {
      const existing = form.querySelector(`[name="${name}"]`);
      if (existing) return existing;
      const input = document.createElement('input');
      input.type = 'hidden';
      input.name = name;
      input.value = value;
      form.append(input);
      return input;
    };
    addField('_subject', 'Nouveau message depuis le portfolio de Hermann Junior');
    addField('_template', 'table');
    addField('_honey', '');
    addField('_captcha', 'false');
    const replyTo = addField('_replyto', '');
    if (location.protocol !== 'file:') addField('_next', `${location.origin}${location.pathname}?sent=1`);
    const status = document.querySelector('#form-status');
    if (new URLSearchParams(location.search).get('sent') === '1') {
      status.textContent = 'Merci, votre message a bien été envoyé. Je vous répondrai dès que possible.';
      status.classList.add('success');
    }
    form.addEventListener('submit', () => {
      replyTo.value = form.elements.email.value;
      status.textContent = 'Envoi de votre message…';
    });
  }

  const assistantMarkup = `
    <button class="assistant-launcher" type="button" aria-controls="portfolio-assistant" aria-expanded="false" aria-label="Ouvrir l’assistant du portfolio">◌</button>
    <aside class="assistant-panel" id="portfolio-assistant" role="dialog" aria-modal="false" aria-labelledby="assistant-title" aria-hidden="true">
      <header class="assistant-head">
        <span class="assistant-avatar" aria-hidden="true">HJ</span>
        <div><h2 id="assistant-title">Assistant du portfolio</h2><p>INFORMATIONS SUR LE PROFIL</p></div>
        <button class="assistant-close" type="button" aria-label="Fermer l’assistant">×</button>
      </header>
      <div class="assistant-body">
        <p class="assistant-message" data-answer>Bonjour ! Je peux vous renseigner sur les projets, les compétences, la formation ou le contact de Hermann.</p>
        <div class="assistant-actions">
          <button type="button" data-topic="projects">Projets</button><button type="button" data-topic="skills">Compétences</button><button type="button" data-topic="training">Formation</button><button type="button" data-topic="contact">Contact</button>
        </div>
        <form class="assistant-form"><input name="question" autocomplete="off" maxlength="180" placeholder="Votre question…" aria-label="Votre question"><button type="submit" aria-label="Envoyer">↑</button></form>
        <p class="assistant-note">Réponses basées sur les informations publiques du portfolio.</p>
      </div>
    </aside>`;
  document.body.insertAdjacentHTML('beforeend', assistantMarkup);

  const launcher = document.querySelector('.assistant-launcher');
  const panel = document.querySelector('.assistant-panel');
  const closeButton = document.querySelector('.assistant-close');
  const answer = document.querySelector('[data-answer]');
  const assistantInput = panel.querySelector('input');
  const answers = {
    projects: 'Mesuria est le projet phare : une application web qui utilise l’IA pour extraire des mensurations depuis une photo. Hermann a aussi réalisé T-Hair et un site e-commerce.',
    skills: 'Hermann travaille notamment avec HTML, CSS, JavaScript, PHP, SQL et les bases de données. Il s’intéresse également au développement d’applications IA.',
    training: 'Hermann est en Bachelor 3 Informatique, spécialité Développement Web & IA, à SUPINFO Paris. Il a précédemment étudié à EPSI Paris.',
    contact: 'Vous pouvez écrire à fehajunior@gmail.com ou appeler le +33 6 12 43 65 90. Les liens LinkedIn et GitHub sont disponibles sur la page Contact.'
  };
  const openAssistant = () => {
    panel.setAttribute('aria-hidden', 'false');
    launcher.setAttribute('aria-expanded', 'true');
    assistantInput.focus();
  };
  const closeAssistant = () => {
    panel.setAttribute('aria-hidden', 'true');
    launcher.setAttribute('aria-expanded', 'false');
    launcher.focus();
  };
  launcher.addEventListener('click', () => panel.getAttribute('aria-hidden') === 'true' ? openAssistant() : closeAssistant());
  closeButton.addEventListener('click', closeAssistant);
  panel.querySelectorAll('[data-topic]').forEach((button) => button.addEventListener('click', () => {
    answer.textContent = answers[button.dataset.topic];
  }));
  panel.querySelector('form').addEventListener('submit', (event) => {
    event.preventDefault();
    const question = assistantInput.value.toLocaleLowerCase('fr-FR');
    const topic = /projet|mesuria|t-hair|e-commerce/.test(question) ? 'projects'
      : /compétence|html|css|javascript|php|sql|ia/.test(question) ? 'skills'
        : /formation|supinfo|epsi|bachelor/.test(question) ? 'training'
          : /contact|email|mail|téléphone|linkedin|github/.test(question) ? 'contact' : null;
    answer.textContent = topic ? answers[topic] : 'Je peux répondre sur les projets, les compétences, la formation ou les coordonnées de Hermann.';
    assistantInput.value = '';
  });
  panel.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') closeAssistant();
    if (event.key === 'Tab') {
      const focusable = [...panel.querySelectorAll('button, input')];
      const first = focusable[0];
      const last = focusable.at(-1);
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
      if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
    }
  });
})();
