import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,           // <- esto permite acceso desde fuera del contenedor
    port: 5173,
    strictPort: true,
    allowedHosts: [
      'localhost',
      '127.0.0.1',
      'test-catalogue-app.ganantech.com',
      '154.38.176.218'
    ],
    cors: true
  }
})
