import FOM4SlideBase from "./FOM4SlideBase";

const mechanics = [
  {
    name: "Прогресс и streak",
    idea: "Не дать разорвать цепочку",
    how: "Есть действие, которое логично повторять (запись, чек-ин, урок)? Покажи цепочку дней и сделай страшно её потерять. Duolingo держится на этом.",
  },
  {
    name: "Незаконченное дело",
    idea: "Мозг не выносит открытых задач",
    how: "Разбей путь до ценности на 5 шагов, покажи прогресс ✓ ✓ ◯ ◯ ◯. Каждый возврат закрывает один шаг и двигает процент. Эффект Зейгарник.",
  },
  {
    name: "Социальный долг",
    idea: "Кто-то ждёт ответа",
    how: "Если в продукте 2+ человека (ментор, соавтор, клиент) — введи ответы, реакции, подтверждения. Push становится приглашением от живого человека, а не рекламой.",
  },
  {
    name: "Свежий контент к возврату",
    idea: "Если ничего не изменилось — возвращаться не на что",
    how: "AI работает на тебя 24/7. Ночью генерируй персональную подборку под пользователя. Один новый блок к утру = причина открыть продукт.",
  },
  {
    name: "Внешний дедлайн",
    idea: "Календарь возвращает лучше маркетолога",
    how: "Привяжи продукт к реальной дате (сессия, просмотр, дедлайн). Reminder + .ics в письмо. Не ты пишешь «вернись» — реальность напоминает за тебя.",
  },
];

export default function FOM4Slide20Mechanics() {
  return (
    <FOM4SlideBase
      slide={20}
      eyebrow="5 механик возврата · встроены в продукт"
      title="Причина вернуться — это не push. Это структура продукта."
      subtitle="Каждая механика закрывает всю петлю Триггер → Действие → Награда → Инвестиция. Стек один: Supabase + cron + OneSignal / SendPulse. Настройка вечера, не месяца."
    >
      <div className="max-w-[1800px] border border-[hsl(var(--slide-gold)/0.2)] rounded-[14px] overflow-hidden">
        {mechanics.map((m, i) => (
          <div
            key={m.name}
            className={`grid grid-cols-[1fr] md:grid-cols-[260px_280px_1fr] gap-[2px] md:gap-[24px] px-[12px] md:px-[28px] py-[8px] md:py-[12px] ${i !== mechanics.length - 1 ? "border-b border-[hsl(var(--slide-border)/0.15)]" : ""} ${i % 2 === 0 ? "bg-[hsl(var(--slide-bg-alt))]" : ""}`}
          >
            <p className="text-[13px] md:text-[20px] font-bold text-[hsl(var(--slide-text))] leading-[1.2]">
              <span className="font-mono text-[hsl(var(--slide-gold))] mr-[8px]">{i + 1}</span>{m.name}
            </p>
            <p className="text-[11px] md:text-[17px] text-[hsl(var(--slide-gold))] leading-[1.3]">{m.idea}</p>
            <p className="text-[10px] md:text-[16px] text-[hsl(var(--slide-text-muted))] leading-[1.4]">{m.how}</p>
          </div>
        ))}
      </div>
      <div className="mt-[12px] md:mt-[18px] border-l-[4px] border-[hsl(var(--slide-gold))] pl-[12px] md:pl-[16px] max-w-[1800px] text-[11px] md:text-[22px]">
        <p>💡 Возьми ОДНУ механику, которая логична для твоего продукта. Не пять. Одну — но доведённую до конца. Остальные добавишь, когда первая заработает.</p>
      </div>
    </FOM4SlideBase>
  );
}
