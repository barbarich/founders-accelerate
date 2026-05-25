import { useIsMobile } from "@/hooks/use-mobile";

const steps = [
  { n: "1", t: "Проверь ICP", d: "Подходит ли компания по 3 главным фильтрам: сегмент · размер · триггер? Если нет — выбери другую." },
  { n: "2", t: "Найди 3 контакта", d: "Кто решает · кто пользуется · кто платит. Имя + роль. Минимум 3 человека внутри одной компании." },
  { n: "3", t: "Найди повод", d: "Что произошло у них за последние 30 дней? Раунд · найм · запуск · новость · публичная боль." },
  { n: "4", t: "Напиши первое сообщение", d: "2 строки. Повод (про них) + ценность (что именно меняется у них). Не «мы крутые»." },
  { n: "5", t: "Придумай WOW-момент", d: "Какой 1 экран · результат · цифра вызовет ВАУ именно у этой компании? С него начнётся демо." },
];

export default function M11Slide17LiveExercise() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[16px]">
        <p className="text-[9px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[5px]">
          Домашнее задание · до следующей встречи
        </p>
        <h2 className="font-display text-[19px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[6px]">
          1 реальная компания · <span className="text-[hsl(var(--slide-gold))]">5 строк</span>
        </h2>
        <p className="text-[8.5px] text-[hsl(var(--slide-text-muted))] leading-[1.4] mb-[8px]">
          Возьми 1 компанию из своего списка (B2B или B2C — клиент или партнёр). Заполни 5 строк ниже. Без идеала — как есть сейчас.
        </p>
        <div className="space-y-[3px]">
          {steps.map((s) => (
            <div key={s.n} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[5px] px-[8px] py-[3px]">
              <div className="flex items-baseline gap-[6px]">
                <span className="text-[10px] font-bold text-[hsl(var(--slide-gold))]">{s.n}</span>
                <span className="text-[9px] font-bold text-[hsl(var(--slide-text))]">{s.t}</span>
              </div>
              <p className="text-[7.5px] text-[hsl(var(--slide-text-muted))] leading-[1.4] ml-[16px]">{s.d}</p>
            </div>
          ))}
        </div>
        <div className="mt-[8px] bg-[hsl(var(--slide-gold)/0.08)] border border-[hsl(var(--slide-gold)/0.3)] rounded-[5px] px-[8px] py-[4px]">
          <p className="text-[8px] text-[hsl(var(--slide-text))] leading-[1.4]">
            <span className="font-bold text-[hsl(var(--slide-gold))]">Шеринг:</span> каждый зачитывает строку 4 (сообщение). Группа даёт 1 фидбек за 30 секунд.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[14px]">
        Домашнее задание · до следующей встречи
      </p>
      <h2 className="font-display text-[54px] font-bold text-[hsl(var(--slide-text))] leading-[1.05] mb-[14px] tracking-[-0.02em]">
        1 реальная компания · <span className="text-[hsl(var(--slide-gold))]">5 строк</span>
      </h2>
      <p className="text-[20px] text-[hsl(var(--slide-text-muted))] leading-[1.45] mb-[24px] max-w-[1400px]">
        Возьми 1 компанию из своего списка — клиента, партнёра или прямого пользователя (B2B или B2C, неважно). Заполни 5 строк ниже как есть сейчас. Без идеала.
      </p>
      <div className="grid grid-cols-2 gap-[18px] max-w-[1700px]">
        {steps.map((s) => (
          <div key={s.n} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[12px] px-[26px] py-[14px]">
            <div className="flex items-baseline gap-[14px] mb-[4px]">
              <span className="font-display text-[34px] font-bold text-[hsl(var(--slide-gold))] leading-none">{s.n}</span>
              <span className="text-[20px] font-bold text-[hsl(var(--slide-text))]">{s.t}</span>
            </div>
            <p className="text-[15px] text-[hsl(var(--slide-text-muted))] leading-[1.5] ml-[48px]">{s.d}</p>
          </div>
        ))}
      </div>
      <div className="mt-[20px] bg-[hsl(var(--slide-gold)/0.08)] border border-[hsl(var(--slide-gold)/0.3)] rounded-[12px] px-[26px] py-[14px] max-w-[1700px]">
        <p className="text-[17px] text-[hsl(var(--slide-text))] leading-[1.5]">
          <span className="font-bold text-[hsl(var(--slide-gold))]">Шеринг в группе:</span> каждый зачитывает строку №4 (первое сообщение) за 30 секунд. Группа даёт 1 короткий фидбек — что цепляет, что переписать.
        </p>
      </div>
    </div>
  );
}