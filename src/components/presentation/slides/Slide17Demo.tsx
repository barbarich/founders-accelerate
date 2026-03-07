import demoImg from "@/assets/slides/demo.jpg";

export default function Slide17Demo() {
  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex items-center justify-center relative">
      <img src={demoImg} alt="" className="absolute inset-0 w-full h-full object-cover opacity-10" />
      <div className="relative z-10 text-center max-w-[1000px]">
        <div className="w-[60px] h-[2px] bg-[hsl(var(--slide-gold))] mx-auto mb-[48px]" />
        <h2 className="text-[72px] font-bold text-[hsl(var(--slide-text))] leading-tight mb-[24px]">
          Мини-демо
        </h2>
        <p className="text-[28px] text-[hsl(var(--slide-text-muted))] leading-[1.5] mb-[48px]">
          Прямо сейчас разберу один из ваших проектов — в реальном времени
        </p>

        <div className="flex justify-center gap-[48px] mb-[48px]">
          <div className="text-center">
            <p className="text-[48px] font-bold text-[hsl(var(--slide-gold))]">15–20</p>
            <p className="text-[18px] text-[hsl(var(--slide-text-muted))]">минут</p>
          </div>
          <div className="w-[1px] bg-[hsl(var(--slide-border)/0.3)]" />
          <div className="text-center">
            <p className="text-[48px] font-bold text-[hsl(var(--slide-gold))]">1</p>
            <p className="text-[18px] text-[hsl(var(--slide-text-muted))]">проект</p>
          </div>
          <div className="w-[1px] bg-[hsl(var(--slide-border)/0.3)]" />
          <div className="text-center">
            <p className="text-[48px] font-bold text-[hsl(var(--slide-gold))]">Live</p>
            <p className="text-[18px] text-[hsl(var(--slide-text-muted))]">в реальном времени</p>
          </div>
        </div>

        <p className="text-[22px] text-[hsl(var(--slide-gold)/0.7)] italic">
          Как я мыслю, работаю и какую ценность даю — вот так выглядит каждая встреча в программе.
        </p>
      </div>
    </div>
  );
}
