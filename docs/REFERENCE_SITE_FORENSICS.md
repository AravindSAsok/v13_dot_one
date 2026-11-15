# Reference-site forensic findings

Reference: https://aravindsasok.forkfolio.dev/
Target implementation: Portfolio v13.1 in this repository
Inspection method: Firecrawl hosted browser interaction and deployed CSS extraction

## Visual system verified from the reference

| Token | Observed value |
| --- | --- |
| Background | `#0A0A0A` |
| Primary text | `#ECE8DF` |
| Secondary text | `#AAA69D` |
| Muted text | `#85817A` |
| Soft borders | `rgba(236, 232, 223, 0.09)` |
| Display type | Host Grotesk |
| Body type | Geist |
| Monospace | Geist Mono / system monospace fallback |
| Keyboard focus | `#FF5B24` |
| Container maximum | 1760px |
| Horizontal page inset | `clamp(18px, 3vw, 48px)` |
| Grid gap | `clamp(12px, 1.6vw, 24px)` |
| Main responsive breakpoint | 960px |
| Motion easing | `cubic-bezier(.16, 1, .3, 1)` |

The reference uses a restrained near-black editorial layout, oversized typography, thin warm-grey dividers, square geometry, and small monospaced metadata. The green used in earlier portfolio styling is not part of this reference palette; the reference's keyboard-focus accent is orange.

## Measured desktop layout

A hosted-browser inspection at 1920 × 993 reported:

- Header height: approximately 87px
- Header maximum width: approximately 1760px
- Hero section: approximately 1887px in the inspected rendered document
- Featured projects section: approximately 5958px
- More-projects section: approximately 2426px
- Activity section: approximately 979px
- Contact section: approximately 1048px

The inspected page contained six featured projects and twelve archive entries.

## Interaction and accessibility observations

- Navigation, project cards, and contact call-to-action hover states were inspected.
- Contact and back-to-top same-page anchors were activated.
- Chat widget opened and exposed a close control, suggested prompts, a text field, and a send control. Escape did not close it.
- Contact form fields were Name (required), Email (required), and Message (required), plus an optional Company honeypot field. Native empty-field validation was checked without submitting the form.
- Keyboard focus was visible and used the orange `#FF5B24` accent.
- The reference used a custom cursor; project and link surfaces suppress the native cursor.
- Reduced-motion handling was present: scroll-driven transforms and background canvas motion are reduced or disabled.
- CSS inspection found a 0.25s link underline transition, a 0.6s project-title underline transition, and a 1.3s hero entrance animation.

## Responsive screenshot coverage

Firecrawl screenshot captures were successfully returned for these viewport dimensions:

- 1920 × 993
- 1440 × 900
- 1366 × 768
- 1280 × 800
- 1024 × 768
- 768 × 1024
- 390 × 844
- 360 × 800

New captures from the latest inspection:

- [1366 × 768](https://storage.googleapis.com/firecrawl-scrape-media/screenshot-6d923a68-fa41-4961-8542-76229a3f0828.png)
- [1280 × 800](https://storage.googleapis.com/firecrawl-scrape-media/screenshot-9a584b59-2bf0-47ef-bc80-95c6fa472882.png)
- [1024 × 768](https://storage.googleapis.com/firecrawl-scrape-media/screenshot-49049117-704e-4db4-91ef-113edf6dc352.png)
- [768 × 1024](https://storage.googleapis.com/firecrawl-scrape-media/screenshot-45f0035a-1099-4de7-b6ed-0eead52ccfe7.png)
- [360 × 800](https://storage.googleapis.com/firecrawl-scrape-media/screenshot-20be5462-5803-473f-b3ad-15686ffc85bd.png)

## Source and test limitations

- The deployed reference is a Next.js site, while v13.1 intentionally remains Gatsby 3 / React 17. The old `aravind-asok-portfolio` repository was not verified as the deployed reference's source.
- Firecrawl's hosted browser was used for live interaction inspection. A local Playwright suite was **not** executed; hosted-browser checks are not equivalent to a complete Playwright test run.
- One browser session reported no console errors or failed network requests during that session only. This is not a site-wide guarantee.
- No contact form was submitted and no external action was triggered.
- Visual screenshot captures exist, but automated pixel-difference comparison against the v13.1 deployment has not yet been run.
- The source repository's current-commit production build, link validation, screen-reader testing, and keyboard regression suite still need to be run in CI or on an available development machine.

## Changes applied to v13.1

- Kept the existing Gatsby architecture, content model, case studies, and GitHub Pages path-prefix strategy.
- Increased the desktop display-heading scale to track the reference's approximately 226.75px large-desktop headline.
- Updated hero role and action offsets to follow the responsive headline size.
- Changed keyboard focus indicators to the reference's orange `#FF5B24`, including explicit focus treatment for project titles, archive links, and contact fields.
- Applied the reference's `cubic-bezier(.16, 1, .3, 1)` easing to primary interactive surfaces.
- Preserved the existing reduced-motion overrides.

This report records observed evidence and remaining verification work. It does not claim a complete Playwright run or a verified production deployment.
