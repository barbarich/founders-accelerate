import FOM4SlideBase from "./FOM4SlideBase";

const recap = [
  { tag: "На С1–С2 определили", text: "Кто клиент, за что платит, цену и MUST HAVE. Это обещание продукта." },
  { tag: "На С3 собрали", text: "Live лендинг с 8 блоками + работающий MVP со сквозным флоу в Lovable + Claude Code + Supabase." },
  { tag: "С чем пришли на С4", text: "Ссылка на живой лендинг · ссылка на MVP · 3–5 точек, где спотыкались живые люди и Claude." },
  { tag: "Что делаем сегодня", text: "Проходим продукт каждого как новый юзер. Чиним первые 3 экрана: обещание → действие → причина вернуться." },
  { tag: "Зачем это для С5", text: "Через 7 дней — «Маркетинг». Гнать трафик в продукт, который не удерживает, — слив бюджета. Сначала чиним 60 секунд." },
];

export default function FOM4Slide03Recap() {
  return (
    <FOM4SlideBase
      slide={3}
      eyebrow="Мост из С3 в С4"
      title="Где мы и куда идём"
      subtitle="С1–С2 дали обещание. С3 дал продукт. С4 делает так, чтобы человек дошёл до ценности и захотел вернуться."
    >
      <div className="space-y-[8px] md:space-y-[14px] max-w-[1800px] text-[12px] md:text-[22px]">
        {recap.map((r, i) => (
          <div key={i} className="grid grid-cols-[110px_1fr] md:grid-cols-[260px_1fr] gap-[8px] md:gap-[20px] items-baseline border-b border-[hsl(var(--slide-border)/0.2)] pb-[6px] md:pb-[10px]">
            <span className="text-[hsl(var(--slide-gold))] uppercase tracking-[0.15em] text-[10px] md:text-[16px] font-medium">{r.tag}</span>
            <p className="text-[hsl(var(--slide-text))] leading-[1.4]">{r.text}</p>
          </div>
        ))}
      </div>
    </FOM4SlideBase>
  );
}
