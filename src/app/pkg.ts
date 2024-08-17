import { argsSchema } from "@src/shared/schemas/args-schema";
import { ImageSize } from "@src/shared/types";
import { processData } from "@src/shared/utils/processor";

export async function impak(inputdir: string, outputdir: string, sizes?: string) {
  const validator = argsSchema.safeParse({ inputdir, outputdir, sizes });
  if (!validator.success) throw Error(validator.error.message);

  const data = {
    ...validator.data,
    sizes: validator.data.sizes as unknown as ImageSize[],
  };

  await processData(data);
}
