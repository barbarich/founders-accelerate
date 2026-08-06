import { useIsMobile } from "@/hooks/use-mobile";

const rules = [
  { t: "Собери 300-500 своих людей заранее", d: "Это те, кто проголосует за тебя в первый час. Без них тебя просто не покажут в топе - сайт продвигает то, что уже набирает голоса." },
  { t: "Запускайся ровно в полночь по Калифорнии", d: "Рейтинг дня обнуляется в 00:01 по тихоокеанскому времени. Чем раньше после этого ты стартуешь, тем больше часов у тебя есть на голоса." },
  { t: "Отвечай на каждый комментарий первые часы", d: "Сайт сегодня считает не только голоса, а живое обсуждение: комментарии и твои ответы на них. Тишина в комментариях - минус в показах." },
  { t: "Не покупай голоса и не нанимай «хантеров»", d: "Услуги за $500-2000, которые обещают вывести в топ, запрещены правилами площадки и не увеличивают число продаж - только тратят бюджет." },
  { t: "Продукт должен продаваться в один клик", d: "Внимание длится один день. Если на сайте написано «свяжитесь с нами» вместо цены и кнопки оплаты, почти никто не купит." },
];

export default function L16SlideLaunches() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[18px] py-[14px] overflow-y-auto">
        <p className="text-[9px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[4px]">
          Запуски · Product Hunt
        </p>
        <h2 className="font-display text-[16px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[4px]">
          Что это и как выйти в топ
        </h2>
        <p className="text-[8px] text-[hsl(var(--slide-text-muted))] leading-[1.4] mb-[6px]">
          Product Hunt - сайт, где каждый день выходят новые продукты, и посетители голосуют за понравившиеся, как лайком. Топ дня видят все, кто зашёл на сайт.
        </p>
        <div className="border border-[hsl(var(--slide-gold)/0.3)] rounded-[6px] px-[9px] py-[6px] bg-[hsl(var(--slide-gold)/0.06)] mb-[6px]">
          <p className="text-[8px] text-[hsl(var(--slide-text))] leading-[1.4]">
            Но голоса - не деньги. Один и тот же фаундер: <span className="font-bold text-[hsl(var(--slide-gold))]">300 голосов дали 91 платящего</span>, а через год <span className="font-bold text-[hsl(var(--slide-gold))]">612 голосов дали одного</span>.
          </p>
        </div>
        <p className="text-[8px] uppercase tracking-[0.1em] text-[hsl(var(--slide-gold))] font-bold mb-[4px]">Правила на август 2026</p>
        <div className="space-y-[4px] mb-[6px]">
          {rules.map((r, i) => (
            <div key={r.t} className="border border-[hsl(var(--slide-gold)/0.2)] rounded-[5px] px-[9px] py-[6px] bg-[hsl(var(--slide-gold)/0.04)]">
              <p className="text-[9px] font-bold text-[hsl(var(--slide-text))]">{i + 1}. {r.t}</p>
              <p className="text-[8px] text-[hsl(var(--slide-text)/0.8)] leading-[1.35]">{r.d}</p>
            </div>
          ))}
        </div>
        <p className="text-[8px] text-[hsl(var(--slide-text-muted))] leading-[1.4]">
          Честно про результат: типичный запуск сегодня - около 115 регистраций, платят 2-3%. Это тест на один день, не основной канал продаж.
        </p>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[120px] py-[28px] overflow-y-auto">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[10px]">
        Запуски · Product Hunt
      </p>
      <h2 className="font-display text-[38px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[8px] tracking-[-0.01em]">
        Что это и <span className="text-[hsl(var(--slide-gold))]">как выйти в топ</span>
      </h2>
      <p className="text-[16px] text-[hsl(var(--slide-text-muted))] leading-[1.4] mb-[12px] max-w-[1800px]">
        Product Hunt - сайт, где каждый день выходят новые продукты, и посетители голосуют за понравившиеся, как лайком. Топ дня видят все, кто зашёл на сайт.
      </p>
      <div className="border border-[hsl(var(--slide-gold)/0.3)] rounded-[12px] px-[24px] py-[13px] bg-[hsl(var(--slide-gold)/0.06)] max-w-[1900px] mb-[16px]">
        <p className="text-[16.5px] text-[hsl(var(--slide-text))] leading-[1.4]">
          Но голоса - не деньги. Один и тот же фаундер: <span className="font-bold text-[hsl(var(--slide-gold))]">300 голосов дали 91 платящего</span>, а через год <span className="font-bold text-[hsl(var(--slide-gold))]">612 голосов дали одного</span>.
        </p>
      </div>
      <p className="text-[14px] uppercase tracking-[0.15em] text-[hsl(var(--slide-gold))] font-bold mb-[10px]">Правила на август 2026</p>
      <div className="grid grid-cols-5 gap-[13px] max-w-[1900px] mb-[14px]">
        {rules.map((r, i) => (
          <div key={r.t} className="border border-[hsl(var(--slide-gold)/0.25)] rounded-[12px] px-[16px] py-[14px] bg-[hsl(var(--slide-gold)/0.04)]">
            <span className="font-mono text-[14px] text-[hsl(var(--slide-gold))]">{i + 1}</span>
            <p className="text-[14.5px] font-bold text-[hsl(var(--slide-text))] leading-[1.25] mt-[3px] mb-[5px]">{r.t}</p>
            <p className="text-[12px] text-[hsl(var(--slide-text)/0.8)] leading-[1.4]">{r.d}</p>
          </div>
        ))}
      </div>
      <p className="text-[16px] text-[hsl(var(--slide-text-muted))] leading-[1.4] max-w-[1900px]">
        Честно про результат: типичный запуск сегодня - около 115 регистраций, платят 2-3%. Это тест на один день, не основной канал продаж.
      </p>
    </div>
  );
}
