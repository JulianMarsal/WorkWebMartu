// ════════════════════════════════════════
// TRANSLATIONS
// ════════════════════════════════════════
const translations = {
  es: {
    'meta.title': 'Martina Parola - Efectos Especiales & Maquillaje Artístico',

    'nav.cursos':   'Cursos',
    'nav.obra':     'Obra',
    'nav.social':   'Social',
    'nav.teatral':  'Teatral',
    'nav.fx':       'FX',
    'nav.contacto': 'Contacto',

    'hero.subtitle':    'Maquillaje Artístico & Efectos Especiales',
    'home.aboutTitle':  'Sobre Mí',
    'home.aboutP1':     'Soy maquilladora profesional y efectista, titulada como Profesora en Artes Plásticas por la Universidad Nacional de La Plata, con formación en maquillaje social, artístico y efectos especiales. Mi trabajo se desarrolla entre la creación artística, la docencia y la producción audiovisual, explorando el maquillaje como una herramienta de transformación, expresión y narrativa.',
    'home.aboutP2':     'Desde maquillaje beauty y social hasta caracterizaciones teatrales, bodypainting, prótesis y efectos especiales forenses, integro conocimientos de color, morfología y composición visual para crear propuestas únicas. Cada piel se convierte en un espacio de creación donde lo estético, lo emocional y lo escénico dialogan.',
    'home.portfolio':   'Portfolio',
    'home.featuredEyebrow': 'Trabajo destacado',
    'home.videos':      'Videos',

    'cat.obra.title':     'Obra',
    'cat.obra.desc':      'Trabajo conceptual y performático',
    'cat.social.title':   'Social',
    'cat.social.desc':    'Maquillaje social y eventos',
    'cat.teatral.title':  'Teatral',
    'cat.teatral.desc':   'Circo, teatro y escena',
    'cat.fx.title':       'FX',
    'cat.fx.desc':        'Efectos especiales y prótesis',

    'cursos.title':     'Cursos',
    'cursos.sub':       'Formación y talleres',
    'curso.auto.title': 'Automaquillaje',
    'curso.auto.desc':  'Aprendé técnicas de maquillaje social para aplicar vos misma. Ideal para eventos, salidas y el día a día.',
    'curso.auto.f1':    'Técnicas de base, ojos y labios',
    'curso.auto.f2':    'Productos y herramientas básicas',
    'curso.auto.f3':    'Adaptación a tu tipo de piel y rasgos',
    'curso.auto.f4':    'Material y guía descargable',
    'curso.art.title':  'Maquillaje FX forense — inicial',
    'curso.art.desc':   'Taller de maquillaje de caracterización y heridas. Técnicas de caracterización, prótesis y diseño de personajes.',
    'curso.art.f1':     'Caracterización y diseño de personajes',
    'curso.art.f2':     'Creación de hematomas',
    'curso.art.f3':     'Heridas y efectos de trauma',
    'curso.art.f4':     'Creación de sangre falsa',
    'curso.art.f5':     'Vejez con látex',
    'curso.modality':   'Online · España',
    'curso.cta':        'Consultar',

    'page.obra.title':     'Obra',
    'page.obra.sub':       'Trabajo conceptual y performático',
    'page.social.title':   'Social',
    'page.social.sub':     'Maquillaje social y eventos',
    'page.teatral.title':  'Teatral',
    'page.teatral.sub':    'Circo, teatro y escena',
    'page.fx.title':       'FX',
    'page.fx.sub':         'Efectos especiales y prótesis',
    'page.contacto.title': 'Contacto & CV',

    'contacto.title':    'Contactame',
    'contacto.view':     'Ver CV',
    'contacto.download': 'Descargar PDF',

    'wa.tooltip': 'Escribime por WhatsApp',
    'wa.message': 'Hola Martina, te escribo desde tu portfolio.',

    'cv.exp':    'Experiencia profesional',
    'cv.edu':    'Educación',
    'cv.skills': 'Habilidades',

    'cv.exp.cruzroja.title':     'Maquilladora Profesional y FX — Simulacros Oficiales de Emergencia',
    'cv.exp.cruzroja.meta':      'Cruz Roja Argentina • 2025',
    'cv.exp.gritos.title':       'Caracterizadora y Maquilladora',
    'cv.exp.gritos.meta':        'Festival Internacional de Cine de Terror y Fantasía "Gritos en el Planetario", IV edición — La Plata, Buenos Aires • 2025',
    'cv.exp.ficpba.title':       'Docente de Técnicas Profesionales de Maquillaje FX Forense',
    'cv.exp.ficpba.meta':        'Festival Internacional de Cine de la Provincia de Buenos Aires, FICPBA 3.ª edición • 2025',
    'cv.exp.mastermind.title':   'Maquilladora, Caracterizadora y Efectista — Prótesis y Maquillaje Social',
    'cv.exp.mastermind.meta':    'Producciones fotográficas "Mastermind" • 2024 – 2025',
    'cv.exp.freelance.title':    'Maquilladora Profesional, Social, Caracterizadora y Efectista',
    'cv.exp.freelance.meta':     'Proyectos freelance — Videoclip, cortometrajes y producciones audiovisuales • 2024 – 2025',
    'cv.exp.freelance.proj1':    'Cortometraje Los Opacados (2025): creación y aplicación de prótesis, maquillaje HD para cámara y caracterización de personajes.',
    'cv.exp.freelance.proj2':    'Cortometraje La Purificación — Facultad de Bellas Artes de La Plata (2025): desarrollo de prótesis, sistema de salpicado de sangre y maquillaje FX.',
    'cv.exp.freelance.proj3':    'Videoclip Aletea (2024): creación y aplicación de prótesis, maquillaje artístico y maquillaje social.',
    'cv.exp.audiovisual.title':  'Creadora de Contenido Audiovisual',
    'cv.exp.audiovisual.meta':   'Tech Gaming, Buenos Aires • Feb 2022 – Feb 2023',
    'cv.exp.fam.title':          'Artista Visual — Bodypainting y Caracterización',
    'cv.exp.fam.meta':           'Evento Fam Up — Laguna de Gómez, Junín • 2019',

    'cv.edu.lic.title':  'Licenciatura en Artes Plásticas (Grado, Especialidad Pintura)',
    'cv.edu.lic.meta':   'UNLP — Facultad de Artes • 2018 – 2023',
    'cv.edu.prof.title': 'Profesorado en Artes Plásticas (Grado, Especialidad Pintura)',
    'cv.edu.prof.meta':  'UNLP — Facultad de Artes • 2018 – 2024',

    'skill.maquillaje':  'Maquillaje artístico',
    'skill.fx':          'Efectos especiales',
    'skill.protesis':    'Prótesis',
    'skill.pintura':     'Pintura',
    'skill.audiovisual': 'Producción audiovisual',
    'skill.ingles':      'Inglés avanzado',
  },

  en: {
    'meta.title': 'Martina Parola - Special Effects & Artistic Makeup',

    'nav.cursos':   'Courses',
    'nav.obra':     'Art',
    'nav.social':   'Social',
    'nav.teatral':  'Theater',
    'nav.fx':       'FX',
    'nav.contacto': 'Contact',

    'hero.subtitle':    'Artistic Makeup & Special Effects',
    'home.aboutTitle':  'About Me',
    'home.aboutP1':     'I\'m a professional makeup and special-effects artist, with a teaching degree in Visual Arts from the National University of La Plata, and training in social, artistic, and special-effects makeup. My work spans artistic creation, teaching, and audiovisual production, exploring makeup as a tool for transformation, expression, and storytelling.',
    'home.aboutP2':     'From beauty and social makeup to theatrical characterizations, body painting, prosthetics, and forensic special effects, I bring knowledge of color, morphology, and visual composition to create unique proposals. Each skin becomes a space of creation where the aesthetic, the emotional, and the scenic come into dialogue.',
    'home.portfolio':   'Portfolio',
    'home.featuredEyebrow': 'Featured work',
    'home.videos':      'Videos',

    'cat.obra.title':     'Art',
    'cat.obra.desc':      'Conceptual and performance work',
    'cat.social.title':   'Social',
    'cat.social.desc':    'Social makeup and events',
    'cat.teatral.title':  'Theater',
    'cat.teatral.desc':   'Circus, theater and stage',
    'cat.fx.title':       'FX',
    'cat.fx.desc':        'Special effects and prosthetics',

    'cursos.title':     'Courses',
    'cursos.sub':       'Training and workshops',
    'curso.auto.title': 'Self-Makeup',
    'curso.auto.desc':  'Learn social makeup techniques to apply on yourself. Perfect for events, nights out, and everyday looks.',
    'curso.auto.f1':    'Base, eyes and lips techniques',
    'curso.auto.f2':    'Essential products and tools',
    'curso.auto.f3':    'Adapted to your skin type and features',
    'curso.auto.f4':    'Downloadable material and guide',
    'curso.art.title':  'Forensic FX Makeup — Beginner',
    'curso.art.desc':   'Characterization and wound makeup workshop. Characterization techniques, prosthetics, and character design.',
    'curso.art.f1':     'Characterization and character design',
    'curso.art.f2':     'Bruise creation',
    'curso.art.f3':     'Wounds and trauma effects',
    'curso.art.f4':     'Fake blood creation',
    'curso.art.f5':     'Old age effects with latex',
    'curso.modality':   'Online · Spain',
    'curso.cta':        'Inquire',

    'page.obra.title':     'Art',
    'page.obra.sub':       'Conceptual and performance work',
    'page.social.title':   'Social',
    'page.social.sub':     'Social makeup and events',
    'page.teatral.title':  'Theater',
    'page.teatral.sub':    'Circus, theater and stage',
    'page.fx.title':       'FX',
    'page.fx.sub':         'Special effects and prosthetics',
    'page.contacto.title': 'Contact & CV',

    'contacto.title':    'Get in touch',
    'contacto.view':     'View CV',
    'contacto.download': 'Download PDF',

    'wa.tooltip': 'Message me on WhatsApp',
    'wa.message': 'Hi Martina, I\'m writing from your portfolio.',

    'cv.exp':    'Professional experience',
    'cv.edu':    'Education',
    'cv.skills': 'Skills',

    'cv.exp.cruzroja.title':     'Professional Makeup Artist & SFX — Official Emergency Drills',
    'cv.exp.cruzroja.meta':      'Argentine Red Cross • 2025',
    'cv.exp.gritos.title':       'Character & Makeup Artist',
    'cv.exp.gritos.meta':        'International Horror and Fantasy Film Festival "Gritos en el Planetario", 4th edition — La Plata, Buenos Aires • 2025',
    'cv.exp.ficpba.title':       'Instructor of Professional Forensic FX Makeup Techniques',
    'cv.exp.ficpba.meta':        'International Film Festival of Buenos Aires Province, FICPBA 3rd edition • 2025',
    'cv.exp.mastermind.title':   'Makeup Artist, Character & SFX — Prosthetics and Social Makeup',
    'cv.exp.mastermind.meta':    '"Mastermind" Photo Productions • 2024 – 2025',
    'cv.exp.freelance.title':    'Professional, Social, Character & SFX Makeup Artist',
    'cv.exp.freelance.meta':     'Freelance projects — Music videos, short films and audiovisual productions • 2024 – 2025',
    'cv.exp.freelance.proj1':    'Short film Los Opacados (2025): prosthetic design and application, HD makeup for camera, and character work.',
    'cv.exp.freelance.proj2':    'Short film La Purificación — School of Fine Arts, La Plata (2025): prosthetic development, blood-splatter system and FX makeup.',
    'cv.exp.freelance.proj3':    'Music video Aletea (2024): prosthetic design and application, artistic makeup and social makeup.',
    'cv.exp.audiovisual.title':  'Audiovisual Content Creator',
    'cv.exp.audiovisual.meta':   'Tech Gaming, Buenos Aires • Feb 2022 – Feb 2023',
    'cv.exp.fam.title':          'Visual Artist — Bodypainting & Characterization',
    'cv.exp.fam.meta':           'Fam Up Event — Laguna de Gómez, Junín • 2019',

    'cv.edu.lic.title':  'Bachelor\'s Degree in Visual Arts (Painting)',
    'cv.edu.lic.meta':   'UNLP — School of Arts • 2018 – 2023',
    'cv.edu.prof.title': 'Teaching Degree in Visual Arts (Painting)',
    'cv.edu.prof.meta':  'UNLP — School of Arts • 2018 – 2024',

    'skill.maquillaje':  'Artistic makeup',
    'skill.fx':          'Special effects',
    'skill.protesis':    'Prosthetics',
    'skill.pintura':     'Painting',
    'skill.audiovisual': 'Audiovisual production',
    'skill.ingles':      'Advanced English',
  }
};

