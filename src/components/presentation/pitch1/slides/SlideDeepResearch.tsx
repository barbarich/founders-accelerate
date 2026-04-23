import { useState, Fragment } from "react";
import { Check, Copy } from "lucide-react";
import { Eyebrow, H1, Body, SlideFrame, COLORS } from "./_shared";

const FULL_PROMPT = `# РОЛЬ

Ты — опытный бизнес-консультант, который 15 лет помогает предпринимателям без технического бэкграунда не вкладываться в плохие идеи и развивать хорошие.

Твой собеседник — фаундер, который не программист, не MBA, не аналитик. Он строит свой первый или второй продукт. Он не знает и не обязан знать слова TAM, CAGR, unit economics, cold start problem, platform risk.

Твоя задача — провести глубокий ресерч и дать ему понятный ответ на русском языке с конкретным планом действий.

Ты НЕ продавец его идеи. Ты НЕ мотиватор. Ты НЕ друг, который поддерживает.

Ты — старший партнёр, которому платят за то, чтобы он сказал правду, даже если она неприятная.

Главный вопрос: **Стоит ли фаундеру строить эту идею прямо сейчас?**
Финальный ответ: ДА / НЕТ / ИЗМЕНИТЬ НАПРАВЛЕНИЕ.

---

# РАССКАЖИ ПРО СВОЮ ИДЕЮ (заполни каждое поле — чем конкретнее, тем полезнее отчёт)

**1. Что строишь — одним предложением?**
Хороший пример: «AI-приложение, которое в WhatsApp рассылает 5-минутные микро-уроки сотрудникам ритейла».
Плохой пример: «AI для HR».
[ТВОЙ ОТВЕТ]

**2. Для кого — максимально узко?**
Хороший пример: «владельцы барбершопов в Москве с 1–3 точками, 30–45 лет».
Плохой пример: «малый бизнес».
[ТВОЙ ОТВЕТ]

**3. Какую боль решаешь?**
Опиши конкретную ситуацию, в которой человек страдает.
[ТВОЙ ОТВЕТ]

**4. Как эту боль решают сейчас?**
Назови минимум 3 альтернативы — продукты, процессы, костыли.
[ТВОЙ ОТВЕТ]

**5. Как планируешь зарабатывать?**
Подписка, разовая покупка, freemium, процент со сделки, реклама.
[ТВОЙ ОТВЕТ]

**6. Какая цена — в $ / € / ₪?**
И одна строка: на что эта цифра основана?
[ТВОЙ ОТВЕТ]

**7. Где продаёшь?** (страна / регион / глобально)
[ТВОЙ ОТВЕТ]

**8. На каком этапе сейчас?**
только идея / прототип / MVP / waitlist / первые бесплатные / первые платящие / ищу PMF.
[ТВОЙ ОТВЕТ]

**9. Чем отличаешься от того, что уже есть на рынке?**
[ТВОЙ ОТВЕТ]

**10. Почему именно ты можешь это построить?**
[ТВОЙ ОТВЕТ]

**11. Сколько денег готов вложить и на какой срок хватит?**
[ТВОЙ ОТВЕТ]

**12. Через сколько хочешь запустить первую версию?**
1 / 3 / 6 месяцев / больше.
[ТВОЙ ОТВЕТ]

**13. Есть ли уже 3–5 реальных людей, готовых купить прямо сейчас?**
[ТВОЙ ОТВЕТ]

**14. Что ты уже пробовал / проверял?**
Интервью, waitlist, опросы, реклама. Если ничего — напиши «ничего».
[ТВОЙ ОТВЕТ]

**15. Какие у тебя сейчас главные сомнения?**
[ТВОЙ ОТВЕТ]

---

# ЧТО ИССЛЕДОВАТЬ

Проведи глубокий веб-ресерч по 7 вопросам ниже.
Источники: Reddit, форумы, отзывы в App Store / Google Play, G2, Capterra, Trustpilot, Crunchbase, Statista, Google Trends, Product Hunt, Failory.

## 1. Реальна ли эта боль?
Найди минимум 10 реальных цитат пользователей с URL источника. Не выдумывай. Английские цитаты — переводи на русский, URL сохраняй в скобках.
После цитат ответь:
- Насколько часто встречается? (редко / иногда / постоянно)
- Насколько важно? (раздражение / серьёзная проблема / кровоточит)
- Готовы ли платить? (да / непонятно / нет)

## 2. Сколько людей реально могут купить?
Размер рынка обычными словами. Вместо «TAM $12B, CAGR 22%» — «таких компаний в США ~800 тыс., подходят ~40 тыс., рынок удваивается каждые 3 года».

## 3. Кто уже на рынке (топ-7 конкурентов)
Для каждого: название, что делают, цена, поднятые инвестиции, за что хвалят, на что жалуются, насколько опасны.
В конце — таблица: Конкурент | Цена | Слабое место | Место для нас.

## 4. Кто пробовал и провалился (3–5 кейсов)
Для каждого: название + годы, что хотели, сколько потратили, главная причина провала, урок для текущего фаундера.
Ответь: почему у фаундера получится не так?

## 5. Где свободное место (главная часть)
Анализ негативных отзывов и жалоб. На что жалуются, но никто не чинит. Какие сегменты игнорируют большие игроки. Выведи 3–5 ниш.

## 6. Почему именно сейчас?
Что произошло за 1–2 года, что делает идею реалистичной ИМЕННО СЕЙЧАС. Технология, поведение, законы, смежные индустрии.

## 7. Реальные риски
Платформенные, регуляторные, угроза от ChatGPT/Google/Apple, проблема первых пользователей, экономика, копирование. Для каждого — одно конкретное действие.

---

# КАК ПИСАТЬ ОТВЕТ

1. **Простой язык.** Никаких TAM/SAM/SOM/CAGR/LTV/CAC без объяснения в скобках. Никаких «большой потенциал», «синергия», «экосистема».
2. **Каждое утверждение — с источником.** Нет URL — не пиши.
3. **Цитаты — реальные и переведённые.**
4. **Нет данных — пиши «нет данных».** Не выдумывай цифры.
5. **После каждого блока — строка «если коротко».**
6. **Цифры округлённые, в одной валюте, с бытовой привязкой.**
7. **Лимит:** 8–10 страниц, читается за 20 минут.
8. **Не хвали и не бей.** Говори ровно.
9. **Привязывай к реальности фаундера** (поля 11–15).
10. **Всегда давай план действий на 7 дней.**

---

# СТРУКТУРА ОТВЕТА

## 📍 Главное за 30 секунд
- Вердикт: ДА / НЕТ / ПЕРЕСМОТРИТЕ
- 3 причины
- 3 главных риска
- Что делать в первую очередь

## 📍 Что я проверил и что нашёл
Разбор по 7 вопросам, каждый с «если коротко».

## 📍 Мой вердикт развёрнуто
- Вердикт + объяснение (5–7 предложений)
- Почему именно такой вердикт для этого фаундера (с учётом полей 11–15)
- Что может изменить вердикт: если ДА — что превратит в НЕТ; если НЕТ — что превратит в ДА.

## 📍 План на ближайшие 7 дней
Три конкретных действия. Не «провести customer development», а «позвонить этим 5 людям и спросить: заплатили бы $X за это».

## 📍 Если решаешь строить — что дальше
- Первые 3 шага после «да»
- Главное, чего избегать

## 📍 Если решаешь не строить — что с этим делать
- Какие инсайты забрать в следующую идею
- В каком из ближайших направлений искать новую идею

---

# СТАРТУЙ
Проведи полный ресерч. Пиши простым человеческим языком. Не пропускай разделы. Выдай отчёт в указанном порядке — и с планом на 7 дней в конце.`;

