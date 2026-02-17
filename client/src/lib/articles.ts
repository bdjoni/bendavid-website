/**
 * Article loader — imports all .md files from content/articles/,
 * parses YAML frontmatter, and exposes helpers for listing & fetching.
 *
 * Design: Swiss-Israeli Legal Modernism
 * - Articles use Frank Ruhl Libre for headings, Heebo for body
 * - Cream background, dark text, gold accents
 */

// Vite glob import — returns raw text of every .md file
const articleModules = import.meta.glob(
  '/src/content/articles/*.md',
  { eager: true, query: '?raw', import: 'default' }
) as Record<string, string>;

export interface Article {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  featured: boolean;
  image: string;
  content: string; // raw markdown body (after frontmatter)
}

/**
 * Parse YAML-ish frontmatter from a markdown string.
 * Handles quoted and unquoted values, booleans, etc.
 */
function parseFrontmatter(raw: string): { meta: Record<string, string>; body: string } {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/);
  if (!match) return { meta: {}, body: raw };

  const meta: Record<string, string> = {};
  for (const line of match[1].split('\n')) {
    const idx = line.indexOf(':');
    if (idx === -1) continue;
    const key = line.slice(0, idx).trim();
    let val = line.slice(idx + 1).trim();
    // Strip surrounding quotes
    if ((val.startsWith('"') && val.endsWith('"')) || (val.startsWith("'") && val.endsWith("'"))) {
      val = val.slice(1, -1);
    }
    meta[key] = val;
  }

  return { meta, body: match[2] };
}

/**
 * Auto-generate excerpt from first meaningful paragraph if not in frontmatter.
 */
function autoExcerpt(body: string): string {
  const lines = body.split('\n');
  for (const line of lines) {
    const trimmed = line.trim();
    // Skip headings, empty lines, bold-only lines, images
    if (!trimmed || trimmed.startsWith('#') || trimmed.startsWith('!') || trimmed.startsWith('---')) continue;
    // Skip lines that are just bold labels like "**נדל״ן · השקעות | ...**"
    if (/^\*\*[^*]+\*\*$/.test(trimmed)) continue;
    // Clean markdown formatting
    const clean = trimmed.replace(/\*\*/g, '').replace(/\*/g, '').replace(/\[([^\]]+)\]\([^)]+\)/g, '$1');
    if (clean.length > 30) {
      return clean.length > 160 ? clean.slice(0, 157) + '...' : clean;
    }
  }
  return '';
}

// Parse all articles once at import time
const allArticles: Article[] = Object.entries(articleModules)
  .map(([, raw]) => {
    const { meta, body } = parseFrontmatter(raw);
    return {
      id: meta.id || '',
      slug: meta.slug || '',
      title: meta.title || '',
      excerpt: meta.excerpt || autoExcerpt(body),
      category: meta.category || '',
      date: meta.date || '',
      readTime: meta.readTime || meta.readtime || '5 דקות קריאה',
      featured: meta.featured === 'true',
      image: meta.image || '',
      content: body,
    };
  })
  // Sort by date descending (newest first)
  .sort((a, b) => b.date.localeCompare(a.date));

/** All articles sorted by date (newest first) */
export function getAllArticles(): Article[] {
  return allArticles;
}

/** Get a single article by slug */
export function getArticleBySlug(slug: string): Article | undefined {
  return allArticles.find((a) => a.slug === slug);
}

/** Get related articles (same category, excluding current) */
export function getRelatedArticles(slug: string, limit = 3): Article[] {
  const current = getArticleBySlug(slug);
  if (!current) return allArticles.slice(0, limit);
  return allArticles
    .filter((a) => a.slug !== slug && a.category === current.category)
    .slice(0, limit);
}

/** Get featured articles */
export function getFeaturedArticles(limit = 3): Article[] {
  const featured = allArticles.filter((a) => a.featured);
  if (featured.length >= limit) return featured.slice(0, limit);
  // Fill with latest non-featured if not enough
  const rest = allArticles.filter((a) => !a.featured);
  return [...featured, ...rest].slice(0, limit);
}

/** Get unique categories */
export function getCategories(): string[] {
  return Array.from(new Set(allArticles.map((a) => a.category).filter(Boolean)));
}
