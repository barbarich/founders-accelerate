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

      {/* Hero — Photo + Name + Placeholder for custom bio */}
      <section className="pt-28 pb-16 md:pt-36 md:pb-24 relative">
        <div className="absolute inset-0 landing-hero-mesh" />
        <div className="relative max-w-[1100px] mx-auto px-6">
          <div className="flex flex-col md:flex-row items-start gap-10 md:gap-16">
            {/* Photo */}
            <Reveal>
              <div className="w-40 h-40 md:w-56 md:h-56 rounded-2xl overflow-hidden shrink-0 shadow-lg">
                <img src={photo} alt={t.mentorTitle} className="w-full h-full object-cover object-top" />
              </div>
            </Reveal>

            {/* Name + Bio placeholder */}
            <div className="flex-1">
              <Reveal>
                <p
                  className="text-xs font-mono uppercase tracking-[0.3em] mb-3 font-semibold"
                  style={{ color: "hsl(var(--landing-accent))" }}
                >
                  {t.mentorTag}
                </p>
              </Reveal>
              <Reveal delay={100}>
                <h1
                  className="text-3xl md:text-5xl font-bold mb-2 font-display"
                  style={{ color: "hsl(var(--landing-text))" }}
                >
                  {t.mentorTitle}
                </h1>
              </Reveal>
              <Reveal delay={150}>
                <p className="text-base md:text-lg italic mb-8" style={{ color: "hsl(var(--landing-muted))" }}>
                  {t.mentorSubtitle}
                </p>
              </Reveal>

              {/* Bio text — placeholder area for user's custom text */}
              <Reveal delay={200}>
                <div
                  className="rounded-xl p-6 md:p-8"
                  style={{
                    background: "hsl(var(--landing-card-bg))",
                    border: "1px solid hsl(var(--landing-border))",
                  }}
                >
                  <div className="space-y-3">
                    {t.mentorBio.map((b: string, i: number) => (
                      <p
                        key={i}
                        className="text-sm md:text-base leading-relaxed"
                        style={{ color: "hsl(var(--landing-text) / 0.8)" }}
                      >
                        {b}
                      </p>
                    ))}
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Track Record — Clean text timeline, no images */}
      <section className="py-20 md:py-32" style={{ borderTop: "1px solid hsl(var(--landing-border))" }}>
        <div className="max-w-[1100px] mx-auto px-6">
          <Reveal>
            <p
              className="text-xs font-mono uppercase tracking-[0.3em] mb-3 font-semibold"
              style={{ color: "hsl(var(--landing-accent))" }}
            >
              {t.trackTag}
            </p>
          </Reveal>
          <Reveal delay={100}>
            <h2
              className="text-3xl md:text-5xl font-bold mb-14 font-display"
              style={{ color: "hsl(var(--landing-text))" }}
            >
              {t.trackTitle}
            </h2>
          </Reveal>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical line */}
            <div
              className="absolute left-[7px] md:left-[9px] top-2 bottom-2 w-px"
              style={{ background: "linear-gradient(to bottom, hsl(var(--landing-accent) / 0.3), hsl(var(--landing-accent) / 0.05))" }}
            />

            <div className="space-y-10">
              {t.trackItems.map((item: any, i: number) => (
                <Reveal key={i} delay={i * 80}>
                  <div className="flex gap-6 md:gap-8 items-start">
                    {/* Dot */}
                    <div className="relative shrink-0 mt-1.5">
                      <div
                        className="w-4 h-4 md:w-5 md:h-5 rounded-full"
                        style={{
                          background: "hsl(var(--landing-bg))",
                          border: "2px solid hsl(var(--landing-accent) / 0.4)",
                        }}
                      />
                      <div
                        className="absolute inset-[4px] md:inset-[5px] rounded-full"
                        style={{ background: "hsl(var(--landing-accent))" }}
                      />
                    </div>

                    {/* Content */}
                    <div className="flex-1 pb-2">
                      <span
                        className="text-[11px] font-mono uppercase tracking-wider"
                        style={{ color: "hsl(var(--landing-accent) / 0.6)" }}
                      >
                        {item.period}
                      </span>
                      <h3
                        className="text-lg md:text-xl font-bold mt-0.5"
                        style={{ color: "hsl(var(--landing-text))" }}
                      >
                        {item.title}
                      </h3>
                      <p
                        className="text-sm mt-0.5"
                        style={{ color: "hsl(var(--landing-muted))" }}
                      >
                        {item.subtitle}
                      </p>
                      <span
                        className="inline-block text-xs font-semibold mt-2 px-3 py-1 rounded-full"
                        style={{
                          color: "hsl(var(--landing-accent))",
                          background: "hsl(var(--landing-accent) / 0.08)",
                        }}
                      >
                        {item.highlight}
                      </span>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 landing-cta-section" style={{ borderTop: "1px solid hsl(var(--landing-border))" }}>
        <div className="max-w-3xl mx-auto px-6 text-center">
          <Reveal>
            <h2 className="text-3xl md:text-5xl font-bold mb-4 font-display" style={{ color: "hsl(var(--landing-text))" }}>
              {t.ctaTitle}
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <p className="text-lg mb-8" style={{ color: "hsl(var(--landing-muted))" }}>
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
    </div>
  );
}
