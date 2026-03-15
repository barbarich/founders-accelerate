import titleBg from "@/assets/slides/title-bg.jpg";

export default function M1Slide01Welcome() {
  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex relative overflow-hidden">
      <div className="absolute inset-0">
        <img src={titleBg} alt="" className="w-full h-full object-cover opacity-[0.06]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[hsl(var(--slide-bg))] via-[hsl(var(--slide-bg)/0.85)] to-transparent" />
      </div>
      <div className="relative z-10 flex flex-col justify-center px-[140px] max-w-[1200px]">
        <div className="w-[80px] h-[2px] bg-[hsl(var(--slide-gold))] mb-[48px]" />
        <h1 className="font-display text-[86px] font-bold text-[hsl(var(--slide-text))] leading-[1.05] tracking-[-0.02em]">
          The Founders<br />Circle
        </h1>
        <p className="text-[36px] font-light text-[hsl(var(--slide-gold))] mt-[24px] tracking-[0.02em]">
          Встреча 1
        </p>
        <p className="text-[28px] text-[hsl(var(--slide-text-muted))] mt-[16px] leading-[1.4] max-w-[800px]">
          Следующие 2 часа — максимум практики, минимум теории.<br />
          Каждый уйдёт с конкретным результатом.
        </p>
        <div className="mt-[64px] space-y-[12px]">
          {[
            { time: "0:00–0:20", label: "Учу и показываю на своём опыте" },
            { time: "0:20–0:50", label: "Делаем вместе" },
            { time: "0:50–1:30", label: "Разбор каждого участника (по 5 мин)" },
            { time: "1:30–1:50", label: "Планирование на неделю" },
            { time: "1:50–2:00", label: "Закрытие" },
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-[16px]">
              <span className="font-mono text-[18px] text-[hsl(var(--slide-gold))] w-[140px] shrink-0">{item.time}</span>
              <span className="text-[20px] text-[hsl(var(--slide-text)/0.8)]">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="absolute right-[200px] top-[200px] bottom-[200px] w-[1px] bg-gradient-to-b from-transparent via-[hsl(var(--slide-gold)/0.2)] to-transparent" />
    </div>
  );
}
