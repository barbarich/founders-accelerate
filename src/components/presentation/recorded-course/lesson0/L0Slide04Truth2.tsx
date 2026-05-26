import { useIsMobile } from "@/hooks/use-mobile";

export default function L0Slide04Truth2() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[24px] py-[40px] overflow-y-auto">
        <p className="text-[9px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[10px]">
          Правда 2 из 5
        </p>
        <h2 className="font-display text-[22px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[14px] tracking-[-0.01em]">
          «Я строю в public» без аудитории = монолог в пустоту
        </h2>
        <p className="text-[12px] text-[hsl(var(--slide-text)/0.85)] leading-[1.6] mb-[12px]">
          Build in public работает у тех, у кого <span className="text-[hsl(var(--slide-text))] font-medium">уже есть 500+ followers</span>. Pieter Levels (175K), Marc Lou (50K), Tibo (30K) — все они начали публиковать кейсы УЖЕ имея аудиторию.
        </p>
        <div className="bg-[hsl(var(--slide-gold)/0.08)] border-l-2 border-[hsl(var(--slide-gold)/0.5)] px-[14px] py-[12px] mb-[14px]">
          <p className="text-[12px] text-[hsl(var(--slide-text)/0.9)] leading-[1.5]">
            Если у тебя <span className="text-[hsl(var(--slide-gold))] font-bold">{`<100 followers`}</span> — твои посты читают мама и двое друзей. Это личный дневник, не маркетинг.
          </p>
        </div>
        <div className="border-t border-[hsl(var(--slide-gold)/0.2)] pt-[12px]">
          <p className="text-[10px] uppercase tracking-[0.15em] text-[hsl(var(--slide-gold))] font-medium mb-[6px]">Что делать</p>
          <p className="text-[12px] text-[hsl(var(--slide-text))] leading-[1.5]">
            Первые 10 клиентов придут через <span className="text-[hsl(var(--slide-gold))]">cold outreach</span>, а не через посты. Урок 5.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[20px]">
        Правда 2 из 5
      </p>
      <h2 className="font-display text-[60px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[36px] tracking-[-0.01em] max-w-[1600px]">
        «Я строю в public» без аудитории =<br />монолог в пустоту
      </h2>
      <div className="max-w-[1500px] space-y-[24px] mb-[32px]">
        <p className="text-[26px] text-[hsl(var(--slide-text)/0.85)] leading-[1.5]">
          Build in public работает у тех, у кого <span className="text-[hsl(var(--slide-text))] font-semibold">уже есть 500+ followers</span>.
        </p>
        <p className="text-[22px] text-[hsl(var(--slide-text-muted))] leading-[1.5]">
          Pieter Levels (175K), Marc Lou (50K), Tibo (30K) — все они начали публиковать кейсы УЖЕ имея аудиторию.
        </p>
      </div>
      <div className="bg-[hsl(var(--slide-gold)/0.08)] border-l-[4px] border-[hsl(var(--slide-gold)/0.5)] px-[36px] py-[24px] max-w-[1500px] mb-[32px]">
        <p className="text-[26px] text-[hsl(var(--slide-text)/0.9)] leading-[1.5]">
          Если у тебя <span className="text-[hsl(var(--slide-gold))] font-bold">{`< 100 followers`}</span> — твои посты читают мама и двое друзей.<br />
          Это личный дневник, не маркетинг.
        </p>
      </div>
      <div className="border-t border-[hsl(var(--slide-gold)/0.2)] pt-[20px] max-w-[1500px]">
        <p className="text-[16px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[10px]">Что делать</p>
        <p className="text-[26px] text-[hsl(var(--slide-text))] leading-[1.5]">
          Первые 10 клиентов придут через <span className="text-[hsl(var(--slide-gold))] font-semibold">cold outreach</span>, а не через посты. Урок 5.
        </p>
      </div>
    </div>
  );
}
