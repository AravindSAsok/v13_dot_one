# Aravind S Asok — Engineering Portfolio

**AI & Backend Engineer | Full-Stack Software Engineer**

I build reliable backend systems, practical AI-powered applications and full-stack products.

This repository is an independent GitHub Pages deployment of the Gatsby portfolio source. It is intentionally separate from the original `v13` repository and uses the project-site base path `/v13_dot_one/`.

## Stack

- Gatsby 3 and React 17
- JavaScript and styled-components
- Markdown-driven project and experience content
- Gatsby Image / Sharp
- React Helmet, sitemap and robots plugins
- GitHub Actions and GitHub Pages

## Run locally

The project targets Node.js 16.20.2 (see `.nvmrc`) and Yarn Classic.

```bash
nvm install 16.20.2
nvm use 16.20.2
yarn install --frozen-lockfile
yarn develop
```

Open the local URL printed by Gatsby, normally http://localhost:8000.

## Production build

```bash
yarn build --prefix-paths
yarn serve
```

## Content structure

- `content/featured/` — featured project entries
- `content/jobs/` — professional experience entries
- `content/projects/` — supporting project archive
- `src/config.js` — navigation, social links and theme configuration
- `static/projects/` — project preview images
- `src/images/` — site assets
- `docs/` — audit, design, architecture, SEO, QA and release notes

Project descriptions are based on the content currently committed to this portfolio. A featured entry is not a substitute for a source-code audit of the corresponding application. Do not infer unimplemented functionality from marketing copy.

## Deployment

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds the Gatsby site and deploys the generated `public/` directory to GitHub Pages. The configured project URL is:

https://aravindsasok.github.io/v13_dot_one/

The repository's Pages settings must permit GitHub Actions deployment.

## Quality checks

```bash
yarn build --prefix-paths
```

The GitHub Actions workflow runs the production build before publishing. Additional browser, accessibility and live-site checks should be recorded in `docs/QA_REPORT.md` only after they have actually been run.

## License

MIT. See [LICENSE](LICENSE).
