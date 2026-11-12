import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

// Campanelli Analytics — institutional site (GitHub Pages + custom domain)
export default defineConfig({
  site: "https://campanellianalytics.com",
  trailingSlash: "always",
  build: { format: "directory" },
  // Old URLs kept alive so existing links don't break.
  redirects: {
    "/pt/parcerias/": "/pt/servicos/#partners",
    "/pt/entrega-internacional/": "/pt/servicos/",
    "/pt/capacidades/": "/pt/cases/",
    "/en/partnerships/": "/en/services/#partners",
    "/en/global-delivery/": "/en/services/",
    "/en/selected-work/": "/en/case-studies/",
  },
  integrations: [
    sitemap({
      filter: (page) =>
        page !== "https://campanellianalytics.com/" &&
        !/\/(obrigado|thank-you|parcerias|entrega-internacional|capacidades|partnerships|global-delivery|selected-work)\/$/.test(page),
      i18n: { defaultLocale: "en", locales: { en: "en", pt: "pt-BR" } },
    }),
  ],
});
