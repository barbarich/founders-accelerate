import { useIsMobile } from "@/hooks/use-mobile";

export default function L2Slide17Tldv() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[28px]">
        <p className="text-[10px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[6px]">Инструмент</p>
        <h2 className="font-display text-[28px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[6px]">tl;dv</h2>
        <p className="text-[12px] text-[hsl(var(--slide-text-muted))] mb-[16px]">Запись и AI-анализ интервью. Бесплатно.</p>
        <div className="space-y-[8px]">
          <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.4)] rounded-[8px] p-[14px]">
            <h3 className="text-[12px] font-semibold text-[hsl(var(--slide-text))] mb-[6px]">Что делает</h3>
            <p className="text-[11px] text-[hsl(var(--slide-text-muted))] leading-[1.6]">Бот записывает Zoom/Meet, транскрибирует, выделяет ключевые моменты.</p>
          </div>
          <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.4)] rounded-[8px] p-[14px]">
            <h3 className="text-[12px] font-semibold text-[hsl(var(--slide-text))] mb-[6px]">Зачем</h3>
            <p className="text-[11px] text-[hsl(var(--slide-text-muted))] leading-[1.6]">Готовое саммари с цитатами после звонка.</p>
          </div>
          <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.4)] rounded-[8px] p-[14px]">
            <h3 className="text-[12px] font-semibold text-[hsl(var(--slide-text))] mb-[6px]">Живое демо</h3>
            <p className="text-[11px] text-[hsl(var(--slide-text)/0.85)] leading-[1.6] italic">
              "Вот запись интервью, вот AI-саммари, вот как нахожу инсайты."
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[16px]">Инструмент</p>
      <h2 className="font-display text-[60px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[16px]">tl;dv</h2>
      <p className="text-[28px] text-[hsl(var(--slide-text-muted))] mb-[48px]">Запись и AI-анализ интервью. Бесплатно.</p>
      <div className="grid grid-cols-2 gap-[32px]">
        <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.4)] rounded-[12px] p-[36px]">
          <h3 className="text-[22px] font-semibold text-[hsl(var(--slide-text))] mb-[16px]">Что делает</h3>
          <p className="text-[20px] text-[hsl(var(--slide-text-muted))] leading-[1.6]">Бот подключается к Zoom/Google Meet, записывает, транскрибирует, выделяет ключевые моменты.</p>
        </div>
        <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.4)] rounded-[12px] p-[36px]">
          <h3 className="text-[22px] font-semibold text-[hsl(var(--slide-text))] mb-[16px]">Зачем</h3>
          <p className="text-[20px] text-[hsl(var(--slide-text-muted))] leading-[1.6]">Не нужно записывать на бумажке. После звонка — готовое саммари с цитатами.</p>
        </div>
      </div>
      <div className="mt-[32px] bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.4)] rounded-[12px] p-[36px]">
        <h3 className="text-[22px] font-semibold text-[hsl(var(--slide-text))] mb-[12px]">Живое демо</h3>
        <p className="text-[20px] text-[hsl(var(--slide-text)/0.85)] leading-[1.6] italic">
          "Вот так выглядит запись интервью, вот AI-саммари, вот как нахожу инсайты не пересматривая час видео."
        </p>
      </div>
    </div>
  );
}
