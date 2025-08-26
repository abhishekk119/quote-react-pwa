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
        name: "My Todo App",
        short_name: "TodoApp",
        start_url: ".", // see Step 7 for GitHub Pages
        scope: ".", // see Step 7 for GitHub Pages
        display: "fullscreen", // removes browser UI/URL bar when installed
        background_color: "#000000",
        theme_color: "#000000",
        icons: [
          { src: "/pwa-192x192.png", sizes: "192x192", type: "image/png" },
          { src: "/pwa-512x512.png", sizes: "512x512", type: "image/png" },
        ],
      },
      workbox: {
        // sensible defaults: caches your build assets & basic navigation
      },
    }),
  ],
  base: "/quote-react-pwa/",
});
