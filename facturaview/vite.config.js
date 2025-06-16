import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,           // <- esto permite acceso desde fuera del contenedor
    port: 5173,
    strictPort: true
  }
})
