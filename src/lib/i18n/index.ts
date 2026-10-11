import { en, TranslationType } from "./en";
export type { TranslationType };
import { pt } from "./pt";
import { fr } from "./fr";
import { es } from "./es";
import { SupportedLanguage } from "../types";

export const translations: Record<SupportedLanguage, TranslationType> = {
  en,
  pt,
  fr,
  es,
};

export const languageNames: Record<SupportedLanguage, { label: string; flag: string }> = {
  en: { label: "English", flag: "🇬🇧" },
  pt: { label: "Português", flag: "🇧🇷" },
  fr: { label: "Français", flag: "🇫🇷" },
  es: { label: "Español", flag: "🇪🇸" },
};

export const getTranslation = (lang: SupportedLanguage): TranslationType => {
  return translations[lang] || translations.en;
};
