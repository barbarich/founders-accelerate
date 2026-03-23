import { useLanguage } from "@/i18n/LanguageContext";
import { Link } from "react-router-dom";
import { supportedLangs, langLabels } from "@/i18n/translations";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useInView } from "@/hooks/useInView";

import photo from "@/assets/slides/photo-michael.jpg";
import brich1 from "@/assets/slides/brich-1.jpg";
import skyroom1 from "@/assets/slides/skyroom-1.jpg";
import perapuff1 from "@/assets/slides/perapuff-1.jpg";
import runeverywhere1 from "@/assets/slides/runeverywhere-1.jpg";
import forextester1 from "@/assets/slides/forextester-1.jpg";
import metaminder1 from "@/assets/slides/metaminder-1.jpg";
import mymikey1 from "@/assets/slides/mymikey-1.jpg";

const trackImages = [brich1, skyroom1, perapuff1, runeverywhere1, forextester1, metaminder1, mymikey1];

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
        <div className="max-w-[1400px] mx-auto flex items-center justify-between px-6 lg:px-10 py-4">
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
                  className={`px-2.5 py-1 text-[11px] font-mono rounded-md transition-all ${
                    l === lang ? "text-white" : ""
                  }`}
                  style={
                    l === lang
                      ? { background: "hsl(var(--landing-accent))" }
                      : { color: "hsl(var(--landing-muted))" }
                  }
                >
                  {langLabels[l]}
                </Link>
              ))}
            </div>
            <Link
              to={applyUrl}
              className="landing-cta-btn px-5 py-2 rounded-lg text-sm font-semibold"
            >
              {t.navApply}
            </Link>
          </div>
        </div>
      </nav>

      {/* Mentor Hero */}
      <section className="pt-20 relative overflow-hidden">
        <div className="absolute inset-0 landing-hero-mesh" />
        <div className="relative flex flex-col lg:flex-row min-h-[70vh]">
          {/* Photo */}
          <div className="w-full lg:w-[45%] relative">
            <div className="h-[50vh] lg:h-full lg:absolute lg:inset-0">
              <img src={photo} alt={t.mentorTitle} className="w-full h-full object-cover object-top" />
              <div
                className="absolute inset-0"
                style={{
                  background: "linear-gradient(to top, hsl(var(--landing-bg)), transparent, transparent)",
                }}
              />
              <div
                className="absolute inset-0 hidden lg:block"
                style={{
                  background: "linear-gradient(to right, transparent, transparent 60%, hsl(var(--landing-bg)))",
                }}
              />
            </div>
          </div>

          {/* Bio */}
          <div className="w-full lg:w-[55%] flex items-center relative">
            <div className="px-6 lg:px-20 py-16 lg:py-24 max-w-2xl">
              <Reveal>
                <p
                  className="text-xs font-mono uppercase tracking-[0.3em] mb-4 font-semibold"
                  style={{ color: "hsl(var(--landing-accent))" }}
                >
                  {t.mentorTag}
                </p>
              </Reveal>
              <Reveal delay={100}>
                <h1
                  className="text-4xl md:text-5xl lg:text-6xl font-bold mb-2 font-display"
                  style={{ color: "hsl(var(--landing-text))" }}
                >
                  {t.mentorTitle}
                </h1>
              </Reveal>
              <Reveal delay={200}>
                <p className="text-base md:text-lg italic mb-10" style={{ color: "hsl(var(--landing-muted))" }}>
                  {t.mentorSubtitle}
                </p>
              </Reveal>

              <div className="space-y-4">
                {t.mentorBio.map((b: string, i: number) => (
                  <Reveal key={i} delay={300 + i * 80}>
                    <div className="flex items-start gap-3">
                      <div
                        className="w-1.5 h-1.5 rounded-full mt-2.5 shrink-0"
                        style={{ background: "hsl(var(--landing-accent))" }}
                      />
                      <p className="text-sm md:text-base leading-relaxed" style={{ color: "hsl(var(--landing-text) / 0.75)" }}>
                        {b}
                      </p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Track Record */}
      <section className="py-24 md:py-40 relative" style={{ borderTop: "1px solid hsl(var(--landing-border))" }}>
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <Reveal>
            <p
              className="text-xs font-mono uppercase tracking-[0.3em] mb-4 font-semibold"
              style={{ color: "hsl(var(--landing-accent))" }}
            >
              {t.trackTag}
            </p>
          </Reveal>
          <Reveal delay={100}>
            <h2
              className="text-4xl md:text-6xl font-bold mb-16 font-display"
              style={{ color: "hsl(var(--landing-text))" }}
            >
              {t.trackTitle}
            </h2>
          </Reveal>

          {/* Timeline */}
          <div className="relative">
            <div
              className="hidden md:block absolute left-[39px] top-0 bottom-0 w-px"
              style={{ background: "linear-gradient(to bottom, hsl(var(--landing-accent) / 0.4), hsl(var(--landing-accent) / 0.1), transparent)" }}
            />

            <div className="space-y-8">
              {t.trackItems.map((item: any, i: number) => (
                <Reveal key={i} delay={i * 120}>
                  <div className="flex flex-col md:flex-row gap-6 md:gap-10">
                    {/* Node */}
                    <div className="flex items-start gap-4 md:flex-col md:items-center md:w-20 shrink-0">
                      <div
                        className="w-10 h-10 rounded-full flex items-center justify-center z-10 relative"
                        style={{
                          border: "2px solid hsl(var(--landing-accent) / 0.3)",
                          background: "hsl(var(--landing-bg))",
                        }}
                      >
                        <span
                          className="font-mono text-xs font-bold"
                          style={{ color: "hsl(var(--landing-accent))" }}
                        >
                          {String(i + 1).padStart(2, "0")}
                        </span>
                      </div>
                      <span
                        className="text-xs font-mono md:mt-2"
                        style={{ color: "hsl(var(--landing-accent) / 0.6)" }}
                      >
                        {item.period}
                      </span>
                    </div>

                    {/* Card */}
                    <div className="landing-card rounded-2xl overflow-hidden flex-1 flex flex-col md:flex-row">
                      <div className="w-full md:w-56 h-48 md:h-auto shrink-0 relative">
                        <img src={trackImages[i]} alt={item.title} className="w-full h-full object-cover" />
                        <div
                          className="absolute inset-0"
                          style={{
                            background: "linear-gradient(to top, hsl(var(--landing-card-bg) / 0.5), transparent)",
                          }}
                        />
                      </div>
                      <div className="p-6 flex-1">
                        <h3 className="text-xl font-bold mb-1" style={{ color: "hsl(var(--landing-text))" }}>
                          {item.title}
                        </h3>
                        <p className="text-sm mb-3" style={{ color: "hsl(var(--landing-muted))" }}>
                          {item.subtitle}
                        </p>
                        <div
                          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full"
                          style={{
                            background: "hsl(var(--landing-accent) / 0.08)",
                            border: "1px solid hsl(var(--landing-accent) / 0.2)",
                          }}
                        >
                          <div
                            className="w-1.5 h-1.5 rounded-full"
                            style={{ background: "hsl(var(--landing-accent))" }}
                          />
                          <span
                            className="text-xs font-medium"
                            style={{ color: "hsl(var(--landing-accent))" }}
                          >
                            {item.highlight}
                          </span>
                        </div>
                      </div>
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
            <h2
              className="text-3xl md:text-5xl font-bold mb-4 font-display"
              style={{ color: "hsl(var(--landing-text))" }}
            >
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
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="text-xs" style={{ color: "hsl(var(--landing-muted) / 0.6)" }}>{t.footerRights}</span>
          <div className="flex items-center gap-1">
            {supportedLangs.map((l) => (
              <Link
                key={l}
                to={`/${l}/mentor`}
                className="px-2 py-1 text-[11px] font-mono rounded transition-colors"
                style={{
                  color: l === lang ? "hsl(var(--landing-accent))" : "hsl(var(--landing-muted) / 0.6)",
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
