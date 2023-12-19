import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': '/src',
      '@shadcn': '/path/to/shadcn',
      '@lib': '/path/to/lib',
    },
  },
})
