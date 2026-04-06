import { useIsMobile } from "@/hooks/use-mobile";

export default function M4Slide05DemoTime() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex items-center justify-center">
        <div className="text-center px-[28px]">
          <p className="text-[48px] mb-[16px]">🎙️</p>
          <h2 className="font-display text-[36px] font-bold text-[hsl(var(--slide-text))] leading-[1.1]">
            Демо-время
          </h2>
          <p className="text-[14px] text-[hsl(var(--slide-text-muted))] mt-[12px]">
            5 минут на проект + 5 минут фидбек
          </p>
          <div className="w-[30px] h-[2px] bg-[hsl(var(--slide-gold))] mx-auto mt-[20px]" />
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex items-center justify-center">
      <div className="text-center">
        <p className="text-[96px] mb-[32px]">🎙️</p>
        <h2 className="font-display text-[86px] font-bold text-[hsl(var(--slide-text))] leading-[1.05]">
          Демо-время
        </h2>
        <p className="text-[28px] text-[hsl(var(--slide-text-muted))] mt-[24px]">
          5 минут на проект + 5 минут фидбек
        </p>
        <div className="w-[60px] h-[2px] bg-[hsl(var(--slide-gold))] mx-auto mt-[48px]" />
      </div>
    </div>
  );
}
