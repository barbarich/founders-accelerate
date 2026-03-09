import demoImg from "@/assets/slides/demo.jpg";
import { useIsMobile } from "@/hooks/use-mobile";

export default function Slide17Demo() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex items-center justify-center relative">
        <img src={demoImg} alt="" className="absolute inset-0 w-full h-full object-cover opacity-[0.06]" />
        <div className="absolute inset-0 bg-[hsl(var(--slide-bg)/0.85)]" />
        <div className="relative z-10 text-center px-[28px]">
          <div className="w-[30px] h-[2px] bg-[hsl(var(--slide-gold))] mx-auto mb-[20px]" />
          <h2 className="text-[32px] font-bold text-[hsl(var(--slide-text))] leading-[1] mb-[24px]">Мини-демо</h2>
          <div className="space-y-[10px] mb-[20px]">
            <div className="border border-[hsl(var(--slide-text)/0.15)] rounded-[8px] p-[16px]">
              <div className="text-[9px] uppercase tracking-[0.15em] text-[hsl(var(--slide-text)/0.4)] mb-[6px]">Провал</div>
              <div className="text-[16px] font-bold text-[hsl(var(--slide-text))] mb-[4px]">Interview Ninja</div>
              <p className="text-[11px] text-[hsl(var(--slide-text)/0.6)] leading-[1.5]">Почему продукт не взлетел и какие ошибки я допустил</p>
            </div>
            <div className="border border-[hsl(var(--slide-gold)/0.4)] rounded-[8px] p-[16px] bg-[hsl(var(--slide-gold)/0.05)]">
              <div className="text-[9px] uppercase tracking-[0.15em] text-[hsl(var(--slide-gold))] mb-[6px]">Успех</div>
              <div className="text-[16px] font-bold text-[hsl(var(--slide-text))] mb-[4px]">RunEverywhere</div>
              <p className="text-[11px] text-[hsl(var(--slide-text)/0.6)] leading-[1.5]">От идеи до MVP за 3 месяца, стали прибыльными с первой рекламной кампании</p>
            </div>
          </div>
          <p className="text-[12px] text-[hsl(var(--slide-text)/0.5)] leading-[1.5]">
            Покажу как я мыслю, строю и запускаю —<br />на реальных примерах, без теории.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex items-center justify-center relative">
      <img src={demoImg} alt="" className="absolute inset-0 w-full h-full object-cover opacity-[0.06]" />
      <div className="absolute inset-0 bg-[hsl(var(--slide-bg)/0.85)]" />
      <div className="relative z-10 text-center max-w-[900px] px-[40px]">
        <div className="w-[60px] h-[2px] bg-[hsl(var(--slide-gold))] mx-auto mb-[48px]" />
        <h2 className="text-[72px] font-bold text-[hsl(var(--slide-text))] leading-[1] mb-[48px]">Мини-демо</h2>
        <div className="flex gap-[40px] mb-[40px]">
          <div className="flex-1 border border-[hsl(var(--slide-text)/0.15)] rounded-[12px] p-[28px]">
            <div className="text-[14px] uppercase tracking-[0.15em] text-[hsl(var(--slide-text)/0.4)] mb-[12px]">Провал</div>
            <div className="text-[28px] font-bold text-[hsl(var(--slide-text))] mb-[12px]">Interview Ninja</div>
            <p className="text-[18px] text-[hsl(var(--slide-text)/0.6)] leading-[1.5]">Почему продукт не взлетел и какие ошибки я допустил</p>
          </div>
          <div className="flex-1 border border-[hsl(var(--slide-gold)/0.4)] rounded-[12px] p-[28px] bg-[hsl(var(--slide-gold)/0.05)]">
            <div className="text-[14px] uppercase tracking-[0.15em] text-[hsl(var(--slide-gold))] mb-[12px]">Успех</div>
            <div className="text-[28px] font-bold text-[hsl(var(--slide-text))] mb-[12px]">RunEverywhere</div>
            <p className="text-[18px] text-[hsl(var(--slide-text)/0.6)] leading-[1.5]">От идеи до MVP за 3 месяца, стали прибыльными с первой рекламной кампании</p>
          </div>
        </div>
        <p className="text-[22px] text-[hsl(var(--slide-text)/0.5)] leading-[1.6]">
          Покажу как я мыслю, строю и запускаю —<br />на реальных примерах, без теории.
        </p>
      </div>
    </div>
  );
}