// ════════════════════════════════════════
// LANGUAGE STATE
// ════════════════════════════════════════
const STORAGE_KEY = 'mp-lang';

function detectInitialLanguage() {
  // 1. Honor saved preference if present
  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved && translations[saved]) return saved;

  // 2. Detect from browser locale (covers en-US, en-GB, en-AU, etc.)
  const browserLang = (navigator.language || navigator.userLanguage || '').toLowerCase();
  if (browserLang.startsWith('en')) return 'en';

  // 3. Default: Spanish
  return 'es';
}

let currentLang = detectInitialLanguage();

function t(key) {
  return translations[currentLang][key] || translations.es[key] || key;
}

function applyLanguage(lang) {
  if (!translations[lang]) return;
  currentLang = lang;
  localStorage.setItem(STORAGE_KEY, lang);

  // Update <html lang>
  document.documentElement.lang = lang;

  // Update document title
  document.title = t('meta.title');

  // Update all elements with data-i18n
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    el.textContent = t(key);
  });

  // Update language switch state (drives the sliding thumb via CSS)
  const langSwitch = document.querySelector('.lang-switch');
  if (langSwitch) langSwitch.setAttribute('data-lang', lang);

  // Update WhatsApp link with localized message + tooltip
  const waFab = document.getElementById('whatsapp-fab');
  const waTip = document.getElementById('whatsapp-fab-tooltip');
  if (waFab) {
    const phone = '34691720828'; // sin + ni espacios para wa.me
    waFab.href = `https://wa.me/${phone}?text=${encodeURIComponent(t('wa.message'))}`;
  }
  if (waTip) waTip.textContent = t('wa.tooltip');

  // Re-render dynamic content (portfolio)
  renderPortfolios();
}

