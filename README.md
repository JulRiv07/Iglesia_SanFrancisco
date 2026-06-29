# Capellanía San Francisco de Asís — Sitio Web

Sitio web institucional de la Capellanía San Francisco de Asís, perteneciente al Obispado Castrense de Colombia. Construido con React + Vite, diseñado para ser rápido, bilingüe y fácil de mantener.

---

## Stack

- **React 18** + **Vite 5**
- CSS Modules con variables personalizadas (design tokens)
- i18n manual (ES / EN) sin librerías externas
- Sin dependencias de UI — todo construido desde cero

---

## Requisitos

- Node.js 18 o superior
- npm 9 o superior

---

## Instalación y desarrollo

```bash
git clone https://github.com/JulRiv07/Iglesia_SanFrancisco
cd Iglesia_SanFrancisco
npm install
npm run dev
```

El sitio queda en `http://localhost:5173`.

---

## Build para producción

```bash
npm run build
```

Los archivos quedan en `dist/`. Sirve con cualquier hosting estático: Netlify, Vercel, GitHub Pages, o un servidor propio.

---

## Estructura del proyecto

```
src/
├── components/
│   ├── Navbar/
│   ├── Hero/
│   ├── About/
│   ├── MapSection/
│   ├── Events/
│   ├── Sacraments/
│   ├── Newsletter/
│   └── Footer/
├── contexts/
│   ├── ThemeContext.jsx     # Modo claro / oscuro
│   └── LangContext.jsx      # Español / Inglés
├── i18n/
│   ├── es.js               # Todos los textos en español
│   └── en.js               # Todos los textos en inglés
├── styles/
│   ├── tokens.css          # Variables de color, tipografía, espaciado
│   └── global.css          # Estilos base y utilidades
└── App.jsx
```

---

## Qué incluye el sitio

- Bilingüe ES / EN con toggle en la barra de navegación
- Modo oscuro / claro (respeta la preferencia del sistema)
- Hero con frases bíblicas rotativas y parallax
- Galería con lightbox
- Calendario de eventos navegable por mes, con colores por categoría
- Formulario de sacramentos que se adapta según el servicio
- Escuela de la Fe en el bloque de horarios
- Newsletter con checkboxes de intereses
- Área de Miembros reservada en la navegación (badge "Próximamente")
- Responsive — mobile first

---

## Paleta

Derivada de las fotos reales de la capilla:

| Token | Color | Uso |
|-------|-------|-----|
| `--brick` | `#C1440E` | Color principal |
| `--gold` | `#C9943A` | Acentos |
| `--wood` | `#6B3A2A` | Madera cálida |
| `--iron-mid` | `#3D3530` | Footer |

El modo oscuro usa `#1C1008` como base — marrón muy oscuro, no negro, para evocar el interior de la capilla con velas.

---

## Pendiente / Roadmap

- [ ] Completar placeholders (dirección, teléfonos, horarios, requisitos de sacramentos)
- [ ] Insertar iframe de Google Maps
- [ ] Conectar formulario de sacramentos a correo electrónico
- [ ] Área de Miembros — login y cursos de catequesis en línea
- [ ] Panel de administración para eventos sin tocar código
- [ ] Backend con Supabase para eventos en tiempo real

---

## Licencia

Uso exclusivo de la Capellanía San Francisco de Asís — Obispado Castrense de Colombia.
