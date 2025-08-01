# Amalton Extension – “lo‑frayer”

This repository contains the **Amalton** browser extension, which helps investors in the Israeli capital market understand and optimise brokerage fees.  The project is structured according to the multi‑stage work plan defined in `work_plan.md`.

## Technology stack

- **Webpack 5** for bundling the extension
- **React + TypeScript** for the popup UI
- **Tailwind CSS** and **shadcn/ui** for the design system
- **Release Please** for automated versioning and changelogs

## Getting started

1. Install dependencies:
   ```sh
   npm install
   ```
2. Run a development build with hot reload:
   ```sh
   npm run dev
   ```
3. Build a production version of the extension:
   ```sh
   npm run build
   ```
4. Generate a zip file for publishing:
   ```sh
   npm run zip
   ```

The built files will be placed in the `dist/` directory.  The Chrome Web Store upload workflow uses this directory to create `amlathon.zip`.

## Project structure

- `src/manifest.json` – Chrome extension manifest (version 3).
- `src/index.tsx` – Entry point for the popup UI; mounts `App.tsx`.
- `src/App.tsx` – Root React component; will be extended in later stages.
- `src/popup.html` – HTML template for the popup.
- `src/styles.css` – Tailwind CSS imports.
- `webpack.config.js` – Build configuration (bundles TypeScript and CSS, copies the manifest, generates HTML).
- `tailwind.config.js` & `postcss.config.js` – Styling configuration.
- `.github/workflows/release.yml` – Release automation using Release Please and GitHub Actions.
- `.github/workflows/publish.yml` – Workflow to upload the built zip to the Chrome Web Store on release.

## Next steps

This initial setup completes **Stage 1** of the work plan (base code + CI).  Future stages will introduce the TASE API wrapper, fee engine, onboarding UI, notifications, scrapers, design polish and more.
