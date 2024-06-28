import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from "vite-plugin-pwa";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      includeAssets: ["favicon.ico", "video-favicon.png"],
      manifest: {
        name: "Gym Data App",
        short_name: "Gym Data",
        description: "Gym Data App with firebase",
        theme_color: "#ffffff",
        screenshots: [
          {
           "src": "public/images/gym-data-desktop.png",
            "sizes": "3248x2352",
            "type": "image/png",
            "form_factor": "wide",
            "label": "Video Recorder"
          },
          {
           "src": "public/images/gym-data-mobile.png",
            "sizes": "1170x2532",
            "type": "image/png",
            "form_factor": "narrow",
            "label": "Video Recorder"
          },
      ],
        icons: [
          {
            "src": "pwa-64x64.png",
            "sizes": "64x64",
            "type": "image/png"
          },
          {
            "src": "pwa-192x192.png",
            "sizes": "192x192",
            "type": "image/png"
          },
          {
            "src": "pwa-512x512.png",
            "sizes": "512x512",
            "type": "image/png"
          },
          {
            "src": "maskable-icon-512x512.png",
            "sizes": "512x512",
            "type": "image/png",
            "purpose": "maskable"
          }
        ],
      },
    }),
  ],
});