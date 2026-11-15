---
slug: acme-salary-management
title: ACME Salary Management
category: Backend & Full-Stack
summary: An HR dashboard and API for employee search, pagination, salary updates, and salary summaries backed by SQLite.
stack:
  - React
  - Node.js
  - Express 5
  - SQLite
  - better-sqlite3
repo: https://github.com/AravindSAsok/acme-salary-management
demo: ""
maturity: Full-stack application with database tests
architecture:
  - React HR dashboard
  - Express JSON API
  - Employee and salary queries
  - SQLite persistence
  - Search and pagination
  - Salary summary and updates
---

## Problem

HR workflows need a clear way to browse employee records, find people quickly, review salary summaries, and make controlled salary updates.

## Product objective

Build a compact HR manager dashboard backed by a real API and relational storage rather than a static UI mockup.

## Implementation

The repository contains a React frontend and an Express 5 backend using better-sqlite3. The API exposes employee listing with search, page, and limit parameters; salary updates by employee ID; and a salary summary endpoint. The database test suite checks a seeded 10,000-record dataset, pagination, search, salary summaries across six countries, and invalid or missing salary-update cases.

## Architecture

React HR dashboard → Express JSON API → database query and update functions → SQLite.

## Engineering decisions

- Keep data access in dedicated database functions rather than embedding SQL behavior in route handlers.
- Expose pagination and search as API query parameters.
- Validate salary update inputs and return distinct invalid-input and missing-record errors.
- Exercise the database behavior with Node's built-in test runner.

## Verification

The backend defines a Node test-runner suite that checks employee count, record shape, page sizing, search filtering, summary aggregation, and salary update error paths.

## Limitations and trade-offs

The repository demonstrates a focused HR management workflow, not a complete enterprise HRIS. The inspected API does not show authentication or role-based authorization, so the portfolio does not claim those controls.

## Why it is featured

It gives a concrete example of practical Node.js backend work: API design, SQLite data access, pagination, filtering, aggregation, and defensive update handling.