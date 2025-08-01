import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/Abigael-Portfolio-Website/', // Match your GitHub Pages subdirectory
  build: {
    outDir: 'dist', // Default, but explicit for clarity
    assetsDir: 'assets', // Default, but ensure it aligns with your project
  },
  server: {
    open: true, // Opens browser on `vite` start for local testing
  },
});