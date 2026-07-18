import { useIsMobile } from "@/hooks/use-mobile";

export default function L11Slide02MainThesis() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[24px]">
        <p className="text-[9px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[10px]">
          Главная мысль
        </p>
        <h2 className="font-display text-[22px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[14px] tracking-[-0.01em]">
          Продукт не продаётся всем. Сначала выбери <span className="text-[hsl(var(--slide-gold))]">кого</span> и найди, <span className="text-[hsl(var(--slide-gold))]">где</span> они уже собраны.
        </h2>
        <p className="text-[12px] text-[hsl(var(--slide-text)/0.85)] leading-[1.55] mb-[12px]">
          Пока не знаешь свою аудиторию и её место, упаковка и реклама бьют в пустоту - и сжигают деньги. Go-to-market идёт ДО упаковки.
        </p>
        <div className="bg-[hsl(var(--slide-gold)/0.1)] border-l-2 border-[hsl(var(--slide-gold))] px-[14px] py-[12px]">
          <p className="text-[12px] font-bold text-[hsl(var(--slide-text))] leading-[1.4]">
            GTM = кому продаёшь + где их брать + как выйти. Руками и без бюджета, пока не докажешь, что берут.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[24px]">
        Главная мысль
      </p>
      <h2 className="font-display text-[56px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[28px] max-w-[1600px] tracking-[-0.01em]">
        Продукт не продаётся всем. Сначала выбери <span className="text-[hsl(var(--slide-gold))]">кого</span> и найди, <span className="text-[hsl(var(--slide-gold))]">где</span> они уже собраны.
      </h2>
      <p className="text-[24px] text-[hsl(var(--slide-text)/0.85)] leading-[1.5] max-w-[1600px] mb-[28px]">
        Пока не знаешь свою аудиторию и её место, упаковка и реклама бьют в пустоту - и сжигают деньги. Go-to-market идёт ДО упаковки и запуска.
      </p>
      <div className="bg-[hsl(var(--slide-gold)/0.1)] border-l-[4px] border-[hsl(var(--slide-gold))] px-[36px] py-[24px] max-w-[1600px]">
        <p className="text-[26px] font-bold text-[hsl(var(--slide-text))] leading-[1.35]">
          GTM = кому продаёшь + где их брать + как выйти. Руками и без бюджета, пока не докажешь, что берут.
        </p>
      </div>
    </div>
  );
}
