import { useIsMobile } from "@/hooks/use-mobile";
import titleBg from "@/assets/slides/title-bg.jpg";

export default function L6Slide22Closing() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={titleBg} alt="" className="w-full h-full object-cover opacity-[0.06]" />
          <div className="absolute inset-0 bg-gradient-to-b from-[hsl(var(--slide-bg))] via-[hsl(var(--slide-bg)/0.85)] to-transparent" />
        </div>
        <div className="relative z-10 flex flex-col justify-center px-[24px] h-full">
          <div className="w-[30px] h-[2px] bg-[hsl(var(--slide-gold))] mb-[16px]" />
          <p className="text-[10px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[10px]">
            Урок 6 · завершение
          </p>
          <h2 className="font-display text-[20px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[10px]">
            Теперь Claude работает как <span className="text-[hsl(var(--slide-gold))]">сеньор-инженер.</span>
          </h2>
          <p className="text-[11px] text-[hsl(var(--slide-text)/0.9)] leading-[1.5] mb-[10px]">
            Production CLAUDE.md, MCP, Plan Mode, second-model review, sub-agents, worktrees — это твой production stack. Дальше — как сделать так, чтобы продукт цеплял с первой минуты.
          </p>
          <div className="bg-[hsl(var(--slide-gold)/0.1)] border-l-2 border-[hsl(var(--slide-gold))] rounded-[6px] px-[12px] py-[10px] mb-[10px]">
            <p className="text-[10px] italic font-semibold text-[hsl(var(--slide-gold))] leading-[1.4]">
              Код больше не узкое место. Узкое место — твоё видение продукта.
            </p>
          </div>
          <div className="border-t border-[hsl(var(--slide-border)/0.4)] pt-[8px]">
            <p className="text-[9px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[4px]">
              Дальше · Урок 7
            </p>
            <p className="text-[11px] font-semibold text-[hsl(var(--slide-text))] leading-[1.4]">
              Aha-moment. Как продукт цепляет за первые 60 секунд. 5 готовых workflow под разные типы продуктов.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex relative overflow-hidden">
      <div className="absolute inset-0">
        <img src={titleBg} alt="" className="w-full h-full object-cover opacity-[0.06]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[hsl(var(--slide-bg))] via-[hsl(var(--slide-bg)/0.85)] to-transparent" />
      </div>
      <div className="relative z-10 flex flex-col justify-center px-[140px] max-w-[1700px] h-full">
        <div className="w-[80px] h-[2px] bg-[hsl(var(--slide-gold))] mb-[36px]" />
        <p className="text-[20px] uppercase tracking-[0.25em] text-[hsl(var(--slide-gold))] font-medium mb-[24px]">
          Урок 6 · завершение
        </p>
        <h2 className="font-display text-[60px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[24px] tracking-[-0.01em]">
          Теперь Claude работает<br />
          как <span className="text-[hsl(var(--slide-gold))]">сеньор-инженер.</span>
        </h2>
        <p className="text-[24px] text-[hsl(var(--slide-text)/0.9)] leading-[1.5] max-w-[1500px] mb-[28px]">
          Production CLAUDE.md, MCP под капотом, Plan Mode, second-model review, sub-agents, worktrees, observability — это твой production stack. Код больше не узкое место.
        </p>
        <div className="bg-[hsl(var(--slide-gold)/0.08)] border-l-[4px] border-[hsl(var(--slide-gold))] rounded-[14px] px-[36px] py-[22px] max-w-[1500px] mb-[28px]">
          <p className="text-[28px] italic font-semibold text-[hsl(var(--slide-gold))] leading-[1.35]">
            Узкое место — твоё видение продукта и понимание клиента.
          </p>
        </div>
        <div className="border-t border-[hsl(var(--slide-border)/0.4)] pt-[18px] max-w-[1500px]">
          <p className="text-[16px] uppercase tracking-[0.22em] text-[hsl(var(--slide-gold))] font-medium mb-[8px]">
            Дальше · Урок 7
          </p>
          <p className="text-[24px] font-semibold text-[hsl(var(--slide-text))] leading-[1.4]">
            Aha-moment. Как продукт цепляет за первые 60 секунд. 5 готовых workflow под разные типы продуктов.
          </p>
        </div>
      </div>
    </div>
  );
}
