import { useIsMobile } from "@/hooks/use-mobile";

const models = [
  { name: "Per-seat", status: "Умирает", why: "AI = один человек делает работу 10. Считать «seats» = терять revenue. Notion, Linear уже переходят." },
  { name: "Usage-based", status: "Растёт", why: "Платишь за API-calls / generations / processed-data. Прозрачно для клиента, scaling-friendly для тебя." },
  { name: "Outcome-based", status: "Премиум", why: "Платишь за результат (X leads / Y revenue uplift). Сложно мерить, но closing rate выше 60%." },
  { name: "Value-based hybrid", status: "Best 2026", why: "Base fee + usage tier. Предсказуемо для клиента, monetize при росте usage у тебя." },
];

const phrases = [
  { ctx: "Когда клиент молчит про деньги", say: "«Это $X в месяц. Для [конкретный результат] это окупается за [N] недель. Делаем?»" },
  { ctx: "Когда хочешь дать скидку без потери ценности", say: "«Я могу дать тебе 20% скидку, если подписываемся на квартал — это закрывает мне cash flow, тебе экономит $Y.»" },
  { ctx: "Когда чувствуешь что бюджет действительно мал", say: "«Если это слишком — расскажи под какой бюджет ты считал, посмотрим вместе. Возможно стартанём с урезанного scope.»" },
];

export default function M11Slide15Pricing() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[16px]">
        <p className="text-[9px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[4px]">
          Pricing 2026
        </p>
        <h2 className="font-display text-[18px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[6px]">
          4 модели + <span className="text-[hsl(var(--slide-gold))]">3 фразы без извинений</span>
        </h2>
        <div className="grid grid-cols-2 gap-[4px] mb-[5px]">
          {models.map((m) => (
            <div key={m.name} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[4px] px-[6px] py-[3px]">
              <div className="flex items-baseline justify-between gap-[3px]">
                <p className="text-[9px] font-bold text-[hsl(var(--slide-text))]">{m.name}</p>
                <p className="text-[7px] text-[hsl(var(--slide-gold))]">{m.status}</p>
              </div>
              <p className="text-[7px] text-[hsl(var(--slide-text-muted))] leading-[1.4]">{m.why}</p>
            </div>
          ))}
        </div>
        <div className="bg-[hsl(var(--slide-gold)/0.1)] border-l-2 border-[hsl(var(--slide-gold))] rounded-[4px] px-[7px] py-[4px]">
          <p className="text-[8px] font-bold text-[hsl(var(--slide-gold))] uppercase tracking-[0.1em] mb-[2px]">3 фразы дословно</p>
          {phrases.map((p, i) => (
            <p key={i} className="text-[7px] text-[hsl(var(--slide-text)/0.9)] leading-[1.4] mb-[1px]">
              <span className="text-[hsl(var(--slide-gold))]">→</span> <span className="italic text-[hsl(var(--slide-text-muted))]">{p.ctx}:</span> {p.say}
            </p>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[14px]">
        Pricing 2026 в AI-эре
      </p>
      <h2 className="font-display text-[50px] font-bold text-[hsl(var(--slide-text))] leading-[1.05] mb-[20px] tracking-[-0.02em]">
        4 модели + <span className="text-[hsl(var(--slide-gold))]">3 фразы без извинений</span>
      </h2>
      <div className="grid grid-cols-4 gap-[14px] mb-[20px] max-w-[1700px]">
        {models.map((m) => (
          <div key={m.name} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[10px] px-[18px] py-[14px]">
            <div className="flex items-baseline justify-between gap-[6px] mb-[6px]">
              <p className="text-[18px] font-bold text-[hsl(var(--slide-text))]">{m.name}</p>
              <p className="text-[12px] text-[hsl(var(--slide-gold))] uppercase tracking-[0.1em]">{m.status}</p>
            </div>
            <p className="text-[14px] text-[hsl(var(--slide-text-muted))] leading-[1.45]">{m.why}</p>
          </div>
        ))}
      </div>
      <div className="bg-[hsl(var(--slide-gold)/0.1)] border-l-[4px] border-[hsl(var(--slide-gold))] rounded-[10px] px-[28px] py-[16px] max-w-[1700px]">
        <p className="text-[14px] font-bold text-[hsl(var(--slide-gold))] uppercase tracking-[0.15em] mb-[10px]">3 фразы которые говоришь дословно вместо «извините, но...»</p>
        {phrases.map((p, i) => (
          <p key={i} className="text-[16px] text-[hsl(var(--slide-text)/0.95)] leading-[1.5] mb-[4px]">
            <span className="text-[hsl(var(--slide-gold))] font-bold">→</span> <span className="italic text-[hsl(var(--slide-text-muted))]">{p.ctx}:</span> {p.say}
          </p>
        ))}
      </div>
    </div>
  );
}
