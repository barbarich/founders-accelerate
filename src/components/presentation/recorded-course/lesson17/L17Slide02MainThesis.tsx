import { useIsMobile } from "@/hooks/use-mobile";

export default function L17Slide02MainThesis() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[24px]">
        <p className="text-[10px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[12px]">
          Главная мысль урока
        </p>
        <h2 className="font-display text-[26px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[16px] tracking-[-0.02em]">
          Между «прошёл курс» и «есть платящие» стоит одно: <span className="text-[hsl(var(--slide-gold))]">40 касаний в месяц, повторённые три месяца подряд</span>.
        </h2>
        <p className="text-[11.5px] text-[hsl(var(--slide-text-muted))] leading-[1.6] mb-[14px]">
          Знания у тебя теперь все. У меня за спиной два выхода, и ни разу решающим не было знание - решало то, что я не останавливался на третьем тихом месяце.
        </p>
        <div className="bg-[hsl(var(--slide-gold)/0.08)] border-l-2 border-[hsl(var(--slide-gold))] rounded-[4px] px-[10px] py-[8px]">
          <p className="text-[10.5px] text-[hsl(var(--slide-text))] leading-[1.5]">
            Дальше в уроке - что делать в первые 30 дней и в следующие 90. По неделям, с числами, под твою ситуацию.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[120px]">
      <p className="text-[19px] uppercase tracking-[0.22em] text-[hsl(var(--slide-gold))] font-medium mb-[26px]">
        Главная мысль урока
      </p>
      <h2 className="font-display text-[56px] font-bold text-[hsl(var(--slide-text))] leading-[1.08] mb-[32px] tracking-[-0.02em] max-w-[1600px]">
        Между «прошёл курс» и «есть платящие» стоит одно: <span className="text-[hsl(var(--slide-gold))]">40 касаний в месяц, повторённые три месяца подряд</span>.
      </h2>
      <p className="text-[24px] text-[hsl(var(--slide-text-muted))] leading-[1.5] max-w-[1500px] mb-[30px]">
        Знания у тебя теперь все. У меня за спиной два выхода, и ни разу решающим не было знание - решало то, что я не останавливался на третьем тихом месяце.
      </p>
      <div className="bg-[hsl(var(--slide-gold)/0.08)] border-l-[4px] border-[hsl(var(--slide-gold))] rounded-[10px] px-[28px] py-[18px] max-w-[1500px]">
        <p className="text-[22px] text-[hsl(var(--slide-text))] leading-[1.45]">
          Дальше в уроке - что делать в первые 30 дней и в следующие 90. По неделям, с числами, под твою ситуацию.
        </p>
      </div>
    </div>
  );
}
