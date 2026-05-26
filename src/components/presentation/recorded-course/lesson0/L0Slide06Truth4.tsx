import { useIsMobile } from "@/hooks/use-mobile";

export default function L0Slide06Truth4() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[24px] py-[40px] overflow-y-auto">
        <p className="text-[9px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[10px]">
          Правда 4 из 5
        </p>
        <h2 className="font-display text-[22px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[14px] tracking-[-0.01em]">
          Кофаундер в 2026 = ты в 2 раза медленнее, не быстрее
        </h2>
        <p className="text-[12px] text-[hsl(var(--slide-text)/0.85)] leading-[1.6] mb-[10px]">
          В 2020 кофаундер закрывал нехватку рук: ты технарь — нужен маркетолог. Ты маркетолог — нужен технарь.
        </p>
        <p className="text-[12px] text-[hsl(var(--slide-text)/0.85)] leading-[1.6] mb-[10px]">
          В 2026 <span className="text-[hsl(var(--slide-text))] font-medium">AI-стек закрывает эту нехватку на 80%</span>. Claude Code заменяет джуна-разраба. Lovable — фронтенд-команду. ChatGPT/Claude — копирайтера. HeyGen — видеографа.
        </p>
        <p className="text-[12px] text-[hsl(var(--slide-text)/0.85)] leading-[1.6] mb-[14px]">
          Кофаундер 2026 = коммуникация ×2, делёж equity, конфликты приоритетов. <span className="text-[hsl(var(--slide-text))] font-medium">Это замедление, не ускорение.</span>
        </p>
        <div className="bg-[hsl(var(--slide-gold)/0.08)] border-l-2 border-[hsl(var(--slide-gold)/0.5)] px-[14px] py-[12px] mb-[14px]">
          <p className="text-[11px] uppercase tracking-[0.15em] text-[hsl(var(--slide-gold))] font-medium mb-[6px]">Топ соло-фаундеры 2026</p>
          <p className="text-[12px] text-[hsl(var(--slide-text)/0.9)] leading-[1.5]">
            Pieter Levels — $200K/mo один.<br />Marc Lou — $50K/mo один.<br />Tibo — $40K/mo один.
          </p>
        </div>
        <div className="border-t border-[hsl(var(--slide-gold)/0.2)] pt-[12px]">
          <p className="text-[10px] uppercase tracking-[0.15em] text-[hsl(var(--slide-gold))] font-medium mb-[6px]">Что делать</p>
          <p className="text-[12px] text-[hsl(var(--slide-text))] leading-[1.5]">
            Бери AI-стек. Нанимай VA по факту, не заранее. Кофаундера ищи <span className="text-[hsl(var(--slide-gold))]">только когда есть PMF</span> и идёшь в enterprise.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[20px]">
        Правда 4 из 5
      </p>
      <h2 className="font-display text-[56px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[32px] tracking-[-0.01em] max-w-[1600px]">
        Кофаундер в 2026 = ты в 2 раза медленнее, не быстрее
      </h2>
      <div className="grid grid-cols-2 gap-[40px] max-w-[1700px] mb-[28px]">
        <div className="space-y-[16px]">
          <p className="text-[22px] text-[hsl(var(--slide-text)/0.85)] leading-[1.5]">
            В 2020 кофаундер закрывал нехватку рук: ты технарь — нужен маркетолог. Ты маркетолог — нужен технарь.
          </p>
          <p className="text-[22px] text-[hsl(var(--slide-text)/0.85)] leading-[1.5]">
            В 2026 <span className="text-[hsl(var(--slide-text))] font-semibold">AI-стек закрывает эту нехватку на 80%</span>. Claude Code заменяет джуна-разраба. Lovable — фронтенд-команду. ChatGPT/Claude — копирайтера. HeyGen — видеографа.
          </p>
          <p className="text-[22px] text-[hsl(var(--slide-text)/0.85)] leading-[1.5]">
            Кофаундер 2026 = коммуникация ×2, делёж equity, конфликты приоритетов. <span className="text-[hsl(var(--slide-text))] font-semibold">Это замедление.</span>
          </p>
        </div>
        <div className="bg-[hsl(var(--slide-gold)/0.08)] border-l-[4px] border-[hsl(var(--slide-gold)/0.5)] px-[28px] py-[24px]">
          <p className="text-[16px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[18px]">Топ соло-фаундеры 2026</p>
          <p className="text-[24px] text-[hsl(var(--slide-text))] leading-[1.7]">
            <span className="font-semibold">Pieter Levels</span> — <span className="text-[hsl(var(--slide-gold))] font-bold">$200K/mo</span> один<br />
            <span className="font-semibold">Marc Lou</span> — <span className="text-[hsl(var(--slide-gold))] font-bold">$50K/mo</span> один<br />
            <span className="font-semibold">Tibo</span> — <span className="text-[hsl(var(--slide-gold))] font-bold">$40K/mo</span> один
          </p>
        </div>
      </div>
      <div className="border-t border-[hsl(var(--slide-gold)/0.2)] pt-[20px] max-w-[1700px]">
        <p className="text-[16px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[10px]">Что делать</p>
        <p className="text-[24px] text-[hsl(var(--slide-text))] leading-[1.5]">
          Бери AI-стек. Нанимай VA по факту, не заранее. Кофаундера ищи <span className="text-[hsl(var(--slide-gold))] font-semibold">только когда есть PMF</span> и идёшь в enterprise.
        </p>
      </div>
    </div>
  );
}
