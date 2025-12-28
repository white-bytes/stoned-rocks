import { LocalsConfigSchema } from "./schemas";

export const locals = LocalsConfigSchema.parse({
  root: {
    label: "English",
    lang: "en",
  },
});
