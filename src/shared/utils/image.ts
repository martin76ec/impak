import { SIZE_MAP } from "@src/shared/constants/defaults";
import { ImageSize, ResizePack } from "@src/shared/types";
import _path from "path";
import sharp, { Sharp } from "sharp";

const process = (sizes: ImageSize[], image: Sharp) => {
  const resized = sizes.map(async (size) => {
    const width = SIZE_MAP[size];
    const buffer = await image.resize({ width }).toBuffer();
    return { buffer, size };
  });

  return Promise.all(resized);
};

export async function resize(path: string, sizes: ImageSize[]) {
  const { name, ext } = _path.parse(path);
  const image = sharp(path);
  const metadata = await image.metadata();
  const width = metadata.width;

  if (!width) throw new Error("Could not get the image width");

  const fits = sizes.filter((s) => SIZE_MAP[s] <= width);
  const images = await process(fits, image);

  return { images, name, ext } as ResizePack;
}
