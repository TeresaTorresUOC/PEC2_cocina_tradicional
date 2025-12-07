cs/documentacion_practica.md
Nou
+41
-0

# Documentación de la práctica

## 1. Introducción
Este proyecto implementa un sitio web para unas jornadas de cocina tradicional dentro de la PEC de Herramientas Avanzadas de HTML y CSS. Partiendo del UOC Boilerplate se han construido varias páginas (portada, ponentes, artículo y extras) con una estética inspirada en carteles gastronómicos y un diseño centrado en la divulgación de los talleres y chefs invitados.

## 2. Proceso de desarrollo
1. **Clonado del boilerplate**: se partió del repositorio `uoc-boilerplate` y se preparó el árbol de SCSS organizado por capas.
2. **Instalación de dependencias**: `npm install` para obtener Parcel, Stylelint, Bootstrap, Font Awesome y el resto de paquetes definidos en `package.json`.
3. **Arranque en desarrollo**: `npm run dev` ejecuta la limpieza previa y levanta Parcel en el puerto 8123 con recarga automática.
4. **Revisión de estilos**: `npm run lint:styles` aplica las reglas de Stylelint/BEM sobre todos los ficheros SCSS.
5. **Compilación de producción**: `npm run build` genera el bundle optimizado en `dist/` sin mapas de código.
6. **Publicación**: el resultado se sube a GitHub y se conecta con Netlify para desplegar automáticamente la carpeta generada.

## 3. Metodología y guía de estilo
Se ha combinado **ITCSS** para ordenar los estilos en capas (`abstracts`, `base`, `layout`, `components`, `utilities`, `pages`) y **BEM** para nombrar bloques y elementos. Esta organización evita fugas de especificidad y facilita escalar componentes. Las capas se declaran explícitamente mediante `@layer` al inicio del SCSS principal para controlar la cascada y poder aplicar prioridades conocidas.

La calidad de código se refuerza con **Stylelint** configurado con `stylelint-config-standard-scss`, el plugin de orden y el validador de patrones BEM. Se permiten las pseudo-clases modernas empleadas en el proyecto y se desactivan reglas no adaptadas a las utilidades internas.

## 4. Dependencias
- **Bootstrap 5**: se importa vía Sass y se reconfigura con variables propias (colores corporativos, tipografías, radios, paddings de botones, tarjetas y formularios) para mantener coherencia visual con el resto de estilos personalizados.
- **Font Awesome**: aporta iconografía ligera para reforzar elementos de navegación y llamadas a la acción.
- **Stylelint y plugins**: usados en desarrollo para asegurar convenciones BEM/ITCSS y ordenación de declaraciones.
- **Parcel** y utilidades asociadas (Autoprefixer, PostCSS Preset Env, Sharp) gestionan el bundling, autoprefijos y optimización de assets.

## 5. Decisiones de diseño y desarrollo
- **Enfoque mobile-first**: las rejillas y flexboxes parten de una sola columna y progresivamente se adaptan mediante consultas de contenedor, lo que simplifica la adaptación de los wireframes a cualquier ancho.
- **Paleta y tipografías**: se definen variables Sass para neutros cálidos, acentos coral/ámbar/esmeralda y tipografías *Space Grotesk*/*Cormorant* que evocan cartelería gastronómica.
- **Texturas y sombras suaves**: los fondos combinan degradados y patrones semitransparentes, con radios generosos para transmitir cercanía.

## 6. Requisitos técnicos específicos
- **CSS Grid en la portada con fallback**: la sección `.poster` usa una retícula de 12 columnas y define `@supports not (display: grid)` para degradar a flexbox en navegadores sin soporte.
- **Flexbox en ponentes**: la parrilla `.speakers__grid` y las tarjetas `.speaker-card` se maquetan con flexbox para acomodar filas y reorganizar el contenido horizontal en contenedores amplios.
- **Pseudoclases `:has()` y `:is()`/`:where()`**: se emplean para estados de formularios y cuerpo del artículo, reduciendo especificidad y mejorando la semántica de selectores.
- **Container queries**: páginas y componentes definen `container-name` y adaptan proporciones o disposición (`@container ...`) según el ancho real de cada bloque, no solo del viewport.
- **Capas de cascada**: las capas `reset`, `base`, `layout`, `components`, `utilities` y `pages` se declaran en el SCSS principal para garantizar un orden estable de estilos.
- **Sass avanzado**: uso de variables, funciones (`rem`), mixins de contenedor y utilidades de superficie, así como parciales organizados por responsabilidad.
- **Bootstrap personalizado**: se reexpone el SCSS de Bootstrap mediante `@forward` aplicando las variables del proyecto para colores, tipografías y radios, unificando el sistema de diseño.

## 7. Enlaces finales
- **Repositorio en GitHub**: <https://github.com/usuario/pec-cocina-tradicional>
- **Despliegue en Netlify**: <https://cocina-tradicional.netlify.app/>