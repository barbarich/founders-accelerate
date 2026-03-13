import { useLanguage } from "@/i18n/LanguageContext";
import { Link } from "react-router-dom";
import { supportedLangs, langLabels, type Lang } from "@/i18n/translations";
import photo from "@/assets/slides/photo-michael.jpg";
import titleBg from "@/assets/slides/title-bg.jpg";
import brich1 from "@/assets/slides/brich-1.jpg";
import skyroom1 from "@/assets/slides/skyroom-1.jpg";
import perapuff1 from "@/assets/slides/perapuff-1.jpg";
import runeverywhere1 from "@/assets/slides/runeverywhere-1.jpg";
import forextester1 from "@/assets/slides/forextester-1.jpg";
import metaminder1 from "@/assets/slides/metaminder-1.jpg";
import mymikey1 from "@/assets/slides/mymikey-1.jpg";
import { useState, useEffect } from "react";
import { Menu, X, ArrowRight } from "lucide-react";

const trackImages = [brich1, skyroom1, perapuff1, runeverywhere1, forextester1, metaminder1, mymikey1];

export default function Landing() {
  const { lang, t } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const applyUrl = `/${lang}/apply`;

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Nav */}
      <nav
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-background/95 backdrop-blur-md border-b border-border" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          <Link to={`/${lang}`} className="font-display text-lg font-bold text-foreground tracking-tight">
            The Founders Circle
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-6">
            <a href="#program" className="text-sm text-muted-foreground hover:text-foreground transition-colors">{t.navProgram}</a>
            <a href="#mentor" className="text-sm text-muted-foreground hover:text-foreground transition-colors">{t.navMentor}</a>
            <a href="#pricing" className="text-sm text-muted-foreground hover:text-foreground transition-colors">{t.navPricing}</a>
            <div className="flex items-center gap-1 border border-border rounded-md px-1">
              {supportedLangs.map((l) => (
                <Link
                  key={l}
                  to={`/${l}`}
                  className={`px-2 py-1 text-xs rounded transition-colors ${
                    l === lang ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {langLabels[l]}
                </Link>
              ))}
            </div>
            <Link
              to={applyUrl}
              className="bg-primary text-primary-foreground px-5 py-2 rounded-md text-sm font-medium hover:bg-primary/90 transition-colors"
            >
              {t.navApply}
            </Link>
          </div>

          {/* Mobile nav */}
          <div className="md:hidden flex items-center gap-3">
            <div className="flex items-center gap-0.5">
              {supportedLangs.map((l) => (
                <Link
                  key={l}
                  to={`/${l}`}
                  className={`px-1.5 py-0.5 text-[10px] rounded transition-colors ${
                    l === lang ? "bg-primary text-primary-foreground" : "text-muted-foreground"
                  }`}
                >
                  {langLabels[l]}
                </Link>
              ))}
            </div>
            <button onClick={() => setMenuOpen(!menuOpen)} className="text-foreground p-1">
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden bg-background/95 backdrop-blur-md border-b border-border px-6 pb-4 space-y-3">
            <a href="#program" onClick={() => setMenuOpen(false)} className="block text-sm text-muted-foreground">{t.navProgram}</a>
            <a href="#mentor" onClick={() => setMenuOpen(false)} className="block text-sm text-muted-foreground">{t.navMentor}</a>
            <a href="#pricing" onClick={() => setMenuOpen(false)} className="block text-sm text-muted-foreground">{t.navPricing}</a>
            <Link to={applyUrl} className="block bg-primary text-primary-foreground px-5 py-2.5 rounded-md text-sm font-medium text-center">
              {t.navApply}
            </Link>
          </div>
        )}
      </nav>

      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={titleBg} alt="" className="w-full h-full object-cover opacity-[0.06]" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/80 to-background" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center py-32">
          <p className="text-xs md:text-sm uppercase tracking-[0.2em] text-primary font-medium mb-6">
            {t.heroTag}
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground leading-[1.1] mb-6 whitespace-pre-line font-display">
            {t.heroTitle}
          </h1>
          <p className="text-base md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
            {t.heroSubtitle}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <Link
              to={applyUrl}
              className="bg-primary text-primary-foreground px-8 py-3.5 rounded-md text-base font-semibold hover:bg-primary/90 transition-colors inline-flex items-center gap-2"
            >
              {t.heroCTA}
              <ArrowRight size={18} />
            </Link>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              {t.heroCohort}
            </span>
            <span className="hidden sm:inline text-border">·</span>
            <span>{t.heroGroup}</span>
          </div>
        </div>
      </section>

      {/* Problem */}
      <section className="py-20 md:py-32">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-xs uppercase tracking-[0.2em] text-primary font-medium mb-4">{t.problemTag}</p>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-12">{t.problemTitle}</h2>
          <div className="space-y-3">
            {t.problemItems.map((p, i) => (
              <div
                key={i}
                className="flex items-start gap-4 md:gap-6 px-5 md:px-8 py-5 md:py-6 bg-card border border-border rounded-lg"
              >
                <span className="text-2xl md:text-3xl leading-none text-primary/30 font-bold mt-[-2px] shrink-0">"</span>
                <p className="text-sm md:text-lg text-foreground/90 leading-relaxed">{p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mentor */}
      <section id="mentor" className="py-20 md:py-32 border-t border-border">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-12 md:gap-20 items-center">
            <div className="w-full md:w-[340px] shrink-0">
              <div className="aspect-[3/4] rounded-xl overflow-hidden">
                <img src={photo} alt={t.mentorTitle} className="w-full h-full object-cover" />
              </div>
            </div>
            <div className="flex-1">
              <p className="text-xs uppercase tracking-[0.2em] text-primary font-medium mb-4">{t.mentorTag}</p>
              <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-3">{t.mentorTitle}</h2>
              <p className="text-base md:text-lg text-muted-foreground italic mb-8">{t.mentorSubtitle}</p>
              <div className="space-y-4">
                {t.mentorBio.map((b, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 shrink-0" />
                    <p className="text-sm md:text-base text-foreground/90 leading-relaxed">{b}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Track Record */}
      <section className="py-20 md:py-32 border-t border-border">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-xs uppercase tracking-[0.2em] text-primary font-medium mb-4">{t.trackTag}</p>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-16">{t.trackTitle}</h2>
          <div className="space-y-6">
            {t.trackItems.map((item, i) => (
              <div
                key={i}
                className="flex flex-col md:flex-row gap-4 md:gap-8 items-start md:items-center bg-card border border-border rounded-xl overflow-hidden"
              >
                <div className="w-full md:w-48 h-32 md:h-28 shrink-0">
                  <img src={trackImages[i]} alt={item.title} className="w-full h-full object-cover" />
                </div>
                <div className="flex-1 px-5 pb-5 md:px-0 md:pb-0 md:py-5">
                  <p className="text-xs font-mono text-primary/60 mb-1">{item.period}</p>
                  <h3 className="text-lg font-bold text-foreground mb-0.5">{item.title}</h3>
                  <p className="text-xs text-muted-foreground mb-2">{item.subtitle}</p>
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 border border-primary/30 rounded bg-primary/5">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    <span className="text-xs text-primary font-medium">{item.highlight}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Program Phases */}
      <section id="program" className="py-20 md:py-32 border-t border-border">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-xs uppercase tracking-[0.2em] text-primary font-medium mb-4">{t.phasesTag}</p>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-3">{t.phasesTitle}</h2>
          <p className="text-base md:text-lg text-muted-foreground mb-16 max-w-3xl">{t.phasesSubtitle}</p>
          <div className="grid md:grid-cols-3 gap-6">
            {t.phases.map((p, i) => (
              <div key={i} className="bg-card border border-border rounded-xl p-6 md:p-8 flex flex-col">
                <p className="text-xs font-mono text-primary/60 mb-1">{p.weeks}</p>
                <h3 className="text-xl md:text-2xl font-bold text-foreground mb-5">{p.title}</h3>
                <div className="space-y-3 flex-1">
                  {p.items.map((item, j) => (
                    <div key={j} className="flex items-start gap-2.5">
                      <div className="w-1 h-1 rounded-full bg-primary/40 mt-2 shrink-0" />
                      <p className="text-sm text-foreground/85 leading-relaxed">{item}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-5 pt-4 border-t border-border flex items-center gap-2">
                  <span className="text-sm">→</span>
                  <p className="text-sm text-primary font-medium">{p.result}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-20 md:py-32 border-t border-border">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-xs uppercase tracking-[0.2em] text-primary font-medium mb-4">{t.resultsTag}</p>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-3">{t.resultsTitle}</h2>
          <p className="text-base md:text-lg text-muted-foreground mb-12">{t.resultsSubtitle}</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {t.resultsItems.map((r, i) => (
              <div key={i} className="bg-card border border-border rounded-xl p-6 flex flex-col">
                <span className="text-3xl mb-4">{r.icon}</span>
                <h3 className="text-base font-semibold text-foreground mb-2">{r.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Format */}
      <section className="py-20 md:py-32 border-t border-border">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-xs uppercase tracking-[0.2em] text-primary font-medium mb-4">{t.formatTag}</p>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-2">{t.formatTitle}</h2>
          <p className="text-base md:text-lg text-muted-foreground mb-12">{t.formatSubtitle}</p>
          <div className="grid md:grid-cols-3 gap-6">
            {t.formatColumns.map((col, i) => (
              <div key={i} className="bg-card border border-border rounded-xl p-6 md:p-8 flex flex-col">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-2xl">{col.icon}</span>
                  <div>
                    <h3 className="text-base font-semibold text-foreground">{col.title}</h3>
                    <span className="text-xs text-primary font-medium">{col.sub}</span>
                  </div>
                </div>
                <div className="space-y-2.5">
                  {col.items.map((item, j) => (
                    <div key={j} className="flex items-start gap-2">
                      <div className="w-1 h-1 rounded-full bg-primary/50 mt-2 shrink-0" />
                      <p className="text-sm text-foreground/85 leading-relaxed">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20 md:py-32 border-t border-border">
        <div className="max-w-5xl mx-auto px-6">
          <p className="text-xs uppercase tracking-[0.2em] text-primary font-medium mb-4">{t.pricingTag}</p>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-12">{t.pricingTitle}</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {/* Accelerator */}
            <div className="border border-primary/40 rounded-xl p-6 md:p-10 bg-primary/[0.03]">
              <h3 className="text-2xl font-bold text-foreground mb-1">{t.accelTitle}</h3>
              <p className="text-sm text-muted-foreground mb-6">{t.accelSub}</p>
              <div className="space-y-3 mb-8">
                {t.accelItems.map((item, i) => (
                  <div key={i} className="flex items-start gap-2.5">
                    <span className="text-primary text-sm mt-0.5">✓</span>
                    <span className="text-sm text-foreground/90 leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
              <div className="border-t border-border pt-5">
                <div className="flex items-baseline gap-3 mb-1">
                  <span className="text-3xl font-bold text-primary">{t.accelPrice}</span>
                  <span className="text-sm text-muted-foreground">{t.accelPriceSub}</span>
                </div>
                <div className="flex items-baseline gap-3">
                  <span className="text-2xl font-bold text-primary/80">{t.accelMonthly}</span>
                  <span className="text-sm text-muted-foreground">{t.accelMonthlySub}</span>
                </div>
              </div>
            </div>
            {/* Consultation */}
            <div className="border border-border rounded-xl p-6 md:p-10 bg-card">
              <h3 className="text-2xl font-bold text-foreground mb-1">{t.consultTitle}</h3>
              <p className="text-sm text-muted-foreground mb-6">{t.consultSub}</p>
              <div className="space-y-3 mb-8">
                {t.consultItems.map((item, i) => (
                  <div key={i} className="flex items-start gap-2.5">
                    <span className="text-muted-foreground text-sm mt-0.5">✓</span>
                    <span className="text-sm text-foreground/90 leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
              <div className="border-t border-border pt-5">
                <span className="text-3xl font-bold text-foreground">{t.consultPrice}</span>
                <span className="text-sm text-muted-foreground ms-2">{t.consultPriceSub}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 md:py-32 border-t border-border">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4 font-display">{t.ctaTitle}</h2>
          <p className="text-base md:text-lg text-muted-foreground mb-8">{t.ctaSubtitle}</p>
          <Link
            to={applyUrl}
            className="bg-primary text-primary-foreground px-8 py-3.5 rounded-md text-base font-semibold hover:bg-primary/90 transition-colors inline-flex items-center gap-2"
          >
            {t.ctaCTA}
            <ArrowRight size={18} />
          </Link>
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3 text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              {t.ctaCohort}
            </span>
            <span className="hidden sm:inline text-border">·</span>
            <span>{t.heroGroup}</span>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="text-xs text-muted-foreground">{t.footerRights}</span>
          <div className="flex items-center gap-1">
            {supportedLangs.map((l) => (
              <Link
                key={l}
                to={`/${l}`}
                className={`px-2 py-1 text-xs rounded transition-colors ${
                  l === lang ? "text-primary" : "text-muted-foreground hover:text-foreground"
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
