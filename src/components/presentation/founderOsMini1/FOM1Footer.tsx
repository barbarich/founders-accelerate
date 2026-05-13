import { useIsMobile } from "@/hooks/use-mobile";

export default function FOM1Footer({ slide }: { slide: number }) {
  const isMobile = useIsMobile();
  return (
    <div
      className={`absolute left-0 right-0 bottom-0 flex items-center justify-between border-t border-[hsl(var(--slide-border)/0.25)] ${
        isMobile ? "px-[18px] py-[8px]" : "px-[140px] py-[18px]"
      }`}
    >
      <span
        className={`uppercase tracking-[0.25em] text-[hsl(var(--slide-gold)/0.85)] font-mono ${
          isMobile ? "text-[8px]" : "text-[12px]"
        }`}
      >
        The Founders Circle · Founder OS Mini
      </span>
      <span
        className={`text-[hsl(var(--slide-text-muted))] font-mono ${
          isMobile ? "text-[8px]" : "text-[12px]"
        }`}
      >
        Михаэль · Сессия 1 из 6 · Slide {slide}/30
      </span>
    </div>
  );
}
