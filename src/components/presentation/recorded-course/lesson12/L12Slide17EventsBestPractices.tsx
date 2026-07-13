import { useIsMobile } from "@/hooks/use-mobile";

const practices = [
  {
    n: "01",
    t: "Отправляй данные с сервера, не только из браузера",
    tag: "ЕСТЬ ДУБЛЁР · ЕСТЬ ДАННЫЕ",
    body: "Блокировщики рекламы и новые правила iOS скрывают до половины покупок. Если отправлять данные напрямую с твоего сервера — их не заблокировать. Без этого ты видишь только половину правды.",
  },
  {
    n: "02",
    t: "Один номер — одна покупка",
    tag: "ОДНО СОБЫТИЕ · НЕ ДВА",
    body: "Браузер и сервер оба видят одну покупку. Дай каждой покупке свой номер — тогда система поймёт, что это одно и то же, и не посчитает дважды.",
  },
  {
    n: "03",
    t: "Всегда указывай сумму покупки",
    tag: "БЕЗ НИХ НЕТ ПРИБЫЛИ",
    body: "Если передаёшь только факт покупки, система ищет любую покупку. Если передаёшь сумму — ищет самые крупные. Для заявок указывай примерную ценность (например, $50 за качественного клиента).",
  },
  {
    n: "04",
    t: "Расставь приоритеты событий",
    tag: "8 ПРИОРИТЕТОВ НА ДОМЕН",
    body: "iOS ограничивает, сколько действий можно отследить. Зайди в настройки Events Manager и расставь приоритеты. Покупка — на первом месте. Просмотр страницы — последним или убери совсем.",
  },
  {
    n: "05",
    t: "Проверь всё до запуска",
    tag: "5 МИНУТ · СПАСАЕТ НЕДЕЛИ",
    body: "В Events Manager есть режим тестирования: проходишь сценарий покупки и видишь, приходят ли данные. Если нет — чинишь ДО запуска рекламы, а не после слива денег.",
  },
  {
    n: "06",
    t: "Сверяй данные из двух источников",
    tag: "ДВА ИСТОЧНИКА ПРАВДЫ",
    body: "Рекламный кабинет показывает клики. Google Analytics — что человек делал на сайте после. Добавь метки в ссылки рекламы, чтобы связывать оба источника.",
  },
];

const stack = [
  { tool: "Stripe", note: "Принимаешь оплаты через Stripe → события покупок отправляются автоматически" },
  { tool: "Supabase + Claude", note: "Свой бэк где Claude напишет код для отправки. См. Урок 6 — Supabase MCP" },
  { tool: "Stape", note: "Готовый сервис-посредник, $20/мес. Без своего сервера и кода." },
  { tool: "Shopify", note: "Встроенный канал Meta. Для магазинов на Shopify — один клик." },
];

export default function L12Slide17EventsBestPractices() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[18px]">
        <p className="text-[10px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[6px]">
          Топ-правила отслеживания · 18 мая 2026
        </p>
        <h2 className="font-display text-[19px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[6px]">
          Без этих шести шагов <span className="text-[hsl(var(--slide-gold))]">ты видишь половину правды</span>
        </h2>
        <div className="grid grid-cols-2 gap-[4px] mb-[5px]">
          {practices.map((p) => (
            <div key={p.n} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.25)] rounded-[5px] px-[7px] py-[3px]">
              <p className="text-[8px] font-bold text-[hsl(var(--slide-text))]">
                <span className="text-[hsl(var(--slide-gold))]">{p.n}.</span> {p.t}
              </p>
              <p className="text-[6px] uppercase tracking-[0.08em] text-[hsl(var(--slide-gold)/0.7)] mb-[2px]">{p.tag}</p>
              <p className="text-[7px] text-[hsl(var(--slide-text)/0.85)] leading-[1.35]">{p.body}</p>
            </div>
          ))}
        </div>
        <p className="text-[8.5px] font-bold text-[hsl(var(--slide-gold))] uppercase tracking-[0.1em] mb-[3px]">Готовые решения · без программиста</p>
        <div className="grid grid-cols-2 gap-[3px]">
          {stack.map((s) => (
            <div key={s.tool} className="bg-[hsl(var(--slide-gold)/0.06)] border-l border-[hsl(var(--slide-gold))] rounded-[4px] px-[6px] py-[2px]">
              <p className="text-[7.5px] font-bold text-[hsl(var(--slide-text))]">{s.tool}</p>
              <p className="text-[6.5px] text-[hsl(var(--slide-text)/0.85)] leading-[1.3]">{s.note}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[12px]">
        Топ-правила отслеживания · 18 мая 2026
      </p>
      <h2 className="font-display text-[42px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[14px] tracking-[-0.02em]">
        Без этих шести шагов <span className="text-[hsl(var(--slide-gold))]">ты видишь половину правды</span>
      </h2>
      <div className="grid grid-cols-3 gap-[14px] mb-[16px] max-w-[1700px]">
        {practices.map((p) => (
          <div key={p.n} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.3)] rounded-[10px] px-[20px] py-[12px]">
            <div className="flex items-baseline gap-[10px] mb-[2px]">
              <span className="font-display text-[22px] font-bold text-[hsl(var(--slide-gold))] leading-none">{p.n}</span>
              <span className="text-[16px] font-bold text-[hsl(var(--slide-text))] leading-[1.2]">{p.t}</span>
            </div>
            <p className="text-[10px] uppercase tracking-[0.12em] text-[hsl(var(--slide-gold)/0.75)] mb-[5px] ml-[32px]">{p.tag}</p>
            <p className="text-[13px] text-[hsl(var(--slide-text)/0.88)] leading-[1.45] ml-[32px]">{p.body}</p>
          </div>
        ))}
      </div>
      <p className="text-[14px] font-bold text-[hsl(var(--slide-gold))] uppercase tracking-[0.18em] mb-[10px]">Готовые решения · без программиста</p>
      <div className="grid grid-cols-4 gap-[14px] max-w-[1700px]">
        {stack.map((s) => (
          <div key={s.tool} className="bg-[hsl(var(--slide-gold)/0.06)] border-l-[4px] border-[hsl(var(--slide-gold))] rounded-[8px] px-[18px] py-[10px]">
            <p className="text-[16px] font-bold text-[hsl(var(--slide-text))] mb-[3px]">{s.tool}</p>
            <p className="text-[13.5px] text-[hsl(var(--slide-text)/0.88)] leading-[1.4]">{s.note}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
