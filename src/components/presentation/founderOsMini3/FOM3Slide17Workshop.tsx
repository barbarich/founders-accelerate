import FOM3SlideBase from "./FOM3SlideBase";

const phases = [
  {
    time: "0–15 мин",
    title: "Лендинг в Lovable",
    body: "Открываем Lovable. Вставляем промпт из слайда «Промпт для Lovable» с подставленными данными (позиционирование из С1, цена и тарифы из С2, стиль из каталога). Жмём enter. Получаем 8-блочный лендинг.",
  },
  {
    time: "15–45 мин",
    title: "MVP-скелет",
    body: "Claude Code. /think → Plan Mode. План архитектуры (роуты, схема БД, ключевые компоненты) под MUST HAVE. Проверяем. Только потом — код. Параллельно: Supabase project + Auth.",
  },
  {
    time: "45–75 мин",
    title: "Первый сквозной флоу",
    body: "От входа до основного действия. Один путь, без вариаций. Auth → главный экран → ключевая фича → результат. Всё остальное — заглушки. Можно показать кнопку, нельзя — пустой экран.",
  },
  {
    time: "75–95 мин",
    title: "Аналитика и оплата",
    body: "GA + пиксели вставляем промптом из слайда «Аналитика». Если есть Pricing — добавляем Stripe Payment Link (в Израиле — Grow/Meshulam) на одну кнопку. Без вебхуков и подписок.",
  },
  {
    time: "95–120 мин",
    title: "Демо",
    body: "По очереди показываем что получилось. 2 минуты на каждого: лендинг → продукт → ключевая фича. Группа фиксирует где спотыкаемся.",
  },
];

export default function FOM3Slide17Workshop() {
  return (
    <FOM3SlideBase
      slide={17}
      eyebrow="Workshop · правила и тайминги"
      title="Строим вживую — следующие 2 часа"
      subtitle="Параллельно. У каждого открыт Lovable + Claude Code + Supabase. Я переключаюсь между двумя экранами."
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
      <div className="mt-[10px] md:mt-[16px] border-l-[4px] border-[hsl(var(--slide-gold))] pl-[12px] md:pl-[16px] max-w-[1800px] text-[11px] md:text-[20px]">
        <p>💡 Правило: не доделываешь — не докручиваешь. Один сквозной флоу, который работает, бьёт пять полудоделанных экранов.</p>
      </div>
    </FOM3SlideBase>
  );
}
