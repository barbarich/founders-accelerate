import { useLanguage } from "@/i18n/LanguageContext";
import { Link } from "react-router-dom";
import { supportedLangs, langLabels, type Lang } from "@/i18n/translations";
import { useState, useEffect } from "react";

declare global {
  interface Window { fbq?: (...args: any[]) => void; }
}
import { Menu, X, ArrowRight, ChevronRight, ChevronDown, Users, Clock, Shield } from "lucide-react";
import { useInView } from "@/hooks/useInView";

import photo from "@/assets/slides/photo-michael.jpg";

/* ============================
   Helpers
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

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-white/[0.06]">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 md:py-6 text-left group"
      >
        <span className="text-base md:text-lg font-medium text-white/90 pr-4 group-hover:text-[hsl(var(--landing-accent))] transition-colors">{q}</span>
        <ChevronDown
          size={20}
          className={`text-white/30 shrink-0 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
        />
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${open ? "max-h-[300px] pb-5" : "max-h-0"}`}>
        <p className="text-sm md:text-base text-white/50 leading-relaxed pr-8">{a}</p>
      </div>
    </div>
  );
}

/* ============================
   Sticky Mobile CTA
   ============================ */
function StickyMobileCTA({ t, applyUrl }: { t: any; applyUrl: string }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 inset-x-0 z-50 md:hidden bg-black/90 backdrop-blur-xl border-t border-white/[0.06] p-3 safe-bottom">
      <Link
        to={applyUrl}
        className="block landing-cta-btn w-full py-3.5 rounded-full text-sm font-semibold text-center"
      >
        {t.heroCTA} — {t.heroSpotsLeft}
      </Link>
    </div>
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
    <nav className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${scrolled ? "bg-black/80 backdrop-blur-xl border-b border-white/[0.06]" : "bg-transparent"}`}>
      <div className="max-w-[1400px] mx-auto flex items-center justify-between px-6 lg:px-10 py-4">
        <Link to={`/${lang}`} className="font-display font-bold text-white tracking-tight leading-[1.1] text-[13px] md:text-base uppercase">
          <span className="block">The</span>
          <span className="block">Founders</span>
          <span className="block">Circle</span>
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#program" className="text-[13px] text-white/40 hover:text-white transition-colors tracking-wide uppercase">{t.navProgram}</a>
          <Link to={`/${lang}/mentor`} className="text-[13px] text-white/40 hover:text-white transition-colors tracking-wide uppercase">{t.navMentor}</Link>
          <a href="#pricing" className="text-[13px] text-white/40 hover:text-white transition-colors tracking-wide uppercase">{t.navPricing}</a>
          <a href="#faq" className="text-[13px] text-white/40 hover:text-white transition-colors tracking-wide uppercase">FAQ</a>

          <div className="flex items-center gap-0.5 ml-2">
            {supportedLangs.map((l) => (
              <Link
                key={l}
                to={`/${l}`}
                className={`px-2 py-1 text-[11px] font-mono rounded transition-all ${l === lang ? "bg-[hsl(var(--landing-accent))]/15 text-[hsl(var(--landing-accent))]" : "text-white/30 hover:text-white/60"}`}
              >
                {langLabels[l]}
              </Link>
            ))}
          </div>

          <Link to={applyUrl} className="landing-cta-btn px-5 py-2 rounded-full text-sm font-semibold">{t.navApply}</Link>
        </div>

        {/* Mobile */}
        <div className="md:hidden flex items-center gap-3">
          <div className="flex items-center gap-0.5">
            {supportedLangs.map((l) => (
              <Link key={l} to={`/${l}`} className={`px-1.5 py-0.5 text-[10px] font-mono rounded transition-colors ${l === lang ? "bg-[hsl(var(--landing-accent))]/15 text-[hsl(var(--landing-accent))]" : "text-white/30"}`}>
                {langLabels[l]}
              </Link>
            ))}
          </div>
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-white p-1">
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-xl border-b border-white/[0.06] px-6 pb-5 space-y-4">
          <a href="#program" onClick={() => setMenuOpen(false)} className="block text-sm text-white/50">{t.navProgram}</a>
          <Link to={`/${lang}/mentor`} onClick={() => setMenuOpen(false)} className="block text-sm text-white/50">{t.navMentor}</Link>
          <a href="#pricing" onClick={() => setMenuOpen(false)} className="block text-sm text-white/50">{t.navPricing}</a>
          <a href="#faq" onClick={() => setMenuOpen(false)} className="block text-sm text-white/50">FAQ</a>
          <Link to={applyUrl} className="block landing-cta-btn px-5 py-3 rounded-full text-sm font-semibold text-center">{t.navApply}</Link>
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

  useEffect(() => {
    if (window.fbq) {
      window.fbq('track', 'ViewContent', { content_name: 'Landing Page' });
    }
  }, []);

  return (
    <div className="landing-wrapper min-h-screen overflow-x-hidden">
      {/* Background stripes */}
      <div className="landing-stripes" />

      <Nav lang={lang} t={t} applyUrl={applyUrl} />
      <StickyMobileCTA t={t} applyUrl={applyUrl} />

      {/* ═══════════════ HERO ═══════════════ */}
      <section className="landing-content relative min-h-screen flex items-center">
        <div className="max-w-[1400px] mx-auto px-5 md:px-6 lg:px-10 pt-28 md:pt-36 pb-16 md:pb-24 w-full">
          {/* Tag */}
          <div className="landing-fade-up mb-6 md:mb-10">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[hsl(var(--landing-accent))]/20 bg-[hsl(var(--landing-accent))]/[0.08] text-[hsl(var(--landing-accent))] text-[11px] md:text-xs font-mono tracking-widest uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-[hsl(var(--landing-accent))] animate-pulse" />
              {t.heroTag}
            </span>
          </div>

          {/* Headline — BIG and BOLD */}
          <h1 className="text-[2.8rem] md:text-[clamp(4rem,8vw,7rem)] leading-[1.05] font-black text-white mb-6 md:mb-8 whitespace-pre-line max-w-5xl landing-fade-up landing-delay-200">
            {t.heroTitle}
          </h1>

          {/* Subtitle */}
          <p className="text-[15px] md:text-xl text-white/50 max-w-2xl leading-relaxed landing-fade-up landing-delay-300 mb-10 md:mb-14">
            {t.heroSubtitle}
          </p>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row items-start gap-5 landing-fade-up landing-delay-400 mb-6">
            <Link
              to={applyUrl}
              className="group landing-cta-btn px-8 py-4 md:px-12 md:py-5 rounded-full text-base md:text-lg font-bold transition-all inline-flex items-center gap-3"
            >
              {t.heroCTA}
              <ArrowRight size={18} className="md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Urgency signals */}
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-6 text-[13px] md:text-sm landing-fade-up landing-delay-500">
            <span className="inline-flex items-center gap-1.5 text-white/40">
              <Clock size={13} className="text-[hsl(var(--landing-accent))]" />
              {t.heroCohort}
            </span>
            <span className="inline-flex items-center gap-1.5 text-white/40">
              <Users size={13} className="text-[hsl(var(--landing-accent))]" />
              {t.heroGroup}
            </span>
            <span className="inline-flex items-center gap-1.5 font-semibold text-[hsl(var(--landing-accent))]">
              <span className="w-1.5 h-1.5 rounded-full bg-[hsl(var(--landing-accent))] animate-pulse" />
              {t.heroSpotsLeft}
            </span>
          </div>
        </div>
      </section>

      {/* ═══════════════ PROBLEM ═══════════════ */}
      <section className="landing-content py-20 md:py-40">
        <div className="max-w-[1400px] mx-auto px-5 md:px-6 lg:px-10">
          <Reveal>
            <p className="text-[10px] md:text-xs font-mono uppercase tracking-[0.3em] text-[hsl(var(--landing-accent))] mb-3 md:mb-4">{t.problemTag}</p>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="text-[1.75rem] md:text-6xl lg:text-7xl font-black text-white mb-6 md:mb-10 leading-tight">{t.problemTitle}</h2>
          </Reveal>
          {t.problemIntro && (
            <Reveal delay={150}>
              <p className="text-[15px] md:text-xl text-white/50 max-w-3xl leading-relaxed mb-10 md:mb-20">{t.problemIntro}</p>
            </Reveal>
          )}

          <div className="max-w-4xl">
            {t.problemItems.map((p: string, i: number) => (
              <Reveal key={i} delay={i * 100}>
                <div className="group flex items-start gap-4 md:gap-6 py-5 md:py-7 border-b border-white/[0.06] hover:border-[hsl(var(--landing-accent))]/30 transition-colors">
                  <span className="text-[hsl(var(--landing-accent))]/40 font-mono text-[11px] md:text-sm mt-0.5 shrink-0 w-5">0{i + 1}</span>
                  <p className="text-base md:text-2xl lg:text-3xl text-white/60 group-hover:text-white/90 transition-colors leading-snug font-light">
                    "{p}"
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
          {t.problemOutro && (
            <Reveal delay={600}>
              <p className="text-base md:text-xl text-[hsl(var(--landing-accent))] font-medium mt-10 md:mt-16">{t.problemOutro}</p>
            </Reveal>
          )}
        </div>
      </section>

      {/* ═══════════════ WHO IS THIS FOR ═══════════════ */}
      <section className="landing-content py-20 md:py-40 border-t border-white/[0.06]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <Reveal>
            <p className="text-xs font-mono uppercase tracking-[0.3em] text-[hsl(var(--landing-accent))] mb-4">{t.whoTag}</p>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="text-4xl md:text-6xl font-black text-white mb-4">{t.whoTitle}</h2>
          </Reveal>
          {t.whoIntro && (
            <Reveal delay={150}>
              <p className="text-[15px] md:text-lg text-white/50 max-w-3xl leading-relaxed mb-16">{t.whoIntro}</p>
            </Reveal>
          )}

          <div className="grid md:grid-cols-2 gap-5">
            {t.whoItems.map((item: any, i: number) => (
              <Reveal key={i} delay={i * 120}>
                <div className="landing-card rounded-xl p-6 md:p-8 h-full group hover:-translate-y-1 transition-all duration-500">
                  <div className="w-10 h-10 rounded-full bg-[hsl(var(--landing-accent))]/10 flex items-center justify-center mb-5">
                    <span className="text-[hsl(var(--landing-accent))] font-mono text-sm font-bold">{i + 1}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-sm text-white/40 leading-relaxed">{item.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ MID CTA ═══════════════ */}
      <div className="landing-content py-16 md:py-20 bg-[hsl(var(--landing-accent))]/[0.04] border-y border-white/[0.06]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-lg md:text-xl font-semibold text-white">{t.midCTA}</p>
            <p className="text-sm text-white/40 mt-1">{t.midCTASub}</p>
          </div>
          <Link to={applyUrl} className="group landing-cta-btn px-8 py-3.5 rounded-full text-sm font-semibold inline-flex items-center gap-2 shrink-0">
            {t.heroCTA}
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>

      {/* ═══════════════ MENTOR ═══════════════ */}
      <section className="landing-content py-0 relative overflow-hidden">
        <div className="flex flex-col lg:flex-row min-h-[80vh]">
          <Reveal className="w-full lg:w-[45%] relative">
            <div className="h-[60vh] lg:h-full lg:absolute lg:inset-0">
              <img src={photo} alt={t.mentorTitle} className="w-full h-full object-cover object-top" />
              {/* Bottom fade */}
              <div className="absolute inset-0 bg-gradient-to-t from-[hsl(var(--landing-bg))] via-[hsl(var(--landing-bg)/0.3)] to-transparent" style={{ top: '40%' }} />
              {/* Top fade */}
              <div className="absolute inset-0 bg-gradient-to-b from-[hsl(var(--landing-bg))] to-transparent" style={{ bottom: '70%' }} />
              {/* Left fade */}
              <div className="absolute inset-0 bg-gradient-to-r from-[hsl(var(--landing-bg))] to-transparent" style={{ right: '70%' }} />
              {/* Right fade */}
              <div className="absolute inset-0 bg-gradient-to-l from-[hsl(var(--landing-bg))] to-transparent" style={{ left: '70%' }} />
              {/* Desktop: stronger right fade for text area */}
              <div className="hidden lg:block absolute inset-0 bg-gradient-to-r from-transparent via-[hsl(var(--landing-bg)/0.4)] to-[hsl(var(--landing-bg))]" style={{ left: '30%' }} />
            </div>
          </Reveal>

          <div className="w-full lg:w-[55%] flex items-center">
            <div className="px-6 lg:px-20 py-16 lg:py-24 max-w-2xl">
              <Reveal>
                <p className="text-xs font-mono uppercase tracking-[0.3em] text-[hsl(var(--landing-accent))] mb-4">{t.mentorTag}</p>
              </Reveal>
              <Reveal delay={100}>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-2">{t.mentorTitle}</h2>
              </Reveal>
              <Reveal delay={200}>
                <p className="text-base md:text-lg text-white/40 italic mb-10">{t.mentorSubtitle}</p>
              </Reveal>

              <div className="space-y-4">
                {t.mentorBio.map((b: string, i: number) => (
                  <Reveal key={i} delay={300 + i * 80}>
                    <div className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-[hsl(var(--landing-accent))] mt-2.5 shrink-0" />
                      <p className="text-sm md:text-base text-white/70 leading-relaxed">{b}</p>
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

      {/* ═══════════════ PROGRAM PHASES ═══════════════ */}
      <section id="program" className="landing-content py-24 md:py-40 border-t border-white/[0.06]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <Reveal>
            <p className="text-xs font-mono uppercase tracking-[0.3em] text-[hsl(var(--landing-accent))] mb-4">{t.phasesTag}</p>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="text-4xl md:text-6xl font-black text-white mb-3">{t.phasesTitle}</h2>
          </Reveal>
          <Reveal delay={200}>
            <p className="text-base md:text-lg text-white/40 mb-20 max-w-3xl">{t.phasesSubtitle}</p>
          </Reveal>

          <div className="relative">
            <div className="hidden md:block absolute left-[39px] top-0 bottom-0 w-px bg-gradient-to-b from-[hsl(var(--landing-accent))]/40 via-[hsl(var(--landing-accent))]/20 to-transparent" />

            <div className="space-y-12 md:space-y-20">
              {t.phases.map((phase: any, i: number) => (
                <Reveal key={i} delay={i * 200}>
                  <div className="flex flex-col md:flex-row gap-6 md:gap-12">
                    <div className="flex items-start gap-4 md:flex-col md:items-center md:w-20 shrink-0">
                      <div className="w-10 h-10 rounded-full border-2 border-[hsl(var(--landing-accent))] bg-[hsl(var(--landing-bg))] flex items-center justify-center z-10 relative">
                        <span className="text-[hsl(var(--landing-accent))] font-mono text-sm font-bold">{i + 1}</span>
                      </div>
                      <span className="text-xs font-mono text-[hsl(var(--landing-accent))]/60 md:mt-2">{phase.weeks}</span>
                    </div>

                    <div className="landing-card rounded-xl p-6 md:p-10 flex-1">
                      <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">{phase.title}</h3>
                      <div className="grid md:grid-cols-2 gap-3 mb-8">
                        {phase.items.map((item: string, j: number) => (
                          <div key={j} className="flex items-start gap-2.5">
                            <ChevronRight size={14} className="text-[hsl(var(--landing-accent))] mt-1 shrink-0" />
                            <p className="text-sm text-white/70 leading-relaxed">{item}</p>
                          </div>
                        ))}
                      </div>
                      <div className="flex items-center gap-3 pt-5 border-t border-white/[0.06]">
                        <ArrowRight size={16} className="text-[hsl(var(--landing-accent))]" />
                        <p className="text-sm text-[hsl(var(--landing-accent))] font-semibold">{phase.result}</p>
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Full curriculum CTA */}
          <Reveal delay={400}>
            <div className="mt-16 md:mt-24 text-center">
              <p className="text-base md:text-lg text-white/40 mb-6 max-w-2xl mx-auto">{t.phasesCurriculumDesc}</p>
              <Link
                to="/program"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full border-2 border-[hsl(var(--landing-accent))] text-[hsl(var(--landing-accent))] font-semibold text-base hover:bg-[hsl(var(--landing-accent))] hover:text-black transition-all duration-300 group"
              >
                {t.phasesCurriculumCTA}
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══════════════ OUTCOMES ═══════════════ */}
      <section className="landing-content py-24 md:py-40 border-t border-white/[0.06]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <Reveal>
            <p className="text-xs font-mono uppercase tracking-[0.3em] text-[hsl(var(--landing-accent))] mb-4">{t.resultsTag}</p>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="text-4xl md:text-6xl font-black text-white mb-3">{t.resultsTitle}</h2>
          </Reveal>
          <Reveal delay={200}>
            <p className="text-base md:text-lg text-white/40 mb-16">{t.resultsSubtitle}</p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-6 gap-4 md:gap-5">
            {t.resultsItems.map((r: any, i: number) => {
              const span = i < 2 ? "md:col-span-3" : "md:col-span-2";
              return (
                <Reveal key={i} delay={i * 100} className={span}>
                  <div className="landing-card rounded-xl p-6 md:p-8 h-full cursor-default">
                    <span className="landing-stat-number font-mono text-3xl font-bold mb-4 block">0{i + 1}</span>
                    <h3 className="text-lg md:text-xl font-semibold text-white mb-2">{r.title}</h3>
                    <p className="text-sm text-white/40 leading-relaxed">{r.desc}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════ MID CTA #2 ═══════════════ */}
      <div className="landing-content py-16 md:py-20 bg-[hsl(var(--landing-accent))]/[0.04] border-y border-white/[0.06]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-lg md:text-xl font-semibold text-white">{t.midCTA}</p>
            <p className="text-sm text-white/40 mt-1">{t.midCTASub}</p>
          </div>
          <Link to={applyUrl} className="group landing-cta-btn px-8 py-3.5 rounded-full text-sm font-semibold inline-flex items-center gap-2 shrink-0">
            {t.heroCTA}
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>

      {/* ═══════════════ FORMAT ═══════════════ */}
      <section className="landing-content py-24 md:py-40">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <Reveal>
            <p className="text-xs font-mono uppercase tracking-[0.3em] text-[hsl(var(--landing-accent))] mb-4">{t.formatTag}</p>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="text-4xl md:text-6xl font-black text-white mb-2">{t.formatTitle}</h2>
          </Reveal>
          <Reveal delay={200}>
            <p className="text-base md:text-lg text-white/40 mb-16">{t.formatSubtitle}</p>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-5">
            {t.formatColumns.map((col: any, i: number) => (
              <Reveal key={i} delay={i * 150}>
                <div className="landing-card rounded-xl p-6 md:p-8 border-t-2 border-[hsl(var(--landing-accent))]/30 hover:-translate-y-1 transition-all duration-500">
                  <div className="mb-5">
                    <h3 className="text-xl font-bold text-white mb-1">{col.title}</h3>
                    <span className="text-xs font-mono text-[hsl(var(--landing-accent))]">{col.sub}</span>
                  </div>
                  <div className="space-y-3">
                    {col.items.map((item: string, j: number) => (
                      <div key={j} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-[hsl(var(--landing-accent))]/40 mt-2 shrink-0" />
                        <p className="text-sm text-white/70 leading-relaxed">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ FINAL CTA ═══════════════ */}
      <section className="landing-content min-h-[70vh] flex items-center justify-center relative overflow-hidden landing-cta-section">
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center py-24">
          <Reveal>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-6">{t.ctaTitle}</h2>
          </Reveal>
          <Reveal delay={100}>
            <p className="text-lg md:text-xl text-white/40 mb-4">{t.ctaSubtitle}</p>
          </Reveal>
          <Reveal delay={150}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm text-white/40 mb-10">
              <span className="inline-flex items-center gap-2">
                <Clock size={14} className="text-[hsl(var(--landing-accent))]" />
                {t.ctaCohort}
              </span>
              <span className="hidden sm:inline text-white/10">·</span>
              <span className="inline-flex items-center gap-2 font-semibold text-[hsl(var(--landing-accent))]">
                <span className="w-2 h-2 rounded-full bg-[hsl(var(--landing-accent))] animate-pulse" />
                {t.heroSpotsLeft}
              </span>
            </div>
          </Reveal>
          <Reveal delay={200}>
            <Link
              to={applyUrl}
              className="group landing-cta-btn px-10 py-4 rounded-full text-lg font-bold transition-all inline-flex items-center gap-3"
            >
              {t.ctaCTA}
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ═══════════════ TESTIMONIALS ═══════════════ */}
      <section className="landing-content py-24 md:py-40 border-t border-white/[0.06]">
        <div className="max-w-[1100px] mx-auto px-6 lg:px-10">
          <Reveal>
            <p className="text-xs font-mono uppercase tracking-[0.3em] text-[hsl(var(--landing-accent))] mb-4">{t.testimonialsTag}</p>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="text-4xl md:text-6xl font-black text-white mb-16">{t.testimonialsTitle}</h2>
          </Reveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {t.testimonials.map((item: any, i: number) => (
              <Reveal key={i} delay={i * 80}>
                <div className="landing-card rounded-xl p-6 md:p-8 h-full flex flex-col justify-between">
                  <div>
                    <svg viewBox="0 0 24 24" className="w-6 h-6 mb-4 text-[hsl(var(--landing-accent))] opacity-30" fill="currentColor">
                      <path d="M11 7.05C7.26 7.56 4.5 10.59 4.5 14.24V17h5V12H6.83c.46-2.47 2.34-4.35 4.17-4.95V7.05zM19.5 7.05c-3.74.51-6.5 3.54-6.5 7.19V17h5V12h-2.67c.46-2.47 2.34-4.35 4.17-4.95V7.05z"/>
                    </svg>
                    <p className="text-[15px] md:text-base leading-[1.75] text-white/70 mb-6">{item.text}</p>
                  </div>
                  <div className="pt-4 border-t border-white/[0.06]">
                    <p className="text-sm font-semibold text-white">{item.name}</p>
                    <p className="text-xs text-white/30 mt-0.5">{item.role}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ PRICING ═══════════════ */}
      <section id="pricing" className="landing-content py-24 md:py-40 border-t border-white/[0.06]">
        <div className="max-w-[1100px] mx-auto px-6 lg:px-10">
          <Reveal>
            <p className="text-xs font-mono uppercase tracking-[0.3em] text-[hsl(var(--landing-accent))] mb-4">{t.pricingTag}</p>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="text-4xl md:text-6xl font-black text-white mb-4">{t.pricingTitle}</h2>
          </Reveal>
          {t.pricingIntro && (
            <Reveal delay={150}>
              <p className="text-[15px] md:text-lg text-white/50 max-w-3xl leading-relaxed mb-16">{t.pricingIntro}</p>
            </Reveal>
          )}

          <div className="grid md:grid-cols-2 gap-6">
            {/* Accelerator */}
            <Reveal delay={200}>
              <div className="landing-card-accent rounded-2xl p-8 md:p-10 h-full relative overflow-hidden">
                <div className="flex items-center justify-between mb-1">
                  <h3 className="text-2xl md:text-3xl font-bold text-white">{t.accelTitle}</h3>
                </div>
                <div className="mb-1">
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-[hsl(var(--landing-accent))] text-black text-[8px] md:text-[9px] font-semibold uppercase tracking-wider">
                    <span className="w-1 h-1 rounded-full bg-black animate-pulse" />
                    {t.heroSpotsLeft}
                  </span>
                </div>
                <p className="text-sm text-white/40 mb-8">{t.accelSub}</p>
                <div className="space-y-3 mb-10">
                  {t.accelItems.map((item: string, i: number) => (
                    <div key={i} className="flex items-start gap-3">
                      <ChevronRight size={14} className="text-[hsl(var(--landing-accent))] mt-1 shrink-0" />
                      <span className="text-sm text-white/80 leading-relaxed">{item}</span>
                    </div>
                  ))}
                </div>
                <div className="border-t border-white/[0.08] pt-6 space-y-2 mb-8">
                  <div className="flex items-baseline gap-3">
                    <span className="text-4xl md:text-5xl font-bold landing-stat-number font-mono">{t.accelPrice}</span>
                    <span className="text-sm text-white/40">{t.accelPriceSub}</span>
                  </div>
                  <div className="flex items-baseline gap-3">
                    <span className="text-2xl md:text-3xl font-bold text-white/50 font-mono">{t.accelMonthly}</span>
                    <span className="text-sm text-white/40">{t.accelMonthlySub}</span>
                  </div>
                </div>
                <Link to={applyUrl} className="group landing-cta-btn w-full py-3.5 rounded-full text-sm font-semibold inline-flex items-center justify-center gap-2">
                  {t.heroCTA}
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </Reveal>

            {/* Consultation */}
            <Reveal delay={350}>
              <div className="landing-card rounded-2xl p-8 md:p-10 h-full flex flex-col">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-1">{t.consultTitle}</h3>
                <p className="text-sm text-white/40 mb-8">{t.consultSub}</p>
                <div className="space-y-3 mb-10 flex-1">
                  {t.consultItems.map((item: string, i: number) => (
                    <div key={i} className="flex items-start gap-3">
                      <ChevronRight size={14} className="text-white/30 mt-1 shrink-0" />
                      <span className="text-sm text-white/70 leading-relaxed">{item}</span>
                    </div>
                  ))}
                </div>
                <div className="border-t border-white/[0.08] pt-6 mb-8">
                  <div className="flex items-baseline gap-3">
                    <span className="text-4xl md:text-5xl font-bold text-white font-mono">{t.consultPrice}</span>
                    <span className="text-sm text-white/40">{t.consultPriceSub}</span>
                  </div>
                </div>
                <Link to={applyUrl} className="group w-full py-3.5 rounded-full text-sm font-semibold border-2 border-[hsl(var(--landing-accent))]/30 text-[hsl(var(--landing-accent))] hover:border-[hsl(var(--landing-accent))] hover:bg-[hsl(var(--landing-accent))] hover:text-black transition-all inline-flex items-center justify-center gap-2">
                  {t.heroCTA}
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </Reveal>
          </div>

          {/* Guarantee */}
          <Reveal delay={400}>
            <div className="mt-8 flex items-center justify-center gap-3 text-sm text-white/40">
              <Shield size={16} className="text-[hsl(var(--landing-accent))]" />
              <span>{t.faqItems[t.faqItems.length - 1]?.a}</span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══════════════ FAQ ═══════════════ */}
      <section id="faq" className="landing-content py-24 md:py-40 border-t border-white/[0.06]">
        <div className="max-w-[800px] mx-auto px-6 lg:px-10">
          <Reveal>
            <p className="text-xs font-mono uppercase tracking-[0.3em] text-[hsl(var(--landing-accent))] mb-4">{t.faqTag}</p>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-12">{t.faqTitle}</h2>
          </Reveal>

          <div>
            {t.faqItems.map((faq: any, i: number) => (
              <Reveal key={i} delay={i * 80}>
                <FAQItem q={faq.q} a={faq.a} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <footer className="landing-content border-t border-white/[0.06] py-8 pb-24 md:pb-8">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="text-xs text-white/20">{t.footerRights}</span>
          <div className="flex items-center gap-1">
            {supportedLangs.map((l) => (
              <Link key={l} to={`/${l}`} className={`px-2 py-1 text-[11px] font-mono rounded transition-colors ${l === lang ? "text-[hsl(var(--landing-accent))]" : "text-white/20 hover:text-white/50"}`}>
                {langLabels[l]}
              </Link>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
