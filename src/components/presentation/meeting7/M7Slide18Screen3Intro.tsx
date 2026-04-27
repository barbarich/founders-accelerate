import { useIsMobile } from "@/hooks/use-mobile";

const examples = [
  {
    name: "Duolingo",
    hook: "Streak + напоминание в одно и то же время",
    why: "Серия дней — то, что страшно потерять. Открываешь не «учить язык», а «не сорвать streak».",
  },
  {
    name: "Spotify",
    hook: "Discover Weekly · по понедельникам",
    why: "Свежий персональный плейлист появляется в один и тот же день. Это календарная привычка, а не push.",
  },
  {
    name: "Instagram / TikTok",
    hook: "Незаконченная лента + новые лайки",
    why: "Алгоритм оставляет «недосмотренное» и копит социальные сигналы — есть что проверить, даже если ты ничего не запостил.",
  },
];

export default function M7Slide18Screen3Intro() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[18px]">
        <p className="text-[9px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[5px]">
          Экран 3 · Причина вернуться
        </p>
        <h2 className="font-display text-[19px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[8px]">
          Одна причина вернуться завтра. Не три, не десять — одна.
        </h2>
        <p className="text-[9px] text-[hsl(var(--slide-text-muted))] leading-[1.4] mb-[8px]">
          К моменту, когда юзер закрывает продукт впервые — у него должна быть одна конкретная причина открыть его снова. Это структурное свойство продукта, не push.
        </p>
        <p className="text-[8.5px] uppercase tracking-[0.12em] text-[hsl(var(--slide-text-muted))] font-semibold mb-[3px]">Как это делают известные продукты</p>
        <div className="space-y-[3px] mb-[6px]">
          {examples.map((e) => (
            <div key={e.name} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.25)] rounded-[5px] px-[8px] py-[4px]">
              <p className="text-[9px] font-bold text-[hsl(var(--slide-gold))] uppercase tracking-[0.08em] mb-[1px]">{e.name}</p>
              <p className="text-[8.5px] text-[hsl(var(--slide-text))] leading-[1.3] mb-[1px]">{e.hook}</p>
              <p className="text-[7.5px] text-[hsl(var(--slide-text-muted))] leading-[1.3] italic">{e.why}</p>
            </div>
          ))}
        </div>
        <p className="text-[9px] text-[hsl(var(--slide-gold))] font-semibold leading-[1.4]">
          Самый часто сломанный экран из трёх.
        </p>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[100px] py-[40px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[16px]">
        Экран 3 · Причина вернуться
      </p>
      <h2 className="font-display text-[48px] font-bold text-[hsl(var(--slide-text))] leading-[1.05] mb-[14px] max-w-[1700px]">
        Одна причина вернуться завтра. Не три, не десять — одна.
      </h2>
      <p className="text-[20px] text-[hsl(var(--slide-text-muted))] leading-[1.45] mb-[22px] max-w-[1700px]">
        К моменту, когда юзер закрывает продукт впервые — у него должна быть одна конкретная причина открыть его снова. Это структурное свойство продукта, а не push без повода.
      </p>
      <p className="text-[16px] uppercase tracking-[0.15em] text-[hsl(var(--slide-text-muted))] font-semibold mb-[10px]">
        Как это делают известные продукты
      </p>
      <div className="grid grid-cols-3 gap-[14px] max-w-[1750px] mb-[20px]">
        {examples.map((e) => (
          <div key={e.name} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.3)] rounded-[12px] px-[22px] py-[18px]">
            <p className="text-[18px] font-bold text-[hsl(var(--slide-gold))] uppercase tracking-[0.1em] mb-[8px]">{e.name}</p>
            <p className="text-[17px] text-[hsl(var(--slide-text))] leading-[1.35] mb-[8px] font-semibold">{e.hook}</p>
            <p className="text-[14px] text-[hsl(var(--slide-text-muted))] leading-[1.4] italic">{e.why}</p>
          </div>
        ))}
      </div>
      <p className="text-[20px] text-[hsl(var(--slide-gold))] font-semibold max-w-[1750px] leading-[1.4]">
        Самый часто сломанный экран из трёх. Большинство продуктов отдают результат и тут же отпускают человека.
      </p>
    </div>
  );
}
