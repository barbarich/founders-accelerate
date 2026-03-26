import { useLanguage } from "@/i18n/LanguageContext";
import { Link } from "react-router-dom";
import { supportedLangs, langLabels, type Lang } from "@/i18n/translations";
import { useState, useEffect, useRef } from "react";
import { Menu, X, ArrowRight, ChevronRight, ChevronDown, Users, Clock, Shield } from "lucide-react";
import { useInView, useCountUp } from "@/hooks/useInView";

import photo from "@/assets/slides/photo-michael.jpg";

/* ============================
   Decorative elements (minimal)
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

function SketchRocket({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 80 120" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Rocket body — pointing UP */}
      <path d="M40 8C38 18 32 32 28 42C26 46 28 50 32 50L40 48L48 50C52 50 54 46 52 42C48 32 42 18 40 8Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.5"/>
      {/* Fins */}
      <path d="M32 50L27 60L36 54" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.4"/>
      <path d="M48 50L53 60L44 54" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.4"/>
      {/* Window */}
      <circle cx="40" cy="30" r="4.5" stroke="currentColor" strokeWidth="1.2" opacity="0.35"/>
      {/* Flame — animated */}
      <path d="M36 62C37 70 39 78 40 82C41 78 43 70 44 62" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.5">
        <animate attributeName="d" values="M36 62C37 70 39 78 40 82C41 78 43 70 44 62;M35 62C36 74 39 84 40 90C41 84 44 74 45 62;M36 62C37 70 39 78 40 82C41 78 43 70 44 62" dur="0.6s" repeatCount="indefinite"/>
      </path>
      <path d="M38 62C38.5 68 39.5 74 40 76C40.5 74 41.5 68 42 62" stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.3">
        <animate attributeName="d" values="M38 62C38.5 68 39.5 74 40 76C40.5 74 41.5 68 42 62;M37.5 62C38 72 39.5 80 40 84C40.5 80 42 72 42.5 62;M38 62C38.5 68 39.5 74 40 76C40.5 74 41.5 68 42 62" dur="0.45s" repeatCount="indefinite"/>
      </path>
      {/* Spark particles */}
      <circle cx="38" cy="85" r="1" fill="currentColor" opacity="0.25">
        <animate attributeName="cy" values="85;100;85" dur="0.8s" repeatCount="indefinite"/>
        <animate attributeName="opacity" values="0.3;0;0.3" dur="0.8s" repeatCount="indefinite"/>
      </circle>
      <circle cx="42" cy="88" r="0.8" fill="currentColor" opacity="0.2">
        <animate attributeName="cy" values="88;105;88" dur="0.7s" repeatCount="indefinite"/>
        <animate attributeName="opacity" values="0.25;0;0.25" dur="0.7s" repeatCount="indefinite"/>
      </circle>
    </svg>
  );
}

function SketchTrophy({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 70 70" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M22 18H48V28C48 38 42 44 35 44C28 44 22 38 22 28V18Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.4"/>
      <path d="M22 22C18 22 14 26 14 30C14 34 18 36 22 34" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" opacity="0.3"/>
      <path d="M48 22C52 22 56 26 56 30C56 34 52 36 48 34" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" opacity="0.3"/>
      <path d="M35 44V52" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.35"/>
      <path d="M26 52H44" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.35"/>
    </svg>
  );
}

function SketchChart({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 70 60" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 48H58" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" opacity="0.3"/>
      <path d="M12 48V12" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" opacity="0.3"/>
      <path d="M14 44C20 42 26 38 32 30C38 22 44 16 50 14C54 13 56 12 58 10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" opacity="0.4"/>
      <circle cx="32" cy="30" r="2" fill="currentColor" opacity="0.25"/>
      <circle cx="50" cy="14" r="2" fill="currentColor" opacity="0.25"/>
    </svg>
  );
}


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
   Intermediate CTA Banner
   ============================ */
