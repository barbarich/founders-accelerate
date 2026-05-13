import FOM1SlideBase from "./FOM1SlideBase";

const tasks = [
  ["Выбрать одно направление", "Из шести. Решение к воскресенью. Фиксируем письменно. Возвращаться к остальным нельзя."],
  ["Конкурентный анализ", "Perplexity по выбранному направлению. Карта пространства: кто уже играет, где empty space, где Notion/Calm/ChatGPT уже закрывают потребность бесплатно."],
  ["7 интервью по Mom Test", "С HR / People Ops / Innovation Lead в tech-компаниях 50–500 человек. Записи в tl;dv обязательны."],
  ["3 варианта позиционирования через результат", "Для выбранного направления. Тест 5 секунд на трёх знакомых."],
  ["К воскресенью в Telegram", "Новое позиционирование + список 5 компаний для pilot conversations + один из тестов: есть ли реальная B2B-модель (subscription per company / per seat / outcome-based — не реклама)."],
];

export default function FOM1Slide25MargaritaHomework() {
  return (
    <FOM1SlideBase
      slide={25}
      eyebrow="Задание · участник 2"
      title="Маргарита — твоё ДЗ на неделю"
      subtitle="Что приносишь на С2"
    >
      <div className="space-y-[8px] md:space-y-[12px] max-w-[1800px] text-[12px] md:text-[22px]">
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
