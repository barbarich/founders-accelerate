import demoImg from "@/assets/slides/demo.jpg";

export default function Slide17Demo() {
  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex items-center justify-center relative">
      <img src={demoImg} alt="" className="absolute inset-0 w-full h-full object-cover opacity-8" />
      <div className="absolute inset-0 bg-[hsl(var(--slide-bg)/0.85)]" />

      <div className="relative z-10 text-center max-w-[900px]">
        <div className="w-[60px] h-[2px] bg-[hsl(var(--slide-gold))] mx-auto mb-[56px]" />

        <h2 className="text-[80px] font-bold text-[hsl(var(--slide-text))] leading-[1] mb-[32px]">
          Мини-демо
        </h2>

        <p className="text-[28px] text-[hsl(var(--slide-text)/0.7)] leading-[1.6] mb-[24px]">
          15–20 минут — разбираю один из ваших проектов в реальном времени.
        </p>

        <p className="text-[24px] text-[hsl(var(--slide-text)/0.5)] leading-[1.6]">
          Как я мыслю, работаю и какую ценность даю —<br />
          вот так выглядит каждая встреча в программе.
        </p>
      </div>
    </div>
  );
}
