# Saranraj P - Resume Website

Web version of my resume, built with React, TypeScript and Vite. Same single-column layout as the PDF resume.

Live: https://psaranraj.github.io/SaranrajPalanisamy-Resume/

## Run locally

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build in dist/
```

## Edit the resume

All text is in `src/data/resumeData.json`. Change it there and every section updates.

## Folder structure

```
src/
  data/resumeData.json      all resume content
  components/
    ResumeHeader/           name, title and contact line
    Profile/                Professional Summary
    Skills/                 Technical Skills ("Frontend: ...")
    Projects/               projects with bullet points
    Experience/             experience and training
    Education/              education lines
    Languages/              languages
  App.tsx                   section order + Download PDF button
  index.css                 all styles (A4 page, print / Save as PDF rules, mobile)
```

## Download PDF

The "Download PDF" button opens the browser's print dialog. Choose **Save as PDF** and set margins to
**None** (or Default) to get a one-page A4 PDF that matches the resume.

## Deploy

Every push to `main` builds and publishes the site to GitHub Pages through `.github/workflows/deploy.yml`.
`vite.config.ts` uses `base: './'` so the site works inside the `/SaranrajPalanisamy-Resume/` folder.
