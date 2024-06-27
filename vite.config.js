import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/Digital_Business_Card_Generator/',
  plugins: [react()],
})
