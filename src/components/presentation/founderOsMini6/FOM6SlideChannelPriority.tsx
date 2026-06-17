import { useIsMobile } from "@/hooks/use-mobile";

// FOM6-копия M11Slide07ChannelPriority. Отличие — каналы 3 и 4:
// убрана привязка «только на trigger» / «без trigger не делай вообще»
// (найти триггер вживую сложно). Заменено на «персонализированно, но в объёме»:
// пишем многим, но в каждое касание — живая деталь, без неё не отправляем.
const channels = [
  { rank: "1", name: "Warm intro", reply: "30–40%", effort: "Высокий — нужно построить сеть", when: "Tier A счета · CXO роли · large enterprise", how: "Map mutual connections в LinkedIn · double opt-in запрос интро" },
  { rank: "2", name: "Event-met", reply: "25–30%", effort: "Высокий — выезд + время", when: "Когда твоя ICP концентрируется на нишевом эвенте", how: "Pre-conference scheduler (Brella/Swapcard) · холл · демо букается в моменте" },
  { rank: "3", name: "LinkedIn DM · персонализированный", reply: "8–12%", effort: "Средний — 5–10 мин на касание", when: "Tier B/C счета · средний размер", how: "1 живая деталь про него (роль, недавний пост, стек) + 1 вопрос — не pitch и не безликий шаблон" },
  { rank: "4", name: "Cold email · в объёме, но персонально", reply: "3–5%", effort: "Низкий — масштабируется через Instantly", when: "Tier C · широкий охват · пишем по всему списку", how: "4-touch sequence · в каждое письмо 1 персональная строка (opener из Clay) · без персонализации не отправляй" },
  { rank: "5", name: "Cold call", reply: "1–3%", effort: "Низкий-средний", when: "Когда у тебя 5 свободных часов и нечего больше делать", how: "Не рекомендую в 2026 для соло-фаундера — твоё время дороже" },
];

export default function FOM6SlideChannelPriority() {
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
        <p className="text-[7.5px] text-[hsl(var(--slide-text-muted))] mb-[4px] leading-[1.4]">Начни с одного канала сверху. Объём — не оправдание для безликости: пишем многим, но каждому с живой деталью.</p>
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
        Начни с одного канала сверху. Объём — не оправдание для безликости: пишем многим, но в каждое касание вшиваем живую деталь.
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
