import { useIsMobile } from "@/hooks/use-mobile";

export default function L6Slide13DemoLive() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex items-center justify-center">
        <div className="text-center px-[28px]">
          <div className="w-[60px] h-[60px] rounded-full bg-[hsl(var(--slide-gold)/0.15)] border-2 border-[hsl(var(--slide-gold)/0.4)] flex items-center justify-center mx-auto mb-[18px]">
            <span className="text-[28px]">⚡</span>
          </div>
          <p className="text-[10px] uppercase tracking-[0.3em] text-[hsl(var(--slide-gold))] font-medium mb-[10px]">
            Live Demo
          </p>
          <h2 className="font-display text-[28px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[12px]">
            Смотрите, что я делаю.<br />Не только что получается.
          </h2>
          <p className="text-[11px] text-[hsl(var(--slide-text-muted))] leading-[1.6] max-w-[280px] mx-auto">
            Записи не будет — это лайв. Вопросы в чат,<br />отвечу после демо.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex items-center justify-center">
      <div className="text-center max-w-[1100px]">
        <div className="w-[120px] h-[120px] rounded-full bg-[hsl(var(--slide-gold)/0.1)] border-2 border-[hsl(var(--slide-gold)/0.3)] flex items-center justify-center mx-auto mb-[44px]">
          <span className="text-[56px]">⚡</span>
        </div>
        <p className="text-[20px] uppercase tracking-[0.3em] text-[hsl(var(--slide-gold))] font-medium mb-[24px]">
          Live Demo — 25 минут
        </p>
        <h2 className="font-display text-[76px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[32px]">
          Смотрите не то, что получается.<br />Смотрите, что я делаю, когда не получается.
        </h2>
        <p className="text-[24px] text-[hsl(var(--slide-text-muted))] leading-[1.5] max-w-[900px] mx-auto">
          Записи этой части не будет. Это лайв.<br />
          Вопросы пишите в чат — отвечу после демо.
        </p>
      </div>
    </div>
  );
}
