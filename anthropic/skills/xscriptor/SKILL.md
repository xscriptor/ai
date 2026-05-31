---
name: xscriptor
description: Full-stack documentation for the Xscriptor literary portfolio site. Invoke when extending pages, refactoring components, managing content, or modifying the build pipeline.
allowed-tools: Read Glob Grep Edit Write Bash(git *)
context: fork
agent: general-purpose
---

# Xscriptor Site System

This skill documents the complete architecture of xscriptor.com — a personal literary portfolio, blog, and art gallery built with Next.js 16 App Router and statically exported.

Companion references:

- `references/code-structure.md`: preferred file placement, responsibilities, and anti-patterns

Use this skill when:

- building new pages or sections (blog, books, info, contact)
- refactoring layout, CSS, or component boundaries
- adding or updating content (articles, book pages)
- modifying the blog pipeline or markdown processing
- making UI changes that must stay visually consistent
- configuring the static export or build process

## 1. Tech Stack

| Layer | Choice |
|-------|--------|
| Framework | Next.js 16 App Router |
| Language | TypeScript + JavaScript (`.jsx` in legacy pages) |
| CSS | Tailwind CSS v4 + CSS Modules |
| Animations | framer-motion (page transitions, cards), GSAP (ImageTrail) |
| Content | Markdown + gray-matter + remark/rehype pipeline |
| Theme | `data-theme` attribute + localStorage |
| Build | Static export (`output: "export"`) |
| Hosting | Apache with PHP (Hostinger) |

## 2. Project Structure

```
src/app/
  layout.tsx              -- root layout
  page.tsx                -- home page
  [locale]/               -- i18n locale group
    layout.tsx            -- locale-aware layout
    page.tsx              -- localized home
    blog/                 -- localized blog
    contacto/             -- localized contact
    info/                 -- localized bio
    obras/                -- localized books
  components/             -- shared components
    xcomponents/          -- barrel re-export of @xscriptor/xcomponents
  content/
    articulos/            -- blog markdown by locale (es, en, de)
    boulevard/            -- book content (es.mdx, en.mdx, de.mdx)
  lib/
    articles.ts           -- locale-aware markdown parsing
messages/                 -- i18n JSON files (es.json, en.json, de.json)
```

## 3. Component System

All reusable UI components come from `@xscriptor/xcomponents` npm package. The only local file is a barrel re-exporter at `src/app/components/xcomponents/index.ts` that adds the `"use client"` boundary.

## 4. Content Management

Blog articles are markdown in `content/articulos/{locale}/*.md` with frontmatter. Books use `.mdx` with `XBookReader` component.

## 5. Key Rules

- No local copies of npm components
- Tailwind utility classes for layout
- `output: "export"` in Next.js config
- CSP with `'unsafe-inline'` is required for static export
- PHP files in `src/app/api/` are deployed manually
