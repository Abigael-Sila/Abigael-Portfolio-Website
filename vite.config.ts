// vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ command }) => {
  return {
    plugins: [react()],
    // This is the key change: conditionally set the base URL
    // For 'build' (production), use the repository name
    // For local dev, use the root path
    base: command === 'build' ? '/Abigael-Portfolio-Website/' : '/',
  };
});