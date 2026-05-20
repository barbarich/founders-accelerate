import FOM2SlideBase from "./FOM2SlideBase";

const recap = [
  { tag: "На С1 определили", text: "Кто клиент, за что платит, формула позиционирования и 4 теста гипотезы." },
  { tag: "С чем пришли на С2", text: "Гипотеза позиционирования и сигналы из интервью. Двух разговоров достаточно, чтобы начать." },
  { tag: "Что делаем сегодня", text: "Переводим позиционирование в цену и в минимальный скоуп MVP." },
  { tag: "Зачем это для С3", text: "Через 5 дней — «Build & Land». Цена и скоуп из С2 становятся ТЗ для лендинга и MVP." },
];

export default function FOM2Slide03Recap() {
  return (
    <FOM2SlideBase
      slide={3}
      eyebrow="Мост из С1 в С2"
      title="Где мы и куда идём"
      subtitle="С1 дал позиционирование. С2 превращает его в цену и скоуп MVP."
    >
      <div className="space-y-[8px] md:space-y-[14px] max-w-[1800px] text-[12px] md:text-[22px]">
        {recap.map((r, i) => (
          <div key={i} className="grid grid-cols-[110px_1fr] md:grid-cols-[220px_1fr] gap-[8px] md:gap-[20px] items-baseline border-b border-[hsl(var(--slide-border)/0.2)] pb-[6px] md:pb-[10px]">
            <span className="text-[hsl(var(--slide-gold))] uppercase tracking-[0.15em] text-[10px] md:text-[16px] font-medium">{r.tag}</span>
            <p className="text-[hsl(var(--slide-text))] leading-[1.4]">{r.text}</p>
          </div>
        ))}
      </div>
    </FOM2SlideBase>
  );
}
