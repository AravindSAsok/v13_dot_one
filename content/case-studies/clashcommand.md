---
slug: clashcommand
title: ClashCommand
category: Full-Stack & Backend
summary: An authenticated clan, player, and war operations dashboard backed by a relational PostgreSQL model and external game-data synchronization.
stack:
  - Next.js 16
  - React 19
  - TypeScript
  - PostgreSQL
  - Drizzle ORM
  - NextAuth
  - Zod
  - Vitest
  - Playwright
repo: https://github.com/AravindSAsok/ClashCommand
demo: ""
maturity: Application source with automated tests
architecture:
  - Authenticated browser
  - Session and role checks
  - Validated route handlers
  - Drizzle data access
  - PostgreSQL domain tables
  - Local external-data sync
---

## Problem

Clan, player, membership, and war information spans multiple entities and needs consistent access control and relational history.

## Product objective

Provide an authenticated operations dashboard for saved clans, player profiles, membership roles, and war history, with a controlled synchronization path to the Clash of Clans API.

## Implementation

The repository uses Next.js App Router, React, TypeScript, PostgreSQL, and Drizzle ORM. Its schema exports users, clans, players, clan memberships, CWL seasons, wars, war participants, attacks, defenses, and activity logs. NextAuth provides credential-based authentication and role-aware admin operations. Zod schemas validate clan, player, war, and attack inputs.

A war synchronization route checks for a signed-in user and admin role, prevents the deployed production site from running the sync operation, and directs administrators to run the local synchronization script instead.

## Architecture

Browser → Next.js App Router → session and role checks → validated route handlers → Drizzle ORM → PostgreSQL. A local admin sync script integrates with the external game API and persists normalized war data.

## Engineering decisions

- Model game operations as relational entities rather than one denormalized record.
- Separate role checks from request validation.
- Keep external synchronization out of the deployed production request path.
- Test schema validation for required fields and domain bounds.

## Verification

The repository includes Vitest validation tests and a Playwright end-to-end test setup. The package scripts expose build, lint, unit-test, and end-to-end-test commands.

## Limitations and trade-offs

The project requires database and authentication configuration. The inspected synchronization route intentionally rejects production-triggered sync; operators must run the local admin script. No public demo URL is listed here.

## Why it is featured

It demonstrates a substantial full-stack domain model, authenticated operations, explicit authorization, input validation, and an external data integration boundary.