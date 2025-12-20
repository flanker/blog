# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

This is 冯智超 (Feng Zhichao)'s personal blog, written primarily in Chinese. The blog focuses on:
- Technical leadership and management
- Engineering practices and development technologies
- Self-management, team management, and project management
- Product thinking and strategy

The author has 20+ years of technology experience, leading teams at companies like Geek+ and Xiaohongshu, focused on Product Technology, Platform Engineering, and Internal R&D tools.

## Tech Stack & Architecture

### Core Technology
- **Framework**: Next.js 16 with App Router, Turbopack, and static export mode
- **Language**: TypeScript with strict mode and path aliases (`@/*` maps to root)
- **Runtime**: React 19
- **Package Manager**: pnpm
- **Styling**: Pure CSS with CSS custom properties (no framework)
- **Content Processing**: gray-matter + remark-html pipeline
- **Hosting**: GitHub Pages with custom domain (fengzhichao.me)
- **Analytics**: Google Analytics (GA4) via @next/third-parties

### Static Site Generation
- Uses `output: 'export'` in next.config.js for GitHub Pages compatibility
- Images are unoptimized (`images.unoptimized: true`) for static hosting
- Trailing slashes enabled for proper routing
- `.nojekyll` file prevents Jekyll processing

### Content Management System
The content processing pipeline handles two types of content:

**Blog Posts** (`lib/posts.ts`):
- Multi-directory content sources: `posts/`, `draft/`, `en/`
- Recursive directory scanning for nested year/month structure (e.g., `posts/2025/`)
- Automatic title extraction: first from front matter, then from first `#` heading, finally from filename
- Date extraction: from front matter or filename pattern (YYYY-MM-DD or MM-DD with year from path)
- Slug generation: flattens nested paths with hyphens (e.g., `2025/07-31-post.md` → `2025-07-31-post`)
- Category tracking: posts are tagged as "post", "draft", or "en"
- Sort order: newest first based on date

**Static Pages** (`lib/pages.ts`):
- Single markdown files at root (e.g., `about.md`, `wx-account.md`)
- Front matter parsing for title and metadata
- Rendered via remark-html for consistent HTML output

### Development Commands
This project uses **pnpm** as the package manager.

```bash
# Install dependencies
pnpm install

# Run local development server (http://localhost:3000)
pnpm dev

# Build the site (automatically exports static files to 'out/')
pnpm build

# Deploy to GitHub Pages (builds + deploys via script)
pnpm deploy

# Run ESLint
pnpm lint

# Update all dependencies
pnpm update
```

### Deployment Workflow
The site can be deployed via:
1. **GitHub Actions** (recommended): Push to `master` or `main` triggers `.github/workflows/deploy.yml`
   - Builds with Node.js 20 and pnpm 9
   - Uploads `out/` directory as Pages artifact
   - Deploys to GitHub Pages automatically

2. **Manual deployment**: `pnpm deploy` or `./scripts/deploy.sh`
   - Builds the site first with pnpm
   - Adds `.nojekyll` and `CNAME` to `out/`
   - Force-pushes `out/` directory to `gh-pages` branch

## App Router Architecture

The site uses Next.js App Router with a bilingual routing structure:

**Root Layout** (`app/layout.tsx`):
- Provides `<html>` and `<body>` tags with `lang="zh-CN"`
- Integrates Google Analytics (GA4)
- Does not include header/footer (delegated to route-specific layouts)

**Chinese Routes** (Route Group: `app/(zh)/`):
- `/` - Homepage (`app/(zh)/page.tsx`) with featured projects and posts
- `/posts` - All posts listing (`app/(zh)/posts/page.tsx`)
- `/posts/[slug]` - Individual post pages (`app/(zh)/posts/[slug]/page.tsx`)
  - Dynamic routes generated at build time via `generateStaticParams()`
  - Slugs follow pattern: `YYYY-MM-DD-title` (e.g., `2025-07-31-new_post`)
- `/about` - About page (`app/(zh)/about/page.tsx`) from `about.md`
- `/wx-account` - WeChat account page (`app/(zh)/wx-account/page.tsx`) from `wx-account.md`
- Layout: `app/(zh)/layout.tsx` wraps pages with Chinese header and footer

