import { useIsMobile } from "@/hooks/use-mobile";

const rules = [
  { t: "Продаёшь бизнесу", d: "Партнёрства и комьюнити. Агентства и интеграторы дают доступ к тем, кто платит, а в профильных чатах сидят те, у кого болит." },
  { t: "Продаёшь людям", d: "Инфлюенсеры и комьюнити. Дешевле всего начать с раздачи продукта мелким креаторам и ответов в тредах." },
  { t: "Денег на тест нет", d: "Комьюнити и SEO/GEO. Оба канала стоят только твоего времени: 90 минут в неделю и одна неделя на статьи и подборки." },
];

export default function L16SlideChooseChannels() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[18px] py-[16px] overflow-y-auto">
        <p className="text-[9px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[5px]">
          Выбери и запусти
        </p>
        <h2 className="font-display text-[17px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[3px]">
          Два канала на 90 дней, не четыре
        </h2>
        <p className="text-[8.5px] text-[hsl(var(--slide-text-muted))] leading-[1.4] mb-[7px]">
          Один канал - мало данных, чтобы понять, работает ли. Четыре - ни один не доведёшь до денег.
        </p>
        <div className="space-y-[5px] mb-[6px]">
          {rules.map((r) => (
            <div key={r.t} className="border border-[hsl(var(--slide-gold)/0.2)] rounded-[5px] px-[9px] py-[6px] bg-[hsl(var(--slide-gold)/0.04)]">
              <p className="text-[9.5px] font-bold text-[hsl(var(--slide-text))]">{r.t}</p>
              <p className="text-[8.5px] text-[hsl(var(--slide-text)/0.8)] leading-[1.35]">{r.d}</p>
            </div>
          ))}
        </div>
        <div className="bg-[hsl(var(--slide-gold)/0.1)] border-l-2 border-[hsl(var(--slide-gold))] px-[10px] py-[7px]">
          <p className="text-[8.5px] text-[hsl(var(--slide-text))] leading-[1.4]">
            <span className="font-bold">Мерь один показатель - сколько человек заплатили.</span> Не подписчиков, не регистрации, не голоса. Через 90 дней канал с оплатами оставляешь, второй меняешь.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[120px] py-[34px] overflow-y-auto">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[12px]">
        Выбери и запусти
      </p>
      <h2 className="font-display text-[42px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[8px] tracking-[-0.01em]">
        Два канала на 90 дней, <span className="text-[hsl(var(--slide-gold))]">не четыре</span>
      </h2>
      <p className="text-[18px] text-[hsl(var(--slide-text-muted))] leading-[1.4] mb-[20px] max-w-[1800px]">
        Один канал - слишком мало данных, чтобы понять, работает ли он. Четыре - ни один не доведёшь до денег.
      </p>
      <div className="grid grid-cols-3 gap-[20px] max-w-[1900px] mb-[18px]">
        {rules.map((r) => (
          <div key={r.t} className="border border-[hsl(var(--slide-gold)/0.25)] rounded-[12px] px-[22px] py-[16px] bg-[hsl(var(--slide-gold)/0.04)]">
            <p className="text-[20px] font-bold text-[hsl(var(--slide-text))] mb-[6px]">{r.t}</p>
            <p className="text-[15px] text-[hsl(var(--slide-text)/0.85)] leading-[1.45]">{r.d}</p>
          </div>
        ))}
      </div>
      <div className="bg-[hsl(var(--slide-gold)/0.1)] border-l-[4px] border-[hsl(var(--slide-gold))] px-[26px] py-[16px] max-w-[1900px]">
        <p className="text-[18px] text-[hsl(var(--slide-text))] leading-[1.45]">
          <span className="font-semibold">Мерь один показатель - сколько человек заплатили.</span> Не подписчиков, не регистрации, не голоса на запуске. Через 90 дней канал с оплатами оставляешь, второй меняешь на следующий.
        </p>
      </div>
    </div>
  );
}
