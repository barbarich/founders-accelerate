import { useLanguage } from "@/i18n/LanguageContext";
import { Link } from "react-router-dom";
import { supportedLangs, langLabels, type Lang } from "@/i18n/translations";
import { useState, useEffect, useRef } from "react";
import { Menu, X, ArrowRight, ChevronRight } from "lucide-react";
import { useInView, useCountUp } from "@/hooks/useInView";

import photo from "@/assets/slides/photo-michael.jpg";

/* ============================
   Artistic SVG decorations
   ============================ */
function BrushStroke({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 20" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M2 10C20 4 40 16 60 8C80 0 100 18 120 10C140 2 160 14 180 8C190 5 198 10 198 10"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        style={{ filter: "url(#rough)" }}
      />
      <defs>
        <filter id="rough">
          <feTurbulence type="turbulence" baseFrequency="0.05" numOctaves="2" result="noise" />
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="2" />
        </filter>
      </defs>
    </svg>
  );
}

function InkSplat({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="50" r="8" opacity="0.15" />
      <circle cx="35" cy="45" r="3" opacity="0.1" />
      <circle cx="62" cy="40" r="5" opacity="0.08" />
      <circle cx="55" cy="65" r="4" opacity="0.12" />
      <circle cx="40" cy="60" r="2.5" opacity="0.06" />
    </svg>
  );
}

function HandDrawnCircle({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 120" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M60 15C85 14 105 30 108 55C111 80 95 105 65 108C35 111 12 90 10 60C8 30 30 16 60 15Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeDasharray="4 6"
        opacity="0.3"
      />
    </svg>
  );
}

function SketchArrow({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 60 30" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M2 15C10 14 25 16 40 12C48 10 52 13 56 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.4" />
      <path d="M48 10L56 15L50 20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.4" />
    </svg>
  );
}

function WavyLine({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 400 30" className={className} fill="none" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M0 15C30 5 60 25 90 15C120 5 150 25 180 15C210 5 240 25 270 15C300 5 330 25 360 15C380 8 400 15 400 15"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        opacity="0.15"
      />
    </svg>
  );
}

/* ============================
   Reveal wrapper
   ============================ */
