# Portfolio architecture

## Runtime

Plain static HTML, CSS and browser JavaScript. No framework runtime, server functions, API keys or database. GitHub Pages serves repository contents beneath `/v13_dot_one/`.

## Routes

- `/` — landing page and selected project work.
- `/case-studies/` — six technical case studies with in-page navigation and architecture flows.

## Interaction model

`assets/js/main.js` owns mobile navigation state, project category filtering and in-page anchor navigation. Case-study flows are responsive HTML nodes with accessible text alternatives.

## Deployment

GitHub Actions checks out the repository, configures Pages, uploads the static site artifact and deploys it. Internal CSS, JavaScript and favicon links are relative to support GitHub Pages project-site paths.

## Boundaries

The portfolio is a static presentation layer. It does not proxy project APIs, submit contact forms, collect analytics or store user data. Demo functionality remains on linked project hosts.
