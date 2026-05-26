import { useIsMobile } from "@/hooks/use-mobile";

export default function L3Slide26Closing() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex items-center justify-center">
        <div className="text-center px-[28px]">
          <p className="text-[32px] mb-[16px]">🎯</p>
          <h2 className="font-display text-[26px] font-bold text-[hsl(var(--slide-text))] leading-[1.2] mb-[12px]">
            Теперь вы знаете за что заплатят
          </h2>
          <p className="text-[12px] text-[hsl(var(--slide-text-muted))] leading-[1.6] mb-[18px]">
            Не за фичи. Не за технологию. За результат. У вас есть позиционирование, цена и план MVP — и всё привязано к одному результату клиента.
          </p>
          <div className="bg-[hsl(var(--slide-gold)/0.08)] border border-[hsl(var(--slide-gold)/0.2)] rounded-[10px] px-[18px] py-[14px] mb-[16px]">
            <p className="text-[13px] text-[hsl(var(--slide-text))] font-semibold leading-[1.6]">
              На следующей встрече:<br />Доработка продукта и создание лендинга.
            </p>
          </div>
          <p className="text-[13px] text-[hsl(var(--slide-gold))] font-medium">
            Увидимся через неделю с результатами 💪
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex items-center justify-center">
      <div className="text-center max-w-[1000px]">
        <p className="text-[64px] mb-[40px]">🎯</p>
        <h2 className="font-display text-[64px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[24px]">
          Теперь вы знаете за что заплатят
        </h2>
        <p className="text-[26px] text-[hsl(var(--slide-text-muted))] leading-[1.6] mb-[48px]">
          Не за фичи. Не за технологию. За результат.<br />
          У вас есть позиционирование, цена и план MVP — и всё привязано к одному результату клиента.
        </p>
        <div className="bg-[hsl(var(--slide-gold)/0.08)] border border-[hsl(var(--slide-gold)/0.2)] rounded-[16px] px-[48px] py-[32px] mb-[48px] inline-block">
          <p className="text-[28px] text-[hsl(var(--slide-text))] font-semibold leading-[1.6]">
            На следующей встрече: доработка продукта и создание лендинга.
          </p>
        </div>
        <p className="text-[24px] text-[hsl(var(--slide-gold))] font-medium">
          Увидимся через неделю с результатами 💪
        </p>
      </div>
    </div>
  );
}
