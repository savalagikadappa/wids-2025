import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: process.env.PORT ? parseInt(process.env.PORT) : 5173,
    host: '0.0.0.0', // Important for external access
    allowedHosts: [
      'localhost',
      'wids-2025.onrender.com', // Your Render.com domain
      'wids.kletech.ac.in',      // Add the new hostname
      'x.x.x.x'                 // Add the new IP address
    ],
  },
})