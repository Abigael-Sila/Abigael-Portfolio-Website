// vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/Abigael-Portfolio-Website/', // Correct base path for your repo
  plugins: [react()],
  build: {
    outDir: 'docs', // <--- This tells Vite to put the build output here
  },
  server: {
    port: 5174,
    headers: {
      'Cross-Origin-Embedder-Policy': 'require-corp',
      'Cross-Origin-Opener-Policy': 'same-origin'
    }
  }
});