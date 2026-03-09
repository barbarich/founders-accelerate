import { useIsMobile } from "@/hooks/use-mobile";

export default function Slide19QA() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex items-center justify-center">
        <div className="text-center">
          <div className="w-[48px] h-[48px] rounded-full border-2 border-[hsl(var(--slide-gold)/0.3)] flex items-center justify-center mx-auto mb-[20px]">
            <span className="text-[24px]">?</span>
          </div>
          <h2 className="text-[36px] font-bold text-[hsl(var(--slide-text))] leading-tight">
            Вопросы и ответы
          </h2>
          <div className="w-[30px] h-[2px] bg-[hsl(var(--slide-gold))] mx-auto mt-[20px]" />
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex items-center justify-center">
      <div className="text-center">
        <div className="w-[80px] h-[80px] rounded-full border-2 border-[hsl(var(--slide-gold)/0.3)] flex items-center justify-center mx-auto mb-[48px]">
          <span className="text-[40px]">?</span>
        </div>
        <h2 className="text-[80px] font-bold text-[hsl(var(--slide-text))] leading-tight">
          Вопросы и ответы
        </h2>
        <div className="w-[60px] h-[2px] bg-[hsl(var(--slide-gold))] mx-auto mt-[48px]" />
      </div>
    </div>
  );
}
