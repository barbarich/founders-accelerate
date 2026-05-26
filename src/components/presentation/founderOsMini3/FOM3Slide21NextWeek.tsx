import FOM3SlideBase from "./FOM3SlideBase";

const topics = [
  { tag: "Тема", text: "Onboarding & Aha — первые 60 секунд в продукте, путь к ценности, retention." },
  { tag: "Что разбираем", text: "Почему 70% уходят в первую минуту. Анатомия onboarding (Notion, Canva, Duolingo). Aha-moment — минимум шагов до первой ценности." },
  { tag: "Что делаем вживую", text: "Проходим продукт каждого как новый пользователь. Фиксируем где теряемся, что непонятно, что бесит. Переделываем первые 3 экрана прямо на встрече." },
  { tag: "Что вы приносите", text: "Live лендинг · работающий MVP · 3 точки спотыкания от живых людей и Claude. Этот материал станет основой разбора." },
];

export default function FOM3Slide21NextWeek() {
  return (
    <FOM3SlideBase
      slide={21}
      eyebrow="Что будет на С4"
      title="Через 7 дней — Onboarding & Aha"
      subtitle="Лендинг приводит. MVP удерживает. С4 — про то, как сделать первые 60 секунд продукта такими, чтобы человек захотел остаться."
    >
      <div className="space-y-[8px] md:space-y-[14px] max-w-[1800px] text-[12px] md:text-[22px]">
        {topics.map((r, i) => (
          <div key={i} className="grid grid-cols-[110px_1fr] md:grid-cols-[220px_1fr] gap-[8px] md:gap-[20px] items-baseline border-b border-[hsl(var(--slide-border)/0.2)] pb-[6px] md:pb-[10px]">
            <span className="text-[hsl(var(--slide-gold))] uppercase tracking-[0.15em] text-[10px] md:text-[16px] font-medium">{r.tag}</span>
            <p className="text-[hsl(var(--slide-text))] leading-[1.4]">{r.text}</p>
          </div>
        ))}
      </div>
    </FOM3SlideBase>
  );
}
