import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src")
    }
  },
  // host true required to serve over network but since "serve" is serving in the container instead of vite, following code is unnecessary
  preview: {
    host: true,
    port: 3000
  },
  server: {
    port: 3000
  }
})
