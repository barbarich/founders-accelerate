import { useIsMobile } from "@/hooks/use-mobile";

export default function L4Slide07AdvancedPrompts() {
  const prompts = [
    {
      icon: "📸",
      label: "Lovable",
      scenario: "Перенести дизайн",
      prompt: `Я прикладываю скриншоты экранов [НАЗВАНИЕ ПРОДУКТА].

Воссоздай UI точно как на скриншоте, используя стек текущего проекта.

Требования:
— Цвета: извлеки hex прямо из скриншота, не придумывай свои
— Типографика: размеры, вес и межстрочник — как на картинке
— Layout: отступы и расположение элементов один в один
— Переиспользуй компоненты которые уже есть в проекте

Начни с экрана [ДАШБОРД / ГЛАВНАЯ / ПРОФИЛЬ].

Когда сделаешь — сам сравни с оригиналом:
• что воспроизведено точно
• что отличается и почему
• какие вопросы нужно уточнить`,
      tip: "Один экран за раз — качество выше. Скриншоты прикрепляй к сообщению",
    },
    {
      icon: "🧠",
      label: "Claude / GPT",
      scenario: "PM-анализ перед фичей",
      prompt: `Ты — опытный product manager.

Продукт: [НАЗВАНИЕ] — [1 ПРЕДЛОЖЕНИЕ ЧТО ДЕЛАЕТ].
Пользователи: [КТО — роль, индустрия].
Проблема: [ОПИСАНИЕ ИЛИ ЖАЛОБА ИЗ CUSTDEV].

Сделай анализ:
1. Опиши 3 подхода к решению (концептуально, без кода)
2. Для каждого: суть → что реализовать → плюс → минус
3. Дай рекомендацию — какой подход выбрать и почему

Я использую анализ чтобы принять решение.
После — пойду реализовывать выбранный вариант в Lovable.`,
      tip: "Claude отвечает текстом — это и есть PM-анализ. Реализация идёт отдельно",
    },
    {
      icon: "🎨",
      label: "Lovable",
      scenario: "Новый экран в стиле продукта",
      prompt: `Добавь в проект новый экран: [НАЗВАНИЕ ЭКРАНА].
Что он делает: [3-5 ПРЕДЛОЖЕНИЙ].

Перед тем как писать код:
1. Изучи существующие экраны и компоненты проекта
2. Зафиксируй: цвета, шрифты, стиль кнопок, карточек, отступов

Ограничения — строго соблюдай:
— Только цвета и шрифты которые уже есть в проекте
— Переиспользуй готовые компоненты, не создавай с нуля
— Скругления, тени, отступы — как у существующих экранов

Новый экран = родная часть продукта, не чужеродная вставка.`,
      tip: "Шаг «изучи перед кодом» — ключевой. Без него AI придумает новый стиль",
    },
    {
      icon: "🚀",
      label: "Lovable / Claude Code",
      scenario: "Подготовка кода к передаче",
      prompt: `Ты — техлид. Подготовь этот код к передаче разработчику в продакшен.

Выполни строго по шагам:
1. Аудит: найди хардкод, magic numbers, открытые TODO — выпиши список
2. Рефакторинг: вынеси константы, добавь типизацию (если поддерживает стек)
3. Состояния: обработай загрузка / ошибка / пустой список
4. Документация: комментарий — что делает, как использовать, пример
5. Итог: перечисли всё что изменил и почему

Формат: сначала список изменений → потом финальный код.`,
      tip: "Lovable экспортирует рабочий код — этот промпт делает его production-ready",
    },
  ];

  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[24px] overflow-y-auto py-[16px]">
        <p className="text-[10px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[4px]">Copy-paste промпты</p>
        <h2 className="font-display text-[20px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[12px]">
          Промпты, которые работают
        </h2>
        <div className="space-y-[8px]">
          {prompts.map((p, i) => (
            <div key={i} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[8px] px-[10px] py-[8px]">
              <div className="flex items-center justify-between gap-[6px] mb-[4px]">
                <div className="flex items-center gap-[6px]">
                  <span className="text-[14px]">{p.icon}</span>
                  <span className="text-[10px] font-semibold text-[hsl(var(--slide-text))]">{p.scenario}</span>
                </div>
                <span className="text-[8px] px-[5px] py-[2px] rounded-full bg-[hsl(var(--slide-gold)/0.12)] text-[hsl(var(--slide-gold))] font-medium shrink-0">{p.label}</span>
              </div>
              <pre className="text-[7.5px] text-[hsl(var(--slide-gold))] font-mono leading-[1.5] bg-[hsl(var(--slide-gold)/0.06)] px-[6px] py-[5px] rounded mb-[4px] whitespace-pre-wrap break-words">
                {p.prompt}
              </pre>
              <p className="text-[8px] text-[hsl(var(--slide-text-muted))] leading-[1.4]">{p.tip}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[100px] py-[32px]">
      <p className="text-[13px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[6px]">Copy-paste промпты</p>
      <h2 className="font-display text-[40px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[20px]">
        Промпты, которые работают
      </h2>
      <div className="grid grid-cols-2 gap-[16px] max-w-[1200px]">
        {prompts.map((p, i) => (
          <div key={i} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[10px] px-[18px] py-[14px] flex flex-col">
            <div className="flex items-center justify-between gap-[8px] mb-[8px]">
              <div className="flex items-center gap-[8px]">
                <span className="text-[20px]">{p.icon}</span>
                <span className="text-[15px] font-semibold text-[hsl(var(--slide-text))]">{p.scenario}</span>
              </div>
              <span className="text-[10px] px-[7px] py-[2px] rounded-full bg-[hsl(var(--slide-gold)/0.12)] text-[hsl(var(--slide-gold))] font-medium shrink-0">{p.label}</span>
            </div>
            <pre className="text-[15px] text-[hsl(var(--slide-gold))] font-mono leading-[1.6] bg-[hsl(var(--slide-gold)/0.06)] px-[12px] py-[8px] rounded-[6px] mb-[8px] whitespace-pre-wrap overflow-y-auto max-h-[140px]">
              {p.prompt}
            </pre>
            <p className="text-[11px] text-[hsl(var(--slide-text-muted))] leading-[1.4]">{p.tip}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
