import { useIsMobile } from "@/hooks/use-mobile";

const stages = [
  { w: "Недели 1-2", t: "Азарт", d: "Всё легко, ты делаешь много и быстро. Это самая приятная часть - и самая обманчивая." },
  { w: "Недели 3-6", t: "Тишина", d: "Ответов нет, кажется, что не работает. Это самое частое место, где я вижу, как люди останавливаются." },
  { w: "Недели 7-10", t: "Первые сигналы", d: "Один ответ, один разговор, одна оплата. Мало - но это уже подтверждение, а не надежда." },
  { w: "Недели 11+", t: "Повторяемость", d: "Ты понимаешь, что именно сработало, и повторяешь это специально, а не случайно." },
];

export default function L17SlideRealCurve() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[18px] py-[16px]">
        <p className="text-[8.5px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[3px]">
          Чтобы не удивляться
        </p>
        <h2 className="font-display text-[18px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[6px]">
          Как это выглядит на самом деле
        </h2>
        <div className="space-y-[4px]">
          {stages.map((s) => (
            <div key={s.w} className="border-l-2 border-[hsl(var(--slide-gold)/0.4)] pl-[8px]">
              <p className="text-[7.5px] uppercase tracking-[0.1em] text-[hsl(var(--slide-gold))] font-bold">{s.w}</p>
              <p className="text-[9.5px] font-bold text-[hsl(var(--slide-text))] leading-[1.2]">{s.t}</p>
              <p className="text-[8px] text-[hsl(var(--slide-text-muted))] leading-[1.35]">{s.d}</p>
            </div>
          ))}
        </div>
        <div className="bg-[hsl(var(--slide-gold)/0.08)] border-l-2 border-[hsl(var(--slide-gold))] rounded-[4px] px-[8px] py-[5px] mt-[7px]">
          <p className="text-[8px] text-[hsl(var(--slide-text))] leading-[1.4]">
            Тишина на третьей неделе - не сигнал остановиться. Это то, как нормальный процесс выглядит изнутри.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[110px] py-[40px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[10px]">
        Чтобы не удивляться
      </p>
      <h2 className="font-display text-[48px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[24px] tracking-[-0.01em]">
        Как это выглядит <span className="text-[hsl(var(--slide-gold))]">на самом деле</span>
      </h2>
      <div className="grid grid-cols-4 gap-[16px] max-w-[1550px]">
        {stages.map((s) => (
          <div key={s.w} className="border-l-[3px] border-[hsl(var(--slide-gold)/0.4)] pl-[16px]">
            <p className="text-[14px] uppercase tracking-[0.1em] text-[hsl(var(--slide-gold))] font-bold mb-[4px]">{s.w}</p>
            <p className="text-[24px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[8px]">{s.t}</p>
            <p className="text-[16px] text-[hsl(var(--slide-text-muted))] leading-[1.45]">{s.d}</p>
          </div>
        ))}
      </div>
      <div className="bg-[hsl(var(--slide-gold)/0.08)] border-l-[4px] border-[hsl(var(--slide-gold))] rounded-[10px] px-[26px] py-[16px] max-w-[1550px] mt-[26px]">
        <p className="text-[21px] text-[hsl(var(--slide-text))] leading-[1.45]">
          Тишина на третьей неделе - не сигнал остановиться. Это то, как нормальный процесс выглядит изнутри.
        </p>
      </div>
    </div>
  );
}
