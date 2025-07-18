import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/Abigael-Portfolio-Website/',
  plugins: [react()],
  server: {
    port: 5174, // Use 5174 to avoid conflicts
    headers: {
      'Cross-Origin-Embedder-Policy': 'require-corp',
      'Cross-Origin-Opener-Policy': 'same-origin'
    }
  }
});