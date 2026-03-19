import { useIsMobile } from "@/hooks/use-mobile";

export default function M2Slide06PositioningCheck() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[24px]">
        <p className="text-[10px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[4px]">Разбор домашки</p>
        <h2 className="font-display text-[24px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[10px]">
          Ваше позиционирование
        </h2>
        <p className="text-[12px] text-[hsl(var(--slide-text)/0.85)] leading-[1.6] mb-[14px]">
          Каждый зачитывает своё предложение. Группа отвечает на один вопрос:
        </p>
        <div className="bg-[hsl(var(--slide-gold)/0.08)] border border-[hsl(var(--slide-gold)/0.3)] rounded-[8px] px-[14px] py-[12px] mb-[14px]">
          <p className="text-[16px] text-[hsl(var(--slide-text))] font-semibold text-center leading-[1.4]">
            "Понятно ли за 5 секунд,<br />что это и для кого?"
          </p>
        </div>
        <div className="space-y-[6px]">
          <div className="flex items-center gap-[8px]">
            <span className="text-[14px]">✅</span>
            <p className="text-[11px] text-[hsl(var(--slide-text)/0.8)]">Если да — отлично, сегодня усилим</p>
          </div>
          <div className="flex items-center gap-[8px]">
            <span className="text-[14px]">🔧</span>
            <p className="text-[11px] text-[hsl(var(--slide-text)/0.8)]">Если нет — переделаем вместе</p>
          </div>
          <div className="flex items-center gap-[8px]">
            <span className="text-[14px]">🚫</span>
            <p className="text-[11px] text-[hsl(var(--slide-text)/0.8)]">Если не сделали — не страшно, сделаем сейчас</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[16px]">Разбор домашки</p>
      <h2 className="font-display text-[56px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[20px]">
        Ваше позиционирование
      </h2>
      <p className="text-[24px] text-[hsl(var(--slide-text)/0.85)] leading-[1.5] mb-[40px] max-w-[900px]">
        Каждый зачитывает своё предложение из домашки. Группа отвечает на один вопрос:
      </p>
      <div className="bg-[hsl(var(--slide-gold)/0.08)] border border-[hsl(var(--slide-gold)/0.3)] rounded-[16px] px-[48px] py-[32px] mb-[40px] max-w-[800px]">
        <p className="text-[32px] text-[hsl(var(--slide-text))] font-semibold text-center leading-[1.4]">
          "Понятно ли за 5 секунд, что это и для кого?"
        </p>
      </div>
      <div className="space-y-[16px] max-w-[800px]">
        <div className="flex items-center gap-[12px]">
          <span className="text-[24px]">✅</span>
          <p className="text-[22px] text-[hsl(var(--slide-text)/0.8)]">Если да — отлично, сегодня углубим и усилим</p>
        </div>
        <div className="flex items-center gap-[12px]">
          <span className="text-[24px]">🔧</span>
          <p className="text-[22px] text-[hsl(var(--slide-text)/0.8)]">Если нет — переделаем вместе прямо на встрече</p>
        </div>
        <div className="flex items-center gap-[12px]">
          <span className="text-[24px]">🚫</span>
          <p className="text-[22px] text-[hsl(var(--slide-text)/0.8)]">Если не сделали — не страшно, сделаем сейчас</p>
        </div>
      </div>
    </div>
  );
}
