import { ImpakData } from "@src/shared/types";
import { writeImageFiles } from "./files";
import { resize } from "./image";

export async function processData(data: ImpakData) {
  const { files, sizes, outputdir } = data;
  const _resized = files.map((path) => resize(path, sizes));
  const resized = await Promise.all(_resized);
  resized.map((pack) => writeImageFiles(pack, outputdir));
}
