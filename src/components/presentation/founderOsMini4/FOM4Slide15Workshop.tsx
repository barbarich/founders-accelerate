import FOM4SlideBase from "./FOM4SlideBase";

const phases = [
  {
    time: "0–3 мин",
    title: "Открываем твой продукт",
    body: "Делишься экраном. Без объяснений и предисловий — как будто человек попал с рекламы. Группа открывает первый экран и засекает 5 секунд.",
  },
  {
    time: "3–10 мин",
    title: "Проходим как новый юзер",
    body: "Группа вслух проговаривает: что обещано, какое первое действие, дошли ли до результата, есть ли причина вернуться. Ты молчишь и записываешь каждую точку спотыкания.",
  },
  {
    time: "10–15 мин",
    title: "Чиним первый экран прямо сейчас",
    body: "Берём самый сломанный из трёх экранов. Переписываем обещание по формуле / убираем стену регистрации / добавляем empty state — через Lovable или Claude Code вживую.",
  },
];

export default function FOM4Slide15Workshop() {
  return (
    <FOM4SlideBase
      slide={15}
      eyebrow="Workshop · правила и тайминги"
      title="Проходим продукт вживую — как новый пользователь"
      subtitle="Демонстрируешь экран. Молчишь. Группа и Михаэль проходят твой продукт первый раз и фиксируют, где спотыкаются."
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

      <div className="mt-[12px] md:mt-[20px] border-l-[4px] border-[hsl(var(--slide-gold))] pl-[12px] md:pl-[16px] max-w-[1800px] text-[11px] md:text-[22px]">
        <p>💡 Правило разбора: автор молчит, пока группа проходит продукт. Первое объяснение фаундера — это первое, чего не будет у реального юзера.</p>
      </div>
    </FOM4SlideBase>
  );
}
