import { useIsMobile } from "@/hooks/use-mobile";

const venture = [
  "Хочет взрывной рост 10-100x — обычный «хороший бизнес» фонд не спасает, всю прибыль делают 1-2 компании из портфеля",
  "Берёт миноритарную долю, ставит на масштаб, не на контроль над операциями",
  "Риск для тебя: давление расти любой ценой, а не в своём темпе",
  "Не дотянул до нужной траектории роста — тяжело поднять следующий раунд, даже если бизнес прибыльный",
];

const control = [
  "Хочет предсказуемый денежный поток и контроль над решениями, не 100x",
  "Часто берёт мажоритарную долю сразу или получает её через условия раунда",
  "Риск для тебя: теряешь право решающего голоса раньше, чем ожидал",
  "Может приоритизировать извлечение прибыли сейчас, а не реинвестирование в рост",
];

export default function L15SlideWhyInvestorsInvest() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[20px] py-[22px] overflow-y-auto">
        <p className="text-[9px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[8px]">
          Прежде чем решать Bootstrap или Raise
        </p>
        <h2 className="font-display text-[19px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[8px]">
          Зачем инвесторы вообще инвестируют
        </h2>
        <p className="text-[10.5px] text-[hsl(var(--slide-text)/0.85)] leading-[1.5] mb-[10px]">
          Венчурный фонд не может позволить себе стабильный бизнес: 70% ставок в портфеле не возвращают вложенное, а весь фонд делают 1-2 компании с ростом в сотни раз. Поэтому венчурный инвестор ищет не «хороший бизнес» — он ищет тот самый один из десяти, который взорвётся. Но так думают не все — есть и другая модель.
        </p>
        <div className="space-y-[8px]">
          <div className="border-l-2 border-[hsl(var(--slide-gold))] bg-[hsl(var(--slide-gold)/0.08)] px-[12px] py-[8px]">
            <p className="text-[11px] uppercase tracking-[0.12em] text-[hsl(var(--slide-gold))] font-bold mb-[4px]">Венчурная модель · VC, бизнес-ангелы</p>
            <ul className="space-y-[3px]">{venture.map((v, i) => <li key={i} className="text-[10px] text-[hsl(var(--slide-text)/0.85)] leading-[1.4]">· {v}</li>)}</ul>
          </div>
          <div className="border-l-2 border-[hsl(var(--slide-text-muted)/0.5)] px-[12px] py-[8px]">
            <p className="text-[11px] uppercase tracking-[0.12em] text-[hsl(var(--slide-text-muted))] font-bold mb-[4px]">Контрольная модель · холдинги, PE, часть ангелов</p>
            <ul className="space-y-[3px]">{control.map((c, i) => <li key={i} className="text-[10px] text-[hsl(var(--slide-text)/0.85)] leading-[1.4]">· {c}</li>)}</ul>
          </div>
        </div>
        <p className="text-[9.5px] text-[hsl(var(--slide-gold))] font-semibold leading-[1.5] mt-[8px]">
          Спроси прямо на первом звонке: «какой exit вы себе представляете и за сколько лет?» Ответ сразу покажет, какая перед тобой модель.
        </p>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px] py-[36px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[14px]">
        Прежде чем решать Bootstrap или Raise
      </p>
      <h2 className="font-display text-[46px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[18px] tracking-[-0.02em]">
        Зачем инвесторы вообще инвестируют
      </h2>
      <p className="text-[18px] text-[hsl(var(--slide-text)/0.85)] leading-[1.5] mb-[22px] max-w-[1800px]">
        Венчурный фонд не может позволить себе стабильный бизнес: 70% ставок в портфеле не возвращают вложенное, а весь фонд делают 1-2 компании с ростом в сотни раз. Поэтому венчурный инвестор ищет не «хороший бизнес» — он ищет тот самый один из десяти, который взорвётся. Но так думают не все — есть и другая модель.
      </p>
      <div className="grid grid-cols-2 gap-[28px] max-w-[1900px]">
        <div className="border-l-[4px] border-[hsl(var(--slide-gold))] bg-[hsl(var(--slide-gold)/0.08)] px-[28px] py-[20px]">
          <p className="text-[17px] uppercase tracking-[0.18em] text-[hsl(var(--slide-gold))] font-bold mb-[14px]">Венчурная модель · VC, бизнес-ангелы</p>
          <ul className="space-y-[9px]">{venture.map((v, i) => <li key={i} className="text-[16px] text-[hsl(var(--slide-text))] leading-[1.45]">· {v}</li>)}</ul>
        </div>
        <div className="border-l-[4px] border-[hsl(var(--slide-text-muted)/0.5)] px-[28px] py-[20px]">
          <p className="text-[17px] uppercase tracking-[0.18em] text-[hsl(var(--slide-text-muted))] font-bold mb-[14px]">Контрольная модель · холдинги, PE, часть ангелов</p>
          <ul className="space-y-[9px]">{control.map((c, i) => <li key={i} className="text-[16px] text-[hsl(var(--slide-text)/0.85)] leading-[1.45]">· {c}</li>)}</ul>
        </div>
      </div>
      <p className="text-[19px] text-[hsl(var(--slide-gold))] font-semibold leading-[1.5] max-w-[1800px] mt-[20px]">
        Спроси прямо на первом звонке: «какой exit вы себе представляете и за сколько лет?» Ответ сразу покажет, какая перед тобой модель.
      </p>
    </div>
  );
}
