import { useIsMobile } from "@/hooks/use-mobile";

const planA = {
  label: "План A — есть кейс в группе",
  desc: "У кого-то уже есть продукт + первые юзеры",
  steps: [
    "Покажи продукт за 3 минуты: что это, для кого, ключевой экран",
    "Расскажи, как привёл первых 5–10 юзеров (канал, оффер, цена)",
    "Покажи данные: где смотрел, что увидел — drop-off, цитаты, цифры",
    "Группа разбирает экран и точку трения вместе с тобой",
  ],
};

const planB = {
  label: "План B — никто не готов показать",
  desc: "Это нормально. Воркшоп всё равно состоится",
  steps: [
    "Берём один реальный продукт ведущего как общий тренажёр",
    "Проходим по нему те же 4 шага: продукт → канал → данные → трение",
    "Каждый параллельно прикладывает рамку к своему продукту в заметках",
    "До среды каждый присылает паре свои цифры по этой же схеме",
  ],
};

function StepList({ steps }: { steps: string[] }) {
  return (
    <ol className="space-y-[8px]">
      {steps.map((s, i) => (
        <li key={i} className="flex gap-[10px] items-start">
          <span className="text-[hsl(var(--slide-gold))] font-mono text-[14px] leading-[1.4] shrink-0 w-[18px]">{i + 1}.</span>
          <span className="text-[hsl(var(--slide-text))] text-[15px] leading-[1.45]">{s}</span>
        </li>
      ))}
    </ol>
  );
}

function StepListDesktop({ steps }: { steps: string[] }) {
  return (
    <ol className="space-y-[14px]">
      {steps.map((s, i) => (
        <li key={i} className="flex gap-[18px] items-start">
          <span className="text-[hsl(var(--slide-gold))] font-mono text-[26px] leading-[1.3] shrink-0 w-[36px]">{i + 1}.</span>
          <span className="text-[hsl(var(--slide-text))] text-[24px] leading-[1.45]">{s}</span>
        </li>
      ))}
    </ol>
  );
}

export default function M7Slide03EntryRule() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[20px] py-[16px]">
        <p className="text-[9px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[6px]">Как пройдёт воркшоп</p>
        <h2 className="font-display text-[16px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[10px]">
          Разбираем один живой кейс. У всех на руках — рамка, которую можно сразу применить к своему продукту.
        </h2>
        <div className="space-y-[8px]">
          {[planA, planB].map((p, i) => (
            <div key={i} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.2)] rounded-[6px] px-[10px] py-[8px]">
              <p className="text-[9px] uppercase tracking-[0.15em] text-[hsl(var(--slide-gold))] mb-[2px]">{p.label}</p>
              <p className="text-[8px] text-[hsl(var(--slide-text-muted))] mb-[6px] italic">{p.desc}</p>
              <ol className="space-y-[3px]">
                {p.steps.map((s, j) => (
                  <li key={j} className="flex gap-[5px] items-start">
                    <span className="text-[hsl(var(--slide-gold))] font-mono text-[8px] leading-[1.4] shrink-0 w-[10px]">{j + 1}.</span>
                    <span className="text-[hsl(var(--slide-text))] text-[9px] leading-[1.4]">{s}</span>
                  </li>
                ))}
              </ol>
            </div>
          ))}
        </div>
        <p className="text-[9px] text-[hsl(var(--slide-gold))] font-semibold mt-[8px] leading-[1.4]">
          Кто готов показать свой продукт и данные? Если никто — берём план B, без пауз.
        </p>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[120px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[16px]">Как пройдёт воркшоп</p>
      <h2 className="font-display text-[48px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[36px] max-w-[1600px]">
        Разбираем один живой кейс. У всех на руках — рамка, которую можно сразу применить к своему продукту.
      </h2>
      <div className="grid grid-cols-2 gap-[24px] max-w-[1680px] mb-[28px]">
        {[planA, planB].map((p, i) => (
          <div key={i} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.25)] rounded-[14px] px-[32px] py-[26px]">
            <p className="text-[16px] uppercase tracking-[0.18em] text-[hsl(var(--slide-gold))] mb-[4px]">{p.label}</p>
            <p className="text-[18px] text-[hsl(var(--slide-text-muted))] italic mb-[18px]">{p.desc}</p>
            <StepListDesktop steps={p.steps} />
          </div>
        ))}
      </div>
      <p className="text-[22px] text-[hsl(var(--slide-gold))] font-semibold max-w-[1680px] leading-[1.4]">
        Кто готов показать свой продукт и данные? Если никто — берём план B, без пауз.
      </p>
    </div>
  );
}