import { useState } from "react";
import FOM2SlideBase from "./FOM2SlideBase";

const PROMPT = `Действуй как product strategist с фокусом на pre-PMF стартапах. Я даю тебе список фич, которые планирую в MVP. Твоя задача — прорезать его до минимума, который доставит клиенту главный результат.

Контекст:
- Продукт: [одно предложение]
- Главный результат, который клиент получает: [конкретный outcome + измеримая величина если есть]
- Целевой клиент: [ICP]
- Цена основного тарифа: [$/мес, $ one-time]
- Срок до запуска (когда хочу, чтобы первый платящий клиент уже пользовался): [дни/недели]
- Я работаю один или с командой: [соло / команда из N]

Мой текущий список фич MVP:
[ВСТАВЬ список — все 10–25 фич, что ты сейчас планируешь. Не сокращай заранее.]

Сделай MoSCoW-классификацию:
1. MUST HAVE (3–5 максимум): без этой фичи клиент не получит обещанный результат. Без неё продукта нет.
2. SHOULD HAVE (3–5): сильно улучшает UX, но без них клиент всё ещё получает результат, просто менее гладко. ОТКЛАДЫВАЕМ до v1.1.
3. COULD HAVE (что есть): «хорошо бы» — отложить до v1.5 или v2.
4. WON'T HAVE в MVP (что есть): то, что выглядит важным, но на самом деле нет.

По каждой фиче из MUST HAVE дай:
- одно предложение «зачем это в MUST» (привяжи к главному результату клиента)
- риск, если её НЕ будет (что пойдёт не так в первой сессии клиента)
- оценка сложности (S/M/L)

В конце дай:
1. ОДНУ ФРАЗУ — что делает MVP. 6–10 слов.
2. ОДИН СЦЕНАРИЙ — путь клиента от регистрации до первого «вау» за минуту. Шаги.
3. КРАСНЫЕ ФЛАГИ моего списка: вижу ли я в нём фичи, которые попадают в «builder fallacy» (это интересно строить, а не нужно клиенту). Назови конкретные.
4. ВРЕМЯ НА MVP по моему сроку: реалистично или нет. Если нет — какие 2 фичи из MUST режем до v1.1, чтобы успеть.`;

export default function FOM2Slide20MVPPrompt() {
  const [copied, setCopied] = useState(false);
  const handleCopy = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    navigator.clipboard.writeText(PROMPT);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <FOM2SlideBase
      slide={20}
      eyebrow="AI-as-product-strategist · промпт #3"
      title="Прорежь мой MVP"
      subtitle="От 25 фич к 5 «без них продукта нет». Готовое ТЗ для Lovable + Claude Code в С3"
    >
      <div className="grid grid-cols-1 md:grid-cols-[1.5fr_1fr] gap-[12px] md:gap-[20px] max-w-[1800px] text-[11px] md:text-[20px]">
        <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.4)] rounded-[14px] p-[12px] md:p-[20px]">
          <div className="flex items-center justify-between gap-[10px] mb-[6px]">
            <p className="text-[hsl(var(--slide-gold))] uppercase tracking-[0.2em] text-[10px] md:text-[14px]">
              MVP MoSCoW-промпт
            </p>
            <button
              onPointerDown={(e) => e.stopPropagation()}
              onMouseDown={(e) => e.stopPropagation()}
              onClick={handleCopy}
              className="shrink-0 px-[10px] md:px-[16px] py-[4px] md:py-[8px] rounded-[6px] font-semibold text-[10px] md:text-[14px] transition-all"
              style={{
                background: copied ? "hsl(var(--slide-gold))" : "hsl(var(--slide-gold) / 0.15)",
                color: copied ? "hsl(var(--slide-bg))" : "hsl(var(--slide-gold))",
                border: `1px solid hsl(var(--slide-gold) / ${copied ? "1" : "0.3"})`,
              }}
            >
              {copied ? "✓ Скопировано" : "📋 Копировать"}
            </button>
          </div>
          <pre className="whitespace-pre-wrap font-mono text-[hsl(var(--slide-text)/0.9)] text-[9px] md:text-[13px] leading-[1.45] max-h-[220px] md:max-h-[480px] overflow-auto pr-[6px] prompt-scroll">
{PROMPT}
          </pre>
        </div>

        <div className="space-y-[8px] md:space-y-[14px]">
          <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[14px] p-[12px] md:p-[20px]">
            <p className="text-[hsl(var(--slide-gold))] uppercase tracking-[0.2em] text-[10px] md:text-[14px]">Builder's fallacy</p>
            <p className="mt-[4px] text-[hsl(var(--slide-text))]">
              «Интересно строить» ≠ «нужно клиенту». AI отлично ловит этот момент — он не вовлечён эмоционально в красивую архитектуру. Спросите его честно — он скажет.
            </p>
          </div>
          <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[14px] p-[12px] md:p-[20px]">
            <p className="text-[hsl(var(--slide-gold))] uppercase tracking-[0.2em] text-[10px] md:text-[14px]">Цель MVP — не «выглядеть готовым»</p>
            <p className="mt-[4px] text-[hsl(var(--slide-text))]">
              Цель — за минимум времени дать клиенту главный результат и услышать живой отзыв. Полироваться будем после первого «да, плачу» — а не до.
            </p>
          </div>
          <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[14px] p-[12px] md:p-[20px]">
            <p className="text-[hsl(var(--slide-gold))] uppercase tracking-[0.2em] text-[10px] md:text-[14px]">Этот промпт — ваше ТЗ для С3</p>
            <p className="mt-[4px] text-[hsl(var(--slide-text))]">
              Ответ AI приносим в С3. Из MUST HAVE → лендинг (один оффер) + промпт для Lovable. Из сценария → onboarding. SHOULD/COULD откладываем без сожаления.
            </p>
          </div>
        </div>
      </div>
    </FOM2SlideBase>
  );
}
