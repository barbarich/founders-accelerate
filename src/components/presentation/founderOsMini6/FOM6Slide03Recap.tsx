import FOM6SlideBase from "./FOM6SlideBase";

const recap = [
  { tag: "С1–С2 · фундамент", text: "Кто клиент, за что платит, цена и позиционирование. Это язык, на котором ты продаёшь." },
  { tag: "С3 · продукт", text: "Live лендинг с измеримой целью + работающий MVP (Lovable + Claude Code + Supabase)." },
  { tag: "С4 · удержание", text: "Первые 60 секунд: 3 экрана и встроенная механика возврата. Продукт держит человека." },
  { tag: "С5 · трафик", text: "AI-креативы, аватар и запущенная кампания в Meta. Заявки начали капать." },
  { tag: "С6 · сегодня", text: "Есть кому продавать. Учимся доводить заявку до денег: путь сделки, звонок, возражения, после «да»." },
];

export default function FOM6Slide03Recap() {
  return (
    <FOM6SlideBase
      slide={3}
      eyebrow="Где мы · мост из С5 в финал"
      title="Продукт есть, трафик пошёл — осталось продать"
      subtitle="За 5 сессий ты собрал продукт от позиционирования до запущенной рекламы. Не хватает одного звена: руками довести интерес до оплаты. Сегодня закрываем именно его."
    >
      <div className="space-y-[8px] md:space-y-[14px] max-w-[1800px] text-[12px] md:text-[22px]">
        {recap.map((r, i) => (
          <div key={i} className="grid grid-cols-[110px_1fr] md:grid-cols-[260px_1fr] gap-[8px] md:gap-[20px] items-baseline border-b border-[hsl(var(--slide-border)/0.2)] pb-[6px] md:pb-[10px]">
            <span className="text-[hsl(var(--slide-gold))] uppercase tracking-[0.15em] text-[10px] md:text-[16px] font-medium">{r.tag}</span>
            <p className="text-[hsl(var(--slide-text))] leading-[1.4]">{r.text}</p>
          </div>
        ))}
      </div>
    </FOM6SlideBase>
  );
}
