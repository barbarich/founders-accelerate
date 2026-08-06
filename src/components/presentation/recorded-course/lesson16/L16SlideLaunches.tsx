import { useIsMobile } from "@/hooks/use-mobile";

const conds = [
  "У тебя уже есть 300-500 человек, которые придут по просьбе",
  "Продукт покупается сразу: есть цена и кнопка, без «свяжитесь с нами»",
  "Тебе нужна ссылка и бейдж для репутации, а не сами продажи",
];

const others = [
  { t: "Show HN", d: "Только для инструментов разработчикам. На главную попадают около 2% - зато оттуда до 30 тысяч визитов за сутки. Нужен работающий продукт, не вейтлист." },
  { t: "AI-директории", d: "Это бэклинки, а не продажи. Один вечер, 5-8 бесплатных подач с нормальным описанием - и не возвращаться. Платить за featured до первых оплат не надо." },
];

export default function L16SlideLaunches() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[18px] py-[15px] overflow-y-auto">
        <p className="text-[9px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[5px]">
          Запуски · Product Hunt и другие
        </p>
        <h2 className="font-display text-[17px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[6px]">
          Место в рейтинге - это не деньги
        </h2>
        <div className="border border-[hsl(var(--slide-gold)/0.3)] rounded-[6px] px-[10px] py-[7px] bg-[hsl(var(--slide-gold)/0.06)] mb-[6px]">
          <p className="text-[9px] text-[hsl(var(--slide-text))] leading-[1.4]">
            Два запуска одного фаундера: <span className="font-bold text-[hsl(var(--slide-gold))]">300 голосов - 91 платящий</span>. Через год <span className="font-bold">612 голосов - 1 платящий</span>. Голоса и продажи связаны слабо.
          </p>
        </div>
        <p className="text-[8.5px] text-[hsl(var(--slide-text-muted))] leading-[1.4] mb-[6px]">
          Типичный запуск сегодня: 40-60 часов подготовки, около 115 регистраций, 2-3% из них платят. Идти стоит, только если сходятся все три условия:
        </p>
        <div className="space-y-[3px] mb-[6px]">
          {conds.map((c, i) => (
            <p key={c} className="text-[8.5px] text-[hsl(var(--slide-text))] leading-[1.4] pl-[14px] relative">
              <span className="absolute left-0 font-mono text-[hsl(var(--slide-gold))]">{i + 1}.</span>{c}
            </p>
          ))}
        </div>
        <div className="space-y-[4px]">
          {others.map((o) => (
            <div key={o.t} className="border-l-2 border-[hsl(var(--slide-gold)/0.4)] pl-[8px]">
              <p className="text-[9px] font-bold text-[hsl(var(--slide-text))]">{o.t}</p>
              <p className="text-[8px] text-[hsl(var(--slide-text)/0.8)] leading-[1.35]">{o.d}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[120px] py-[32px] overflow-y-auto">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[12px]">
        Запуски · Product Hunt и другие
      </p>
      <h2 className="font-display text-[42px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[16px] tracking-[-0.01em]">
        Место в рейтинге - <span className="text-[hsl(var(--slide-gold))]">это не деньги</span>
      </h2>
      <div className="border border-[hsl(var(--slide-gold)/0.3)] rounded-[12px] px-[28px] py-[16px] bg-[hsl(var(--slide-gold)/0.06)] max-w-[1900px] mb-[18px]">
        <p className="text-[20px] text-[hsl(var(--slide-text))] leading-[1.4]">
          Два запуска одного и того же фаундера: <span className="font-bold text-[hsl(var(--slide-gold))]">300 голосов - 91 платящий</span>. Через год <span className="font-bold text-[hsl(var(--slide-gold))]">612 голосов - 1 платящий</span>. Голоса и продажи связаны слабо.
        </p>
      </div>
      <p className="text-[18px] text-[hsl(var(--slide-text-muted))] leading-[1.4] mb-[16px] max-w-[1800px]">
        Типичный запуск сегодня: 40-60 часов подготовки, около 115 регистраций, из них платят 2-3%. Идти стоит, только если сходятся все три условия:
      </p>
      <div className="grid grid-cols-3 gap-[18px] max-w-[1900px] mb-[18px]">
        {conds.map((c, i) => (
          <div key={c} className="border border-[hsl(var(--slide-gold)/0.25)] rounded-[12px] px-[20px] py-[14px] bg-[hsl(var(--slide-gold)/0.04)]">
            <span className="font-mono text-[15px] text-[hsl(var(--slide-gold))]">{i + 1}</span>
            <p className="text-[15.5px] text-[hsl(var(--slide-text))] leading-[1.4] mt-[4px]">{c}</p>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-2 gap-[24px] max-w-[1900px]">
        {others.map((o) => (
          <div key={o.t} className="border-l-[3px] border-[hsl(var(--slide-gold)/0.4)] pl-[18px]">
            <p className="text-[18px] font-bold text-[hsl(var(--slide-text))] mb-[2px]">{o.t}</p>
            <p className="text-[15px] text-[hsl(var(--slide-text)/0.8)] leading-[1.45]">{o.d}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
