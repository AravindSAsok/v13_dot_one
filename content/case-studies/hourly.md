---
slug: hourly
title: Hourly
category: Backend Engineering
summary: A timestamp-first work-time tracker that derives work totals from recorded sessions and applies an explicit break-deduction policy.
stack:
  - Next.js 16
  - React 19
  - TypeScript
  - Supabase Auth
  - PostgreSQL
  - Node.js test runner
repo: https://github.com/AravindSAsok/hourly
maturity: Deployed application
architecture:
  - Authenticated workspace
  - Punch and break timestamps
  - PostgreSQL persistence
  - Shared time calculations
  - Dashboard and history
  - Reports and CSV export
---

## Problem

Time tracking becomes unreliable when totals are treated as mutable counters instead of being derived from the underlying punch and break events.

## Product objective

Store source timestamps and calculate working time consistently across the live dashboard, history, reports, and CSV exports.

## Solution

Hourly uses Next.js App Router, TypeScript, Supabase Auth, and PostgreSQL. Its shared time module models work sessions and break records, parses timestamps into epoch values, merges overlapping intervals, and calculates gross time, observed break time, deducted break time, and net work time.

Its break policy is explicit: a completed break shorter than 15 minutes remains paid; a break of 15 minutes or longer is deducted in full. An open break is provisional until it reaches the threshold. The README states that the dashboard timer updates in the browser and does not write to the database every second.

## Architecture

Next.js workspace → authenticated server actions → PostgreSQL timestamp records → shared time calculation module → dashboard, history, reports, and CSV export.

## Technology decisions

- Treat timestamps as the source of truth and derive totals from them.
- Keep schedule capacity separate from net-work calculations.
- Use a shared calculation module across multiple UI and export surfaces.
- Model open breaks explicitly rather than prematurely deducting them.

## Verification

The repository includes Node test-runner suites for time calculations, break deduction, active-break editing, completed-break editing, punch-out editing, and schedule-break capacity.

## Data model and API design

The Supabase migration defines `profiles`, `work_sessions`, `breaks`, and `break_edits`. Work sessions store clock-in and clock-out timestamps; breaks store their actual start and end timestamps; edits preserve the previous and corrected values. Shared server/database functions perform state transitions, while the TypeScript calculation module derives net time from records.

## Engineering challenges

- Apply the 15-minute break threshold consistently at 14:59, 15:00, and 15:01.
- Treat an open break as provisional until it reaches the threshold.
- Merge overlapping intervals and split working time across local day and week boundaries.
- Preserve correct totals around midnight and daylight-saving transitions.

## Security and reliability

RLS is enabled on user data and read policies use `auth.uid()`. Direct table writes are revoked from application roles; state changes run through narrowly scoped database functions with database timestamps and row locking. Partial unique indexes prevent multiple open sessions or breaks. These controls are source-inspected, not a third-party security certification.

## Limitations and trade-offs

The app requires a configured Supabase project for authentication and persistence. Time calculations depend on valid timestamp inputs and the application's documented break policy; this is a work tracker, not a payroll compliance system.

## Screenshots

No live application screenshot was captured for this release. The interactive architecture explorer above is the code-based visual for the verified implementation flow.

## Demo and source

[Source repository](https://github.com/AravindSAsok/hourly). A public demo URL is not listed in the repository README.

## Why it is featured

It shows backend correctness and domain modelling: event-based time data, deterministic calculations, explicit boundary rules, and focused automated tests.