import { useIsMobile } from "@/hooks/use-mobile";

const lines = [
  { num: "1", label: "Конкретная правка", body: "«До среды я выкатываю в прод [что именно] на экране [где].»" },
  { num: "2", label: "Метрика ДО / ПОСЛЕ", body: "«Сейчас % дошедших до первого результата = [X]. К M8 это будет = [Y].»" },
  { num: "3", label: "Откуда юзеры", body: "«Эти 5–10 новых юзеров на новом флоу я возьму из [конкретный канал].»" },
];

export default function M7Slide11aCommitment() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[16px] py-[14px]">
        <p className="text-[8.5px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[3px]">Commitment вслух · по кругу</p>
        <h2 className="font-display text-[18px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[6px]">
          Каждый говорит. Не пишет. Не думает молча.
        </h2>
        <p className="text-[8.5px] text-[hsl(var(--slide-text-muted))] leading-[1.4] mb-[8px]">
          90 секунд на каждого. По 3 строкам. Группа повторяет за тобой пункт 2 — закрепление.
        </p>
        <div className="space-y-[5px]">
          {lines.map((l) => (
            <div key={l.num} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.25)] rounded-[6px] px-[10px] py-[6px]">
              <div className="flex items-center gap-[6px] mb-[1px]">
                <span className="font-mono text-[9px] text-[hsl(var(--slide-gold))] bg-[hsl(var(--slide-gold)/0.15)] w-[14px] h-[14px] flex items-center justify-center rounded-full font-bold">{l.num}</span>
                <p className="text-[9.5px] uppercase tracking-[0.1em] text-[hsl(var(--slide-gold))]">{l.label}</p>
              </div>
              <p className="text-[9px] font-mono text-[hsl(var(--slide-text))] leading-[1.4]">{l.body}</p>
            </div>
          ))}
        </div>
        <p className="text-[8.5px] text-[hsl(var(--slide-gold))] font-semibold mt-[8px] leading-[1.4]">
          Не сказал вслух — не считается. В чате после встречи дублируешь свои 3 строки.
        </p>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[100px] py-[50px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[12px]">Commitment вслух · по кругу</p>
      <h2 className="font-display text-[64px] font-bold text-[hsl(var(--slide-text))] leading-[1.05] mb-[14px]">
        Каждый говорит. Не пишет. Не думает молча.
      </h2>
      <p className="text-[22px] text-[hsl(var(--slide-text-muted))] leading-[1.45] max-w-[1700px] mb-[32px]">
        90 секунд на каждого. По 3 строкам ниже. Группа повторяет за тобой пункт 2 — закрепление.
      </p>
      <div className="space-y-[14px] max-w-[1700px] mb-[24px]">
        {lines.map((l) => (
          <div key={l.num} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.25)] rounded-[12px] px-[28px] py-[20px] grid grid-cols-[60px_280px_1fr] gap-[20px] items-center">
            <span className="font-mono text-[20px] text-[hsl(var(--slide-gold))] bg-[hsl(var(--slide-gold)/0.15)] w-[44px] h-[44px] flex items-center justify-center rounded-full font-bold">{l.num}</span>
            <p className="text-[16px] uppercase tracking-[0.15em] text-[hsl(var(--slide-gold))]">{l.label}</p>
            <p className="text-[20px] font-mono text-[hsl(var(--slide-text))] leading-[1.45]">{l.body}</p>
          </div>
        ))}
      </div>
      <p className="text-[22px] text-[hsl(var(--slide-gold))] font-semibold max-w-[1700px] leading-[1.4]">
        Не сказал вслух — не считается. После встречи дублируешь свои 3 строки в чате — пара ждёт скриншот в среду.
      </p>
    </div>
  );
}
