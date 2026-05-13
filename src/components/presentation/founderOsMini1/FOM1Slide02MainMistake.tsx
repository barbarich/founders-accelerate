import { useIsMobile } from "@/hooks/use-mobile";
import FOM1Footer from "./FOM1Footer";

export default function FOM1Slide02MainMistake() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col relative">
        <div className="flex flex-col justify-center px-[24px] h-full">
          <p className="uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium text-[9px] mb-[10px]">
            Главный инсайт
          </p>
          <div className="bg-[hsl(var(--slide-gold)/0.1)] border-l-2 border-[hsl(var(--slide-gold))] px-[14px] py-[14px]">
            <p className="text-[15px] font-bold text-[hsl(var(--slide-text))] leading-[1.3]">
              Строят то, что никому не нужно. Не потому что продукт плохой — а потому что не проверили, кто за это заплатит.
            </p>
          </div>
          <p className="text-[11px] text-[hsl(var(--slide-text-muted))] mt-[12px] italic leading-[1.45]">
            Ваша задача за эти 6 встреч — перестать угадывать и начать проверять.
          </p>
        </div>
        <FOM1Footer slide={2} />
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col relative">
      <div className="flex flex-col justify-center px-[140px] h-full max-w-[1700px]">
        <p className="uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium text-[18px] mb-[20px]">
          Главный инсайт · 90% продуктов проваливаются по одной причине
        </p>
        <div className="bg-[hsl(var(--slide-gold)/0.1)] border-l-[4px] border-[hsl(var(--slide-gold))] px-[40px] py-[36px] max-w-[1500px]">
          <p className="text-[44px] font-bold text-[hsl(var(--slide-text))] leading-[1.2]">
            Строят то, что никому не нужно. Не потому что продукт плохой — а потому что не проверили, кто за это заплатит.
          </p>
        </div>
        <p className="text-[24px] text-[hsl(var(--slide-text-muted))] mt-[24px] italic">
          Ваша задача за эти 6 встреч — перестать угадывать и начать проверять.
        </p>
      </div>
      <FOM1Footer slide={2} />
    </div>
  );
}
