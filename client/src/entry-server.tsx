/**
 * SSR Entry Point — renders the app to static HTML on the server.
 *
 * Unlike main.tsx (which runs in the browser), this runs during the build
 * to generate pre-rendered HTML files for each route. Key differences:
 * - All pages imported directly (no lazy loading)
 * - wouter's ssrPath tells the router which URL to render
 * - HelmetProvider extracts <head> tags (title, meta, etc.)
 * - No CookieBanner, Toaster, or browser-only components
 */

import { renderToString } from 'react-dom/server';
import { HelmetProvider, type HelmetServerState } from 'react-helmet-async';
import { Route, Router, Switch } from 'wouter';

import { ThemeProvider } from './contexts/ThemeContext';

// Import all pages directly — no lazy() in SSR
import Home from './pages/Home';
import About from './pages/About';
import PracticeAreas from './pages/PracticeAreas';
import Articles from './pages/Articles';
import ArticlePage from './pages/ArticlePage';
import Contact from './pages/Contact';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfUse from './pages/TermsOfUse';
import AccessibilityStatement from './pages/AccessibilityStatement';
import NotFound from './pages/NotFound';

// Re-export for pre-render script to get article slugs dynamically
export { getAllArticles } from './lib/articles';

function SSRRouter() {
  return (
    <main id="main-content">
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/practice-areas" component={PracticeAreas} />
        <Route path="/articles" component={Articles} />
        <Route path="/articles/:slug" component={ArticlePage} />
        <Route path="/contact" component={Contact} />
        <Route path="/privacy-policy" component={PrivacyPolicy} />
        <Route path="/terms-of-use" component={TermsOfUse} />
        <Route path="/accessibility" component={AccessibilityStatement} />
        <Route path="/404" component={NotFound} />
        <Route component={NotFound} />
      </Switch>
    </main>
  );
}

/**
 * Render a single URL to static HTML + extracted head tags.
 * Called once per route by the pre-render script.
 */
export function render(url: string) {
  // Helmet context — collects all <Helmet> output from child components
  const helmetContext: { helmet?: HelmetServerState } = {};

  const html = renderToString(
    <HelmetProvider context={helmetContext}>
      <Router ssrPath={url}>
        <ThemeProvider defaultTheme="light">
          <SSRRouter />
        </ThemeProvider>
      </Router>
    </HelmetProvider>
  );

  return { html, helmet: helmetContext.helmet! };
}
