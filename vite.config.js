import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',  // Allow access from any IP address
    // host: '192.168.1.98',  
    port: 5173 
  } ,
  base: '/',
})
