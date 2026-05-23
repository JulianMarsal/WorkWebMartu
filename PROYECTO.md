# Portfolio Martina Parola — Estado del proyecto

> **Para Julián / Claude:** este documento es la fuente de verdad del estado del sitio. Lo actualizamos a medida que avanzamos. Si Claude se corta por tokens, puede leer este archivo y retomar exactamente desde donde se quedó.

---

## 📁 Archivos del proyecto

```
/
├── index.html       ← página única (SPA con hash routing)
├── style.css        ← todos los estilos
├── script.js        ← routing, i18n, portfolio data, modal
├── 404.html         ← página de error custom
├── sitemap.xml      ← para Google
├── robots.txt       ← para crawlers
├── handoff.html     ← documento para Martina (pendientes + decisiones)
├── images/          ← fotos del portfolio
│   ├── profile-pic.jpg
│   ├── Obra/        ← 8 fotos (VACIADA, migradas de cdn.gamma.app)
│   ├── Social/      ← 12 fotos (Opacados Lucía/Dante + Mastermind/Mariposa)
│   ├── Teatral/     ← 18 fotos (Circo: Alumnas + Marina + Escuela de teatro)
│   └── FX/
│       ├── mastermind/             ← 19 fotos
│       ├── simulacros/             ← 3 fotos
│       ├── los-opacados-rodaje/    ← 13 fotos
│       ├── protesis/               ← 12 fotos (antes era placeholder)
│       └── gritos-en-el-planetario/← 4 fotos
└── PROYECTO.md      ← este documento
```

## 🔗 URLs y datos

- **Host:** https://martinaparola.art/ (CNAME a `julianmarsal.github.io`)
- **Teléfono:** +34 691 72 08 28 (España)
- **Email:** martu.parola@gmail.com
- **Ubicación:** Oviedo, Asturias, España
- **LinkedIn:** linkedin.com/in/martina-parola-8889022a8
- **Cache version actual:** `?v=20`

## 🧭 Navegación (orden y data-nav)

| Link | data-nav | Color de sección | RGB |
|---|---|---|---|
| Logo | home | (default rojo) | — |
| Cursos | cursos | (default rojo) | — |
| Obra | obra | `#b9a78a` (bone) | 185, 167, 138 |
| Social | social | `#c4917b` (rosa viejo) | 196, 145, 123 |
| Teatral | teatral | `#7aaca5` (turquesa) | 122, 172, 165 |
| FX | fx | `#b8352e` (rojo) | 184, 53, 46 |
| Contacto | contacto | (default rojo) | — |

---

## ✅ Lo implementado

### Estructura general
- SPA con hash routing (`#cursos`, `#obra`, etc) — un solo HTML, varias "páginas" que se muestran/ocultan
- Idioma: detección automática del browser + override por click + persistencia en localStorage (`mp-lang`)
- Switch ES/EN deslizante — click en cualquier parte del switch togglea
- Responsive: 4 breakpoints (1024, 768, 480, 360)
- Cache busting con `?v=N` en CSS/JS

### Diseño visual
- Paleta dark base (`#0a0a0a`) con tipografía Instrument Serif para display
- Variables CSS por página (`--accent-color` y `--accent-rgb`) que cambian con la sección
- **Fondos atmosféricos:** radial gradient con el color de cada sección al 7-10% en los primeros 600px (`.page-XXX::before`)
- **Page headers** con gradient vertical del color de sección (14% → 4% → transparente)
- **Cards de portfolio** con tinte sutil del color de sección
- **Grain editorial:** SVG turbulence en `body::after` con 4.5% de opacidad, mix-blend-mode overlay (textura de impresión sutil)
- **Nav links:** cada link se tinta del color de su sección destino en hover/active

### Páginas

