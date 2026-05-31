---
name: samurai
description: Security architecture, backend/component patterns, database schema, and design tokens for the Samurai security platform.
allowed-tools: Read Glob Grep Bash(grep *) Bash(find *)
context: fork
agent: Explore
---

# Samurai Security Platform

This skill documents the Samurai security platform architecture and conventions.

Companion references:

- `references/architecture-overview.md`: system architecture
- `references/backend-patterns.md`: server-side patterns
- `references/component-patterns.md`: UI component conventions
- `references/database-schema.md`: data model
- `references/design-tokens.md`: visual design system
- `references/export-patterns.md`: module export conventions

Use this skill when:

- auditing security architecture
- implementing backend security patterns
- building UI components for security features
- modifying database schema
- working with design tokens

## 1. Architecture

The Samurai platform follows a zero-trust architecture with:

- API gateway authentication for all endpoints
- Service-to-service mTLS communication
- Encrypted data at rest and in transit
- Audit logging for all access events

## 2. Backend Patterns

- Repository pattern for data access
- Middleware pipeline for request processing
- Circuit breaker for external dependencies
- Rate limiting per tenant and endpoint

## 3. Component Patterns

- Atomic design methodology
- Composition over configuration
- Accessibility-first (WCAG 2.1 AA)

## 4. Database Schema

- UUID v7 primary keys
- Soft deletes with `deleted_at`
- Row-level security for multi-tenant isolation
- Audit columns on all tables (`created_by`, `updated_at`)

## 5. Design Tokens

Tokens follow security UX best practices:

- High contrast by default
- Color-blind safe palette
- Clear error/warning/success semantics
- Consistent spacing for information density
