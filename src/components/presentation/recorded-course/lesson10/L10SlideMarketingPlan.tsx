import { useIsMobile } from "@/hooks/use-mobile";

const steps = [
  { n: "01", t: "Одна цель в цифрах", d: "Не «заняться маркетингом», а «10 платящих за 30 дней» или «20 демо». Из цели считается всё остальное: сколько нужно касаний, заявок, встреч." },
  { n: "02", t: "Сегмент и одно сообщение", d: "Кому продаёшь (один сегмент из блока 1) и одна фраза: какую боль решаешь и чем отличаешься. Одно и то же сообщение во всех каналах." },
  { n: "03", t: "Два канала, не десять", d: "Основной - где аудитория уже собрана и у тебя есть преимущество. Второй - тестовый. 80% усилий в основной, 20% - в тест." },
  { n: "04", t: "Активности с частотой", d: "Каждый канал - это действия с числом: «3 поста в неделю», «10 сообщений в день», «1 выступление в месяц». Действие без частоты не случится." },
  { n: "05", t: "Недельный цикл", d: "Раз в неделю смотри воронку: касания → ответы → встречи → деньги. Что даёт деньги - удваивай, что нет - убивай. План живёт неделями, не кварталами." },
];

export default function L10SlideMarketingPlan() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[18px] py-[12px] overflow-y-auto">
        <p className="text-[10px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[4px]">
          Маркетинг-план на 30 дней · 5 шагов
        </p>
        <h2 className="font-display text-[17px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[6px]">
          План - это не документ. <span className="text-[hsl(var(--slide-gold))]">Это 5 решений.</span>
        </h2>
        <div className="space-y-[3px] mb-[6px]">
          {steps.map((s) => (
            <div key={s.n} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.3)] rounded-[5px] px-[8px] py-[3px]">
              <p className="text-[8.5px] font-bold text-[hsl(var(--slide-text))]"><span className="text-[hsl(var(--slide-gold))]">{s.n}</span> {s.t}</p>
              <p className="text-[7px] text-[hsl(var(--slide-text)/0.85)] leading-[1.35]">{s.d}</p>
            </div>
          ))}
        </div>
        <div className="bg-[hsl(var(--slide-gold)/0.1)] border-l-2 border-[hsl(var(--slide-gold))] px-[9px] py-[4px]">
          <p className="text-[7.5px] text-[hsl(var(--slide-text))] font-semibold leading-[1.4]">
            Хороший план помещается на одну страницу и отвечает на три вопроса: кому я продаю, где я их беру и что именно я делаю на этой неделе.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px] py-[30px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[10px]">
        Маркетинг-план на 30 дней · 5 шагов
      </p>
      <h2 className="font-display text-[42px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[16px] tracking-[-0.02em]">
        План - это не документ. <span className="text-[hsl(var(--slide-gold))]">Это пять решений.</span>
      </h2>
      <div className="space-y-[8px] max-w-[1720px] mb-[14px]">
        {steps.map((s) => (
          <div key={s.n} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.3)] rounded-[10px] px-[24px] py-[9px] flex items-center gap-[20px]">
            <span className="font-display text-[22px] font-bold text-[hsl(var(--slide-gold))] leading-none w-[40px] shrink-0">{s.n}</span>
            <span className="text-[19px] font-bold text-[hsl(var(--slide-text))] w-[340px] shrink-0">{s.t}</span>
            <span className="text-[15.5px] text-[hsl(var(--slide-text)/0.88)] leading-[1.35] flex-1">{s.d}</span>
          </div>
        ))}
      </div>
      <div className="bg-[hsl(var(--slide-gold)/0.1)] border-l-[4px] border-[hsl(var(--slide-gold))] px-[30px] py-[12px] max-w-[1720px]">
        <p className="text-[18px] text-[hsl(var(--slide-text))] font-semibold leading-[1.4]">
          Хороший план помещается на одну страницу и отвечает на три вопроса: кому я продаю, где я их беру и что именно я делаю на этой неделе.
        </p>
      </div>
    </div>
  );
}
