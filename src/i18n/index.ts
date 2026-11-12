import pt from "./pt.json";
import en from "./en.json";
import { routes, type Lang, type PageKey } from "./routes";

export const content = { pt, en } as const;
export type Content = typeof pt;

export function t(lang: Lang): Content {
  return (lang === "pt" ? pt : en) as Content;
}

export function href(page: PageKey, lang: Lang): string {
  return routes[page][lang];
}

export function otherLang(lang: Lang): Lang {
  return lang === "pt" ? "en" : "pt";
}

export * from "./routes";
