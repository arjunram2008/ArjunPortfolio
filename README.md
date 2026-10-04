# Arjun Ramesh

A personal portfolio about engineering, research, and making things. Built with React, Vite, Motion, and Lenis, with original SVG illustrations.

## Development

```sh
npm ci
npm run dev
```

`npm run build` creates the production site in `dist`. `npm run preview` serves the production build. `npm run lint` checks the source.

## Content

The biography, experience, skills, awards, and project outcomes come from `ArjunResumeSC4.pdf`, supplied October 3, 2026. Edit `src/data/profileData.js` for project and experience updates. The downloadable resume is `public/Arjun-Ramesh-Resume.pdf`.

Project artwork is illustrative, not a screenshot of a shipped product. All illustrations live in `public/images`.

## Motion and accessibility

- Lenis smooths desktop wheel scrolling while preserving native touch scrolling and anchors.
- Motion drives project-image parallax, the hero sculpture, and viewport reveals.
- The desktop image ribbon moves horizontally as the page scrolls. Mobile uses a native swipeable gallery.
- Reduced motion disables Lenis, parallax, reveals, and pinned scrolling. The ribbon becomes a static gallery.
- A footer control lets visitors reduce motion for the current visit. System reduced-motion preferences are respected automatically.
- Navigation, project details, and experience disclosures support keyboard use. The mobile menu closes with Escape.

## Validation

The existing responsive smoke suite is updated for this design:

```sh
npx playwright test qa-responsive.spec.mjs
```

Run the local server on port 5173 first. The suite covers mobile, tablet, desktop, resume access, menus, disclosures, content, scroll-driven gallery movement, and reduced-motion layout.

Design references studied: [Dennis Snellenberg](https://dennissnellenberg.com) for typographic scale and restrained interaction; [Studio Freight](https://studiofreight.com) for editorial composition; [Bruno Simon](https://bruno-simon.com) for personality in a technical portfolio. No reference artwork or copy is reused.
