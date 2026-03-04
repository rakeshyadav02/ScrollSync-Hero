# ScrollSync Hero

ScrollSync Hero is a modern, scroll-driven hero experience built with React, Vite, and GSAP ScrollTrigger. The project showcases smooth, progress-linked motion where typography and visuals respond directly to scroll position.

## Overview

- Sticky full-screen hero section inside an extended scroll scene
- Character-by-character text reveal and staggered stats animation
- Scrubbed visual movement (object, glow, and rings) tied to scroll progress
- Responsive layout for desktop, tablet, and mobile
- Reduced-motion fallback for accessibility

## Tech Stack

- **Framework:** React 18 (`react`, `react-dom`)
- **Build Tool:** Vite 5 (`vite`, `@vitejs/plugin-react`)
- **Animation:** GSAP 3 with ScrollTrigger (`gsap`)
- **Styling:** Custom CSS (responsive + performance-focused)
- **Runtime:** Node.js 18+ and npm 9+

## Core Implementation

### Scroll and Motion

- `ScrollTrigger` timelines with `scrub: true` for scroll-synced interpolation
- Intro reveal sequence for kicker text, title characters, and stat cards
- Continuous transform-based motion for hero object, glow, and ring layers

### Performance and Accessibility

- Animation targets `transform` and `opacity` only
- `will-change` optimization on animated elements
- React-safe animation lifecycle using `useLayoutEffect` + `gsap.context`
- `prefers-reduced-motion` media query support in global styles

## Project Structure

```text
.
├─ public/
│  └─ car.svg
├─ src/
│  ├─ components/Hero/
│  │  ├─ HeroSection.jsx
│  │  ├─ ScrollVisual.jsx
│  │  └─ StatsGrid.jsx
│  ├─ data/
│  │  └─ stats.js
│  ├─ hooks/
│  │  └─ useHeroAnimations.js
│  ├─ styles/
│  │  └─ global.css
│  ├─ App.jsx
│  └─ main.jsx
├─ index.html
├─ package.json
├─ package-lock.json
└─ vite.config.js
```

## Getting Started

### Prerequisites

- Node.js 18 or later
- npm 9 or later

### Installation

```bash
npm install
```

### Run in Development

```bash
npm run dev
```

The app runs at `http://localhost:5173` by default.

## Available Scripts

- `npm run dev` — Starts Vite development server
- `npm run build` — Creates production build in `dist/`
- `npm run preview` — Serves the production build locally

## Build and Preview

```bash
npm run build
npm run preview
```

## Deployment

### Vercel

1. Push the project to a Git repository.
2. Import the repository in Vercel.
3. Use `Vite` preset (or let Vercel auto-detect).
4. Build command: `npm run build`
5. Output directory: `dist`

### GitHub Pages

- Configure Vite `base` in `vite.config.js` as `/<repository-name>/`.
- Deploy the built `dist/` output using GitHub Actions or `gh-pages` workflow.

## Customization Guide

- Update headline text in `src/components/Hero/HeroSection.jsx`
- Edit statistics data in `src/data/stats.js`
- Tune animation values and trigger ranges in `src/hooks/useHeroAnimations.js`
- Refine styling and breakpoints in `src/styles/global.css`

## Project Status

The project is production-ready as a reusable hero animation section and can be integrated into a larger landing page or product site.
