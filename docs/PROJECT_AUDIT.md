# Project audit

## Scope and evidence

The audit compared repository READMEs, package manifests, source entry points, data models, API routes, migrations, and available automated tests for the principal candidates under AravindSAsok. The findings below describe code visible in those repositories; they do not claim that tests were executed or that hosted services were independently browser-tested.

## Candidate findings

| Project | Source evidence | Tests / controls | Maturity and limitations |
| --- | --- | --- | --- |
| EvidencePilot | Python/Streamlit; pypdf page extraction; chunking; keyword and semantic retrieval; Gemini generation and embeddings; Supabase integration | Python unittest coverage for Research Agent tokenization, page-aware chunking, keyword/hybrid ranking, and retrieval metric shape | Working research application. Retrieval quality depends on evaluation cases; no benchmark score is claimed |
| TrackCake | Astro 5 / TypeScript; manual, text, and photo entry; separate estimate, image, assistant, and provider-status API routes; Groq, Gemini, OpenRouter; Supabase migrations | Source-level structured-output validation and API separation inspected; no dedicated automated test suite found in the inspected tree | Deployed application. Nutrition and photo estimates are approximate and require user review |
| Maplewood AI Front Desk | Python deterministic-first agent; explicit emergency and urgent rules; identity checks; refill and scheduling tools; MCP server | pytest checks emergency handling, refill restrictions, schedule constraints, verification, and prompt-injection behavior | Prototype using synthetic clinic records; appointment mutations are in-memory; not a clinical system |
| Hourly | Next.js 16 / TypeScript; Supabase Auth and PostgreSQL; timestamp-derived work and break calculations; reports and CSV export | Node test suites cover calculations, break thresholds, active/completed break edits, punch-out edits, and schedule capacity | Deployed application requiring Supabase configuration; not a payroll compliance product |
| ClashCommand | Next.js 16 / React 19 / TypeScript; PostgreSQL and Drizzle; NextAuth; relational clan, player, membership, war, attack, defense, and activity-log schema; external game API sync | Vitest validation suite and Playwright setup; role checks and production sync restriction visible in route source | Application source with test tooling; database and auth configuration required; no public demo listed |
| ACME Salary Management | React frontend; Express 5 API; better-sqlite3; employee search, pagination, salary update, and summary endpoints | Node test-runner checks a seeded 10,000-record dataset, pagination, search, summaries, and invalid updates | Focused full-stack application; inspected API does not show authentication or role-based authorization |
| ProfBot AI | Python CLI and Streamlit; PDF/TXT/pasted text; BM25-style retrieval; Gemini answer generation; validated citations; Argon2id; Supabase storage and usage limits | pytest covers auth, loading, chunking, retrieval, QA, ownership, and usage controls | Strong document-QA demo, but overlaps EvidencePilot's research/RAG positioning |
| Openfolio | React 19 / Vite / TypeScript; Cloudflare Workers, D1, R2, Drizzle, GitHub OAuth | Vitest suite present | Explicitly an early MVP; live OAuth and hosting require operator setup |
| LineSplit | Vanilla JavaScript Chrome Manifest V3 extension and static web app; local persistence and clipboard actions | No test suite found in inspected tree | Small focused utility; suitable for archive rather than flagship selection |

## Selected six

1. EvidencePilot — applied AI, retrieval, and evidence review.
2. TrackCake — shipped full-stack product with multiple AI provider integrations.
3. Maplewood AI Front Desk — deterministic-first MCP agent and safety boundaries.
4. Hourly — timestamp-based domain logic and focused test coverage.
5. ClashCommand — relational full-stack domain model, auth, validation, and external sync.
6. ACME Salary Management — practical Node.js API, SQLite data access, pagination, and aggregation.

ProfBot remains in the archive because it is technically substantial but would make the featured set overly repetitive in document QA/RAG. Openfolio and LineSplit remain discoverable in the archive. Practice Management and Multi-Agent Workflow Automation were not selected because the copied portfolio entries did not provide a verifiable source repository link.

## Evidence boundaries

The audit does not claim that every available test suite has passed, that every live demo is reachable, or that every deployment is production-grade. Those checks remain part of release QA.
