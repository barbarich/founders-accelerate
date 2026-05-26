import FOM3SlideBase from "./FOM3SlideBase";

const tasks = [
  ["Лендинг финализирован и опубликован", "8 блоков · работает CTA · указана цена из С2 · подключены GA+пиксель. Ссылка живая, открывается без VPN."],
  ["MVP проходит ключевой сквозной флоу", "Auth → главный экран → ключевая фича → результат. Один путь. Заглушки в остальных местах — норма."],
  ["7-пунктовый чек-лист закрыт", "Пройди сам по списку. Если хоть один пункт открыт — закрываешь до С4."],
  ["60-секундный тест прогнан в Claude", "Профиль ICP из С1 + 4 скриншота (лендинг, первый экран, ключевая фича, результат). Сохраняешь, что Claude споткнулся."],
  ["Показал MVP трём живым людям", "Из ЦА. Молча. Без объяснений. Записываешь где руки спотыкаются — на С4 это становится материалом для Onboarding."],
  ["К С4 в Telegram до встречи", "Ссылка на лендинг · ссылка на MVP · список из 3-5 точек, где спотыкались живые люди и Claude. Без этого блок Onboarding не работает."],
];

export default function FOM3Slide20Homework() {
  return (
    <FOM3SlideBase
      slide={20}
      eyebrow="Домашнее задание · к С4 «Onboarding & Aha»"
      title="Что приносим через 7 дней"
      subtitle="Лендинг live, MVP проходит сквозной флоу, 3 живых теста сделано — приходим разбирать первые 60 секунд."
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
    </FOM3SlideBase>
  );
}
