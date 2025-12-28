export const getTranslations = async (lang: string) => {
  let menu;
  try {
    menu = await import(`../../config/menu.${lang}.ts`);
  } catch (error) {
    menu = await import(`../../config/menu.en.ts`);
  }

  return { ...menu.menu };
};
