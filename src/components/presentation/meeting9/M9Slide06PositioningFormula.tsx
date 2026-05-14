import { useIsMobile } from "@/hooks/use-mobile";

const tests = [
  "Можешь сократить до одной фразы для billboard? — Да → передавай в hero-секцию лендинга.",
  "Незнакомец понимает за 5 секунд? — Нет → упрощай дальше, убирай профессиональный жаргон.",
  "Конкурент НЕ может сказать о себе то же самое? — Может → это категория, а не позиционирование.",
];

export default function M9Slide06PositioningFormula() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[18px]">
        <p className="text-[10px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[6px]">
          Кит 1 · Позиционирование
        </p>
        <h2 className="font-display text-[20px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[6px]">
          Одна фраза, на которой <span className="text-[hsl(var(--slide-gold))]">держится всё</span>
        </h2>
        <p className="text-[9px] text-[hsl(var(--slide-text)/0.85)] leading-[1.45] mb-[6px]">
          Эта фраза пойдёт в H1 лендинга, headline рекламы и в первую строку cold email.
        </p>
        <div className="bg-[hsl(var(--slide-gold)/0.08)] border-l-2 border-[hsl(var(--slide-gold))] rounded-[6px] px-[10px] py-[7px] mb-[8px]">
          <p className="text-[9px] text-[hsl(var(--slide-text))] leading-[1.5]">
            <b className="text-[hsl(var(--slide-gold))]">[Продукт]</b> помогает <b className="text-[hsl(var(--slide-gold))]">[узкий сегмент]</b> достичь <b className="text-[hsl(var(--slide-gold))]">[конкретный результат]</b> через <b className="text-[hsl(var(--slide-gold))]">[уникальный механизм]</b>, в отличие от <b className="text-[hsl(var(--slide-gold))]">[альтернатива]</b>.
          </p>
        </div>
        <p className="text-[8.5px] font-bold text-[hsl(var(--slide-gold))] uppercase tracking-[0.12em] mb-[3px]">Три теста</p>
        <ul className="space-y-[3px]">
          {tests.map((t, i) => (
            <li key={i} className="text-[8.5px] text-[hsl(var(--slide-text)/0.9)] leading-[1.4]">→ {t}</li>
          ))}
        </ul>
        <p className="text-[9px] text-[hsl(var(--slide-gold))] italic mt-[8px] leading-[1.4]">
          Слабая фраза — слабо везде. Сегодня доводим до сильной — все вместе.
        </p>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[16px]">
        Кит 1 · Позиционирование · финальная формула
      </p>
      <h2 className="font-display text-[54px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[16px] tracking-[-0.02em]">
        Одна фраза, на которой <span className="text-[hsl(var(--slide-gold))]">держится всё</span>
      </h2>
      <p className="text-[22px] text-[hsl(var(--slide-text)/0.88)] leading-[1.45] mb-[24px] max-w-[1600px]">
        Эта фраза пойдёт в H1 лендинга, в headline рекламы и в первую строку cold email. Слабая фраза — слабо везде.
      </p>
      <div className="bg-[hsl(var(--slide-gold)/0.08)] border-l-[4px] border-[hsl(var(--slide-gold))] rounded-[14px] px-[36px] py-[28px] mb-[22px] max-w-[1700px]">
        <p className="text-[15px] font-bold text-[hsl(var(--slide-gold))] uppercase tracking-[0.18em] mb-[12px]">Финальная формула</p>
        <p className="text-[26px] text-[hsl(var(--slide-text))] leading-[1.5]">
          <b className="text-[hsl(var(--slide-gold))]">[Продукт]</b> помогает <b className="text-[hsl(var(--slide-gold))]">[узкий сегмент]</b> достичь <b className="text-[hsl(var(--slide-gold))]">[конкретный результат]</b> через <b className="text-[hsl(var(--slide-gold))]">[уникальный механизм]</b>, в отличие от <b className="text-[hsl(var(--slide-gold))]">[альтернатива]</b>, которая <b className="text-[hsl(var(--slide-gold))]">[её слабость]</b>.
        </p>
      </div>
      <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.3)] rounded-[14px] px-[32px] py-[20px] max-w-[1700px]">
        <p className="text-[15px] font-bold text-[hsl(var(--slide-gold))] uppercase tracking-[0.18em] mb-[12px]">Три теста — пройти все</p>
        <ul className="space-y-[8px]">
          {tests.map((t, i) => (
            <li key={i} className="text-[19px] text-[hsl(var(--slide-text)/0.9)] leading-[1.45]">→ {t}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
