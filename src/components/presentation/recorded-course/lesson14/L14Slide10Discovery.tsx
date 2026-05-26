import { useIsMobile } from "@/hooks/use-mobile";

const steps = [
  {
    n: "1",
    q: "Повтори их боль их же словами (30 сек)",
    listen: "«Вы сказали, что теряете 8 часов в неделю на X. Сегодня покажу, как мы это убираем.» — клиент сразу слышит, что демо про него, а не про твой продукт.",
  },
  {
    n: "2",
    q: "Покажи финал сначала — главный ВАУ-экран (1 мин)",
    listen: "Не «давайте я расскажу про модули». Сразу финальный результат: дашборд, отчёт, готовый артефакт. Клиент должен подумать «я это хочу» в первые 90 секунд.",
  },
  {
    n: "3",
    q: "Веди по ИХ сценарию, на ИХ данных",
    listen: "Используй их кейс из discovery, их цифры, их названия отделов. Не показывай demo-аккаунт с «ООО Ромашка». Один реальный пример клиента бьёт 10 фичей.",
  },
  {
    n: "4",
    q: "ВАУ-момент каждые 60–90 секунд",
    listen: "Один клик → одна понятная выгода в деньгах или часах. «Вот это сэкономит вашему менеджеру 4 часа в неделю». Если 2 минуты без ВАУ — клиент мысленно вышел из звонка.",
  },
  {
    n: "5",
    q: "Каждый экран связывай с бизнес-метрикой компании",
    listen: "Не «здесь у нас фильтры», а «здесь вы увидите, какие сделки горят — это влияет на ваш forecast». Говори на языке его KPI, а не своего интерфейса.",
  },
  {
    n: "6",
    q: "Закрой петлю — вернись к боли из шага 1",
    listen: "«Помните, вы сказали про 8 часов? Вот так мы их забираем.» Клиент должен сам соединить: его проблема → твой продукт → результат. Тогда демо продаёт.",
  },
];

export default function L14Slide10Discovery() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[20px]">
        <p className="text-[11px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[6px]">
          Demo, который продаёт · 6 шагов
        </p>
        <h2 className="font-display text-[18px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[8px]">
          Структура флоу, <span className="text-[hsl(var(--slide-gold))]">а не случайные экраны</span>
        </h2>
        <div className="space-y-[5px]">
          {steps.map((it) => (
            <div key={it.n} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[6px] px-[10px] py-[6px]">
              <div className="flex items-baseline gap-[5px]">
                <span className="text-[12px] font-bold text-[hsl(var(--slide-gold))]">{it.n}</span>
                <span className="text-[11px] text-[hsl(var(--slide-text))] leading-[1.4]">{it.q}</span>
              </div>
              <p className="text-[10px] text-[hsl(var(--slide-text-muted))] italic leading-[1.45] ml-[17px]">→ {it.listen}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px]">
      <p className="text-[20px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[14px]">
        Demo, который продаёт · 6 шагов
      </p>
      <h2 className="font-display text-[48px] font-bold text-[hsl(var(--slide-text))] leading-[1.05] mb-[20px] tracking-[-0.02em]">
        Структура флоу, <span className="text-[hsl(var(--slide-gold))]">а не случайные экраны</span>
      </h2>
      <div className="space-y-[10px] max-w-[1700px]">
        {steps.map((it) => (
          <div key={it.n} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[10px] px-[24px] py-[14px]">
            <div className="flex items-start gap-[14px]">
              <span className="font-display text-[32px] font-bold text-[hsl(var(--slide-gold))] leading-none shrink-0">{it.n}</span>
              <div className="flex-1">
                <p className="text-[20px] text-[hsl(var(--slide-text))] leading-[1.45] mb-[4px]">{it.q}</p>
                <p className="text-[16px] text-[hsl(var(--slide-text-muted))] italic leading-[1.45]"><span className="text-[hsl(var(--slide-gold))] not-italic font-bold">зачем:</span> {it.listen}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
