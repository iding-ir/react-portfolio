export enum SIZES {
  SM = "sm",
  MD = "md",
  LG = "lg",
}

export const DEFAULT_SIZE = SIZES.MD;
export const FALLBACK_SIZE = SIZES.MD;

export type Size = keyof typeof SIZES;
