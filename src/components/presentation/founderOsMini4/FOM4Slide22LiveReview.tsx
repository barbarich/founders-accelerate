import FOM4SlideBase from "./FOM4SlideBase";

const checks = [
  { tag: "Экран 1 · Обещание", q: "Прогони тест на 5 секунд: чужой человек понял, что получит? Ответ «я получу X» — работает. «Это какая-то платформа для…» — переписываем." },
  { tag: "Экран 2 · Действие", q: "Сколько шагов до первого результата? Где стоит стена регистрации, которую можно вынести после первого «вау»?" },
  { tag: "Экран 3 · Возврат", q: "Есть одна конкретная причина открыть продукт завтра? Если нет — какую из 5 механик встроишь первой?" },
  { tag: "3 точки спотыкания", q: "Назови три места, где спотыкались группа и Claude. Какую правку делаешь по каждой — прямо сейчас или к С5?" },
];

export default function FOM4Slide22LiveReview() {
  return (
    <FOM4SlideBase
      slide={22}
      eyebrow="Разбор по готовности · по очереди"
      title="Один чек-лист на всех — три экрана"
      subtitle="Показываешь продукт (или описание и скрины) — группа проходит по рамке. Нет live-версии? Разбираем по той же четвёрке вопросов."
    >
      <div className="space-y-[8px] md:space-y-[14px] max-w-[1800px] text-[12px] md:text-[22px]">
        {checks.map((c, i) => (
          <div key={i} className="grid grid-cols-[1fr] md:grid-cols-[280px_1fr] gap-[4px] md:gap-[20px] items-baseline border-b border-[hsl(var(--slide-border)/0.2)] pb-[6px] md:pb-[10px]">
            <span className="text-[hsl(var(--slide-gold))] uppercase tracking-[0.12em] text-[10px] md:text-[16px] font-semibold">{c.tag}</span>
            <p className="text-[hsl(var(--slide-text))] leading-[1.4]">{c.q}</p>
          </div>
        ))}
      </div>
      <div className="mt-[12px] md:mt-[18px] border-l-[4px] border-[hsl(var(--slide-gold))] pl-[12px] md:pl-[16px] max-w-[1800px] text-[11px] md:text-[22px]">
        <p>💡 Уходишь с одним приоритетом на неделю: какой из трёх экранов чинишь первым. Не три задачи — одна, самая дырявая.</p>
      </div>
    </FOM4SlideBase>
  );
}
