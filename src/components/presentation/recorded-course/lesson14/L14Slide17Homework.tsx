import { useIsMobile } from "@/hooks/use-mobile";

const tasks = [
  { n: "1", t: "Идеальный клиент · 7 фильтров", d: "Опиши своего идеального клиента по 7 пунктам на одной странице. Если сейчас описание размытое — перепиши чётко." },
  { n: "2", t: "Список из 50 компаний + 150 контактов", d: "Найди 50 компаний и 3 контакта в каждой через Apollo или LinkedIn. Разбей на приоритеты: A — горячие, B — тёплые, C — холодные." },
  { n: "3", t: "10 персональных сообщений по поводу", d: "Напиши 10 сообщений (DM или email) с причиной для конкретного человека. Не шаблон «мы крутые» — а конкретный повод, почему ему это нужно." },
  { n: "4", t: "3 звонка с подготовкой через промпт", d: "Используй AI-промпт перед каждым звонком. 5 вопросов заранее. Если некому звонить — позови ближайшего знакомого из списка контактов." },
  { n: "5", t: "1 продажа ИЛИ план действий с клиентом", d: "Минимум: подписанный план действий с реальным клиентом на тестовый период. Если уже есть продажа — ещё лучше." },
  { n: "6", t: "5-минутная презентация готова к M12", d: "Проблема (1 мин) · решение (1 мин) · результат (1 мин) · команда и запрос (1 мин) · призыв к действию (1 мин). Потренируй вслух 3 раза." },
];

export default function L14Slide17Homework() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[16px]">
        <p className="text-[9px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[5px]">
          Домашка · к встрече 12 (финал)
        </p>
        <h2 className="font-display text-[19px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[8px]">
          Запусти продажи · <span className="text-[hsl(var(--slide-gold))]">не теорию</span>
        </h2>
        <div className="space-y-[3px]">
          {tasks.map((t) => (
            <div key={t.n} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[5px] px-[8px] py-[3px]">
              <div className="flex items-baseline gap-[6px]">
                <span className="text-[10px] font-bold text-[hsl(var(--slide-gold))]">{t.n}</span>
                <span className="text-[9px] font-bold text-[hsl(var(--slide-text))]">{t.t}</span>
              </div>
              <p className="text-[7.5px] text-[hsl(var(--slide-text-muted))] leading-[1.4] ml-[16px]">{t.d}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[16px]">
        Домашка · к встрече 12 (финал)
      </p>
      <h2 className="font-display text-[54px] font-bold text-[hsl(var(--slide-text))] leading-[1.05] mb-[24px] tracking-[-0.02em]">
        Запусти продажи · <span className="text-[hsl(var(--slide-gold))]">не теорию</span>
      </h2>
      <div className="grid grid-cols-2 gap-[18px] max-w-[1700px]">
        {tasks.map((t) => (
          <div key={t.n} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[12px] px-[26px] py-[14px]">
            <div className="flex items-baseline gap-[14px] mb-[4px]">
              <span className="font-display text-[34px] font-bold text-[hsl(var(--slide-gold))] leading-none">{t.n}</span>
              <span className="text-[20px] font-bold text-[hsl(var(--slide-text))]">{t.t}</span>
            </div>
            <p className="text-[15px] text-[hsl(var(--slide-text-muted))] leading-[1.5] ml-[48px]">{t.d}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
