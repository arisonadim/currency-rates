import { defineConfig } from 'vitest/config';
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  test: {
    environment: "jsdom",
  },
  base: process.env.NODE_ENV === 'production' ? '/currency-rates/' : '/',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      Styles: path.resolve(__dirname, 'src/assets/styles'),
      Images: path.resolve(__dirname, 'src/assets/images'),
      Fonts: path.resolve(__dirname, 'src/assets/fonts'),
      Components: path.resolve(__dirname, 'src/components'),
      UI: path.resolve(__dirname, 'src/shared'),
      Entities: path.resolve(__dirname, 'src/entities'),
      Features: path.resolve(__dirname, 'src/features'),
      Widgets: path.resolve(__dirname, 'src/widgets'),
      Pages: path.resolve(__dirname, 'src/pages'),
      App: path.resolve(__dirname, 'src/app'),
    },
  },
})
