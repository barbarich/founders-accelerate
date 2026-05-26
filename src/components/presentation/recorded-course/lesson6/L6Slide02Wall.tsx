import { useIsMobile } from "@/hooks/use-mobile";

const skills = [
  {
    num: "1",
    title: "Построить MVP",
    subtitle: "Claude Code + Supabase + Vercel",
    outputs: [
      "Рабочий URL на своём домене",
      "Backend с авторизацией и RLS",
      "Два промпта, которые работают",
    ],
    time: "~60 мин теории + 20 мин демо",
  },
  {
    num: "2",
    title: "Рассказать о нём",
    subtitle: "Пост в соцсети + видео 30 сек",
    outputs: [
      "Один шаблон поста (180 слов)",
      "Один шаблон видео (30 сек)",
      "Один промпт, который делает оба",
    ],
    time: "~40 мин теории + 15 мин воркшоп",
  },
];

export default function L6Slide02Wall() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[24px]">
        <p className="text-[10px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[4px]">
          Сегодня
        </p>
        <h2 className="font-display text-[22px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[6px]">
          Два навыка.
        </h2>
        <p className="text-[10px] text-[hsl(var(--slide-text-muted))] mb-[12px] leading-[1.45]">
          Уходите с двумя навыками, которые начинаете применять завтра утром.
        </p>
        <div className="space-y-[8px]">
          {skills.map((s, i) => (
            <div key={i} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.25)] rounded-[8px] px-[12px] py-[10px]">
              <div className="flex items-center gap-[8px] mb-[4px]">
                <span className="font-mono text-[11px] text-[hsl(var(--slide-gold))] bg-[hsl(var(--slide-gold)/0.15)] w-[18px] h-[18px] flex items-center justify-center rounded-full font-bold">{s.num}</span>
                <h3 className="text-[13px] font-bold text-[hsl(var(--slide-text))] leading-[1.2]">{s.title}</h3>
              </div>
              <p className="text-[9px] text-[hsl(var(--slide-gold))] mb-[5px]">{s.subtitle}</p>
              <div className="space-y-[2px]">
                {s.outputs.map((o, j) => (
                  <div key={j} className="flex items-start gap-[4px]">
                    <span className="text-[8px] text-[hsl(var(--slide-gold)/0.7)] mt-[1px]">→</span>
                    <p className="text-[9px] text-[hsl(var(--slide-text-muted))] leading-[1.35]">{o}</p>
                  </div>
                ))}
              </div>
              <p className="text-[8px] text-[hsl(var(--slide-text-muted)/0.7)] mt-[5px] font-mono">{s.time}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[100px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[12px]">
        Сегодня
      </p>
      <h2 className="font-display text-[60px] font-bold text-[hsl(var(--slide-text))] leading-[1.05] mb-[10px]">
        Два навыка.
      </h2>
      <p className="text-[22px] text-[hsl(var(--slide-text-muted))] mb-[40px] max-w-[1200px] leading-[1.45]">
        Уходите с двумя навыками, которые начинаете применять завтра утром — не «потом, когда будет время».
      </p>

      <div className="grid grid-cols-2 gap-[24px] max-w-[1400px]">
        {skills.map((s, i) => (
          <div key={i} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.25)] rounded-[16px] px-[32px] py-[28px]">
            <div className="flex items-center gap-[16px] mb-[12px]">
              <span className="font-mono text-[22px] text-[hsl(var(--slide-gold))] bg-[hsl(var(--slide-gold)/0.15)] w-[44px] h-[44px] flex items-center justify-center rounded-full font-bold">{s.num}</span>
              <h3 className="text-[32px] font-bold text-[hsl(var(--slide-text))]">{s.title}</h3>
            </div>
            <p className="text-[19px] text-[hsl(var(--slide-gold))] mb-[16px]">{s.subtitle}</p>
            <div className="space-y-[8px] mb-[16px]">
              {s.outputs.map((o, j) => (
                <div key={j} className="flex items-start gap-[10px]">
                  <span className="text-[17px] text-[hsl(var(--slide-gold)/0.7)] mt-[1px]">→</span>
                  <p className="text-[18px] text-[hsl(var(--slide-text-muted))] leading-[1.45]">{o}</p>
                </div>
              ))}
            </div>
            <p className="text-[14px] text-[hsl(var(--slide-text-muted)/0.7)] font-mono border-t border-[hsl(var(--slide-border)/0.3)] pt-[10px]">{s.time}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
