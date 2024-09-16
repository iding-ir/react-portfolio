export enum LANGUAGES {
  EN = "EN",
  NL = "NL",
}

export const DEFAULT_LANGUAGE = LANGUAGES.EN;
export const FALLBACK_LANGUAGE = LANGUAGES.EN;

export type Language = keyof typeof LANGUAGES;
