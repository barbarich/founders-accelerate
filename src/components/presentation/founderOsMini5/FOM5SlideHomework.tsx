import FOM5SlideBase from "./FOM5SlideBase";

const tasks = [
  ["Сгенерировать 20–30 креативов", "Промпт «30 креативов» → топ концепты в Higgsfield / Nano Banana / Canva. Половина статика, половина видео. Объём, не один «идеальный»."],
  ["Снять 3–5 аватар-роликов", "Промпт «5 скриптов» → HeyGen / Arcads. 3–5 говорящих видео по 30 секунд под разные hook. Это твои самые сильные креативы."],
  ["Запустить кампанию в Meta", "Advantage+ Audience + Placements, Dynamic Creative, бюджет $20–30/день, пиксель и событие выбраны. Кнопка Publish нажата."],
  ["Не трогать 7 дней", "Learning phase. Каждая правка сбрасывает обучение. Сидишь на руках, фиксируешь baseline, готовишь следующую партию креативов."],
  ["К С6 в Telegram до встречи", "Скрин запущенной кампании · сколько креативов и аватар-роликов залил · CPM/CTR на 3-й день. На С6 разбираем цифры и переходим к продажам."],
];

export default function FOM5SlideHomework() {
  return (
    <FOM5SlideBase
      slide={23}
      eyebrow="Домашнее задание · к С6 «Продажи»"
      title="Что приносим через 7 дней"
      subtitle="Кампания запущена и проходит learning phase. Креативы и аватар-ролики залиты. Приходим с первыми цифрами — и переходим к закрытию сделок."
    >
      <div className="space-y-[8px] md:space-y-[12px] max-w-[1800px] text-[12px] md:text-[22px]">
        {tasks.map(([t, d], i) => (
          <div key={i} className="flex gap-[10px] md:gap-[16px]">
            <span className="font-mono text-[hsl(var(--slide-gold))] font-bold w-[20px] md:w-[28px] shrink-0">{i + 1}️⃣</span>
            <div>
              <p className="font-semibold text-[hsl(var(--slide-text))]">{t}</p>
              <p className="text-[hsl(var(--slide-text-muted))] mt-[2px] leading-[1.4]">{d}</p>
            </div>
          </div>
        ))}
      </div>
    </FOM5SlideBase>
  );
}
