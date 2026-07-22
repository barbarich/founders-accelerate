import { useIsMobile } from "@/hooks/use-mobile";

const questions = [
  { n: "01", q: "Как о тебе узнают?", d: "Каналы: где ты появляешься перед нужными людьми - посты, реклама, события, сарафан." },
  { n: "02", q: "Почему выберут именно тебя?", d: "Позиционирование: одна причина взять тебя, а не конкурента или «ничего не делать»." },
  { n: "03", q: "Как купят и вернутся?", d: "Продажа: путь от интереса до денег - и повод прийти снова." },
];

const funnel = ["Охват", "Интерес", "Заявка", "Продажа"];

export default function L10SlideWhatIsMarketing() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[18px] py-[14px] overflow-y-auto">
        <p className="text-[10px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[4px]">
          Что такое маркетинг · за одну минуту
        </p>
        <h2 className="font-display text-[18px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[8px]">
          Маркетинг - это <span className="text-[hsl(var(--slide-gold))]">три вопроса,</span> а не реклама.
        </h2>
        <div className="space-y-[4px] mb-[8px]">
          {questions.map((s) => (
            <div key={s.n} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.3)] rounded-[6px] px-[9px] py-[4px]">
              <p className="text-[9px] font-bold text-[hsl(var(--slide-text))]"><span className="text-[hsl(var(--slide-gold))]">{s.n}</span> {s.q}</p>
              <p className="text-[7.5px] text-[hsl(var(--slide-text)/0.85)] leading-[1.35]">{s.d}</p>
            </div>
          ))}
        </div>
        <div className="flex items-center gap-[3px] mb-[6px]">
          {funnel.map((f, i) => (
            <div key={f} className="flex items-center gap-[3px]">
              <span className="text-[8px] font-bold text-[hsl(var(--slide-gold))] bg-[hsl(var(--slide-gold)/0.12)] rounded-[4px] px-[6px] py-[3px]">{f}</span>
              {i < funnel.length - 1 && <span className="text-[8px] text-[hsl(var(--slide-text-muted))]">→</span>}
            </div>
          ))}
        </div>
        <div className="bg-[hsl(var(--slide-gold)/0.1)] border-l-2 border-[hsl(var(--slide-gold))] px-[10px] py-[5px]">
          <p className="text-[8px] text-[hsl(var(--slide-text))] font-semibold leading-[1.4]">
            Все каналы ведут в одну воронку: сверху людей много, донизу доходят немногие. Твоя работа - вести их вниз, к покупке.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px] py-[32px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[12px]">
        Что такое маркетинг · за одну минуту
      </p>
      <h2 className="font-display text-[46px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[20px] tracking-[-0.02em]">
        Маркетинг - это <span className="text-[hsl(var(--slide-gold))]">три вопроса,</span> а не реклама.
      </h2>
      <div className="grid grid-cols-3 gap-[16px] max-w-[1700px] mb-[22px]">
        {questions.map((s) => (
          <div key={s.n} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.3)] rounded-[12px] px-[22px] py-[16px]">
            <span className="font-display text-[24px] font-bold text-[hsl(var(--slide-gold))] leading-none">{s.n}</span>
            <p className="text-[20px] font-bold text-[hsl(var(--slide-text))] leading-[1.2] mt-[8px] mb-[6px]">{s.q}</p>
            <p className="text-[15px] text-[hsl(var(--slide-text)/0.88)] leading-[1.4]">{s.d}</p>
          </div>
        ))}
      </div>
      <div className="flex items-center gap-[10px] mb-[18px]">
        {funnel.map((f, i) => (
          <div key={f} className="flex items-center gap-[10px]">
            <span className="text-[19px] font-bold text-[hsl(var(--slide-gold))] bg-[hsl(var(--slide-gold)/0.12)] rounded-[8px] px-[20px] py-[9px]">{f}</span>
            {i < funnel.length - 1 && <span className="text-[20px] text-[hsl(var(--slide-text-muted))]">→</span>}
          </div>
        ))}
      </div>
      <div className="bg-[hsl(var(--slide-gold)/0.1)] border-l-[4px] border-[hsl(var(--slide-gold))] px-[30px] py-[14px] max-w-[1700px]">
        <p className="text-[19px] text-[hsl(var(--slide-text))] font-semibold leading-[1.4]">
          Все каналы ведут в одну воронку: сверху людей много, донизу доходят немногие. Твоя работа - вести их вниз, к покупке.
        </p>
      </div>
    </div>
  );
}
