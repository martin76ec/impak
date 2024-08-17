export type ImageSize = "xxs" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl";

export interface ResizePack {
  images: {
    buffer: Buffer;
    size: ImageSize;
  }[];
  name: string;
  ext: string;
}

export interface ImpakData {
  files: string[];
  outputdir: string;
  sizes: ImageSize[];
}