| Página | Contenido |
|---|---|
| **Home** | Hero con nombre grande → Sobre Mí (foto + bio + contacto inline) → Portfolio (4 cards con preview de imagen real) |
| **Cursos** | 2 cards con número 01/02, features list, modalidad, CTA |
| **Obra** | VACIADA (8 fotos locales en `images/Obra/`) |
| **Social** | Opacados Lucía (4 fotos) · Opacados Dante (2 fotos) · Mastermind Mariposa y Rojo (6 fotos) |
| **Teatral** | Maquillaje para Circo — Alumnas (4) · Marina y amigas (4) · Escuela de teatro (10) |
| **FX** | Prótesis (12) · Mastermind (19) · Opacados (13) · Gritos en el Planetario (4) · Simulacro (3) |
| **Contacto** | Datos + CV (experiencia, educación, habilidades) |

### Portfolio cards
- **Grilla aplanada:** cada foto es su propia card en la grilla (no se agrupan por proyecto en la vista). La data sigue agrupada internamente para preservar el contexto del modal
- **Tag pequeño** abajo a la izquierda mostrando el proyecto al que pertenece la foto (ej. "Opacados — Lucía", "Maquillaje para Circo · Alumnas")
- **Click abre el modal** con TODAS las fotos del grupo original, empezando por la clickeada (preserva descripción y permite navegar entre fotos relacionadas)
- Skeleton de loading con shimmer mientras carga
- Image error fallback → si una imagen falla, cae a placeholder con el título

### Home Portfolio cards (categorías)
- 4 cards (Obra/Social/Teatral/FX) con **preview de la primera foto real** de cada sección como fondo
- Gradient al pie para legibilidad del título sobre la foto
- Border-color del color de sección, sombra en hover del mismo color
- Si no hay imagen disponible, fallback al gradient de color sólido

### Modal del portfolio
- Carousel con teclado (← → Esc) y swipe táctil en mobile
- Cierra al click en overlay o botón
- Botones prev/next con auto-hide en los extremos
- Re-render de posicionamiento on resize/orientación

### SEO
- Title + meta description en español
- Keywords con menciones a Oviedo, Asturias, España
- Open Graph completo (Facebook, WhatsApp, LinkedIn, Telegram)
- Twitter/X Card
- JSON-LD structured data (Person schema con URL canónica)
- Favicon SVG inline (M cursiva blanca + punto rojo)
- Canonical URL + og:url
- Sitemap.xml con todas las "páginas"
- Robots.txt

### Accesibilidad y mobile
- `viewport-fit=cover` (notch iPhone respetado)
- `theme-color` en mobile (barra de URL tintada)
- `-webkit-tap-highlight-color: transparent` (sin flash al tocar)
- `touch-action: manipulation` (sin delay de 300ms)
- `prefers-reduced-motion` respetado (animaciones se anulan si el usuario lo pide)
- Skeleton de loading con shimmer mientras imágenes cargan
- Image error fallback → si una imagen falla, cae a placeholder con el título
- Mobile menu con active state claro (borde izquierdo + bg)
- Portfolio grid 2-col en phones, 1-col en muy chicos

### Idiomas
- Detección automática: `localStorage > navigator.language > "es"` default
- ~70 claves traducidas ES/EN
- Switch animado (slider deslizante)
- Datos de portfolio bilingües (`title: { es, en }`, `description: { es, en }`)
- Contador de fotos también localizado ("3 fotos" / "3 photos")
- **Transición suave** al cambiar idioma (fade out 180ms, swap, fade in)

### Interacción y animaciones
- **Scroll-reveal:** secciones del home (about, categorías) entran con fade-up al scrollear (IntersectionObserver, threshold 0.12)
- **Reveal-stagger:** dentro de la grid de categorías cada card aparece con 100ms de delay sobre la anterior
- **Hover de las cards** con elevación + sombra del color de sección
- **Switch ES↔EN** con thumb deslizante (cubic-bezier 0.4, 0, 0.2, 1)
- **Animaciones se anulan** si el sistema tiene reduce-motion activado

### Engagement
- **Botón flotante de WhatsApp** abajo a la derecha
  - Verde clásico de WhatsApp (`#25D366`)
  - Tooltip al hover en desktop ("Escribime por WhatsApp" / "Message me on WhatsApp")
  - Link `wa.me/34691720828` con mensaje pre-cargado según idioma
  - Se oculta automáticamente cuando se abre el modal
  - Tamaño responsive (60px desktop / 56px mobile)

---

