// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // If needed, add any path aliases here
    },
  },
  optimizeDeps: {
    include: ['react-ace'],
    exclude: ['ace-builds']
  },
  build: {
    rollupOptions: {
      // External packages that should not be bundled
      external: [],
    },
  },
});