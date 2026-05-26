import { useIsMobile } from "@/hooks/use-mobile";

const channels = [
  { rank: "1", name: "Warm intro", reply: "30–40%", effort: "Высокий — нужно построить сеть", when: "Tier A счета · CXO роли · large enterprise", how: "Map mutual connections в LinkedIn · double opt-in запрос интро" },
  { rank: "2", name: "Event-met", reply: "25–30%", effort: "Высокий — выезд + время", when: "Когда твоя ICP концентрируется на нишевом эвенте", how: "Pre-conference scheduler (Brella/Swapcard) · холл · демо букается в моменте" },
  { rank: "3", name: "LinkedIn DM на trigger", reply: "8–12%", effort: "Средний — 15 мин на персонализацию", when: "Tier B/C счета · средний размер · конкретный триггер", how: "Конкретный signal: hiring, funding, tech stack — 1 строка + question, не pitch" },
  { rank: "4", name: "Cold email на trigger", reply: "3–5%", effort: "Низкий — масштабируется через Instantly", when: "Tier C · широкий охват · если без trigger — не делай вообще", how: "4-touch sequence · personalized opener из Clay · gentle bump через 5 дней" },
  { rank: "5", name: "Cold call", reply: "1–3%", effort: "Низкий-средний", when: "Когда у тебя 5 свободных часов и нечего больше делать", how: "Не рекомендую в 2026 для соло-фаундера — твоё время дороже" },
];

export default function L14Slide07ChannelPriority() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[12px]">
        <p className="text-[8.5px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[3px]">
          Приоритет каналов · reply rate
        </p>
        <h2 className="font-display text-[16px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[5px]">
          Где твоё время <span className="text-[hsl(var(--slide-gold))]">даёт максимум</span>
        </h2>
        <p className="text-[7.5px] text-[hsl(var(--slide-text-muted))] mb-[4px] leading-[1.4]">1 warm intro = 30 cold писем. Считай не объём, а conversion × effort.</p>
        <div className="space-y-[3px]">
          {channels.map((c) => (
            <div key={c.rank} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[4px] px-[6px] py-[3px]">
              <div className="flex items-baseline gap-[4px]">
                <span className="text-[10px] font-bold text-[hsl(var(--slide-gold))]">{c.rank}</span>
                <span className="text-[8.5px] font-bold text-[hsl(var(--slide-text))]">{c.name}</span>
                <span className="text-[7px] text-[hsl(var(--slide-gold))]">· {c.reply}</span>
              </div>
              <p className="text-[6.5px] text-[hsl(var(--slide-text-muted))] leading-[1.4] ml-[14px]">когда: {c.when}</p>
              <p className="text-[6.5px] text-[hsl(var(--slide-text-muted))] leading-[1.4] ml-[14px]">→ {c.how}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[12px]">
        Приоритет каналов · reply rate vs effort
      </p>
      <h2 className="font-display text-[50px] font-bold text-[hsl(var(--slide-text))] leading-[1.05] mb-[10px] tracking-[-0.02em]">
        Где твоё время <span className="text-[hsl(var(--slide-gold))]">даёт максимум выручки</span>
      </h2>
      <p className="text-[20px] text-[hsl(var(--slide-text-muted))] mb-[20px] max-w-[1700px] leading-[1.45]">
        1 warm intro = 30 cold писем по conversion. Считай не объём — conversion × effort × твой час.
      </p>
      <div className="space-y-[8px] max-w-[1700px]">
        {channels.map((c) => (
          <div key={c.rank} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[10px] px-[22px] py-[10px]">
            <div className="flex items-baseline gap-[14px] mb-[3px]">
              <span className="font-display text-[28px] font-bold text-[hsl(var(--slide-gold))] leading-none">{c.rank}</span>
              <span className="text-[20px] font-bold text-[hsl(var(--slide-text))]">{c.name}</span>
              <span className="text-[16px] text-[hsl(var(--slide-gold))] font-semibold">reply {c.reply}</span>
              <span className="text-[13px] text-[hsl(var(--slide-text-muted))]">· effort: {c.effort}</span>
            </div>
            <p className="text-[14px] text-[hsl(var(--slide-text-muted))] leading-[1.45] ml-[42px]">
              <span className="text-[hsl(var(--slide-gold))]">когда:</span> {c.when} <span className="text-[hsl(var(--slide-gold))]">→ как:</span> {c.how}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
