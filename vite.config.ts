// vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ command }) => {
  return {
    plugins: [react()],
    // This makes your local dev server work correctly
    base: command === 'build' ? '/Abigael-Portfolio-Website/' : '/',
  };
});