import { ResizePack } from "@src/shared/types";
import fs from "fs";
import path from "path";

export function dirExists(dir: string) {
  return fs.existsSync(dir) && fs.lstatSync(dir).isDirectory();
}

export function writeImageFiles(pack: ResizePack, outputdir: string) {
  return pack.images.map((image) => {
    const _path = path.join(outputdir, `${image.size}/${pack.name}${pack.ext}`);
    const sizeDir = path.join(outputdir, image.size);
    if (!fs.existsSync(sizeDir)) fs.mkdirSync(sizeDir, { recursive: true });

    return fs.writeFileSync(_path, image.buffer);
  });
}

export function getImageFiles(dir: string) {
  const allowedExtensions = [".png", ".jpg", ".jpeg", ".svg", ".webp"];
  const files = fs
    .readdirSync(dir)
    .filter((file) => allowedExtensions.includes(path.extname(file).toLowerCase()))
    .map((file) => path.resolve(dir, file));
  return files;
}
