import { useIsMobile } from "@/hooks/use-mobile";

const vanity = [
  "Скачиваний",
  "Регистраций",
  "Подписчиков",
  "Лайков и просмотров",
  "«Всего пользователей»",
];

const real = [
  "Дошли до ценности",
  "Вернулись на 7-й день",
  "Пользуются на 30-й",
  "Заплатили",
  "Привели друга",
];

export default function L9Slide04VanityVsReal() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[20px] py-[22px] overflow-y-auto">
        <p className="text-[9px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[8px]">
          Какие метрики вообще смотреть
        </p>
        <h2 className="font-display text-[22px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[12px]">
          Метрики тщеславия против <span className="text-[hsl(var(--slide-gold))]">честных</span>
        </h2>
        <div className="grid grid-cols-2 gap-[8px] mb-[10px]">
          <div className="border border-[hsl(var(--slide-text-muted)/0.25)] rounded-[6px] px-[10px] py-[8px]">
            <p className="text-[10px] uppercase tracking-[0.12em] text-[hsl(var(--slide-text-muted))] font-bold mb-[6px]">Тщеславие</p>
            {vanity.map((v) => (
              <p key={v} className="text-[10px] text-[hsl(var(--slide-text-muted))] leading-[1.6]">{v}</p>
            ))}
          </div>
          <div className="border border-[hsl(var(--slide-gold)/0.35)] bg-[hsl(var(--slide-gold)/0.06)] rounded-[6px] px-[10px] py-[8px]">
            <p className="text-[10px] uppercase tracking-[0.12em] text-[hsl(var(--slide-gold))] font-bold mb-[6px]">Честные</p>
            {real.map((v) => (
              <p key={v} className="text-[10px] text-[hsl(var(--slide-text))] leading-[1.6]">{v}</p>
            ))}
          </div>
        </div>
        <div className="bg-[hsl(var(--slide-gold)/0.1)] border-l-2 border-[hsl(var(--slide-gold))] px-[12px] py-[10px]">
          <p className="text-[10.5px] text-[hsl(var(--slide-text))] font-semibold leading-[1.45]">
            Метрика тщеславия - та, которая может <span className="text-[hsl(var(--slide-gold))]">только расти</span>. Она никогда не скажет тебе плохую новость. Поэтому она ничего и не решает.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px] py-[40px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[16px]">
        Какие метрики вообще смотреть
      </p>
      <h2 className="font-display text-[52px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[32px] tracking-[-0.01em]">
        Метрики тщеславия против <span className="text-[hsl(var(--slide-gold))]">честных</span>
      </h2>
      <div className="grid grid-cols-2 gap-[28px] max-w-[1800px] mb-[28px]">
        <div className="border border-[hsl(var(--slide-text-muted)/0.25)] rounded-[12px] px-[32px] py-[24px]">
          <p className="text-[16px] uppercase tracking-[0.15em] text-[hsl(var(--slide-text-muted))] font-bold mb-[16px]">Тщеславие</p>
          {vanity.map((v) => (
            <p key={v} className="text-[24px] text-[hsl(var(--slide-text-muted))] leading-[1.75]">{v}</p>
          ))}
        </div>
        <div className="border border-[hsl(var(--slide-gold)/0.35)] bg-[hsl(var(--slide-gold)/0.06)] rounded-[12px] px-[32px] py-[24px]">
          <p className="text-[16px] uppercase tracking-[0.15em] text-[hsl(var(--slide-gold))] font-bold mb-[16px]">Честные</p>
          {real.map((v) => (
            <p key={v} className="text-[24px] text-[hsl(var(--slide-text))] leading-[1.75]">{v}</p>
          ))}
        </div>
      </div>
      <div className="bg-[hsl(var(--slide-gold)/0.1)] border-l-[4px] border-[hsl(var(--slide-gold))] px-[32px] py-[22px] max-w-[1800px]">
        <p className="text-[24px] text-[hsl(var(--slide-text))] font-semibold leading-[1.45]">
          Метрика тщеславия - та, которая может <span className="text-[hsl(var(--slide-gold))]">только расти</span>. Она никогда не скажет тебе плохую новость. Поэтому она ничего и не решает.
        </p>
      </div>
    </div>
  );
}
