import { useIsMobile } from "@/hooks/use-mobile";

const points = [
  "Позиционирование: сформулировать так, чтобы продукт продавал себя сам",
  "Каналы: где находить пользователей и как до них дотянуться",
  "Продажи: B2C и B2B — превратить интерес в оплату",
  "Рост: первые платящие клиенты и путь к стабильной выручке",
];

export default function L0Slide08Block3() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[24px] py-[36px]">
        <p className="text-[10px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[8px]">
          Блок 03
        </p>
        <h2 className="font-display text-[27px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[6px] tracking-[-0.01em]">
          Маркетинг и продажи
        </h2>
        <p className="text-[13px] text-[hsl(var(--slide-text-muted))] leading-[1.5] mb-[20px]">
          Лучший продукт без продаж — это хобби, а не бизнес.
        </p>
        <div className="space-y-[10px]">
          {points.map((p, i) => (
            <div key={i} className="flex items-start gap-[10px]">
              <div className="w-[5px] h-[5px] rounded-full bg-[hsl(var(--slide-gold))] mt-[7px] shrink-0" />
              <p className="text-[13px] text-[hsl(var(--slide-text)/0.9)] leading-[1.45]">{p}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[16px]">
        Блок 03
      </p>
      <h2 className="font-display text-[66px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[12px] tracking-[-0.01em]">
        Маркетинг и продажи
      </h2>
      <p className="text-[28px] text-[hsl(var(--slide-text-muted))] leading-[1.4] mb-[44px] max-w-[1300px]">
        Лучший продукт без продаж — это хобби, а не бизнес.
      </p>
      <div className="space-y-[22px] max-w-[1500px]">
        {points.map((p, i) => (
          <div key={i} className="flex items-start gap-[18px]">
            <div className="w-[9px] h-[9px] rounded-full bg-[hsl(var(--slide-gold))] mt-[14px] shrink-0" />
            <p className="text-[26px] text-[hsl(var(--slide-text)/0.9)] leading-[1.4]">{p}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
