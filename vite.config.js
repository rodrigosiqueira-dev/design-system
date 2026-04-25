import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import { resolve } from "node:path";

export default defineConfig({
  // Para builds servidos em subpastas, Apache, file:// ou qualquer cenario
  // em que o projeto nao fique exatamente na raiz do host, use "./".
  // Isso faz o Vite gerar links relativos para JS, CSS e outros assets.
  // Importante: isso corrige os caminhos, mas nao remove bloqueios de CORS
  // do navegador ao abrir o dist/index.html direto em file://.
  // Como o Vite gera bundles ES modules, o teste mais confiavel continua sendo
  // servir a pasta dist por HTTP, mesmo que localmente via Apache ou vite preview.
  base: "./",

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
    // O "base" acima e o principal ajuste para evitar caminhos absolutos no build.
    // Ao criar novos projetos Vite, confira esse campo primeiro se os assets
    // estiverem sendo procurados em "/assets/..." em vez de "./assets/...".
    // Se abrir o HTML direto no navegador e aparecer erro de CORS/origin "null",
    // o problema ja nao e mais caminho absoluto: e a politica do proprio browser
    // para arquivos locais. Nesse caso, teste a pasta dist por um servidor HTTP.
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
