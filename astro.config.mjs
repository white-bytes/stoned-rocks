// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import { viewTransitions } from "astro-vtbot/starlight-view-transitions";

import tailwindcss from "@tailwindcss/vite";
import { site, social, locals, sidebar } from "./src/config/index.ts";

import { fileURLToPath } from "url";

import mdx from "@astrojs/mdx";

const { title, logo, logo_darkmode } = site;

export const locales = locals


// https://astro.build/config
import cloudflare from "@astrojs/cloudflare";

export default defineConfig({
  output: 'server',
  adapter: cloudflare({
    platformProxy: {
      enabled: true,
      persist: { path: './.wrangler/state/v3' }
    }
  }),
  image: {
    service: { entrypoint: "astro/assets/services/noop" },
  },
  server: {
    port: 4555,
  },
  integrations: [starlight({
    title,

    logo: {
      light: logo,
      dark: logo_darkmode,
      alt: "DocKit Logo",
    },
    // @ts-ignore
    social: social.main || [],
    locales,
    // @ts-ignore
    sidebar: sidebar.main || [],
    customCss: ["./src/styles/global.css"],
    components: {
      Head: "./src/components/override-components/Head.astro",
      Header: "./src/components/override-components/Header.astro",
      Hero: "./src/components/override-components/Hero.astro",
      PageFrame: "./src/components/override-components/PageFrame.astro",
      PageSidebar: "./src/components/override-components/PageSidebar.astro",
      TwoColumnContent: "./src/components/override-components/TwoColumnContent.astro",
      ContentPanel: "./src/components/override-components/ContentPanel.astro",
      Pagination: "./src/components/override-components/Pagination.astro",
      Sidebar: "./src/components/override-components/Sidebar.astro",
      PageTitle: "./src/components/override-components/PageTitle.astro",
      
      
    },
    
  }), mdx()],
  vite: {
    plugins: [tailwindcss(),viewTransitions()],
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("./src", import.meta.url)),
        "~": fileURLToPath(new URL("./src", import.meta.url)),
      },
    },
  },
});