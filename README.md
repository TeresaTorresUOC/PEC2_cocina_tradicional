# IV Jornades de Cuina Tradicional Valenciana
**Borriana (Castelló), 23–25 gener 2026**

## 1. Introducción
Las IV Jornades de Cuina Tradicional Valenciana son un encuentro gastronómico en Borriana que celebra el producto local y las recetas de l'Alcora, la Plana y la costa mediterránea. El sitio web presenta la agenda, los ponentes y sus plats estrella, recoge inscripciones y facilita el contacto con la organización mediante formularios y llamadas a la acción visibles desde cualquier dispositivo.

## 2. Proceso de desarrollo
1. **Arranque del proyecto**: se clonó UOC Boilerplate para partir de una estructura mínima con Parcel ya configurado.
2. **Dependencias**: se añadieron Bootstrap 5 para la capa de componentes, Font Awesome para iconografía, Stylelint y sus plugins para linting de Sass y el nuevo ajuste de `.stylelintrc` basado en BEM + ITCSS.
3. **Entorno de desarrollo**: durante la maquetación se utilizó `npm run dev` (Parcel con livereload) y `npm run lint:css` para validar las hojas de estilo.
4. **Build de producción**: el comando `npm run build` genera el bundle optimizado en `dist`, minificando CSS/JS y purgando cachés.
5. **Publicación**: el repositorio se sube a GitHub y se conecta a Netlify para desplegar automáticamente la rama principal.

## 3. Metodología y guía de estilo
Aplicamos **ITCSS** para escalar la hoja de estilos en capas (`reset`, `base`, `layout`, `components`, `utilities`, `pages`) y **BEM** para nombrar bloques y elementos (`.hero__title`, `.card__meta--accent`). Este enfoque facilita que cada página del sitio (portada, ponents, article i extra) comparta cimientos comunes y que los overrides sean predecibles gracias a `@layer`.

Stylelint se ha configurado con `stylelint-scss`, `stylelint-order` y `stylelint-selector-bem-pattern` para reforzar el patrón BEM, ordenar propiedades y permitir selectores modernos como `:has()` y `:is()`. Así se evita la mezcla de nomenclaturas, la duplicidad de reglas y problemas de especificidad al trabajar con Sass.

## 4. Dependencias
- **Bootstrap 5**: se usan contenedores fluidos, tarjetas, botones y utilidades de spacing. Las variables de color, tipografía, radios y paddings se inyectan desde nuestros parciales Sass para mantener la identidad visual.
- **Font Awesome**: integrado vía paquete npm `@fortawesome/fontawesome-free` y cargado en `vendors/fonts` para los iconos de navegación y llamadas a la acción.
- **Stylelint + plugins**: Stylelint, stylelint-config-standard-scss, stylelint-scss, stylelint-order y stylelint-selector-bem-pattern garantizan consistencia y el cumplimiento de BEM.

## 5. Decisiones de diseño y desarrollo
- **Mobile first**: se parte de un layout compacto y se escalan las rejillas con media queries y container queries para pantallas mayores.
- **Responsive desde wireframes desktop**: las secciones de portada usan CSS Grid con `@supports` como fallback a layout en columna.
- **Paleta y tipografías**: coral y ámbar inspirados en el arrocito al forn y la luz del Mediterráneo; verde esmeralda como acento vegetal; tipografías Space Grotesk (titulares) y Cormorant Garamond (destacados) evocan tradición y modernidad.

## 6. Requisitos técnicos
- **CSS Grid en portada**: la home compone hero, agenda y cards con `display: grid` y un bloque `@supports not (display: grid)` como fallback.
- **Flexbox en ponents**: las fichas de ponentes (`ponents.html`) usan Flexbox para alinear foto, texto y botones de reserva.
- **Selectores avanzados**: `:has()` para resaltar artículos con blockquote, `:is()`/`:where()` para agrupar variantes con baja especificidad.
- **Container queries**: tarjetas de ponentes y galerías ajustan columnas según el ancho de cada contenedor, no del viewport.
- **Capas de cascada**: `@layer reset, base, layout, components, utilities, pages;` en `main.scss` asegura el orden ITCSS.
- **Sass**: variables, funciones (`rem`, `shade`, `spacing`), mixins de capas y parciales por carpeta (`abstracts`, `base`, `layout`, `components`, `pages`).
- **Personalización de Bootstrap**: colores, tipografía, radios, paddings de botones y cartas se inyectan desde `_bootstrap-config.scss`.
- **Unidades y colores en extra.html**: uso de `lvh/svh`, `color-mix()` y gradientes en la galería de producto local.

## 7. Enlaces finales
- Repositorio GitHub: _pendiente de añadir_.
- URL pública Netlify: _pendiente de añadir_.