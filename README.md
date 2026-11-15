# Aravind S Asok — Portfolio v13.1

**AI & Backend Engineer | Full-Stack Software Engineer**

A recruiter-focused engineering portfolio highlighting practical backend systems, applied AI applications, and full-stack products.

## Live site

Expected GitHub Pages URL: https://aravindsasok.github.io/v13_dot_one/

The URL is considered live only after the GitHub Actions deployment succeeds and the deployed pages are verified.

## Featured work

| Project | Focus | Source |
| --- | --- | --- |
| EvidencePilot | PDF research, hybrid retrieval, evidence review | https://github.com/AravindSAsok/EvidencePilot |
| TrackCake | Full-stack food diary and multi-provider AI | https://github.com/AravindSAsok/tracKcake |
| Maplewood AI Front Desk | Deterministic-first MCP agent prototype | https://github.com/AravindSAsok/maplewood-ai-front-desk |
| Hourly | Timestamp-based time tracking and break calculations | https://github.com/AravindSAsok/hourly |
| ClashCommand | Authenticated relational operations dashboard | https://github.com/AravindSAsok/ClashCommand |
| ACME Salary Management | Node.js API, SQLite, search and pagination | https://github.com/AravindSAsok/acme-salary-management |

Each selected project has a dedicated case study under `/case-studies/` with source links, implementation notes, limitations, and an interactive architecture explorer.

## Tech stack

- Gatsby 3 and React 17
- styled-components
- Markdown-driven project and case-study content
- Gatsby sitemap and robots.txt plugins
- GitHub Actions and GitHub Pages

The framework was intentionally retained from the original portfolio to avoid an unnecessary migration.

## Local development

Requirements: Node.js 16.20.2 and Yarn Classic 1.22.x.

```bash
nvm use
yarn install --frozen-lockfile
yarn develop
```

Open http://localhost:8000.

## Production build

```bash
yarn install --frozen-lockfile
yarn build --prefix-paths
```

The project site uses Gatsby's `/v13_dot_one` path prefix. Use the prefix-aware build for deployment verification.

## Deployment

The `.github/workflows/deploy.yml` workflow builds the site, uploads the Gatsby `public/` directory as a Pages artifact, and deploys it to GitHub Pages.

Repository settings: **Settings → Pages → Build and deployment → GitHub Actions**.

## Repository structure

- `content/featured/` — original Markdown project content retained from the source portfolio
- `content/case-studies/` — six source-audited engineering case studies
- `content/jobs/` — experience history
- `src/components/sections/portfolio.js` — active home page
- `src/templates/case-study.js` — reusable case-study page and architecture explorer
- `src/pages/resume.js` and `static/resume.pdf` — verified resume page and PDF download
- `static/projects/` — portfolio project and activity images
- `docs/` — project audit, selection, design, architecture, SEO, QA, deployment, and release notes

## Verification status

The previous workflow revision successfully completed dependency installation and the Gatsby production build. Pages configuration initially failed because the Pages site had not yet been enabled. The repository owner has since enabled Pages; the latest implementation workflow and live deployment must still be verified before this release is promoted.

See [QA_REPORT.md](docs/QA_REPORT.md) and [DEPLOYMENT.md](docs/DEPLOYMENT.md) for the current release status.

## Professional links

- GitHub: https://github.com/AravindSAsok
- LinkedIn: https://www.linkedin.com/in/aravind-asok/
- Email: aravindsasok@outlook.com

## License

MIT. The original license and upstream notices are preserved.
