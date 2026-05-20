import FOM2SlideBase from "./FOM2SlideBase";

const tasks = [
  ["Финальный список фич MVP", "MUST HAVE (≤5) · SHOULD HAVE (что откладываем) · WON'T HAVE (что не делаем). Один документ, копируется в Lovable."],
  ["Цена и 3 тарифа зафиксированы", "Числа + одно предложение обоснования. Готовы быть на лендинге как есть, без «обсудим»."],
  ["Показать прототип / макет 3 людям из ЦА", "Записать реакцию: что поняли, что нет, готовы ли заплатить названную цену. Видео или короткие выдержки."],
  ["Список доработок прототипа к С3", "Что починить · что добавить · что убрать. Это backlog, с которым приходим на Build & Land."],
  ["К С3 в Telegram до встречи", "MUST HAVE-список + цена + ссылка на текущий прототип (если есть). Без этого С3 не работает — там мы строим, а не обсуждаем."],
];

export default function FOM2Slide22Homework() {
  return (
    <FOM2SlideBase
      slide={22}
      eyebrow="Домашнее задание · к С3 «Build & Land»"
      title="Что приносим через 5 дней"
      subtitle="К следующей встрече у каждого — список фич MVP, цена, и обратная связь от 3 человек"
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
    </FOM2SlideBase>
  );
}
