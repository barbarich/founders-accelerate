import demoImg from "@/assets/slides/demo.jpg";

export default function Slide17Demo() {
  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex items-center justify-center relative">
      <img src={demoImg} alt="" className="absolute inset-0 w-full h-full object-cover opacity-[0.06]" />
      <div className="absolute inset-0 bg-[hsl(var(--slide-bg)/0.85)]" />

      <div className="relative z-10 text-center max-w-[900px] px-[40px]">
        <div className="w-[60px] h-[2px] bg-[hsl(var(--slide-gold))] mx-auto mb-[48px]" />

        <h2 className="text-[72px] font-bold text-[hsl(var(--slide-text))] leading-[1] mb-[48px]">
          Мини-демо
        </h2>

        <div className="flex gap-[40px] mb-[40px]">
          {/* Failed project */}
          <div className="flex-1 border border-[hsl(var(--slide-text)/0.15)] rounded-[12px] p-[28px]">
            <div className="text-[14px] uppercase tracking-[0.15em] text-[hsl(var(--slide-text)/0.4)] mb-[12px]">
              Провал
            </div>
            <div className="text-[28px] font-bold text-[hsl(var(--slide-text))] mb-[12px]">
              Interview Ninja
            </div>
            <p className="text-[18px] text-[hsl(var(--slide-text)/0.6)] leading-[1.5]">
              Почему продукт не взлетел и какие ошибки я допустил
            </p>
          </div>

          {/* Current project */}
          <div className="flex-1 border border-[hsl(var(--slide-gold)/0.4)] rounded-[12px] p-[28px] bg-[hsl(var(--slide-gold)/0.05)]">
            <div className="text-[14px] uppercase tracking-[0.15em] text-[hsl(var(--slide-gold))] mb-[12px]">
              Строю сейчас
            </div>
            <div className="text-[28px] font-bold text-[hsl(var(--slide-text))] mb-[12px]">
              Mikey AI
            </div>
            <p className="text-[18px] text-[hsl(var(--slide-text)/0.6)] leading-[1.5]">
              Флоу от идеи до продукта, которым пользуются и покупают
            </p>
          </div>
        </div>

        <p className="text-[22px] text-[hsl(var(--slide-text)/0.5)] leading-[1.6]">
          Покажу как я мыслю, строю и запускаю —<br />
          на реальных примерах, без теории.
        </p>
      </div>
    </div>
  );
}
