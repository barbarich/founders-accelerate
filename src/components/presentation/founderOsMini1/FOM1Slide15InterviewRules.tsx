import FOM1SlideBase from "./FOM1SlideBase";

const rules = [
  ["🎯", "Спрашивай про прошлое", "только реальный опыт. «Как решали?», «Что пробовали?» — не «Купили бы?»"],
  ["🤐", "80/20: слушай vs говори", "клиент говорит 80% времени. Не подсказывай ответ"],
  ["🔍", "Копай вглубь", "«Почему?», «Расскажите подробнее». Минимум 3 уровня вглубь"],
  ["⏱️", "15–20 минут", "короткие, фокусные. Один сегмент — одна проблема"],
  ["📝", "Записывай дословно", "не интерпретируй. Цитаты как есть — анализ потом"],
  ["🔄", "Проси рефералы", "«Кто ещё сталкивается?» — каждое интервью генерит следующее"],
];

const dont = [
  "Питчить свою идею",
  "Спрашивать «Вы бы купили?»",
  "Наводящие вопросы",
  "Говорить больше, чем слушать",
  "Игнорировать неудобные ответы",
];

export default function FOM1Slide15InterviewRules() {
  return (
    <FOM1SlideBase
      slide={15}
      eyebrow="Mom Test"
      title="Правила custdev-интервью"
      subtitle="Цель — не «поговорить с людьми», а проверить гипотезу"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-[10px] md:gap-[14px] max-w-[1700px] text-[11px] md:text-[22px]">
        {rules.map(([e, t, d], i) => (
          <div key={i} className="flex items-baseline gap-[10px]">
            <span className="text-[18px] md:text-[26px]">{e}</span>
            <p>
              <span className="text-[hsl(var(--slide-text))] font-semibold">{t}</span>
              <span className="text-[hsl(var(--slide-text-muted))]"> — {d}</span>
            </p>
          </div>
        ))}
      </div>
      <div className="mt-[14px] md:mt-[22px] border-l-[4px] pl-[14px] max-w-[1700px]" style={{ borderColor: "hsl(0 70% 60%)" }}>
        <p className="font-semibold" style={{ color: "hsl(0 70% 60%)" }}>🚫 Как нельзя:</p>
        <ul className="mt-[4px] text-[hsl(var(--slide-text-muted))]">
          {dont.map((d, i) => (
            <li key={i}>✕ {d}</li>
          ))}
        </ul>
      </div>
    </FOM1SlideBase>
  );
}
