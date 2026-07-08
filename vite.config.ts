import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
// On GitHub Pages the app is served from /cissp-mastery-platform/, so the
// production build needs that base path. Local dev stays at root.
export default defineConfig(({ command }) => ({
  base: command === 'build' ? '/cissp-mastery-platform/' : '/',
  plugins: [react()],
  server: {
    port: 5175,
  },
}))
