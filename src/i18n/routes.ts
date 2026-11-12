// Central route map. Each page key has one URL per language,
// so the language switcher, hreflang tags and nav stay in sync.
export type Lang = "pt" | "en";

export const routes = {
  home:         { pt: "/pt/",               en: "/en/" },
  services:     { pt: "/pt/servicos/",      en: "/en/services/" },
  publicSector: { pt: "/pt/setor-publico/", en: "/en/public-sector/" },
  cases:        { pt: "/pt/cases/",         en: "/en/case-studies/" },
  about:        { pt: "/pt/sobre/",         en: "/en/about/" },
  contact:      { pt: "/pt/contato/",       en: "/en/contact/" },
  privacy:      { pt: "/pt/privacidade/",   en: "/en/privacy/" },
  terms:        { pt: "/pt/termos/",        en: "/en/terms/" },
  thanks:       { pt: "/pt/obrigado/",      en: "/en/thank-you/" },
} as const;

export type PageKey = keyof typeof routes;

export const navKeys: PageKey[] = ["services", "publicSector", "cases", "about", "contact"];

export const SITE = "https://campanellianalytics.com";
export const CALENDLY = "https://calendly.com/wallisoncampanelli-eng/30min";
export const WHATSAPP = "https://wa.me/351935678698";
export const EMAIL = "contato@campanellianalytics.com";
export const LINKEDIN = "https://www.linkedin.com/in/wallison-campanelli-eng/";
export const GITHUB = "https://github.com/wallisonlac";