## 🚧 En progreso ahora

> Lo que se está implementando o pulindo actualmente. Cuando termine pasa a "Lo implementado".

*(ningún item activo en este momento — esperando próximas instrucciones)*

---

## ⏳ Pendientes

### Bloqueantes para producción
- [ ] **Comprimir imágenes pesadas** (Teatral 5-8 pesan 11-12MB c/u — total 46MB en una sola página). Convertir a WebP a max 1920px / calidad 80. Aplicar también a las nuevas tandas grandes (Teatral 13-18, Mastermind 6-19, Prótesis 1-12)

### Contenido faltante
- [ ] Descripciones más específicas en Social/Teatral/FX (hoy son una línea genérica cada una)
- [ ] Subtitles en Social (consistencia con Teatral, ej. "Personaje: Lucía")
- [ ] Decidir si activar Featured Work y con qué obra
- [ ] **Confirmar agrupación de Teatral-13..17**: parecen un proyecto separado (estilo Harley Quinn + personajes varios) pero los agrupé en "Caracterizaciones — Escuela de teatro" porque Martina pidió "agregar a las ya existentes". Revisar si conviene separar en un grupo propio
- [ ] **Confirmar contenido de Social-11..12**: parecen también de Mastermind/Mariposa pero son fotos profesionales DSLR (`_DSC25xx`). Verificar con Martina si son del mismo set

### Polish técnico
- [ ] Keyboard accessibility en cards (hoy no son focusables con Tab)
- [ ] `aria-label` en el botón close del modal
- [ ] Modal con zoom desde la card al abrir
- [ ] Hero text animation (letter-by-letter o fade staggered)
- [ ] Loading skeleton en foto de about (home)
- [ ] Focus visible states (accesibilidad por teclado)
- [ ] Lazy loading en carrusel del modal (solo la imagen actual + adyacentes)

---

## 💡 Posibles cambios a futuro

> Cosas mencionadas pero no priorizadas. Para discutir cuando llegue el momento.

- **Statement artístico citado en la home** — una frase clave en cursiva grande (ej: "la piel como lienzo, el lienzo como piel") como elemento gráfico que dé peso conceptual al sitio
- **Cursor follower en desktop** — puntito que sigue al mouse con delay. Elegante pero opcional, puede molestar
- **Páginas dedicadas por obra** (mejor SEO + más contenido) — `#obra/vaciada` con su URL propia, texto largo, fotos a tamaño completo. Sobre todo para Obra conceptual
- **Volver a poner Videos en el home** — sacados por decisión actual (home minimalista). Si en algún momento se quiere reactivar, el HTML del bloque está en el historial git
- **Volver a poner Featured Work** — sacado por redundancia con Obra. Si se quiere reactivar con otra obra distinta, recuperar del historial git
- **Modo claro / Light theme** — probablemente no, pero queda registrado
- **Press / Apariciones** — si alguna vez la cubre algún medio
- **Newsletter o "trabajemos juntas" form**

---

## 🗺️ Plan de acción

### Inmediato (siguiente sesión)
1. Comprimir las imágenes pesadas de Teatral (bloqueante para mobile)
2. Decidir destino de la card Prótesis con Martina
3. Migrar URLs de Obra de CDN externa a `/images/`

### Cuando Martina mande material adicional
4. Más fotos de Mastermind (Social)
5. CV en PDF
6. Foto/decisión sobre Featured Work (si se quiere reactivar)

### Después
7. Páginas dedicadas para Obra (mejor SEO)
8. Pulidos técnicos (focus visible, lazy carousel, keyboard nav)
9. Decidir sobre los "posibles cambios a futuro"

---

## 🛠️ Dónde tocar qué (referencia rápida)

