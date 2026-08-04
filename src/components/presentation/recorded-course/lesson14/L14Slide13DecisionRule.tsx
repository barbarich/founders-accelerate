import { useIsMobile } from "@/hooks/use-mobile";

const verdicts = [
  {
    icon: "🟢",
    rule: "LTV:CAC ≥ 3 и payback ≤ 6 мес",
    action: "Масштабируй",
    detail: "Доливай бюджет по +20% раз в 3-4 дня на winning ad set (правило из урока 12), в аутриче - расширяй список и нанимай помощь.",
    color: "emerald",
  },
  {
    icon: "🟡",
    rule: "LTV:CAC 1-3 или payback 6-18 мес",
    action: "Не масштабируй - чини",
    detail: "По очереди: креатив и таргетинг → конверсия лендинга и чекаута → цена. Одно изменение за раз, иначе не поймёшь, что сработало.",
    color: "yellow",
  },
  {
    icon: "🔴",
    rule: "LTV:CAC < 1",
    action: "Останови канал",
    detail: "Каждый новый клиент из этого канала увеличивает убыток. Выключить - не поражение, а освобождение бюджета для зелёного канала.",
    color: "red",
  },
];

export default function L14Slide13DecisionRule() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[18px] py-[16px] overflow-y-auto">
        <p className="text-[10px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[5px]">Правило решения</p>
        <h2 className="font-display text-[20px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[8px]">
          Светофор по каналу: <span className="text-[hsl(var(--slide-gold))]">масштабируй · чини · останови</span>
        </h2>
        <div className="space-y-[6px] mb-[8px]">
          {verdicts.map((v, i) => (
            <div key={i} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.25)] rounded-[7px] px-[10px] py-[7px]">
              <p className="text-[10px] font-bold text-[hsl(var(--slide-text))] mb-[2px]">{v.icon} {v.rule}</p>
              <p className="text-[10px] font-bold text-[hsl(var(--slide-gold))] mb-[2px]">{v.action}</p>
              <p className="text-[8.5px] text-[hsl(var(--slide-text-muted))] leading-[1.45]">{v.detail}</p>
            </div>
          ))}
        </div>
        <p className="text-[10px] text-[hsl(var(--slide-gold))] font-semibold leading-[1.45]">
          Ритуал: раз в 2 недели пересчитываешь таблицу каналов и принимаешь одно решение. По цифрам, не по ощущениям.
        </p>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px] py-[36px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[12px]">Правило решения</p>
      <h2 className="font-display text-[48px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[24px] tracking-[-0.02em]">
        Светофор по каналу: <span className="text-[hsl(var(--slide-gold))]">масштабируй · чини · останови</span>
      </h2>
      <div className="space-y-[14px] mb-[22px] max-w-[1700px]">
        {verdicts.map((v, i) => (
          <div key={i} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.3)] rounded-[12px] px-[26px] py-[16px] flex items-baseline gap-[26px]">
            <p className="text-[20px] font-bold text-[hsl(var(--slide-text))] w-[430px] shrink-0 leading-[1.3]">{v.icon} {v.rule}</p>
            <div className="flex-1">
              <p className="text-[21px] font-bold text-[hsl(var(--slide-gold))] mb-[4px]">{v.action}</p>
              <p className="text-[17px] text-[hsl(var(--slide-text-muted))] leading-[1.45]">{v.detail}</p>
            </div>
          </div>
        ))}
      </div>
      <p className="text-[21px] text-[hsl(var(--slide-gold))] font-semibold leading-[1.45] max-w-[1650px]">
        Ритуал: раз в 2 недели пересчитываешь таблицу каналов и принимаешь одно решение. По цифрам, не по ощущениям.
      </p>
    </div>
  );
}
