import FOM3SlideBase from "./FOM3SlideBase";

const checklist = [
  ["Лендинг открывается по живому домену", "Lovable publish + кастомный домен или .lovable.app — не importance, главное чтобы открывалось у любого человека по ссылке."],
  ["Hero за 5 секунд отвечает «что и для кого»", "Заголовок из формулы позиционирования (С1). Подзаголовок 1-2 предложения. Кнопка с глаголом действия."],
  ["8 блоков лендинга на месте", "Hero · Social proof (хоть что-то) · Боли · Решение · Как работает · Отзывы · CTA · FAQ. Пустых блоков нет."],
  ["MVP проходит сквозной флоу без падений", "Auth → главный экран → ключевая фича → результат. Один путь работает. Заглушки — это нормально."],
  ["Auth и базовая БД подключены", "Supabase Auth (хотя бы Email/Google). Хотя бы одна таблица — туда пишутся данные пользователя."],
  ["Аналитика стоит с первого дня", "GA + рекламные пиксели (даже если рекламы пока нет — пиксель учит аудиторию). Mixpanel опционально."],
  ["Error / loading / empty states есть на каждом экране", "Из CLAUDE.md правил. Без этого пользователь видит пустой экран при первом косяке и уходит навсегда."],
];

export default function FOM3Slide19Checklist() {
  return (
    <FOM3SlideBase
      slide={19}
      eyebrow="Чек-лист готовности · к С4"
      title="MVP + лендинг готовы — 7 пунктов"
      subtitle="Пройдитесь сами по своему билду. Если хоть один пункт не закрыт — доделываете до следующей встречи."
    >
      <div className="space-y-[6px] md:space-y-[10px] max-w-[1800px] text-[12px] md:text-[22px]">
        {checklist.map(([t, d], i) => (
          <div key={i} className="flex gap-[10px] md:gap-[16px]">
            <span className="font-mono text-[hsl(var(--slide-gold))] font-bold w-[20px] md:w-[28px] shrink-0">{i + 1}.</span>
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
