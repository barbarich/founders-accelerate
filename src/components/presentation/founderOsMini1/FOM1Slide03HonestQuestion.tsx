import { useIsMobile } from "@/hooks/use-mobile";
import FOM1Footer from "./FOM1Footer";

export default function FOM1Slide03HonestQuestion() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col relative">
        <div className="flex flex-col justify-center px-[20px] h-full">
          <p className="uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium text-[9px] mb-[10px]">
            Вопрос на старт
          </p>
          <h2 className="font-display text-[20px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[12px]">
            За последние две недели кто-то из вас говорил о продукте с людьми вне круга друзей. Кто-то — пока молчал.
          </h2>
          <p className="text-[11px] text-[hsl(var(--slide-text)/0.9)] leading-[1.5] mb-[10px]">
            Но те, кто говорил, часто слышали лесть вместо правды — потому что вопросы были <span className="font-bold">не те.</span>
          </p>
          <p className="text-[10px] italic text-[hsl(var(--slide-gold))] leading-[1.45]">
            Сегодня разберём, как задать вопрос, на который невозможно солгать.
          </p>
        </div>
        <FOM1Footer slide={3} />
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col relative">
      <div className="flex flex-col justify-center px-[140px] h-full max-w-[1700px]">
        <p className="uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium text-[18px] mb-[20px]">
          Вопрос на старт
        </p>
        <h2 className="font-display text-[56px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[28px] tracking-[-0.01em] max-w-[1500px]">
          За последние две недели кто-то из вас говорил о продукте с людьми вне круга друзей. Кто-то — пока молчал.
        </h2>
        <p className="text-[26px] text-[hsl(var(--slide-text)/0.9)] leading-[1.5] mb-[24px] max-w-[1400px]">
          Но те, кто говорил, часто слышали лесть вместо правды — потому что вопросы были <span className="font-semibold text-[hsl(var(--slide-text))]">не те.</span>
        </p>
        <p className="text-[24px] italic text-[hsl(var(--slide-gold))] leading-[1.45] max-w-[1500px]">
          Сегодня разберём, как задать вопрос, на который невозможно солгать.
        </p>
      </div>
      <FOM1Footer slide={3} />
    </div>
  );
}
