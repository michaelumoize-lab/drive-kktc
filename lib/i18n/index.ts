// lib/i18n/index.ts
import { Dictionary, Locale } from "./types";
import { tr } from "./tr";
import { en } from "./en";

export type { Locale, Dictionary };

export const locales: Locale[] = ["tr", "en"];
export const defaultLocale: Locale = "tr";

const dictionaries: Record<Locale, Dictionary> = {
  tr,
  en,
};

export function isValidLocale(locale: string): locale is Locale {
  return locales.includes(locale as Locale);
}

export function getDictionary(locale: string): Dictionary {
  if (isValidLocale(locale)) {
    return dictionaries[locale];
  }
  return dictionaries[defaultLocale];
}

/**
 * Prefix an internal path with the chosen locale, e.g. /routes -> /tr/routes
 */
export function getLocalizedPath(path: string, locale: Locale): string {
  // Strip leading slash for clean splitting
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  
  // If path already starts with /tr or /en, replace it
  const match = cleanPath.match(/^\/(tr|en)(\/.*)?$/);
  if (match) {
    const rest = match[2] || "";
    return `/${locale}${rest}`;
  }

  // Handle root
  if (cleanPath === "/") {
    return `/${locale}`;
  }

  return `/${locale}${cleanPath}`;
}
