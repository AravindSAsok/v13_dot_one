# Aravind S Asok — Portfolio v13.1

Engineering-first portfolio for **AI & Backend Engineer | Full-Stack Software Engineer**.

**Target site:** https://aravindsasok.github.io/v13_dot_one/

This repository is an independent v13.1 portfolio implementation. The original [v13 repository](https://github.com/AravindSAsok/v13) and its production site are separate and must remain untouched.

## What is here

- Responsive dark editorial portfolio with accessible mobile navigation.
- Six featured projects with working category filters.
- Six technical case studies with architecture flows, engineering decisions and explicit limitations.
- Engineering capabilities, professional background, supporting project archive and contact links.
- Static SEO metadata, canonical URLs, Person structured data, Open Graph artwork, robots.txt and sitemap.xml.
- GitHub Actions deployment to GitHub Pages. No server, database, paid service or build-time dependency is required.

## Featured projects

| Project | Focus | Current maturity |
| --- | --- | --- |
| [EvidencePilot](https://github.com/AravindSAsok/EvidencePilot) | Evidence-grounded research, retrieval and claim audits | Hosted demo |
| [TrackCake](https://github.com/AravindSAsok/tracKcake) | Food diary, multi-provider AI and optional Supabase persistence | Live product |
| [Hourly](https://github.com/AravindSAsok/hourly) | Timestamp-first time tracking and break accounting | Product MVP |
| [Maplewood AI Front Desk](https://github.com/AravindSAsok/maplewood-ai-front-desk) | Safety-first MCP agent prototype | Prototype |
| [ClashCommand](https://github.com/AravindSAsok/ClashCommand) | Clan/player/war operations dashboard | Application |
| [ProfBot](https://github.com/AravindSAsok/ProfBot) | Private document Q&A with BM25-style retrieval | Interview-ready demo |

The case studies document limitations and verification boundaries. For current implementation details, use each source repository as the source of truth.

## Local development

This is a dependency-free static site. Serve it with any local static HTTP server:

```bash
python3 -m http.server 8000
```

Then open http://localhost:8000. No API keys, environment variables or database are required.

## Deployment

1. Push changes to `main`.
2. GitHub Actions runs `.github/workflows/pages.yml`.
3. In repository Settings → Pages, select **GitHub Actions** as the build and deployment source if it is not already configured.
4. Wait for the deployment job to complete.
5. Verify https://aravindsasok.github.io/v13_dot_one/.

All internal links use relative paths, so the project site works beneath the `/v13_dot_one/` base path.

## Quality checks

Before release, verify HTML structure and internal routes, project filters, mobile navigation, external links, keyboard focus, reduced-motion behavior, desktop/mobile rendering and live Pages asset paths. The QA report records what has and has not been run.

## Contact

- Email: aravindsasok@outlook.com
- [GitHub](https://github.com/AravindSAsok)
- [LinkedIn](https://linkedin.com/in/Aravind-Asok)

## License

MIT. See [LICENSE](LICENSE).
