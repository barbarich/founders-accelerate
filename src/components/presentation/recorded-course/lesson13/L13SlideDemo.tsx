import { useIsMobile } from "@/hooks/use-mobile";

const rules = [
  { n: "1", t: "Начни с его боли — его словами", d: "«Вы сказали, что теряете 8 часов в неделю. Сегодня покажу, как мы их забираем.» 30 секунд, и клиент понял, что показ про него." },
  { n: "2", t: "Сразу финал, а не тур по меню", d: "Первым экраном — готовый результат: отчёт, дашборд, готовый документ. Клиент должен подумать «хочу» в первые 90 секунд." },
  { n: "3", t: "Его сценарий, его цифры, его отделы", d: "Подготовь данные, похожие на его компанию. Демо-данные «ООО Ромашка» читаются как «мы с такими, как вы, не работали»." },
  { n: "4", t: "Один сценарий, не десять функций", d: "После первого «вау» — остановись и переходи к деньгам. Каждая лишняя функция размывает то, ради чего он пришёл." },
  { n: "5", t: "Цена — в конце", d: "Спросили раньше: «дойдём через пять минут, чтобы цифра была не в вакууме». И обязательно дойди — иначе это выглядит как уход от ответа." },
  { n: "6", t: "Запись отправь тому, кто будет продавать тебя внутри", d: "Без записи он перескажет коллегам неправильно. С записью — покажет. Это и есть разница между «мы подумаем» и «нам согласовали»." },
];

export default function L13SlideDemo() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[16px]">
        <p className="text-[9px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[4px]">
          Показ продукта
        </p>
        <h2 className="font-display text-[18px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[6px]">
          Один сценарий из разговора, <span className="text-[hsl(var(--slide-gold))]">а не экскурсия по кнопкам</span>
        </h2>
        <div className="space-y-[3px] mb-[6px]">
          {rules.map((r) => (
            <div key={r.n} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[4px] px-[7px] py-[3px]">
              <div className="flex items-baseline gap-[5px]">
                <span className="text-[9px] font-bold text-[hsl(var(--slide-gold))]">{r.n}</span>
                <span className="text-[8.5px] font-bold text-[hsl(var(--slide-text))]">{r.t}</span>
              </div>
              <p className="text-[7px] text-[hsl(var(--slide-text-muted))] leading-[1.4] ml-[14px]">{r.d}</p>
            </div>
          ))}
        </div>
        <div className="bg-[hsl(var(--slide-gold)/0.1)] border-l-2 border-[hsl(var(--slide-gold))] px-[10px] py-[6px]">
          <p className="text-[8.5px] font-bold text-[hsl(var(--slide-text))] leading-[1.4]">
            И закрой петлю: «Помните, вы сказали про 8 часов? Вот так мы их забираем». Клиент сам соединяет свою проблему с твоим продуктом — тогда показ продаёт.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[12px]">
        Показ продукта · 6 правил
      </p>
      <h2 className="font-display text-[52px] font-bold text-[hsl(var(--slide-text))] leading-[1.05] mb-[20px] tracking-[-0.02em] max-w-[1700px]">
        Один сценарий из разговора, <span className="text-[hsl(var(--slide-gold))]">а не экскурсия по кнопкам</span>
      </h2>
      <div className="space-y-[9px] max-w-[1700px] mb-[18px]">
        {rules.map((r) => (
          <div key={r.n} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[10px] px-[24px] py-[11px]">
            <div className="flex items-baseline gap-[14px] mb-[2px]">
              <span className="font-display text-[26px] font-bold text-[hsl(var(--slide-gold))] leading-none">{r.n}</span>
              <span className="text-[21px] font-bold text-[hsl(var(--slide-text))]">{r.t}</span>
            </div>
            <p className="text-[17px] text-[hsl(var(--slide-text-muted))] leading-[1.45] ml-[40px]">{r.d}</p>
          </div>
        ))}
      </div>
      <div className="bg-[hsl(var(--slide-gold)/0.1)] border-l-[4px] border-[hsl(var(--slide-gold))] px-[32px] py-[18px] max-w-[1700px]">
        <p className="text-[26px] font-bold text-[hsl(var(--slide-text))] leading-[1.3]">
          И закрой петлю: «Помните, вы сказали про 8 часов? Вот так мы их забираем». Клиент сам соединяет свою проблему с твоим продуктом — только тогда показ продаёт.
        </p>
      </div>
    </div>
  );
}
