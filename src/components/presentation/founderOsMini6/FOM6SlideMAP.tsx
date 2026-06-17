import { useIsMobile } from "@/hooks/use-mobile";

// FOM6-копия M11Slide15MAPPilot БЕЗ копи-пейст шаблона (Михаэль 2026-06-17:
// «удали этот одностраничный шаблон, который заполняется с клиентом»).
// Осталась суть: зачем пилот фиксировать письменно + 5 пунктов договорённости.
const why = [
  { stat: "60–70%", l: "пилотов НЕ конвертится в оплату — потому что не договорились заранее, что считается успехом" },
  { stat: "3×", l: "выше конверсия пилот → оплата, если договорённость зафиксирована письменно на старте" },
  { stat: "14–30", l: "дней — оптимальная длина пилота. Дольше → теряется ощущение срочности" },
];

const components = [
  { name: "Цель", d: "Одна числовая метрика. «Сократить X на Y%», не «улучшить процесс»." },
  { name: "Критерий оплаты", d: "Дословно: что = платим, что = расходимся. Без двусмысленности." },
  { name: "Роли", d: "Обе стороны. У клиента — кто решает, кто пользуется. У тебя — кто ведёт." },
  { name: "Сроки", d: "Этапы с датами и ответственными. Промежуточная сверка обязательна." },
  { name: "Дата решения", d: "Зафиксирована в день старта. Звонок с тем, кто платит, уже в календаре." },
];

export default function FOM6SlideMAP() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[20px]">
        <p className="text-[11px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[6px]">
          Пилот → оплата
        </p>
        <h2 className="font-display text-[20px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[10px]">
          Договорись письменно на старте = <span className="text-[hsl(var(--slide-gold))]">3× конверсия пилотов</span>
        </h2>
        <div className="grid grid-cols-3 gap-[5px] mb-[10px]">
          {why.map((w, i) => (
            <div key={i} className="bg-[hsl(var(--slide-gold)/0.1)] rounded-[6px] px-[8px] py-[5px]">
              <p className="text-[13px] font-bold text-[hsl(var(--slide-gold))] leading-none">{w.stat}</p>
              <p className="text-[8px] text-[hsl(var(--slide-text-muted))] leading-[1.35] mt-[2px]">{w.l}</p>
            </div>
          ))}
        </div>
        <p className="text-[9px] uppercase tracking-[0.12em] text-[hsl(var(--slide-gold))] mb-[4px]">5 пунктов, о которых договариваешься на kick-off</p>
        <div className="space-y-[4px]">
          {components.map((c) => (
            <div key={c.name} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[5px] px-[9px] py-[4px]">
              <p className="text-[10px] font-bold text-[hsl(var(--slide-gold))] mb-[1px]">{c.name}</p>
              <p className="text-[8px] text-[hsl(var(--slide-text-muted))] leading-[1.4]">{c.d}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px]">
      <p className="text-[20px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[14px]">
        Пилот → оплата
      </p>
      <h2 className="font-display text-[52px] font-bold text-[hsl(var(--slide-text))] leading-[1.05] mb-[24px] tracking-[-0.02em] max-w-[1700px]">
        Договорись письменно на старте = <span className="text-[hsl(var(--slide-gold))]">3× конверсия пилот → оплата</span>
      </h2>
      <div className="grid grid-cols-3 gap-[18px] mb-[28px] max-w-[1700px]">
        {why.map((w, i) => (
          <div key={i} className="bg-[hsl(var(--slide-gold)/0.1)] border-l-[4px] border-[hsl(var(--slide-gold))] rounded-[8px] px-[24px] py-[16px]">
            <p className="font-display text-[44px] font-bold text-[hsl(var(--slide-gold))] leading-none mb-[8px]">{w.stat}</p>
            <p className="text-[16px] text-[hsl(var(--slide-text-muted))] leading-[1.4]">{w.l}</p>
          </div>
        ))}
      </div>
      <p className="text-[16px] uppercase tracking-[0.15em] text-[hsl(var(--slide-gold))] mb-[12px]">5 пунктов, о которых договариваешься с клиентом на kick-off</p>
      <div className="grid grid-cols-5 gap-[14px] max-w-[1700px]">
        {components.map((c) => (
          <div key={c.name} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[10px] px-[18px] py-[16px]">
            <p className="text-[20px] font-bold text-[hsl(var(--slide-gold))] mb-[6px]">{c.name}</p>
            <p className="text-[15px] text-[hsl(var(--slide-text-muted))] leading-[1.45]">{c.d}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
