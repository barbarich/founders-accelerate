import { useIsMobile } from "@/hooks/use-mobile";

const mechanisms = [
  {
    num: "1",
    name: "Незавершённость",
    desc: "Что-то осталось не доделано. Прогресс-бар, серия из 7 уроков, 3 из 10 шагов.",
    example: "Duolingo — серия дней подряд, тебе обидно её сломать.",
  },
  {
    num: "2",
    name: "Ожидание ответа",
    desc: "Кто-то взаимодействовал с тобой в продукте.",
    example: "WhatsApp, LinkedIn, Slack — у тебя 1 непрочитанное.",
  },
  {
    num: "3",
    name: "Свежий контент",
    desc: "В продукте регулярно появляется что-то новое.",
    example: "TikTok, Spotify Discover Weekly, новостные приложения.",
  },
  {
    num: "4",
    name: "Сохранённое",
    desc: "Юзер сам отложил «на потом».",
    example: "Pinterest — сохранил на доску. Spotify — добавил в плейлист.",
  },
  {
    num: "5",
    name: "Созданное",
    desc: "Юзер создал что-то и хочет это увидеть/использовать снова.",
    example: "Notion — моя страница. Figma — мой проект. Lovable — моё приложение.",
  },
];

export default function L8Slide19FiveMechanisms() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[14px]">
        <p className="text-[9px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[3px]">
          5 механизмов возврата
        </p>
        <h2 className="font-display text-[17px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[8px]">
          Только пять. Каждый продукт использует один или комбинацию.
        </h2>
        <div className="space-y-[4px]">
          {mechanisms.map((m) => (
            <div key={m.num} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.2)] rounded-[6px] px-[8px] py-[5px]">
              <div className="flex items-baseline gap-[6px] mb-[1px]">
                <span className="font-mono text-[10px] text-[hsl(var(--slide-gold))] font-bold">{m.num}.</span>
                <p className="text-[10px] font-bold text-[hsl(var(--slide-text))] leading-[1.2]">{m.name}</p>
              </div>
              <p className="text-[8.5px] text-[hsl(var(--slide-text-muted))] leading-[1.35]">{m.desc}</p>
              <p className="text-[8px] text-[hsl(var(--slide-gold))] italic leading-[1.35] mt-[1px]">{m.example}</p>
            </div>
          ))}
        </div>
        <p className="text-[9px] text-[hsl(var(--slide-gold))] font-semibold mt-[6px] leading-[1.4]">
          Хотя бы один — обязателен. Лучше два разных.
        </p>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[80px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[14px]">
        5 механизмов возврата
      </p>
      <h2 className="font-display text-[48px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[24px]">
        Только пять. Каждый продукт использует один или комбинацию.
      </h2>
      <div className="grid grid-cols-5 gap-[10px] max-w-[1700px] mb-[20px]">
        {mechanisms.map((m) => (
          <div key={m.num} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.25)] rounded-[12px] px-[18px] py-[18px] flex flex-col">
            <span className="font-mono text-[42px] text-[hsl(var(--slide-gold))] font-bold leading-none mb-[10px]">{m.num}</span>
            <p className="text-[18px] font-bold text-[hsl(var(--slide-text))] leading-[1.2] mb-[10px]">{m.name}</p>
            <p className="text-[14px] text-[hsl(var(--slide-text-muted))] leading-[1.4] mb-[10px]">{m.desc}</p>
            <p className="text-[13px] text-[hsl(var(--slide-gold))] italic leading-[1.4]">{m.example}</p>
          </div>
        ))}
      </div>
      <p className="text-[22px] text-[hsl(var(--slide-gold))] font-semibold max-w-[1500px] leading-[1.4]">
        Хотя бы один из пяти — обязателен. Лучше два разных. Без этого нет retention, какие бы push вы ни слали.
      </p>
    </div>
  );
}
