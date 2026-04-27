import { useIsMobile } from "@/hooks/use-mobile";

const tools = [
  {
    label: "Запись экранов юзеров",
    name: "PostHog Session Replay (free)",
    setup: "Один <script> в head. 10 минут. Бесплатно до 5k recordings/мес.",
    note: "Альтернатива — Microsoft Clarity (полностью free, без лимитов).",
  },
  {
    label: "Heatmaps + клики",
    name: "Microsoft Clarity (free)",
    setup: "Скрипт в head. Покажет dead clicks, rage clicks, scroll depth.",
    note: "Лучше PostHog для heatmap-визуализаций. Хуже — для funnel-аналитики.",
  },
  {
    label: "Модерируемые тесты с юзером",
    name: "Lookback (trial) / Loom + Zoom",
    setup: "30 минут с одним юзером. Просишь думать вслух. Записываешь.",
    note: "5 таких сессий = больше инсайтов, чем 50 анкет. Lookback платный — Loom + Zoom бесплатно.",
  },
  {
    label: "Unmoderated тесты",
    name: "Maze (free до 3 проектов)",
    setup: "Загружаешь Figma или ссылку. Юзер проходит, ты получаешь видео + клики + ответы.",
    note: "Хорошо для до-релиза. Альтернатива — UserTesting.com (платный, но качественнее).",
  },
  {
    label: "Funnel + drop-off аналитика",
    name: "PostHog Insights (free)",
    setup: "Определяешь шаги funnel в UI. Видишь % дошедших на каждом.",
    note: "Без этого «у меня плохой onboarding» — ощущение, не факт.",
  },
];

export default function M7Slide09bToolkit() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[14px] py-[14px]">
        <p className="text-[8px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[3px]">Стек для аудита трения</p>
        <h2 className="font-display text-[15px] font-bold text-[hsl(var(--slide-text))] leading-[1.2] mb-[4px]">
          5 инструментов. Все free или free-tier.
        </h2>
        <p className="text-[8px] text-[hsl(var(--slide-text-muted))] mb-[8px] leading-[1.4]">
          Без них «юзеру неудобно» — это твоё ощущение, не факт. На MVP хватит PostHog + Clarity.
        </p>
        <div className="space-y-[4px]">
          {tools.map((t, i) => (
            <div key={i} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.18)] rounded-[5px] px-[8px] py-[5px]">
              <p className="text-[7.5px] uppercase tracking-[0.1em] text-[hsl(var(--slide-text-muted))] mb-[1px]">{t.label}</p>
              <p className="text-[9.5px] font-bold text-[hsl(var(--slide-gold))] leading-[1.25] mb-[1px]">{t.name}</p>
              <p className="text-[7.5px] text-[hsl(var(--slide-text))] leading-[1.35] mb-[1px]">{t.setup}</p>
              <p className="text-[7px] text-[hsl(var(--slide-text-muted))] italic leading-[1.35]">{t.note}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[80px] py-[50px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[10px]">Стек для аудита трения</p>
      <h2 className="font-display text-[48px] font-bold text-[hsl(var(--slide-text))] leading-[1.05] mb-[10px]">
        5 инструментов. Все free или free-tier.
      </h2>
      <p className="text-[20px] text-[hsl(var(--slide-text-muted))] mb-[28px] max-w-[1700px] leading-[1.45]">
        Без них «юзеру неудобно» — это твоё ощущение, не факт. На MVP хватит PostHog + Clarity. Остальные — когда дойдёшь до 100 регулярных юзеров.
      </p>
      <div className="max-w-[1750px] border border-[hsl(var(--slide-gold)/0.2)] rounded-[14px] overflow-hidden">
        {tools.map((t, i) => (
          <div
            key={i}
            className={`grid grid-cols-[260px_320px_1fr_1fr] gap-[20px] px-[24px] py-[14px] ${i !== tools.length - 1 ? "border-b border-[hsl(var(--slide-border)/0.15)]" : ""} ${i === 0 ? "bg-[hsl(var(--slide-bg-alt))]" : ""}`}
          >
            <p className="text-[14px] uppercase tracking-[0.12em] text-[hsl(var(--slide-text-muted))] leading-[1.4]">{t.label}</p>
            <p className="text-[18px] font-bold text-[hsl(var(--slide-gold))] leading-[1.3]">{t.name}</p>
            <p className="text-[15px] text-[hsl(var(--slide-text))] leading-[1.45]">{t.setup}</p>
            <p className="text-[14px] text-[hsl(var(--slide-text-muted))] italic leading-[1.45]">{t.note}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
