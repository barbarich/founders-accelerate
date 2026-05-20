import { useIsMobile } from "@/hooks/use-mobile";
import { useSlideMeta } from "@/components/mini-course/SlideMetaContext";

export default function FOM2Footer({ slide }: { slide: number }) {
  const isMobile = useIsMobile();
  const meta = useSlideMeta();
  const idx = meta.total > 1 ? meta.index : slide;
  const total = meta.total > 1 ? meta.total : 22;
  const label = meta.footerLabel ?? "Михаэль · Сессия 2 из 6";
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
        Slide {idx}/{total}
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
      {label} · Slide {idx}/{total}
    </div>
  );
}
