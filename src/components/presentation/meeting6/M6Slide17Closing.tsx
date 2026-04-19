import { useIsMobile } from "@/hooks/use-mobile";

export default function M6Slide17Closing() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex items-center justify-center">
        <div className="text-center px-[24px]">
          <h2 className="font-display text-[24px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[14px]">
            Продукт становится готовым,<br />когда за него платят.
          </h2>
          <p className="text-[11px] text-[hsl(var(--slide-text-muted))] leading-[1.6] mb-[14px]">
            Сегодня — каркас и рабочий первый флоу.<br />
            Через неделю — лёгкий путь до Aha.<br />
            Через месяц — первые деньги на счёт.
          </p>
          <p className="text-[11px] text-[hsl(var(--slide-text))] leading-[1.5] mb-[18px] font-medium">
            Не жди идеального момента. Ни один продукт не был готов в день первой продажи.<br />
            Готовым его делает первый юзер, который открыл кошелёк.
          </p>

          <div className="bg-[hsl(var(--slide-gold)/0.1)] border border-[hsl(var(--slide-gold)/0.3)] rounded-[10px] px-[14px] py-[9px] mb-[14px]">
            <p className="text-[12px] text-[hsl(var(--slide-text))] font-bold leading-[1.4]">
              M7 → данные от живых юзеров<br />
              M9 → первые продажи
            </p>
            <p className="text-[10px] text-[hsl(var(--slide-text-muted))] mt-[4px] leading-[1.4]">
              Каждый коммит между ними — шаг к первому чеку.
            </p>
          </div>

          <p className="text-[12px] text-[hsl(var(--slide-gold))] font-semibold">
            Среда — чек с парой. Без доказательства прогресса — нет ответа.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex items-center justify-center">
      <div className="text-center max-w-[1300px]">
        <h2 className="font-display text-[72px] font-bold text-[hsl(var(--slide-text))] leading-[1.05] mb-[28px] tracking-[-0.02em]">
          Продукт становится готовым,<br />когда за него платят.
        </h2>
        <p className="text-[28px] text-[hsl(var(--slide-text-muted))] leading-[1.5] mb-[28px]">
          Сегодня — каркас и рабочий первый флоу.<br />
          Через неделю — лёгкий путь до Aha.<br />
          Через месяц — первые деньги на счёт.
        </p>
        <p className="text-[28px] text-[hsl(var(--slide-text))] leading-[1.5] mb-[44px] font-medium max-w-[1200px] mx-auto">
          Не жди идеального момента. Ни один продукт не был готов в день первой продажи.<br />
          Готовым его делает первый юзер, который открыл кошелёк.
        </p>

        <div className="bg-[hsl(var(--slide-gold)/0.1)] border border-[hsl(var(--slide-gold)/0.3)] rounded-[16px] px-[44px] py-[24px] mb-[36px] inline-block">
          <p className="text-[28px] text-[hsl(var(--slide-text))] font-bold leading-[1.4]">
            M7 → данные от живых юзеров &nbsp;·&nbsp; M9 → первые продажи
          </p>
          <p className="text-[20px] text-[hsl(var(--slide-text-muted))] mt-[8px]">
            Каждый коммит между ними — шаг к первому чеку.
          </p>
        </div>

        <p className="text-[26px] text-[hsl(var(--slide-gold))] font-semibold leading-[1.4]">
          Среда — чек с парой. Без доказательства прогресса — нет ответа.
        </p>
      </div>
    </div>
  );
}
