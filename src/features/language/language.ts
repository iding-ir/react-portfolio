export enum LANGUAGES {
  EN = "en",
  NL = "nl",
}

export const DEFAULT_LANGUAGE = LANGUAGES.EN;
export const FALLBACK_LANGUAGE = LANGUAGES.EN;

export type Language = keyof typeof LANGUAGES;
