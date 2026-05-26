import { useIsMobile } from "@/hooks/use-mobile";

export default function L0Slide07Truth5() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[24px] py-[40px] overflow-y-auto">
        <p className="text-[9px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[10px]">
          Правда 5 из 5
        </p>
        <h2 className="font-display text-[22px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[14px] tracking-[-0.01em]">
          «Я не маркетолог» = «Я не запускаю продукт»
        </h2>
        <p className="text-[12px] text-[hsl(var(--slide-text)/0.85)] leading-[1.6] mb-[10px]">
          Это самая частая фраза технарей. Звучит как смирение. <span className="text-[hsl(var(--slide-text))] font-medium">На деле — отказ от ответственности.</span>
        </p>
        <div className="bg-[hsl(var(--slide-gold)/0.1)] border-l-2 border-[hsl(var(--slide-gold))] px-[14px] py-[12px] mb-[14px]">
          <p className="text-[14px] font-bold text-[hsl(var(--slide-text))] leading-[1.3] mb-[6px]">
            В 2026 продукт = 30% работы.<br />Маркетинг = <span className="text-[hsl(var(--slide-gold))]">70%.</span>
          </p>
          <p className="text-[11px] text-[hsl(var(--slide-text-muted))] leading-[1.5]">
            Без маркетинга твой продукт — это файлы на ноутбуке. Никому.
          </p>
        </div>
        <p className="text-[12px] text-[hsl(var(--slide-text)/0.85)] leading-[1.6] mb-[14px]">
          Хороший продукт без маркетинга <span className="text-[hsl(var(--slide-text))] font-medium">мёртв</span>. Плохой продукт с маркетингом приносит первые $10K MRR. Это несправедливо. Но это так.
        </p>
        <div className="border-t border-[hsl(var(--slide-gold)/0.2)] pt-[12px]">
          <p className="text-[10px] uppercase tracking-[0.15em] text-[hsl(var(--slide-gold))] font-medium mb-[6px]">Что делать</p>
          <p className="text-[12px] text-[hsl(var(--slide-text))] leading-[1.5]">
            50% времени строй, 50% продавай. <span className="text-[hsl(var(--slide-gold))]">7 уроков</span> в этом курсе (10–16) — про запуск и продажи. Их нельзя пропустить.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[20px]">
        Правда 5 из 5
      </p>
      <h2 className="font-display text-[60px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[32px] tracking-[-0.01em] max-w-[1600px]">
        «Я не маркетолог» =<br />«Я не запускаю продукт»
      </h2>
      <div className="max-w-[1500px] space-y-[20px] mb-[28px]">
        <p className="text-[24px] text-[hsl(var(--slide-text)/0.85)] leading-[1.5]">
          Это самая частая фраза технарей. Звучит как смирение. <span className="text-[hsl(var(--slide-text))] font-semibold">На деле — отказ от ответственности.</span>
        </p>
      </div>
      <div className="bg-[hsl(var(--slide-gold)/0.1)] border-l-[4px] border-[hsl(var(--slide-gold))] px-[36px] py-[24px] max-w-[1500px] mb-[28px]">
        <p className="text-[34px] font-bold text-[hsl(var(--slide-text))] leading-[1.3] mb-[10px]">
          В 2026 продукт = 30% работы.<br />Маркетинг = <span className="text-[hsl(var(--slide-gold))]">70%.</span>
        </p>
        <p className="text-[22px] text-[hsl(var(--slide-text-muted))] leading-[1.5]">
          Без маркетинга твой продукт — это файлы на ноутбуке. Никому.
        </p>
      </div>
      <div className="max-w-[1500px] mb-[28px]">
        <p className="text-[22px] text-[hsl(var(--slide-text)/0.85)] leading-[1.5]">
          Хороший продукт без маркетинга <span className="text-[hsl(var(--slide-text))] font-semibold">мёртв</span>. Плохой продукт с маркетингом приносит первые $10K MRR. Это несправедливо. Но это так.
        </p>
      </div>
      <div className="border-t border-[hsl(var(--slide-gold)/0.2)] pt-[20px] max-w-[1500px]">
        <p className="text-[16px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[10px]">Что делать</p>
        <p className="text-[24px] text-[hsl(var(--slide-text))] leading-[1.5]">
          50% времени строй, 50% продавай. <span className="text-[hsl(var(--slide-gold))] font-semibold">7 уроков</span> в этом курсе (10–16) — про запуск и продажи. Их нельзя пропустить.
        </p>
      </div>
    </div>
  );
}
