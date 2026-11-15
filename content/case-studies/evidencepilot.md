---
slug: evidencepilot
title: EvidencePilot
category: AI & Research
summary: A document research workspace that combines page-aware PDF extraction, hybrid retrieval, source-grounded answers, and claim review.
stack:
  - Python
  - Streamlit
  - Google Gemini
  - pypdf
  - NumPy
  - Supabase
repo: https://github.com/AravindSAsok/EvidencePilot
demo: https://evidencepilot.streamlit.app/
maturity: Working research application
architecture:
  - PDF upload
  - Page-aware extraction
  - Chunking
  - Hybrid retrieval
  - Gemini response
  - Citation and claim review
---

## Problem

Long research PDFs make it difficult to locate supporting passages and check whether generated answers are actually grounded in source material.

## Product objective

Make document exploration and answer review more transparent by keeping retrieval evidence and page references visible.

## Solution

The repository's Streamlit application extracts PDF pages with pypdf, preserves page metadata, chunks text with a configured 1,200-character size and 180-character overlap, and combines keyword and semantic retrieval. The application defines a top-six retrieval setting, Gemini generation and embedding models, 768-dimensional embeddings, a 20 MB file limit, and a 200-page limit.

The project also includes a Research Agent, answer and claim review workflows, human review, and a retrieval evaluation area. Its tests exercise tokenization, page-aware chunking, keyword ranking, hybrid ranking, and retrieval metric output.

## Architecture

PDF upload → page-aware extraction → chunking → keyword and semantic retrieval → ranked evidence → Gemini response → citation and claim review.

## Technology decisions

- Preserve page references during extraction so evidence can be inspected in context.
- Combine lexical and semantic retrieval rather than depending on a single matching strategy.
- Keep evidence review and claim auditing visible as separate steps from answer generation.
- Bound uploaded file size, page count, chunk size, and retrieval count.

## Verification

The repository includes a Python unittest suite for Research Agent retrieval helpers. The checked tests cover chunk page metadata, ranking output, and retrieval metric structure. This does not establish production-scale retrieval quality or a benchmark score.

## Data model and API design

The application keeps extracted text associated with its source document and page number, then creates overlapping chunks for retrieval. The configured embedding dimension is 768. The inspected repository is a Streamlit application; this case study does not claim a separate public REST API.

## Engineering challenges

- Preserve page references while extracting and chunking long PDFs.
- Combine lexical matching with semantic similarity without losing inspectable source context.
- Keep answer generation separate from claim and citation review.
- Evaluate retrieval with labelled cases rather than treating generated answers as self-validating.

## Security and reliability

The application bounds uploads by file size and page count and uses bounded chunking and top-k retrieval settings. The source inspection does not establish a formal security audit or a production multi-tenant isolation guarantee, so neither is claimed.

## Limitations and trade-offs

The project is a research application, not a guarantee that generated answers are correct. Retrieval metrics depend on the evaluation cases and relevance labels supplied. Do not interpret a metric display as an independently validated benchmark.

## Screenshots

No live application screenshot was captured for this release. The interactive architecture explorer above is the code-based visual for the verified implementation flow.

## Demo and source

[Source repository](https://github.com/AravindSAsok/EvidencePilot) · [Streamlit demo](https://evidencepilot.streamlit.app/)

## Why it is featured

It demonstrates applied AI engineering beyond a basic chat interface: document ingestion, hybrid retrieval, source traceability, claim review, and evaluation-oriented tooling.