# Design system

## Direction

Premium dark editorial interface: near-black canvas, restrained green accent, thin borders, technical mono labels and high-contrast typography. No heavy 3D, decorative gradients or animation libraries.

## Tokens

- Background: `#090b0e`
- Surface: `#101318`
- Raised surface: `#151a20`
- Border: `#242a32`
- Primary text: `#eef1f3`
- Muted text: `#8e99a5`
- Accent: `#c6f36a`
- Display/body: Manrope
- Technical labels: DM Mono
- Content width: 1180px
- Spacing: 8px base rhythm, section spacing 72–112px
- Breakpoints: 900px and 680px

## Components

Reusable patterns use semantic classes: site header/navigation, hero, section heading, filter buttons, project cards, maturity labels, technology tags, capability cards, experience rows, archive links, contact actions and footer.

## Interaction and accessibility

- Mobile navigation exposes state through `aria-expanded`.
- Project filters expose state through `aria-pressed` and use actual data categories.
- Skip link, visible focus styles and semantic landmarks are included.
- Reduced-motion preference disables smooth/animated transitions.
- Project cards use real text and links; visual panels are decorative CSS representations, not screenshots or product captures.

## Responsive behavior

The desktop hero and featured project split collapse to one column on mobile. Navigation becomes a disclosure menu. Capability cards and archive rows reflow for narrow viewports.
