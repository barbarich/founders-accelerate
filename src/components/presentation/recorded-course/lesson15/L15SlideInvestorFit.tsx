import { useIsMobile } from "@/hooks/use-mobile";

const green = [
  "Уже вкладывался в твою нишу — даёт реальные интро, а не «у меня много контактов»",
  "Есть резерв на следующий раунд — не потратил весь фонд на этот чек",
  "Отвечает быстро и не тянет due diligence месяцами — так же будет вести себя в кризис",
  "Term sheet без сюрпризов — те же условия, что обсуждали на звонках",
  "Сам предлагает контакты действующих фаундеров из портфеля для reference call",
];

const red = [
  "Настаивает на board seat или контроле на pre-seed/seed — непропорционально этапу",
  "Liquidation preference 2x+ или другие агрессивные условия в term sheet",
  "Портфельные фаундеры на reference call жалуются на молчание после чека",
  "Единственный аргумент — «все остальные тоже заходят» (FOMO без своего due diligence)",
  "Не можешь найти ни одного фаундера, с кем можно поговорить о работе с этим инвестором",
];

export default function L15SlideInvestorFit() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[20px] py-[22px] overflow-y-auto">
        <p className="text-[9px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[8px]">
          Не все деньги одинаково хороши
        </p>
        <h2 className="font-display text-[19px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[12px]">
          У кого брать, у кого — нет
        </h2>
        <div className="space-y-[8px]">
          <div className="border-l-2 border-[hsl(var(--slide-gold))] bg-[hsl(var(--slide-gold)/0.08)] px-[12px] py-[8px]">
            <p className="text-[11px] uppercase tracking-[0.12em] text-[hsl(var(--slide-gold))] font-bold mb-[4px]">Бери — когда</p>
            <ul className="space-y-[3px]">{green.map((g, i) => <li key={i} className="text-[10px] text-[hsl(var(--slide-text)/0.85)] leading-[1.4]">· {g}</li>)}</ul>
          </div>
          <div className="border-l-2 border-[hsl(var(--slide-text-muted)/0.5)] px-[12px] py-[8px]">
            <p className="text-[11px] uppercase tracking-[0.12em] text-[hsl(var(--slide-text-muted))] font-bold mb-[4px]">Не бери — когда</p>
            <ul className="space-y-[3px]">{red.map((r, i) => <li key={i} className="text-[10px] text-[hsl(var(--slide-text)/0.85)] leading-[1.4]">· {r}</li>)}</ul>
          </div>
        </div>
        <p className="text-[9px] text-[hsl(var(--slide-gold))] font-semibold leading-[1.5] mt-[8px]">
          Проверяй инвестора так же, как он проверяет тебя — 2-3 звонка портфельным фаундерам до подписания.
        </p>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px] py-[36px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[16px]">
        Не все деньги одинаково хороши
      </p>
      <h2 className="font-display text-[50px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[28px] tracking-[-0.01em]">
        У кого брать, у кого — нет
      </h2>
      <div className="grid grid-cols-2 gap-[28px] max-w-[1900px] mb-[22px]">
        <div className="border-l-[4px] border-[hsl(var(--slide-gold))] bg-[hsl(var(--slide-gold)/0.08)] px-[28px] py-[22px]">
          <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-bold mb-[16px]">Бери — когда</p>
          <ul className="space-y-[10px]">{green.map((g, i) => <li key={i} className="text-[17px] text-[hsl(var(--slide-text))] leading-[1.5]">· {g}</li>)}</ul>
        </div>
        <div className="border-l-[4px] border-[hsl(var(--slide-text-muted)/0.5)] px-[28px] py-[22px]">
          <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-text-muted))] font-bold mb-[16px]">Не бери — когда</p>
          <ul className="space-y-[10px]">{red.map((r, i) => <li key={i} className="text-[17px] text-[hsl(var(--slide-text)/0.85)] leading-[1.5]">· {r}</li>)}</ul>
        </div>
      </div>
      <p className="text-[21px] text-[hsl(var(--slide-gold))] font-semibold leading-[1.5] max-w-[1800px]">
        Проверяй инвестора так же, как он проверяет тебя — 2-3 звонка портфельным фаундерам до подписания.
      </p>
    </div>
  );
}
