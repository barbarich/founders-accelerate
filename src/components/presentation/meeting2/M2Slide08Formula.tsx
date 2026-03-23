import { useIsMobile } from "@/hooks/use-mobile";

export default function M2Slide08Formula() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[24px]">
        <p className="text-[10px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[4px]">Позиционирование</p>
        <h2 className="font-display text-[24px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[12px]">
          Формула результата
        </h2>
        <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.3)] rounded-[8px] p-[12px] mb-[14px]">
          <p className="text-[11px] text-[hsl(var(--slide-text))] leading-[1.8]">
            <span className="text-[hsl(var(--slide-gold))] font-semibold">[Кто]</span> получает{" "}
            <span className="text-[hsl(var(--slide-gold))] font-semibold">[результат]</span>{" "}
            с помощью <span className="text-[hsl(var(--slide-gold))] font-semibold">[продукт]</span>,{" "}
            без <span className="text-[hsl(var(--slide-gold))] font-semibold">[боль / старый способ]</span>.
          </p>
        </div>
        <div className="space-y-[6px] mb-[10px]">
          <p className="text-[10px] text-[hsl(var(--slide-gold))] font-semibold uppercase tracking-[0.15em]">Ключевые правила</p>
          <div className="space-y-[4px]">
            {[
              "Результат, который можно измерить: часы, деньги, штуки",
              "Конкретный клиент, не «все» и не «бизнесы»",
              "Без = от чего избавляете (боль, старый способ)",
              "Ноль жаргона — бабушка должна понять",
            ].map((r, i) => (
              <div key={i} className="flex items-center gap-[6px]">
                <span className="w-[4px] h-[4px] rounded-full bg-[hsl(var(--slide-gold))] shrink-0" />
                <p className="text-[10px] text-[hsl(var(--slide-text)/0.8)] leading-[1.4]">{r}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-[hsl(var(--slide-gold)/0.06)] border border-[hsl(var(--slide-gold)/0.2)] rounded-[6px] px-[10px] py-[8px]">
          <p className="text-[10px] text-[hsl(var(--slide-text))]">
            💡 Если бабушка не поняла — переписывайте
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[16px]">Позиционирование</p>
      <h2 className="font-display text-[60px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[32px]">Формула результата</h2>
      <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.3)] rounded-[12px] p-[40px] mb-[40px] max-w-[1000px]">
        <p className="text-[26px] text-[hsl(var(--slide-text))] leading-[1.8]">
          <span className="text-[hsl(var(--slide-gold))] font-semibold">[Кто]</span> получает{" "}
          <span className="text-[hsl(var(--slide-gold))] font-semibold">[конкретный результат]</span>{" "}
          с помощью <span className="text-[hsl(var(--slide-gold))] font-semibold">[продукт]</span>,{" "}
          без <span className="text-[hsl(var(--slide-gold))] font-semibold">[боль / старый способ]</span>.
        </p>
      </div>
      <div className="flex gap-[48px] max-w-[1000px]">
        <div className="flex-1">
          <p className="text-[16px] text-[hsl(var(--slide-gold))] font-semibold uppercase tracking-[0.15em] mb-[16px]">Ключевые правила</p>
          <div className="space-y-[12px]">
            {[
              "Результат, который можно измерить: часы, деньги, штуки",
              "Конкретный клиент, а не «все» и не «бизнесы»",
              "«Без» = от чего избавляете (боль или старый способ)",
              "Ноль жаргона — если бабушка не поняла, переписывайте",
            ].map((r, i) => (
              <div key={i} className="flex items-center gap-[12px]">
                <span className="w-[6px] h-[6px] rounded-full bg-[hsl(var(--slide-gold))] shrink-0" />
                <p className="text-[20px] text-[hsl(var(--slide-text)/0.8)] leading-[1.4]">{r}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="w-[1px] bg-[hsl(var(--slide-border)/0.3)]" />
        <div className="flex-1 flex items-center">
          <div className="bg-[hsl(var(--slide-gold)/0.06)] border border-[hsl(var(--slide-gold)/0.2)] rounded-[12px] px-[28px] py-[20px]">
            <p className="text-[22px] text-[hsl(var(--slide-text))]">
              💡 Тест простоты: если ваша бабушка не поняла что вы делаете — переписывайте
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
