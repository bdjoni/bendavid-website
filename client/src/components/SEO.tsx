/**
 * SEO Component — Per-page <head> management
 * Uses react-helmet-async to set unique title, description,
 * canonical URL, Open Graph tags, and BreadcrumbList JSON-LD for each page.
 */

import { Helmet } from 'react-helmet-async';

interface BreadcrumbItem {
  name: string;
  path: string;
}

interface SEOProps {
  title: string;
  description: string;
  /** Path without domain, e.g. "/about" or "/" */
  path: string;
  /** Optional OG image URL */
  image?: string;
  /** Additional JSON-LD structured data */
  jsonLd?: Record<string, unknown>;
  /** Breadcrumb trail (auto-generates BreadcrumbList JSON-LD) */
  breadcrumbs?: BreadcrumbItem[];
}

const SITE_NAME = 'עו״ד יונתן בן דוד';
const BASE_URL = 'https://www.bdyonatan.co.il';
const DEFAULT_IMAGE = 'https://files.manuscdn.com/user_upload_by_module/session_file/99481019/HFdlNVQTAFgMvovG.jpg';

export default function SEO({ title, description, path, image, jsonLd, breadcrumbs }: SEOProps) {
  const fullTitle = path === '/' ? title : `${title} | ${SITE_NAME}`;
  const canonicalUrl = `${BASE_URL}${path === '/' ? '/' : path}`;
  const ogImage = image || DEFAULT_IMAGE;

  // Auto-generate BreadcrumbList JSON-LD
  const breadcrumbJsonLd = breadcrumbs && breadcrumbs.length > 0
    ? {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: breadcrumbs.map((item, i) => ({
          '@type': 'ListItem',
          position: i + 1,
          name: item.name,
          item: `${BASE_URL}${item.path}`,
        })),
      }
    : null;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={ogImage} />

      {/* Twitter */}
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* JSON-LD: Custom structured data */}
      {jsonLd && (
        <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>
      )}

      {/* JSON-LD: BreadcrumbList */}
      {breadcrumbJsonLd && (
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbJsonLd)}
        </script>
      )}
    </Helmet>
  );
}
