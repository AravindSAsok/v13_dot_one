---
slug: profbot
title: ProfBot AI
category: Research & Retrieval
summary: A document-grounded question-answering application with CLI and web interfaces, BM25-style retrieval, validated citations, and account-level controls.
stack:
  - Python
  - Streamlit
  - Google Gemini
  - BM25-style retrieval
  - Argon2id
  - Supabase
  - pytest
repo: https://github.com/AravindSAsok/ProfBot
demo: ""
maturity: Interview-ready application demo
architecture:
  - CLI or Streamlit UI
  - Document loader
  - Source-aware chunker
  - BM25-style retriever
  - Gemini answer service
  - Citation and usage validation
---

## Problem

Users need answers from their own documents, but a language model can confidently generate unsupported statements or cite passages that were never retrieved.

## Product objective

Build a document QA workflow that retrieves relevant passages first, generates answers from that evidence, and validates citations in application code.

## Implementation

The repository provides both a Python CLI and a Streamlit interface that share extraction, chunking, retrieval, and answer services. It supports PDF, TXT, and pasted text, preserves page metadata, uses BM25-style keyword retrieval across selected documents, and sends retrieved passages to Gemini for answer generation.

The application also includes Argon2id password hashing, Supabase-backed document and conversation persistence, private original-file storage, conversation-scoped document selection, and database-backed daily usage limits. Tests cover authentication, chunking, document loading, retrieval, answer behavior, ownership, and usage limits.

## Architecture

CLI or Streamlit UI → document loader → source-aware chunker → BM25-style retriever → Gemini answer service → citation validation → conversation and usage persistence.

## Engineering decisions

- Share the same core services between CLI and web entry points.
- Retrieve evidence before calling the model and avoid model calls when evidence is absent.
- Validate returned citation identifiers against the retrieved source set.
- Enforce document ownership and usage limits through application and database services.

## Verification

The repository includes pytest coverage for authentication, document loading, chunking, retrieval, QA behavior, ownership, and usage controls. Tests use fake model responses for deterministic service-level checks.

## Limitations and trade-offs

The README describes this as an interview-ready demo, not an audited identity or document-security product. The answer quality depends on retrieval relevance and the configured Gemini service. Do not upload confidential or regulated documents without reviewing applicable service and privacy requirements.

## Why it is featured

It complements the broader EvidencePilot research workspace with a focused, testable application architecture that emphasizes source-bounded answers, citation checks, and account-level controls.