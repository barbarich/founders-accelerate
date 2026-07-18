import { useIsMobile } from "@/hooks/use-mobile";

const later = [
  { tool: "Записи экрана", ex: "Clarity", when: "Когда цифры говорят «отваливаются здесь», а ты не понимаешь почему. Посмотришь глазами - поймёшь за 10 минут." },
  { tool: "Ошибки", ex: "Sentry", when: "Когда появились платящие. До этого баг - неприятность, после - потерянные деньги." },
  { tool: "Веб-аналитика", ex: "GA4", when: "Когда пошли деньги в рекламу и надо считать стоимость клиента по каналам." },
];

export default function L9Slide11OneTool() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[18px] py-[20px] overflow-y-auto">
        <p className="text-[9px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[6px]">
          Чем измерять
        </p>
        <h2 className="font-display text-[21px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[8px]">
          Поставь одно. <span className="text-[hsl(var(--slide-gold))]">Не четыре</span>.
        </h2>
        <p className="text-[10px] text-[hsl(var(--slide-text)/0.85)] leading-[1.5] mb-[9px]">
          Типичная неделя основателя: подключить четыре инструмента, настроить события, нарисовать дашборд. А потом не открыть ни один. Знакомо - потому что настройка ощущается как работа, а решения принимать страшно.
        </p>
        <div className="border-l-2 border-[hsl(var(--slide-gold))] bg-[hsl(var(--slide-gold)/0.08)] px-[10px] py-[7px] mb-[9px]">
          <p className="text-[10.5px] font-bold text-[hsl(var(--slide-gold))] mb-[2px]">Одно на старте: продуктовая аналитика событий</p>
          <p className="text-[9.5px] text-[hsl(var(--slide-text)/0.85)] leading-[1.45]">PostHog или Mixpanel. Бесплатного тарифа хватит надолго. Она одна отвечает на все пять вопросов с прошлого слайда.</p>
        </div>
        <p className="text-[9.5px] uppercase tracking-[0.15em] text-[hsl(var(--slide-text-muted))] font-bold mb-[5px]">Остальное - потом, по поводу</p>
        <div className="space-y-[5px] mb-[9px]">
          {later.map((l) => (
            <div key={l.tool} className="border border-[hsl(var(--slide-border)/0.3)] rounded-[5px] px-[9px] py-[5px]">
              <p className="text-[9.5px] font-bold text-[hsl(var(--slide-text))]">{l.tool} <span className="text-[hsl(var(--slide-text-muted))] font-normal">· {l.ex}</span></p>
              <p className="text-[9px] text-[hsl(var(--slide-text-muted))] leading-[1.4]">{l.when}</p>
            </div>
          ))}
        </div>
        <div className="bg-[hsl(var(--slide-gold)/0.1)] border-l-2 border-[hsl(var(--slide-gold))] px-[12px] py-[9px]">
          <p className="text-[10px] text-[hsl(var(--slide-text))] font-semibold leading-[1.45]">
            Инструмент не даёт понимания. Понимание даёт <span className="text-[hsl(var(--slide-gold))]">вопрос, с которым ты в него приходишь</span>.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px] py-[36px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[12px]">
        Чем измерять
      </p>
      <h2 className="font-display text-[48px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[18px] tracking-[-0.01em]">
        Поставь одно. <span className="text-[hsl(var(--slide-gold))]">Не четыре</span>.
      </h2>
      <p className="text-[21px] text-[hsl(var(--slide-text)/0.85)] leading-[1.5] max-w-[1800px] mb-[20px]">
        Типичная неделя основателя: подключить четыре инструмента, настроить события, нарисовать дашборд. А потом не открыть ни один. Так происходит потому, что настройка ощущается как работа, а принимать решения страшно.
      </p>
      <div className="border-l-[4px] border-[hsl(var(--slide-gold))] bg-[hsl(var(--slide-gold)/0.08)] px-[28px] py-[16px] max-w-[1800px] mb-[20px]">
        <p className="text-[24px] font-bold text-[hsl(var(--slide-gold))] mb-[6px]">Одно на старте: продуктовая аналитика событий</p>
        <p className="text-[19px] text-[hsl(var(--slide-text)/0.85)] leading-[1.45]">PostHog или Mixpanel. Бесплатного тарифа хватит надолго. Она одна отвечает на все пять вопросов с прошлого слайда.</p>
      </div>
      <p className="text-[16px] uppercase tracking-[0.15em] text-[hsl(var(--slide-text-muted))] font-bold mb-[10px]">Остальное - потом, по конкретному поводу</p>
      <div className="grid grid-cols-3 gap-[18px] max-w-[1800px] mb-[20px]">
        {later.map((l) => (
          <div key={l.tool} className="border border-[hsl(var(--slide-border)/0.3)] rounded-[10px] px-[20px] py-[14px]">
            <p className="text-[19px] font-bold text-[hsl(var(--slide-text))] mb-[4px]">{l.tool} <span className="text-[hsl(var(--slide-text-muted))] font-normal">· {l.ex}</span></p>
            <p className="text-[16px] text-[hsl(var(--slide-text-muted))] leading-[1.45]">{l.when}</p>
          </div>
        ))}
      </div>
      <div className="bg-[hsl(var(--slide-gold)/0.1)] border-l-[4px] border-[hsl(var(--slide-gold))] px-[32px] py-[16px] max-w-[1800px]">
        <p className="text-[22px] text-[hsl(var(--slide-text))] font-semibold leading-[1.45]">
          Инструмент не даёт понимания. Понимание даёт <span className="text-[hsl(var(--slide-gold))]">вопрос, с которым ты в него приходишь</span>.
        </p>
      </div>
    </div>
  );
}