function MidCTA({ t, applyUrl }: { t: any; applyUrl: string }) {
  return (
    <div className="py-16 md:py-20 bg-[hsl(var(--landing-accent))]/[0.04] border-y border-[hsl(var(--landing-accent))]/10">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <p className="text-lg md:text-xl font-semibold text-[hsl(var(--landing-text))]">{t.midCTA}</p>
          <p className="text-sm text-[hsl(var(--landing-muted))] mt-1">{t.midCTASub}</p>
        </div>
        <Link
          to={applyUrl}
          className="group landing-cta-btn px-8 py-3.5 rounded-full text-sm font-semibold transition-all inline-flex items-center gap-2 shrink-0"
        >
          {t.heroCTA}
          <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
        </Link>
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
    <div className="fixed bottom-0 inset-x-0 z-50 md:hidden bg-[hsl(var(--landing-bg))]/95 backdrop-blur-xl border-t border-[hsl(var(--landing-border))] p-3 safe-bottom">
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
   FAQ Accordion
   ============================ */
function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-[hsl(var(--landing-border))]">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 md:py-6 text-left group"
      >
        <span className="text-base md:text-lg font-medium text-[hsl(var(--landing-text))] pr-4 group-hover:text-[hsl(var(--landing-accent))] transition-colors">{q}</span>
        <ChevronDown
          size={20}
          className={`text-[hsl(var(--landing-muted))] shrink-0 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${open ? "max-h-[300px] pb-5" : "max-h-0"}`}
      >
        <p className="text-sm md:text-base text-[hsl(var(--landing-muted))] leading-relaxed pr-8">{a}</p>
      </div>
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
          <a href="#faq" className="text-[13px] text-[hsl(var(--landing-muted))] hover:text-[hsl(var(--landing-text))] transition-colors tracking-wide uppercase">FAQ</a>

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
          <a href="#faq" onClick={() => setMenuOpen(false)} className="block text-sm text-[hsl(var(--landing-muted))]">FAQ</a>
          <Link to={applyUrl} className="block landing-cta-btn px-5 py-3 rounded-full text-sm font-semibold text-center">
            {t.navApply}
          </Link>
        </div>
      )}
    </nav>
  );
}

/* ============================
   LANDING PAGE — Full Sales Funnel
   ============================ */
