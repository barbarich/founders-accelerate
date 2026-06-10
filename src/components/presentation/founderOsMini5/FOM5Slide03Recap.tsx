import FOM5SlideBase from "./FOM5SlideBase";

const recap = [
  { tag: "На С1–С2 определили", text: "Кто клиент, за что платит, цену и позиционирование. Это обещание и язык клиента." },
  { tag: "На С3 собрали", text: "Live лендинг с измеримой целью + работающий MVP (Lovable + Claude Code + Supabase)." },
  { tag: "На С4 починили", text: "Первые 60 секунд: 3 экрана и одна встроенная механика возврата. Продукт удерживает." },
  { tag: "Что делаем сегодня", text: "Собираем упаковку трафика: AI-креативы и говорящий аватар. Затем вживую запускаем кампанию в Meta." },
  { tag: "Зачем это для С6", text: "Через 7 дней — «Продажи». Кампания приведёт людей, а закрывать первые сделки будем уже руками." },
];

export default function FOM5Slide03Recap() {
  return (
    <FOM5SlideBase
      slide={3}
      eyebrow="Мост из С4 в С5"
      title="Где мы и куда идём"
      subtitle="Продукт готов и удерживает. Сегодня впервые ведём в него платный трафик — но сначала собираем то, чем кормим алгоритм: креативы и аватара."
    >
      <div className="space-y-[8px] md:space-y-[14px] max-w-[1800px] text-[12px] md:text-[22px]">
        {recap.map((r, i) => (
          <div key={i} className="grid grid-cols-[110px_1fr] md:grid-cols-[260px_1fr] gap-[8px] md:gap-[20px] items-baseline border-b border-[hsl(var(--slide-border)/0.2)] pb-[6px] md:pb-[10px]">
            <span className="text-[hsl(var(--slide-gold))] uppercase tracking-[0.15em] text-[10px] md:text-[16px] font-medium">{r.tag}</span>
            <p className="text-[hsl(var(--slide-text))] leading-[1.4]">{r.text}</p>
          </div>
        ))}
      </div>
    </FOM5SlideBase>
  );
}
