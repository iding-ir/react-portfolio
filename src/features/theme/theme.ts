export enum THEMES {
  LIGHT = "light",
  DARK = "dark",
}

export const DEFAULT_THEME = THEMES.LIGHT;
export const FALLBACK_THEME = THEMES.LIGHT;

export type Theme = keyof typeof THEMES;