function Reveal({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const { ref, isVisible } = useInView();
  return (
    <div
      ref={ref}
      className={`landing-reveal ${isVisible ? "visible" : ""} ${className}`}
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
    <span ref={ref} className="font-mono text-5xl md:text-7xl lg:text-8xl font-bold landing-stat-number tabular-nums">
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
          ? "bg-[hsl(var(--landing-bg))]/90 backdrop-blur-xl border-b border-[hsl(var(--landing-border))]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-[1400px] mx-auto flex items-center justify-between px-6 lg:px-10 py-4">
        <Link to={`/${lang}`} className="font-display text-xl font-bold text-[hsl(var(--landing-text))] tracking-tight">
          TFC
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#program" className="text-[13px] text-[hsl(var(--landing-muted))] hover:text-[hsl(var(--landing-text))] transition-colors tracking-wide uppercase">{t.navProgram}</a>
          <Link to={`/${lang}/mentor`} className="text-[13px] text-[hsl(var(--landing-muted))] hover:text-[hsl(var(--landing-text))] transition-colors tracking-wide uppercase">{t.navMentor}</Link>
          <a href="#pricing" className="text-[13px] text-[hsl(var(--landing-muted))] hover:text-[hsl(var(--landing-text))] transition-colors tracking-wide uppercase">{t.navPricing}</a>

          <div className="flex items-center gap-0.5 ml-2">
            {supportedLangs.map((l) => (
              <Link
                key={l}
                to={`/${l}`}
                className={`px-2 py-1 text-[11px] font-mono rounded transition-all ${
                  l === lang
                    ? "bg-[hsl(var(--landing-accent))]/15 text-[hsl(var(--landing-accent))]"
                    : "text-[hsl(var(--landing-muted))] hover:text-[hsl(var(--landing-text))]"
                }`}
              >
                {langLabels[l]}
              </Link>
            ))}
          </div>

          <Link
            to={applyUrl}
            className="landing-cta-btn px-5 py-2 rounded-full text-sm font-semibold transition-all"
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
                  l === lang ? "bg-[hsl(var(--landing-accent))]/15 text-[hsl(var(--landing-accent))]" : "text-[hsl(var(--landing-muted))]"
                }`}
              >
                {langLabels[l]}
              </Link>
            ))}
          </div>
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-[hsl(var(--landing-text))] p-1">
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-[hsl(var(--landing-bg))]/95 backdrop-blur-xl border-b border-[hsl(var(--landing-border))] px-6 pb-5 space-y-4">
          <a href="#program" onClick={() => setMenuOpen(false)} className="block text-sm text-[hsl(var(--landing-muted))]">{t.navProgram}</a>
          <Link to={`/${lang}/mentor`} onClick={() => setMenuOpen(false)} className="block text-sm text-[hsl(var(--landing-muted))]">{t.navMentor}</Link>
          <a href="#pricing" onClick={() => setMenuOpen(false)} className="block text-sm text-[hsl(var(--landing-muted))]">{t.navPricing}</a>
          <Link to={applyUrl} className="block landing-cta-btn px-5 py-3 rounded-full text-sm font-semibold text-center">
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
    <div className="landing-wrapper min-h-screen relative overflow-x-hidden">
      <Nav lang={lang} t={t} applyUrl={applyUrl} />

      {/* ═══════════════ HERO ═══════════════ */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Gradient mesh background */}
        <div className="absolute inset-0 pointer-events-none landing-hero-mesh" />
        
        {/* Artistic floating elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <HandDrawnCircle className="absolute top-[15%] right-[10%] w-[180px] h-[180px] text-[hsl(var(--landing-accent))] landing-float-slow" />
          <HandDrawnCircle className="absolute bottom-[20%] left-[5%] w-[120px] h-[120px] text-[hsl(var(--landing-accent-2))] landing-float-medium" />
          <InkSplat className="absolute top-[30%] right-[25%] w-[200px] h-[200px] text-[hsl(var(--landing-accent))]" />
          <InkSplat className="absolute bottom-[15%] right-[15%] w-[150px] h-[150px] text-[hsl(var(--landing-accent-2))]" />
          
          {/* Animated gradient orbs */}
          <div className="absolute top-1/4 left-[15%] w-[400px] h-[400px] rounded-full landing-orb-1" />
          <div className="absolute bottom-1/4 right-[10%] w-[300px] h-[300px] rounded-full landing-orb-2" />
          <div className="absolute top-[60%] left-[50%] w-[250px] h-[250px] rounded-full landing-orb-3" />
        </div>

        <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-10 pt-32 pb-20 w-full">
          {/* Tag */}
          <div className="landing-fade-up mb-8">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[hsl(var(--landing-accent))]/20 bg-[hsl(var(--landing-accent))]/[0.06] text-[hsl(var(--landing-accent))] text-xs font-mono tracking-widest uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-[hsl(var(--landing-accent))] animate-pulse" />
              {t.heroTag}
            </span>
          </div>

          {/* Headline */}
          <div className="relative">
            <h1 className="text-[clamp(2.5rem,7vw,6rem)] leading-[1.05] font-bold text-[hsl(var(--landing-text))] mb-4 whitespace-pre-line font-display landing-fade-up landing-delay-200 max-w-5xl">
              {t.heroTitle}
            </h1>
            <SketchArrow className="absolute -right-4 top-1/2 w-[60px] text-[hsl(var(--landing-accent))] hidden lg:block" />
          </div>

          {/* Artistic underline — brush stroke */}
          <div className="landing-fade-up landing-delay-300 mb-8">
            <BrushStroke className="w-[180px] h-[12px] text-[hsl(var(--landing-accent))] landing-draw-in" />
          </div>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-[hsl(var(--landing-muted))] max-w-2xl leading-relaxed landing-fade-up landing-delay-400 mb-12">
            {t.heroSubtitle}
          </p>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row items-start gap-5 landing-fade-up landing-delay-500 mb-16">
            <Link
              to={applyUrl}
              className="group landing-cta-btn px-8 py-4 rounded-full text-base font-semibold transition-all inline-flex items-center gap-3"
            >
              {t.heroCTA}
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <div className="flex flex-col gap-1 text-sm text-[hsl(var(--landing-muted))]">
              <span className="inline-flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[hsl(var(--landing-accent))] animate-pulse" />
                {t.heroCohort}
              </span>
              <span className="text-[hsl(var(--landing-muted))]/60">{t.heroGroup}</span>
            </div>
          </div>

          {/* Stats strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10 pt-10 border-t border-[hsl(var(--landing-border))]">
            {[
              { end: 7, suffix: "", label: t.statProducts || "Products Built" },
              { end: 2, suffix: "", label: t.statExits || "Successful Exits" },
              { end: 50, suffix: "K+", label: t.statUsers || "Paying Users" },
              { end: 107, suffix: "", label: t.statCountries || "Countries" },
            ].map((stat, i) => (
              <div key={i} className="landing-fade-up" style={{ animationDelay: `${600 + i * 100}ms` }}>
                <StatNumber end={stat.end} suffix={stat.suffix} />
                <p className="text-xs md:text-sm text-[hsl(var(--landing-muted))] mt-2 uppercase tracking-wider font-mono">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ PROBLEM ═══════════════ */}
      <section className="py-24 md:py-40 relative">
        <WavyLine className="absolute top-0 left-0 w-full h-[30px] text-[hsl(var(--landing-accent))]" />
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <Reveal>
            <p className="text-xs font-mono uppercase tracking-[0.3em] text-[hsl(var(--landing-accent))] mb-4">{t.problemTag}</p>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-[hsl(var(--landing-text))] mb-16 md:mb-24 font-display relative inline-block">
              {t.problemTitle}
              <HandDrawnCircle className="absolute -right-8 -top-4 w-[80px] h-[80px] text-[hsl(var(--landing-accent-2))]" />
            </h2>
          </Reveal>

          <div className="space-y-6 md:space-y-8 max-w-4xl">
            {t.problemItems.map((p: string, i: number) => (
              <Reveal key={i} delay={i * 120}>
                <div className="group flex items-start gap-6 py-6 border-b border-[hsl(var(--landing-border))] hover:border-[hsl(var(--landing-accent))]/40 transition-colors">
                  <span className="text-[hsl(var(--landing-accent))]/30 font-mono text-sm mt-1 shrink-0">0{i + 1}</span>
                  <p className="text-xl md:text-2xl lg:text-3xl text-[hsl(var(--landing-text))]/70 group-hover:text-[hsl(var(--landing-text))] transition-colors leading-snug font-light">
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
          {/* Photo */}
          <Reveal className="w-full lg:w-[45%] relative">
            <div className="h-[50vh] lg:h-full lg:absolute lg:inset-0">
              <img
                src={photo}
                alt={t.mentorTitle}
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[hsl(var(--landing-bg))] via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-transparent lg:to-[hsl(var(--landing-bg))]" />
              {/* Artistic overlay */}
              <HandDrawnCircle className="absolute bottom-10 right-10 w-[100px] h-[100px] text-[hsl(var(--landing-accent))] opacity-60" />
            </div>
          </Reveal>

          {/* Bio */}
          <div className="w-full lg:w-[55%] flex items-center">
            <div className="px-6 lg:px-20 py-16 lg:py-24 max-w-2xl">
              <Reveal>
                <p className="text-xs font-mono uppercase tracking-[0.3em] text-[hsl(var(--landing-accent))] mb-4">{t.mentorTag}</p>
              </Reveal>
              <Reveal delay={100}>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[hsl(var(--landing-text))] mb-2 font-display">{t.mentorTitle}</h2>
              </Reveal>
              <Reveal delay={200}>
                <p className="text-base md:text-lg text-[hsl(var(--landing-muted))] italic mb-10">{t.mentorSubtitle}</p>
              </Reveal>

              <div className="space-y-4">
                {t.mentorBio.map((b: string, i: number) => (
                  <Reveal key={i} delay={300 + i * 80}>
                    <div className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-[hsl(var(--landing-accent))] mt-2.5 shrink-0" />
                      <p className="text-sm md:text-base text-[hsl(var(--landing-text))]/80 leading-relaxed">{b}</p>
                    </div>
                  </Reveal>
                ))}
              </div>

              <Reveal delay={900}>
                <Link
                  to={`/${lang}/mentor`}
                  className="inline-flex items-center gap-2 mt-8 text-sm text-[hsl(var(--landing-accent))] font-medium hover:text-[hsl(var(--landing-accent))]/80 transition-colors group"
                >
                  {t.trackTitle}
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════ PROGRAM PHASES — TIMELINE ═══════════════ */}
      <section id="program" className="py-24 md:py-40 border-t border-[hsl(var(--landing-border))] relative">
        <div className="absolute right-[5%] top-[10%] pointer-events-none">
          <InkSplat className="w-[250px] h-[250px] text-[hsl(var(--landing-accent-2))]" />
        </div>
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <Reveal>
            <p className="text-xs font-mono uppercase tracking-[0.3em] text-[hsl(var(--landing-accent))] mb-4">{t.phasesTag}</p>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="text-4xl md:text-6xl font-bold text-[hsl(var(--landing-text))] mb-3 font-display">{t.phasesTitle}</h2>
          </Reveal>
          <Reveal delay={200}>
            <p className="text-base md:text-lg text-[hsl(var(--landing-muted))] mb-20 max-w-3xl">{t.phasesSubtitle}</p>
          </Reveal>

          {/* Timeline */}
          <div className="relative">
            <div className="hidden md:block absolute left-[39px] top-0 bottom-0 w-px bg-gradient-to-b from-[hsl(var(--landing-accent))]/40 via-[hsl(var(--landing-accent))]/20 to-transparent" />

            <div className="space-y-12 md:space-y-20">
              {t.phases.map((phase: any, i: number) => (
                <Reveal key={i} delay={i * 200}>
                  <div className="flex flex-col md:flex-row gap-6 md:gap-12">
                    {/* Node */}
                    <div className="flex items-start gap-4 md:flex-col md:items-center md:w-20 shrink-0">
                      <div className="w-10 h-10 rounded-full border-2 border-[hsl(var(--landing-accent))] bg-[hsl(var(--landing-bg))] flex items-center justify-center z-10 relative">
                        <span className="text-[hsl(var(--landing-accent))] font-mono text-sm font-bold">{i + 1}</span>
                      </div>
                      <span className="text-xs font-mono text-[hsl(var(--landing-accent))]/60 md:mt-2">{phase.weeks}</span>
                    </div>

                    {/* Content */}
                    <div className="landing-card rounded-xl p-6 md:p-10 flex-1 transition-all duration-500">
                      <h3 className="text-2xl md:text-3xl font-bold text-[hsl(var(--landing-text))] mb-6 font-display">{phase.title}</h3>
                      <div className="grid md:grid-cols-2 gap-3 mb-8">
                        {phase.items.map((item: string, j: number) => (
                          <div key={j} className="flex items-start gap-2.5">
                            <ChevronRight size={14} className="text-[hsl(var(--landing-accent))] mt-1 shrink-0" />
                            <p className="text-sm text-[hsl(var(--landing-text))]/80 leading-relaxed">{item}</p>
                          </div>
                        ))}
                      </div>
                      <div className="flex items-center gap-3 pt-5 border-t border-[hsl(var(--landing-border))]">
                        <ArrowRight size={16} className="text-[hsl(var(--landing-accent))]" />
                        <p className="text-sm text-[hsl(var(--landing-accent))] font-semibold">{phase.result}</p>
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
      <section className="py-24 md:py-40 border-t border-[hsl(var(--landing-border))] relative">
        <div className="absolute left-[3%] bottom-[10%] pointer-events-none">
          <HandDrawnCircle className="w-[200px] h-[200px] text-[hsl(var(--landing-accent))] landing-float-slow" />
        </div>
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <Reveal>
            <p className="text-xs font-mono uppercase tracking-[0.3em] text-[hsl(var(--landing-accent))] mb-4">{t.resultsTag}</p>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="text-4xl md:text-6xl font-bold text-[hsl(var(--landing-text))] mb-3 font-display">{t.resultsTitle}</h2>
          </Reveal>
          <Reveal delay={200}>
            <p className="text-base md:text-lg text-[hsl(var(--landing-muted))] mb-16">{t.resultsSubtitle}</p>
          </Reveal>

          {/* Bento grid */}
          <div className="grid grid-cols-1 md:grid-cols-6 gap-4 md:gap-5">
            {t.resultsItems.map((r: any, i: number) => {
              const span = i < 2 ? "md:col-span-3" : "md:col-span-2";
              return (
                <Reveal key={i} delay={i * 100} className={span}>
                  <div className="landing-card rounded-xl p-6 md:p-8 h-full transition-all duration-500 group cursor-default">
                    <span className="landing-stat-number font-mono text-3xl font-bold mb-4 block">0{i + 1}</span>
                    <h3 className="text-lg md:text-xl font-semibold text-[hsl(var(--landing-text))] mb-2">{r.title}</h3>
                    <p className="text-sm text-[hsl(var(--landing-muted))] leading-relaxed">{r.desc}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════ FORMAT — THREE PILLARS ═══════════════ */}
      <section className="py-24 md:py-40 border-t border-[hsl(var(--landing-border))] relative">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <Reveal>
            <p className="text-xs font-mono uppercase tracking-[0.3em] text-[hsl(var(--landing-accent))] mb-4">{t.formatTag}</p>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="text-4xl md:text-6xl font-bold text-[hsl(var(--landing-text))] mb-2 font-display">{t.formatTitle}</h2>
          </Reveal>
          <Reveal delay={200}>
            <p className="text-base md:text-lg text-[hsl(var(--landing-muted))] mb-16">{t.formatSubtitle}</p>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-5">
            {t.formatColumns.map((col: any, i: number) => (
              <Reveal key={i} delay={i * 150}>
                <div className="group rounded-xl p-6 md:p-8 border-t-2 border-[hsl(var(--landing-accent))]/40 landing-card hover:-translate-y-1 transition-all duration-500">
                  <div className="mb-5">
                    <h3 className="text-xl font-bold text-[hsl(var(--landing-text))] mb-1">{col.title}</h3>
                    <span className="text-xs font-mono text-[hsl(var(--landing-accent))]">{col.sub}</span>
                  </div>
                  <div className="space-y-3">
                    {col.items.map((item: string, j: number) => (
                      <div key={j} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-[hsl(var(--landing-accent))]/40 mt-2 shrink-0" />
                        <p className="text-sm text-[hsl(var(--landing-text))]/80 leading-relaxed">{item}</p>
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
      <section id="pricing" className="py-24 md:py-40 border-t border-[hsl(var(--landing-border))] relative">
        <div className="max-w-[1100px] mx-auto px-6 lg:px-10">
          <Reveal>
            <p className="text-xs font-mono uppercase tracking-[0.3em] text-[hsl(var(--landing-accent))] mb-4">{t.pricingTag}</p>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="text-4xl md:text-6xl font-bold text-[hsl(var(--landing-text))] mb-16 font-display">{t.pricingTitle}</h2>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Accelerator */}
            <Reveal delay={200}>
              <div className="landing-card-accent rounded-2xl p-8 md:p-10 h-full relative overflow-hidden">
                <div className="absolute top-4 right-4 pointer-events-none">
                  <HandDrawnCircle className="w-[60px] h-[60px] text-[hsl(var(--landing-accent))]" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-[hsl(var(--landing-text))] mb-1 font-display">{t.accelTitle}</h3>
                <p className="text-sm text-[hsl(var(--landing-muted))] mb-8">{t.accelSub}</p>
                <div className="space-y-3 mb-10">
                  {t.accelItems.map((item: string, i: number) => (
                    <div key={i} className="flex items-start gap-3">
                      <ChevronRight size={14} className="text-[hsl(var(--landing-accent))] mt-1 shrink-0" />
                      <span className="text-sm text-[hsl(var(--landing-text))]/85 leading-relaxed">{item}</span>
                    </div>
                  ))}
                </div>
                <div className="border-t border-[hsl(var(--landing-border))] pt-6 space-y-2">
                  <div className="flex items-baseline gap-3">
                    <span className="text-4xl md:text-5xl font-bold landing-stat-number font-mono">{t.accelPrice}</span>
                    <span className="text-sm text-[hsl(var(--landing-muted))]">{t.accelPriceSub}</span>
                  </div>
                  <div className="flex items-baseline gap-3">
                    <span className="text-2xl md:text-3xl font-bold text-[hsl(var(--landing-text))]/60 font-mono">{t.accelMonthly}</span>
                    <span className="text-sm text-[hsl(var(--landing-muted))]">{t.accelMonthlySub}</span>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Consultation */}
            <Reveal delay={350}>
              <div className="landing-card rounded-2xl p-8 md:p-10 h-full">
                <h3 className="text-2xl md:text-3xl font-bold text-[hsl(var(--landing-text))] mb-1 font-display">{t.consultTitle}</h3>
                <p className="text-sm text-[hsl(var(--landing-muted))] mb-8">{t.consultSub}</p>
                <div className="space-y-3 mb-10">
                  {t.consultItems.map((item: string, i: number) => (
                    <div key={i} className="flex items-start gap-3">
                      <ChevronRight size={14} className="text-[hsl(var(--landing-muted))] mt-1 shrink-0" />
                      <span className="text-sm text-[hsl(var(--landing-text))]/85 leading-relaxed">{item}</span>
                    </div>
                  ))}
                </div>
                <div className="border-t border-[hsl(var(--landing-border))] pt-6">
                  <div className="flex items-baseline gap-3">
                    <span className="text-4xl md:text-5xl font-bold text-[hsl(var(--landing-text))] font-mono">{t.consultPrice}</span>
                    <span className="text-sm text-[hsl(var(--landing-muted))]">{t.consultPriceSub}</span>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ═══════════════ CTA ═══════════════ */}
      <section className="min-h-[70vh] flex items-center justify-center relative overflow-hidden landing-cta-section">
        <div className="absolute inset-0 pointer-events-none">
          <HandDrawnCircle className="absolute top-[10%] left-[10%] w-[150px] h-[150px] text-[hsl(var(--landing-accent))] landing-float-medium" />
          <InkSplat className="absolute bottom-[15%] right-[20%] w-[200px] h-[200px] text-[hsl(var(--landing-accent-2))]" />
          <div className="absolute top-1/3 right-[15%] w-[350px] h-[350px] rounded-full landing-orb-1" />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center py-24">
          <Reveal>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-[hsl(var(--landing-text))] mb-6 font-display">{t.ctaTitle}</h2>
          </Reveal>
          <Reveal delay={100}>
            <p className="text-lg md:text-xl text-[hsl(var(--landing-muted))] mb-10">{t.ctaSubtitle}</p>
          </Reveal>
          <Reveal delay={200}>
            <Link
              to={applyUrl}
              className="group landing-cta-btn px-10 py-4 rounded-full text-lg font-semibold transition-all inline-flex items-center gap-3"
            >
              {t.ctaCTA}
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </Reveal>
          <Reveal delay={300}>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 text-sm text-[hsl(var(--landing-muted))]">
              <span className="inline-flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[hsl(var(--landing-accent))] animate-pulse" />
                {t.ctaCohort}
              </span>
              <span className="hidden sm:inline text-[hsl(var(--landing-border))]">·</span>
              <span className="text-[hsl(var(--landing-muted))]/60">{t.heroGroup}</span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══════════════ FOOTER ═══════════════ */}
      <footer className="border-t border-[hsl(var(--landing-border))] py-8">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="text-xs text-[hsl(var(--landing-muted))]/60">{t.footerRights}</span>
          <div className="flex items-center gap-1">
            {supportedLangs.map((l) => (
              <Link
                key={l}
                to={`/${l}`}
                className={`px-2 py-1 text-[11px] font-mono rounded transition-colors ${
                  l === lang ? "text-[hsl(var(--landing-accent))]" : "text-[hsl(var(--landing-muted))]/60 hover:text-[hsl(var(--landing-text))]"
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
