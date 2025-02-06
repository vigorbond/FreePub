# FreePub

FreePub is a modern blog platform built with Astro that focuses on fostering meaningful dialogue and protecting freedom of expression in the digital age. The platform provides a clean, fast, and accessible space for sharing ideas and engaging in thoughtful discussions.

## 🚀 Features

- **Fast Performance**: Built with Astro for optimal loading speeds and minimal JavaScript
- **Blog System**: Full-featured blog with categories and tags
- **Content Collections**: Organized and type-safe content management
- **Responsive Design**: Mobile-friendly interface using Tailwind CSS
- **Markdown Support**: Write content in Markdown with frontmatter
- **Category System**: Organize posts by categories (opinion, news, analysis, discussion)
- **Tag Support**: Add multiple tags to posts for better organization
- **Typography**: Beautiful typography with Tailwind Typography plugin

## 🛠️ Tech Stack

- [Astro](https://astro.build) - Static Site Generator
- [Tailwind CSS](https://tailwindcss.com) - Styling
- [TypeScript](https://www.typescriptlang.org) - Type Safety
- [@tailwindcss/typography](https://tailwindcss.com/docs/typography-plugin) - Article Styling

## 📦 Project Structure

```
/
├── public/
│   └── favicon.svg
├── src/
│   ├── assets/
│   │   └── (static assets)
│   ├── components/
│   │   ├── Navigation.astro
│   │   └── Welcome.astro
│   ├── content/
│   │   ├── blog/
│   │   │   └── (blog posts)
│   │   └── config.ts
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       ├── about.astro
│       ├── blog/
│       │   ├── [...slug].astro
│       │   └── index.astro
│       └── index.astro
└── package.json
```

## 🚀 Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Open your browser and visit `http://localhost:4321`

## 📝 Creating Content

Blog posts are written in Markdown and stored in `src/content/blog/`. Each post requires frontmatter with the following fields:

```markdown
---
title: "Your Post Title"
description: "Brief description of your post"
pubDate: 2024-02-21
author: "Your Name"
category: "opinion" | "news" | "analysis" | "discussion"
tags: ["tag1", "tag2"]
---

Your content here...
```

## 🏗️ Building for Production

To create a production build:

```bash
npm run build
```

Preview the build:

```bash
npm run preview
```

## 📄 License

This project is licensed under the MIT License.