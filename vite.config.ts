// Example vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ command }) => {
  return {
    plugins: [react()],
    base: command === 'build' ? '/Abigael-Portfolio-Website/' : '/', // This matches your basename logic
  };
});