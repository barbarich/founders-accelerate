import { useIsMobile } from "@/hooks/use-mobile";

const oldRules = [
  "Один «идеальный» креатив + узкий ручной таргет",
  "A/B-тесты по два варианта раз в неделю",
  "Месяцы на «доработку» одного объявления",
  "Креатив рисует дизайнер · цикл 3–7 дней",
];

const newRules = [
  "20–30 креативов на одну кампанию — Meta Andromeda сама выбирает, что показывать",
  "Broad audience + creative diversity — AI таргетит лучше, чем ручная настройка",
  "AI-генерация ассетов: ChatGPT, Higgsfield, Canva выкатывают 50+ вариантов из URL продукта",
  "Цикл «идея → 30 креативов в Ads Manager» — 1 вечер",
];

export default function L11Slide13OldVsNew() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[18px]">
        <p className="text-[10px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[6px]">
          Кит 3 · Креативы · что изменилось в 2026
        </p>
        <h2 className="font-display text-[19px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[6px]">
          Старые правила <span className="text-[hsl(var(--slide-gold))]">сломались</span>. По-старому — сольёшь бюджет за неделю
        </h2>
        <div className="bg-[hsl(0_70%_55%/0.06)] border-l-2 border-[hsl(0_70%_55%)] rounded-[6px] px-[8px] py-[6px] mb-[6px]">
          <p className="text-[8px] font-bold text-[hsl(0_70%_65%)] uppercase tracking-[0.1em] mb-[2px]">Что больше не работает · 2024 и раньше</p>
          <ul className="space-y-[2px]">
            {oldRules.map((t) => (
              <li key={t} className="text-[7.5px] text-[hsl(var(--slide-text)/0.85)] leading-[1.35]">→ {t}</li>
            ))}
          </ul>
        </div>
        <div className="bg-[hsl(var(--slide-gold)/0.08)] border-l-2 border-[hsl(var(--slide-gold))] rounded-[6px] px-[8px] py-[6px]">
          <p className="text-[8px] font-bold text-[hsl(var(--slide-gold))] uppercase tracking-[0.1em] mb-[2px]">Что работает · 2026</p>
          <ul className="space-y-[2px]">
            {newRules.map((t) => (
              <li key={t} className="text-[7.5px] text-[hsl(var(--slide-text)/0.9)] leading-[1.35]">→ {t}</li>
            ))}
          </ul>
        </div>
        <p className="text-[9px] text-[hsl(var(--slide-gold))] italic mt-[8px] leading-[1.4]">
          Главный сдвиг: креатив стал важнее таргетинга. Выигрывает тот, кто быстрее генерит варианты.
        </p>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[14px]">
        Кит 3 · Креативы · что изменилось в 2026
      </p>
      <h2 className="font-display text-[50px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[22px] tracking-[-0.02em]">
        Старые правила <span className="text-[hsl(var(--slide-gold))]">сломались</span>. По-старому — сольёшь бюджет за неделю
      </h2>
      <div className="grid grid-cols-2 gap-[24px] max-w-[1700px] mb-[20px]">
        <div className="bg-[hsl(0_70%_55%/0.06)] border-l-[4px] border-[hsl(0_70%_55%)] rounded-[14px] px-[28px] py-[20px]">
          <p className="text-[14px] font-bold text-[hsl(0_70%_65%)] uppercase tracking-[0.18em] mb-[12px]">Не работает · 2024 и раньше</p>
          <ul className="space-y-[10px]">
            {oldRules.map((t) => (
              <li key={t} className="text-[18px] text-[hsl(var(--slide-text)/0.9)] leading-[1.45]">→ {t}</li>
            ))}
          </ul>
        </div>
        <div className="bg-[hsl(var(--slide-gold)/0.08)] border-l-[4px] border-[hsl(var(--slide-gold))] rounded-[14px] px-[28px] py-[20px]">
          <p className="text-[14px] font-bold text-[hsl(var(--slide-gold))] uppercase tracking-[0.18em] mb-[12px]">Работает · 2026</p>
          <ul className="space-y-[10px]">
            {newRules.map((t) => (
              <li key={t} className="text-[18px] text-[hsl(var(--slide-text)/0.9)] leading-[1.45]">→ {t}</li>
            ))}
          </ul>
        </div>
      </div>
      <p className="text-[22px] text-[hsl(var(--slide-gold))] italic leading-[1.45] max-w-[1700px]">
        Главный сдвиг: <b className="not-italic">креатив стал важнее таргетинга</b>. Выигрывает тот, кто быстрее генерит варианты — не тот, кто лучше настроил аудиторию.
      </p>
    </div>
  );
}
