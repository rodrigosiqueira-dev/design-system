import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import { resolve } from "node:path";

export default defineConfig({
  plugins: [tailwindcss()],

  server: {
    port: 5173,
    open: true,
  },

  resolve: {
    alias: {
      "@": "/",
    },
  },

  css: {
    devSourcemap: true,
  },

  build: {
    outDir: "dist",
    emptyOutDir: true,
    minify: "esbuild",

    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        foundations: resolve(__dirname, "docs/foundations.html"),
        themes: resolve(__dirname, "docs/themes.html"),
      },
    },
  },
});
