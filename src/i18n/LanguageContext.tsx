import { createContext, useContext } from "react";
import { translations, type Lang, type Translations } from "./translations";

const LanguageContext = createContext<{ lang: Lang; t: Translations }>({
  lang: "en",
  t: translations.en,
});

export function LanguageProvider({
  lang,
  children,
}: {
  lang: Lang;
  children: React.ReactNode;
}) {
  const t = translations[lang];
  const isRTL = lang === "he";

  return (
    <LanguageContext.Provider value={{ lang, t }}>
      <div dir={isRTL ? "rtl" : "ltr"}>{children}</div>
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
