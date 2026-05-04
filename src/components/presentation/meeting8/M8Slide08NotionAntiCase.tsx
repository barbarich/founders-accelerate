import { useIsMobile } from "@/hooks/use-mobile";

export default function M8Slide08NotionAntiCase() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[20px]">
        <p className="text-[10px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[6px]">
          Анти-кейс · пустой документ
        </p>
        <h2 className="font-display text-[20px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[12px]">
          Notion прекрасен. И теряет 60% юзеров на втором визите.
        </h2>
        <p className="text-[11px] text-[hsl(var(--slide-text-muted))] leading-[1.5] mb-[10px]">
          Открыл — пустая страница. Триггер не пришёл (нечего напомнить). Действие непонятно. Награды нет. Инвестиции нет.
        </p>
        <div className="bg-[hsl(var(--slide-gold)/0.1)] border-l-2 border-[hsl(var(--slide-gold))] px-[12px] py-[10px]">
          <p className="text-[11px] font-bold text-[hsl(var(--slide-text))] leading-[1.4] mb-[4px]">Что чинит петлю:</p>
          <p className="text-[10px] text-[hsl(var(--slide-text-muted))] leading-[1.5]">→ Готовый шаблон вместо чистого листа</p>
          <p className="text-[10px] text-[hsl(var(--slide-text-muted))] leading-[1.5]">→ Один импортированный док на старте</p>
          <p className="text-[10px] text-[hsl(var(--slide-text-muted))] leading-[1.5]">→ Дайджест «вы создали 3 страницы — посмотреть»</p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex items-center px-[140px]">
      <div className="flex-1 pr-[60px]">
        <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[16px]">
          Анти-кейс · пустой документ
        </p>
        <h2 className="font-display text-[52px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[24px]">
          Notion прекрасен.<br />И теряет 60% юзеров на втором визите.
        </h2>
        <p className="text-[24px] text-[hsl(var(--slide-text-muted))] leading-[1.5] max-w-[900px]">
          Открыл — пустая страница. Триггер не пришёл (нечего напомнить). Действие непонятно. Награды нет. Инвестиции нет — петля разорвана в нулевой точке.
        </p>
      </div>
      <div className="w-[560px] shrink-0 bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.25)] rounded-[16px] px-[36px] py-[28px]">
        <p className="text-[14px] uppercase tracking-[0.15em] text-[hsl(var(--slide-gold))] font-medium mb-[14px]">Что чинит петлю</p>
        <div className="space-y-[12px]">
          <p className="text-[20px] text-[hsl(var(--slide-text))] leading-[1.4]"><span className="text-[hsl(var(--slide-gold))] mr-[10px]">→</span>Готовый шаблон вместо чистого листа</p>
          <p className="text-[20px] text-[hsl(var(--slide-text))] leading-[1.4]"><span className="text-[hsl(var(--slide-gold))] mr-[10px]">→</span>Один импортированный документ на старте</p>
          <p className="text-[20px] text-[hsl(var(--slide-text))] leading-[1.4]"><span className="text-[hsl(var(--slide-gold))] mr-[10px]">→</span>Дайджест «вы создали 3 страницы — посмотреть»</p>
        </div>
      </div>
    </div>
  );
}