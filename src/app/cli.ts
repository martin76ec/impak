#!/usr/bin/env node

import { cmd } from "@src/cmd";
import { argsSchema } from "@src/shared/schemas/args-schema";
import { ImageSize } from "@src/shared/types";
import { processData } from "@src/shared/utils/processor";

export async function cli() {
  cmd.parse(process.argv);
  const [inputdir, outputdir] = cmd.args;
  const opts = cmd.opts();
  const body = { inputdir, outputdir, ...opts };
  const validator = argsSchema.safeParse(body);

  if (!validator.success) throw Error(validator.error.message);

  const data = {
    ...validator.data,
    sizes: validator.data.sizes as unknown as ImageSize[],
  };
  console.info(data);

  await processData(data);
}

cli()
  .then()
  .catch((e) => console.error(e));
