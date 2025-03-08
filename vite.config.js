import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import 'dotenv/config'
// https://vite.dev/config/
console.log(process.env)
export default defineConfig({
  plugins: [react()],
  server: {
    port: process.env.VITE_PORT
  }
})
