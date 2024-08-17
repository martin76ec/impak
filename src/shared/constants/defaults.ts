import { ImageSize } from "@src/shared/types";

export const DEFAULT_SIZES: ImageSize[] = ["xxs", "xs", "sm", "md", "lg", "xl", "2xl"];
export const DEFAULT_SIZES_ZOD = DEFAULT_SIZES as unknown as Readonly<[string, ...string[]]>;
export const DEFAULT_SIZES_CMD = DEFAULT_SIZES.join(",");
export const SIZE_MAP: Record<ImageSize, number> = {
  xxs: 80,
  xs: 160,
  sm: 320,
  md: 640,
  lg: 1024,
  xl: 1280,
  "2xl": 1536,
}; // This is a default constant because, in the future, there will be an option to pass custom sizemap
