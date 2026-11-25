# Jasdev Singh Virdi — Portfolio

A modern, responsive personal portfolio built with React 19 and Vite. All site content lives in [`src/data/portfolio.js`](src/data/portfolio.js), so updating your roles, projects or links only takes editing one file.

## Getting started

```bash
npm install
npm run dev
```

Open the local URL printed by Vite. For a production build:

```bash
npm run build
npm run preview
```

The deployable output is in `dist/`, which works with Vercel, Netlify or any static host.

## Updating content

Edit `src/data/portfolio.js` — profile details, stats, skill groups, experience, projects, education and certifications are all defined there. Replace `public/HeroImage.jpg` (and its transparent cutout `public/HeroImage-cutout.png`) to change the portrait, and `public/Jasdev_Singh_Resume_2026.pdf` to update the downloadable resume.

The contact form opens the visitor's email client with a prefilled message, so no backend or API keys are required.

## Design

Dark theme with a teal accent, responsive from mobile to desktop, with reduced-motion support and no heavy UI framework dependencies.
