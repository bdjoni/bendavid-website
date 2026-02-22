#!/usr/bin/env node
/**
 * Pre-render Script
 * =================
 * Generates static HTML files for every route so Google can read the
 * content without executing JavaScript.
 *
 * How it works:
 * 1. Loads the SSR bundle (built by `vite build --ssr`)
 * 2. Reads the client-built index.html as a template
 * 3. For each route: renders React to HTML, extracts Helmet meta tags,
 *    injects both into the template, and writes the output file.
 *
 * Run: node scripts/prerender.mjs
 * (automatically called after `vite build --ssr` in the build pipeline)
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');

// ── 1. Load the SSR bundle ──────────────────────────────────────────
const { render } = await import(path.resolve(root, 'dist/server/entry-server.js'));

// ── 2. Read the client-built index.html as template ─────────────────
const templatePath = path.resolve(root, 'dist/public/index.html');
const template = fs.readFileSync(templatePath, 'utf-8');

// ── 3. Define all routes to pre-render ──────────────────────────────
// Static routes
const staticRoutes = [
  '/',
  '/about',
  '/practice-areas',
  '/articles',
  '/contact',
  '/privacy-policy',
];

// Dynamic article routes — extracted from the SSR bundle
// We import articles.ts which is bundled inside the SSR build
let articleRoutes = [];
try {
  const { getAllArticles } = await import(path.resolve(root, 'dist/server/entry-server.js'));
  if (getAllArticles) {
    articleRoutes = getAllArticles().map(a => `/articles/${a.slug}`);
  }
} catch {
  // getAllArticles may not be exported — fall back to known slugs from sitemap
  articleRoutes = [
    '/articles/mistakes-first-contract',
    '/articles/georgia-legal-guide',
    '/articles/capital-gains-tax-2026',
    '/articles/due-diligence-checklist',
    '/articles/tama-38-vs-pinui-binui',
    '/articles/how-to-choose-real-estate-lawyer',
  ];
}

const allRoutes = [...staticRoutes, ...articleRoutes];

// ── 4. Pre-render each route ────────────────────────────────────────
console.log(`\n🔨 Pre-rendering ${allRoutes.length} pages...\n`);

for (const url of allRoutes) {
  try {
    const { html: appHtml, helmet } = render(url);

    // Build the per-page <head> tags from Helmet
    const headTags = [
      helmet.title?.toString() || '',
      helmet.meta?.toString() || '',
      helmet.link?.toString() || '',
      helmet.script?.toString() || '',
    ].filter(Boolean).join('\n    ');

    // Replace the SEO markers with per-page tags
    let page = template.replace(
      /<!-- SEO:DYNAMIC:START[^>]*-->[\s\S]*?<!-- SEO:DYNAMIC:END -->/,
      `<!-- SEO:DYNAMIC:START -->\n    ${headTags}\n    <!-- SEO:DYNAMIC:END -->`
    );

    // Inject the pre-rendered HTML into the root div
    page = page.replace('<!--SSR-OUTLET-->', appHtml);

    // Determine output path: "/" → "index.html", "/about" → "about/index.html"
    const outDir = path.resolve(root, 'dist/public');
    const filePath = url === '/'
      ? path.join(outDir, 'index.html')
      : path.join(outDir, url.slice(1), 'index.html');

    // Create directory if needed
    fs.mkdirSync(path.dirname(filePath), { recursive: true });
    fs.writeFileSync(filePath, page, 'utf-8');

    console.log(`  ✅ ${url} → ${path.relative(root, filePath)}`);
  } catch (err) {
    console.error(`  ❌ ${url} — ${err.message}`);
  }
}

console.log(`\n✨ Pre-rendering complete!\n`);
