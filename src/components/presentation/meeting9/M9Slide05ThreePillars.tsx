import { useIsMobile } from "@/hooks/use-mobile";

const pillars = [
  { n: "01", name: "Позиционирование", tag: "ОДНА ФРАЗА · 30 МИНУТ", body: "Кому, что, чем отличается. Та самая фраза, что станет H1 на лендинге, headline в рекламе и первой строкой в cold outreach." },
  { n: "02", name: "Визуал", tag: "ОДИН СТИЛЬ ВЕЗДЕ · 30 МИНУТ", body: "Лендинг + соцсети + ад-креативы. Один шрифт, одна палитра, один тон. Дизайнер не нужен — собирается AI." },
  { n: "03", name: "Креативы и каналы", tag: "20–30 ВАРИАНТОВ · 30 МИНУТ", body: "Не один «идеальный» креатив, а пачка вариантов. AI генерит, алгоритм Meta или Google сам выбирает, что показывать кому." },
];

export default function M9Slide05ThreePillars() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[18px]">
        <p className="text-[10px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[6px]">
          Framework · три кита упаковки
        </p>
        <h2 className="font-display text-[20px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[6px]">
          Упаковка — это <span className="text-[hsl(var(--slide-gold))]">три кита</span>
        </h2>
        <p className="text-[9px] text-[hsl(var(--slide-text)/0.85)] leading-[1.45] mb-[8px]">
          Все три обязательны. Слабое звено убивает остальные два.
        </p>
        <div className="space-y-[5px]">
          {pillars.map((p) => (
            <div key={p.n} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.3)] rounded-[6px] px-[10px] py-[6px]">
              <p className="text-[10px] font-bold text-[hsl(var(--slide-text))]">
                <span className="text-[hsl(var(--slide-gold))]">{p.n}.</span> {p.name}
              </p>
              <p className="text-[7px] uppercase tracking-[0.1em] text-[hsl(var(--slide-gold))] mb-[2px]">{p.tag}</p>
              <p className="text-[8px] text-[hsl(var(--slide-text)/0.85)] leading-[1.4]">{p.body}</p>
            </div>
          ))}
        </div>
        <p className="text-[9px] text-[hsl(var(--slide-gold))] italic mt-[8px] leading-[1.4]">
          На каждый кит — 30 минут. Полная упаковка — 90 минут с AI. Без AI это месяц с агентством.
        </p>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[16px]">
        Framework · три кита упаковки
      </p>
      <h2 className="font-display text-[58px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[18px] tracking-[-0.02em]">
        Упаковка — это <span className="text-[hsl(var(--slide-gold))]">три кита</span>
      </h2>
      <p className="text-[22px] text-[hsl(var(--slide-text)/0.88)] leading-[1.45] mb-[26px] max-w-[1600px]">
        Все три обязательны. Слабое звено убивает остальные два. Сильное позиционирование без визуала — мимо. Идеальный визуал без креативов — мёртвая страница.
      </p>
      <div className="grid grid-cols-3 gap-[20px] mb-[20px] max-w-[1700px]">
        {pillars.map((p) => (
          <div key={p.n} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.3)] rounded-[14px] px-[28px] py-[22px]">
            <p className="text-[14px] font-bold text-[hsl(var(--slide-gold))] uppercase tracking-[0.18em] mb-[10px]">{p.n}</p>
            <p className="font-display text-[28px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[6px]">{p.name}</p>
            <p className="text-[12px] uppercase tracking-[0.14em] text-[hsl(var(--slide-gold))] mb-[10px]">{p.tag}</p>
            <p className="text-[17px] text-[hsl(var(--slide-text)/0.88)] leading-[1.5]">{p.body}</p>
          </div>
        ))}
      </div>
      <p className="text-[22px] text-[hsl(var(--slide-gold))] italic leading-[1.45] max-w-[1700px]">
        На каждый кит — 30 минут. Полная упаковка — <b className="not-italic">90 минут с AI</b>. Без AI это месяц с агентством.
      </p>
    </div>
  );
}
