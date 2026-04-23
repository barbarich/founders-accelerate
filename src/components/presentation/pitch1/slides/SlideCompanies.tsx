import { Eyebrow, COLORS } from "./_shared";
import brich from "@/assets/slides/brich-1.jpg";
import skyroom from "@/assets/slides/skyroom-1.jpg";
import perapuff from "@/assets/slides/perapuff-1.jpg";
import runeverywhere from "@/assets/slides/runeverywhere-1.jpg";
import forextester from "@/assets/slides/forextester-1.jpg";
import metaminder from "@/assets/slides/metaminder-1.jpg";
import mymikey from "@/assets/slides/mymikey-1.jpg";

const SERIF = "'Playfair Display', Georgia, serif";
const MONO = "'JetBrains Mono', monospace";

const companies = [
  { period: "2009-13", name: "B-rich Education", tag: "EdTech · 2000+ студентов", image: brich, contain: false },
  { period: "2013-16", name: "Sky Room", tag: "HoReCa · экзит", image: skyroom, contain: false },
  { period: "2018-21", name: "פופים PERA", tag: "E-commerce · экзит", image: perapuff, contain: true },
  { period: "2020-22", name: "RunEverywhere", tag: "50K+ клиентов · 107 стран", image: runeverywhere, contain: false },
  { period: "2023-24", name: "ForexTester", tag: "FinTech CEO · прибыль +30%", image: forextester, contain: true },
  { period: "2024-н.в.", name: "MetaMinder", tag: "B2B SaaS · CEO/CPO/CMO", image: metaminder, contain: false },
  { period: "2025-н.в.", name: "mymikey.ai", tag: "AI · dating · соло", image: mymikey, contain: true },
];

export default function SlideCompanies() {
  return (
    <div
      className="w-full h-full relative flex flex-col"
      style={{
        background: COLORS.bg,
        color: COLORS.text,
        fontFamily: "'Inter', sans-serif",
        padding: "80px 100px",
        boxSizing: "border-box",
        backgroundImage:
          "radial-gradient(ellipse at 50% 0%, hsla(24,85%,55%,0.10) 0%, transparent 60%)",
      }}
    >
      {/* grain */}
      <div
        aria-hidden
        style={{
          position: "absolute", inset: 0, opacity: 0.04, pointerEvents: "none",
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
          backgroundSize: "256px 256px",
        }}
      />

      <div style={{ position: "relative", zIndex: 1 }} className="flex flex-col h-full">
        <div className="flex items-baseline justify-between mb-2">
          <Eyebrow>Мой опыт</Eyebrow>
          <div style={{ fontFamily: MONO, fontSize: 14, color: COLORS.muted, letterSpacing: "0.1em" }}>
            16 лет · 7 компаний · 3 экзита
          </div>
        </div>
        <h2
          style={{
            fontFamily: SERIF, fontSize: 64, fontWeight: 600,
            letterSpacing: "-0.02em", lineHeight: 1, margin: 0, marginBottom: 36,
          }}
        >
          Компании, которые я построил
        </h2>

        {/* Grid 4 + 3 */}
        <div className="grid grid-cols-4 gap-5 flex-1">
          {companies.map((c, i) => (
            <div
              key={c.name}
              style={{
                background: COLORS.panel,
                border: `1px solid ${COLORS.panelBorder}`,
                borderRadius: 8,
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
                position: "relative",
              }}
            >
              {/* image */}
              <div
                style={{
                  height: 200,
                  position: "relative",
                  background: COLORS.bgAlt,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  overflow: "hidden",
                }}
              >
                <img
                  src={c.image}
                  alt={c.name}
                  style={{ width: "100%", height: "100%", objectFit: c.contain ? "contain" : "cover" }}
                />
                <div
                  style={{
                    position: "absolute", inset: 0,
                    background: "linear-gradient(to bottom, transparent 50%, hsla(20,15%,5%,0.85) 100%)",
                  }}
                />
              </div>
              {/* meta */}
              <div style={{ padding: "16px 18px", borderTop: `1px solid ${COLORS.panelBorder}` }}>
                <div style={{ fontFamily: MONO, fontSize: 12, color: COLORS.accent, letterSpacing: "0.12em", marginBottom: 6 }}>
                  {c.period}
                </div>
                <div style={{ fontSize: 20, fontWeight: 600, color: COLORS.text, lineHeight: 1.15, marginBottom: 4 }}>
                  {c.name}
                </div>
                <div style={{ fontSize: 13, color: COLORS.muted, lineHeight: 1.35 }}>
                  {c.tag}
                </div>
              </div>
            </div>
          ))}

          {/* Final summary cell to fill the 8th slot in the 4×2 grid */}
          <div
            style={{
              background: "linear-gradient(135deg, hsla(25,65%,58%,0.12), hsla(25,55%,48%,0.04))",
              border: `1px solid hsla(25,65%,58%,0.35)`,
              borderRadius: 8,
              padding: 24,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "flex-start",
              gap: 10,
            }}
          >
            <div style={{ fontFamily: MONO, fontSize: 12, color: COLORS.accent, letterSpacing: "0.12em" }}>
              ИТОГО
            </div>
            <div style={{ fontFamily: SERIF, fontSize: 40, fontWeight: 600, lineHeight: 1, color: COLORS.text }}>
              $0 → $8M
            </div>
            <div style={{ fontSize: 14, color: COLORS.muted, lineHeight: 1.35 }}>
              ARR · 50K+ клиентов · 107 стран
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}