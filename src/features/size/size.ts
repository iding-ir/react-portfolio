export enum SIZES {
  SM = "SM",
  MD = "MD",
  LG = "LG",
}

export const DEFAULT_SIZE = SIZES.MD;
export const FALLBACK_SIZE = SIZES.MD;

export type Size = keyof typeof SIZES;
