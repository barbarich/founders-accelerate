import { useIsMobile } from "@/hooks/use-mobile";

const channels = [
  {
    name: "Network",
    cadence: "ежедневно",
    metric: "5 касаний/неделю",
    intent: "warm intros · повторные контакты · alumni-каналы",
  },
  {
    name: "Events",
    cadence: "1–2 в квартал",
    metric: "60% calendar до прилёта",
    intent: "конференции · meetups · сцена · QR-механика",
  },
  {
    name: "Demo",
    cadence: "5–10 в неделю",
    metric: "30% close rate",
    intent: "15-мин звонок · 5 discovery-вопросов · book at moment",
  },
  {
    name: "Content",
    cadence: "3 поста в неделю",
    metric: "1 inbound / неделя",
    intent: "founder-led · building in public · case-study формат",
  },
  {
    name: "Community",
    cadence: "постоянная",
    metric: "10% MoM growth",
    intent: "free / paid группа · alumni · long-term warm pipeline",
  },
];

export default function M11Slide03PipelineOS() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[20px]">
        <p className="text-[9px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[5px]">
          Карта всего
        </p>
        <h2 className="font-display text-[20px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[8px]">
          Founder Pipeline OS<br /><span className="text-[hsl(var(--slide-gold))]">5 каналов одновременно</span>
        </h2>
        <p className="text-[9px] text-[hsl(var(--slide-text-muted))] mb-[8px] leading-[1.4]">
          Не «или-или». Все 5 каналов работают параллельно. Один здоровый pipeline — это когда ни один канал не несёт &gt;50% входящих.
        </p>
        <div className="space-y-[4px]">
          {channels.map((c) => (
            <div key={c.name} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[5px] px-[8px] py-[5px]">
              <div className="flex items-baseline gap-[6px] mb-[2px]">
                <span className="text-[10px] font-bold text-[hsl(var(--slide-gold))] uppercase tracking-[0.1em]">{c.name}</span>
                <span className="text-[7px] text-[hsl(var(--slide-text-muted))]">· {c.cadence}</span>
              </div>
              <p className="text-[8px] text-[hsl(var(--slide-text))] leading-[1.35]">{c.intent}</p>
              <p className="text-[8px] text-[hsl(var(--slide-gold))] mt-[1px]">{c.metric}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[16px]">
        Карта всего
      </p>
      <h2 className="font-display text-[56px] font-bold text-[hsl(var(--slide-text))] leading-[1.05] mb-[16px] tracking-[-0.02em]">
        Founder Pipeline OS — <span className="text-[hsl(var(--slide-gold))]">5 каналов одновременно</span>
      </h2>
      <p className="text-[20px] text-[hsl(var(--slide-text-muted))] mb-[28px] max-w-[1700px] leading-[1.45]">
        Не «или-или». Все 5 каналов работают параллельно. Здоровый pipeline = ни один канал не несёт больше 50% входящих. Иначе один Google update — и тебя нет.
      </p>
      <div className="grid grid-cols-5 gap-[16px] max-w-[1700px]">
        {channels.map((c) => (
          <div key={c.name} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[12px] px-[20px] py-[18px]">
            <p className="text-[20px] font-bold text-[hsl(var(--slide-gold))] uppercase tracking-[0.1em] mb-[6px]">{c.name}</p>
            <p className="text-[13px] text-[hsl(var(--slide-text-muted))] mb-[10px]">{c.cadence}</p>
            <p className="text-[15px] text-[hsl(var(--slide-text))] leading-[1.4] mb-[10px]">{c.intent}</p>
            <p className="text-[13px] text-[hsl(var(--slide-gold))] font-semibold border-t border-[hsl(var(--slide-gold)/0.2)] pt-[8px]">{c.metric}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
