import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    assetsDir: 'assets',
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          const info = assetInfo.name.split('.')
          const ext = info[info.length - 1]
          if (/\.(png|jpe?g|gif|svg|webp|ico)$/i.test(assetInfo.name)) {
            return `images/[name]-[hash][extname]`
          }
          return `${ext}/[name]-[hash][extname]`
        }
      }
    }
  },
  publicDir: 'public',
  server: {
    fs: {
      allow: ['..']
    }
  }
})
