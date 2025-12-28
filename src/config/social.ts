import { SocialConfigSchema } from "./schemas";

export const social = SocialConfigSchema.parse({
  main: [
    {
      icon: "github",
      label: "GitHub",
      href: "https://github.com/isbrandonw",
    },
    {
      icon: "linkedin",
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/isbrandon",
    },
  ],
});
