---
slug: trackcake
title: TrackCake
category: Full-Stack & Applied AI
summary: A food diary with manual, text-assisted, and photo-assisted meal logging, reviewable nutrition estimates, and optional cloud persistence.
stack:
  - Astro 5
  - TypeScript
  - Supabase
  - PostgreSQL
  - Groq
  - Gemini
  - OpenRouter
repo: https://github.com/AravindSAsok/tracKcake
demo: https://trackcake.vercel.app/
maturity: Deployed application
---

## Problem

Food logging can be tedious, while unreviewed AI estimates can create misleading nutrition records.

## Product objective

Support quick logging without hiding uncertainty: users can enter meals manually, describe food in natural language, or submit a photo, then inspect and edit suggested items before saving.

## Implementation

The Astro and TypeScript application exposes server API routes for text estimates, photo analysis, assistant interactions, and provider status. Its photo route parses model output into a bounded list of food items, validates required names, portions, and calorie values, and returns structured nutrition fields. The application supports Groq, Gemini, and OpenRouter integrations, model selection, and provider fallback.

The README documents local browser persistence or Supabase Auth with cloud-backed PostgreSQL persistence, diary editing and history, daily nutrition goals, and the Calkie assistant. Supabase migrations are included in the repository.

## Architecture

User entry → Astro interface → server API → selected LLM provider → structured estimate → user review and edits → local storage or Supabase-backed diary.

## Engineering decisions

- Treat model output as an estimate that must be parsed and validated.
- Require user review before saving AI-suggested foods.
- Support multiple providers rather than hard-wiring the product to one model API.
- Keep local persistence available alongside optional authenticated cloud persistence.

## Verification

Source inspection confirms separate API routes for estimates, image analysis, assistant messages, and provider status, plus SQL migrations. The public README states that nutrition values and image portion estimates may be wrong and should be reviewed.

## Limitations and trade-offs

Nutrition estimates are not clinical measurements or medical advice. Photo recognition and portion sizing can be inaccurate. Cloud persistence requires the operator to configure Supabase; local mode has different persistence and account capabilities.

## Why it is featured

TrackCake is a shipped, user-facing product that brings together full-stack application design, AI provider orchestration, structured output validation, and data persistence.