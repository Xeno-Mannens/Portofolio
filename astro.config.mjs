import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://Xeno-Mannens.github.io',
  base: '/Portofolio',
  vite: {
    plugins: [tailwindcss()],
  },
});
