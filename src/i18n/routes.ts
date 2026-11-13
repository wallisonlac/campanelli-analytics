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
// Booking page for the 30-minute discovery call. Change it here and every
// "Book a call" button on the site follows. (Google Calendar booking page:
// paste its public calendar.app.google/... link here.)
export const BOOKING = "https://calendly.com/wallisoncampanelli-eng/30min";
/** @deprecated use BOOKING */
export const CALENDLY = BOOKING;

// Company WhatsApp (Brazil). Digits only for wa.me, display format for text.
export const WHATSAPP_NUMBER = "5535910208598";
export const WHATSAPP_DISPLAY = "+55 35 91020-8598";
export const WHATSAPP_TEL = `+${WHATSAPP_NUMBER}`;

const WHATSAPP_GREETING: Record<Lang, string> = {
  pt: "Olá! Vim pelo site da Campanelli Analytics e gostaria de conversar sobre um projeto de dados.",
  en: "Hi! I found Campanelli Analytics through your website and would like to talk about a data project.",
};

/** wa.me link with a pre-filled first message in the visitor's language. */
export function whatsappHref(lang: Lang): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_GREETING[lang])}`;
}
export const WHATSAPP = `https://wa.me/${WHATSAPP_NUMBER}`;

export const EMAIL = "contato@campanellianalytics.com";
export const LINKEDIN = "https://www.linkedin.com/in/wallison-campanelli-eng/";
export const GITHUB = "https://github.com/wallisonlac";
