import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import { VitePWA } from 'vite-plugin-pwa';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'WeLive',
        short_name: 'WL',
        description: 'A description of your app',
        theme_color: '#ffffff',
        background_color: '#ffffff',
        icons: [
          {
            src: '/icons/icon_192.webp',
            sizes: '192x192',
            type: 'image/webp'
          },
          {
            src: 'icons/icon_512.webp',
            sizes: '512x512',
            type: 'image/webp'
          }
        ],
        start_url: '/',
        id:'/',
        display: 'standalone',
        orientation: 'portrait',
        scope: '/',
        prefer_related_applications: false,
        screenshots: [
          {
            "src": "/assets/screenshots/screenshot_1.webp",
            "sizes": "1125x2436",
            "type": "image/webp",
            "label": "Main view"
          },
          {
            "src": "/assets/screenshots/screenshot_2.webp",
            "sizes": "1920x1080",
            "type": "image/webp",
            "label": "Detailed view"
          }
        ]
      },
      workbox: {
        runtimeCaching: [
          {
            urlPattern: /^https:\/\/api\.example\.com\/.*$/,
            handler: 'NetworkFirst',
            options: {
              cacheName: 'api-cache',
            },
          },
        ],
      }
    }),
  ],
  resolve: {
    alias: {
      '@': '/src',
      "assets": "/assets"
    }
  }
})
