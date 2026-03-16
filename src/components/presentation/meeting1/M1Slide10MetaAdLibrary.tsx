import { useIsMobile } from "@/hooks/use-mobile";

export default function M1Slide10MetaAdLibrary() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[28px]">
        <p className="text-[10px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[6px]">Инструмент 3</p>
        <h2 className="font-display text-[28px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[6px]">Meta Ad Library</h2>
        <p className="text-[12px] text-[hsl(var(--slide-text-muted))] mb-[16px]">Какую рекламу крутят конкуренты</p>
        <div className="space-y-[8px] mb-[12px]">
          <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.4)] rounded-[8px] p-[14px]">
            <h3 className="text-[12px] font-semibold text-[hsl(var(--slide-text))] mb-[6px]">Что это</h3>
            <p className="text-[11px] text-[hsl(var(--slide-text-muted))] leading-[1.6]">facebook.com/ads/library — все рекламные объявления любой компании. Бесплатно.</p>
          </div>
          <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.4)] rounded-[8px] p-[14px]">
            <h3 className="text-[12px] font-semibold text-[hsl(var(--slide-text))] mb-[6px]">Что смотреть</h3>
            <p className="text-[11px] text-[hsl(var(--slide-text-muted))] leading-[1.6]">Креативы, тексты, как давно крутят (если долго — работает).</p>
          </div>
        </div>
        <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.4)] rounded-[8px] p-[14px]">
          <p className="text-[11px] text-[hsl(var(--slide-text)/0.85)] leading-[1.6] italic">
            "Реклама конкурента крутится 3 месяца. Видите как формулируют боль? Значит она реальна."
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[16px]">Инструмент 3</p>
      <h2 className="font-display text-[60px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[16px]">Meta Ad Library</h2>
      <p className="text-[28px] text-[hsl(var(--slide-text-muted))] mb-[48px]">Какую рекламу крутят конкуренты</p>
      <div className="grid grid-cols-2 gap-[32px] mb-[40px]">
        <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.4)] rounded-[12px] p-[36px]">
          <h3 className="text-[22px] font-semibold text-[hsl(var(--slide-text))] mb-[16px]">Что это</h3>
          <p className="text-[20px] text-[hsl(var(--slide-text-muted))] leading-[1.6]">facebook.com/ads/library — все рекламные объявления любой компании. Бесплатно.</p>
        </div>
        <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.4)] rounded-[12px] p-[36px]">
          <h3 className="text-[22px] font-semibold text-[hsl(var(--slide-text))] mb-[16px]">Что смотреть</h3>
          <p className="text-[20px] text-[hsl(var(--slide-text-muted))] leading-[1.6]">Какие креативы, какие тексты, как давно крутят (если долго — значит работает).</p>
        </div>
      </div>
      <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.4)] rounded-[12px] p-[36px]">
        <p className="text-[20px] text-[hsl(var(--slide-text)/0.85)] leading-[1.6] italic">
          "Вот реклама конкурента — крутится 3 месяца. Видите как формулируют боль? Значит эта боль реальна и люди на неё реагируют."
        </p>
      </div>
    </div>
  );
}
