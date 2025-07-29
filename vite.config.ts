// vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ command }) => {
  return {
    plugins: [react()],
    // This 'base' option tells Vite where your assets will be served from.
    // For GitHub Pages at https://username.github.io/repo-name/, it's '/repo-name/'.
    // For local development, it should be '/'.
    base: command === 'build' ? '/Abigael-Portfolio-Website/' : '/',
  };
});