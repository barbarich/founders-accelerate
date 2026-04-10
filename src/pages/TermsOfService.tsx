import { useLanguage } from "@/i18n/LanguageContext";
import { Link } from "react-router-dom";
import { supportedLangs, langLabels, type Lang } from "@/i18n/translations";
import { ArrowLeft } from "lucide-react";

export default function TermsOfService() {
  const { t, lang } = useLanguage();
  const isRtl = lang === "he";

  return (
    <div className="min-h-screen bg-[hsl(var(--landing-bg))] text-white" dir={isRtl ? "rtl" : "ltr"}>
      {/* Header */}
      <header className="border-b border-white/[0.06]">
        <div className="max-w-[900px] mx-auto px-6 lg:px-10 py-6 flex items-center justify-between">
          <Link
            to={`/${lang}`}
            className="flex items-center gap-2 text-sm text-white/40 hover:text-white/70 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            {t.termsBack}
          </Link>
          <div className="flex items-center gap-1">
            {supportedLangs.map((l) => (
              <Link
                key={l}
                to={`/${l}/terms`}
                className={`px-2 py-1 text-[11px] font-mono rounded transition-colors ${
                  l === lang
                    ? "text-[hsl(var(--landing-accent))]"
                    : "text-white/20 hover:text-white/70"
                }`}
              >
                {langLabels[l]}
              </Link>
            ))}
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-[900px] mx-auto px-6 lg:px-10 py-16 md:py-24">
        <h1 className="text-3xl md:text-4xl font-black mb-3">{t.termsTitle}</h1>
        <p className="text-sm text-white/30 mb-12">{t.termsLastUpdated}</p>

        <div className="space-y-10">
          {t.termsSections.map((section, i) => (
            <div key={i}>
              <h2 className="text-lg md:text-xl font-bold text-white mb-3">
                {section.title}
              </h2>
              <div className="text-sm md:text-base text-white/60 leading-relaxed whitespace-pre-line">
                {section.content}
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/[0.06] py-8">
        <div className="max-w-[900px] mx-auto px-6 lg:px-10 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 flex-wrap">
            <span className="text-xs text-white/20">{t.footerRights}</span>
            <Link to={`/${lang}/privacy`} className="text-xs text-white/20 hover:text-white/50 transition-colors underline underline-offset-2">{t.footerPrivacy}</Link>
            <Link to={`/${lang}/contact`} className="text-xs text-white/20 hover:text-white/50 transition-colors underline underline-offset-2">{t.footerContact}</Link>
          </div>
          <div className="flex items-center gap-1">
            {supportedLangs.map((l) => (
              <Link
                key={l}
                to={`/${l}/terms`}
                className={`px-2 py-1 text-[11px] font-mono rounded transition-colors ${
                  l === lang
                    ? "text-[hsl(var(--landing-accent))]"
                    : "text-white/20 hover:text-white/70"
                }`}
              >
                {langLabels[l]}
              </Link>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
