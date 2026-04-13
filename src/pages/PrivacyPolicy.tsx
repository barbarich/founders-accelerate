import { useEffect } from "react";
import { useLanguage } from "@/i18n/LanguageContext";
import { Link } from "react-router-dom";
import { supportedLangs, langLabels, type Lang } from "@/i18n/translations";
import { ArrowLeft } from "lucide-react";
import NewNavbar from "@/components/NewNavbar";

export default function PrivacyPolicy() {
  const { t, lang } = useLanguage();
  const isRtl = lang === "he";

  useEffect(() => {
    const prev = document.body.style.backgroundColor;
    document.body.style.backgroundColor = "#f8f8f4";
    return () => { document.body.style.backgroundColor = prev; };
  }, []);

  return (
    <div className="min-h-screen" style={{ background: "#f8f8f4", color: "#0d0d0d", fontFamily: "var(--nl-font-body, 'DM Sans', sans-serif)" }} dir={isRtl ? "rtl" : "ltr"}>
      <NewNavbar lang={lang} />

      {/* Back link */}
      <div className="max-w-[900px] mx-auto px-6 lg:px-10 pt-8">
        <Link to={`/${lang}`} className="flex items-center gap-2 text-sm transition-colors" style={{ color: "#888" }}>
          <ArrowLeft className="w-4 h-4" />
          {t.privacyBack}
        </Link>
      </div>

      {/* Content */}
      <main className="max-w-[900px] mx-auto px-6 lg:px-10 py-12 md:py-20">
        <h1 className="text-3xl md:text-4xl mb-3" style={{ fontFamily: "var(--nl-font-display, 'Syne', sans-serif)", fontWeight: 800 }}>{t.privacyTitle}</h1>
        <p className="text-sm mb-12" style={{ color: "#aaa" }}>{t.privacyLastUpdated}</p>

        <div className="space-y-10">
          {t.privacySections.map((section, i) => (
            <div key={i}>
              <h2 className="text-lg md:text-xl font-bold mb-3" style={{ fontFamily: "var(--nl-font-display, 'Syne', sans-serif)", color: "#0d0d0d" }}>
                {section.title}
              </h2>
              <div className="text-sm md:text-base leading-relaxed whitespace-pre-line" style={{ color: "#555" }}>
                {section.content}
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="py-8" style={{ borderTop: "1px solid #e4e4dc" }}>
        <div className="max-w-[900px] mx-auto px-6 lg:px-10 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 flex-wrap">
            <span className="text-xs" style={{ color: "#aaa" }}>{t.footerRights}</span>
            <Link to={`/${lang}/terms`} className="text-xs underline underline-offset-2 transition-colors" style={{ color: "#aaa" }}>{t.footerTerms}</Link>
            <Link to={`/${lang}/contact`} className="text-xs underline underline-offset-2 transition-colors" style={{ color: "#aaa" }}>{t.footerContact}</Link>
          </div>
          <div className="flex items-center gap-1">
            {supportedLangs.map((l) => (
              <Link key={l} to={`/${l}/privacy`} className="px-2 py-1 text-[11px] rounded transition-colors" style={{ color: l === lang ? "#4a8a28" : "#aaa" }}>
                {langLabels[l]}
              </Link>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
