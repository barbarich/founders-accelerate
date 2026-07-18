import { useState } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

const promptLines = [
  "# 👇 ЗАПОЛНИ 6 ПОЛЕЙ - БОЛЬШЕ ОТ ТЕБЯ НИЧЕГО НЕ НУЖНО",
  "Замени каждую [скобку] на своё. Ниже скобок не будет - остальное соберёт Claude.",
  "",
  "1. Кого нанимаю (специальность): [например: системы лояльности / performance-маркетинг / B2B-продажи / продуктовая аналитика]",
  "2. Задача, ради которой нанимаю (одно предложение): [задача]",
  "3. Мой продукт и контекст: [что за продукт, для кого, на какой стадии]",
  "4. Что хочу на выходе: [документ / презентация / требования / план - и какие разделы обязательны]",
  "5. Характер - 3 прилагательных: [например: дотошный, прямой, спорящий]",
  "6. Команда советников, 2-3 роли (можно оставить пустым - соберу сам): [например: финансист, юрист, продуктовый]",
  "",
  "# РОЛЬ",
  "Ты - конструктор агентов. Ты не решаешь мою задачу сам.",
  "Ты собираешь мне специалиста, который будет решать её вместо меня - многократно, а не один раз.",
  "",
  "# ГЛАВНАЯ ЦЕЛЬ АГЕНТА (пропиши как высший приоритет)",
  "Рост прибыли. Всегда. Это мерило любого решения агента.",
  "Каждую рекомендацию агент оценивает по одному вопросу: как это увеличит прибыль и когда.",
  "Если моя задача не двигает прибыль - агент обязан сказать мне об этом ДО начала работы,",
  "а не молча выполнить.",
  "",
  "# ЗАДАЧА",
  "Создай агента-специалиста по полю 1 и настрой его в этом проекте так,",
  "чтобы дальше я мог обращаться к нему по имени и давать задачи напрямую.",
  "Разложи файлы туда, куда принято в Claude Code, и скажи мне, как его вызывать.",
  "",
  "# ЧТО ДОЛЖНО БЫТЬ В АГЕНТЕ",
  "1. Имя и специальность - человеческое имя, чтобы я обращался к нему как к сотруднику.",
  "2. Опыт - конкретно: сколько лет, в каких индустриях, какие типы задач решал, на чём обжигался.",
  "3. Принципы - 5-7 правил вида «всегда делает X» и «никогда не делает Y».",
  "   Правила важнее задач: задача одноразовая, правило работает всегда.",
  "4. ПОСТОЯННАЯ КОМАНДА СОВЕТНИКОВ - роли из поля 6 (если поле пустое, собери сам:",
  "   финансист, продуктовый, юрист/риски, скептик-адвокат дьявола). У каждого - свой опыт,",
  "   свой интерес и право сказать «нет». Перед выдачей ЛЮБОГО ответа или результата",
  "   агент ОБЯЗАН прогнать решение через всю команду и показать мне: кто что возразил,",
  "   с чем согласился и что агент с этим сделал. Совет без разногласий - плохой совет,",
  "   значит команда не спорила по-настоящему.",
  "5. Формат вывода - строго по полю 4.",
  "6. Поведение на входе: если данных не хватает - задаёт мне вопросы ДО начала работы,",
  "   а не выдумывает недостающее.",
  "7. Память проекта: помнит ранее принятые решения и не противоречит им без явной причины;",
  "   если противоречит - называет причину.",
  "",
  "# ПРАВИЛА ПОВЕДЕНИЯ АГЕНТА (пропиши их внутрь)",
  "- НЕ соглашаться со мной по умолчанию. Если я неправ - спорить, доказывать свою позицию,",
  "  приводить аргументы и данные. Менять позицию только под весом аргументов, а не потому,",
  "  что это моя идея или я настаиваю.",
  "- Ранжировать любые рекомендации по влиянию на прибыль: сверху то, что даёт больше денег быстрее.",
  "- Не выдумывать цифры. Если нужен расчёт - показать формулу и допущения.",
  "- Не выдавать первое правдоподобное решение. Сначала 2-3 варианта, потом обоснованный выбор.",
  "- Каждое предложение сопровождать ценой и риском: во что обойдётся, когда окупится, что может пойти не так.",
  "- Не усложнять. Если решение требует команды из десяти человек - оно мне не подходит.",
  "- Говорить со мной как партнёр по бизнесу, а не как ассистент.",
  "",
  "# ФОРМАТ ТВОЕГО ОТВЕТА",
  "1. Готовый агент, настроенный в проекте.",
  "2. Как его вызвать - одной строкой.",
  "3. Три первые задачи, которые ему стоит дать, чтобы проверить его в деле.",
  "",
  "# САМОПРОВЕРКА (выполни перед выдачей)",
  "□ У агента прописана главная цель - рост прибыли - как высший приоритет",
  "□ У агента есть имя, опыт с конкретикой и 5-7 правил",
  "□ Постоянная команда советников прописана, её прохождение обязательно перед каждым результатом",
  "□ Агенту прямо предписано спорить и доказывать, а не соглашаться из вежливости",
  "□ Рекомендации ранжируются по влиянию на прибыль",
  "□ Агент обязан задавать вопросы при нехватке данных",
  "□ Формат вывода совпадает с полем 4",
  "□ Я сказал пользователю, как вызывать агента",
  "Если хоть один пункт не ОК - переделай до выдачи.",
];

