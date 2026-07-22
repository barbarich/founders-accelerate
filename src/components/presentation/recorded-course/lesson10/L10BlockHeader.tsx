import { useIsMobile } from "@/hooks/use-mobile";

export default function L10BlockHeader({
  blockNumber,
  title,
  subtitle,
}: {
  blockNumber: number;
  title: string;
  subtitle?: string;
}) {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[24px]">
        <p className="text-[10px] uppercase tracking-[0.3em] text-[hsl(var(--slide-gold))] font-medium mb-[8px]">
          Блок {blockNumber}
        </p>
        <h2 className="font-display text-[28px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] tracking-[-0.01em]">
          {title}
        </h2>
        {subtitle && (
          <p className="text-[12px] text-[hsl(var(--slide-text-muted))] mt-[10px]">{subtitle}</p>
        )}
        <div className="w-[40px] h-[2px] bg-[hsl(var(--slide-gold))] mt-[16px]" />
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px]">
      <p className="text-[20px] uppercase tracking-[0.3em] text-[hsl(var(--slide-gold))] font-medium mb-[20px]">
        Блок {blockNumber}
      </p>
      <h2 className="font-display text-[96px] font-bold text-[hsl(var(--slide-text))] leading-[1.0] tracking-[-0.02em] max-w-[1500px]">
        {title}
      </h2>
      {subtitle && (
        <p className="text-[28px] text-[hsl(var(--slide-text-muted))] mt-[28px]">{subtitle}</p>
      )}
      <div className="w-[120px] h-[2px] bg-[hsl(var(--slide-gold))] mt-[40px]" />
    </div>
  );
}
