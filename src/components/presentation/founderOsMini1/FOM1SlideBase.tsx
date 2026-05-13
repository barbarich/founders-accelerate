import { ReactNode } from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import FOM1Footer from "./FOM1Footer";

export default function FOM1SlideBase({
  eyebrow,
  title,
  subtitle,
  children,
  slide,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
  slide: number;
}) {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col px-[20px] pt-[24px] pb-[36px] relative overflow-hidden">
        {eyebrow && (
          <p className="text-[9px] uppercase tracking-[0.25em] text-[hsl(var(--slide-gold))] font-medium mb-[6px]">
            {eyebrow}
          </p>
        )}
        <h2 className="font-display text-[22px] font-bold text-[hsl(var(--slide-text))] leading-[1.12] tracking-[-0.01em]">
          {title}
        </h2>
        {subtitle && (
          <p className="text-[11px] text-[hsl(var(--slide-text-muted))] mt-[6px] leading-[1.45]">{subtitle}</p>
        )}
        <div className="flex-1 mt-[12px] overflow-hidden text-[hsl(var(--slide-text))] text-[11px] leading-[1.5]">
          {children}
        </div>
        <FOM1Footer slide={slide} />
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col px-[140px] pt-[80px] pb-[80px] relative overflow-hidden">
      {eyebrow && (
        <p className="text-[16px] uppercase tracking-[0.25em] text-[hsl(var(--slide-gold))] font-medium mb-[14px]">
          {eyebrow}
        </p>
      )}
      <h2 className="font-display text-[56px] font-bold text-[hsl(var(--slide-text))] leading-[1.05] tracking-[-0.02em]">
        {title}
      </h2>
      {subtitle && (
        <p className="text-[24px] text-[hsl(var(--slide-text-muted))] mt-[14px] leading-[1.35] max-w-[1500px]">
          {subtitle}
        </p>
      )}
      <div className="flex-1 mt-[36px] text-[hsl(var(--slide-text))] text-[22px] leading-[1.5]">
        {children}
      </div>
      <FOM1Footer slide={slide} />
    </div>
  );
}