function highlightPrompt(text: string) {
  // highlight [ТВОЙ ОТВЕТ] / [любой плейсхолдер в скобках]
  const parts = text.split(/(\[[^\]]+\])/g);
  return parts.map((part, i) => {
    if (/^\[[^\]]+\]$/.test(part)) {
      return (
        <span
          key={i}
          style={{
            display: "inline-block",
            padding: "1px 8px",
            margin: "1px 0",
            background: "hsla(25,65%,58%,0.18)",
            border: `1px solid ${COLORS.accent}`,
            borderRadius: 4,
            color: COLORS.accent,
            fontWeight: 600,
          }}
        >
          {part}
        </span>
      );
    }
    return <Fragment key={i}>{part}</Fragment>;
  });
}

export default function SlideDeepResearch() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(FULL_PROMPT);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // ignore
    }
  };

  return (
    <SlideFrame padding={64}>
      <div className="w-full h-full flex flex-col gap-6" style={{ minHeight: 0 }}>
        <div><Eyebrow>Шаг 1 · Deep Research в ChatGPT / Gemini / Claude</Eyebrow></div>
        <H1 size={56}>
          То, на что ушли бы <span style={{ color: COLORS.accent }}>недели</span>,
          теперь делается за <span style={{ color: COLORS.accent }}>30 минут</span>.
        </H1>

        <div
          className="grid gap-6"
          style={{ gridTemplateColumns: "1fr 1.25fr", flex: 1, minHeight: 0 }}
        >
          {/* LEFT: что делает + короткая версия */}
          <div className="flex flex-col gap-6" style={{ minHeight: 0 }}>
            <div style={{
              background: COLORS.panel,
              border: `1px solid ${COLORS.panelBorder}`,
              borderRadius: 14,
              padding: 28,
            }}>
              <div style={{ fontSize: 14, letterSpacing: "0.2em", textTransform: "uppercase", color: COLORS.accent, fontFamily: "'JetBrains Mono', monospace", marginBottom: 12 }}>
                Что делает Deep Research
              </div>
              <Body size={19} color={COLORS.text}>
                • Парсит десятки источников за один прогон<br/>
                • Сравнивает конкурентов, цены, позиционирование<br/>
                • Достаёт цитаты пользователей с Reddit, G2, отзывов<br/>
                • Сводит всё в структурированный отчёт со ссылками
              </Body>
            </div>

            <div style={{
              background: COLORS.panel,
              border: `1px solid ${COLORS.panelBorder}`,
              borderRadius: 14,
              padding: 28,
              flex: 1,
              minHeight: 0,
              display: "flex",
              flexDirection: "column",
            }}>
              <div style={{ fontSize: 14, letterSpacing: "0.2em", textTransform: "uppercase", color: COLORS.accent, fontFamily: "'JetBrains Mono', monospace", marginBottom: 12 }}>
                Версия для слайда (короткая)
              </div>
              <pre style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: 14,
                lineHeight: 1.55,
                color: COLORS.text,
                margin: 0,
                whiteSpace: "pre-wrap",
              }}>{`Я строю [продукт] для [сегмент].
Сделай Deep Research:

1. Топ-10 конкурентов: цена, модель,
   позиционирование, сильные/слабые
2. Что говорят пользователи о боли
   (Reddit, G2, отзывы) — цитаты
3. Размер рынка и динамика за 3 года
4. Незакрытые ниши, которые видят
   пользователи, но не закрыли игроки

Ответ — структурированно, со ссылками.`}</pre>
            </div>
          </div>

          {/* RIGHT: полный мастер-промпт */}
          <div
            style={{
              background: COLORS.panel,
              border: `1px solid ${COLORS.panelBorder}`,
              borderRadius: 14,
              display: "flex",
              flexDirection: "column",
              minHeight: 0,
              overflow: "hidden",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "18px 24px",
                borderBottom: `1px solid ${COLORS.panelBorder}`,
                background: "hsla(0,0%,100%,0.02)",
              }}
            >
              <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                <div style={{ fontSize: 13, letterSpacing: "0.2em", textTransform: "uppercase", color: COLORS.accent, fontFamily: "'JetBrains Mono', monospace" }}>
                  Мастер-промпт · v2 · бонус
                </div>
                <div style={{ fontSize: 13, color: COLORS.muted, fontFamily: "'Inter', sans-serif" }}>
                  Заполни поля в <span style={{ color: COLORS.accent }}>[квадратных скобках]</span> · вставь в Claude / ChatGPT / Gemini Deep Research
                </div>
              </div>
              <button
                onClick={handleCopy}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "10px 16px",
                  borderRadius: 8,
                  border: `1px solid ${COLORS.accent}`,
                  background: copied ? COLORS.accent : "transparent",
                  color: copied ? COLORS.bg : COLORS.accent,
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: 13,
                  letterSpacing: "0.05em",
                  textTransform: "uppercase",
                  cursor: "pointer",
                  transition: "all 0.2s ease",
                  fontWeight: 600,
                  whiteSpace: "nowrap",
                }}
              >
                {copied ? <Check size={14} /> : <Copy size={14} />}
                {copied ? "Скопировано" : "Копировать"}
              </button>
            </div>

            <div
              style={{
                flex: 1,
                minHeight: 0,
                overflowY: "auto",
                padding: "22px 26px",
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: 13,
                lineHeight: 1.7,
                color: COLORS.text,
                whiteSpace: "pre-wrap",
                wordBreak: "break-word",
                scrollbarWidth: "thin",
                scrollbarColor: `${COLORS.accent} transparent`,
              }}
            >
              {highlightPrompt(FULL_PROMPT)}
            </div>
          </div>
        </div>
      </div>
    </SlideFrame>
  );
}
