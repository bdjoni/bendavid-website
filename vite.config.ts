import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import path from "node:path";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "client", "src"),
      "@shared": path.resolve(import.meta.dirname, "shared"),
    },
  },
  root: path.resolve(import.meta.dirname, "client"),
  build: {
    outDir: path.resolve(import.meta.dirname, "dist/public"),
    emptyOutDir: true,
    rollupOptions: {
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
  server: {
    port: 3000,
    strictPort: false,
    host: true,
  },
});
