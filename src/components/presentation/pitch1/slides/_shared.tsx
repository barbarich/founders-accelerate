import { ReactNode } from "react";

// Apple-minimalist palette
export const COLORS = {
  bg: "#FFFFFF",
  bgAlt: "#FAFAFA",
  text: "#0A0A0A",
  muted: "#666666",
  line: "#E5E5E5",
  accent: "#185FA5",
  success: "#639922",
  error: "#D64545",
  panel: "#F8F8F8",
};

export function SlideFrame({ children, padding = 100 }: { children: ReactNode; padding?: number }) {
  return (
    <div
      className="w-full h-full relative"
      style={{
        background: COLORS.bg,
        color: COLORS.text,
        fontFamily: "'Inter', 'SF Pro Display', -apple-system, BlinkMacSystemFont, sans-serif",
        padding: `${padding}px`,
        boxSizing: "border-box",
      }}
    >
      {children}
    </div>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <div
      style={{
        fontSize: 14,
        textTransform: "uppercase",
        letterSpacing: "0.18em",
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
        fontSize: size,
        fontWeight: 500,
        letterSpacing: "-0.02em",
        lineHeight: 1.1,
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
        lineHeight: 1.3,
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
      }}
    >
      {children}
    </div>
  );
}

export function Divider({ width = "100%", margin = "0" }: { width?: string | number; margin?: string }) {
  return <div style={{ width, height: "0.5px", background: COLORS.line, margin }} />;
}

export function Mono({ children, size = 22 }: { children: ReactNode; size?: number }) {
  return (
    <pre
      style={{
        fontFamily: "'JetBrains Mono', 'SF Mono', Menlo, monospace",
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
      }}
    >
      {children}
    </div>
  );
}