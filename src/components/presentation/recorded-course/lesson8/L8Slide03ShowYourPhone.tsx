import { useIsMobile } from "@/hooks/use-mobile";

export default function L8Slide03ShowYourPhone() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[24px]">
        <p className="text-[9px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[8px]">
          Разогрев
        </p>
        <h2 className="font-display text-[24px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[14px]">
          Открой телефон.<br />Покажи последнее приложение, которое поставил и удалил.
        </h2>
        <div className="space-y-[8px]">
          <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.2)] rounded-[8px] px-[14px] py-[10px]">
            <p className="text-[10px] font-bold text-[hsl(var(--slide-gold))] mb-[2px]">Каждый по 30 секунд</p>
            <p className="text-[11px] text-[hsl(var(--slide-text))] leading-[1.4]">
              Что за продукт. На каком экране стало непонятно. В какой момент закрыл.
            </p>
          </div>
        </div>
        <p className="text-[10.5px] text-[hsl(var(--slide-gold))] font-semibold mt-[14px] leading-[1.4]">
          У всех будет одна история. Сейчас разберёмся, что именно ломается.
        </p>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[20px]">
        Разогрев
      </p>
      <h2 className="font-display text-[64px] font-bold text-[hsl(var(--slide-text))] leading-[1.05] mb-[32px] max-w-[1500px]">
        Открой телефон. Покажи последнее приложение, которое поставил и удалил.
      </h2>
      <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.25)] rounded-[16px] px-[40px] py-[28px] max-w-[1400px] mb-[28px]">
        <p className="text-[20px] font-bold text-[hsl(var(--slide-gold))] mb-[10px] uppercase tracking-[0.1em]">
          Каждый по 30 секунд
        </p>
        <p className="text-[24px] text-[hsl(var(--slide-text))] leading-[1.5]">
          Что за продукт. На каком экране стало непонятно. В какой момент закрыл.
        </p>
      </div>
      <p className="text-[22px] text-[hsl(var(--slide-gold))] font-semibold max-w-[1400px] leading-[1.4]">
        У всех будет одна история. Сейчас разберёмся, что именно ломается.
      </p>
    </div>
  );
}
