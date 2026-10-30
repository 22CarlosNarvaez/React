import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  base: '/React/',

  plugins: [
    react(),

    VitePWA({
      registerType: 'autoUpdate',

      workbox: {
        globPatterns: [
          '**/*.{js,jsx,css,html,ico,png,svg,jpg,jpeg,webp}'
        ]
      },

      includeAssets: [
        'icons/icon-192.png',
        'icons/icon-512.png',
        'icons/icon-maskable-512.png',
        'icons/logo.png',
        'descarga.png',
        'descargab.png',
        'PWA.png'
      ],

      manifest: {
        name: 'Lumora',
        short_name: 'Lumora',
        description: 'La PWA más fantástica del mundo',

        scope: '/React/',
        start_url: '/React/',

        display: 'standalone',

        theme_color: '#000000',
        background_color: '#ffffff',

        icons: [
          {
            src: '/React/icons/icon-192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: '/React/icons/icon-512.png',
            sizes: '512x512',
            type: 'image/png'
          },
          {
            src: '/React/icons/icon-maskable-512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'maskable'
          }
        ],

        screenshots: [
          {
            src: '/React/PWA.png',
            sizes: '1280x640',
            type: 'image/png',
            form_factor: 'wide'
          }
        ]
      }
    })
  ]
})