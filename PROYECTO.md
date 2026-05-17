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
├── images/          ← (PENDIENTE) fotos del portfolio
└── PROYECTO.md      ← este documento
```

## 🔗 URLs y datos

- **Host:** https://julianmarsal.github.io/
- **Teléfono:** +34 691 72 08 28 (España)
- **Email:** martu.parola@gmail.com
- **Ubicación:** Oviedo, Asturias, España
- **LinkedIn:** linkedin.com/in/martina-parola-8889022a8
- **Cache version actual:** `?v=5`

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
| **Home** | Hero con nombre grande → About (foto + bio + contacto inline) → Categorías (4 cards) → Videos |
| **Cursos** | 2 cards con número 01/02, features list, modalidad, CTA |
| **Obra** | VACIADA, La piel como lienzo, La degradación de la mirada |
| **Social** | 3 placeholders (Opacados Lucía, Opacados Dante, Mastermind Mariposa y Rojo) |
| **Teatral** | 3 placeholders (Circo Alumnas, Circo Marina, Vejez/Arlequín) |
| **FX** | 4 placeholders (Prótesis, Mastermind, Opacados, Simulacro) |
| **Contacto** | Datos + CV (experiencia, educación, habilidades) |

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
- **Transición suave** al cambiar idioma (fade out 180ms, swap, fade in)

### Interacción y animaciones
- **Scroll-reveal:** secciones del home (about, categorías, videos, featured) entran con fade-up al scrollear (IntersectionObserver, threshold 0.12)
- **Reveal-stagger:** dentro de grids (categorías, videos) cada card aparece con 100ms de delay sobre la anterior
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
- **Featured Work block** (toggleable) — sección destacada después del hero
  - Controlada por `FEATURED_WORK` en `script.js`
  - Si `enabled: false` o `image: ''`, no se renderiza (queda invisible)
  - Layout 2-columnas en desktop (imagen + info), stacked en tablet/mobile
  - Link configurable a cualquier sección (default: obra)

---

## 🚧 En progreso ahora

> Lo que se está implementando o pulindo actualmente. Cuando termine pasa a "Lo implementado".

*(ningún item activo en este momento — esperando próximas instrucciones)*

---

## ⏳ Pendientes

### Críticos (contenido)
- [ ] Crear carpeta `/images/` en el repo
- [ ] Migrar todas las URLs de `cdn.gamma.app` a `/images/` (especialmente Obra y about-image)
- [ ] Foto real de Martina en el about
- [ ] Foto de cada item de Social/Teatral/FX
- [ ] Foto para Featured Work + decidir cuál obra destacar
- [ ] Activar `FEATURED_WORK.enabled = true` cuando haya foto

### Polish técnico
- [ ] Modal con zoom desde la card al abrir
- [ ] Hero text animation (letter-by-letter o fade staggered)
- [ ] Parallax sutil en hero al scrollear
- [ ] Loading skeleton en foto de about (home)
- [ ] Videos YouTube con "click to load" (lighthouse score)
- [ ] Focus visible states (accesibilidad por teclado)
- [ ] Lazy loading en carrusel del modal (solo la imagen actual + adyacentes)

---

## 💡 Posibles cambios a futuro

> Cosas mencionadas pero no priorizadas. Para discutir cuando llegue el momento.

- **Statement artístico citado en la home** — una frase clave en cursiva grande (ej: "la piel como lienzo, el lienzo como piel") como elemento gráfico que dé peso conceptual al sitio
- **Cursor follower en desktop** — puntito que sigue al mouse con delay. Elegante pero opcional, puede molestar
- **Páginas dedicadas por obra** (mejor SEO + más contenido) — `#obra/vaciada` con su URL propia, texto largo, fotos a tamaño completo. Sobre todo para Obra conceptual
- **Modo claro / Light theme** — probablemente no, pero queda registrado
- **Press / Apariciones** — si alguna vez la cubre algún medio
- **Newsletter o "trabajemos juntas" form**

---

## 🗺️ Plan de acción

### Inmediato
1. Implementar los 5 items "alto impacto" (en progreso)
2. Documentar todo en este archivo

### Cuando lleguen las fotos
3. Setup de `/images/` y migración de URLs
4. Activar Featured Work con imagen real
5. Modal con zoom

### Después
6. Páginas dedicadas para Obra
7. Pulidos técnicos (focus visible, lazy carousel, click-to-load de videos)
8. Decidir sobre los "posibles cambios a futuro"

---

## 🛠️ Dónde tocar qué (referencia rápida)

| Lo que querés cambiar | Archivo | Buscar |
|---|---|---|
| Datos de contacto (tel, mail) | index.html | `+34` o `mailto:` |
| Bio del about | script.js | `home.aboutP1`, `home.aboutP2` |
| Items del portfolio | script.js | `obraItems`, `socialItems`, `teatralItems`, `fxItems` |
| Textos de cursos | script.js | `curso.auto.*`, `curso.art.*` |
| **Featured Work (activar/desactivar)** | script.js | `FEATURED_WORK` |
| Mensaje pre-cargado del WhatsApp | script.js | `wa.message` (ES y EN) |
| Tooltip del botón WhatsApp | script.js | `wa.tooltip` (ES y EN) |
| Colores de sección | style.css | `.page-obra`, `.page-social`, etc |
| Color rojo base | style.css | `--accent-color: #b8352e` |
| Cache version | index.html | `?v=N` (subir el número fuerza refresh) |
| Idioma default | script.js | función `detectInitialLanguage()` |
| Items del CV | index.html | `cv.exp.*`, `cv.edu.*`, `cv.skills` |

## ⚡ Cómo activar Featured Work

En `script.js`, buscá el bloque `FEATURED_WORK`:

```js
const FEATURED_WORK = {
  enabled: true,                              // ← cambiar a true
  image:   'images/featured-vaciada.jpg',     // ← path a tu imagen
  caption: { es: 'Performance · 2023',
             en: 'Performance · 2023' },
  title:   { es: 'VACIADA?',
             en: 'VACIADA?' },
  description: { es: 'Una breve descripción de 1-2 líneas...',
                 en: 'A brief 1-2 line description...' },
  linkTo:  'obra'  // a qué sección lleva al clickear
};
```

Para **desactivar**: poné `enabled: false` (o dejá `image: ''`). La sección desaparece automáticamente.
