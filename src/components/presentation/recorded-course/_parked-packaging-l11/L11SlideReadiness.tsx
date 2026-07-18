import { useIsMobile } from "@/hooks/use-mobile";

const checks = [
  { item: "Позиционирование ясно за 5 секунд", detail: "H1 говорит кому и зачем. Незнакомый человек понимает продукт, не спрашивая." },
  { item: "Попадание в реальную боль рынка", detail: "Не история ради истории и не фичи ради фич - реальное решение запроса рынка. Из упаковки юзер чувствует: это про меня, мне это нужно." },
  { item: "Один визуальный стиль везде", detail: "Лендинг, соцсети, реклама - один шрифт, палитра, тон. Не выглядит собранным на коленке." },
  { item: "Пачка креативов готова", detail: "20-30 вариантов: видео + баннеры. Не один «идеальный» - алгоритму нужен объём." },
  { item: "Воронка выбрана и собрана", detail: "Путь от клика до оплаты есть целиком. Сам прошёл его как клиент - нигде не рвётся." },
  { item: "Пиксели и аналитика стоят", detail: "Meta / TikTok / Google пиксели + GA4 на лендинге ДО первого клика. Иначе первый трафик - вслепую." },
];

export default function L11SlideReadiness() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[16px] py-[14px] overflow-y-auto">
        <p className="text-[10px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[5px]">
          Готов к запуску?
        </p>
        <h2 className="font-display text-[18px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[6px]">
          Шесть галочек - и только тогда <span className="text-[hsl(var(--slide-gold))]">тратишь на рекламу.</span>
        </h2>
        <p className="text-[8px] text-[hsl(var(--slide-text)/0.85)] leading-[1.4] mb-[6px]">
          Каждый незакрытый пункт - это деньги, которые реклама сожжёт впустую. Реклама усиливает готовое, а не чинит сырое.
        </p>
        <div className="space-y-[4px]">
          {checks.map((c) => (
            <div key={c.item} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.3)] rounded-[5px] px-[8px] py-[4px] flex items-start gap-[6px]">
              <span className="text-[9px] text-[hsl(var(--slide-gold))] mt-[1px]">☐</span>
              <div>
                <p className="text-[8.5px] font-bold text-[hsl(var(--slide-text))] leading-[1.2]">{c.item}</p>
                <p className="text-[7px] text-[hsl(var(--slide-text-muted))] leading-[1.35]">{c.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px] py-[34px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[12px]">
        Готов к запуску? · не сжигай деньги
      </p>
      <h2 className="font-display text-[46px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[14px] tracking-[-0.02em] max-w-[1650px]">
        Шесть галочек - и только тогда <span className="text-[hsl(var(--slide-gold))]">тратишь на рекламу.</span>
      </h2>
      <p className="text-[19px] text-[hsl(var(--slide-text)/0.88)] leading-[1.45] mb-[20px] max-w-[1650px]">
        Каждый незакрытый пункт - деньги, которые реклама сожжёт впустую. Реклама усиливает готовое, а не чинит сырое.
      </p>
      <div className="grid grid-cols-2 gap-[14px] max-w-[1750px]">
        {checks.map((c) => (
          <div key={c.item} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.3)] rounded-[12px] px-[24px] py-[13px] flex items-start gap-[14px]">
            <span className="text-[22px] text-[hsl(var(--slide-gold))] leading-none mt-[2px]">☐</span>
            <div>
              <p className="text-[20px] font-bold text-[hsl(var(--slide-text))] leading-[1.2] mb-[2px]">{c.item}</p>
              <p className="text-[15px] text-[hsl(var(--slide-text-muted))] leading-[1.4]">{c.detail}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