**English Routes** (`app/en/`):
- `/en` - English homepage (`app/en/page.tsx`)
- `/en/posts` - English posts listing (`app/en/posts/page.tsx`)
- `/en/posts/[slug]` - English post pages (`app/en/posts/[slug]/page.tsx`)
- `/en/about` - English about page (`app/en/about/page.tsx`)
- Layout: `app/en/layout.tsx` wraps pages with English header, footer, and metadata

**Route Groups**:
- The `(zh)` folder is a route group (parentheses prevent it from affecting URL paths)
- This allows `/` to serve Chinese content while keeping organized code structure
- Both `(zh)` and `en` layouts include their own Header and Footer components

## Project Structure

```
.
├── app/                    # Next.js App Router pages
│   ├── layout.tsx         # Root layout (html, analytics)
│   ├── (zh)/              # Chinese route group (default routes)
│   │   ├── layout.tsx     # Chinese layout with header/footer
│   │   ├── page.tsx       # Chinese homepage
│   │   ├── posts/
│   │   │   ├── page.tsx   # All posts listing
│   │   │   └── [slug]/
│   │   │       └── page.tsx # Dynamic post pages
│   │   ├── about/page.tsx # About page
│   │   └── wx-account/page.tsx # WeChat account page
│   ├── en/                # English routes
│   │   ├── layout.tsx     # English layout with header/footer
│   │   ├── page.tsx       # English homepage
│   │   ├── posts/
│   │   │   ├── page.tsx   # English posts listing
│   │   │   └── [slug]/
│   │   │       └── page.tsx # English post pages
│   │   └── about/page.tsx # English about page
│   └── not-found.tsx      # 404 page
├── components/             # Reusable React components
│   ├── Header.tsx         # Site header (bilingual)
│   └── Footer.tsx         # Site footer (bilingual)
├── lib/                    # Core utilities
│   ├── posts.ts           # Blog post processing logic
│   └── pages.ts           # Static page processing
├── styles/                 # Global CSS files
├── public/                 # Static assets
│   └── images/posts/      # Blog post images (YYYY/MMDD/)
├── posts/                  # Published blog posts (Chinese)
│   ├── 2022/              # Organized by year
│   ├── 2023/
│   └── 2025/
├── draft/                  # Draft posts (not published)
├── en/                     # English posts content
├── scripts/                # Deployment scripts
│   └── deploy.sh          # Manual deployment to gh-pages
├── .github/workflows/      # CI/CD
│   └── deploy.yml         # GitHub Pages deployment
├── about.md               # About page content (Chinese)
├── wx-account.md          # WeChat page content (Chinese)
└── next.config.js         # Next.js configuration
```

## Content Guidelines

### Post Format
- Posts follow Jekyll naming: `YYYY-MM-DD-title.md` or `MM-DD-title.md` (year inferred from directory)
- Stored in year-based directories: `posts/2025/`, `posts/2024/`, etc.
- Images stored in `public/images/posts/YYYY/MMDD/` (note: MMDD without hyphen)
- Front matter optional but recommended:
  ```yaml
  ---
  title: "Post Title"
  date: "2025-07-31"
  ---
  ```
- If no front matter, title extracted from first `#` heading
- Most posts written in Chinese, some in English (`en/` directory)

### Main Topics Covered
1. **技术管理** (Technical Management)
   - Engineering team leadership
   - Process optimization
   - Technical decision-making

2. **工程实践** (Engineering Practices)
   - Microservices and architecture
   - DevOps and CI/CD
   - Code quality and testing

3. **产品思维** (Product Thinking)
   - Product development methodology
   - User research and validation
   - Product strategy

### Featured Projects (displayed on homepage)
1. **四色方块记忆大师** (Memory Blocks Master) - Simple casual puzzle iOS game
2. **吃青蛙** (Eat The Frog) - Personal goal management app
3. **AheadCal** - Minimalist calendar tool
4. **DarkBili** - Dark mode Chrome extension for Bilibili
5. **Chromadb-Admin** - Admin interface for Chromadb vector database
6. **EmojiZen** - Emoji search tool
7. **Framely** - Chrome screenshot extension
8. **Linear Method 中文版** - Chinese translation of Linear Method

## Writing Style
Based on recent posts, the author:
- Provides practical, actionable advice
- Uses real-world examples and case studies
- Balances theory with implementation details
- Focuses on solving real problems teams face
- Writes primarily in Chinese, with occasional English posts