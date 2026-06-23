import { useIsMobile } from "@/hooks/use-mobile";

export default function L1Slide13bSmokeTest() {
  const isMobile = useIsMobile();

  const steps = [
    { num: "1", text: "Собери простой лендинг в один экран: проблема → твоё решение → кнопка" },
    { num: "2", text: "Опиши продукт так, будто он уже готов (его ещё нет — это нормально)" },
    { num: "3", text: "Приведи немного трафика: посты в сообществах, пара $ на рекламу, личные сети" },
    { num: "4", text: "Кнопка ведёт на форму «оставь email» или фейк-чекаут" },
    { num: "5", text: "Считай: сколько дошло до клика и реально оставило контакт" },
  ];

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[24px]">
        <p className="text-[10px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[4px]">Самый честный тест</p>
        <h2 className="font-display text-[22px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[6px]">
          Smoke-test: проверь спрос реальным сигналом
        </h2>
        <p className="text-[11px] text-[hsl(var(--slide-text-muted))] mb-[12px]">
          Мнения врут. Клик и оставленный email — нет.
        </p>
        <div className="space-y-[6px] mb-[10px]">
          {steps.map((s) => (
            <div key={s.num} className="flex items-start gap-[8px]">
              <span className="font-mono text-[9px] text-[hsl(var(--slide-gold))] bg-[hsl(var(--slide-gold)/0.15)] w-[18px] h-[18px] flex items-center justify-center rounded-full font-bold shrink-0">{s.num}</span>
              <p className="text-[11px] text-[hsl(var(--slide-text)/0.85)] leading-[1.5]">{s.text}</p>
            </div>
          ))}
        </div>
        <div className="bg-[hsl(var(--slide-gold)/0.06)] border-l-[2px] border-[hsl(var(--slide-gold))] rounded-[6px] px-[10px] py-[8px]">
          <p className="text-[10px] text-[hsl(var(--slide-text))] font-medium leading-[1.5]">
            100 зашло → 0 оставило email = спроса нет, даже если все на интервью хвалили. Лучше узнать за вечер, чем за полгода разработки.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[16px]">Самый честный тест</p>
      <h2 className="font-display text-[56px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[12px]">
        Smoke-test: проверь спрос <span className="text-[hsl(var(--slide-gold))]">реальным сигналом</span>
      </h2>
      <p className="text-[26px] text-[hsl(var(--slide-text-muted))] mb-[36px]">
        Мнения врут — на интервью все вежливо хвалят. Клик и оставленный email не врут.
      </p>
      <div className="grid grid-cols-[1.5fr_1fr] gap-[40px] items-start">
        <div className="space-y-[16px]">
          {steps.map((s) => (
            <div key={s.num} className="flex items-start gap-[16px]">
              <span className="font-mono text-[16px] text-[hsl(var(--slide-gold))] bg-[hsl(var(--slide-gold)/0.15)] w-[34px] h-[34px] flex items-center justify-center rounded-full font-bold shrink-0">{s.num}</span>
              <p className="text-[21px] text-[hsl(var(--slide-text)/0.9)] leading-[1.5]">{s.text}</p>
            </div>
          ))}
        </div>
        <div className="bg-[hsl(var(--slide-gold)/0.06)] border border-[hsl(var(--slide-gold)/0.2)] rounded-[16px] p-[32px]">
          <p className="text-[22px] font-semibold text-[hsl(var(--slide-text))] mb-[14px]">Как читать результат</p>
          <p className="text-[19px] text-[hsl(var(--slide-text-muted))] leading-[1.6]">
            100 человек зашло → 0 оставило email = спроса нет, даже если на интервью все хвалили.
          </p>
          <p className="text-[19px] text-[hsl(var(--slide-gold))] font-medium leading-[1.6] mt-[14px]">
            Лучше узнать это за вечер, чем за полгода разработки.
          </p>
        </div>
      </div>
    </div>
  );
}
