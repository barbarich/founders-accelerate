import { useIsMobile } from "@/hooks/use-mobile";

export default function L0Slide06Truth4() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[24px] py-[40px] overflow-y-auto">
        <p className="text-[9px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[10px]">
          Правда 4 из 5
        </p>
        <h2 className="font-display text-[22px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[14px] tracking-[-0.01em]">
          Кофаундер — сила или груз.<br />Зависит от первого месяца.
        </h2>
        <p className="text-[12px] text-[hsl(var(--slide-text)/0.85)] leading-[1.6] mb-[10px]">
          Делать всё одному — интересно, но сложно. Кофаундер может удвоить твою скорость или развалить компанию.
        </p>
        <p className="text-[12px] text-[hsl(var(--slide-text)/0.85)] leading-[1.6] mb-[14px]">
          <span className="text-[hsl(var(--slide-gold))] font-bold">70%</span> споров между кофаундерами — из-за того что не договорились в первый месяц.
        </p>
        <div className="bg-[hsl(var(--slide-gold)/0.1)] border-l-2 border-[hsl(var(--slide-gold))] px-[14px] py-[12px] mb-[12px]">
          <p className="text-[11px] uppercase tracking-[0.15em] text-[hsl(var(--slide-gold))] font-medium mb-[6px]">3 разговора в первый месяц</p>
          <ul className="text-[11px] text-[hsl(var(--slide-text)/0.9)] leading-[1.5] space-y-[4px]">
            <li>· Кто за что отвечает (product / tech / sales / marketing)</li>
            <li>· Кто принимает финальное решение в каждой зоне</li>
            <li>· Что если один уходит (vesting + 1-year cliff)</li>
          </ul>
        </div>
        <div className="border border-[hsl(var(--slide-text-muted)/0.2)] px-[14px] py-[10px] mb-[14px]">
          <p className="text-[11px] uppercase tracking-[0.15em] text-[hsl(var(--slide-text-muted))] font-medium mb-[6px]">Плохие причины брать кофаундера</p>
          <ul className="text-[11px] text-[hsl(var(--slide-text-muted))] leading-[1.5] space-y-[3px]">
            <li>· «Просто чтобы не одному»</li>
            <li>· «Он мой друг — мы сработаемся»</li>
            <li>· «Equity 50/50 потому что справедливо»</li>
          </ul>
        </div>
        <div className="border-t border-[hsl(var(--slide-gold)/0.2)] pt-[12px]">
          <p className="text-[10px] uppercase tracking-[0.15em] text-[hsl(var(--slide-gold))] font-medium mb-[6px]">Что делать</p>
          <p className="text-[12px] text-[hsl(var(--slide-text))] leading-[1.5]">
            Уже есть кофаундер — проведите эти 3 разговора на этой неделе. Ищешь — <span className="text-[hsl(var(--slide-gold))]">выбирай по дополняемости навыков</span>, а не по дружбе.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[20px]">
        Правда 4 из 5
      </p>
      <h2 className="font-display text-[56px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[28px] tracking-[-0.01em] max-w-[1700px]">
        Кофаундер — сила или груз. Зависит от первого месяца.
      </h2>
      <p className="text-[22px] text-[hsl(var(--slide-text)/0.85)] leading-[1.5] mb-[28px] max-w-[1700px]">
        Делать всё одному — интересно, но сложно. Кофаундер может удвоить твою скорость или развалить компанию. <span className="text-[hsl(var(--slide-text))] font-semibold"><span className="text-[hsl(var(--slide-gold))]">70%</span> споров</span> между кофаундерами — из-за того что не договорились в первый месяц.
      </p>
      <div className="grid grid-cols-2 gap-[32px] max-w-[1700px] mb-[28px]">
        <div className="bg-[hsl(var(--slide-gold)/0.1)] border-l-[4px] border-[hsl(var(--slide-gold))] px-[28px] py-[24px]">
          <p className="text-[15px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[16px]">3 разговора в первый месяц</p>
          <ul className="text-[20px] text-[hsl(var(--slide-text))] leading-[1.6] space-y-[10px]">
            <li>· Кто за что отвечает (product / tech / sales / marketing)</li>
            <li>· Кто принимает финальное решение в каждой зоне</li>
            <li>· Что если один уходит (vesting + 1-year cliff)</li>
          </ul>
        </div>
        <div className="border border-[hsl(var(--slide-text-muted)/0.25)] px-[28px] py-[24px]">
          <p className="text-[15px] uppercase tracking-[0.2em] text-[hsl(var(--slide-text-muted))] font-medium mb-[16px]">Плохие причины брать кофаундера</p>
          <ul className="text-[20px] text-[hsl(var(--slide-text-muted))] leading-[1.6] space-y-[10px]">
            <li>· «Просто чтобы не одному»</li>
            <li>· «Он мой друг — мы сработаемся»</li>
            <li>· «Я не умею то, чему он умеет»</li>
            <li>· «Equity 50/50 — потому что справедливо»</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-[hsl(var(--slide-gold)/0.2)] pt-[20px] max-w-[1700px]">
        <p className="text-[16px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[10px]">Что делать</p>
        <p className="text-[24px] text-[hsl(var(--slide-text))] leading-[1.5]">
          Уже есть кофаундер — проведите эти 3 разговора на этой неделе. Ищешь — <span className="text-[hsl(var(--slide-gold))] font-semibold">выбирай по дополняемости навыков</span>, а не по дружбе.
        </p>
      </div>
    </div>
  );
}
