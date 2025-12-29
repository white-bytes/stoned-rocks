import { defineCollection, z } from "astro:content";
import { docsLoader, i18nLoader } from "@astrojs/starlight/loaders";
import { docsSchema, i18nSchema } from "@astrojs/starlight/schema";
import { glob } from "astro/loaders";
import { supabase } from "./lib/supabase";

const supabaseLoader = (tableName: string) => ({
  name: "supabase-loader",
  load: async ({ store, logger }: { store: any; logger: any }) => {
    logger.info(`Loading ${tableName} from Supabase`);
    const { data, error } = await supabase.from(tableName).select("*");
    
    if (error) {
      logger.error(`Supabase error: ${error.message}`);
      return;
    }
    
    if (!data) return;

    for (const row of data) {
      store.set({
        id: row.id.toString(),
        data: row,
      });
    }
  },
});


const ctaSection = defineCollection({
  loader: glob({
    pattern: "**/*.{md,mdx}",
    base: "src/content/sections",
  }),
  schema: z.object({
    title: z.string().optional(),
    description: z.string().optional(),
    enable: z.boolean().optional(),
    fill_button: z.object({
      label: z.string().optional(),
      link: z.string().optional(),
      enable: z.boolean().optional(),
    }),
    outline_button: z.object({
      label: z.string().optional(),
      link: z.string().optional(),
      enable: z.boolean().optional(),
    }),
  }),
});

export const collections = {
  docs: defineCollection({
    loader: docsLoader(),
    schema: docsSchema({
      extend: z.object({
        tags: z.array(z.string()).optional(),
        author: z.string().optional(),
        category: z.string().optional(),
      }),
    }),
  }),
  i18n: defineCollection({ loader: i18nLoader(), schema: i18nSchema() }),
  ctaSection,
  posts: defineCollection({
    loader: supabaseLoader("posts"),
    schema: z.object({
      id: z.string().or(z.number()),
      title: z.string().optional(),
      content: z.string().optional(),
      created_at: z.string().optional(),
    }),
  }),
};
