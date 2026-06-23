import { useIsMobile } from "@/hooks/use-mobile";

export default function L2Slide17Tldv() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[28px]">
        <p className="text-[10px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[6px]">Инструменты записи</p>
        <h2 className="font-display text-[26px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[6px]">tl;dv или Granola</h2>
        <p className="text-[12px] text-[hsl(var(--slide-text-muted))] mb-[14px]">Запись и AI-саммари интервью. Не полагайся на память.</p>
        <div className="space-y-[8px] mb-[10px]">
          <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.4)] rounded-[8px] p-[12px]">
            <h3 className="text-[12px] font-semibold text-[hsl(var(--slide-text))] mb-[4px]">tl;dv</h3>
            <p className="text-[11px] text-[hsl(var(--slide-text-muted))] leading-[1.55]">Бот в Zoom/Meet: запись, транскрипт, саммари с цитатами. Бесплатно.</p>
          </div>
          <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.4)] rounded-[8px] p-[12px]">
            <h3 className="text-[12px] font-semibold text-[hsl(var(--slide-text))] mb-[4px]">Granola</h3>
            <p className="text-[11px] text-[hsl(var(--slide-text-muted))] leading-[1.55]">Пишет заметки прямо с твоего звонка (Mac), AI структурирует. Без бота в комнате.</p>
          </div>
        </div>
        <div className="bg-[hsl(var(--slide-gold)/0.06)] border-l-2 border-[hsl(var(--slide-gold))] rounded-[6px] px-[10px] py-[8px]">
          <p className="text-[10px] text-[hsl(var(--slide-text)/0.9)] leading-[1.5]">
            💡 Держи все заметки со звонков в одном месте и подключи к ним свой AI — пусть строит продукт на основе реальных разговоров с юзерами.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[16px]">Инструменты записи</p>
      <h2 className="font-display text-[60px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[16px]">tl;dv или Granola</h2>
      <p className="text-[28px] text-[hsl(var(--slide-text-muted))] mb-[40px]">Запись и AI-анализ интервью. Не полагайся на память — фиксируй дословно.</p>
      <div className="grid grid-cols-2 gap-[32px]">
        <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.4)] rounded-[12px] p-[36px]">
          <h3 className="text-[24px] font-semibold text-[hsl(var(--slide-text))] mb-[14px]">tl;dv <span className="text-[16px] text-[hsl(var(--slide-gold))] font-medium">· бесплатно</span></h3>
          <p className="text-[20px] text-[hsl(var(--slide-text-muted))] leading-[1.6]">Бот подключается к Zoom / Google Meet: записывает, транскрибирует, выделяет ключевые моменты. После звонка — готовое саммари с цитатами.</p>
        </div>
        <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.4)] rounded-[12px] p-[36px]">
          <h3 className="text-[24px] font-semibold text-[hsl(var(--slide-text))] mb-[14px]">Granola <span className="text-[16px] text-[hsl(var(--slide-gold))] font-medium">· альтернатива</span></h3>
          <p className="text-[20px] text-[hsl(var(--slide-text-muted))] leading-[1.6]">Пишет заметки прямо с твоего звонка (Mac), без бота в комнате. AI структурирует расшифровку в чистые notes — удобно для офлайн-встреч.</p>
        </div>
      </div>
      <div className="mt-[28px] bg-[hsl(var(--slide-gold)/0.08)] border-l-[4px] border-[hsl(var(--slide-gold))] rounded-[12px] px-[32px] py-[20px]">
        <p className="text-[22px] text-[hsl(var(--slide-text))] leading-[1.45]">
          💡 <span className="font-semibold">Все заметки со звонков — в одном месте</span> (Granola / Notion) и подключи к ним свой AI-инструмент. Пусть строит продукт на основе реальных разговоров с юзерами, а не догадок.
        </p>
      </div>
    </div>
  );
}
