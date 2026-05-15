// ════════════════════════════════════════
// ROUTING
// ════════════════════════════════════════
const pages = document.querySelectorAll('.page');
const navLinks = document.querySelectorAll('[data-nav]');
const menuItems = document.querySelector('.menu-items');
const mobileToggle = document.querySelector('.mobile-menu-toggle');

function navigateTo(pageId) {
  // Hide all pages
  pages.forEach(p => p.classList.remove('active'));
  // Show target
  const target = document.getElementById('page-' + pageId);
  if (target) {
    target.classList.add('active');
  } else {
    document.getElementById('page-home').classList.add('active');
  }
  // Update nav active state
  document.querySelectorAll('.menu-items a').forEach(a => a.classList.remove('active'));
  const activeLink = document.querySelector(`.menu-items a[data-nav="${pageId}"]`);
  if (activeLink) activeLink.classList.add('active');
  // Scroll to top
  window.scrollTo(0, 0);
  // Close mobile menu
  menuItems.classList.remove('open');
}

// Listen for hash changes
window.addEventListener('hashchange', () => {
  const hash = location.hash.slice(1) || 'home';
  navigateTo(hash);
});

// Initial load
window.addEventListener('DOMContentLoaded', () => {
  const hash = location.hash.slice(1) || 'home';
  navigateTo(hash);
  renderPortfolios();
});

// Nav click handling (for data-nav links everywhere, not just menu)
document.addEventListener('click', (e) => {
  const navEl = e.target.closest('[data-nav]');
  if (navEl) {
    e.preventDefault();
    const target = navEl.getAttribute('data-nav');
    location.hash = target;
  }
});

// Mobile menu toggle
mobileToggle.addEventListener('click', () => {
  menuItems.classList.toggle('open');
});


// ════════════════════════════════════════
// PORTFOLIO DATA
// ════════════════════════════════════════

// ── SOCIAL (rosa viejo / tierras) ──
const socialItems = [
  {
    title: "Opacados — Lucía",
    images: [
      "placeholder-social-lucia-1.jpg",
    ],
    description: "Maquillaje social para Lucía."
  },
  {
    title: "Opacados — Dante",
    images: [
      "placeholder-social-dante-1.jpg",
    ],
    description: "Maquillaje social para Dante."
  },
  {
    title: "Mastermind — Mariposa y Rojo",
    images: [
      "placeholder-social-mastermind-1.jpg",
    ],
    description: "Maquillaje social — Mastermind."
  },
];

// ── TEATRAL (turquesa pastel / tierra) ──
const teatralItems = [
  {
    title: "Maquillaje para Circo",
    subtitle: "Alumnas",
    images: [
      // REEMPLAZAR: pegar URLs de las fotos del Drive
      "placeholder-teatral-circo-alumnas-1.jpg",
    ],
    description: "Maquillaje para alumnas de circo."
  },
  {
    title: "Maquillaje para Circo",
    subtitle: "Marina y amigas",
    images: [
      // REEMPLAZAR: pegar URLs de las fotos del Drive
      "placeholder-teatral-circo-marina-1.jpg",
    ],
    description: "Maquillaje para circo — Marina y amigas, 2022."
  },
  {
    title: "Vejez / Arlequín",
    subtitle: "Escuela de teatro",
    images: [
      // REEMPLAZAR: pegar URLs de las fotos del Drive
      "placeholder-teatral-vejez-1.jpg",
    ],
    description: "Caracterización de vejez y arlequín para escuela de teatro."
  },
];

// ── FX (rojo / negro) ──
const fxItems = [
  {
    title: "Prótesis",
    images: [
      // REEMPLAZAR: pegar URLs de las fotos del Drive
      "placeholder-fx-protesis-1.jpg",
    ],
    description: "Aplicación y diseño de prótesis de silicona."
  },
  {
    title: "Mastermind",
    images: [
      // REEMPLAZAR: pegar URLs de las fotos del Drive
      "placeholder-fx-mastermind-1.jpg",
    ],
    description: "Efectos especiales — Mastermind."
  },
  {
    title: "Opacados",
    images: [
      // REEMPLAZAR: pegar URLs de las fotos del Drive
      "placeholder-fx-opacados-1.jpg",
    ],
    description: "Efectos especiales para Opacados."
  },
  {
    title: "Simulacro",
    images: [
      // REEMPLAZAR: pegar URLs de las fotos del Drive
      "placeholder-fx-simulacro-1.jpg",
    ],
    description: "Maquillaje de efectos para simulacro."
  },
];


// ════════════════════════════════════════
// RENDER PORTFOLIO GRIDS
// ════════════════════════════════════════
function renderPortfolios() {
  renderGrid('grid-social', socialItems);
  renderGrid('grid-teatral', teatralItems);
  renderGrid('grid-fx', fxItems);
}

function renderGrid(containerId, items) {
  const container = document.getElementById(containerId);
  if (!container) return;

  items.forEach(item => {
    const el = document.createElement('div');
    el.className = 'portfolio-item';

    const isPlaceholder = item.images[0].startsWith('placeholder');

    el.innerHTML = `
      ${isPlaceholder
        ? `<div class="placeholder-img"><span>${item.title}</span></div>`
        : `<img src="${item.images[0]}" alt="${item.title}" loading="lazy">`
      }
      <div class="portfolio-item-overlay">
        <h3>${item.title}</h3>
        ${item.subtitle ? `<p class="portfolio-item-sub">${item.subtitle}</p>` : ''}
      </div>
    `;

    el.addEventListener('click', () => {
      if (!isPlaceholder) {
        openModal(item.images, item.title, item.description);
      }
    });

    container.appendChild(el);
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

function openModal(images, title, description) {
  currentImages = images;
  currentImageIndex = 0;

  carouselContainer.innerHTML = '';
  currentImages.forEach((image) => {
    const item = document.createElement('div');
    item.className = 'carousel-item';
    item.innerHTML = `<img src="${image}" alt="${title}">`;
    carouselContainer.appendChild(item);
  });

  void carouselContainer.offsetWidth;
  updateCarousel();
  modalTitle.textContent = title;
  modalDescription.textContent = description;
  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  modal.classList.remove('active');
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
