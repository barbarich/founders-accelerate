import { useIsMobile } from "@/hooks/use-mobile";
import { ArrowRight } from "lucide-react";

export default function L0Slide04Goal() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[24px] py-[36px]">
        <p className="text-[10px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[12px]">
          Цель курса
        </p>
        <h2 className="font-display text-[26px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[24px] tracking-[-0.01em]">
          Превратить сырой прототип в работающий бизнес
        </h2>
        <div className="space-y-[12px]">
          <div className="border border-[hsl(var(--slide-text)/0.12)] rounded-md p-[16px]">
            <p className="text-[10px] uppercase tracking-[0.15em] text-[hsl(var(--slide-text-muted))] font-medium mb-[6px]">
              С чего начинаем
            </p>
            <p className="text-[14px] text-[hsl(var(--slide-text)/0.85)] leading-[1.4]">
              Сырой MVP. Идея, прототип, демка — то, что ещё никто не покупает.
            </p>
          </div>
          <div className="flex justify-center text-[hsl(var(--slide-gold))]">
            <ArrowRight size={20} className="rotate-90" />
          </div>
          <div className="border border-[hsl(var(--slide-gold)/0.3)] rounded-md p-[16px] bg-[hsl(var(--slide-gold)/0.05)]">
            <p className="text-[10px] uppercase tracking-[0.15em] text-[hsl(var(--slide-gold))] font-medium mb-[6px]">
              К чему приходим
            </p>
            <p className="text-[14px] text-[hsl(var(--slide-text))] leading-[1.4] font-medium">
              Настоящий бизнес с платящими пользователями и удержанием.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[24px]">
        Цель курса
      </p>
      <h2 className="font-display text-[62px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[56px] tracking-[-0.01em] max-w-[1500px]">
        Превратить сырой прототип в работающий бизнес
      </h2>
      <div className="flex items-stretch gap-[32px] max-w-[1700px]">
        <div className="flex-1 border border-[hsl(var(--slide-text)/0.12)] rounded-lg p-[36px]">
          <p className="text-[15px] uppercase tracking-[0.18em] text-[hsl(var(--slide-text-muted))] font-medium mb-[16px]">
            С чего начинаем
          </p>
          <p className="text-[26px] text-[hsl(var(--slide-text)/0.85)] leading-[1.4]">
            Сырой MVP. Идея, прототип, демка — то, что ещё никто не покупает.
          </p>
        </div>
        <div className="flex items-center text-[hsl(var(--slide-gold))]">
          <ArrowRight size={48} />
        </div>
        <div className="flex-1 border border-[hsl(var(--slide-gold)/0.3)] rounded-lg p-[36px] bg-[hsl(var(--slide-gold)/0.05)]">
          <p className="text-[15px] uppercase tracking-[0.18em] text-[hsl(var(--slide-gold))] font-medium mb-[16px]">
            К чему приходим
          </p>
          <p className="text-[26px] text-[hsl(var(--slide-text))] leading-[1.4] font-medium">
            Настоящий бизнес с платящими пользователями и удержанием.
          </p>
        </div>
      </div>
    </div>
  );
}
