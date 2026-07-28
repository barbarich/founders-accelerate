import { useIsMobile } from "@/hooks/use-mobile";

const tactics = [
  { name: "Роутинг моделей", text: "Дешёвая модель на простые задачи, дорогая - только на сложные. Так Cursor вывел маржу в плюс со своей Composer.", save: "до -70% костов" },
  { name: "Кэширование промптов", text: "Повторяющийся системный промпт и контекст кэшируются провайдером и стоят в разы дешевле.", save: "до -90% на кэше" },
  { name: "Batch-обработка", text: "Всё, что не нужно в реальном времени (отчёты, дайджесты), - в batch API за полцены.", save: "-50%" },
  { name: "Лимиты в тарифах", text: "Ограничение запросов на тариф защищает от юзеров, которые «проедают» больше своей подписки.", save: "убирает минусовых юзеров" },
];

export default function L14Slide16AICosts() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[18px] py-[14px] overflow-y-auto">
        <p className="text-[10px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[4px]">Рычаг 4 · продуктовые косты</p>
        <h2 className="font-display text-[19px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[6px]">
          AI-косты под контролем: <span className="text-[hsl(var(--slide-gold))]">4 приёма</span>
        </h2>
        <p className="text-[9.5px] text-[hsl(var(--slide-text-muted))] leading-[1.45] mb-[7px]">
          Правило гигиены: знай кост на одного клиента в месяц. Одна метрика в дашборде - и маржа перестаёт быть сюрпризом.
        </p>
        <div className="space-y-[5px] mb-[7px]">
          {tactics.map((t, i) => (
            <div key={i} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.22)] rounded-[6px] px-[9px] py-[5px]">
              <div className="flex items-baseline justify-between mb-[1px]">
                <p className="text-[9.5px] font-bold text-[hsl(var(--slide-text))]">{t.name}</p>
                <p className="text-[8px] font-bold text-[hsl(var(--slide-gold))]">{t.save}</p>
              </div>
              <p className="text-[8.5px] text-[hsl(var(--slide-text-muted))] leading-[1.45]">{t.text}</p>
            </div>
          ))}
        </div>
        <p className="text-[9.5px] text-[hsl(var(--slide-gold))] font-semibold leading-[1.45]">
          Каждый сэкономленный доллар себестоимости идёт прямо в маржу - а значит, в LTV и в твой бюджет на рекламу.
        </p>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px] py-[32px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[10px]">Рычаг 4 · продуктовые косты</p>
      <h2 className="font-display text-[46px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[12px] tracking-[-0.02em]">
        AI-косты под контролем: <span className="text-[hsl(var(--slide-gold))]">4 приёма</span>
      </h2>
      <p className="text-[19px] text-[hsl(var(--slide-text-muted))] leading-[1.45] mb-[18px] max-w-[1650px]">
        Правило гигиены: знай кост на одного клиента в месяц. Одна метрика в дашборде - и маржа перестаёт быть сюрпризом.
      </p>
      <div className="grid grid-cols-2 gap-[14px] mb-[18px] max-w-[1650px]">
        {tactics.map((t, i) => (
          <div key={i} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.25)] rounded-[12px] px-[24px] py-[15px]">
            <div className="flex items-baseline justify-between mb-[6px]">
              <p className="text-[20px] font-bold text-[hsl(var(--slide-text))]">{t.name}</p>
              <p className="text-[15px] font-bold text-[hsl(var(--slide-gold))]">{t.save}</p>
            </div>
            <p className="text-[16.5px] text-[hsl(var(--slide-text-muted))] leading-[1.45]">{t.text}</p>
          </div>
        ))}
      </div>
      <p className="text-[20px] text-[hsl(var(--slide-gold))] font-semibold leading-[1.45] max-w-[1650px]">
        Каждый сэкономленный доллар себестоимости идёт прямо в маржу - а значит, в LTV и в твой бюджет на рекламу.
      </p>
    </div>
  );
}
