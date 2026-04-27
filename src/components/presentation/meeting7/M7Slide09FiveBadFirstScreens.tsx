import { useIsMobile } from "@/hooks/use-mobile";

const mistakes = [
  {
    title: "Лозунг вместо результата",
    bad: "«Революционная платформа для управления задачами»",
    good: "«Все дела на одном экране. Без папок.»",
  },
  {
    title: "Список фич",
    bad: "«AI-агенты, интеграции, аналитика, отчёты, командная работа»",
    good: "«Команда видит, кто что делает. В реальном времени.»",
  },
  {
    title: "Кто мы такие",
    bad: "«Мы — команда из 12 человек, делаем продукт с 2023 года...»",
    good: "«За 30 секунд получи первое расписание встречи.»",
  },
  {
    title: "Жаргон, понятный только фаундеру",
    bad: "«No-code AI-orchestration для b2b-воркфлоу»",
    good: "«Соедини 3 приложения — и они работают сами.»",
  },
  {
    title: "Регистрация без объяснения зачем",
    bad: "«Введи email чтобы начать»",
    good: "Сначала покажи продукт. Потом проси email.",
  },
];

export default function M7Slide09FiveBadFirstScreens() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[14px]">
        <p className="text-[9px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[3px]">
          5 ошибок
        </p>
        <h2 className="font-display text-[17px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[6px]">
          Так выглядят первые экраны, после которых уходят.
        </h2>
        <div className="space-y-[4px]">
          {mistakes.map((m, i) => (
            <div key={i} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.15)] rounded-[6px] px-[8px] py-[5px]">
              <p className="text-[9px] font-bold text-[hsl(var(--slide-gold))] uppercase tracking-[0.08em] mb-[2px]">{i + 1}. {m.title}</p>
              <p className="text-[8px] text-[hsl(var(--slide-text-muted))] leading-[1.35] mb-[1px]"><span className="text-red-400">✗</span> {m.bad}</p>
              <p className="text-[8px] text-[hsl(var(--slide-text))] leading-[1.35]"><span className="text-[hsl(var(--slide-gold))]">✓</span> {m.good}</p>
            </div>
          ))}
        </div>
        <p className="text-[9px] text-[hsl(var(--slide-gold))] font-semibold mt-[6px] leading-[1.4]">
          Какая из 5 ошибок есть на вашем экране? Не вслух — пометьте.
        </p>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[100px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[12px]">
        5 ошибок
      </p>
      <h2 className="font-display text-[48px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[24px]">
        Так выглядят первые экраны, после которых уходят.
      </h2>
      <div className="space-y-[12px] max-w-[1600px] mb-[20px]">
        {mistakes.map((m, i) => (
          <div key={i} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.2)] rounded-[12px] px-[28px] py-[16px] grid grid-cols-[280px_1fr] gap-[20px] items-center">
            <p className="text-[20px] font-bold text-[hsl(var(--slide-gold))] uppercase tracking-[0.06em] leading-[1.2]">{i + 1}. {m.title}</p>
            <div>
              <p className="text-[18px] text-[hsl(var(--slide-text-muted))] leading-[1.4] mb-[4px]"><span className="text-red-400 font-bold mr-[8px]">✗</span>{m.bad}</p>
              <p className="text-[18px] text-[hsl(var(--slide-text))] leading-[1.4]"><span className="text-[hsl(var(--slide-gold))] font-bold mr-[8px]">✓</span>{m.good}</p>
            </div>
          </div>
        ))}
      </div>
      <p className="text-[22px] text-[hsl(var(--slide-gold))] font-semibold max-w-[1500px] leading-[1.4]">
        У многих сейчас на первом экране — одна из этих пяти. Не страшно. Через 10 минут перепишем.
      </p>
    </div>
  );
}
