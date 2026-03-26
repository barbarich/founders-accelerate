import { useLanguage } from "@/i18n/LanguageContext";
import { Link } from "react-router-dom";
import { supportedLangs, langLabels } from "@/i18n/translations";
import { ArrowRight } from "lucide-react";
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
      {/* Minimal top bar */}
      <nav
        className="fixed top-0 inset-x-0 z-50"
        style={{
          background: "hsl(var(--landing-bg) / 0.6)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
        }}
      >
        <div className="max-w-[1400px] mx-auto flex items-center justify-between px-8 py-5">
          <Link
            to={`/${lang}`}
            className="font-mono text-[11px] uppercase tracking-[0.25em]"
            style={{ color: "hsl(var(--landing-muted))" }}
          >
            ← TFC
          </Link>
          <div className="flex items-center gap-6">
            <div className="hidden md:flex items-center gap-1">
              {supportedLangs.map((l) => (
                <Link
                  key={l}
                  to={`/${l}/mentor`}
                  className="px-2 py-1 text-[10px] font-mono uppercase tracking-wider transition-colors"
                  style={{
                    color: l === lang ? "hsl(var(--landing-text))" : "hsl(var(--landing-muted) / 0.5)",
                    borderBottom: l === lang ? "1px solid hsl(var(--landing-text))" : "1px solid transparent",
                  }}
                >
                  {langLabels[l]}
                </Link>
              ))}
            </div>
            <Link
              to={applyUrl}
              className="text-[11px] font-mono uppercase tracking-[0.2em] px-5 py-2.5 rounded-none transition-all"
              style={{
                border: "1px solid hsl(var(--landing-text))",
                color: "hsl(var(--landing-text))",
              }}
            >
              {t.navApply}
            </Link>
          </div>
        </div>
      </nav>

      {/* ═══ HERO — Full-bleed cinematic ═══ */}
      <section className="relative min-h-screen flex items-end">
        {/* Full background image */}
        <div className="absolute inset-0">
          <img
            src={photo}
            alt={t.mentorTitle}
            className="w-full h-full object-cover object-[center_20%]"
          />
          {/* Dramatic gradient overlay */}
          <div
            className="absolute inset-0"
            style={{
              background: `
                linear-gradient(to bottom, 
                  hsl(var(--landing-bg) / 0.1) 0%, 
                  hsl(var(--landing-bg) / 0.0) 30%, 
                  hsl(var(--landing-bg) / 0.4) 60%, 
                  hsl(var(--landing-bg) / 0.95) 85%, 
                  hsl(var(--landing-bg)) 100%
                )
              `,
            }}
          />
          <div
            className="absolute inset-0 hidden md:block"
            style={{
              background: `
                linear-gradient(to right, 
                  hsl(var(--landing-bg) / 0.85) 0%, 
                  hsl(var(--landing-bg) / 0.3) 40%, 
                  transparent 70%
                )
              `,
            }}
          />
        </div>

        {/* Content at bottom-left */}
        <div className="relative z-10 max-w-[1400px] mx-auto w-full px-8 pb-16 md:pb-24 pt-[60vh] md:pt-0">
          <div className="max-w-2xl">
            <Reveal>
              <p
                className="font-mono text-[10px] uppercase tracking-[0.4em] mb-6"
                style={{ color: "hsl(var(--landing-accent))" }}
              >
                {t.mentorTag}
              </p>
            </Reveal>
            <Reveal delay={80}>
              <h1
                className="text-[clamp(2.5rem,6vw,5rem)] font-display font-bold leading-[1.05] mb-5"
                style={{ color: "hsl(var(--landing-text))" }}
              >
                {t.mentorTitle}
              </h1>
            </Reveal>
            <Reveal delay={140}>
              <p
                className="text-lg md:text-xl leading-relaxed max-w-lg"
                style={{ color: "hsl(var(--landing-muted))" }}
              >
                {t.mentorSubtitle}
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ═══ KEY FACTS — Horizontal strip ═══ */}
      <section
        style={{
          background: "hsl(var(--landing-text))",
          color: "hsl(var(--landing-bg))",
        }}
      >
        <div className="max-w-[1400px] mx-auto px-8 py-6 md:py-0">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y md:divide-y-0 md:divide-x"
            style={{ borderColor: "hsl(var(--landing-bg) / 0.15)" }}
          >
            {t.mentorBio.slice(0, 4).map((fact: string, i: number) => (
              <Reveal key={i} delay={i * 60}>
                <div className="py-4 md:py-8 md:px-8 first:md:pl-0 last:md:pr-0">
                  <p className="text-[13px] md:text-sm font-medium leading-snug" style={{ color: "hsl(var(--landing-bg) / 0.85)" }}>
                    {fact}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ MANIFESTO — Big editorial typography ═══ */}
      <section className="py-24 md:py-40">
        <div className="max-w-[1400px] mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-[280px_1fr] gap-8 md:gap-20">
            {/* Left — sticky label */}
            <Reveal>
              <div className="md:sticky md:top-32">
                <div
                  className="w-12 h-[1px] mb-6"
                  style={{ background: "hsl(var(--landing-accent))" }}
                />
                <p
                  className="font-mono text-[10px] uppercase tracking-[0.4em]"
                  style={{ color: "hsl(var(--landing-accent))" }}
                >
                  In my own words
                </p>
              </div>
            </Reveal>

            {/* Right — text */}
            <div className="max-w-[640px]">
              {t.mentorStatement.map((paragraph: string, i: number) => {
                const isLast = i === t.mentorStatement.length - 1;
                const isFirst = i === 0;
                return (
                  <Reveal key={i} delay={i * 50}>
                    <p
                      className={`mb-8 ${
                        isFirst
                          ? "text-xl md:text-2xl font-display leading-[1.6]"
                          : isLast
                            ? "text-lg md:text-xl font-display font-semibold mt-12 pt-10 leading-[1.5]"
                            : "text-[15px] md:text-[17px] leading-[1.9]"
                      }`}
                      style={{
                        color: isFirst
                          ? "hsl(var(--landing-text))"
                          : isLast
                            ? "hsl(var(--landing-accent))"
                            : "hsl(var(--landing-text) / 0.65)",
                        ...(isLast
                          ? { borderTop: "1px solid hsl(var(--landing-accent) / 0.15)" }
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
        </div>
      </section>

      {/* ═══ TRACK RECORD — Asymmetric grid ═══ */}
      <section
        className="py-24 md:py-40"
        style={{
          borderTop: "1px solid hsl(var(--landing-border))",
        }}
      >
        <div className="max-w-[1400px] mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-[280px_1fr] gap-8 md:gap-20 mb-16">
            <Reveal>
              <div>
                <div
                  className="w-12 h-[1px] mb-6"
                  style={{ background: "hsl(var(--landing-accent))" }}
                />
                <p
                  className="font-mono text-[10px] uppercase tracking-[0.4em] mb-4"
                  style={{ color: "hsl(var(--landing-accent))" }}
                >
                  {t.trackTag}
                </p>
                <h2
                  className="text-3xl md:text-4xl font-display font-bold leading-tight"
                  style={{ color: "hsl(var(--landing-text))" }}
                >
                  {t.trackTitle}
                </h2>
              </div>
            </Reveal>
          </div>

          {/* Cards — staggered two-column */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6 md:ml-[calc(280px+5rem)]">
            {t.trackItems.map((item: any, i: number) => (
              <Reveal key={i} delay={i * 40}>
                <div
                  className="group relative p-7 transition-all duration-500"
                  style={{
                    borderLeft: "2px solid hsl(var(--landing-border))",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.borderLeftColor = `hsl(var(--landing-accent))`;
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.borderLeftColor = `hsl(var(--landing-border))`;
                  }}
                >
                  <span
                    className="font-mono text-[10px] tracking-[0.3em] uppercase block mb-3"
                    style={{ color: "hsl(var(--landing-muted) / 0.5)" }}
                  >
                    {item.period}
                  </span>
                  <h3
                    className="text-base font-semibold mb-1.5"
                    style={{ color: "hsl(var(--landing-text))" }}
                  >
                    {item.title}
                  </h3>
                  <p
                    className="text-[13px] leading-relaxed mb-4"
                    style={{ color: "hsl(var(--landing-muted))" }}
                  >
                    {item.subtitle}
                  </p>
                  <span
                    className="inline-block text-[11px] font-mono tracking-wider uppercase"
                    style={{ color: "hsl(var(--landing-accent))" }}
                  >
                    {item.highlight}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CTA — Minimal ═══ */}
      <section
        className="py-32 md:py-48"
        style={{ borderTop: "1px solid hsl(var(--landing-border))" }}
      >
        <div className="max-w-[1400px] mx-auto px-8 text-center">
          <Reveal>
            <h2
              className="text-3xl md:text-5xl lg:text-6xl font-display font-bold mb-6 leading-tight"
              style={{ color: "hsl(var(--landing-text))" }}
            >
              {t.ctaTitle}
            </h2>
          </Reveal>
          <Reveal delay={80}>
            <p
              className="text-base md:text-lg mb-14 max-w-lg mx-auto"
              style={{ color: "hsl(var(--landing-muted))" }}
            >
              {t.ctaSubtitle}
            </p>
          </Reveal>
          <Reveal delay={140}>
            <Link
              to={applyUrl}
              className="group inline-flex items-center gap-4 text-[13px] font-mono uppercase tracking-[0.25em] px-10 py-5 transition-all duration-300"
              style={{
                border: "1px solid hsl(var(--landing-text))",
                color: "hsl(var(--landing-text))",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.background = "hsl(var(--landing-text))";
                el.style.color = "hsl(var(--landing-bg))";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.background = "transparent";
                el.style.color = "hsl(var(--landing-text))";
              }}
            >
              {t.ctaCTA}
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Footer */}
      <footer
        className="py-8"
        style={{ borderTop: "1px solid hsl(var(--landing-border))" }}
      >
        <div className="max-w-[1400px] mx-auto px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="text-[11px] font-mono" style={{ color: "hsl(var(--landing-muted) / 0.4)" }}>
            {t.footerRights}
          </span>
          <div className="flex items-center gap-1">
            {supportedLangs.map((l) => (
              <Link
                key={l}
                to={`/${l}/mentor`}
                className="px-2 py-1 text-[10px] font-mono transition-colors"
                style={{
                  color: l === lang ? "hsl(var(--landing-text))" : "hsl(var(--landing-muted) / 0.4)",
                }}
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
