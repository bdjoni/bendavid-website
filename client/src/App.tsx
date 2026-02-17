import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import { lazy, Suspense, useEffect } from "react";
import { useLocation } from "wouter";

// Lazy-load pages that are not the homepage (code splitting)
const About = lazy(() => import("./pages/About"));
const PracticeAreas = lazy(() => import("./pages/PracticeAreas"));
const Articles = lazy(() => import("./pages/Articles"));
const Contact = lazy(() => import("./pages/Contact"));
const ArticlePage = lazy(() => import("./pages/ArticlePage"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));

/** Scroll to top on route change */
function ScrollToTop() {
  const [location] = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return null;
}

function Router() {
  return (
    <>
      <ScrollToTop />
      <main id="main-content">
        <Suspense fallback={<div className="min-h-screen bg-[#0a1a30]" />}>
          <Switch>
            <Route path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/practice-areas" component={PracticeAreas} />
            <Route path="/articles" component={Articles} />
            <Route path="/articles/:slug" component={ArticlePage} />
            <Route path="/contact" component={Contact} />
            <Route path="/privacy-policy" component={PrivacyPolicy} />
            <Route path="/404" component={NotFound} />
            <Route component={NotFound} />
          </Switch>
        </Suspense>
      </main>
    </>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
