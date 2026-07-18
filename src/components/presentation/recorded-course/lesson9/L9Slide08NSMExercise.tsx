import { useIsMobile } from "@/hooks/use-mobile";

const tests = [
  {
    num: "1",
    name: "Тест ценности",
    q: "Если это число выросло - клиенту точно стало лучше?",
    fail: "Если число может расти, пока клиент страдает, - это счётчик активности, а не ценности.",
  },
  {
    num: "2",
    name: "Тест действия",
    q: "Можешь назвать 3 вещи, которые сделаешь на этой неделе, чтобы её двинуть?",
    fail: "Если не можешь - метрика слишком абстрактная. Она не управляет ничем.",
  },
  {
    num: "3",
    name: "Тест честности",
    q: "Она может упасть?",
    fail: "Если только растёт - ты выбрал накопительный счётчик. Он не расскажет тебе плохую новость.",
  },
];

export default function L9Slide08NSMExercise() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[20px] py-[22px] overflow-y-auto">
        <p className="text-[9px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[8px]">
          Упражнение · сделай сейчас
        </p>
        <h2 className="font-display text-[21px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[10px]">
          Сформулируй свою. <span className="text-[hsl(var(--slide-gold))]">Одной строкой</span>.
        </h2>
        <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.3)] rounded-[6px] px-[12px] py-[9px] mb-[10px]">
          <p className="font-mono text-[11px] text-[hsl(var(--slide-gold))] leading-[1.5]">
            [действие клиента] за [период]
          </p>
        </div>
        <p className="text-[9.5px] uppercase tracking-[0.15em] text-[hsl(var(--slide-text-muted))] font-bold mb-[6px]">Прогони через 3 теста</p>
        <div className="space-y-[7px] mb-[10px]">
          {tests.map((t) => (
            <div key={t.num} className="border-l-2 border-[hsl(var(--slide-gold))] bg-[hsl(var(--slide-gold)/0.06)] px-[10px] py-[7px]">
              <p className="text-[10.5px] font-bold text-[hsl(var(--slide-gold))] mb-[2px]">{t.num}. {t.name}</p>
              <p className="text-[10px] text-[hsl(var(--slide-text))] leading-[1.4] mb-[2px]">{t.q}</p>
              <p className="text-[9.5px] text-[hsl(var(--slide-text-muted))] leading-[1.45]">{t.fail}</p>
            </div>
          ))}
        </div>
        <div className="bg-[hsl(var(--slide-gold)/0.1)] border-l-2 border-[hsl(var(--slide-gold))] px-[12px] py-[10px]">
          <p className="text-[10.5px] text-[hsl(var(--slide-text))] font-semibold leading-[1.45]">
            Не помещается в одну строку - ты <span className="text-[hsl(var(--slide-gold))]">ещё не понял свой продукт</span>.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px] py-[40px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[14px]">
        Упражнение · сделай сейчас
      </p>
      <h2 className="font-display text-[50px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[22px] tracking-[-0.01em]">
        Сформулируй свою. <span className="text-[hsl(var(--slide-gold))]">Одной строкой</span>.
      </h2>
      <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.3)] rounded-[12px] px-[32px] py-[20px] max-w-[1800px] mb-[24px]">
        <p className="font-mono text-[30px] text-[hsl(var(--slide-gold))] leading-[1.4]">
          [действие клиента] за [период]
        </p>
      </div>
      <p className="text-[16px] uppercase tracking-[0.15em] text-[hsl(var(--slide-text-muted))] font-bold mb-[14px]">Прогони через 3 теста</p>
      <div className="grid grid-cols-3 gap-[20px] max-w-[1800px] mb-[24px]">
        {tests.map((t) => (
          <div key={t.num} className="border-l-[4px] border-[hsl(var(--slide-gold))] bg-[hsl(var(--slide-gold)/0.06)] px-[22px] py-[16px]">
            <p className="text-[20px] font-bold text-[hsl(var(--slide-gold))] mb-[6px]">{t.num}. {t.name}</p>
            <p className="text-[18px] text-[hsl(var(--slide-text))] leading-[1.4] mb-[8px]">{t.q}</p>
            <p className="text-[15px] text-[hsl(var(--slide-text-muted))] leading-[1.5]">{t.fail}</p>
          </div>
        ))}
      </div>
      <div className="bg-[hsl(var(--slide-gold)/0.1)] border-l-[4px] border-[hsl(var(--slide-gold))] px-[32px] py-[18px] max-w-[1800px]">
        <p className="text-[23px] text-[hsl(var(--slide-text))] font-semibold leading-[1.45]">
          Не помещается в одну строку - ты <span className="text-[hsl(var(--slide-gold))]">ещё не понял свой продукт</span>.
        </p>
      </div>
    </div>
  );
}
