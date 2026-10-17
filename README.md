# Parthiv Jasoliya Portfolio

Personal portfolio for Parthiv Jasoliya, a software engineer working on data pipelines, cloud-native systems and AI products. The site presents professional experience, technical skills, selected projects, competitive programming achievements, and contact links.

Live site: [parthivportfolio.netlify.app](https://parthivportfolio.netlify.app/)

## Stack

- React 19
- TypeScript
- Create React App
- Framer Motion
- Lucide React
- CSS with responsive layouts and reduced-motion support

## Run locally

Requirements: Node.js 18 or newer and npm.

```bash
npm install
npm start
```

Open [http://localhost:3000](http://localhost:3000) in a browser.

## Scripts

```bash
npm start                    # Start the development server
npm test -- --watchAll=false # Run the test suite once
npm run build                # Create the production build in build/
```

## Project structure

```text
public/
  assets/                 Static images, icons, certificates, and resumes
  index.html              SEO metadata and structured data
src/
  components/             Page sections and reusable UI components
  data/portfolioData.ts   Portfolio content and external profile links
  styles/                 Shared design tokens and global styles
  types/                  Shared TypeScript interfaces
  App.tsx                 Page composition and active-section tracking
```

## Updating content

Most portfolio content lives in `src/data/portfolioData.ts`, including:

- Personal summary and hero highlights
- Work experience and technologies
- Skills, grouped by category
- Projects, images, and live/source links
- Achievements and certificates
- Contact and social profile URLs

Place new static files in `public/assets/` and reference them with paths beginning with `/assets/`.

## Deployment

Netlify uses the configuration in `netlify.toml`:

- Build command: `npm run build`
- Publish directory: `build`
- Node version: 18

The contact form is handled by [Netlify Forms](https://docs.netlify.com/forms/setup/). Netlify detects it from the static copy in `public/index.html`, so keep its field names in sync with `src/components/Contact/Contact.tsx`. Submissions appear under **Forms** in the Netlify dashboard; turn on email notifications there to have them forwarded to your inbox.