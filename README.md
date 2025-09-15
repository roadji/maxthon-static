# Maxthon Static Site

## Overview
A simplified, frontend-only static website promoting Maxthon Universal Exchange Centre. Built on Next.js App Router with bilingual routes under `app/[lang]` and static content stored in `frontend/content/*`. No backend, no databases.

## Key points
- Static export via Next.js `output: 'export'`
- Content comes from local JSON: `content/home.{lang}.json`, `content/about.{lang}.json`, `content/tours.json`
- Bilingual routes: `/zh` and `/en`
- Contact via WhatsApp CTA only (no email form)
- Static `robots.txt` and `sitemap.xml` in `public/`

## Requirements
- Node.js 18+
- npm 9+

## Setup
```bash
cd frontend
npm ci
```

## Develop
```bash
   npm run dev
# Visit http://localhost:3000/zh or /en
```

## Build (static export)
The project is configured with `output: 'export'`. Running build emits static HTML to `frontend/out/`.
```bash
npm run build
```
Artifacts will be placed under `out/` (e.g., `index.html`, `zh.html`, `en.html`, localized pages, robots.txt, sitemap.xml).

## Preview locally
```bash
npm run build
npm run start  # serves out/ at http://localhost:3000
```

## Content editing
- Update `frontend/content/home.zh.json` and `home.en.json` for homepage sections
- Update `frontend/content/about.zh.json` and `about.en.json` for About page
- Update `frontend/content/tours.json` to add or edit tour listings and detail data
- Add images under `frontend/public/images/` and reference with `/images/...`

## WhatsApp contact
The contact page prominently links to WhatsApp. No email or form submission is implemented.

## Deployment
Any static hosting works. Common options:
- Netlify: deploy folder `frontend/out/`
- GitHub Pages: publish `frontend/out/`
- Cloudflare Pages: set build output to `out/` (build command just `npm run build` in frontend)

## Notes
- No server-side middleware. Locale is part of the URL.
- No backend/API calls at runtime.
- Some dev/test tooling remains optional (Jest/Playwright), but not required for static hosting. 