import { defineConfig } from 'astro/config';

// Campanelli Analytics — institutional site (GitHub Pages + custom domain)
export default defineConfig({
  site: 'https://campanellianalytics.com',
  trailingSlash: 'always',
  build: {
    format: 'directory',
  },
});
