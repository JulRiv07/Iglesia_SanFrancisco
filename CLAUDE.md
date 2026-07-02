# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

Sitio web institucional (one-page) de la **Capellanía San Francisco de Asís** — Obispado Castrense de Colombia. React 18 + Vite 5, sin backend, sin router, sin TypeScript.

## Comandos

```bash
npm install       # instalar dependencias
npm run dev       # servidor de desarrollo → http://localhost:5173
npm run build     # build de producción → dist/
npm run preview   # previsualizar el build de dist/
```

No hay linter, formateador ni suite de tests configurada. El archivo `src/components/Events/Events.jsx.test` **no es un test real** (contiene texto basura) — ignorarlo o eliminarlo, no ejecutarlo.

## Arquitectura

Aplicación de una sola página (scroll vertical). `App.jsx` renderiza todas las secciones en orden fijo dentro de `<main>`; la navegación es por anclas (`href="#seccion"`) que apuntan a los `id` de cada `<section>`.

### Proveedores de contexto (envuelven toda la app en `App.jsx`)
- **`ThemeContext`** — modo claro/oscuro. Persiste en `localStorage['sfa-theme']` y aplica `data-theme="light|dark"` en `<html>`. Los estilos oscuros se resuelven en CSS mediante el selector `[data-theme="dark"]`, no en JS.
- **`LangContext`** — idioma ES/EN. Persiste en `localStorage['sfa-lang']`. Expone `{ lang, toggle, t }` vía el hook `useLang()`. `t` es el objeto de traducciones del idioma activo.

### i18n (crítico)
Todos los textos viven en `src/i18n/es.js` y `src/i18n/en.js` como objetos anidados idénticos en forma. Los componentes **nunca** llevan texto hardcodeado; usan `const { t } = useLang()` y luego `t.hero.title`, `t.nav.home`, etc.

**Regla:** al añadir o cambiar cualquier texto, edita ambos archivos manteniendo exactamente la misma estructura de claves. Si una clave existe en uno y no en el otro, ese idioma renderiza `undefined`.

### Estilos
- **`src/styles/tokens.css`** — design tokens (colores, tipografía, espaciado, sombras) como variables CSS en `:root`, con overrides bajo `[data-theme="dark"]`. Es la SSOT visual: usa las variables (`var(--brick)`, `var(--space-4)`…), no valores literales.
- **`src/styles/global.css`** — estilos base + utilidades globales reutilizables: `.container`, `.section`, `.section-header/-label/-title/-subtitle`, botones (`.btn` + `.btn-primary/-secondary/-outline/-ghost`), y el sistema de scroll-reveal.
- **CSS Modules por componente** — cada componente tiene su `Nombre.module.css` importado como `styles`. Las clases de utilidad globales se combinan con las de módulo: `className={`btn btn-primary ${styles.cta}`}`.

### Scroll reveal
`App.jsx` monta un único `IntersectionObserver` que añade la clase `visible` a cualquier elemento con clase `.reveal` al entrar en viewport. Para animar la entrada de un elemento, dale `className="reveal"` (opcionalmente `reveal-delay-1..4`); el observer lo detecta automáticamente, incluso elementos añadidos poco después (re-scan a los 500 ms).

## Convenciones

- Componentes funcionales con hooks. Un componente por carpeta: `Componente/Componente.jsx` + `Componente/Componente.module.css`.
- Imágenes en `public/images/` — se referencian con ruta absoluta desde la raíz (`/images/hero.jpg`).
- Fuentes (Cormorant Garamond, Lato) se cargan desde Google Fonts en `index.html`.
- `index.html` tiene `lang="es"`, `theme-color` y meta description; `LangContext` actualiza `<html lang>` dinámicamente.
