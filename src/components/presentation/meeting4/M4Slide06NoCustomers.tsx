import { useIsMobile } from "@/hooks/use-mobile";

export default function M4Slide06NoCustomers() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[28px]">
        <p className="text-[10px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[8px]">
          Миф #1
        </p>
        <h2 className="font-display text-[24px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[16px]">
          «Сделай хороший продукт —<br />клиенты придут сами»
        </h2>
        <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[8px] px-[14px] py-[10px] mb-[14px]">
          <p className="text-[28px] font-bold text-[hsl(var(--slide-gold))] mb-[4px]">90%</p>
          <p className="text-[10px] text-[hsl(var(--slide-text-muted))] leading-[1.4]">
            стартапов умирают не от плохого продукта, а от отсутствия дистрибуции
          </p>
        </div>
        <div className="space-y-[8px]">
          <div className="flex items-center gap-[8px]">
            <span className="text-[14px]">❌</span>
            <p className="text-[11px] text-[hsl(var(--slide-text-muted))]">Хороший продукт + никто не знает = 0 клиентов</p>
          </div>
          <div className="flex items-center gap-[8px]">
            <span className="text-[14px]">✅</span>
            <p className="text-[11px] text-[hsl(var(--slide-text))] font-semibold">Средний продукт + дистрибуция = первые деньги</p>
          </div>
        </div>
        <div className="mt-[16px] border-t border-[hsl(var(--slide-gold)/0.2)] pt-[12px]">
          <p className="text-[12px] text-[hsl(var(--slide-gold))] font-semibold">
            Дистрибуция &gt; Продукт
          </p>
          <p className="text-[9px] text-[hsl(var(--slide-text-muted))] mt-[4px]">
            Сначала научись доносить ценность, потом улучшай продукт
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[16px]">
        Миф #1
      </p>
      <h2 className="font-display text-[56px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[48px]">
        «Сделай хороший продукт —<br />клиенты придут сами»
      </h2>

      <div className="flex gap-[48px] max-w-[1200px] mb-[48px]">
        <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[16px] px-[40px] py-[32px] flex-1">
          <p className="text-[72px] font-bold text-[hsl(var(--slide-gold))] leading-none mb-[16px]">90%</p>
          <p className="text-[20px] text-[hsl(var(--slide-text-muted))] leading-[1.5]">
            стартапов умирают не от плохого продукта,<br />а от отсутствия дистрибуции
          </p>
        </div>
        <div className="flex-1 flex flex-col justify-center space-y-[24px]">
          <div className="flex items-center gap-[16px]">
            <span className="text-[32px]">❌</span>
            <p className="text-[22px] text-[hsl(var(--slide-text-muted))]">Хороший продукт + никто не знает = 0 клиентов</p>
          </div>
          <div className="flex items-center gap-[16px]">
            <span className="text-[32px]">✅</span>
            <p className="text-[22px] text-[hsl(var(--slide-text))] font-semibold">Средний продукт + дистрибуция = первые деньги</p>
          </div>
        </div>
      </div>

      <div className="border-t border-[hsl(var(--slide-gold)/0.2)] pt-[32px] max-w-[1200px]">
        <p className="text-[32px] text-[hsl(var(--slide-gold))] font-bold">
          Дистрибуция &gt; Продукт
        </p>
        <p className="text-[20px] text-[hsl(var(--slide-text-muted))] mt-[8px]">
          Сначала научись доносить ценность, потом улучшай продукт
        </p>
      </div>
    </div>
  );
}
