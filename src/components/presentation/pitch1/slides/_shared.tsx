import { ReactNode } from "react";

// Founders Circle — dark premium palette (mirrors landing page)
export const COLORS = {
  // resolved approximations of the landing-* HSL tokens for inline styles
  bg: "hsl(20 15% 5%)",
  bgAlt: "hsl(20 12% 8%)",
  text: "hsl(30 20% 92%)",
  muted: "hsl(25 12% 68%)",
  line: "hsl(20 10% 18%)",
  accent: "hsl(25 65% 58%)",       // copper
  accentDim: "hsl(25 55% 48%)",
  success: "hsl(140 50% 55%)",
  error: "hsl(0 70% 60%)",
  panel: "hsla(0,0%,100%,0.04)",   // glass
  panelBorder: "hsla(0,0%,100%,0.08)",
};

const SERIF = "'Playfair Display', Georgia, serif";
const SANS = "'Inter', -apple-system, BlinkMacSystemFont, sans-serif";
const MONO = "'JetBrains Mono', 'SF Mono', Menlo, monospace";

export function SlideFrame({ children, padding = 100 }: { children: ReactNode; padding?: number }) {
  return (
    <div
      className="w-full h-full relative"
      style={{
        background: COLORS.bg,
        color: COLORS.text,
        fontFamily: SANS,
        padding: `${padding}px`,
        boxSizing: "border-box",
        backgroundImage:
          "radial-gradient(ellipse at 20% 0%, hsla(24,85%,55%,0.10) 0%, transparent 55%)," +
          "radial-gradient(ellipse at 80% 100%, hsla(20,80%,45%,0.06) 0%, transparent 55%)",
      }}
    >
      {/* hairline grain overlay */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          opacity: 0.04,
          pointerEvents: "none",
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
          backgroundSize: "256px 256px",
        }}
      />
      <div style={{ position: "relative", zIndex: 1, width: "100%", height: "100%" }}>
      {children}
      </div>
    </div>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <div
      style={{
        fontFamily: MONO,
        fontSize: 14,
        textTransform: "uppercase",
        letterSpacing: "0.22em",
        color: COLORS.accent,
        fontWeight: 500,
      }}
    >
      {children}
    </div>
  );
}

export function H1({ children, size = 64 }: { children: ReactNode; size?: number }) {
  return (
    <h1
      style={{
        fontFamily: SERIF,
        fontSize: size,
        fontWeight: 600,
        letterSpacing: "-0.02em",
        lineHeight: 1.05,
        color: COLORS.text,
        margin: 0,
      }}
    >
      {children}
    </h1>
  );
}

export function H2({ children, size = 28 }: { children: ReactNode; size?: number }) {
  return (
    <div
      style={{
        fontSize: size,
        fontWeight: 400,
        color: COLORS.muted,
        lineHeight: 1.35,
        fontFamily: SANS,
      }}
    >
      {children}
    </div>
  );
}

export function Body({ children, size = 20, color }: { children: ReactNode; size?: number; color?: string }) {
  return (
    <div
      style={{
        fontSize: size,
        fontWeight: 400,
        lineHeight: 1.5,
        color: color ?? COLORS.text,
        fontFamily: SANS,
      }}
    >
      {children}
    </div>
  );
}

export function Divider({ width = "100%", margin = "0" }: { width?: string | number; margin?: string }) {
  return (
    <div
      style={{
        width,
        height: "1px",
        background: `linear-gradient(90deg, transparent, ${COLORS.accent}, transparent)`,
        opacity: 0.6,
        margin,
      }}
    />
  );
}

export function Mono({ children, size = 22 }: { children: ReactNode; size?: number }) {
  return (
    <pre
      style={{
        fontFamily: MONO,
        fontSize: size,
        lineHeight: 1.6,
        color: COLORS.text,
        margin: 0,
        whiteSpace: "pre",
      }}
    >
      {children}
    </pre>
  );
}

export function SlideFooter({ children }: { children: ReactNode }) {
  return (
    <div
      style={{
        position: "absolute",
        bottom: 50,
        left: 100,
        right: 100,
        fontSize: 16,
        color: COLORS.muted,
        fontFamily: SANS,
        zIndex: 2,
      }}
    >
      {children}
    </div>
  );
}