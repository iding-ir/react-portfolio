export enum THEMES {
  LIGHT = "light",
  DARK = "dark",
}

export const DEFAULT_THEME = THEMES.DARK;
export const FALLBACK_THEME = THEMES.DARK;

export type Theme = keyof typeof THEMES;
