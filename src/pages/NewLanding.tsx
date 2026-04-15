import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "@/i18n/LanguageContext";
import { getNewLandingT } from "@/components/landing/newLandingTranslations";
import { useInView } from "@/hooks/useInView";
import NewNavbar from "@/components/NewNavbar";

const WEB3FORMS_KEY = "1340b491-9687-45e3-914d-3c6e4f777a0f";

/* ─── tiny reveal wrapper ─── */
function Reveal({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const { ref, isVisible } = useInView();
  return (
    <div ref={ref} className={`nl-reveal ${isVisible ? "visible" : ""} ${className}`}>
      {children}
    </div>
  );
}

/* ─── shared inline‑style helpers ─── */
const S = {
  bg: "#f8f8f4",
  surface: "#ffffff",
  border: "#e4e4dc",
  borderLight: "#f0f0e8",
  text: "#0d0d0d",
  secondary: "#555555",
  muted: "#888888",
  hint: "#aaaaaa",
  accent: "#CAFF00",
  sageBg: "#eef4e8",
  sageBorder: "#c8ddb8",
  sageText: "#1a2e14",
  sageDark: "#1a2e14",
  green: "#4a8a28",
  greenActive: "#6aaa40",
} as const;

const cardShadow = "0 1px 3px rgba(0,0,0,0.04), 0 6px 16px rgba(0,0,0,0.04)";
const cardShadowHover = "0 2px 6px rgba(0,0,0,0.06), 0 12px 28px rgba(0,0,0,0.08)";

export default function NewLanding() {
  const { lang } = useLanguage();
  const t = getNewLandingT(lang);
  const navigate = useNavigate();

  /* Override dark body background for this page */
  useEffect(() => {
    const prev = document.body.style.backgroundColor;
    document.body.style.backgroundColor = "#f8f8f4";
    if ((window as any).fbq) (window as any).fbq("track", "ViewContent");
    return () => { document.body.style.backgroundColor = prev; };
  }, []);

  /* ─── FAQ state ─── */
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  /* ─── Form state ─── */
  const [formData, setFormData] = useState({ name: "", email: "", contactType: "telegram" as "telegram" | "whatsapp", contact: "" });
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: `New application: ${formData.name}`,
          from_name: "Founders Circle",
          name: formData.name,
          email: formData.email,
          contact_type: formData.contactType,
          contact: formData.contact,
        }),
      });
      if (res.ok) {
        if ((window as any).fbq) (window as any).fbq("track", "Lead");
        navigate(`/${lang}/thank-you`);
      }
    } catch {
      /* silent */
    } finally {
      setSubmitting(false);
    }
  };

  const scrollToApply = () => document.getElementById("apply")?.scrollIntoView({ behavior: "smooth" });

  const beforeEmojis = ["\u{1F636}", "\u{1F300}", "\u{1F937}", "\u{1F630}", "\u{23F3}", "\u{1F9E9}"];
  const afterEmojis = ["\u{2705}", "\u{1F680}", "\u{1F4E3}", "\u{1F4B0}", "\u{26A1}", "\u{1F916}"];

  return (
    <div className="nl-page" style={{ background: S.bg, fontFamily: "'DM Sans', sans-serif" }}>
      <NewNavbar lang={lang} />

      {/* ════════════════════ S1 — HERO ════════════════════ */}
      <Reveal>
        <section className="nl-section" style={{ background: S.bg, paddingTop: 80, paddingBottom: 60 }}>
          <div className="nl-container-inner" style={{ maxWidth: 1200, margin: "0 auto", padding: "0 48px" }}>
            <div className="nl-hero-grid" style={{ display: "grid", gridTemplateColumns: "1fr 360px", gap: 48, alignItems: "start" }}>
              {/* left */}
              <div>
                {/* headline */}
                <h1 className="nl-hero-h1 font-syne" style={{ margin: 0, lineHeight: 1.08, letterSpacing: -2, fontSize: 64, fontWeight: 700, color: S.text }}>
                  AI Founder<br />Program
                </h1>

                {/* FROM ZERO TO LAUNCH — secondary tagline */}
                <p className="font-syne" style={{ marginTop: 16, fontSize: 20, fontWeight: 600, letterSpacing: 2, textTransform: "uppercase", color: S.muted }}>
                  From Zero to Launch{" "}
                  <span style={{ color: S.accent, background: S.text, padding: "2px 10px", borderRadius: 4, fontSize: 14, letterSpacing: 1.5, marginLeft: 4 }}>30 {lang === "ru" ? "дней" : "days"}</span>
                </p>

                {/* subtitle */}
                <p style={{ marginTop: 20, fontSize: 18, lineHeight: 1.6, maxWidth: 500 }}>
                  <span style={{ color: S.secondary }}>{t.hero.subtitle1}</span>{" "}
                  <span style={{ fontWeight: 500, color: S.text }}>{t.hero.subtitle2}</span>
                </p>

                {/* CTA */}
                <div style={{ display: "flex", alignItems: "center", gap: 20, marginTop: 28, flexWrap: "wrap" }}>
                  <button onClick={scrollToApply} className="nl-cta-btn" style={{ display: "inline-flex", alignItems: "center", gap: 10, background: S.accent, color: S.text, fontFamily: "inherit", fontSize: 16, fontWeight: 600, padding: "16px 36px", borderRadius: 999, border: "none", cursor: "pointer", transition: "filter 0.2s" }}>
                    {t.hero.cta}
                    <svg width="16" height="16" viewBox="0 0 14 14" fill="none"><path d="M3 11L11 3M11 3H4M11 3V10" stroke={S.text} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </button>
                  <span style={{ fontSize: 13, color: S.hint }}>{t.hero.steps}</span>
                </div>

                {/* quote card */}
                <div style={{ marginTop: 36, background: S.surface, borderRadius: 16, padding: "20px 24px", boxShadow: cardShadow, display: "flex", gap: 16, alignItems: "center" }}>
                  <img src="/images/Leah.png" alt="Leah" style={{ width: 44, height: 44, borderRadius: "50%", objectFit: "cover", flexShrink: 0 }} />
                  <div>
                    <p style={{ fontSize: 14, color: S.secondary, lineHeight: 1.55, margin: 0, fontStyle: "italic" }}>&ldquo;{t.hero.quote}&rdquo;</p>
                    <div style={{ marginTop: 6 }}>
                      <span style={{ fontSize: 13, fontWeight: 600, color: S.text }}>{t.hero.quoteAuthor}</span>
                      <span style={{ fontSize: 12, color: S.muted, marginLeft: 8 }}>{t.hero.quoteRole}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* right — 3 feature cards */}
              <div className="nl-stats-col" style={{ display: "flex", flexDirection: "column", gap: 10, paddingTop: 56 }}>
                {[
                  {
                    title: lang === "ru" ? "AI-агенты" : "AI Agents",
                    desc: lang === "ru" ? "Рисерч, маркетинг и продажи на автопилоте" : "Research, marketing & sales on autopilot",
                    icon: (
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 8V4H8"/><rect x="8" y="2" width="8" height="4" rx="1"/><rect x="4" y="8" width="16" height="12" rx="2"/>
                        <circle cx="9" cy="14" r="1.5"/><circle cx="15" cy="14" r="1.5"/><path d="M9 18h6"/>
                      </svg>
                    ),
                    bg: S.surface, fg: S.text, borderColor: S.border,
                  },
                  {
                    title: lang === "ru" ? "AI-разработка" : "AI Development",
                    desc: lang === "ru" ? "Строй и запускай продукты без команды" : "Build & ship products without a team",
                    icon: (
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
                      </svg>
                    ),
                    bg: S.surface, fg: S.text, borderColor: S.border,
                  },
                  {
                    title: lang === "ru" ? "1 фаундер = бизнес" : "1 founder = business",
                    desc: lang === "ru" ? "От нуля до выручки за 30 дней" : "From zero to revenue in 30 days",
                    icon: (
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
                      </svg>
                    ),
                    bg: S.sageBg, fg: S.sageText, borderColor: S.sageBorder,
                  },
                ].map((card, i) => (
                  <div key={i} style={{
                    background: card.bg,
                    color: card.fg,
                    borderRadius: 14,
                    padding: "18px 20px",
                    border: `1px solid ${card.borderColor}`,
                    boxShadow: cardShadow,
                    display: "flex", alignItems: "flex-start", gap: 14,
                    transition: "transform 0.2s",
                    cursor: "default",
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-2px)"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0)"; }}
                  >
                    <div style={{
                      width: 36, height: 36, borderRadius: 10, flexShrink: 0,
                      background: i === 2 ? "rgba(74,138,40,0.15)" : S.sageBg,
                      display: "flex", alignItems: "center", justifyContent: "center",
                      color: S.green,
                    }}>
                      {card.icon}
                    </div>
                    <div>
                      <div style={{ fontSize: 14, fontWeight: 600, lineHeight: 1.3 }}>{card.title}</div>
                      <div style={{ fontSize: 13, lineHeight: 1.4, marginTop: 3, color: S.muted }}>{card.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </Reveal>

      {/* ════════════════════ S2 — VIDEO ════════════════════ */}
      <Reveal>
        <section className="nl-section" style={{ background: S.bg, paddingTop: 20, paddingBottom: 80 }}>
          <div className="nl-container-inner" style={{ maxWidth: 900, margin: "0 auto", padding: "0 48px" }}>
            <div style={{ position: "relative", width: "100%", aspectRatio: "16/9", borderRadius: 20, overflow: "hidden", background: "#0d0d0d", boxShadow: "0 8px 40px rgba(0,0,0,0.12)" }}>
              <video
                src="/videos/intro.mp4"
                controls
                playsInline
                preload="metadata"
                style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
              />
            </div>
            <p style={{ textAlign: "center", marginTop: 16, fontSize: 14, color: S.muted }}>
              {lang === "ru" ? "2 минуты о том, как устроена программа и для кого она" : "2 minutes on how the program works and who it's for"}
            </p>
          </div>
        </section>
      </Reveal>

      {/* ════════════════════ S3 — WHY NOW (sage bg) ════════════════════ */}
      <Reveal>
        <section className="nl-section" style={{ background: S.sageBg, paddingTop: 100, paddingBottom: 100 }}>
          <div className="nl-container-inner" style={{ maxWidth: 1200, margin: "0 auto", padding: "0 48px" }}>
            <div className="nl-two-col" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 56 }}>
              {/* left */}
              <div>
                <span style={{ fontSize: 11, fontWeight: 600, letterSpacing: 1.5, textTransform: "uppercase", color: S.greenActive }}>{t.whyNow.label}</span>
                <h2 className="nl-h2 font-syne" style={{ fontSize: 36, fontWeight: 700, color: S.sageText, lineHeight: 1.15, margin: "16px 0 0", letterSpacing: -1 }}>
                  {t.whyNow.title1} <span style={{ color: S.green }}>{t.whyNow.titleHighlight}</span> {t.whyNow.title2}
                </h2>
                <p style={{ fontSize: 15, color: S.secondary, lineHeight: 1.7, marginTop: 20, fontStyle: "italic" }}>&ldquo;{t.whyNow.quote}&rdquo;</p>
                <button onClick={scrollToApply} className="nl-cta-btn" style={{ marginTop: 28, display: "inline-flex", alignItems: "center", gap: 8, background: S.accent, color: S.text, fontFamily: "inherit", fontSize: 15, fontWeight: 600, padding: "14px 28px", borderRadius: 999, border: "none", cursor: "pointer", transition: "filter 0.2s" }}>
                  {t.whyNow.cta}
                </button>
              </div>
              {/* right — points */}
              <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
                {t.whyNow.points.map((p, i) => (
                  <div key={i} style={{ borderLeft: `3px solid ${S.greenActive}`, paddingLeft: 20, paddingTop: 20, paddingBottom: 20 }}>
                    <div style={{ fontSize: 15, fontWeight: 600, color: S.sageText }}>{p.title}</div>
                    <p style={{ fontSize: 14, color: S.secondary, lineHeight: 1.6, margin: "6px 0 0" }}>{p.text}</p>
                  </div>
                ))}
                <div style={{ borderLeft: `3px solid ${S.sageBorder}`, paddingLeft: 20, paddingTop: 20, paddingBottom: 20 }}>
                  <div style={{ fontSize: 15, fontWeight: 600, color: S.sageText }}>{t.whyNow.lastPoint.title}</div>
                  <p style={{ fontSize: 14, color: S.secondary, lineHeight: 1.6, margin: "6px 0 0" }}>{t.whyNow.lastPoint.text}</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Reveal>

      {/* ════════════════════ S4 — BEFORE / AFTER (white bg) ════════════════════ */}
      <Reveal>
        <section className="nl-section" style={{ background: S.bg, paddingTop: 100, paddingBottom: 100 }}>
          <div className="nl-container-inner" style={{ maxWidth: 1200, margin: "0 auto", padding: "0 48px" }}>
            <h2 className="nl-h2 font-syne" style={{ textAlign: "center", fontSize: 36, fontWeight: 700, color: S.text, marginBottom: 48, letterSpacing: -1 }}>{t.beforeAfter.title}</h2>
            <div className="nl-ba-grid" style={{ display: "grid", gridTemplateColumns: "1fr 60px 1fr", gap: 0, alignItems: "center" }}>
              {/* before */}
              <div style={{ background: S.surface, borderRadius: 20, padding: 32, boxShadow: cardShadow }}>
                <div style={{ fontSize: 12, fontWeight: 600, letterSpacing: 1, textTransform: "uppercase", color: S.muted, marginBottom: 20 }}>{t.beforeAfter.beforeLabel}</div>
                {t.beforeAfter.before.map((item, i) => (
                  <div key={i} style={{ display: "flex", gap: 10, alignItems: "flex-start", marginBottom: 16, fontSize: 14, color: S.muted, lineHeight: 1.55 }}>
                    <span style={{ flexShrink: 0 }}>{beforeEmojis[i] || "\u{1F636}"}</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              {/* arrow */}
              <div className="nl-ba-arrow-wrap" style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                <div style={{ width: 48, height: 48, borderRadius: "50%", background: S.accent, display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 2px 8px rgba(0,0,0,0.08)" }}>
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M4 9H14M14 9L10 5M14 9L10 13" stroke={S.text} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </div>
              </div>
              {/* after */}
              <div style={{ background: S.sageBg, border: `1px solid ${S.sageBorder}`, borderRadius: 20, padding: 32, boxShadow: cardShadow }}>
                <div style={{ fontSize: 12, fontWeight: 600, letterSpacing: 1, textTransform: "uppercase", color: S.green, marginBottom: 20 }}>{t.beforeAfter.afterLabel}</div>
                {t.beforeAfter.after.map((item, i) => (
                  <div key={i} style={{ display: "flex", gap: 10, alignItems: "flex-start", marginBottom: 16, fontSize: 14, color: "#3a5a28", lineHeight: 1.55 }}>
                    <span style={{ flexShrink: 0 }}>{afterEmojis[i] || "\u{2705}"}</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </Reveal>

      {/* ════════════════════ S5 — PROGRAM (white bg) ════════════════════ */}
      <Reveal>
        <section className="nl-section" style={{ background: S.bg, paddingTop: 0, paddingBottom: 100 }}>
          <div className="nl-container-inner" style={{ maxWidth: 1200, margin: "0 auto", padding: "0 48px" }}>
            <div style={{ textAlign: "center", marginBottom: 48 }}>
              <h2 className="nl-h2 font-syne" style={{ fontSize: 36, fontWeight: 700, color: S.text, margin: 0, letterSpacing: -1 }}>{t.program.title}</h2>
              <p style={{ fontSize: 16, color: S.secondary, marginTop: 12, maxWidth: 600, marginLeft: "auto", marginRight: "auto" }}>{t.program.subtitle}</p>
            </div>
            <div className="nl-program-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
              {t.program.sessions.map((sess, i) => (
                <div key={i} className="nl-program-card" style={{ background: S.surface, borderRadius: 20, padding: 32, display: "flex", flexDirection: "column", boxShadow: cardShadow, transition: "box-shadow 0.3s, transform 0.3s", cursor: "default" }}
                  onMouseEnter={(e) => { e.currentTarget.style.boxShadow = cardShadowHover; e.currentTarget.style.transform = "translateY(-2px)"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.boxShadow = cardShadow; e.currentTarget.style.transform = "translateY(0)"; }}
                >
                  {/* header */}
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingBottom: 16, borderBottom: `1px solid ${S.borderLight}`, marginBottom: 18 }}>
                    <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: 1.2, textTransform: "uppercase", color: S.muted }}>SESSION {sess.number}</span>
                    <span style={{ fontSize: 12, color: S.hint }}>{sess.duration}</span>
                  </div>
                  <h3 className="font-syne" style={{ fontSize: 22, fontWeight: 700, color: S.text, margin: 0, letterSpacing: -0.5 }}>{sess.title}</h3>
                  <p style={{ fontSize: 14, fontStyle: "italic", color: "#999", margin: "8px 0 18px" }}>{sess.tagline}</p>
                  <div style={{ flex: 1 }}>
                    {sess.items.map((item, j) => (
                      <div key={j} style={{ display: "flex", gap: 10, alignItems: "flex-start", marginBottom: 12, fontSize: 14, color: S.secondary, lineHeight: 1.55 }}>
                        <span style={{ color: S.greenActive, flexShrink: 0, marginTop: 2, fontWeight: 600 }}>{"\u{2192}"}</span>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginTop: 18 }}>
                    {sess.tags.map((tag, j) => (
                      <span key={j} style={{ fontSize: 11, padding: "4px 12px", borderRadius: 999, background: tag.color + "22", color: S.secondary, fontWeight: 500 }}>{tag.label}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </Reveal>

      {/* ════════════════════ S6 — MID CTA ════════════════════ */}
      <Reveal>
        <section style={{ paddingBottom: 20 }}>
          <div className="nl-container-inner nl-mid-cta" style={{ maxWidth: 1200, margin: "0 auto", padding: "0 48px" }}>
            <div style={{ background: "linear-gradient(135deg, #eef4e8 0%, #f0f5e0 100%)", borderRadius: 20, padding: "40px 44px", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 24, boxShadow: cardShadow }}>
              <div>
                <h3 className="font-syne" style={{ fontSize: 22, fontWeight: 700, color: S.sageText, margin: 0, letterSpacing: -0.5 }}>{t.midCta.title}</h3>
                <p style={{ fontSize: 15, color: S.secondary, margin: "8px 0 0" }}>{t.midCta.subtitle}</p>
              </div>
              <button onClick={scrollToApply} className="nl-cta-btn" style={{ background: S.accent, color: S.text, fontFamily: "inherit", fontSize: 15, fontWeight: 600, padding: "14px 32px", borderRadius: 999, border: "none", cursor: "pointer", whiteSpace: "nowrap", transition: "filter 0.2s" }}>
                {t.midCta.cta}
              </button>
            </div>
          </div>
        </section>
      </Reveal>

      {/* ════════════════════ S7 — RESULT STRIP (sage bg) ════════════════════ */}
      <Reveal>
        <section className="nl-section" style={{ background: S.sageBg, paddingTop: 100, paddingBottom: 100 }}>
          <div className="nl-container-inner" style={{ maxWidth: 1200, margin: "0 auto", padding: "0 48px" }}>
            <div className="nl-result-inner" style={{ display: "grid", gridTemplateColumns: "1fr 1.3fr", gap: 48, alignItems: "center" }}>
              <div>
                <span style={{ fontSize: 11, fontWeight: 600, letterSpacing: 1.5, textTransform: "uppercase", color: S.greenActive }}>{t.result.label}</span>
                <h2 className="nl-h2 font-syne" style={{ fontSize: 36, fontWeight: 700, color: S.sageText, lineHeight: 1.2, margin: "12px 0 0", letterSpacing: -1 }}>
                  {t.result.title1} <span style={{ color: S.green }}>{t.result.titleHighlight}</span> {t.result.title2}
                </h2>
              </div>
              <div className="nl-result-items" style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "16px 24px" }}>
                {t.result.items.map((item, i) => (
                  <div key={i} style={{ display: "flex", gap: 10, alignItems: "flex-start", fontSize: 14, color: S.sageText, lineHeight: 1.55 }}>
                    <span style={{ width: 7, height: 7, borderRadius: "50%", background: S.greenActive, flexShrink: 0, marginTop: 6 }} />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </Reveal>

      {/* ════════════════════ S8 — AI TEAM (white bg) ════════════════════ */}
      <Reveal>
        <section className="nl-section" style={{ background: S.bg, paddingTop: 100, paddingBottom: 100 }}>
          <div className="nl-container-inner" style={{ maxWidth: 1200, margin: "0 auto", padding: "0 48px" }}>
            <div className="nl-two-col" style={{ display: "grid", gridTemplateColumns: "1fr 1.3fr", gap: 56 }}>
              <div>
                <span style={{ fontSize: 11, fontWeight: 600, letterSpacing: 1.5, textTransform: "uppercase", color: S.greenActive }}>{t.pain.label}</span>
                <h2 className="nl-h2 font-syne" style={{ fontSize: 36, fontWeight: 700, color: S.text, lineHeight: 1.2, margin: "12px 0 0", letterSpacing: -1 }}>{t.pain.title}</h2>
                <p style={{ fontSize: 15, color: S.secondary, lineHeight: 1.7, marginTop: 20 }}>{t.pain.quote}</p>
              </div>
              <div className="nl-two-col" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
                {t.pain.cards.map((c, i) => {
                  const icons = [
                    <svg key="r" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg>,
                    <svg key="d" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>,
                    <svg key="m" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/><line x1="4" y1="22" x2="4" y2="15"/></svg>,
                    <svg key="s" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>,
                  ];
                  return (
                    <div key={i} style={{ background: S.surface, borderRadius: 16, padding: 24, boxShadow: cardShadow, display: "flex", flexDirection: "column", gap: 12 }}>
                      <div style={{ width: 40, height: 40, borderRadius: 10, background: S.sageBg, color: S.green, display: "flex", alignItems: "center", justifyContent: "center" }}>
                        {icons[i]}
                      </div>
                      <div style={{ fontSize: 15, fontWeight: 600, color: S.text }}>{c.title}</div>
                      <p style={{ fontSize: 14, color: S.secondary, lineHeight: 1.6, margin: 0 }}>{c.text}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      </Reveal>

      {/* ════════════════════ S9 — ABOUT (white bg) ════════════════════ */}
      <Reveal>
        <section className="nl-section" style={{ background: S.bg, paddingTop: 0, paddingBottom: 100 }}>
          <div className="nl-container-inner" style={{ maxWidth: 1200, margin: "0 auto", padding: "0 48px" }}>
            <div className="nl-about-grid" style={{ display: "grid", gridTemplateColumns: "320px 1fr", gap: 56 }}>
              {/* photo */}
              <div style={{ aspectRatio: "3/4", borderRadius: 20, position: "relative", overflow: "hidden", boxShadow: cardShadow }}>
                <img
                  src="/images/michael.jpg"
                  alt="Michael Barbarich"
                  style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top" }}
                />
                <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "20px 24px", background: "linear-gradient(transparent, rgba(0,0,0,0.6))" }}>
                  <div style={{ color: "#fff", fontWeight: 600, fontSize: 15 }}>Michael Barbarich</div>
                  <div style={{ color: "rgba(255,255,255,0.7)", fontSize: 12, marginTop: 2 }}>Serial founder · 2 exits · Tel Aviv</div>
                </div>
              </div>
              {/* content */}
              <div>
                <span style={{ fontSize: 11, fontWeight: 600, letterSpacing: 1.5, textTransform: "uppercase", color: S.hint }}>{t.about.label}</span>
                <h2 className="nl-h2 font-syne" style={{ fontSize: 36, fontWeight: 700, color: S.text, lineHeight: 1.2, margin: "12px 0 0", letterSpacing: -1 }}>
                  {t.about.title1}<br />{t.about.title2}
                </h2>
                <p style={{ fontSize: 15, color: S.secondary, lineHeight: 1.7, marginTop: 20, maxWidth: 540 }}>{t.about.bio}</p>
                <div className="nl-two-col" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginTop: 32 }}>
                  {t.about.credentials.map((c, i) => (
                    <div key={i} style={{ background: S.surface, borderRadius: 16, padding: "18px 20px", boxShadow: cardShadow }}>
                      <span style={{ fontSize: 22 }}>{c.emoji}</span>
                      <div className="font-syne" style={{ fontSize: 24, fontWeight: 700, color: S.text, margin: "8px 0 2px", letterSpacing: -0.5 }}>{c.value}</div>
                      <div style={{ fontSize: 13, color: S.muted }}>{c.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </Reveal>

      {/* ════════════════════ S10 — REVIEWS (white bg) ════════════════════ */}
      <Reveal>
        <section className="nl-section" style={{ background: S.bg, paddingTop: 0, paddingBottom: 100 }}>
          <div className="nl-container-inner" style={{ maxWidth: 1200, margin: "0 auto", padding: "0 48px" }}>
            <div style={{ textAlign: "center", marginBottom: 48 }}>
              <h2 className="nl-h2 font-syne" style={{ fontSize: 36, fontWeight: 700, color: S.text, margin: 0, letterSpacing: -1 }}>{t.reviews.title}</h2>
              <p style={{ fontSize: 16, color: S.secondary, marginTop: 10 }}>{t.reviews.subtitle}</p>
            </div>
            {/* 10/10 rating badge */}
            <div style={{ display: "inline-flex", alignItems: "center", gap: 10, background: S.sageBg, border: `1px solid ${S.sageBorder}`, borderRadius: 999, padding: "8px 20px", marginBottom: 32 }}>
              <span style={{ fontSize: 18, fontWeight: 700, color: S.green, fontFamily: "var(--nl-font-display)" }}>10/10</span>
              <span style={{ fontSize: 13, color: S.sageText }}>{t.reviews.ratingBadge}</span>
            </div>

            <div className="nl-reviews-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
              {t.reviews.items.map((r, i) => (
                <div
                  key={i}
                  style={{
                    gridColumn: i === 0 ? "1 / -1" : undefined,
                    background: S.surface,
                    borderRadius: 20,
                    padding: 32,
                    position: "relative",
                    boxShadow: cardShadow,
                  }}
                >
                  {/* decorative quote */}
                  <span className="font-syne" style={{ position: "absolute", top: 18, right: 24, fontSize: 48, fontWeight: 700, color: S.borderLight, lineHeight: 1 }}>&ldquo;</span>
                  <p
                    style={{ fontSize: 15, color: S.secondary, lineHeight: 1.7, margin: "0 0 20px", position: "relative", zIndex: 1 }}
                    dangerouslySetInnerHTML={{
                      __html: r.text.replace(/<em>/g, '<em style="font-weight:500;color:#0d0d0d;font-style:normal">'),
                    }}
                  />
                  <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                    {(() => {
                      const photoMap: Record<string, string> = { "Leah": "/images/Leah.png", "Inna & Alexandra": "/images/Inna.png", "\u0418\u043d\u043d\u0430 \u0438 \u0410\u043b\u0435\u043a\u0441\u0430\u043d\u0434\u0440\u0430": "/images/Inna.png", "Vlad": "/images/Vlad.png", "\u0412\u043b\u0430\u0434": "/images/Vlad.png", "Mila": "/images/Mila.png", "\u041c\u0438\u043b\u0430": "/images/Mila.png" };
                      const src = photoMap[r.name];
                      return src ? (
                        <img src={src} alt={r.name} style={{ width: 40, height: 40, borderRadius: "50%", objectFit: "cover" }} />
                      ) : (
                        <div style={{ width: 40, height: 40, borderRadius: "50%", background: r.bgColor, color: r.textColor, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14, fontWeight: 700 }}>{r.initials}</div>
                      );
                    })()}
                    <div>
                      <span style={{ fontSize: 14, fontWeight: 600, color: S.text }}>{r.name}</span>
                      <span style={{ fontSize: 13, color: S.muted, marginLeft: 8 }}>{r.role}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </Reveal>

      {/* ════════════════════ S11 — FAQ (white bg) ════════════════════ */}
      <Reveal>
        <section className="nl-section" style={{ background: S.bg, paddingTop: 0, paddingBottom: 100 }}>
          <div className="nl-container-inner" style={{ maxWidth: 1200, margin: "0 auto", padding: "0 48px" }}>
            <div style={{ maxWidth: 760, margin: "0 auto" }}>
              <div style={{ textAlign: "center", marginBottom: 40 }}>
                <h2 className="nl-h2 font-syne" style={{ fontSize: 36, fontWeight: 700, color: S.text, margin: 0, letterSpacing: -1 }}>{t.faq.title}</h2>
                <p style={{ fontSize: 16, color: S.secondary, marginTop: 10 }}>{t.faq.subtitle}</p>
              </div>
              <div style={{ background: S.surface, borderRadius: 20, overflow: "hidden", boxShadow: cardShadow }}>
                {t.faq.items.map((item, i) => {
                  const isOpen = openFaq === i;
                  return (
                    <div key={i} style={{ borderBottom: i < t.faq.items.length - 1 ? `1px solid ${S.borderLight}` : "none" }}>
                      <button
                        onClick={() => setOpenFaq(isOpen ? null : i)}
                        style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "20px 28px", background: "none", border: "none", cursor: "pointer", textAlign: "left", fontFamily: "inherit" }}
                      >
                        <span style={{ fontSize: 15, fontWeight: 500, color: S.text }}>{item.q}</span>
                        <span style={{ width: 30, height: 30, borderRadius: "50%", background: isOpen ? S.accent : "#f5f5f0", display: "flex", alignItems: "center", justifyContent: "center", transition: "all 0.3s", transform: isOpen ? "rotate(45deg)" : "none", flexShrink: 0, marginLeft: 16, fontSize: 18, fontWeight: 300, color: isOpen ? S.text : S.muted }}>
                          +
                        </span>
                      </button>
                      <div style={{ maxHeight: isOpen ? 300 : 0, overflow: "hidden", transition: "max-height 0.35s ease" }}>
                        <p style={{ padding: "0 28px 20px", fontSize: 15, color: S.secondary, lineHeight: 1.7, margin: 0 }}>{item.a}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      </Reveal>

      {/* ════════════════════ S12 — FINAL CTA + FORM (dark sage bg) ════════════════════ */}
      <Reveal>
        <section id="apply" className="nl-section nl-final-section" style={{ background: S.sageDark, margin: "0 48px 48px", borderRadius: 24, paddingTop: 80, paddingBottom: 80, color: "#fff" }}>
          <div className="nl-container-inner" style={{ maxWidth: 1100, margin: "0 auto", padding: "0 56px" }}>
            <div className="nl-two-col" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64 }}>
              {/* left */}
              <div>
                <h2 className="nl-h2 font-syne" style={{ fontSize: 36, fontWeight: 700, lineHeight: 1.15, margin: 0, letterSpacing: -1 }}>
                  {t.finalCta.title1} <span style={{ color: S.accent }}>{t.finalCta.titleHighlight}</span> {t.finalCta.title2}
                </h2>
                <p style={{ fontSize: 16, color: "rgba(255,255,255,0.6)", lineHeight: 1.65, marginTop: 20 }}>{t.finalCta.subtitle}</p>
                <div style={{ display: "flex", flexDirection: "column", gap: 20, marginTop: 36 }}>
                  {t.finalCta.steps.map((step, i) => (
                    <div key={i} style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
                      <div style={{ width: 32, height: 32, borderRadius: "50%", background: "#2a4a22", color: S.accent, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontSize: 14, flexShrink: 0 }}>
                        {i + 1}
                      </div>
                      <span style={{ fontSize: 15, color: "rgba(255,255,255,0.75)", lineHeight: 1.55, paddingTop: 5 }}>{step}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* right — form */}
              <div>
                <div style={{ marginBottom: 24 }}>
                  <h3 className="font-syne" style={{ fontSize: 22, fontWeight: 700, color: "#fff", margin: 0, letterSpacing: -0.5 }}>{t.finalCta.formTitle}</h3>
                  <p style={{ fontSize: 14, color: "rgba(255,255,255,0.45)", margin: "8px 0 0" }}>{t.finalCta.formSubtitle}</p>
                </div>
                <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                  <input
                    required
                    value={formData.name}
                    onChange={(e) => setFormData((p) => ({ ...p, name: e.target.value }))}
                    placeholder={t.finalCta.namePlaceholder}
                    style={{ background: "#1a3018", border: "1px solid #2a4a22", borderRadius: 12, padding: "14px 18px", color: "#fff", fontSize: 15, fontFamily: "inherit", outline: "none", transition: "border 0.2s" }}
                    onFocus={(e) => (e.currentTarget.style.borderColor = S.accent)}
                    onBlur={(e) => (e.currentTarget.style.borderColor = "#2a4a22")}
                  />
                  <input
                    required
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData((p) => ({ ...p, email: e.target.value }))}
                    placeholder={t.finalCta.emailPlaceholder}
                    style={{ background: "#1a3018", border: "1px solid #2a4a22", borderRadius: 12, padding: "14px 18px", color: "#fff", fontSize: 15, fontFamily: "inherit", outline: "none", transition: "border 0.2s" }}
                    onFocus={(e) => (e.currentTarget.style.borderColor = S.accent)}
                    onBlur={(e) => (e.currentTarget.style.borderColor = "#2a4a22")}
                  />
                  {/* contact type toggle + input */}
                  <div>
                    <div style={{ display: "flex", gap: 0, marginBottom: 10, borderRadius: 10, overflow: "hidden", border: "1px solid #2a4a22" }}>
                      {(["telegram", "whatsapp"] as const).map((type) => (
                        <button
                          key={type}
                          type="button"
                          onClick={() => setFormData((p) => ({ ...p, contactType: type, contact: "" }))}
                          style={{
                            flex: 1,
                            padding: "10px 0",
                            fontSize: 13,
                            fontWeight: 600,
                            fontFamily: "inherit",
                            border: "none",
                            cursor: "pointer",
                            background: formData.contactType === type ? S.accent : "#1a3018",
                            color: formData.contactType === type ? S.text : "rgba(255,255,255,0.5)",
                            transition: "all 0.2s",
                          }}
                        >
                          {type === "telegram" ? "Telegram" : "WhatsApp"}
                        </button>
                      ))}
                    </div>
                    <input
                      required
                      value={formData.contact}
                      onChange={(e) => setFormData((p) => ({ ...p, contact: e.target.value }))}
                      placeholder={formData.contactType === "telegram" ? "@username" : "+972 34 567 89"}
                      style={{ width: "100%", background: "#1a3018", border: "1px solid #2a4a22", borderRadius: 12, padding: "14px 18px", color: "#fff", fontSize: 15, fontFamily: "inherit", outline: "none", transition: "border 0.2s", boxSizing: "border-box" }}
                      onFocus={(e) => (e.currentTarget.style.borderColor = S.accent)}
                      onBlur={(e) => (e.currentTarget.style.borderColor = "#2a4a22")}
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={submitting}
                    className="nl-cta-btn"
                    style={{ width: "100%", background: S.accent, color: S.text, fontFamily: "inherit", fontSize: 16, fontWeight: 600, padding: "16px 0", borderRadius: 999, border: "none", cursor: submitting ? "wait" : "pointer", marginTop: 4, transition: "filter 0.2s, opacity 0.2s", opacity: submitting ? 0.7 : 1 }}
                  >
                    {submitting ? "..." : t.finalCta.submit}
                  </button>
                  <p style={{ fontSize: 13, color: "rgba(255,255,255,0.35)", textAlign: "center", margin: "4px 0 0" }}>
                    {"\u{1F4C5}"} {t.finalCta.afterSubmit}
                  </p>
                </form>
              </div>
            </div>
          </div>
        </section>
      </Reveal>

      {/* ─── responsive + animation styles ─── */}
      <style>{`
        .nl-cta-btn:hover {
          filter: brightness(0.92);
        }

        @media (max-width: 1024px) {
          .nl-hero-grid {
            grid-template-columns: 1fr !important;
          }
          .nl-stats-col {
            display: grid !important;
            grid-template-columns: 1fr 1fr 1fr !important;
            flex-direction: unset !important;
            padding-top: 0 !important;
          }
          .nl-hero-h1 {
            font-size: 52px !important;
          }
          .nl-section {
            padding-top: 64px !important;
            padding-bottom: 64px !important;
          }
          .nl-section[style*="padding-top: 0"] {
            padding-top: 0 !important;
          }
        }

        @media (max-width: 768px) {
          .nl-two-col,
          .nl-ba-grid,
          .nl-about-grid,
          .nl-reviews-grid,
          .nl-program-grid,
          .nl-result-inner {
            grid-template-columns: 1fr !important;
          }
          .nl-hero-grid {
            grid-template-columns: 1fr !important;
          }
          .nl-hero-h1 {
            font-size: 36px !important;
            letter-spacing: -1px !important;
          }
          .nl-stats-col {
            display: flex !important;
            flex-direction: column !important;
            padding-top: 0 !important;
          }
          .nl-reviews-grid > div {
            grid-column: auto !important;
          }
          .nl-result-items {
            grid-template-columns: 1fr !important;
          }
          .nl-section {
            padding-top: 48px !important;
            padding-bottom: 48px !important;
          }
          .nl-section[style*="padding-top: 0"] {
            padding-top: 0 !important;
          }
          .nl-section[style*="padding-top: 100"] {
            padding-top: 48px !important;
          }
          .nl-container-inner {
            padding-left: 20px !important;
            padding-right: 20px !important;
          }
          .nl-h2 {
            font-size: 28px !important;
          }
          .nl-ba-arrow-wrap {
            transform: rotate(90deg);
          }
          .nl-final-section {
            margin: 16px !important;
            border-radius: 16px !important;
            padding: 40px 24px !important;
          }
          .nl-mid-cta {
            padding-left: 20px !important;
            padding-right: 20px !important;
          }
          .nl-spots-bar {
            padding-left: 20px !important;
            padding-right: 20px !important;
          }
        }
      `}</style>
    </div>
  );
}
