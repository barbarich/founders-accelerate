import { useIsMobile } from "@/hooks/use-mobile";

interface Props {
  blockNumber: number;
  title: string;
  subtitle?: string;
}

export default function L16BlockHeader({ blockNumber, title, subtitle }: Props) {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex items-center justify-center">
        <div className="text-center">
          <div className="w-[40px] h-[40px] rounded-full border-2 border-[hsl(var(--slide-gold)/0.3)] flex items-center justify-center mx-auto mb-[16px]">
            <span className="font-mono text-[18px] text-[hsl(var(--slide-gold))]">{blockNumber}</span>
          </div>
          <h2 className="font-display text-[32px] font-bold text-[hsl(var(--slide-text))] leading-tight">{title}</h2>
          {subtitle && <p className="text-[14px] text-[hsl(var(--slide-text-muted))] mt-[10px]">{subtitle}</p>}
          <div className="w-[30px] h-[2px] bg-[hsl(var(--slide-gold))] mx-auto mt-[16px]" />
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex items-center justify-center">
      <div className="text-center">
        <div className="w-[80px] h-[80px] rounded-full border-2 border-[hsl(var(--slide-gold)/0.3)] flex items-center justify-center mx-auto mb-[48px]">
          <span className="font-mono text-[32px] text-[hsl(var(--slide-gold))]">{blockNumber}</span>
        </div>
        <h2 className="font-display text-[72px] font-bold text-[hsl(var(--slide-text))] leading-tight">{title}</h2>
        {subtitle && <p className="text-[28px] text-[hsl(var(--slide-text-muted))] mt-[24px]">{subtitle}</p>}
        <div className="w-[60px] h-[2px] bg-[hsl(var(--slide-gold))] mx-auto mt-[48px]" />
      </div>
    </div>
  );
}
