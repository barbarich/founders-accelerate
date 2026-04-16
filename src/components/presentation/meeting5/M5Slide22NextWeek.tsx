import { useIsMobile } from "@/hooks/use-mobile";

export default function M5Slide22NextWeek() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[28px]">
        <p className="text-[10px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[4px]">
          Следующая встреча
        </p>
        <h2 className="font-display text-[24px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[12px]">
          Неделя 6:<br />Первые 60 секунд
        </h2>
        <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.2)] rounded-[8px] px-[12px] py-[10px] mb-[10px]">
          <p className="text-[11px] text-[hsl(var(--slide-text))] leading-[1.5]">
            70% юзеров уходят в первую минуту. Разберём:
          </p>
          <div className="space-y-[4px] mt-[6px]">
            <p className="text-[9px] text-[hsl(var(--slide-text-muted))]">→ Anatomy of идеального onboarding</p>
            <p className="text-[9px] text-[hsl(var(--slide-text-muted))]">→ Aha-moment: кратчайший путь до ценности</p>
            <p className="text-[9px] text-[hsl(var(--slide-text-muted))]">→ Тесты «60 секунд» на ваших продуктах</p>
          </div>
        </div>
        <p className="text-[10px] text-[hsl(var(--slide-gold))] font-semibold leading-[1.4]">
          На Неделю 6 приходите с прод-ссылкой. Иначе тестировать нечего.
        </p>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[16px]">
        Следующая встреча
      </p>
      <h2 className="font-display text-[72px] font-bold text-[hsl(var(--slide-text))] leading-[1.05] mb-[36px]">
        Неделя 6: Первые 60 секунд
      </h2>

      <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.25)] rounded-[16px] px-[36px] py-[28px] max-w-[1200px] mb-[24px]">
        <p className="text-[24px] text-[hsl(var(--slide-text))] leading-[1.5] mb-[18px]">
          70% юзеров уходят в первую минуту. На Неделе 6 разберём:
        </p>
        <div className="space-y-[10px]">
          <p className="text-[20px] text-[hsl(var(--slide-text-muted))] leading-[1.4]">→ Anatomy идеального onboarding (разбор Notion, Linear, Duolingo)</p>
          <p className="text-[20px] text-[hsl(var(--slide-text-muted))] leading-[1.4]">→ Aha-moment: кратчайший путь от клика до ценности</p>
          <p className="text-[20px] text-[hsl(var(--slide-text-muted))] leading-[1.4]">→ Живые тесты «60 секунд» на ваших продуктах</p>
        </div>
      </div>

      <p className="text-[22px] text-[hsl(var(--slide-gold))] font-semibold max-w-[1200px]">
        Приходите с прод-ссылкой. Иначе тестировать нечего — и встреча превратится в теорию.
      </p>
    </div>
  );
}
