import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './', // Use relative path for maximum compatibility across Vercel/Netlify/GitHub Pages
  server: {
    fs: {
      // Allow serving logo images attached from the local app data context paths
      allow: ['..', '/mnt/c/Users/PTPL0267/.gemini/antigravity/brain/0d1cfbf4-ced5-4fbd-9081-4b6a25f2946c']
    }
  }
})