// Smooth language transition wrapper
function setLanguage(lang) {
  if (!translations[lang] || lang === currentLang) {
    applyLanguage(lang);
    return;
  }
  const body = document.body;
  body.classList.add('lang-changing');
  // Wait for fade-out, then swap and fade back in
  setTimeout(() => {
    applyLanguage(lang);
    requestAnimationFrame(() => {
      body.classList.remove('lang-changing');
    });
  }, 180);
}

// Single switch — click anywhere on it toggles between languages
const langSwitch = document.querySelector('.lang-switch');
if (langSwitch) {
  langSwitch.addEventListener('click', () => {
    setLanguage(currentLang === 'es' ? 'en' : 'es');
  });
}

// ════════════════════════════════════════
// ROUTING
// ════════════════════════════════════════
const pages = document.querySelectorAll('.page');
const menuItems = document.querySelector('.menu-items');
const mobileToggle = document.querySelector('.mobile-menu-toggle');

function navigateTo(pageId) {
  pages.forEach(p => p.classList.remove('active'));
  const target = document.getElementById('page-' + pageId);
  if (target) {
    target.classList.add('active');
  } else {
    document.getElementById('page-home').classList.add('active');
  }
  document.querySelectorAll('.menu-items a').forEach(a => a.classList.remove('active'));
  const activeLink = document.querySelector(`.menu-items a[data-nav="${pageId}"]`);
  if (activeLink) activeLink.classList.add('active');
  window.scrollTo(0, 0);
  menuItems.classList.remove('open');
}

