---
name: devx
description: Development workflows, code structure, platform mapping, and project conventions for the DevX ecosystem.
allowed-tools: Read Glob Grep Edit Write Bash(npm *) Bash(git *)
context: fork
agent: general-purpose
---

# DevX Development System

This skill documents the DevX development platform conventions, code structure, and project organization.

Companion references:

- `references/code-structure.md`: module layout and organization
- `references/platform-mapping.md`: platform-specific patterns
- `references/tokens-and-layout.md`: design token conventions
- `references/tokens.md`: token system reference

Use this skill when:

- creating new modules or services
- refactoring existing code structure
- implementing platform-specific features
- working with design tokens and layout system

## 1. Architecture Overview

The DevX platform follows modular architecture with clear separation of concerns:

- Core libraries in `packages/core/`
- Platform adapters in `packages/platform/`
- Application code in `apps/`

## 2. Code Structure Rules

- One concern per module
- Public API via `index.ts` barrel exports
- Internal implementation in `internal/` subdirectories
- Types co-located with implementation

## 3. Platform Conventions

| Platform | Location | Testing |
|----------|----------|---------|
| Web | `packages/web/` | Vitest + Playwright |
| Mobile | `packages/mobile/` | Jest + Detox |
| API | `packages/api/` | Vitest + Supertest |

## 4. Token System

Design tokens follow the System UI theme specification:

- `--color-*` for colors
- `--space-*` for spacing (4px base unit)
- `--font-*` for typography
- `--shadow-*` for elevation