| Lo que querés cambiar | Archivo | Buscar |
|---|---|---|
| Datos de contacto (tel, mail) | index.html | `+34` o `mailto:` |
| Bio del about | script.js | `home.aboutP1`, `home.aboutP2` |
| Items del portfolio | script.js | `obraItems`, `socialItems`, `teatralItems`, `fxItems` |
| Preview del home portfolio | script.js | `renderCategoryPreviews()` (auto-toma la 1ra foto real de cada sección) |
| Textos de cursos | script.js | `curso.auto.*`, `curso.art.*` |
| Mensaje pre-cargado del WhatsApp | script.js | `wa.message` (ES y EN) |
| Tooltip del botón WhatsApp | script.js | `wa.tooltip` (ES y EN) |
| Colores de sección | style.css | `.page-obra`, `.page-social`, etc |
| Color rojo base | style.css | `--accent-color: #b8352e` |
| Cache version | index.html | `?v=N` (subir el número fuerza refresh) |
| Idioma default | script.js | función `detectInitialLanguage()` |
| Items del CV | index.html | `cv.exp.*`, `cv.edu.*`, `cv.skills` |

---

## 📋 Historial de decisiones

> Razones detrás de cambios no obvios, para no volver a discutir lo mismo.

- **2026-05 — Saqué Featured VACIADA y Videos del home:** la card destacada repetía la obra que ya aparece en Obra; los videos agregaban ruido. El home quedó como Hero → Sobre Mí → Portfolio (4 cards). Más limpio y enfocado.
- **2026-05 — Las 4 cards del home pasaron a tener foto real de cada sección:** sin foto se sentían vacías; con la primera foto real de cada sección dan un anticipo visual del trabajo y refuerzan la identidad de color de cada uno.
- **2026-05 — Cards de portfolio: caption siempre visible + badge contador:** antes el título solo aparecía en hover (mobile no lo veía nunca) y no había indicación de que cada card tenía 3-12 fotos adentro.
- **2026-05 — Re-agrupé Social:** Cursor había hecho un split mecánico 2-2-2 que mezclaba personajes; ahora va Lucía (3 fotos) / Dante (2) / Mastermind (1) según el contenido real.
- **2026-05 — Grillas de portfolio aplanadas:** antes se mostraba 1 card por proyecto (3 cards en Social, 3 en Teatral, 3+placeholder en FX) y el contenido se veía escaso. Cada foto pasa a ser su propia card en la grilla, con un tag chico que indica a qué proyecto pertenece. El modal sigue agrupando para mantener el contexto al navegar. Resultado: ~36 cards visibles entre Obra/Social/Teatral/FX en lugar de ~13.
- **2026-05 — Tanda grande de fotos nuevas:** Martina subió ~44 fotos nuevas. Renombradas en lote siguiendo el patrón existente (`simulacros-N.jpg`, `Teatral-N.jpg`, etc.). Nuevos grupos: Prótesis (reemplaza el placeholder con 12 fotos reales) y Gritos en el Planetario (4 fotos, evento Halloween con personajes). Cards visibles ahora: ~85.
- **2026-05 — Obra migrada a local:** las 8 fotos de VACIADA pasaron de `cdn.gamma.app` a `images/Obra/vaciada-N.jpg`. Las otras 2 obras conceptuales ("La piel como lienzo" y "La degradación de la mirada") se eliminaron a pedido de Martina — la sección Obra ahora muestra solo VACIADA.
- **2026-05 — Cursos rediseñados:** "Maquillaje Artístico" → "Maquillaje FX forense — inicial" (taller de caracterización y heridas con 5 features). Modalidad de ambos cursos cambió de "Presencial · Oviedo" a "Online · España".
- **2026-05 — Acrobacia removida del CV:** Martina ya no posiciona acrobacia en telas en este portfolio. Sacadas las 3 entradas (experiencia docente en "El Clú", profesorado en Alto Vuelo, skill-tag "Acrobacia aérea") del HTML y traducciones ES/EN.
- **2026-05 — CV con doble acción:** "Ver CV" (botón rojo, primario, abre el PDF en pestaña nueva) + "Descargar PDF" (link secundario debajo). La mayoría de visitas son consultas rápidas → ver es más útil que descargar. Quien necesite guardar el archivo tiene el link explícito de descarga al lado.
- **2026-05 — Dominio propio:** sitio migrado a `https://martinaparola.art/` vía CNAME a GitHub Pages. Actualizadas todas las referencias canónicas (og:url, canonical, JSON-LD, sitemap.xml, robots.txt).