window.addEventListener('hashchange', () => {
  const hash = location.hash.slice(1) || 'home';
  navigateTo(hash);
});

window.addEventListener('DOMContentLoaded', () => {
  const hash = location.hash.slice(1) || 'home';
  navigateTo(hash);
  applyLanguage(currentLang);
  initScrollReveal();
});

// ════════════════════════════════════════
// SCROLL REVEAL
// ════════════════════════════════════════
function initScrollReveal() {
  // Skip on reduce-motion preference
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    document.querySelectorAll('.reveal, .reveal-stagger').forEach(el => {
      el.classList.add('is-visible');
    });
    return;
  }

  // Fallback for very old browsers
  if (!('IntersectionObserver' in window)) {
    document.querySelectorAll('.reveal, .reveal-stagger').forEach(el => {
      el.classList.add('is-visible');
    });
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.12,
    rootMargin: '0px 0px -60px 0px'
  });

  document.querySelectorAll('.reveal, .reveal-stagger').forEach(el => {
    observer.observe(el);
  });
}

document.addEventListener('click', (e) => {
  const navEl = e.target.closest('[data-nav]');
  if (navEl) {
    e.preventDefault();
    const target = navEl.getAttribute('data-nav');
    location.hash = target;
  }
});

mobileToggle.addEventListener('click', () => {
  menuItems.classList.toggle('open');
});


