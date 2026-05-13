import { useIsMobile } from "@/hooks/use-mobile";

export default function FOM1Footer({ slide }: { slide: number }) {
  const isMobile = useIsMobile();
  if (isMobile) {
    return (
      <div
        className="absolute"
        style={{
          right: 14,
          bottom: 10,
          color: "hsl(var(--slide-text-muted))",
          fontSize: 8,
          letterSpacing: "0.04em",
        }}
      >
        Slide {slide}/30
      </div>
    );
  }
  return (
    <div
      className="absolute"
      style={{
        right: 48,
        bottom: 28,
        color: "hsl(var(--slide-text-muted))",
        fontSize: 14,
        letterSpacing: "0.04em",
      }}
    >
      Михаэль · Сессия 1 из 6 · Slide {slide}/30
    </div>
  );
}
