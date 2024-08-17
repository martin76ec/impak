import { DEFAULT_SIZES_CMD, DEFAULT_SIZES_ZOD } from "@src/shared/constants/defaults";
import { dirExists, getImageFiles } from "@src/shared/utils/files";
import path from "path";
import { z } from "zod";

export const argsSchema = z
  .object({
    inputdir: z
      .string()
      .min(1)
      .refine(dirExists, {
        message: "Input directory does not exist.",
      })
      .transform(getImageFiles)
      .refine((files) => files.length > 0, {
        message: "Input directory does not contain valid image files (png, jpg, jpeg, svg, webp).",
      }),
    outputdir: z
      .string()
      .refine(dirExists, {
        message: "Output directory does not exist.",
      })
      .transform((outputDir) => path.resolve(outputDir)),
    sizes: z
      .string()
      .optional()
      .default(DEFAULT_SIZES_CMD)
      .transform((s) => s.toLowerCase().split(","))
      .pipe(z.array(z.enum(DEFAULT_SIZES_ZOD))),
  })
  .transform((o) => ({
    files: o.inputdir,
    outputdir: o.outputdir,
    sizes: o.sizes,
  }));
