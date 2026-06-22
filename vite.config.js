import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Standard Vite + React setup. Base is './' so the production build
// can be hosted from any sub-path (GitHub Pages, Netlify, etc.).
export default defineConfig({
  plugins: [react()],
  base: './',
})
