import { useIsMobile } from "@/hooks/use-mobile";

const cases = [
  {
    name: "Notion",
    aha: "Открыл готовый шаблон и увидел свою заметку через 30 секунд",
    moves: [
      "Стартуют с готовых шаблонов, а не с пустой страницы",
      "Спрашивают «для чего ты пришёл» и подбирают workspace под ответ",
      "Учат drag-and-drop прямо внутри первого документа, без туториала",
    ],
    lesson: "Пустой экран убивает. Дай пользователю результат, который он сразу хочет редактировать.",
  },
  {
    name: "Duolingo",
    aha: "Закончил первый урок и получил streak за 3 минуты",
    moves: [
      "Первый урок — до регистрации. Сначала ценность, потом email",
      "Выбор языка и уровня = 2 тапа, без анкет на 10 экранов",
      "Каждое действие даёт визуальный фидбек: XP, streak, прогресс-бар",
    ],
    lesson: "Покажи ценность ДО регистрации. Регистрация — награда за вовлечение, а не плата за вход.",
  },
  {
    name: "Spotify",
    aha: "Услышал персональный плейлист в первый же день, ничего не настраивая",
    moves: [
      "Просят выбрать 3–5 любимых артистов — и сразу собирают плейлист",
      "Discover Weekly появляется уже на первой неделе — крючок возврата",
      "Defaults делают всё: качество, эквалайзер, рекомендации. Настройки — опционально",
    ],
    lesson: "Настройки — враг первой сессии. Дай умные defaults и один «вау»-результат сразу.",
  },
];

export default function M7Slide08aBestInClass() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[14px] py-[14px]">
        <p className="text-[8px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[3px]">Как это делают лучшие</p>
        <h2 className="font-display text-[15px] font-bold text-[hsl(var(--slide-text))] leading-[1.2] mb-[8px]">
          3 продукта, которые сделали onboarding оружием.
        </h2>
        <div className="space-y-[5px]">
          {cases.map((c) => (
            <div key={c.name} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.2)] rounded-[6px] px-[9px] py-[6px]">
              <div className="flex items-baseline gap-[6px] mb-[2px]">
                <p className="text-[10px] font-bold text-[hsl(var(--slide-gold))]">{c.name}</p>
                <p className="text-[7.5px] text-[hsl(var(--slide-text-muted))] italic leading-[1.3]">→ {c.aha}</p>
              </div>
              <ul className="space-y-[1px] mb-[2px]">
                {c.moves.map((m, i) => (
                  <li key={i} className="text-[8px] text-[hsl(var(--slide-text))] leading-[1.4]">• {m}</li>
                ))}
              </ul>
              <p className="text-[7.5px] text-[hsl(var(--slide-gold))] leading-[1.4]"><span className="uppercase tracking-[0.1em]">Урок:</span> {c.lesson}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[80px] py-[50px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[10px]">Как это делают лучшие</p>
      <h2 className="font-display text-[44px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[28px] max-w-[1700px]">
        3 продукта, которые сделали onboarding оружием.
      </h2>
      <div className="grid grid-cols-3 gap-[18px] max-w-[1750px]">
        {cases.map((c) => (
          <div key={c.name} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.25)] rounded-[12px] px-[24px] py-[22px] flex flex-col">
            <p className="text-[28px] font-bold text-[hsl(var(--slide-gold))] leading-[1.1] mb-[6px]">{c.name}</p>
            <p className="text-[14px] text-[hsl(var(--slide-text-muted))] italic leading-[1.4] mb-[14px]">→ {c.aha}</p>
            <p className="text-[12px] uppercase tracking-[0.15em] text-[hsl(var(--slide-gold))] mb-[6px]">Что делают</p>
            <ul className="space-y-[6px] mb-[14px]">
              {c.moves.map((m, i) => (
                <li key={i} className="text-[15px] text-[hsl(var(--slide-text))] leading-[1.45]">• {m}</li>
              ))}
            </ul>
            <div className="mt-auto bg-[hsl(var(--slide-gold)/0.08)] border-l-[3px] border-[hsl(var(--slide-gold))] pl-[12px] py-[8px]">
              <p className="text-[10px] uppercase tracking-[0.15em] text-[hsl(var(--slide-gold))] mb-[2px]">Урок</p>
              <p className="text-[14px] text-[hsl(var(--slide-text))] leading-[1.4]">{c.lesson}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
