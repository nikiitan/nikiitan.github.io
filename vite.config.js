import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  // User site: https://nikiitan.github.io — root path, not /repo-name/
  base: '/',
  build: {
    outDir: 'docs',
    emptyOutDir: true,
  },
})
