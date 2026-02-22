import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import path from "node:path";
import { defineConfig } from "vite";

export default defineConfig(({ isSsrBuild }) => ({
  plugins: [
    react(),
    // Tailwind only needed for client build (SSR only generates HTML, no CSS)
    ...(!isSsrBuild ? [tailwindcss()] : []),
  ],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "client", "src"),
      "@shared": path.resolve(import.meta.dirname, "shared"),
      // In SSR: replace framer-motion with lightweight mock (no window/DOM access)
      ...(isSsrBuild
        ? { "framer-motion": path.resolve(import.meta.dirname, "client", "src", "lib", "motion-ssr.tsx") }
        : {}),
    },
  },
  root: path.resolve(import.meta.dirname, "client"),
  build: {
    outDir: isSsrBuild
      ? path.resolve(import.meta.dirname, "dist/server")
      : path.resolve(import.meta.dirname, "dist/public"),
    emptyOutDir: !isSsrBuild, // Only clean dist/public, not dist/server
    rollupOptions: isSsrBuild
      ? {} // No chunk splitting for SSR — it's a single Node.js bundle
      : {
          output: {
            manualChunks: {
              // Split React core into separate cached chunk
              'vendor-react': ['react', 'react-dom'],
              // Split Framer Motion (large animation library)
              'vendor-motion': ['framer-motion'],
              // Split markdown rendering (only needed on article pages)
              'vendor-markdown': ['react-markdown', 'remark-gfm', 'rehype-raw'],
            },
          },
        },
  },
  // Bundle CJS packages into SSR output (Node.js ESM can't do named imports from CJS)
  ssr: {
    noExternal: isSsrBuild
      ? ['react-helmet-async', 'react-markdown', 'remark-gfm', 'rehype-raw', 'rehype-slug', 'wouter']
      : [],
  },
  server: {
    port: 3000,
    strictPort: false,
    host: true,
  },
}));
