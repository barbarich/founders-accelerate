import { useIsMobile } from "@/hooks/use-mobile";

const partner = [
  "Доход с клиентов, которые у него уже есть - без новых продаж",
  "Его предложение становится полнее: клиент закрывает больше задач в одном месте",
  "Клиент дольше остаётся с ним - меньше поводов искать кого-то ещё",
  "Он выглядит тем, кто решил проблему клиента, а не просто продал услугу",
];

const you = [
  "Доступ к клиентам, которые уже кому-то доверяют",
  "Продажа идёт через того, кого слушают - цикл сделки короче",
  "Платишь только за результат, а не за показы и клики",
  "Один партнёр даёт поток клиентов, а не одну сделку",
];

export default function L16SlideWinWin() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[18px] py-[18px] overflow-y-auto">
        <p className="text-[9px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[6px]">
          Главное условие
        </p>
        <h2 className="font-display text-[17px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[4px]">
          Партнёрство держится на <span className="text-[hsl(var(--slide-gold))]">выгоде обоих</span>
        </h2>
        <p className="text-[9px] text-[hsl(var(--slide-text-muted))] leading-[1.4] mb-[8px]">
          Обе колонки должны быть заполнены. Если одна пустая - это не партнёрство, а просьба об одолжении.
        </p>
        <div className="space-y-[7px] mb-[8px]">
          <div className="border border-[hsl(var(--slide-gold)/0.25)] rounded-[5px] px-[9px] py-[7px] bg-[hsl(var(--slide-gold)/0.05)]">
            <p className="text-[9.5px] uppercase tracking-[0.1em] text-[hsl(var(--slide-gold))] font-bold mb-[3px]">Что получает партнёр</p>
            {partner.map((p) => (
              <p key={p} className="text-[9px] text-[hsl(var(--slide-text)/0.85)] leading-[1.4] pl-[9px] relative before:content-['·'] before:absolute before:left-0 before:text-[hsl(var(--slide-gold))] mb-[2px]">{p}</p>
            ))}
          </div>
          <div className="border border-[hsl(var(--slide-gold)/0.25)] rounded-[5px] px-[9px] py-[7px] bg-[hsl(var(--slide-gold)/0.05)]">
            <p className="text-[9.5px] uppercase tracking-[0.1em] text-[hsl(var(--slide-gold))] font-bold mb-[3px]">Что получаешь ты</p>
            {you.map((p) => (
              <p key={p} className="text-[9px] text-[hsl(var(--slide-text)/0.85)] leading-[1.4] pl-[9px] relative before:content-['·'] before:absolute before:left-0 before:text-[hsl(var(--slide-gold))] mb-[2px]">{p}</p>
            ))}
          </div>
        </div>
        <div className="bg-[hsl(var(--slide-gold)/0.1)] border-l-2 border-[hsl(var(--slide-gold))] px-[10px] py-[8px]">
          <p className="text-[9.5px] text-[hsl(var(--slide-text))] leading-[1.45]">
            Партнёр тянет с ответом - дело не в проценте. Вернись к первой колонке и объясни его выгоду конкретнее. Когда она очевидна обоим, условия - детали, о которых легко договориться.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[120px] py-[36px] overflow-y-auto">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[14px]">
        Главное условие
      </p>
      <h2 className="font-display text-[44px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[10px] tracking-[-0.01em]">
        Партнёрство держится на <span className="text-[hsl(var(--slide-gold))]">выгоде обоих</span>
      </h2>
      <p className="text-[19px] text-[hsl(var(--slide-text-muted))] leading-[1.4] mb-[24px] max-w-[1800px]">
        Обе колонки должны быть заполнены. Если одна пустая - это не партнёрство, а просьба об одолжении.
      </p>
      <div className="grid grid-cols-2 gap-[24px] max-w-[1900px] mb-[22px]">
        <div className="border border-[hsl(var(--slide-gold)/0.25)] rounded-[12px] px-[26px] py-[20px] bg-[hsl(var(--slide-gold)/0.05)]">
          <p className="text-[15px] uppercase tracking-[0.15em] text-[hsl(var(--slide-gold))] font-bold mb-[12px]">Что получает партнёр</p>
          <div className="space-y-[8px]">
            {partner.map((p) => (
              <p key={p} className="text-[16px] text-[hsl(var(--slide-text)/0.9)] leading-[1.45] pl-[16px] relative before:content-['·'] before:absolute before:left-0 before:text-[hsl(var(--slide-gold))]">{p}</p>
            ))}
          </div>
        </div>
        <div className="border border-[hsl(var(--slide-gold)/0.25)] rounded-[12px] px-[26px] py-[20px] bg-[hsl(var(--slide-gold)/0.05)]">
          <p className="text-[15px] uppercase tracking-[0.15em] text-[hsl(var(--slide-gold))] font-bold mb-[12px]">Что получаешь ты</p>
          <div className="space-y-[8px]">
            {you.map((p) => (
              <p key={p} className="text-[16px] text-[hsl(var(--slide-text)/0.9)] leading-[1.45] pl-[16px] relative before:content-['·'] before:absolute before:left-0 before:text-[hsl(var(--slide-gold))]">{p}</p>
            ))}
          </div>
        </div>
      </div>
      <div className="bg-[hsl(var(--slide-gold)/0.1)] border-l-[4px] border-[hsl(var(--slide-gold))] px-[26px] py-[16px] max-w-[1900px]">
        <p className="text-[18px] text-[hsl(var(--slide-text))] leading-[1.45]">
          Партнёр тянет с ответом - <span className="font-semibold">дело не в проценте</span>. Вернись к первой колонке и объясни его выгоду конкретнее. Когда она очевидна обоим, условия - детали, о которых легко договориться.
        </p>
      </div>
    </div>
  );
}
