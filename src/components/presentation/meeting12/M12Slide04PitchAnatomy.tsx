import { useIsMobile } from "@/hooks/use-mobile";

const parts = [
  { n: "1", time: "45 сек", t: "Проблема", say: "Чья боль и насколько она дорогая. Почему сегодняшние решения не справляются.", miss: "Начать с «мы» и своего продукта, а не с боли клиента." },
  { n: "2", time: "60 сек", t: "Решение + демо", say: "Что делает продукт в одном предложении — и покажи вживую 1 экран/результат за 20 сек.", miss: "Перечислять фичи вместо показать результат. Demo IS the pitch." },
  { n: "3", time: "45 сек", t: "Тяга", say: "Самое сильное доказательство, что это работает. Числа: юзеры, выручка, retention.", miss: "Прятать слабую тягу за словами. Нет тяги — покажи сигнал спроса." },
  { n: "4", time: "60 сек", t: "Рынок · модель · почему ты", say: "TAM снизу-вверх, как зарабатываешь, твоё несправедливое преимущество.", miss: "«Рынок $50 млрд» сверху-вниз. Инвестор это слышал 1000 раз." },
  { n: "5", time: "30 сек", t: "Запрос + next step", say: "Чёткий запрос (клиент / пилот / деньги / интро) + действие с датой.", miss: "«Спасибо за внимание» без конкретного запроса." },
];

export default function M12Slide04PitchAnatomy() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[16px]">
        <p className="text-[9px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[4px]">
          Анатомия · питч за 5 минут
        </p>
        <h2 className="font-display text-[19px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[6px]">
          5 слайдов. 5 минут. <span className="text-[hsl(var(--slide-gold))]">Ни одного лишнего.</span>
        </h2>
        <div className="space-y-[3px]">
          {parts.map((p) => (
            <div key={p.n} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[5px] px-[8px] py-[3px]">
              <div className="flex items-baseline gap-[6px]">
                <span className="text-[10px] font-bold text-[hsl(var(--slide-gold))]">{p.n}</span>
                <span className="text-[9.5px] font-bold text-[hsl(var(--slide-text))]">{p.t}</span>
                <span className="text-[7px] text-[hsl(var(--slide-text-muted))] ml-auto">{p.time}</span>
              </div>
              <p className="text-[7.5px] text-[hsl(var(--slide-text-muted))] leading-[1.35] ml-[16px]">{p.say}</p>
              <p className="text-[7px] text-[hsl(var(--slide-gold)/0.85)] italic leading-[1.35] ml-[16px]">⚠ {p.miss}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[14px]">
        Анатомия · питч за 5 минут
      </p>
      <h2 className="font-display text-[52px] font-bold text-[hsl(var(--slide-text))] leading-[1.05] mb-[10px] tracking-[-0.02em]">
        5 слайдов. 5 минут. <span className="text-[hsl(var(--slide-gold))]">Ни одного лишнего.</span>
      </h2>
      <p className="text-[19px] text-[hsl(var(--slide-text-muted))] leading-[1.4] mb-[20px] max-w-[1500px]">
        Та же структура, что и для клиента, партнёра, инвестора. Сегодня прогоняешь её вживую.
      </p>
      <div className="space-y-[8px] max-w-[1700px]">
        {parts.map((p) => (
          <div key={p.n} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[10px] px-[24px] py-[12px] flex items-start gap-[20px]">
            <div className="flex flex-col items-center shrink-0 w-[70px]">
              <span className="font-display text-[36px] font-bold text-[hsl(var(--slide-gold))] leading-none">{p.n}</span>
              <span className="text-[12px] text-[hsl(var(--slide-text-muted))] mt-[4px]">{p.time}</span>
            </div>
            <div className="flex-1">
              <p className="text-[21px] font-bold text-[hsl(var(--slide-text))] mb-[2px]">{p.t}</p>
              <p className="text-[16px] text-[hsl(var(--slide-text-muted))] leading-[1.4]">{p.say}</p>
              <p className="text-[14px] text-[hsl(var(--slide-gold)/0.85)] italic leading-[1.35] mt-[2px]">⚠ Ошибка №1: {p.miss}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
