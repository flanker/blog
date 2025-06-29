# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

This is 冯智超 (Feng Zhichao)'s personal blog, written primarily in Chinese. The blog focuses on:
- Technical leadership and management
- Engineering practices and development technologies
- Self-management, team management, and project management
- Product thinking and strategy

The author has 20+ years of technology experience, leading teams at companies like Geek+ and Xiaohongshu, focused on Product Technology, Platform Engineering, and Internal R&D tools.

## Tech Stack & Commands

### Next.js Blog Setup
- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Runtime**: React 19
- **Styling**: CSS
- **Markdown**: gray-matter + remark
- **Hosting**: GitHub Pages
- **Domain**: fengzhichao.me

### Development Commands
```bash
# Install dependencies
npm install

# Run local development server
npm run dev

# Build the site (automatically exports static files)
npm run build

# Deploy to GitHub Pages
npm run deploy

# Run linter
npm run lint
```

## Project Structure

```
.
├── app/                 # Next.js App Router pages
│   ├── layout.tsx      # Root layout
│   ├── page.tsx        # Homepage
│   ├── posts/          
│   │   └── [slug]/     # Dynamic post pages
│   ├── about/          # About page
│   └── wx-account/     # WeChat account page
├── components/          # React components
├── lib/                 # Utility functions
│   ├── posts.ts        # Post processing
│   └── pages.ts        # Page processing
├── public/              # Static assets
│   └── images/         # Image files
├── styles/              # CSS files
├── scripts/             # Deployment scripts
├── posts/               # Markdown blog posts
│   ├── 2022/
│   ├── 2023/
│   └── 2025/
├── draft/               # Draft posts
├── en/                  # English posts
├── about.md            # About page content
├── wx-account.md       # WeChat page content
└── package.json        # NPM dependencies
```

## Content Guidelines

### Post Format
- Posts follow Jekyll naming: `YYYY-MM-DD-title.md`
- Images stored in `/images/posts/YYYY/MM/DD/`
- Posts use front matter with title and date
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

### Key Projects Referenced
1. **DarkBili** - B站深色模式插件
2. **Chromadb-Admin** - Chromadb管理界面
3. **线性方法** (Linear Method) - Chinese version of the Linear Method

## Writing Style
Based on recent posts, the author:
- Provides practical, actionable advice
- Uses real-world examples and case studies
- Balances theory with implementation details
- Focuses on solving real problems teams face

## Important Notes
- The blog is actively maintained with regular updates
- Content spans from 2022 to present
- Both technical and management topics are covered equally
- Some posts reference the author's "30天产品开发挑战"