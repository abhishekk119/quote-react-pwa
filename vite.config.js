import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  // If deploying to GitHub Pages, set base to '/<repo-name>/' (see Step 7)
  // base: '/your-repo-name/',

  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      injectRegister: "auto", // auto-injects the SW register script
      manifest: {
        name: "My Quote App",
        short_name: "Quotes",
        start_url: ".", // see Step 7 for GitHub Pages
        scope: ".", // see Step 7 for GitHub Pages
        display: "fullscreen", // removes browser UI/URL bar when installed
        background_color: "#000000",
        theme_color: "#000000",
        icons: [
          { src: "pen-tool.svg", sizes: "192x192", type: "image/svg+xml" },
        ],
      },
      workbox: {
        // sensible defaults: caches your build assets & basic navigation
      },
    }),
  ],
  base: "/quote-react-pwa/",
});