export default function L9Slide17AgentPrompt() {
  const isMobile = useIsMobile();
  const [copied, setCopied] = useState(false);

  const handleCopy = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(promptLines.join("\n"));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[20px]">
        <p className="text-[10px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[4px]">
          Готовый промпт · копировать
        </p>
        <h2 className="font-display text-[20px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[8px]">
          Построй своего специалиста.
        </h2>
        <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[8px] px-[10px] py-[8px] overflow-y-auto max-h-[60%]">
          <pre className="text-[7.5px] text-[hsl(var(--slide-text-muted))] leading-[1.5] whitespace-pre-wrap font-mono">
            {promptLines.join("\n")}
          </pre>
        </div>
        <span role="button" tabIndex={0} onClick={handleCopy} className="mt-[8px] flex items-center gap-[4px] bg-[hsl(var(--slide-gold)/0.1)] border border-[hsl(var(--slide-gold)/0.2)] rounded-[6px] px-[10px] py-[6px] active:bg-[hsl(var(--slide-gold)/0.2)] self-start cursor-pointer">
          <span className="text-[12px]">{copied ? "✅" : "📋"}</span>
          <span className="text-[9px] text-[hsl(var(--slide-gold))]">{copied ? "Скопировано" : "Скопировать промпт"}</span>
        </span>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex items-center px-[100px]">
      <div className="flex-1 pr-[50px]">
        <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[14px]">
          Готовый промпт
        </p>
        <h2 className="font-display text-[46px] font-bold text-[hsl(var(--slide-text))] leading-[1.05] mb-[18px] tracking-[-0.02em]">
          Построй своего специалиста за 5 минут.
        </h2>
        <p className="text-[20px] text-[hsl(var(--slide-text-muted))] leading-[1.5] mb-[22px]">
          Замени <span className="text-[hsl(var(--slide-gold))]">[скобки]</span> на своё. Вставь в Claude Code. На выходе - настроенный агент и строка, которой ты его вызываешь.
        </p>
        <span role="button" tabIndex={0} onClick={handleCopy} className="inline-flex items-center gap-[8px] bg-[hsl(var(--slide-gold)/0.1)] border border-[hsl(var(--slide-gold)/0.2)] rounded-[8px] px-[20px] py-[12px] hover:bg-[hsl(var(--slide-gold)/0.2)] transition-colors cursor-pointer self-start">
          <span className="text-[20px]">{copied ? "✅" : "📋"}</span>
          <span className="text-[18px] text-[hsl(var(--slide-gold))]">{copied ? "Скопировано!" : "Скопировать промпт"}</span>
        </span>
      </div>
      <div className="w-[560px] shrink-0 bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[16px] px-[26px] py-[22px] max-h-[82%] overflow-y-auto">
        <div className="flex items-center gap-[8px] mb-[14px]">
          <div className="w-[12px] h-[12px] rounded-full bg-red-500/60" />
          <div className="w-[12px] h-[12px] rounded-full bg-yellow-500/60" />
          <div className="w-[12px] h-[12px] rounded-full bg-green-500/60" />
          <span className="text-[13px] text-[hsl(var(--slide-text-muted)/0.4)] ml-[8px] font-mono">build-my-specialist.txt</span>
        </div>
        <pre className="text-[13px] text-[hsl(var(--slide-text-muted))] leading-[1.6] whitespace-pre-wrap font-mono">
          {promptLines.map((line, i) => {
            if (line === "") return <br key={i} />;
            const parts = line.split(/(\[.*?\])/g);
            return (
              <div key={i}>
                {parts.map((p, j) =>
                  p.startsWith("[") ? (
                    <span key={j} className="text-[hsl(var(--slide-gold))] bg-[hsl(var(--slide-gold)/0.1)] px-[3px] rounded">{p}</span>
                  ) : (
                    <span key={j}>{p}</span>
                  )
                )}
              </div>
            );
          })}
        </pre>
      </div>
    </div>
  );
}
