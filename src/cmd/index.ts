import { DEFAULT_SIZES_CMD } from "@src/shared/constants/defaults";
import { program } from "commander";

export const cmd = program
  .argument("<inputdir>", "directory with the images")
  .argument("[outputdir]", "directory where the generated images will be")
  .option(
    "-s, --sizes <sizes>",
    `list of sizes separated by comma, available sizes are: sm, xs, md, lg, xl and 2xl, default(${DEFAULT_SIZES_CMD})`,
    DEFAULT_SIZES_CMD,
  );
