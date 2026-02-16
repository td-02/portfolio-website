import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Configure base path for GitHub Pages.
// - default: /portfolio-website/ (project pages)
// - override with: BASE_PATH=/
const base = process.env.BASE_PATH || '/portfolio-website/';

export default defineConfig({
  plugins: [react()],
  base
});
