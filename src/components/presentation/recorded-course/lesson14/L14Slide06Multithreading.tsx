import { useIsMobile } from "@/hooks/use-mobile";

const roles = [
  { name: "Champion", who: "Твой пользователь. Тот, кому продукт реально нужен.", do: "Подружись. Дай ему стать героем внутри своей компании. Снабжай материалом для внутренней продажи." },
  { name: "Decision Maker", who: "Его руководитель. VP / Head. Подписывает на технических merits.", do: "Подключай на demo. Покажи business impact, не фичи. Champion должен сам тебя ему представить." },
  { name: "Economic Buyer", who: "C-level (CFO/CRO/CEO). Подписывает контракт. Думает в $.", do: "Подключаешь к concluding call. Готовь ROI-расчёт. 1 фраза почему это окупится за N месяцев." },
  { name: "Blocker", who: "Procurement / Legal / Security. Не покупают — но могут убить сделку.", do: "Узнай о них на discovery. Подготовь pack заранее: SOC2, GDPR, sample MSA. Не дай им стать сюрпризом в неделю 4." },
];

const stats = [
  { n: "3+", l: "среднее число людей, влияющих на решение, в B2B-сделке 2026 (Gartner)" },
  { n: "2.4×", l: "выше шанс закрыть сделку, если на первом созвоне подключишь 4+ человека" },
  { n: "47%", l: "сделок умирают из-за одного человека, который внезапно появляется в конце и говорит «нет»" },
];

export default function L14Slide06Multithreading() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[20px]">
        <p className="text-[11px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[6px]">
          Multithreading с первого дня
        </p>
        <h2 className="font-display text-[20px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[8px]">
          1 контакт = <span className="text-[hsl(var(--slide-gold))]">мёртвая сделка</span>
        </h2>
        <div className="grid grid-cols-3 gap-[6px] mb-[8px]">
          {stats.map((s) => (
            <div key={s.n} className="bg-[hsl(var(--slide-gold)/0.1)] rounded-[6px] px-[8px] py-[5px]">
              <p className="text-[14px] font-bold text-[hsl(var(--slide-gold))] leading-none">{s.n}</p>
              <p className="text-[9px] text-[hsl(var(--slide-text-muted))] leading-[1.35]">{s.l}</p>
            </div>
          ))}
        </div>
        <div className="space-y-[5px]">
          {roles.map((r) => (
            <div key={r.name} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[6px] px-[10px] py-[6px]">
              <p className="text-[11px] font-bold text-[hsl(var(--slide-gold))]">{r.name}</p>
              <p className="text-[9.5px] text-[hsl(var(--slide-text))] leading-[1.45]"><span className="italic">{r.who}</span></p>
              <p className="text-[9px] text-[hsl(var(--slide-text-muted))] leading-[1.4]">→ {r.do}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[14px]">
        Multithreading с первого дня
      </p>
      <h2 className="font-display text-[52px] font-bold text-[hsl(var(--slide-text))] leading-[1.05] mb-[14px] tracking-[-0.02em]">
        1 контакт в B2B = <span className="text-[hsl(var(--slide-gold))]">мёртвая сделка</span>
      </h2>
      <div className="grid grid-cols-3 gap-[16px] mb-[20px] max-w-[1700px]">
        {stats.map((s) => (
          <div key={s.n} className="bg-[hsl(var(--slide-gold)/0.1)] border-l-[4px] border-[hsl(var(--slide-gold))] rounded-[8px] px-[20px] py-[12px]">
            <p className="font-display text-[44px] font-bold text-[hsl(var(--slide-gold))] leading-none mb-[6px]">{s.n}</p>
            <p className="text-[14px] text-[hsl(var(--slide-text-muted))] leading-[1.4]">{s.l}</p>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-4 gap-[16px] max-w-[1700px]">
        {roles.map((r) => (
          <div key={r.name} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[10px] px-[20px] py-[14px]">
            <p className="text-[18px] font-bold text-[hsl(var(--slide-gold))] mb-[5px]">{r.name}</p>
            <p className="text-[14px] text-[hsl(var(--slide-text))] italic leading-[1.4] mb-[6px]">{r.who}</p>
            <p className="text-[14px] text-[hsl(var(--slide-text-muted))] leading-[1.45]">→ {r.do}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
