import { useIsMobile } from "@/hooks/use-mobile";
import FOM1Footer from "./FOM1Footer";

export default function FOM1BlockHeader({
  blockNumber,
  title,
  time,
  slide,
}: {
  blockNumber: number;
  title: string;
  time?: string;
  slide: number;
}) {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[24px] relative">
        <p className="text-[10px] uppercase tracking-[0.3em] text-[hsl(var(--slide-gold))] font-medium mb-[10px]">
          Раздел {blockNumber}
        </p>
        <div className="font-display text-[120px] font-bold text-[hsl(var(--slide-gold))] leading-[0.85] tracking-[-0.04em]">
          {blockNumber}
        </div>
        <h2 className="font-display text-[28px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] tracking-[-0.01em] mt-[16px]">
          {title}
        </h2>
        {time && (
          <p className="text-[12px] text-[hsl(var(--slide-text-muted))] mt-[10px]">{time}</p>
        )}
        <div className="w-[40px] h-[2px] bg-[hsl(var(--slide-gold))] mt-[18px]" />
        <FOM1Footer slide={slide} />
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px] relative">
      <p className="text-[20px] uppercase tracking-[0.3em] text-[hsl(var(--slide-gold))] font-medium mb-[20px]">
        Раздел {blockNumber}
      </p>
      <div className="flex items-end gap-[60px]">
        <div className="font-display text-[420px] font-bold text-[hsl(var(--slide-gold))] leading-[0.8] tracking-[-0.04em]">
          {blockNumber}
        </div>
        <div className="pb-[40px]">
          <h2 className="font-display text-[88px] font-bold text-[hsl(var(--slide-text))] leading-[1.0] tracking-[-0.02em] max-w-[1100px]">
            {title}
          </h2>
          {time && (
            <p className="text-[28px] text-[hsl(var(--slide-text-muted))] mt-[28px]">{time}</p>
          )}
          <div className="w-[120px] h-[2px] bg-[hsl(var(--slide-gold))] mt-[36px]" />
        </div>
      </div>
      <FOM1Footer slide={slide} />
    </div>
  );
}
