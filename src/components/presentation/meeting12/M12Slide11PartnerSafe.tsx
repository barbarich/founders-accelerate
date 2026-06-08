import { useIsMobile } from "@/hooks/use-mobile";

const guards = [
  {
    n: "1",
    t: "Вестинг: 4 года + 1 год cliff",
    d: "Главная защита. Доля зарабатывается со временем, не выдаётся сразу.",
    ex: "Без вестинга партнёр ушёл на 3-й месяц — и забрал долю навсегда. После 12 мес — 25%. Отсутствие вестинга инвесторы считают дилбрейкером.",
  },
  {
    n: "2",
    t: "Equity split — не 50/50 вслепую",
    d: "50/50 без tie-breaker = deadlock на первом серьёзном споре.",
    ex: "73% команд делят долю в первый месяц без чётких ролей → конфликт. Важна не цифра, а что сплит обоснован, задокументирован и с вестингом.",
  },
  {
    n: "3",
    t: "Founder agreement на бумаге",
    d: "До первой строки кода, пока вы ещё друзья.",
    ex: "Роли · кто финально решает (анти-deadlock) · IP на компанию · что при уходе (buyback невестованного) · как решаете споры.",
  },
];

export default function M12Slide11PartnerSafe() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[16px]">
        <p className="text-[9px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[4px]">
          Партнёрство · 3 защиты
        </p>
        <h2 className="font-display text-[19px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[8px]">
          Хочешь партнёра — <span className="text-[hsl(var(--slide-gold))]">защити обоих заранее.</span>
        </h2>
        <div className="space-y-[5px]">
          {guards.map((g) => (
            <div key={g.n} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[6px] px-[10px] py-[6px]">
              <div className="flex items-baseline gap-[6px]">
                <span className="text-[11px] font-bold text-[hsl(var(--slide-gold))]">{g.n}</span>
                <span className="text-[9.5px] font-bold text-[hsl(var(--slide-text))]">{g.t}</span>
              </div>
              <p className="text-[8px] text-[hsl(var(--slide-text-muted))] leading-[1.35] ml-[16px]">{g.ex}</p>
            </div>
          ))}
        </div>
        <p className="text-[8.5px] text-[hsl(var(--slide-gold))] font-semibold leading-[1.4] mt-[6px]">
          Это не про недоверие. Это про то, чтобы дружба пережила бизнес.
        </p>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[14px]">
        Партнёрство · 3 защиты, которые ставят сразу
      </p>
      <h2 className="font-display text-[52px] font-bold text-[hsl(var(--slide-text))] leading-[1.05] mb-[24px] tracking-[-0.02em]">
        Хочешь партнёра — <span className="text-[hsl(var(--slide-gold))]">защити обоих заранее.</span>
      </h2>
      <div className="grid grid-cols-3 gap-[20px] max-w-[1700px] mb-[24px]">
        {guards.map((g) => (
          <div key={g.n} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.25)] rounded-[14px] px-[26px] py-[20px]">
            <div className="flex items-baseline gap-[12px] mb-[8px]">
              <span className="font-display text-[34px] font-bold text-[hsl(var(--slide-gold))] leading-none">{g.n}</span>
              <span className="text-[20px] font-bold text-[hsl(var(--slide-text))] leading-[1.15]">{g.t}</span>
            </div>
            <p className="text-[16px] text-[hsl(var(--slide-text))] leading-[1.35] mb-[8px]">{g.d}</p>
            <p className="text-[14px] text-[hsl(var(--slide-text-muted))] leading-[1.4]">{g.ex}</p>
          </div>
        ))}
      </div>
      <p className="text-[24px] text-[hsl(var(--slide-gold))] font-semibold leading-[1.4] max-w-[1700px]">
        Это не про недоверие. Это про то, чтобы дружба пережила бизнес.
      </p>
    </div>
  );
}
