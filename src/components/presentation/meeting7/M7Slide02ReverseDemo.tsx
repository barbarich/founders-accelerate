import { useIsMobile } from "@/hooks/use-mobile";

const rules = [
  "По кругу. По 60 секунд каждый.",
  "Одно предложение: «На демо-дне я покажу __».",
  "Без оправданий. Без «если успею». Только конечная картинка.",
];

export default function M7Slide02ReverseDemo() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[20px]">
        <p className="text-[9px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[6px]">Открытие</p>
        <h2 className="font-display text-[22px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[12px]">
          5 встреч позади. 5 впереди.<br />Что будет на демо-дне?
        </h2>
        <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.25)] rounded-[8px] p-[12px] space-y-[6px]">
          {rules.map((r, i) => (
            <div key={i} className="flex gap-[8px] items-start">
              <span className="text-[9px] font-mono text-[hsl(var(--slide-gold))] mt-[2px]">0{i + 1}</span>
              <p className="text-[11px] text-[hsl(var(--slide-text))] leading-[1.5]">{r}</p>
            </div>
          ))}
        </div>
        <p className="text-[10px] text-[hsl(var(--slide-gold))] font-semibold mt-[12px] leading-[1.4]">
          Я не комментирую сейчас. Запоминаем — вернёмся к этому в конце.
        </p>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[120px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[16px]">Открытие</p>
      <h2 className="font-display text-[64px] font-bold text-[hsl(var(--slide-text))] leading-[1.05] mb-[40px] max-w-[1500px]">
        5 встреч позади. 5 впереди. Что будет на демо-дне?
      </h2>
      <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.25)] rounded-[16px] px-[40px] py-[32px] max-w-[1400px] space-y-[18px]">
        {rules.map((r, i) => (
          <div key={i} className="flex gap-[20px] items-start">
            <span className="text-[20px] font-mono text-[hsl(var(--slide-gold))] mt-[4px]">0{i + 1}</span>
            <p className="text-[26px] text-[hsl(var(--slide-text))] leading-[1.4]">{r}</p>
          </div>
        ))}
      </div>
      <p className="text-[24px] text-[hsl(var(--slide-gold))] font-semibold mt-[36px] max-w-[1400px] leading-[1.4]">
        Я не комментирую сейчас. Запоминаем — вернёмся к этому в конце.
      </p>
    </div>
  );
}