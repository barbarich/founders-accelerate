import FOM1SlideBase from "./FOM1SlideBase";

const tasks = [
  ["Выбрать один вертикал (решение до пятницы)", "Из трёх: local services / e-commerce / B2B SaaS. Зафиксировать письменно."],
  ["Конкурентный анализ", "Perplexity по выбранному вертикалу + 3 негативных отзыва у каждого прямого конкурента. Цель: понять, где Profound/AthenaHQ слабы именно в твоём вертикале."],
  ["5 интервью по Mom Test", "С владельцами или маркетологами выбранного вертикала. Записи в tl;dv обязательны."],
  ["3 варианта позиционирования через результат", "По формуле, для одного выбранного ICP. Тест 5 секунд на трёх знакомых."],
  ["К воскресенью в Telegram", "Новое позиционирование одной строкой + список 5 paid validation conversations на следующую неделю."],
];

export default function FOM1Slide23MikhaelHomework() {
  return (
    <FOM1SlideBase
      slide={23}
      eyebrow="Задание · участник 1"
      title="Михаэль — твоё ДЗ на неделю"
      subtitle="Что приносишь на С2"
    >
      <div className="space-y-[8px] md:space-y-[12px] max-w-[1800px] text-[10px] md:text-[16px]">
        {tasks.map(([t, d], i) => (
          <div key={i} className="flex gap-[10px]">
            <span className="font-mono text-[hsl(var(--slide-gold))] font-bold w-[20px]">{i + 1}️⃣</span>
            <div>
              <p className="font-semibold text-[hsl(var(--slide-text))]">{t}</p>
              <p className="text-[hsl(var(--slide-text-muted))] mt-[2px]">{d}</p>
            </div>
          </div>
        ))}
      </div>
    </FOM1SlideBase>
  );
}
