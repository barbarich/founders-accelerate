import { useIsMobile } from "@/hooks/use-mobile";

export default function L2Slide31Closing() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex items-center justify-center">
        <div className="text-center px-[28px]">
          <p className="text-[32px] mb-[16px]">🚀</p>
          <h2 className="font-display text-[26px] font-bold text-[hsl(var(--slide-text))] leading-[1.2] mb-[12px]">
            Вы уже впереди 90% фаундеров
          </h2>
          <p className="text-[12px] text-[hsl(var(--slide-text-muted))] leading-[1.6] mb-[18px]">
            Большинство строят продукт, не поговорив ни с одним клиентом. Вы за неделю сделаете то, на что у других уходят месяцы.
          </p>
          <div className="bg-[hsl(var(--slide-gold)/0.08)] border border-[hsl(var(--slide-gold)/0.2)] rounded-[10px] px-[18px] py-[14px] mb-[16px]">
            <p className="text-[13px] text-[hsl(var(--slide-text))] font-semibold leading-[1.5]">
              Исследуйте конкурентов.<br />Поговорите с людьми.<br />Сформулируйте позиционирование.
            </p>
          </div>
          <p className="text-[13px] text-[hsl(var(--slide-gold))] font-medium">
            Переходи в Урок 3 после сдачи custdev+опросов 💪
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex items-center justify-center">
      <div className="text-center max-w-[1000px]">
        <p className="text-[64px] mb-[40px]">🚀</p>
        <h2 className="font-display text-[64px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[24px]">
          Вы уже впереди 90% фаундеров
        </h2>
        <p className="text-[26px] text-[hsl(var(--slide-text-muted))] leading-[1.6] mb-[48px]">
          Большинство строят продукт, не поговорив ни с одним клиентом.<br />
          Вы за одну неделю сделаете то, на что у других уходят месяцы.
        </p>
        <div className="bg-[hsl(var(--slide-gold)/0.08)] border border-[hsl(var(--slide-gold)/0.2)] rounded-[16px] px-[48px] py-[32px] mb-[48px] inline-block">
          <p className="text-[28px] text-[hsl(var(--slide-text))] font-semibold leading-[1.5]">
            Исследуйте конкурентов. Поговорите с людьми.<br />
            Сформулируйте позиционирование.
          </p>
        </div>
        <p className="text-[24px] text-[hsl(var(--slide-gold))] font-medium">
          Переходи в Урок 3 с результатами custdev 💪
        </p>
      </div>
    </div>
  );
}