// ════════════════════════════════════════
// PORTFOLIO DATA (bilingual)
// ════════════════════════════════════════

// ── OBRA (bone / sand: trabajo conceptual) ──
const obraItems = [
  {
    title: { es: 'VACIADA?', en: 'VACIADA?' },
    subtitle: { es: '2023 · Salón de Arte Joven', en: '2023 · Salón de Arte Joven' },
    images: [
      'images/Obra/vaciada-1.jpg',
      'images/Obra/vaciada-2.jpg',
      'images/Obra/vaciada-3.jpg',
      'images/Obra/vaciada-4.jpg',
      'images/Obra/vaciada-5.jpg',
      'images/Obra/vaciada-6.jpg',
      'images/Obra/vaciada-7.jpg',
      'images/Obra/vaciada-8.jpg',
    ],
    description: {
      es: 'Instalación-performática sobre el cuestionamiento del uso coloquial "vaciado/vaciada" ante la operación de la histerectomía. Me empiezo a preguntar por las connotaciones que trae, cuánto poder, cuántas pretensiones y cuánto dolor. La propuesta de este trabajo de final de grado fue realizar una conceptualización performática, que pone en tela de juicio el nombre de uso coloquial de "vaciada" ante la operación.',
      en: 'A performance-installation questioning the colloquial use of "emptied/emptied-out" to refer to hysterectomy surgery. I begin to question its connotations — how much power, how many pretenses, how much pain it carries. This thesis project proposes a performative conceptualization that puts into question the colloquial naming of "emptied" for the operation.'
    }
  },
];

// ── SOCIAL (rosa viejo / tierras) ──
const socialItems = [
  {
    title: { es: 'Opacados — Lucía', en: 'Opacados — Lucía' },
    images: [
      'images/Social/simulacros-1.jpg',
      'images/Social/simulacros-2.jpg',
      'images/Social/simulacros-3.jpg',
      'images/Social/simulacros-12.jpg',
    ],
    description: { es: 'Maquillaje social para Lucía.', en: 'Social makeup for Lucía.' }
  },
  {
    title: { es: 'Opacados — Dante', en: 'Opacados — Dante' },
    images: [
      'images/Social/simulacros-5.jpg',
      'images/Social/simulacros-6.jpg',
    ],
    description: { es: 'Maquillaje social para Dante.', en: 'Social makeup for Dante.' }
  },
  {
    title: { es: 'Mastermind — Mariposa y Rojo', en: 'Mastermind — Butterfly and Red' },
    images: [
      'images/Social/simulacros-4.jpg',
      'images/Social/simulacros-7.jpg',
      'images/Social/simulacros-8.jpg',
      'images/Social/simulacros-9.jpg',
      'images/Social/simulacros-10.jpg',
      'images/Social/simulacros-11.jpg',
    ],
    description: { es: 'Maquillaje y caracterización para Mastermind — personaje Mariposa.', en: 'Makeup and characterization for Mastermind — Butterfly character.' }
  },
];

