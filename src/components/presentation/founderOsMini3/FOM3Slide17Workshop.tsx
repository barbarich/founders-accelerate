import FOM3SlideBase from "./FOM3SlideBase";

const phases = [
  {
    time: "0–5 мин",
    title: "Запуск задания",
    body: "Открываем Lovable. Вставляем промпт из слайда «Промпт для Lovable» с подставленными данными (позиционирование из С1, цена и тарифы из С2, стиль из каталога). Жмём enter и начинаем строить 8-блочный лендинг.",
  },
  {
    time: "5–15 мин",
    title: "Самостоятельная работа",
    body: "Каждый работает над своим лендингом самостоятельно. Подключаем цвета, текст, кнопку CTA. Главное — получить живую страницу, которую можно показать.",
  },
  {
    time: "15–25 мин",
    title: "Презентация результатов",
    body: "По очереди показываем лендинг: что получилось, что не успели, где застряли. 1–2 минуты на каждого. Группа фиксирует, где спотыкаемся — это материал для доработки дома.",
  },
];

const homework = [
  "MVP-скелет — Claude Code, /think → Plan Mode. План архитектуры (роуты, схема БД, ключевые компоненты) под MUST HAVE. Только потом — код.",
  "Первый сквозной флоу — от входа до основного действия. Один путь, без вариаций. Auth → главный экран → ключевая фича → результат.",
  "Аналитика и оплата — GA + пиксели. Если есть Pricing — Stripe Payment Link (в Израиле — Grow/Meshulam) на одну кнопку.",
];

export default function FOM3Slide17Workshop() {
  return (
    <FOM3SlideBase
      slide={17}
      eyebrow="Workshop · правила и тайминги"
      title="Строим лендинг вживую — 25 минут"
      subtitle="Сейчас каждый делает свой лендинг в Lovable. Остальное — самостоятельная домашняя работа после встречи."
    >
      <div className="space-y-[6px] md:space-y-[10px] max-w-[1800px] text-[12px] md:text-[22px]">
        {phases.map((p, i) => (
          <div key={i} className="grid grid-cols-[110px_1fr] md:grid-cols-[180px_1fr] gap-[8px] md:gap-[18px] items-baseline border-b border-[hsl(var(--slide-border)/0.2)] pb-[5px] md:pb-[8px]">
            <span className="text-[hsl(var(--slide-gold))] font-mono text-[10px] md:text-[16px]">{p.time}</span>
            <div>
              <p className="font-semibold text-[hsl(var(--slide-text))]">{p.title}</p>
              <p className="text-[hsl(var(--slide-text-muted))] mt-[2px] leading-[1.4]">{p.body}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-[10px] md:mt-[14px]">
        <p className="text-[11px] md:text-[18px] font-semibold text-[hsl(var(--slide-text))] mb-[4px] md:mb-[6px]">🏠 Дома — самостоятельно:</p>
        <div className="space-y-[4px] md:space-y-[6px] max-w-[1800px] text-[11px] md:text-[18px]">
          {homework.map((h, i) => (
            <div key={i} className="flex gap-[8px] md:gap-[12px] items-start">
              <span className="text-[hsl(var(--slide-gold))] font-mono font-bold shrink-0">{i + 1}.</span>
              <p className="text-[hsl(var(--slide-text-muted))] leading-[1.4]">{h}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-[10px] md:mt-[16px] border-l-[4px] border-[hsl(var(--slide-gold))] pl-[12px] md:pl-[16px] max-w-[1800px] text-[11px] md:text-[20px]">
        <p>💡 Правило: не доделываешь — не докручиваешь. Один работающий лендинг бьёт пять полудоделанных экранов. MVP — дома, в своём темпе.</p>
      </div>
    </FOM3SlideBase>
  );
}
