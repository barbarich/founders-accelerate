import { useIsMobile } from "@/hooks/use-mobile";
import FOM2Footer from "./FOM2Footer";

export default function FOM2BlockHeader({
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
        <p className="uppercase tracking-[0.25em] text-[hsl(var(--slide-gold))] font-medium text-[10px] mb-[10px]">
          Раздел {blockNumber}
        </p>
        <div className="font-display text-[140px] font-bold text-[hsl(var(--slide-gold))] leading-[0.85] tracking-[-0.04em]">
          {blockNumber}
        </div>
        <h2 className="font-display text-[26px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] tracking-[-0.01em] mt-[18px]">
          {title}
        </h2>
        {time && <p className="text-[11px] text-[hsl(var(--slide-text-muted))] mt-[10px] italic">{time}</p>}
        <div className="w-[40px] h-[2px] bg-[hsl(var(--slide-gold))] mt-[18px]" />
        <FOM2Footer slide={slide} />
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px] relative">
      <p className="uppercase tracking-[0.25em] text-[hsl(var(--slide-gold))] font-medium text-[20px] mb-[28px]">
        Раздел {blockNumber}
      </p>
      <div className="flex items-end gap-[80px]">
        <div className="font-display text-[440px] font-bold text-[hsl(var(--slide-gold))] leading-[0.8] tracking-[-0.05em]">
          {blockNumber}
        </div>
        <div className="pb-[60px]">
          <h2 className="font-display text-[80px] font-bold text-[hsl(var(--slide-text))] leading-[1.05] tracking-[-0.02em] max-w-[1100px]">
            {title}
          </h2>
          {time && <p className="text-[26px] text-[hsl(var(--slide-text-muted))] mt-[28px] italic">{time}</p>}
          <div className="w-[120px] h-[2px] bg-[hsl(var(--slide-gold))] mt-[36px]" />
        </div>
      </div>
      <FOM2Footer slide={slide} />
    </div>
  );
}
