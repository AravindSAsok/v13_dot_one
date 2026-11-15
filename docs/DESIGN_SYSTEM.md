# Design system

## Visual direction

The active home page uses a dark editorial layout with warm off-white typography, muted supporting text, fine grid lines, generous negative space, and restrained monochrome interactions. It keeps the portfolio focused on engineering work rather than decorative skill ratings or marketing metrics.

## Typography and color

- Display: Host Grotesk with system fallbacks.
- Body: Geist with system fallbacks.
- Monospace labels: Geist Mono / SF Mono fallbacks.
- Background: near-black (#0a0a0a).
- Primary text: warm off-white (#ece8df).
- Secondary text: muted neutral tones.
- Accent: restrained sage green for selected architecture details.

The active page imports web fonts from Google Fonts and includes system fallbacks. Local Calibre and SFMono font assets from the original Gatsby portfolio are preserved in the repository.

## Components and interaction

- Editorial hero and compact profile navigation.
- Career timeline with source-backed role history.
- Six selected project entries with functional category filters.
- Direct source/demo links and individual case-study routes.
- Interactive architecture explorers on case-study pages.
- Curated project archive, historical activity snapshot, and email-based contact form.
- Visible keyboard focus, skip link, semantic landmarks, and reduced-motion handling.

## Responsive behavior

The active stylesheet includes desktop, tablet, and mobile breakpoints. Project cards and archive rows adapt to narrow screens; filters wrap; the experience timeline becomes a single column. A real browser/device review is still required before release.

## Performance choices

The site remains a Gatsby static site. No new UI framework was added. Lenis smooth scrolling is disabled when reduced motion is requested. The site uses the existing static image assets; image optimization and payload review remain part of QA.
