import { useLanguage } from "@/i18n/LanguageContext";
import { Link } from "react-router-dom";
import { supportedLangs, langLabels, type Lang } from "@/i18n/translations";
import { useState, useEffect, useRef } from "react";
import { Menu, X, ArrowRight, ChevronRight } from "lucide-react";
import { useInView, useCountUp } from "@/hooks/useInView";

import photo from "@/assets/slides/photo-michael.jpg";
import brich1 from "@/assets/slides/brich-1.jpg";
import skyroom1 from "@/assets/slides/skyroom-1.jpg";
import perapuff1 from "@/assets/slides/perapuff-1.jpg";
import runeverywhere1 from "@/assets/slides/runeverywhere-1.jpg";
import forextester1 from "@/assets/slides/forextester-1.jpg";
import metaminder1 from "@/assets/slides/metaminder-1.jpg";
import mymikey1 from "@/assets/slides/mymikey-1.jpg";

const trackImages = [brich1, skyroom1, perapuff1, runeverywhere1, forextester1, metaminder1, mymikey1];

/* ============================
   Reveal wrapper
   ============================ */
function Reveal({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const { ref, isVisible } = useInView();
  return (
    <div
      ref={ref}
      className={`reveal ${isVisible ? "visible" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

/* ============================
   Stat Counter
   ============================ */
function StatNumber({ end, suffix = "", prefix = "" }: { end: number; suffix?: string; prefix?: string }) {
  const { ref, isVisible } = useInView();
  const count = useCountUp(end, 2000, isVisible);
  return (
    <span ref={ref} className="font-mono text-5xl md:text-7xl lg:text-8xl font-bold text-gradient tabular-nums">
      {prefix}{count.toLocaleString()}{suffix}
    </span>
  );
}

/* ============================
   Nav
   ============================ */
function Nav({ lang, t, applyUrl }: { lang: Lang; t: any; applyUrl: string }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border/50"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-[1400px] mx-auto flex items-center justify-between px-6 lg:px-10 py-4">
        <Link to={`/${lang}`} className="font-display text-lg font-bold text-foreground tracking-tight">
          TFC
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#program" className="text-[13px] text-muted-foreground hover:text-foreground transition-colors tracking-wide uppercase">{t.navProgram}</a>
          <Link to={`/${lang}/mentor`} className="text-[13px] text-muted-foreground hover:text-foreground transition-colors tracking-wide uppercase">{t.navMentor}</Link>
          <a href="#pricing" className="text-[13px] text-muted-foreground hover:text-foreground transition-colors tracking-wide uppercase">{t.navPricing}</a>

          <div className="flex items-center gap-0.5 ml-2">
            {supportedLangs.map((l) => (
              <Link
                key={l}
                to={`/${l}`}
                className={`px-2 py-1 text-[11px] font-mono rounded transition-all ${
                  l === lang
                    ? "bg-primary/20 text-primary"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {langLabels[l]}
              </Link>
            ))}
          </div>

          <Link
            to={applyUrl}
            className="bg-primary text-primary-foreground px-5 py-2 rounded-md text-sm font-semibold hover:bg-primary/90 transition-all animate-pulse-glow"
          >
            {t.navApply}
          </Link>
        </div>

        {/* Mobile */}
        <div className="md:hidden flex items-center gap-3">
          <div className="flex items-center gap-0.5">
            {supportedLangs.map((l) => (
              <Link
                key={l}
                to={`/${l}`}
                className={`px-1.5 py-0.5 text-[10px] font-mono rounded transition-colors ${
                  l === lang ? "bg-primary/20 text-primary" : "text-muted-foreground"
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

      {menuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-xl border-b border-border px-6 pb-5 space-y-4">
          <a href="#program" onClick={() => setMenuOpen(false)} className="block text-sm text-muted-foreground">{t.navProgram}</a>
          <Link to={`/${lang}/mentor`} onClick={() => setMenuOpen(false)} className="block text-sm text-muted-foreground">{t.navMentor}</Link>
          <a href="#pricing" onClick={() => setMenuOpen(false)} className="block text-sm text-muted-foreground">{t.navPricing}</a>
          <Link to={applyUrl} className="block bg-primary text-primary-foreground px-5 py-3 rounded-md text-sm font-semibold text-center">
            {t.navApply}
          </Link>
        </div>
      )}
    </nav>
  );
}

/* ============================
   LANDING PAGE
   ============================ */
export default function Landing() {
  const { lang, t } = useLanguage();
  const applyUrl = `/${lang}/apply`;

  return (
    <div className="min-h-screen bg-background text-foreground relative">
      <Nav lang={lang} t={t} applyUrl={applyUrl} />

      {/* ═══════════════ HERO ═══════════════ */}
      <section className="relative min-h-screen flex items-center overflow-hidden grain">
        {/* Radial gradients */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full bg-primary/[0.04] blur-[120px]" />
          <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-primary/[0.03] blur-[100px]" />
        </div>

        <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-10 pt-32 pb-20 w-full">
          {/* Tag */}
          <div className="animate-fade-up mb-8">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/[0.05] text-primary text-xs font-mono tracking-widest uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              {t.heroTag}
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-[clamp(2.5rem,7vw,6rem)] leading-[1.05] font-bold text-foreground mb-4 whitespace-pre-line font-display animate-fade-up delay-200 max-w-5xl">
            {t.heroTitle}
          </h1>

          {/* Gold line */}
          <div className="h-[3px] bg-primary rounded-full animate-gold-line mb-8" />

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed animate-fade-up delay-400 mb-12">
            {t.heroSubtitle}
          </p>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row items-start gap-5 animate-fade-up delay-500 mb-16">
            <Link
              to={applyUrl}
              className="group bg-primary text-primary-foreground px-8 py-4 rounded-lg text-base font-semibold hover:bg-primary/90 transition-all inline-flex items-center gap-3 animate-pulse-glow"
            >
              {t.heroCTA}
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <div className="flex flex-col gap-1 text-sm text-muted-foreground">
              <span className="inline-flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                {t.heroCohort}
              </span>
              <span className="text-muted-foreground/60">{t.heroGroup}</span>
            </div>
          </div>

          {/* Stats strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10 pt-10 border-t border-border/30">
            {[
              { end: 7, suffix: "", label: t.statProducts || "Products Built" },
              { end: 2, suffix: "", label: t.statExits || "Successful Exits" },
              { end: 50, suffix: "K+", label: t.statUsers || "Paying Users" },
              { end: 107, suffix: "", label: t.statCountries || "Countries" },
            ].map((stat, i) => (
              <div key={i} className={`animate-fade-up`} style={{ animationDelay: `${600 + i * 100}ms` }}>
                <StatNumber end={stat.end} suffix={stat.suffix} />
                <p className="text-xs md:text-sm text-muted-foreground mt-2 uppercase tracking-wider font-mono">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ PROBLEM ═══════════════ */}
      <section className="py-24 md:py-40 relative">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <Reveal>
            <p className="text-xs font-mono uppercase tracking-[0.3em] text-primary mb-4">{t.problemTag}</p>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-16 md:mb-24 font-display">{t.problemTitle}</h2>
          </Reveal>

          <div className="space-y-6 md:space-y-8 max-w-4xl">
            {t.problemItems.map((p: string, i: number) => (
              <Reveal key={i} delay={i * 120}>
                <div className="group flex items-start gap-6 py-6 border-b border-border/20 hover:border-primary/30 transition-colors">
                  <span className="text-primary/20 font-mono text-sm mt-1 shrink-0">0{i + 1}</span>
                  <p className="text-xl md:text-2xl lg:text-3xl text-foreground/70 group-hover:text-foreground transition-colors leading-snug font-light">
                    "{p}"
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ MENTOR ═══════════════ */}
      <section id="mentor" className="py-0 relative overflow-hidden">
        <div className="flex flex-col lg:flex-row min-h-[80vh]">
          {/* Photo — full bleed left */}
          <Reveal className="w-full lg:w-[45%] relative">
            <div className="h-[50vh] lg:h-full lg:absolute lg:inset-0">
              <img
                src={photo}
                alt={t.mentorTitle}
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-transparent lg:to-background" />
            </div>
          </Reveal>

          {/* Bio */}
          <div className="w-full lg:w-[55%] flex items-center">
            <div className="px-6 lg:px-20 py-16 lg:py-24 max-w-2xl">
              <Reveal>
                <p className="text-xs font-mono uppercase tracking-[0.3em] text-primary mb-4">{t.mentorTag}</p>
              </Reveal>
              <Reveal delay={100}>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-2 font-display">{t.mentorTitle}</h2>
              </Reveal>
              <Reveal delay={200}>
                <p className="text-base md:text-lg text-muted-foreground italic mb-10">{t.mentorSubtitle}</p>
              </Reveal>

              <div className="space-y-4">
                {t.mentorBio.map((b: string, i: number) => (
                  <Reveal key={i} delay={300 + i * 80}>
                    <div className="flex items-start gap-3">
                      <div className="w-1 h-1 rounded-full bg-primary mt-3 shrink-0" />
                      <p className="text-sm md:text-base text-foreground/80 leading-relaxed">{b}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════ PROGRAM PHASES — TIMELINE ═══════════════ */}
      <section id="program" className="py-24 md:py-40 border-t border-border/30 relative">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <Reveal>
            <p className="text-xs font-mono uppercase tracking-[0.3em] text-primary mb-4">{t.phasesTag}</p>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-3 font-display">{t.phasesTitle}</h2>
          </Reveal>
          <Reveal delay={200}>
            <p className="text-base md:text-lg text-muted-foreground mb-20 max-w-3xl">{t.phasesSubtitle}</p>
          </Reveal>

          {/* Timeline */}
          <div className="relative">
            {/* Gold connecting line */}
            <div className="hidden md:block absolute left-[39px] top-0 bottom-0 w-px bg-gradient-to-b from-primary/40 via-primary/20 to-transparent" />

            <div className="space-y-12 md:space-y-20">
              {t.phases.map((phase: any, i: number) => (
                <Reveal key={i} delay={i * 200}>
                  <div className="flex flex-col md:flex-row gap-6 md:gap-12">
                    {/* Node */}
                    <div className="flex items-start gap-4 md:flex-col md:items-center md:w-20 shrink-0">
                      <div className="w-10 h-10 rounded-full border-2 border-primary bg-background flex items-center justify-center z-10 relative">
                        <span className="text-primary font-mono text-sm font-bold">{i + 1}</span>
                      </div>
                      <span className="text-xs font-mono text-primary/60 md:mt-2">{phase.weeks}</span>
                    </div>

                    {/* Content */}
                    <div className="glass glass-hover rounded-xl p-6 md:p-10 flex-1 transition-all duration-500">
                      <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6 font-display">{phase.title}</h3>
                      <div className="grid md:grid-cols-2 gap-3 mb-8">
                        {phase.items.map((item: string, j: number) => (
                          <div key={j} className="flex items-start gap-2.5">
                            <ChevronRight size={14} className="text-primary mt-1 shrink-0" />
                            <p className="text-sm text-foreground/80 leading-relaxed">{item}</p>
                          </div>
                        ))}
                      </div>
                      <div className="flex items-center gap-3 pt-5 border-t border-border/20">
                        <ArrowRight size={16} className="text-primary" />
                        <p className="text-sm text-primary font-semibold">{phase.result}</p>
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════ OUTCOMES — BENTO GRID ═══════════════ */}
      <section className="py-24 md:py-40 border-t border-border/30 relative grain">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <Reveal>
            <p className="text-xs font-mono uppercase tracking-[0.3em] text-primary mb-4">{t.resultsTag}</p>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-3 font-display">{t.resultsTitle}</h2>
          </Reveal>
          <Reveal delay={200}>
            <p className="text-base md:text-lg text-muted-foreground mb-16">{t.resultsSubtitle}</p>
          </Reveal>

          {/* Bento grid */}
          <div className="grid grid-cols-1 md:grid-cols-6 gap-4 md:gap-5">
            {t.resultsItems.map((r: any, i: number) => {
              // First 2 items span 3 cols, rest span 2 cols
              const span = i < 2 ? "md:col-span-3" : "md:col-span-2";
              return (
                <Reveal key={i} delay={i * 100} className={span}>
                  <div className="glass glass-hover rounded-xl p-6 md:p-8 h-full transition-all duration-500 group cursor-default">
                    <span className="text-gradient font-mono text-3xl font-bold mb-4 block">0{i + 1}</span>
                    <h3 className="text-lg md:text-xl font-semibold text-foreground mb-2">{r.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{r.desc}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════ FORMAT — THREE PILLARS ═══════════════ */}
      <section className="py-24 md:py-40 border-t border-border/30 relative">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <Reveal>
            <p className="text-xs font-mono uppercase tracking-[0.3em] text-primary mb-4">{t.formatTag}</p>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-2 font-display">{t.formatTitle}</h2>
          </Reveal>
          <Reveal delay={200}>
            <p className="text-base md:text-lg text-muted-foreground mb-16">{t.formatSubtitle}</p>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-5">
            {t.formatColumns.map((col: any, i: number) => (
              <Reveal key={i} delay={i * 150}>
                <div className="group rounded-xl p-6 md:p-8 border-t-2 border-primary/40 bg-card hover:bg-card/80 hover:-translate-y-1 transition-all duration-500">
                  <div className="mb-5">
                    <h3 className="text-xl font-bold text-foreground mb-1">{col.title}</h3>
                    <span className="text-xs font-mono text-primary">{col.sub}</span>
                  </div>
                  <div className="space-y-3">
                    {col.items.map((item: string, j: number) => (
                      <div key={j} className="flex items-start gap-2">
                        <div className="w-1 h-1 rounded-full bg-primary/40 mt-2 shrink-0" />
                        <p className="text-sm text-foreground/80 leading-relaxed">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ PRICING ═══════════════ */}
      <section id="pricing" className="py-24 md:py-40 border-t border-border/30 relative grain">
        <div className="max-w-[1100px] mx-auto px-6 lg:px-10">
          <Reveal>
            <p className="text-xs font-mono uppercase tracking-[0.3em] text-primary mb-4">{t.pricingTag}</p>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-16 font-display">{t.pricingTitle}</h2>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Accelerator */}
            <Reveal delay={200}>
              <div className="shimmer-border rounded-2xl bg-card p-8 md:p-10 h-full relative">
                <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-1 font-display">{t.accelTitle}</h3>
                <p className="text-sm text-muted-foreground mb-8">{t.accelSub}</p>
                <div className="space-y-3 mb-10">
                  {t.accelItems.map((item: string, i: number) => (
                    <div key={i} className="flex items-start gap-3">
                      <ChevronRight size={14} className="text-primary mt-1 shrink-0" />
                      <span className="text-sm text-foreground/85 leading-relaxed">{item}</span>
                    </div>
                  ))}
                </div>
                <div className="border-t border-border/30 pt-6 space-y-2">
                  <div className="flex items-baseline gap-3">
                    <span className="text-4xl md:text-5xl font-bold text-gradient font-mono">{t.accelPrice}</span>
                    <span className="text-sm text-muted-foreground">{t.accelPriceSub}</span>
                  </div>
                  <div className="flex items-baseline gap-3">
                    <span className="text-2xl md:text-3xl font-bold text-foreground/60 font-mono">{t.accelMonthly}</span>
                    <span className="text-sm text-muted-foreground">{t.accelMonthlySub}</span>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Consultation */}
            <Reveal delay={350}>
              <div className="rounded-2xl border border-border/30 bg-card p-8 md:p-10 h-full">
                <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-1 font-display">{t.consultTitle}</h3>
                <p className="text-sm text-muted-foreground mb-8">{t.consultSub}</p>
                <div className="space-y-3 mb-10">
                  {t.consultItems.map((item: string, i: number) => (
                    <div key={i} className="flex items-start gap-3">
                      <ChevronRight size={14} className="text-muted-foreground mt-1 shrink-0" />
                      <span className="text-sm text-foreground/85 leading-relaxed">{item}</span>
                    </div>
                  ))}
                </div>
                <div className="border-t border-border/30 pt-6">
                  <div className="flex items-baseline gap-3">
                    <span className="text-4xl md:text-5xl font-bold text-foreground font-mono">{t.consultPrice}</span>
                    <span className="text-sm text-muted-foreground">{t.consultPriceSub}</span>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ═══════════════ CTA ═══════════════ */}
      <section className="min-h-[70vh] flex items-center justify-center relative cta-gradient-mesh overflow-hidden">
        <div className="absolute inset-0 grain" />
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center py-24">
          <Reveal>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 font-display">{t.ctaTitle}</h2>
          </Reveal>
          <Reveal delay={100}>
            <p className="text-lg md:text-xl text-muted-foreground mb-10">{t.ctaSubtitle}</p>
          </Reveal>
          <Reveal delay={200}>
            <Link
              to={applyUrl}
              className="group bg-primary text-primary-foreground px-10 py-4 rounded-lg text-lg font-semibold hover:bg-primary/90 transition-all inline-flex items-center gap-3 animate-pulse-glow"
            >
              {t.ctaCTA}
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </Reveal>
          <Reveal delay={300}>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 text-sm text-muted-foreground">
              <span className="inline-flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                {t.ctaCohort}
              </span>
              <span className="hidden sm:inline text-border/50">·</span>
              <span className="text-muted-foreground/60">{t.heroGroup}</span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══════════════ FOOTER ═══════════════ */}
      <footer className="border-t border-border/30 py-8">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="text-xs text-muted-foreground/60">{t.footerRights}</span>
          <div className="flex items-center gap-1">
            {supportedLangs.map((l) => (
              <Link
                key={l}
                to={`/${l}`}
                className={`px-2 py-1 text-[11px] font-mono rounded transition-colors ${
                  l === lang ? "text-primary" : "text-muted-foreground/60 hover:text-foreground"
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
