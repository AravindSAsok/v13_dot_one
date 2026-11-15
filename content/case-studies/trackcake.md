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
architecture:
  - Manual, text, or photo entry
  - Astro server API
  - Selected LLM provider
  - Structured nutrition validation
  - User review and edits
  - Diary persistence
---

## Problem

Food logging can be tedious, while unreviewed AI estimates can create misleading nutrition records.

## Product objective

Support quick logging without hiding uncertainty: users can enter meals manually, describe food in natural language, or submit a photo, then inspect and edit suggested items before saving.

## Solution

The Astro and TypeScript application exposes server API routes for text estimates, photo analysis, assistant interactions, and provider status. Its photo route parses model output into a bounded list of food items, validates required names, portions, and calorie values, and returns structured nutrition fields. The application supports Groq, Gemini, and OpenRouter integrations, model selection, and provider fallback.

The README documents local browser persistence or Supabase Auth with cloud-backed PostgreSQL persistence, diary editing and history, daily nutrition goals, and the Calkie assistant. Supabase migrations are included in the repository.

## Architecture

User entry → Astro interface → server API → selected LLM provider → structured estimate → user review and edits → local storage or Supabase-backed diary.

## Technology decisions

- Treat model output as an estimate that must be parsed and validated.
- Require user review before saving AI-suggested foods.
- Support multiple providers rather than hard-wiring the product to one model API.
- Keep local persistence available alongside optional authenticated cloud persistence.

## Verification

Source inspection confirms separate API routes for estimates, image analysis, assistant messages, and provider status, plus SQL migrations. The public README states that nutrition values and image portion estimates may be wrong and should be reviewed.

## Data model and API design

The Supabase migration defines user-scoped `food_entries` with food name, amount, calories, macronutrients, meal type, eaten timestamp, and source (manual or AI), plus per-user `tracker_settings`. Row Level Security policies scope reads and writes to `auth.uid()`. Astro API routes separate nutrition estimates, photo analysis, assistant messages, and provider status.

## Engineering challenges

- Normalize different model-provider responses into a predictable food-entry shape.
- Parse and validate photo-derived food items before they reach the diary.
- Preserve manual logging while adding AI-assisted text and image flows.
- Keep provider selection and fallback behavior separate from the user's review and save decision.

## Security and reliability

The database migration enables RLS and applies user ownership checks to diary and settings rows. Server API routes form the provider boundary; the UI treats generated nutrition as an estimate and keeps the review/edit step before persistence. The app is not a medical or nutrition measurement system.

## Limitations and trade-offs

Nutrition estimates are not clinical measurements or medical advice. Photo recognition and portion sizing can be inaccurate. Cloud persistence requires the operator to configure Supabase; local mode has different persistence and account capabilities.

## Screenshots

No live application screenshot was captured for this release. The interactive architecture explorer above is the code-based visual for the verified implementation flow.

## Demo and source

## Why it is featured

TrackCake is a shipped, user-facing product that brings together full-stack application design, AI provider orchestration, structured output validation, and data persistence.