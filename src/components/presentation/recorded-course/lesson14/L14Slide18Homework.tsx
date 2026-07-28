import { useIsMobile } from "@/hooks/use-mobile";

const tasks = [
  { n: "1", title: "Собери цифры за последний месяц", text: "Расходы по каждому каналу (реклама, инструменты, твои часы), новые платящие клиенты по каналам, цена, себестоимость на клиента, отток." },
  { n: "2", title: "Прогони промпт-калькулятор", text: "Заполни все поля своими данными. Получи таблицу: CAC · LTV:CAC · payback · светофор по каждому каналу." },
  { n: "3", title: "Прими два решения", text: "Одно по каналу: масштабирую / чиню / останавливаю. Одно по рычагу: цена, CAC, churn или себестоимость - что улучшаешь в ближайшие 2 недели." },
  { n: "4", title: "Формат сдачи", text: "Таблица каналов + два решения + одно предложение, почему именно они. Всё - в свой CLAUDE.md проекта, это твой финансовый паспорт." },
];

export default function L14Slide18Homework() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[18px] py-[16px] overflow-y-auto">
        <p className="text-[10px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[5px]">Домашнее задание</p>
        <h2 className="font-display text-[20px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[8px]">
          Твоя таблица экономики - <span className="text-[hsl(var(--slide-gold))]">до следующего урока</span>
        </h2>
        <div className="space-y-[6px] mb-[8px]">
          {tasks.map((t) => (
            <div key={t.n} className="flex items-start gap-[8px] bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.22)] rounded-[6px] px-[10px] py-[6px]">
              <span className="text-[11px] font-bold text-[hsl(var(--slide-gold))] shrink-0">{t.n}</span>
              <div>
                <p className="text-[9.5px] font-bold text-[hsl(var(--slide-text))] leading-[1.3]">{t.title}</p>
                <p className="text-[8.5px] text-[hsl(var(--slide-text-muted))] leading-[1.45]">{t.text}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="bg-[hsl(var(--slide-gold)/0.1)] border-l-2 border-[hsl(var(--slide-gold))] px-[12px] py-[7px]">
          <p className="text-[9.5px] text-[hsl(var(--slide-text))] font-semibold leading-[1.45]">
            Гейт: не переходи к уроку 15 (привлечение средств) без этой таблицы. CAC, LTV и payback - первые числа, которые спросит любой инвестор.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px] py-[36px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[12px]">Домашнее задание</p>
      <h2 className="font-display text-[48px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[24px] tracking-[-0.02em]">
        Твоя таблица экономики - <span className="text-[hsl(var(--slide-gold))]">до следующего урока</span>
      </h2>
      <div className="space-y-[12px] mb-[22px] max-w-[1650px]">
        {tasks.map((t) => (
          <div key={t.n} className="flex items-start gap-[22px] bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.25)] rounded-[10px] px-[26px] py-[14px]">
            <span className="text-[26px] font-bold text-[hsl(var(--slide-gold))] shrink-0 leading-[1.2]">{t.n}</span>
            <div>
              <p className="text-[21px] font-bold text-[hsl(var(--slide-text))] leading-[1.3] mb-[4px]">{t.title}</p>
              <p className="text-[17px] text-[hsl(var(--slide-text-muted))] leading-[1.45]">{t.text}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="bg-[hsl(var(--slide-gold)/0.1)] border-l-4 border-[hsl(var(--slide-gold))] px-[28px] py-[16px] max-w-[1650px]">
        <p className="text-[21px] text-[hsl(var(--slide-text))] font-semibold leading-[1.45]">
          Гейт: не переходи к уроку 15 (привлечение средств) без этой таблицы. CAC, LTV и payback - первые числа, которые спросит любой инвестор.
        </p>
      </div>
    </div>
  );
}
