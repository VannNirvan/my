import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  // Relative base so assets work on custom domain AND GitHub Pages project path (/my/)
  base: './',
  plugins: [
    react(),
    tailwindcss(),
  ],
  build: {
    target: 'es2020',
    cssCodeSplit: true,
    sourcemap: false,
    chunkSizeWarningLimit: 600,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('framer-motion')) return 'vendor-motion'
            if (id.includes('animejs')) return 'vendor-anime'
            if (id.includes('react-dom') || id.includes('/react/')) return 'vendor-react'
          }
        },
      },
    },
  },
})
