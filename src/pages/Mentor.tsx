import { useLanguage } from "@/i18n/LanguageContext";
import { Link } from "react-router-dom";
import { supportedLangs, langLabels } from "@/i18n/translations";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useInView } from "@/hooks/useInView";

import photo from "@/assets/slides/photo-michael.jpg";

function Reveal({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const { ref, isVisible } = useInView();
  return (
    <div ref={ref} className={`landing-reveal ${isVisible ? "visible" : ""} ${className}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}

export default function Mentor() {
  const { lang, t } = useLanguage();
  const applyUrl = `/${lang}/apply`;

  return (
    <div className="min-h-screen landing-wrapper">
      {/* Stripes background */}
      <div className="landing-stripes" />
      <div className="landing-content">

      {/* Nav */}
      <nav
        className="fixed top-0 inset-x-0 z-50 backdrop-blur-xl"
        style={{ background: "hsl(var(--landing-bg) / 0.85)", borderBottom: "1px solid hsl(var(--landing-border))" }}
      >
        <div className="max-w-[1100px] mx-auto flex items-center justify-between px-6 py-4">
          <Link
            to={`/${lang}`}
            className="font-display text-lg font-bold inline-flex items-center gap-3"
            style={{ color: "hsl(var(--landing-text))" }}
          >
            <ArrowLeft size={16} style={{ color: "hsl(var(--landing-muted))" }} />
            TFC
          </Link>
          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-0.5">
              {supportedLangs.map((l) => (
                <Link
                  key={l}
                  to={`/${l}/mentor`}
                  className={`px-2.5 py-1 text-[11px] font-mono rounded-md transition-all ${l === lang ? "text-white" : ""}`}
                  style={l === lang ? { background: "hsl(var(--landing-accent))" } : { color: "hsl(var(--landing-muted))" }}
                >
                  {langLabels[l]}
                </Link>
              ))}
            </div>
            <Link to={applyUrl} className="landing-cta-btn px-5 py-2 rounded-lg text-sm font-semibold">
              {t.navApply}
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero — Large cinematic photo with overlay */}
      <section className="pt-20 md:pt-24 relative">
        <div className="relative max-w-[1100px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_1.2fr] gap-0 md:gap-8 rtl:md:gap-10 items-stretch min-h-[70vh] md:min-h-[75vh]">
            
            {/* Left — Photo with smooth edge blending */}
            <Reveal className="relative">
              <div className="relative w-full h-[50vh] md:h-full overflow-hidden">
                <img
                  src={photo}
                  alt={t.mentorTitle}
                  className="w-full h-full object-cover object-top"
                />
                {/* Multi-directional fade */}
                <div className="absolute inset-x-0 bottom-0 h-2/3 pointer-events-none"
                  style={{ background: "linear-gradient(to top, hsl(var(--landing-bg)), transparent)" }} />
                <div className="absolute inset-x-0 top-0 h-1/3 pointer-events-none"
                  style={{ background: "linear-gradient(to bottom, hsl(var(--landing-bg)), transparent)" }} />
                <div className="absolute inset-y-0 left-0 w-1/4 pointer-events-none"
                  style={{ background: "linear-gradient(to right, hsl(var(--landing-bg)), transparent)" }} />
                <div className="absolute inset-y-0 right-0 w-1/3 pointer-events-none"
                  style={{ background: "linear-gradient(to left, hsl(var(--landing-bg)), transparent)" }} />
              </div>
            </Reveal>

            {/* Right — Name, subtitle, key facts */}
            <div className="flex flex-col justify-center py-8 md:py-16 md:pl-10 lg:pl-14">
              <Reveal>
                <p
                  className="text-[11px] font-mono uppercase tracking-[0.3em] mb-6 font-semibold"
                  style={{ color: "hsl(var(--landing-accent))" }}
                >
                  {t.mentorTag}
                </p>
              </Reveal>
              <Reveal delay={100}>
                <h1
                  className="text-5xl md:text-6xl lg:text-[4.5rem] font-bold mb-2 font-display leading-[1.05] tracking-tight"
                  style={{ color: "hsl(var(--landing-text))" }}
                >
                  {t.mentorTitle}
                </h1>
              </Reveal>
              <Reveal delay={150}>
                <p
                  className="text-base md:text-lg mb-10 max-w-md leading-relaxed"
                  style={{ color: "hsl(var(--landing-muted))" }}
                >
                  {t.mentorSubtitle}
                </p>
              </Reveal>

              {/* Key facts — asymmetric flowing layout */}
              <div className="space-y-0">
                {t.mentorBio.map((b: string, i: number) => (
                  <Reveal key={i} delay={200 + i * 40}>
                    <div
                      className="flex items-baseline gap-4 py-[10px]"
                      style={{
                        borderBottom: i < t.mentorBio.length - 1 ? "1px solid hsl(var(--landing-border) / 0.6)" : "none",
                      }}
                    >
                      <span
                        className="text-[11px] font-mono tabular-nums shrink-0 w-5 text-right"
                        style={{ color: "hsl(var(--landing-accent) / 0.45)" }}
                      >
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <span
                        className="text-[15px] md:text-[17px] leading-snug"
                        style={{ color: "hsl(var(--landing-text) / 0.9)" }}
                      >
                        {b}
                      </span>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Personal Statement — Editorial long-form */}
      <section
        className="py-20 md:py-32"
        style={{ borderTop: "1px solid hsl(var(--landing-border))" }}
      >
        <div className="max-w-[720px] mx-auto px-6">
          {/* Section label */}
          <Reveal>
            <p
              className="text-[11px] font-mono uppercase tracking-[0.3em] mb-8 font-semibold"
              style={{ color: "hsl(var(--landing-accent))" }}
            >
              In my own words
            </p>
          </Reveal>

          {/* Statement paragraphs — card with semi-transparent bg */}
          <div
            className="rounded-2xl p-6 md:p-10 space-y-6"
            style={{
              background: "hsl(var(--landing-bg) / 0.7)",
              border: "1px solid hsl(var(--landing-border) / 0.5)",
              backdropFilter: "blur(8px)",
            }}
          >
            {t.mentorStatement.map((paragraph: string, i: number) => {
              const isLast = i === t.mentorStatement.length - 1;
              return (
                <Reveal key={i} delay={i * 60}>
                  <p
                    className={`leading-[1.9] ${
                      isLast
                        ? "text-xl md:text-2xl font-display font-normal mt-10 pt-8"
                        : i === 0
                          ? "text-xl md:text-2xl font-normal"
                          : "text-[17px] md:text-lg font-normal"
                    }`}
                    style={{
                      color: isLast
                        ? "hsl(var(--landing-text))"
                        : i === 0
                          ? "hsl(var(--landing-text))"
                          : "hsl(var(--landing-text) / 0.92)",
                      ...(isLast
                        ? { borderTop: "1px solid hsl(var(--landing-accent) / 0.2)" }
                        : {}),
                    }}
                  >
                    {paragraph}
                  </p>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Track Record — Horizontal cards grid */}
      <section
        className="py-20 md:py-32"
        style={{
          borderTop: "1px solid hsl(var(--landing-border))",
          background: "hsl(var(--landing-card-bg) / 0.5)",
        }}
      >
        <div className="max-w-[1100px] mx-auto px-6">
          <Reveal>
            <p
              className="text-[11px] font-mono uppercase tracking-[0.3em] mb-3 font-semibold"
              style={{ color: "hsl(var(--landing-accent))" }}
            >
              {t.trackTag}
            </p>
          </Reveal>
          <Reveal delay={80}>
            <h2
              className="text-3xl md:text-5xl font-bold mb-14 font-display"
              style={{ color: "hsl(var(--landing-text))" }}
            >
              {t.trackTitle}
            </h2>
          </Reveal>

          {/* Cards grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {t.trackItems.map((item: any, i: number) => (
              <Reveal key={i} delay={i * 60}>
                <div
                  className="rounded-xl p-6 h-full flex flex-col justify-between transition-all duration-300 hover:-translate-y-1"
                  style={{
                    background: "hsl(var(--landing-bg))",
                    border: "1px solid hsl(var(--landing-border))",
                    boxShadow: "0 2px 12px -4px hsl(var(--landing-accent) / 0.06)",
                  }}
                >
                  <div>
                    <span
                      className="text-[11px] font-mono tracking-wider block mb-2"
                      style={{ color: "hsl(var(--landing-accent) / 0.5)" }}
                    >
                      {item.period}
                    </span>
                    <h3
                      className="text-lg font-bold font-display mb-1"
                      style={{ color: "hsl(var(--landing-text))" }}
                    >
                      {item.title}
                    </h3>
                    <p
                      className="text-sm mb-4"
                      style={{ color: "hsl(var(--landing-muted))" }}
                    >
                      {item.subtitle}
                    </p>
                  </div>
                  <span
                    className="inline-block text-xs font-semibold px-3 py-1.5 rounded-full self-start"
                    style={{
                      color: "hsl(var(--landing-accent))",
                      background: "hsl(var(--landing-accent) / 0.08)",
                    }}
                  >
                    {item.highlight}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 landing-cta-section" style={{ borderTop: "1px solid hsl(var(--landing-border))" }}>
        <div className="max-w-3xl mx-auto px-6 text-center">
          <Reveal>
            <h2 className="text-3xl md:text-5xl font-bold mb-4 font-display" style={{ color: "hsl(var(--landing-text))" }}>
              {t.ctaTitle}
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <p className="text-lg mb-10" style={{ color: "hsl(var(--landing-muted))" }}>
              {t.ctaSubtitle}
            </p>
          </Reveal>
          <Reveal delay={200}>
            <Link
              to={applyUrl}
              className="group landing-cta-btn px-8 py-4 rounded-xl text-base font-semibold inline-flex items-center gap-3"
            >
              {t.ctaCTA}
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ borderTop: "1px solid hsl(var(--landing-border))" }} className="py-8">
        <div className="max-w-[1100px] mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="text-xs" style={{ color: "hsl(var(--landing-muted) / 0.6)" }}>{t.footerRights}</span>
          <div className="flex items-center gap-1">
            {supportedLangs.map((l) => (
              <Link
                key={l}
                to={`/${l}/mentor`}
                className="px-2 py-1 text-[11px] font-mono rounded transition-colors"
                style={{ color: l === lang ? "hsl(var(--landing-accent))" : "hsl(var(--landing-muted) / 0.6)" }}
              >
                {langLabels[l]}
              </Link>
            ))}
          </div>
        </div>
      </footer>
      </div>{/* end landing-content */}
    </div>
  );
}