export default function Landing() {
  const { lang, t } = useLanguage();
  const applyUrl = `/${lang}/apply`;

  const rocketRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!rocketRef.current) return;
      const scrollY = window.scrollY;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const progress = Math.min(scrollY / maxScroll, 1);
      // Rocket flies upward: starts at bottom (85vh), rises to top (5vh)
      const bottomStart = 85;
      const topEnd = 5;
      const topPercent = bottomStart - progress * (bottomStart - topEnd);
      // Slight tilt as it accelerates
      const rotate = -10 * progress;
      // Grows slightly more visible and slightly bigger as it rises
      const scale = 1 + progress * 0.15;
      const opacity = 0.4 + progress * 0.4;
      rocketRef.current.style.top = `${topPercent}vh`;
      rocketRef.current.style.transform = `rotate(${rotate}deg) scale(${scale})`;
      rocketRef.current.style.opacity = `${opacity}`;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="landing-wrapper min-h-screen relative overflow-x-hidden">
      <Nav lang={lang} t={t} applyUrl={applyUrl} />
      <StickyMobileCTA t={t} applyUrl={applyUrl} />

      {/* Fixed scroll-following rocket — flies UP as you scroll */}
      <div
        ref={rocketRef}
        className="fixed right-[4%] z-20 pointer-events-none hidden lg:block"
        style={{ top: "85vh", transition: "none" }}
      >
        <SketchRocket className="w-[160px] h-[200px] text-[hsl(var(--landing-accent))]" />
      </div>

      {/* ═══════════════ HERO ═══════════════ */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 pointer-events-none landing-hero-mesh" />
        
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          
          <div className="absolute top-1/4 left-[15%] w-[400px] h-[400px] rounded-full landing-orb-1" />
          <div className="absolute bottom-1/4 right-[10%] w-[300px] h-[300px] rounded-full landing-orb-2" />
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
          <h1 className="text-[clamp(2.5rem,7vw,6rem)] leading-[1.05] font-bold text-[hsl(var(--landing-text))] mb-4 whitespace-pre-line font-display landing-fade-up landing-delay-200 max-w-5xl">
            {t.heroTitle}
          </h1>

          {/* Brush stroke */}
          <div className="landing-fade-up landing-delay-300 mb-8">
            <BrushStroke className="w-[180px] h-[12px] text-[hsl(var(--landing-accent))] landing-draw-in" />
          </div>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-[hsl(var(--landing-muted))] max-w-2xl leading-relaxed landing-fade-up landing-delay-400 mb-10">
            {t.heroSubtitle}
          </p>

          {/* CTA + urgency */}
          <div className="flex flex-col sm:flex-row items-start gap-5 landing-fade-up landing-delay-500 mb-6">
            <Link
              to={applyUrl}
              className="group landing-cta-btn px-8 py-4 rounded-full text-base font-semibold transition-all inline-flex items-center gap-3"
            >
              {t.heroCTA}
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Urgency signals */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-6 text-sm landing-fade-up landing-delay-500 mb-16">
            <span className="inline-flex items-center gap-2 text-[hsl(var(--landing-muted))]">
              <Clock size={14} className="text-[hsl(var(--landing-accent))]" />
              {t.heroCohort}
            </span>
            <span className="inline-flex items-center gap-2 text-[hsl(var(--landing-muted))]">
              <Users size={14} className="text-[hsl(var(--landing-accent))]" />
              {t.heroGroup}
            </span>
            <span className="inline-flex items-center gap-2 font-semibold text-[hsl(var(--landing-accent))]">
              <span className="w-2 h-2 rounded-full bg-[hsl(var(--landing-accent))] animate-pulse" />
              {t.heroSpotsLeft}
            </span>
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
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-[hsl(var(--landing-text))] mb-16 md:mb-24 font-display">{t.problemTitle}</h2>
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

      {/* ═══════════════ WHO IS THIS FOR ═══════════════ */}
      <section className="py-24 md:py-40 border-t border-[hsl(var(--landing-border))]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <Reveal>
            <p className="text-xs font-mono uppercase tracking-[0.3em] text-[hsl(var(--landing-accent))] mb-4">{t.whoTag}</p>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="text-4xl md:text-6xl font-bold text-[hsl(var(--landing-text))] mb-16 font-display">{t.whoTitle}</h2>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-5">
            {t.whoItems.map((item: any, i: number) => (
              <Reveal key={i} delay={i * 120}>
                <div className="landing-card rounded-xl p-6 md:p-8 h-full group hover:-translate-y-1 transition-all duration-500">
                  <div className="w-10 h-10 rounded-full bg-[hsl(var(--landing-accent))]/10 flex items-center justify-center mb-5">
                    <span className="text-[hsl(var(--landing-accent))] font-mono text-sm font-bold">{i + 1}</span>
                  </div>
                  <h3 className="text-xl font-bold text-[hsl(var(--landing-text))] mb-2">{item.title}</h3>
                  <p className="text-sm text-[hsl(var(--landing-muted))] leading-relaxed">{item.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ MID CTA #1 ═══════════════ */}
      <MidCTA t={t} applyUrl={applyUrl} />

      {/* ═══════════════ MENTOR ═══════════════ */}
      <section id="mentor" className="py-0 relative overflow-hidden">
        <div className="flex flex-col lg:flex-row min-h-[80vh]">
          <Reveal className="w-full lg:w-[45%] relative">
            <div className="h-[50vh] lg:h-full lg:absolute lg:inset-0">
              <img
                src={photo}
                alt={t.mentorTitle}
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[hsl(var(--landing-bg))] via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-transparent lg:to-[hsl(var(--landing-bg))]" />
            </div>
          </Reveal>

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
        <div className="absolute right-[3%] top-[5%] pointer-events-none hidden lg:block">
          <SketchChart className="w-[110px] h-[110px] text-[hsl(var(--landing-accent))] landing-float-slow landing-sketch-draw" />
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

          {/* Full curriculum CTA */}
          <Reveal delay={400}>
            <div className="mt-16 md:mt-24 text-center">
              <p className="text-base md:text-lg text-[hsl(var(--landing-muted))] mb-6 max-w-2xl mx-auto">
                {t.phasesCurriculumDesc}
              </p>
              <Link
                to="/program"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full border-2 border-[hsl(var(--landing-accent))] text-[hsl(var(--landing-accent))] font-semibold text-base hover:bg-[hsl(var(--landing-accent))] hover:text-[hsl(var(--landing-bg))] transition-all duration-300 group"
              >
                {t.phasesCurriculumCTA}
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══════════════ OUTCOMES — BENTO GRID ═══════════════ */}
      <section className="py-24 md:py-40 border-t border-[hsl(var(--landing-border))] relative">
        <div className="absolute right-[3%] top-[8%] pointer-events-none hidden lg:block">
          <SketchTrophy className="w-[110px] h-[110px] text-[hsl(var(--landing-accent))] landing-float-slow landing-sketch-draw" />
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

      {/* ═══════════════ MID CTA #2 ═══════════════ */}
      <MidCTA t={t} applyUrl={applyUrl} />

      {/* ═══════════════ FORMAT — THREE PILLARS ═══════════════ */}
      <section className="py-24 md:py-40 relative">
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

      {/* ═══════════════ TESTIMONIALS ═══════════════ */}
      <section className="py-24 md:py-40 border-t border-[hsl(var(--landing-border))]">
        <div className="max-w-[1100px] mx-auto px-6 lg:px-10">
          <Reveal>
            <p className="text-xs font-mono uppercase tracking-[0.3em] text-[hsl(var(--landing-accent))] mb-4">{t.testimonialsTag}</p>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="text-4xl md:text-6xl font-bold text-[hsl(var(--landing-text))] mb-16 font-display">{t.testimonialsTitle}</h2>
          </Reveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {t.testimonials.map((item: any, i: number) => (
              <Reveal key={i} delay={i * 80}>
                <div
                  className={`landing-card rounded-xl p-6 md:p-8 h-full flex flex-col justify-between ${i === 0 ? "lg:col-span-1 lg:row-span-2" : ""}`}
                >
                  <div>
                    <svg viewBox="0 0 24 24" className="w-6 h-6 mb-4 opacity-20" fill="currentColor" style={{ color: "hsl(var(--landing-accent))" }}>
                      <path d="M11 7.05C7.26 7.56 4.5 10.59 4.5 14.24V17h5V12H6.83c.46-2.47 2.34-4.35 4.17-4.95V7.05zM19.5 7.05c-3.74.51-6.5 3.54-6.5 7.19V17h5V12h-2.67c.46-2.47 2.34-4.35 4.17-4.95V7.05z"/>
                    </svg>
                    <p className="text-[15px] md:text-base leading-[1.75] text-[hsl(var(--landing-text))]/80 mb-6">{item.text}</p>
                  </div>
                  <div className="pt-4 border-t border-[hsl(var(--landing-border))]">
                    <p className="text-sm font-semibold text-[hsl(var(--landing-text))]">{item.name}</p>
                    <p className="text-xs text-[hsl(var(--landing-muted))] mt-0.5">{item.role}</p>
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
            {/* Accelerator — featured */}
            <Reveal delay={200}>
              <div className="landing-card-accent rounded-2xl p-8 md:p-10 h-full relative overflow-hidden">
                {/* Popular badge */}
                <div className="absolute top-4 right-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[hsl(var(--landing-accent))] text-[hsl(var(--landing-bg))] text-[11px] font-semibold uppercase tracking-wider">
                    <span className="w-1.5 h-1.5 rounded-full bg-[hsl(var(--landing-bg))] animate-pulse" />
                    {t.heroSpotsLeft}
                  </span>
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
                <div className="border-t border-[hsl(var(--landing-border))] pt-6 space-y-2 mb-8">
                  <div className="flex items-baseline gap-3">
                    <span className="text-4xl md:text-5xl font-bold landing-stat-number font-mono">{t.accelPrice}</span>
                    <span className="text-sm text-[hsl(var(--landing-muted))]">{t.accelPriceSub}</span>
                  </div>
                  <div className="flex items-baseline gap-3">
                    <span className="text-2xl md:text-3xl font-bold text-[hsl(var(--landing-text))]/60 font-mono">{t.accelMonthly}</span>
                    <span className="text-sm text-[hsl(var(--landing-muted))]">{t.accelMonthlySub}</span>
                  </div>
                </div>
                <Link
                  to={applyUrl}
                  className="group landing-cta-btn w-full py-3.5 rounded-full text-sm font-semibold transition-all inline-flex items-center justify-center gap-2"
                >
                  {t.heroCTA}
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </Reveal>

            {/* Consultation */}
            <Reveal delay={350}>
              <div className="landing-card rounded-2xl p-8 md:p-10 h-full flex flex-col">
                <h3 className="text-2xl md:text-3xl font-bold text-[hsl(var(--landing-text))] mb-1 font-display">{t.consultTitle}</h3>
                <p className="text-sm text-[hsl(var(--landing-muted))] mb-8">{t.consultSub}</p>
                <div className="space-y-3 mb-10 flex-1">
                  {t.consultItems.map((item: string, i: number) => (
                    <div key={i} className="flex items-start gap-3">
                      <ChevronRight size={14} className="text-[hsl(var(--landing-muted))] mt-1 shrink-0" />
                      <span className="text-sm text-[hsl(var(--landing-text))]/85 leading-relaxed">{item}</span>
                    </div>
                  ))}
                </div>
                <div className="border-t border-[hsl(var(--landing-border))] pt-6 mb-8">
                  <div className="flex items-baseline gap-3">
                    <span className="text-4xl md:text-5xl font-bold text-[hsl(var(--landing-text))] font-mono">{t.consultPrice}</span>
                    <span className="text-sm text-[hsl(var(--landing-muted))]">{t.consultPriceSub}</span>
                  </div>
                </div>
                <Link
                  to={applyUrl}
                  className="group w-full py-3.5 rounded-full text-sm font-semibold border-2 border-[hsl(var(--landing-accent))]/30 text-[hsl(var(--landing-accent))] hover:border-[hsl(var(--landing-accent))] transition-all inline-flex items-center justify-center gap-2"
                >
                  {t.heroCTA}
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </Reveal>
          </div>

          {/* Guarantee */}
          <Reveal delay={400}>
            <div className="mt-8 flex items-center justify-center gap-3 text-sm text-[hsl(var(--landing-muted))]">
              <Shield size={16} className="text-[hsl(var(--landing-accent))]" />
              <span>{t.faqItems[t.faqItems.length - 1]?.a}</span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══════════════ FAQ ═══════════════ */}
      <section id="faq" className="py-24 md:py-40 border-t border-[hsl(var(--landing-border))]">
        <div className="max-w-[800px] mx-auto px-6 lg:px-10">
          <Reveal>
            <p className="text-xs font-mono uppercase tracking-[0.3em] text-[hsl(var(--landing-accent))] mb-4">{t.faqTag}</p>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="text-4xl md:text-5xl font-bold text-[hsl(var(--landing-text))] mb-12 font-display">{t.faqTitle}</h2>
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

      {/* ═══════════════ FINAL CTA ═══════════════ */}
      <section className="min-h-[70vh] flex items-center justify-center relative overflow-hidden landing-cta-section">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-1/3 right-[15%] w-[350px] h-[350px] rounded-full landing-orb-1" />
          
        </div>
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center py-24">
          <Reveal>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-[hsl(var(--landing-text))] mb-6 font-display">{t.ctaTitle}</h2>
          </Reveal>
          <Reveal delay={100}>
            <p className="text-lg md:text-xl text-[hsl(var(--landing-muted))] mb-4">{t.ctaSubtitle}</p>
          </Reveal>
          <Reveal delay={150}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm text-[hsl(var(--landing-muted))] mb-10">
              <span className="inline-flex items-center gap-2">
                <Clock size={14} className="text-[hsl(var(--landing-accent))]" />
                {t.ctaCohort}
              </span>
              <span className="hidden sm:inline text-[hsl(var(--landing-border))]">·</span>
              <span className="inline-flex items-center gap-2 font-semibold text-[hsl(var(--landing-accent))]">
                <span className="w-2 h-2 rounded-full bg-[hsl(var(--landing-accent))] animate-pulse" />
                {t.heroSpotsLeft}
              </span>
            </div>
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
        </div>
      </section>

      {/* ═══════════════ FOOTER ═══════════════ */}
      <footer className="border-t border-[hsl(var(--landing-border))] py-8 pb-24 md:pb-8">
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
