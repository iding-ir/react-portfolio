export enum THEMES {
  LIGHT = "LIGHT",
  DARK = "DARK",
}

export const DEFAULT_THEME = THEMES.LIGHT;
export const FALLBACK_THEME = THEMES.LIGHT;

export type Theme = keyof typeof THEMES;
