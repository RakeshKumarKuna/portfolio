# Rakesh Kumar Kuna — Portfolio v2

A responsive Angular portfolio with a light palette, AI/ML-first content, a custom animated system diagram, Infor experience, and direct contact links. Designed for static hosting on Netlify.

## Run locally

Use Node.js 22 (also specified in `.nvmrc` and `netlify.toml`).

```sh
npm ci
npm start
```

Open http://localhost:4200.

## Build and deploy

```sh
npm run build
```

The production site is written to `dist/profile/browser`. Netlify reads the build command and publish directory from `netlify.toml`. No server, API key, paid service, or database is required.

The redesign is developed on `codex/major-portfolio-upgrade`. To review it online, push this branch and open a pull request against `main`; Netlify can create a deploy preview if previews are enabled on the existing site. Merge only after review to update the production site. This repository change does not itself publish the redesign.

Old `/Home`, `/About`, `/Works`, `/Works/project1`, `/Works/project2`, and `/Contact` links redirect to the corresponding sections. Netlify's SPA fallback also supports direct visits to those URLs.

## Content

- `src/app/profile.data.ts`: role, contact links, and capability content.
- `src/app/home/home.component.html`: experience, biography, education, and page structure.
- `src/app/home/home.component.css`: responsive design and animation.
- `src/index.html`: title, description, and social-sharing metadata.
- `public/`: favicon, social image, sitemap, and robots file.

The owner confirmed the Software Engineer title, Infor / Infor ION, April 2025–present, and positioning across AI/ML and Java full-stack engineering. Agentic coding with Kiro and Claude Code appears in the development workflow. No invented performance metrics or confidential project details are included. The LinkedIn URL was carried over from the previous portfolio and should be confirmed by the owner.

Legacy profile photos and project assets are retained in source for reference, but excluded from the deployed build. The old warehouse project and its routes' content have been removed.

The Infor experience card uses the official [Infor logo](https://www.infor.com/logo-infor.png), served locally, with red and white styling. The SVG source for the social preview is kept alongside the generated PNG in `public/`.

## Motion and accessibility

The diagram supports mouse, touch, and keyboard input. Motion includes entrance transitions, scroll reveals, orbiting nodes, and data pulses. A visible pause control stops decorative animation; the operating system's reduced-motion preference is respected. The page includes a skip link, visible focus indicators, semantic sections, a responsive navigation menu, and accessible email-copy feedback. Typography is self-hosted; font licenses are in `src/assets/fonts`.

## Verify

```sh
npx playwright install chromium
npm test
```

Tests cover desktop/mobile navigation, stack interactions, motion preferences, email copying and fallback, legacy deep links, responsive overflow, runtime errors, and automated accessibility checks. `PLAYWRIGHT_CHROMIUM_EXECUTABLE_PATH` can optionally point to an existing Chrome/Chromium executable. The tests start a local server automatically, or reuse one already running.

```sh
npm run format
npm run build
```
