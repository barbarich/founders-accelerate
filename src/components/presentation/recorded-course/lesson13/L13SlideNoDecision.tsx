import { useIsMobile } from "@/hooks/use-mobile";

const moves = [
  {
    n: "1",
    t: "Посчитай цену бездействия в деньгах",
    d: "«Каждый месяц без решения стоит вам примерно €X». Считаете вместе, на его цифрах. Пока проблема бесплатная — её не решают.",
  },
  {
    n: "2",
    t: "Привяжись к его дате, а не к своей",
    d: "Бюджетный год, запуск, проверка, сезон, выход нового человека. Нет их даты — срочность придумана тобой, и она не работает.",
  },
  {
    n: "3",
    t: "Уменьши первый шаг",
    d: "Не «внедрение», а «30 дней на одном отделе». Большое решение требует согласований, маленькое — только его согласия.",
  },
];

export default function L13SlideNoDecision() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[16px]">
        <p className="text-[9px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[6px]">
          Почему сделки умирают
        </p>
        <h2 className="font-display text-[20px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[9px]">
          Твой главный конкурент — <span className="text-[hsl(var(--slide-gold))]">«ничего не делать»</span>
        </h2>
        <p className="text-[8px] text-[hsl(var(--slide-text-muted))] mb-[7px] leading-[1.4]">
          Чаще всего ты проигрываешь не другому продукту, а решению отложить. У «оставить как есть» нет бюджета, нет согласований и нет риска.
        </p>
        <div className="space-y-[4px] mb-[7px]">
          {moves.map((m) => (
            <div key={m.n} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[4px] px-[7px] py-[4px]">
              <div className="flex items-baseline gap-[5px]">
                <span className="text-[9px] font-bold text-[hsl(var(--slide-gold))]">{m.n}</span>
                <span className="text-[9px] font-bold text-[hsl(var(--slide-text))]">{m.t}</span>
              </div>
              <p className="text-[7.5px] text-[hsl(var(--slide-text-muted))] leading-[1.4] ml-[14px]">{m.d}</p>
            </div>
          ))}
        </div>
        <div className="bg-[hsl(var(--slide-gold)/0.1)] border-l-2 border-[hsl(var(--slide-gold))] px-[10px] py-[7px]">
          <p className="text-[9px] font-bold text-[hsl(var(--slide-text))] leading-[1.4]">
            Вопрос, который экономит месяцы: «Что произойдёт, если вы ничего не поменяете ближайшие полгода?» Ответ «да ничего страшного» — это не сделка.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[16px]">
        Почему сделки умирают
      </p>
      <h2 className="font-display text-[56px] font-bold text-[hsl(var(--slide-text))] leading-[1.05] mb-[16px] tracking-[-0.02em] max-w-[1700px]">
        Твой главный конкурент — <span className="text-[hsl(var(--slide-gold))]">«ничего не делать»</span>
      </h2>
      <p className="text-[22px] text-[hsl(var(--slide-text-muted))] mb-[26px] max-w-[1700px] leading-[1.45]">
        Чаще всего ты проигрываешь не другому продукту, а решению отложить. У варианта «оставить как есть» нет цены, нет согласований и нет риска — с ним и надо соревноваться.
      </p>
      <div className="grid grid-cols-3 gap-[24px] max-w-[1700px] mb-[24px]">
        {moves.map((m) => (
          <div key={m.n} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[12px] px-[26px] py-[22px]">
            <p className="font-display text-[44px] font-bold text-[hsl(var(--slide-gold))] leading-none mb-[8px]">{m.n}</p>
            <p className="text-[24px] font-bold text-[hsl(var(--slide-text))] mb-[8px] leading-[1.2]">{m.t}</p>
            <p className="text-[19px] text-[hsl(var(--slide-text-muted))] leading-[1.45]">{m.d}</p>
          </div>
        ))}
      </div>
      <div className="bg-[hsl(var(--slide-gold)/0.1)] border-l-[4px] border-[hsl(var(--slide-gold))] px-[32px] py-[20px] max-w-[1700px]">
        <p className="text-[28px] font-bold text-[hsl(var(--slide-text))] leading-[1.3]">
          Вопрос, который экономит тебе месяцы: «Что произойдёт, если вы ничего не поменяете в ближайшие полгода?» Если ответ — «да ничего страшного», это не сделка.
        </p>
      </div>
    </div>
  );
}
