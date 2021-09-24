import { defineConfig } from 'vite'
import solidPlugin from 'vite-plugin-solid'
import path from 'path'

export default defineConfig({
  plugins: [solidPlugin()],
  root: path.join(__dirname, 'src'),
  build: {
    target: 'esnext',
    polyfillDynamicImport: false,
    outDir: path.join(__dirname, 'dist'),
    rollupOptions: {
      input: path.resolve(__dirname, 'src', 'index.html')
    }
  }
})
