import { SidebarConfigSchema } from "./schemas";

export const sidebar = SidebarConfigSchema.parse({
  main: [
    {
      label: "Articles",
      autogenerate: {
        directory: "articles",
      },
    },
    {
      label: "Research",
      autogenerate: {
        directory: "research",
      },
    },
  ],
});
