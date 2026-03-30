import { useIsMobile } from "@/hooks/use-mobile";

const sections = [
  {
    num: "01",
    icon: "🎯",
    title: "Hero",
    from: "Встреча 2",
    text: "Формула результата + CTA + короткое видео или скриншот продукта",
  },
  {
    num: "02",
    icon: "⭐",
    title: "Social proof",
    from: "Новое",
    text: "Лого клиентов или цифры: «50+ команд», «обработано 10K заявок». Нет клиентов — покажите упоминания, бету, количество пользователей",
  },
  {
    num: "03",
    icon: "😤",
    title: "Боли",
    from: "Встреча 1",
    text: "3 боли из custdev — прямые цитаты клиентов, не ваши формулировки",
  },
  {
    num: "04",
    icon: "✨",
    title: "Решение",
    from: "Встреча 2",
    text: "MUST HAVE фичи из MoSCoW → 3 преимущества с реальными скриншотами UI",
  },
  {
    num: "05",
    icon: "🔢",
    title: "Как работает",
    from: "Встреча 2",
    text: "3 шага от проблемы к результату. Идеально — с GIF или коротким видео каждого шага",
  },
  {
    num: "06",
    icon: "💬",
    title: "Отзывы",
    from: "Новое",
    text: "Реальные имена + фото + конкретный результат: «сократили отток на 40%». Нет отзывов — цитата из custdev-интервью",
  },
  {
    num: "07",
    icon: "🚀",
    title: "CTA-секция",
    from: "Встреча 2",
    text: "«Попробовать бесплатно» / «Забронировать демо» / «Получить доступ». Рядом — усилитель: бесплатный период, гарантия, бейдж безопасности",
  },
  {
    num: "08",
    icon: "❓",
    title: "FAQ + CTA",
    from: "Новое",
    text: "5–7 вопросов из реальных возражений клиентов + финальная кнопка с усилителем",
  },
];

export default function M3Slide09LandingFromFrameworks() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[24px]">
        <p className="text-[10px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[4px]">
          Структура 2026
        </p>
        <h2 className="font-display text-[20px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[4px]">
          8 блоков лендинга
        </h2>
        <p className="text-[9px] text-[hsl(var(--slide-text-muted))] mb-[10px]">
          5 блоков у вас уже готовы. 3 новых — разберём сейчас.
        </p>
        <div className="space-y-[5px]">
          {sections.map((s, i) => (
            <div
              key={i}
              className={`flex items-start gap-[6px] rounded-[6px] px-[8px] py-[5px] border ${
                s.from === "Новое"
                  ? "bg-[hsl(var(--slide-gold)/0.08)] border-[hsl(var(--slide-gold)/0.25)]"
                  : "bg-[hsl(var(--slide-bg-alt))] border-[hsl(var(--slide-border)/0.3)]"
              }`}
            >
              <span className="text-[12px] shrink-0 mt-[1px]">{s.icon}</span>
              <div className="min-w-0">
                <div className="flex items-center gap-[4px]">
                  <span className="font-mono text-[7px] text-[hsl(var(--slide-gold)/0.5)]">{s.num}</span>
                  <span className="text-[10px] font-semibold text-[hsl(var(--slide-text))]">{s.title}</span>
                  {s.from === "Новое" && (
                    <span className="text-[7px] bg-[hsl(var(--slide-gold)/0.2)] text-[hsl(var(--slide-gold))] px-[4px] py-[1px] rounded-full font-medium">
                      NEW
                    </span>
                  )}
                </div>
                <p className="text-[8px] text-[hsl(var(--slide-text-muted))] leading-[1.35]">{s.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[100px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[12px]">
        Структура 2026
      </p>
      <h2 className="font-display text-[52px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[8px]">
        8 блоков лендинга
      </h2>
      <p className="text-[22px] text-[hsl(var(--slide-text-muted))] mb-[36px]">
        5 блоков у вас уже готовы с прошлых встреч. 3 новых — разберём сейчас.
      </p>

      <div className="grid grid-cols-2 gap-x-[20px] gap-y-[16px] max-w-[1300px]">
        {sections.map((s, i) => (
          <div
            key={i}
            className={`flex items-start gap-[14px] rounded-[12px] px-[22px] py-[16px] border ${
              s.from === "Новое"
                ? "bg-[hsl(var(--slide-gold)/0.06)] border-[hsl(var(--slide-gold)/0.25)]"
                : "bg-[hsl(var(--slide-bg-alt))] border-[hsl(var(--slide-border)/0.3)]"
            }`}
          >
            <span className="text-[28px] shrink-0 mt-[2px]">{s.icon}</span>
            <div className="min-w-0">
              <div className="flex items-center gap-[8px] mb-[4px]">
                <span className="font-mono text-[15px] text-[hsl(var(--slide-gold)/0.4)]">{s.num}</span>
                <span className="text-[20px] font-semibold text-[hsl(var(--slide-text))]">{s.title}</span>
                {s.from === "Новое" ? (
                  <span className="text-[12px] bg-[hsl(var(--slide-gold)/0.15)] text-[hsl(var(--slide-gold))] px-[8px] py-[2px] rounded-full font-medium">
                    NEW
                  </span>
                ) : (
                  <span className="text-[12px] text-[hsl(var(--slide-text-muted)/0.5)]">{s.from}</span>
                )}
              </div>
              <p className="text-[16px] text-[hsl(var(--slide-text-muted))] leading-[1.45]">{s.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
