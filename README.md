# ScrollSync Hero

Frontend Assignment Submission: scroll-driven hero section with React, Vite, and GSAP ScrollTrigger.

## Submission Details

- **Candidate Name:** `<your name>`
- **Role Applied For:** `<role name>`
- **Assignment Title:** ScrollSync Hero
- **GitHub Repository:** `<add repo url>`
- **Live Demo:** `<add deployed url>`
- **Submission Date:** `2026-03-04`

## Assignment Objective

Build a premium, scroll-synced hero experience where text and visual elements animate smoothly with scroll progress, while keeping code modular, responsive, and production-friendly.

## Tech Stack Used

- **Framework:** React 18 (`react`, `react-dom`)
- **Build Tool:** Vite 5 (`vite`, `@vitejs/plugin-react`)
- **Animation Library:** GSAP 3 + ScrollTrigger (`gsap`)
- **Styling:** Custom responsive CSS
- **Runtime:** Node.js 18+ and npm 9+

## Requirement Coverage

### 1) Hero Layout

- Sticky full-viewport hero section (`100vh`) in a larger scroll scene
- Main heading rendered character-by-character for controlled animation
- Stats grid with 4 key metrics
- Responsive behavior for desktop, tablet, and mobile

### 2) Scroll-Based Animations

- Scroll-linked reveal timeline for kicker, title characters, and stats
- Continuous scrubbed motion for visual object, glow, and rings
- Uses `ScrollTrigger` with explicit trigger/start/end ranges

### 3) Performance and Accessibility

- Animates only `transform` and `opacity`
- Uses `will-change` for animated targets
- Animation lifecycle handled with `useLayoutEffect` + `gsap.context`
- Reduced-motion support through `prefers-reduced-motion`

### 4) Code Quality

- Componentized architecture (`HeroSection`, `StatsGrid`, `ScrollVisual`)
- Reusable animation hook (`useHeroAnimations`)
- Centralized data source (`src/data/stats.js`)

## Reviewer Quick Start

### Prerequisites

- Node.js 18+
- npm 9+

### Run Locally

```bash
npm install
npm run dev
```

Open: `http://localhost:5173`

### Build Verification

```bash
npm run build
npm run preview
```

## Available Scripts

- `npm run dev` — start development server
- `npm run build` — create production build (`dist/`)
- `npm run preview` — preview production build locally

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

## Security and Data Handling

- This project is frontend-only and does not process sensitive user data.
- No API keys or secrets are required to run locally.
- `.env*`, `dist`, and `node_modules` are ignored in `.gitignore`.

## Submission Checklist

- [ ] Add final GitHub repository URL
- [ ] Add live deployed URL
- [ ] Replace candidate and role fields in **Submission Details**
- [ ] Confirm latest build passes (`npm run build`)


