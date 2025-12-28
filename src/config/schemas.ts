import { z } from "zod";

export const SiteConfigSchema = z.object({
  title: z.string(),
  description: z.string(),
  author: z.string(),
  email: z.string().email(),
  logo: z.string(),
  logo_darkmode: z.string(),
  logo_width: z.string(),
  logo_height: z.string(),
  logo_text: z.string(),
});

export const SettingsSchema = z.object({
  search: z.boolean().default(true),
  theme_switcher: z.boolean().default(true),
});

export const ParamsSchema = z.object({
  footer_contact: z.object({
    enable: z.boolean().default(false),
    action: z.string().default("#"),
  }),
  copyright: z.string(),
});

export const NavButtonSchema = z.object({
  enable: z.boolean().default(false),
  label: z.string(),
  link: z.string(),
});

export const ThemeConfigSchema = z.object({
  colors: z.object({
    default: z.object({
      theme_color: z.object({
        primary: z.string(),
        body: z.string(),
        light: z.string(),
        dark: z.string(),
      }),
      text_color: z.object({
        text: z.string(),
      }),
    }),
    lightmode: z.object({
      theme_color: z.object({
        primary: z.string(),
        body: z.string(),
        light: z.string(),
        dark: z.string(),
      }),
      text_color: z.object({
        text: z.string(),
      }),
    }),
  }),
  fonts: z.object({
    font_family: z.object({
      primary: z.string(),
      primary_type: z.string(),
    }),
    font_size: z.object({
      base: z.string(),
      scale: z.string(),
    }),
  }),
});

export const SocialLinkSchema = z.object({
  icon: z.string(),
  label: z.string(),
  href: z.string().url(),
});

export const SocialConfigSchema = z.object({
  main: z.array(SocialLinkSchema),
});

export const SidebarItemSchema = z.lazy(() =>
  z.object({
    label: z.string(),
    link: z.string().optional(),
    autogenerate: z
      .object({
        directory: z.string(),
      })
      .optional(),
    items: z.array(SidebarItemSchema).optional(),
  })
);

export const SidebarConfigSchema = z.object({
  main: z.array(SidebarItemSchema),
});

export const LocaleSchema = z.object({
  label: z.string(),
  lang: z.string(),
});

export const LocalsConfigSchema = z.record(LocaleSchema);

export const MenuItemSchema = z.lazy(() =>
  z.object({
    name: z.string(),
    url: z.string(),
    hasChildren: z.boolean().optional(),
    children: z.array(MenuItemSchema).optional(),
  })
);

export const MenuConfigSchema = z.object({
  main: z.array(MenuItemSchema),
  footer: z.record(
    z.object({
      title: z.string(),
      links: z.array(
        z.object({
          name: z.string(),
          url: z.string(),
        })
      ),
    })
  ),
});
