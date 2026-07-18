import { useIsMobile } from "@/hooks/use-mobile";

const rules = [
  {
    num: "1",
    title: "Число само по себе не значит ничего",
    bad: "«У нас 1 000 пользователей»",
    good: "«На прошлой неделе возвращались 20%, на этой - 32%»",
    body: "Первое - тост на вечеринке. Второе - факт, из которого следует решение.",
  },
  {
    num: "2",
    title: "Смотри по группам прихода, а не общей кучей",
    bad: "«Средний возврат - 25%»",
    good: "«Пришедшие в марте возвращаются вдвое чаще январских»",
    body: "Те, кто пришёл в январе, и те, кто в марте, видели разный продукт. Общая цифра усредняет их и прячет от тебя то, что ты уже починил.",
  },
  {
    num: "3",
    title: "Всегда спрашивай: по сравнению с чем",
    bad: "«Активация 40% - это хорошо?»",
    good: "«40% против 25% в прошлом месяце» или «40% у прошедших онбординг против 12% у остальных»",
    body: "У цифры нет смысла в одиночку. Смысл появляется в сравнении: с прошлой неделей, с другим каналом, с другой группой.",
  },
];

export default function L9Slide10HowToAnalyze() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[18px] py-[20px] overflow-y-auto">
        <p className="text-[9px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[6px]">
          Как анализировать
        </p>
        <h2 className="font-display text-[20px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[10px]">
          Смотри не на число, а на <span className="text-[hsl(var(--slide-gold))]">изменение и на срез</span>.
        </h2>
        <div className="space-y-[7px] mb-[9px]">
          {rules.map((r) => (
            <div key={r.num} className="border border-[hsl(var(--slide-gold)/0.2)] rounded-[6px] px-[10px] py-[7px] bg-[hsl(var(--slide-gold)/0.04)]">
              <p className="text-[10.5px] font-bold text-[hsl(var(--slide-text))] leading-[1.25] mb-[4px]">{r.num}. {r.title}</p>
              <p className="text-[9px] text-[hsl(var(--slide-text-muted))] leading-[1.4] line-through">{r.bad}</p>
              <p className="text-[9.5px] text-[hsl(var(--slide-gold))] leading-[1.4] font-semibold mb-[3px]">{r.good}</p>
              <p className="text-[9px] text-[hsl(var(--slide-text)/0.8)] leading-[1.45]">{r.body}</p>
            </div>
          ))}
        </div>
        <div className="bg-[hsl(var(--slide-gold)/0.1)] border-l-2 border-[hsl(var(--slide-gold))] px-[12px] py-[9px]">
          <p className="text-[10px] text-[hsl(var(--slide-text))] font-semibold leading-[1.45]">
            Это <span className="text-[hsl(var(--slide-gold))]">весь анализ данных</span>, который нужен тебе на этом этапе. Остальное - работа аналитика, которого у тебя пока нет.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px] py-[36px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[12px]">
        Как анализировать
      </p>
      <h2 className="font-display text-[46px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[24px] tracking-[-0.01em] max-w-[1800px]">
        Смотри не на число, а на <span className="text-[hsl(var(--slide-gold))]">изменение и на срез</span>.
      </h2>
      <div className="space-y-[14px] max-w-[1800px] mb-[22px]">
        {rules.map((r) => (
          <div key={r.num} className="border border-[hsl(var(--slide-gold)/0.2)] rounded-[10px] px-[26px] py-[16px] bg-[hsl(var(--slide-gold)/0.04)]">
            <p className="text-[23px] font-bold text-[hsl(var(--slide-text))] leading-[1.25] mb-[8px]">{r.num}. {r.title}</p>
            <div className="flex items-start gap-[16px] mb-[6px]">
              <p className="text-[17px] text-[hsl(var(--slide-text-muted))] leading-[1.4] line-through w-[400px] shrink-0">{r.bad}</p>
              <p className="text-[18px] text-[hsl(var(--slide-gold))] leading-[1.4] font-semibold flex-1">{r.good}</p>
            </div>
            <p className="text-[16px] text-[hsl(var(--slide-text)/0.8)] leading-[1.5]">{r.body}</p>
          </div>
        ))}
      </div>
      <div className="bg-[hsl(var(--slide-gold)/0.1)] border-l-[4px] border-[hsl(var(--slide-gold))] px-[32px] py-[16px] max-w-[1800px]">
        <p className="text-[22px] text-[hsl(var(--slide-text))] font-semibold leading-[1.45]">
          Это <span className="text-[hsl(var(--slide-gold))]">весь анализ данных</span>, который нужен тебе на этом этапе. Остальное - работа аналитика, которого у тебя пока нет.
        </p>
      </div>
    </div>
  );
}
