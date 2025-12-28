import { SiteConfigSchema, SettingsSchema, ParamsSchema, NavButtonSchema } from "./schemas";

export const site = SiteConfigSchema.parse({
  title: "Word Particles - Collection",
  description: "A collection of knowledge.",
  author: "Brandon West",
  email: "bran@isbrandon.org",
  logo: "/src/assets/logo-light.svg",
  logo_darkmode: "/src/assets/logo-dark.svg",
  logo_width: "127",
  logo_height: "32",
  logo_text: "Word Particles",
});

export const settings = SettingsSchema.parse({
  search: true,
  theme_switcher: true,
});

export const params = ParamsSchema.parse({
  footer_contact: {
    enable: true,
    action: "#",
  },
  copyright: "Copyright &copy; 2025.",
});

export const navigation_button = NavButtonSchema.parse({
  enable: true,
  label: "Articles",
  link: "/articles/",
});

export const latest = NavButtonSchema.parse({
  enable: true,
  label: "Latest",
  link: "/latest/",
});
