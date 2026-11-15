---
slug: maplewood
title: Maplewood AI Front Desk
category: AI Agents & MCP
summary: A deterministic-first MCP inbox agent prototype for a fictional clinic, with explicit safety, identity, scheduling, and refill policies.
stack:
  - Python
  - FastMCP
  - MCP
  - pytest
  - Optional OpenAI API
repo: https://github.com/AravindSAsok/maplewood-ai-front-desk
demo: ""
maturity: Prototype using synthetic data
architecture:
  - Synthetic inbox message
  - Deterministic policy checks
  - Identity and schedule tools
  - MCP tool boundary
  - Guarded workflow action
  - Structured result and audit
---

## Problem

A clinic inbox can contain appointment requests, medication questions, identity-sensitive requests, and messages that require urgent human attention. These should not all be handled as unconstrained model-generated text.

## Product objective

Demonstrate an inspectable agent workflow where high-risk decisions are governed by explicit deterministic policy checks and tools are exposed through MCP.

## Solution

The agent is documented as deterministic-first. Its policy module defines explicit emergency and urgent-signal rules, intent categories, identity verification, refill eligibility, appointment scheduling, and routing actions. The same policy functions are exposed through an MCP server. Optional LLM support is an add-on rather than the authority for emergency, identity, or refill decisions.

The test suite checks emergency phrase handling and an idiom false-positive case, controlled-substance and refill constraints, holiday and provider-leave scheduling, escalation responses, privacy behavior for unverified senders, and prompt-injection handling.

## Architecture

Synthetic inbox message → deterministic policy and intent checks → identity and schedule tools → guarded workflow action → structured response and audit record.

## Technology decisions

- Keep emergency escalation, identity verification, and refill constraints outside generative-model discretion.
- Fail closed when a contact-verification token is missing.
- Treat prompt injection as suspicious input and test that it cannot approve a refill.
- Use synthetic records and clearly bounded in-memory appointment mutations.

## Verification

The repository includes pytest policy tests. Its README describes evaluation against 40 synthetic messages and explicitly warns that the sample is in-sample and is not evidence of clinical safety or generalization.

## Data model and API design

The prototype operates on synthetic inbox messages and clinic records represented in Python data structures. `ClinicTools` provides appointment, identity, and refill operations; the MCP server exposes the same workflow capabilities as tool calls. Appointment mutations are in-memory rather than persisted to a real clinic database.

## Engineering challenges

- Separate high-risk policy decisions from optional language-model assistance.
- Avoid emergency false positives for idiomatic phrases while preserving explicit danger-signal escalation.
- Enforce identity checks before disclosing protected information.
- Keep refill, appointment, and clinician-routing actions constrained by explicit rules.

## Security and reliability

Emergency escalation, identity verification, refill eligibility, and scheduling constraints are deterministic policy checks. The tests cover privacy behavior for unverified senders and prompt-injection attempts. Synthetic records and in-memory state mean this is a prototype, not a clinical or HIPAA-certified system.

## Limitations and trade-offs

This is a prototype for a fictional clinic. Records are synthetic, appointment mutations are in-memory, and it is not connected to a real clinic system. It is not a medical device or a production clinical workflow.

## Screenshots

No live application screenshot was captured for this release. The interactive architecture explorer above is the code-based visual for the verified implementation flow.

## Demo and source

[Source repository](https://github.com/AravindSAsok/maplewood-ai-front-desk). A public demo URL is not listed.

## Why it is featured

It demonstrates practical agent engineering with MCP tools, explicit policy boundaries, fail-closed access checks, structured actions, and adversarial-input tests.