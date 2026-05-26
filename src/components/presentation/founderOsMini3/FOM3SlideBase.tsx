import { ReactNode } from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import FOM3Footer from "./FOM3Footer";

export default function FOM3SlideBase({
  eyebrow,
  title,
  subtitle,
  children,
  slide,
}: {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  children: ReactNode;
  slide: number;
}) {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col relative">
        <div className="flex flex-col justify-center px-[20px] h-full pb-[24px]">
          {eyebrow && (
            <p className="uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium text-[9px] mb-[8px]">
              {eyebrow}
            </p>
          )}
          <h2 className="font-display text-[22px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] tracking-[-0.01em]">
            {title}
          </h2>
          {subtitle && (
            <p className="text-[11px] text-[hsl(var(--slide-text)/0.9)] leading-[1.5] mt-[8px]">
              {subtitle}
            </p>
          )}
          <div className="mt-[14px] text-[hsl(var(--slide-text))] text-[11px] leading-[1.5]">
            {children}
          </div>
        </div>
        <FOM3Footer slide={slide} />
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col relative">
      <div className="flex flex-col justify-center px-[140px] h-full max-w-[1800px] py-[80px]">
        {eyebrow && (
          <p className="uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium text-[18px] mb-[20px]">
            {eyebrow}
          </p>
        )}
        <h2 className="font-display text-[60px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] tracking-[-0.02em]">
          {title}
        </h2>
        {subtitle && (
          <p className="text-[24px] text-[hsl(var(--slide-text)/0.9)] leading-[1.45] mt-[18px] max-w-[1500px]">
            {subtitle}
          </p>
        )}
        <div className="mt-[36px] text-[hsl(var(--slide-text))] text-[22px] leading-[1.5]">
          {children}
        </div>
      </div>
      <FOM3Footer slide={slide} />
    </div>
  );
}
