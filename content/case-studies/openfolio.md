---
slug: openfolio
title: Openfolio
category: Developer Tools
summary: A self-hostable developer portfolio platform that imports public GitHub work, lets owners curate their profile, and publishes server-rendered portfolio pages.
stack:
  - React 19
  - Vite
  - TypeScript
  - Cloudflare Workers
  - Cloudflare D1
  - Optional R2
  - Drizzle ORM
  - GitHub OAuth
repo: https://github.com/AravindSAsok/openfolio
demo: ""
maturity: Early MVP; hosted OAuth and deployment require operator setup
architecture:
  - React and Vite dashboard
  - GitHub OAuth read:user
  - Cloudflare Worker API
  - Public GitHub repository import
  - D1 portfolio and session storage
  - Server-rendered public profile
---

## Problem

Developers often have to maintain a portfolio manually, even when much of their project history already exists in public GitHub repositories.

## Product objective

Build a free, self-hostable portfolio platform that imports public GitHub work while keeping the developer in control of the profile and the final published content.

## Solution

Openfolio provides a React dashboard for editing profile details, projects, skills, experience, education, certifications, social links, and theme selection. It imports public repositories through GitHub OAuth, supports manual and scheduled sync, and renders published pages at `/@username`. Three themes are included: Minimal, Terminal, and Editorial.

The README identifies the project as an early MVP. Local code and CI can be used without a Cloudflare account, while hosted GitHub OAuth and deployment require operator setup.

## Architecture

The React/Vite dashboard calls the Cloudflare Worker API. The Worker handles GitHub OAuth, sessions, repository import, portfolio editing, publishing, and scheduled sync. D1 stores account, portfolio, repository, session, and sync data. R2 is optional for uploaded images. Public portfolio pages are rendered as HTML by the Worker rather than relying on a client-only route.

## Data model and API design

The Drizzle schema defines users, sessions, GitHub connections, imported repositories, portfolios, and sync runs. Imported repository metadata is stored separately from user-curated portfolio content so a scheduled sync does not overwrite the developer's edits.

The Worker routes `/api/*` requests and handles `/@username` public pages. The GitHub integration requests the `read:user` scope and imports public repositories only. The application does not request private repository access or GitHub write permissions.

## Engineering challenges

- Keep OAuth credentials and provider tokens on the server rather than exposing them to the browser.
- Reconcile imported repository metadata with user-authored portfolio descriptions.
- Generate public pages from stored data while supporting multiple themes.
- Keep local development possible without requiring a live Cloudflare account.

## Security and reliability

The implementation encrypts stored GitHub OAuth tokens with AES-GCM using a 256-bit key supplied as a Worker secret. Session identifiers are random opaque values; only SHA-256 hashes are stored in D1. The public renderer escapes user-controlled text and accepts only HTTP or HTTPS URLs for outbound links. Public routes read published portfolio data only. Users can unpublish, export their JSON data, or delete their account.

These are source-level controls, not an independent security audit.

## Testing and verification

The Vitest suite currently checks slug normalization and reserved names, and verifies that user-authored project descriptions take precedence over imported GitHub descriptions. GitHub Actions CI is configured. The inspected suite is small and does not establish end-to-end OAuth, Cloudflare D1, R2, or production deployment behavior.

## Limitations and trade-offs

Openfolio is an early MVP. Live GitHub OAuth and hosted deployment require Cloudflare resources and operator-configured secrets. The public repository documents the setup but does not provide a verified public demo URL. No hosted-user count or production adoption claim is made.

## Screenshots

No live product screenshot was captured for this release. The interactive architecture explorer above is the code-based visual for the verified request and data flow.

## Demo and source

A public demo is not currently listed. The source repository is linked above; local setup and Cloudflare deployment instructions are included in its README and docs.

## Why it is featured

Openfolio adds a distinct developer-tool story to the portfolio: OAuth integration, server-side token protection, a relational data model, public server-rendered pages, and a clear separation between imported and user-authored data.