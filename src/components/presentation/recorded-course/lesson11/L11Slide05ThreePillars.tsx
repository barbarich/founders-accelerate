import { useIsMobile } from "@/hooks/use-mobile";

const steps = [
  { n: "01", name: "Позиционирование", body: "Одна фраза: кому, что, чем отличаешься. Она станет H1 лендинга и первой строкой рекламы." },
  { n: "02", name: "История", body: "Почему покупают именно у тебя. Собрал её в уроке 10 - теперь вплетаешь в лендинг и креативы." },
  { n: "03", name: "Визуал", body: "Один стиль везде: лендинг, соцсети, реклама. Собирается на AI за вечер, без дизайнера." },
  { n: "04", name: "Креативы", body: "Видео, баннеры, объявления - пачкой. Не один «идеальный», а 20-30 вариантов на выбор алгоритму." },
  { n: "05", name: "Воронка", body: "Путь от клика до оплаты, который реально конвертит. Готовишь и тестируешь ДО первого рубля на рекламу." },
];

export default function L11Slide05ThreePillars() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[18px]">
        <p className="text-[10px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[6px]">
          Что готовим сегодня · до первого рубля на рекламу
        </p>
        <h2 className="font-display text-[19px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[8px]">
          Пять шагов упаковки. <span className="text-[hsl(var(--slide-gold))]">Одна линия.</span>
        </h2>
        <div className="space-y-[4px] mb-[6px]">
          {steps.map((p) => (
            <div key={p.n} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.3)] rounded-[6px] px-[10px] py-[5px]">
              <p className="text-[10px] font-bold text-[hsl(var(--slide-text))]">
                <span className="text-[hsl(var(--slide-gold))]">{p.n}</span> {p.name}
              </p>
              <p className="text-[8px] text-[hsl(var(--slide-text)/0.85)] leading-[1.4]">{p.body}</p>
            </div>
          ))}
        </div>
        <p className="text-[8.5px] text-[hsl(var(--slide-gold))] italic leading-[1.4]">
          Реклама - это урок 12. Сегодня готовим упаковку, чтобы потом деньги не сгорели на сыром.
        </p>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[16px]">
        Что готовим сегодня · до первого рубля на рекламу
      </p>
      <h2 className="font-display text-[54px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[24px] tracking-[-0.02em]">
        Пять шагов упаковки. <span className="text-[hsl(var(--slide-gold))]">Одна линия.</span>
      </h2>
      <div className="space-y-[12px] max-w-[1700px] mb-[22px]">
        {steps.map((p) => (
          <div key={p.n} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.3)] rounded-[14px] px-[28px] py-[14px] flex items-center gap-[24px]">
            <span className="font-display text-[30px] font-bold text-[hsl(var(--slide-gold))] leading-none w-[52px] shrink-0">{p.n}</span>
            <span className="text-[24px] font-bold text-[hsl(var(--slide-text))] w-[320px] shrink-0">{p.name}</span>
            <span className="text-[18px] text-[hsl(var(--slide-text)/0.88)] leading-[1.45] flex-1">{p.body}</span>
          </div>
        ))}
      </div>
      <p className="text-[22px] text-[hsl(var(--slide-gold))] italic leading-[1.45] max-w-[1700px]">
        Реклама - это уже урок 12. Сегодня готовим упаковку так, чтобы потом деньги не сгорели на сыром продукте.
      </p>
    </div>
  );
}