// ── TEATRAL (turquesa pastel / tierra) ──
const teatralItems = [
  {
    title: { es: 'Maquillaje para Circo', en: 'Circus Makeup' },
    subtitle: { es: 'Alumnas', en: 'Students' },
    images: [
      'images/Teatral/Teatral-1.jpg',
      'images/Teatral/Teatral-2.png',
      'images/Teatral/Teatral-3.png',
      'images/Teatral/Teatral-4.png',
    ],
    description: { es: 'Maquillaje para alumnas de circo.', en: 'Makeup for circus students.' }
  },
  {
    title: { es: 'Maquillaje para Circo', en: 'Circus Makeup' },
    subtitle: { es: 'Marina y amigas', en: 'Marina and friends' },
    images: [
      'images/Teatral/Teatral-5.jpg',
      'images/Teatral/Teatral-6.jpg',
      'images/Teatral/Teatral-7.jpg',
      'images/Teatral/Teatral-8.jpg',
    ],
    description: { es: 'Maquillaje para circo — Marina y amigas, 2022.', en: 'Circus makeup — Marina and friends, 2022.' }
  },
  {
    title: { es: 'Maquillaje para Circo', en: 'Circus Makeup' },
    subtitle: { es: 'Escuela de teatro', en: 'Theater school' },
    images: [
      'images/Teatral/Teatral-9.jpg',
      'images/Teatral/Teatral-10.jpg',
      'images/Teatral/Teatral-11.jpg',
      'images/Teatral/Teatral-12.jpg',
      'images/Teatral/Teatral-13.jpg',
      'images/Teatral/Teatral-14.jpg',
      'images/Teatral/Teatral-15.jpg',
      'images/Teatral/Teatral-16.jpg',
      'images/Teatral/Teatral-17.jpg',
      'images/Teatral/Teatral-18.jpg',
    ],
    description: { es: 'Caracterizaciones para escuela de teatro: vejez, arlequín y personajes.', en: 'Characterizations for theater school: old age, harlequin and other characters.' }
  },
];

// ── FX (rojo / negro) ──
const fxItems = [
  {
    title: { es: 'Prótesis', en: 'Prosthetics' },
    images: [
      'images/FX/protesis/protesis-1.jpg',
      'images/FX/protesis/protesis-2.jpg',
      'images/FX/protesis/protesis-3.jpg',
      'images/FX/protesis/protesis-4.jpg',
      'images/FX/protesis/protesis-5.jpg',
      'images/FX/protesis/protesis-6.jpg',
      'images/FX/protesis/protesis-7.jpg',
      'images/FX/protesis/protesis-8.jpg',
      'images/FX/protesis/protesis-9.jpg',
      'images/FX/protesis/protesis-10.jpg',
      'images/FX/protesis/protesis-11.jpg',
      'images/FX/protesis/protesis-12.jpg',
    ],
    description: { es: 'Aplicación y diseño de prótesis: heridas, cicatrices y efectos de trauma.', en: 'Prosthetic design and application: wounds, scars and trauma effects.' }
  },
  {
    title: { es: 'Mastermind', en: 'Mastermind' },
    images: [
      'images/FX/mastermind/mastermind-1.jpeg',
      'images/FX/mastermind/mastermind-2.jpeg',
      'images/FX/mastermind/mastermind-3.jpeg',
      'images/FX/mastermind/mastermind-4.jpeg',
      'images/FX/mastermind/mastermind-5.jpeg',
      'images/FX/mastermind/mastermind-6.jpg',
      'images/FX/mastermind/mastermind-7.jpg',
      'images/FX/mastermind/mastermind-8.jpg',
      'images/FX/mastermind/mastermind-9.jpg',
      'images/FX/mastermind/mastermind-10.jpg',
      'images/FX/mastermind/mastermind-11.jpg',
      'images/FX/mastermind/mastermind-12.jpg',
      'images/FX/mastermind/mastermind-13.jpg',
      'images/FX/mastermind/mastermind-14.jpg',
      'images/FX/mastermind/mastermind-15.jpg',
      'images/FX/mastermind/mastermind-16.jpg',
      'images/FX/mastermind/mastermind-17.jpg',
      'images/FX/mastermind/mastermind-18.jpg',
      'images/FX/mastermind/mastermind-19.jpg',
    ],
    description: { es: 'Efectos especiales — Mastermind.', en: 'Special effects — Mastermind.' }
  },
  {
    title: { es: 'Opacados', en: 'Opacados' },
    images: [
      'images/FX/los-opacados-rodaje/los-opacados-rodaje-1.jpg',
      'images/FX/los-opacados-rodaje/los-opacados-rodaje-2.jpg',
      'images/FX/los-opacados-rodaje/los-opacados-rodaje-3.jpg',
      'images/FX/los-opacados-rodaje/los-opacados-rodaje-4.jpg',
      'images/FX/los-opacados-rodaje/los-opacados-rodaje-5.jpg',
      'images/FX/los-opacados-rodaje/los-opacados-rodaje-6.jpg',
      'images/FX/los-opacados-rodaje/los-opacados-rodaje-7.jpg',
      'images/FX/los-opacados-rodaje/los-opacados-rodaje-8.jpg',
      'images/FX/los-opacados-rodaje/los-opacados-rodaje-9.jpg',
      'images/FX/los-opacados-rodaje/los-opacados-rodaje-10.jpg',
      'images/FX/los-opacados-rodaje/los-opacados-rodaje-11.jpg',
      'images/FX/los-opacados-rodaje/los-opacados-rodaje-12.jpg',
      'images/FX/los-opacados-rodaje/los-opacados-rodaje-13.jpg',
    ],
    description: { es: 'Efectos especiales para Opacados.', en: 'Special effects for Opacados.' }
  },
  {
    title: { es: 'Gritos en el Planetario', en: 'Gritos en el Planetario' },
    images: [
      'images/FX/gritos-en-el-planetario/gritos-en-el-planetario-1.jpg',
      'images/FX/gritos-en-el-planetario/gritos-en-el-planetario-2.jpg',
      'images/FX/gritos-en-el-planetario/gritos-en-el-planetario-3.jpg',
      'images/FX/gritos-en-el-planetario/gritos-en-el-planetario-4.jpg',
    ],
    description: { es: 'Caracterizaciones para el evento Gritos en el Planetario.', en: 'Characterizations for the event Gritos en el Planetario.' }
  },
  {
    title: { es: 'Simulacro', en: 'Simulation' },
    images: [
      'images/FX/simulacros/simulacros-1.jpeg',
      'images/FX/simulacros/simulacros-2.jpeg',
      'images/FX/simulacros/simulacros-3.jpeg',
    ],
    description: { es: 'Maquillaje de efectos para simulacro.', en: 'Effects makeup for a simulation.' }
  },
];


