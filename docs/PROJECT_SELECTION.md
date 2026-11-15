# Project selection

## Selection method

Projects were compared using source-visible implementation depth, backend and data modelling, applied AI differentiation, security boundaries, test evidence, product maturity, and portfolio diversity. README statements were cross-checked against source entry points, package manifests, routes, schemas, and test files where available.

## Featured projects

| Project | Repository | Stack | Implemented functionality | Evidence and limitations |
| --- | --- | --- | --- | --- |
| EvidencePilot | https://github.com/AravindSAsok/EvidencePilot | Python, Streamlit, Gemini, pypdf, NumPy, Supabase | PDF extraction, page-aware chunks, keyword and semantic retrieval, answer generation, claim review, retrieval evaluation | Tests cover Research Agent helpers and retrieval metrics' shape; no benchmark score claimed |
| TrackCake | https://github.com/AravindSAsok/tracKcake | Astro 5, TypeScript, Supabase, PostgreSQL, Groq, Gemini, OpenRouter | Manual, natural-language, and photo food entry; model selection; reviewable estimates; diary and Calkie workflows | Source includes API validation and Supabase migrations; estimates are approximate; no dedicated test suite found in inspected tree |
| Maplewood AI Front Desk | https://github.com/AravindSAsok/maplewood-ai-front-desk | Python, MCP, FastMCP, pytest | Deterministic-first inbox triage, emergency escalation, verification, refill policy, appointment tools | Tests cover policy boundaries; synthetic data and in-memory appointment state; prototype only |
| Hourly | https://github.com/AravindSAsok/hourly | Next.js 16, TypeScript, Supabase, PostgreSQL | Timestamp-first work sessions, break policy, reports, CSV export | Multiple Node test suites cover time calculations and editing; requires configured Supabase; no public demo URL listed in README |
| ClashCommand | https://github.com/AravindSAsok/ClashCommand | Next.js 16, React 19, TypeScript, PostgreSQL, Drizzle, NextAuth, Zod | Clan/player/war management, role-aware admin operations, relational persistence, external game data sync | Vitest and Playwright tooling present; production sync route intentionally rejects in-app sync |
| Openfolio | https://github.com/AravindSAsok/openfolio | React 19, Vite, TypeScript, Cloudflare Workers, D1, optional R2, Drizzle, GitHub OAuth | GitHub OAuth, public repository import, user-curated portfolio data, scheduled sync, server-rendered public pages | Early MVP; token encryption and hashed sessions are source-visible; Vitest covers slug rules and merge behavior; hosted OAuth requires operator setup |

## Curated archive

ProfBot AI remains available in the archive because its CLI/web parity, BM25 retrieval, citation validation, Argon2id authentication, ownership checks, and usage limits are valuable but overlap with EvidencePilot's RAG story. ACME Salary Management remains as a focused Node.js/Express/SQLite API example with search, pagination, salary updates, summary endpoints, and a seeded-dataset test suite. LineSplit remains a focused utility. Openfolio is featured because its OAuth, token handling, D1 data model, and server-rendered pages add a distinct developer-tool story.

Other small or older repositories remain linked in the archive. Portfolio entries for Practice Management and Multi-Agent Workflow Automation were excluded from the featured list because the copied content did not identify verifiable source repositories.

## Live links

A demo link is shown only when a repository or existing portfolio configuration supplies a concrete URL. A URL being listed is not a claim that it has passed live browser verification.
