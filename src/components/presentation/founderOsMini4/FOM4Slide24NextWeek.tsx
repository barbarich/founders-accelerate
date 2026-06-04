import FOM4SlideBase from "./FOM4SlideBase";

const topics = [
  { tag: "Тема", text: "Маркетинг с нуля — первые пользователи без рекламного бюджета." },
  { tag: "Что разбираем", text: "Где живут твои первые юзеры (Product Hunt, Reddit, Telegram, LinkedIn, нишевые сообщества). Воронка от первого касания до регистрации. Building in public как замена бюджету." },
  { tag: "Что делаем вживую", text: "Выбираем 1–2 канала под каждый продукт. Пишем первое сообщение и первый пост вместе — под язык клиента из С1." },
  { tag: "Что вы приносите", text: "Продукт с почищенными первыми 60 секундами + одна встроенная механика возврата. Теперь в него не стыдно вести людей." },
];

export default function FOM4Slide24NextWeek() {
  return (
    <FOM4SlideBase
      slide={24}
      eyebrow="Что будет на С5"
      title="Через 7 дней — Маркетинг"
      subtitle="Продукт удерживает. Дальше — как привести в него первых людей без бюджета. С5 про каналы, воронку и первое сообщение."
    >
      <div className="space-y-[8px] md:space-y-[14px] max-w-[1800px] text-[12px] md:text-[22px]">
        {topics.map((r, i) => (
          <div key={i} className="grid grid-cols-[110px_1fr] md:grid-cols-[220px_1fr] gap-[8px] md:gap-[20px] items-baseline border-b border-[hsl(var(--slide-border)/0.2)] pb-[6px] md:pb-[10px]">
            <span className="text-[hsl(var(--slide-gold))] uppercase tracking-[0.15em] text-[10px] md:text-[16px] font-medium">{r.tag}</span>
            <p className="text-[hsl(var(--slide-text))] leading-[1.4]">{r.text}</p>
          </div>
        ))}
      </div>
    </FOM4SlideBase>
  );
}