// ════════════════════════════════════════
// RENDER PORTFOLIO GRIDS
// ════════════════════════════════════════
function renderPortfolios() {
  renderGrid('grid-obra',    obraItems);
  renderGrid('grid-social',  socialItems);
  renderGrid('grid-teatral', teatralItems);
  renderGrid('grid-fx',      fxItems);
  renderCategoryPreviews();
}

// Pick the first real (non-placeholder) image from each section to use as
// the home category card background preview.
function renderCategoryPreviews() {
  const map = {
    obra:    obraItems,
    social:  socialItems,
    teatral: teatralItems,
    fx:      fxItems,
  };
  Object.entries(map).forEach(([key, items]) => {
    const item = items.find(i => i.images && i.images[0] && !i.images[0].startsWith('placeholder'));
    if (!item) return;
    const target = document.querySelector(`.category-card[data-nav="${key}"] .category-card-preview`);
    if (target) target.style.backgroundImage = `url("${item.images[0]}")`;
  });
}

// Flat render: one card per image. The data stays grouped by project, but
// each photo gets its own tile and a small tag indicating its parent group.
// Clicking still opens the modal with all the group's photos so context is preserved.
function renderGrid(containerId, items) {
  const container = document.getElementById(containerId);
  if (!container) return;
  container.innerHTML = '';

  items.forEach(item => {
    const title       = item.title[currentLang]    || item.title.es;
    const subtitle    = item.subtitle ? (item.subtitle[currentLang] || item.subtitle.es) : '';
    const description = item.description[currentLang] || item.description.es;
    const tag         = subtitle ? `${title} · ${subtitle}` : title;
    const isPlaceholder = item.images[0].startsWith('placeholder');

    if (isPlaceholder) {
      const el = document.createElement('div');
      el.className = 'portfolio-item';
      el.innerHTML = `<div class="placeholder-img"><span>${title}</span></div>`;
      container.appendChild(el);
      return;
    }

    item.images.forEach((src, idx) => {
      const el = document.createElement('div');
      el.className = 'portfolio-item is-loading';
      el.innerHTML = `
        <img src="${src}" alt="${title}" loading="lazy">
        <span class="portfolio-item-tag">${tag}</span>
      `;

      const img = el.querySelector('img');
      const stopLoading = () => el.classList.remove('is-loading');
      if (img.complete) {
        stopLoading();
      } else {
        img.addEventListener('load',  stopLoading, { once: true });
        img.addEventListener('error', () => {
          el.classList.remove('is-loading');
          el.innerHTML = `<div class="placeholder-img"><span>${title}</span></div>`;
        }, { once: true });
      }

      el.addEventListener('click', () => {
        openModal(item.images, title, description, idx);
      });

      container.appendChild(el);
    });
  });
}


