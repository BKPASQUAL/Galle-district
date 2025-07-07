import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // Separate Mapbox into its own chunk
          'mapbox-gl': ['mapbox-gl'],
          // Separate React into its own chunk
          'react-vendor': ['react', 'react-dom'],
          // Separate other vendor libraries
          'vendor': ['react-router-dom'] // Add other large dependencies here
        }
      }
    },
    // Increase chunk size warning limit to 1000kb
    chunkSizeWarningLimit: 1000
  },
  server: {
    port: 3000
  }
})