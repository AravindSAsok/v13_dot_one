# Project audit

## Scope and evidence

Repository inventory was checked through the connected GitHub integration. Candidate READMEs and available manifests were read for EvidencePilot, TrackCake, Maplewood AI Front Desk, Hourly, ClashCommand, ProfBot, Openfolio, ACME Salary Management and the existing v13 portfolio. The current v13 package manifest confirms Gatsby 3.4.1, React 17 and styled-components 5.3.

This is a README/manifest-level audit plus targeted architecture verification, not a complete line-by-line security audit of every repository. The source repositories remain authoritative.

## Candidate findings

| Project | Evidence found | Limitations / maturity |
| --- | --- | --- |
| EvidencePilot | PDF research, keyword and semantic retrieval, source-grounded Q&A, answer/research audits, human review, retrieval evaluation metrics | Text-based PDF workflow; scanned PDFs need OCR; metrics are evaluation-set-specific |
| TrackCake | Astro 5, TypeScript, server API routes, manual/text/photo food entry, Groq/Gemini/OpenRouter, model discovery, optional Supabase Auth/Postgres/RLS | Nutrition and image estimates can be inaccurate; provider catalogues and quotas vary; cloud sessions need recoverable account setup |
| Hourly | Next.js 16, TypeScript, Supabase Auth/Postgres, timestamp-first sessions, shared time calculations, RLS, database functions, locking and unique indexes | Database integration checks need a configured Supabase project |
| Maplewood AI Front Desk | Python/FastMCP, deterministic emergency gate, verification tokens, MCP tool layer, structured outputs, audit log and evaluator | Synthetic 40-message sample; in-sample metrics; no real clinic integration; prototype token is not production auth |
| ClashCommand | Next.js 16, React 19, TypeScript, NextAuth, PostgreSQL, Drizzle, Zod, Vitest, Playwright and external API sync script | Requires configured DB and secrets; sync is an explicit trusted local operation |
| ProfBot | Python CLI + Streamlit, page-aware chunking, BM25-style retrieval, Gemini grounded answers, citation ID mapping, Argon2id, private Supabase storage, RLS and quotas | Interview-ready demo; not independently audited security product; lexical retrieval, not embedding/vector retrieval |
| Openfolio | React/Vite/TypeScript, Cloudflare Workers, D1/R2 and Drizzle | MVP; not selected as a flagship |
| ACME Salary Management | React/Vite, Express, better-sqlite3, server-side search/pagination, salary aggregates and deterministic 10,000-row seed | Assessment app; README excludes auth, payroll and audit logging |
| ProfDoc AI v2 / Mini RAG | Additional document-AI and retrieval experiments | Similar problem space to ProfBot and EvidencePilot; archive to avoid repetitive featured projects |

## Existing portfolio protection

The existing `AravindSAsok/v13` repository is separate from this repository. v13.1 writes were issued only to `v13_dot_one`. No write operations were issued against v13 or TrackCake.
