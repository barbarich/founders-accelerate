import { useIsMobile } from "@/hooks/use-mobile";

const metrics = [
  { name: "CPM", body: "Стоимость 1000 показов. Высокий — плохой креатив или узкая аудитория. Норма B2C: $5–25." },
  { name: "CTR", body: "Кликабельность. < 1% — креатив не работает, меняй. > 2% — на верном пути." },
  { name: "CPA", body: "Цена за конверсию. Главная метрика. Сравниваешь с LTV. Если CPA > LTV — кампания убыточная." },
  { name: "Quality / Engagement / Conversion ranking", body: "Three rankings в колонке. Below Average — выключаешь креатив. Above — масштабируешь бюджет +20%." },
];

const playbook = [
  { tag: "ДНИ 1–3", t: "Не трогаешь", body: "Любая правка сбрасывает learning. Сидишь, наблюдаешь, фиксируешь baseline." },
  { tag: "ДНИ 4–7", t: "Готовишься", body: "Делаешь ещё 5 креативов для следующей итерации. Из winners понимаешь, какой угол сработал." },
  { tag: "ПОСЛЕ 7 ДНЕЙ", t: "Резать и доливать", body: "Креативы с Below Average — выключаешь. На winning ad set доливаешь бюджет на +20% в день, не больше." },
  { tag: "FREQUENCY > 3", t: "Обновлять", body: "Если за неделю одно лицо увидело креатив больше 3 раз — пора заливать новую партию ассетов. Иначе CPM растёт." },
];

export default function M10Slide11WorkshopAfterLaunch() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[18px]">
        <p className="text-[10px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[6px]">
          🔴 Воркшоп · Шаг 5 · After launch
        </p>
        <h2 className="font-display text-[19px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[6px]">
          Что смотреть в Reports — <span className="text-[hsl(var(--slide-gold))]">и когда что менять</span>
        </h2>
        <p className="text-[8.5px] font-bold text-[hsl(var(--slide-gold))] uppercase tracking-[0.1em] mb-[3px]">Метрики</p>
        <div className="grid grid-cols-2 gap-[3px] mb-[6px]">
          {metrics.map((m) => (
            <div key={m.name} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.25)] rounded-[5px] px-[7px] py-[3px]">
              <p className="text-[8px] font-bold text-[hsl(var(--slide-gold))]">{m.name}</p>
              <p className="text-[7px] text-[hsl(var(--slide-text)/0.88)] leading-[1.35]">{m.body}</p>
            </div>
          ))}
        </div>
        <p className="text-[8.5px] font-bold text-[hsl(var(--slide-gold))] uppercase tracking-[0.1em] mb-[3px]">Playbook</p>
        <div className="grid grid-cols-2 gap-[3px]">
          {playbook.map((p) => (
            <div key={p.tag} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.25)] rounded-[5px] px-[7px] py-[3px]">
              <p className="text-[6.5px] uppercase tracking-[0.1em] text-[hsl(var(--slide-gold))]">{p.tag}</p>
              <p className="text-[8px] font-bold text-[hsl(var(--slide-text))]">{p.t}</p>
              <p className="text-[7px] text-[hsl(var(--slide-text)/0.85)] leading-[1.35]">{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[14px]">
        🔴 Воркшоп · Шаг 5 · After launch · что смотреть и когда что менять
      </p>
      <h2 className="font-display text-[44px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[16px] tracking-[-0.02em]">
        Reports → Breakdown → <span className="text-[hsl(var(--slide-gold))]">правило трёх дней</span>
      </h2>
      <p className="text-[15px] font-bold text-[hsl(var(--slide-gold))] uppercase tracking-[0.18em] mb-[10px]">Метрики, которые добавляешь в колонки</p>
      <div className="grid grid-cols-4 gap-[14px] mb-[18px] max-w-[1700px]">
        {metrics.map((m) => (
          <div key={m.name} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.3)] rounded-[10px] px-[18px] py-[12px]">
            <p className="text-[16px] font-bold text-[hsl(var(--slide-gold))] mb-[4px]">{m.name}</p>
            <p className="text-[13.5px] text-[hsl(var(--slide-text)/0.88)] leading-[1.45]">{m.body}</p>
          </div>
        ))}
      </div>
      <p className="text-[15px] font-bold text-[hsl(var(--slide-gold))] uppercase tracking-[0.18em] mb-[10px]">Playbook оптимизации</p>
      <div className="grid grid-cols-4 gap-[14px] max-w-[1700px]">
        {playbook.map((p) => (
          <div key={p.tag} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.3)] rounded-[10px] px-[18px] py-[12px]">
            <p className="text-[11px] uppercase tracking-[0.14em] text-[hsl(var(--slide-gold))] mb-[4px]">{p.tag}</p>
            <p className="text-[17px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[4px]">{p.t}</p>
            <p className="text-[13.5px] text-[hsl(var(--slide-text)/0.88)] leading-[1.45]">{p.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
