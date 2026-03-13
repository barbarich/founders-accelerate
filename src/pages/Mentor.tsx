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
    <div ref={ref} className={`reveal ${isVisible ? "visible" : ""} ${className}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}

export default function Mentor() {
  const { lang, t } = useLanguage();
  const applyUrl = `/${lang}/apply`;

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Nav */}
      <nav className="fixed top-0 inset-x-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/50">
        <div className="max-w-[1400px] mx-auto flex items-center justify-between px-6 lg:px-10 py-4">
          <Link to={`/${lang}`} className="font-display text-lg font-bold text-foreground tracking-tight inline-flex items-center gap-3">
            <ArrowLeft size={16} className="text-muted-foreground" />
            TFC
          </Link>
          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-0.5">
              {supportedLangs.map((l) => (
                <Link
                  key={l}
                  to={`/${l}/mentor`}
                  className={`px-2 py-1 text-[11px] font-mono rounded transition-all ${
                    l === lang ? "bg-primary/20 text-primary" : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {langLabels[l]}
                </Link>
              ))}
            </div>
            <Link
              to={applyUrl}
              className="bg-primary text-primary-foreground px-5 py-2 rounded-md text-sm font-semibold hover:bg-primary/90 transition-all"
            >
              {t.navApply}
            </Link>
          </div>
        </div>
      </nav>

      {/* Mentor Hero */}
      <section className="pt-20 relative overflow-hidden">
        <div className="flex flex-col lg:flex-row min-h-[70vh]">
          {/* Photo */}
          <div className="w-full lg:w-[45%] relative">
            <div className="h-[50vh] lg:h-full lg:absolute lg:inset-0">
              <img src={photo} alt={t.mentorTitle} className="w-full h-full object-cover object-top" />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-transparent lg:to-background" />
            </div>
          </div>

          {/* Bio */}
          <div className="w-full lg:w-[55%] flex items-center">
            <div className="px-6 lg:px-20 py-16 lg:py-24 max-w-2xl">
              <Reveal>
                <p className="text-xs font-mono uppercase tracking-[0.3em] text-primary mb-4">{t.mentorTag}</p>
              </Reveal>
              <Reveal delay={100}>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-2 font-display">{t.mentorTitle}</h1>
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

      {/* Track Record */}
      <section className="py-24 md:py-40 border-t border-border/30 relative grain">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <Reveal>
            <p className="text-xs font-mono uppercase tracking-[0.3em] text-primary mb-4">{t.trackTag}</p>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-16 font-display">{t.trackTitle}</h2>
          </Reveal>

          {/* Timeline-style vertical list */}
          <div className="relative">
            <div className="hidden md:block absolute left-[39px] top-0 bottom-0 w-px bg-gradient-to-b from-primary/40 via-primary/20 to-transparent" />

            <div className="space-y-8">
              {t.trackItems.map((item: any, i: number) => (
                <Reveal key={i} delay={i * 120}>
                  <div className="flex flex-col md:flex-row gap-6 md:gap-10">
                    {/* Node */}
                    <div className="flex items-start gap-4 md:flex-col md:items-center md:w-20 shrink-0">
                      <div className="w-10 h-10 rounded-full border-2 border-primary/40 bg-background flex items-center justify-center z-10 relative">
                        <span className="text-primary font-mono text-xs font-bold">{String(i + 1).padStart(2, "0")}</span>
                      </div>
                      <span className="text-xs font-mono text-primary/60 md:mt-2">{item.period}</span>
                    </div>

                    {/* Card */}
                    <div className="glass glass-hover rounded-xl overflow-hidden flex-1 transition-all duration-500 flex flex-col md:flex-row">
                      <div className="w-full md:w-56 h-48 md:h-auto shrink-0 relative">
                        <img src={trackImages[i]} alt={item.title} className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-background/60 to-transparent" />
                      </div>
                      <div className="p-6 flex-1">
                        <h3 className="text-xl font-bold text-foreground mb-1">{item.title}</h3>
                        <p className="text-sm text-muted-foreground mb-3">{item.subtitle}</p>
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/[0.08] border border-primary/20">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                          <span className="text-xs text-primary font-medium">{item.highlight}</span>
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
      <section className="py-20 border-t border-border/30">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <Reveal>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4 font-display">{t.ctaTitle}</h2>
          </Reveal>
          <Reveal delay={100}>
            <p className="text-lg text-muted-foreground mb-8">{t.ctaSubtitle}</p>
          </Reveal>
          <Reveal delay={200}>
            <Link
              to={applyUrl}
              className="group bg-primary text-primary-foreground px-8 py-4 rounded-lg text-base font-semibold hover:bg-primary/90 transition-all inline-flex items-center gap-3 animate-pulse-glow"
            >
              {t.ctaCTA}
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/30 py-8">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="text-xs text-muted-foreground/60">{t.footerRights}</span>
          <div className="flex items-center gap-1">
            {supportedLangs.map((l) => (
              <Link
                key={l}
                to={`/${l}/mentor`}
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
