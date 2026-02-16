# Tapesh Chandra Das — Academic Research Portfolio

Production-ready, fully static research portfolio built with **React + Vite + Tailwind CSS + Framer Motion**, designed for GitHub Pages.

## Stack
- React (Vite)
- Tailwind CSS
- Framer Motion (subtle interactions)
- Static deployment on GitHub Pages

## Local Development
```bash
npm install
npm run dev
```

## Build
```bash
npm run build
npm run preview
```

## GitHub Pages Hosting (Recommended: GitHub Actions)
This repository includes an automated Pages workflow at:

- `.github/workflows/deploy-pages.yml`

### 1) Repository Settings
1. Push code to `main`.
2. Open **Settings → Pages**.
3. Under **Build and deployment**, set **Source** to **GitHub Actions**.

### 2) Base Path Configuration
By default, this project uses:

- `BASE_PATH=/portfolio-website/`

from `vite.config.js`, which is correct for project pages like:

- `https://<username>.github.io/portfolio-website/`

If deploying as a **user/org site** (`https://<username>.github.io/`), build with:

```bash
npm run build:root
```

### 3) Deploy
Every push to `main` triggers deployment automatically.

---

## Manual Deployment (Alternative)
If you prefer pushing a `gh-pages` branch manually:

```bash
npm run deploy
```

This runs:
- `npm run predeploy` -> `npm run build`
- Publishes `dist/` to `gh-pages` using `gh-pages` package.

---

## Content architecture
- `src/data.js`: central content source for projects, research items, links, and skills
- `src/components/*`: reusable UI primitives
- `src/App.jsx`: page composition

## License
Personal portfolio project for Tapesh Chandra Das.