// ════════════════════════════════════════
// MODAL / CAROUSEL
// ════════════════════════════════════════
const modal = document.getElementById('modal');
const modalClose = document.getElementById('modal-close');
const carouselContainer = document.getElementById('carousel-container');
const carouselPrev = document.getElementById('carousel-prev');
const carouselNext = document.getElementById('carousel-next');
const modalTitle = document.getElementById('modal-title');
const modalDescription = document.getElementById('modal-description');

let currentImageIndex = 0;
let currentImages = [];

function openModal(images, title, description, startIndex = 0) {
  currentImages = images;
  currentImageIndex = Math.max(0, Math.min(startIndex, images.length - 1));

  carouselContainer.innerHTML = '';
  currentImages.forEach((image) => {
    const item = document.createElement('div');
    item.className = 'carousel-item';
    item.innerHTML = `<img src="${image}" alt="${title}">`;
    carouselContainer.appendChild(item);
  });

  modalTitle.textContent = title;
  modalDescription.textContent = description;
  modal.classList.add('active');
  document.body.classList.add('modal-open');
  document.body.style.overflow = 'hidden';

  // Disable transition for the initial positioning, then re-enable, so the
  // carousel jumps to the clicked image without an animation slide from #0.
  // Run inside rAF so the modal is laid out and offsetWidth is the real width.
  requestAnimationFrame(() => {
    const prev = carouselContainer.style.transition;
    carouselContainer.style.transition = 'none';
    updateCarousel();
    // Force reflow, then restore transitions for subsequent prev/next.
    void carouselContainer.offsetWidth;
    carouselContainer.style.transition = prev;
  });
}

function closeModal() {
  modal.classList.remove('active');
  document.body.classList.remove('modal-open');
  document.body.style.overflow = '';
}

function updateCarousel() {
  const containerWidth = carouselContainer.offsetWidth;
  carouselContainer.style.transform = `translateX(-${currentImageIndex * containerWidth}px)`;
  carouselPrev.style.display = currentImageIndex > 0 ? 'flex' : 'none';
  carouselNext.style.display = currentImageIndex < currentImages.length - 1 ? 'flex' : 'none';
}

carouselPrev.addEventListener('click', () => {
  if (currentImageIndex > 0) { currentImageIndex--; updateCarousel(); }
});

carouselNext.addEventListener('click', () => {
  if (currentImageIndex < currentImages.length - 1) { currentImageIndex++; updateCarousel(); }
});

modalClose.addEventListener('click', closeModal);
modal.addEventListener('click', (e) => { if (e.target === modal) closeModal(); });

document.addEventListener('keydown', (e) => {
  if (!modal.classList.contains('active')) return;
  if (e.key === 'Escape') closeModal();
  if (e.key === 'ArrowLeft') carouselPrev.click();
  if (e.key === 'ArrowRight') carouselNext.click();
});

// Touch swipe support for carousel (mobile)
let touchStartX = 0;
let touchEndX = 0;
const SWIPE_THRESHOLD = 50;

carouselContainer.addEventListener('touchstart', (e) => {
  touchStartX = e.changedTouches[0].screenX;
}, { passive: true });

carouselContainer.addEventListener('touchend', (e) => {
  touchEndX = e.changedTouches[0].screenX;
  const delta = touchEndX - touchStartX;
  if (Math.abs(delta) < SWIPE_THRESHOLD) return;
  if (delta < 0) carouselNext.click(); // swipe left → next
  else carouselPrev.click();           // swipe right → prev
}, { passive: true });

// Recompute carousel position on viewport resize/orientation change
window.addEventListener('resize', () => {
  if (modal.classList.contains('active')) updateCarousel();
});
