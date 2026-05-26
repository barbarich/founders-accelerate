# Дашборд для мини-курса — пошаговая настройка (15 минут)

Что собираем:
- **Looker Studio overview** — 5 встроенных страниц от Google + 1 кастомная (Mini-course funnel)
- **GA4 Funnel Exploration** — конверсия view → checkout → purchase с разбивкой по UTM
- **GA4 Free-form Exploration** — поведение по источникам
- **GA4 Audiences** — 5 ключевых сегментов для ретаргета

---

## Часть 1 · Looker Studio дашборд (5 кликов, 3 минуты)

### Step 1
Открой эту ссылку в браузере (где залогинен под `barbarych@gmail.com`):

**https://lookerstudio.google.com/datasources/create?connectorId=2**

### Step 2
Появится список Google Analytics property. Выбери:
- Account: **TFC**
- Property: **founders-circle.space**

Кликни синюю **«Подключиться»** правый верх.

Если попросит грант доступа — Authorize. Дождись пока выгрузятся 200+ полей.

### Step 3
В правом верху кликни синюю **«Создать отчёт»**.

Looker Studio покажет диалог "Добавить данные в отчёт" — кликни **«Добавить в отчёт»**.

### Step 4
Сразу после создания отчёта в **Файл → Создать копию** возьми готовый template Google:

или быстрее — клавиатурой `Ctrl+S` (`Cmd+S` на Mac) → введи имя `Mini-course Analytics` → Сохранить.

### Step 5
Готово — у тебя auto-generated 5-страничный дашборд от Google со всеми ключевыми метриками GA4: Overview / Acquisition / Engagement / Monetization / Retention. Шарь URL себе в закладки.

**Совет:** правый верх → "Поделиться" → "Получить ссылку для отчёта" → могу мониторить с любого устройства.

---

## Часть 2 · GA4 Funnel Exploration — самое важное

Это **главный отчёт** для понимания "что чинить в воронке".

### Открыть
**https://analytics.google.com/analytics/web/#/p530154289/analysis**

### Создать

1. Кликни **+** в верхней панели → **Funnel exploration**
2. Слева в панели **Steps**:
   - Step 1: name `Посетил лендинг`, condition `Event name → view_item_list`
   - Step 2: name `Просмотрел цену`, condition `Event name → view_item`
   - Step 3: name `Кликнул "Купить"`, condition `Event name → begin_checkout`
   - Step 4: name `Оплатил`, condition `Event name → purchase`
3. Слева в **Breakdowns**: добавь `first_utm_source` (custom dimension я уже создал)
4. Слева в **Date range**: Last 30 days
5. В правом верху меню `•••` → **Save** → имя `Mini-course Funnel`

Через 24-48ч после первых данных увидишь, какой UTM-источник лучше конвертит на каждом шаге. **Это ответ на вопрос "куда сливать деньги в рекламе"**.

---

## Часть 3 · GA4 Free-form Exploration по источникам

Покажет revenue + conversion rate по каждому каналу за период.

### Создать
Там же `+ → Free form`

1. **Rows:** `first_utm_source`, `first_utm_campaign`
2. **Values:**
   - `Active users`
   - `Sessions`
   - `Event count` → filter Event name = `purchase`
   - `Total revenue` (если включён ecommerce; иначе `Event count` × $19)
3. Conversion rate column: пока считай вручную в голове или в Excel
4. Save → `Sources Performance`

---

## Часть 4 · 5 GA4 Audiences для ретаргета

GA4 Audiences можно потом **синхронизировать с Google Ads** для DV360/Search ремаркетинга. Если запустишь Google Ads — пригодятся сразу.

### Открыть Audiences
**https://analytics.google.com/analytics/web/#/p530154289/admin/audiences**

→ кнопка **«Новая аудитория»**.

### 1. All Mini-course visitors 30d
- Include: `Event name` = `view_item_list` в пределах `30 дней`
- Membership duration: `30 days`

### 2. Pricing viewers (qualified)
- Include: `Event name` = `view_item` в пределах `30 дней`
- Exclude: `Event name` = `purchase`

### 3. Cart abandoners (hottest)
- Include: `Event name` = `begin_checkout` в пределах `7 дней`
- Exclude: `Event name` = `purchase`

### 4. Purchasers (LTV upsell pool)
- Include: `Event name` = `purchase` в пределах `180 дней`

### 5. Engaged but never bought
- Include: `Engagement time` > `60 секунд` в пределах `30 дней`
- Exclude: `Event name` = `begin_checkout`

---

## Часть 5 · Native GA4 Reports — закладки

### Realtime (текущие посетители)
**https://analytics.google.com/analytics/web/#/p530154289/realtime/overview**

### Acquisition → Source/Medium
**https://analytics.google.com/analytics/web/#/p530154289/reports/explorer?params=_u..nav%3Dmaui&r=acquisition-source-medium**

### Monetization → Ecommerce purchases
**https://analytics.google.com/analytics/web/#/p530154289/reports/explorer?params=_u..nav%3Dmaui&r=ecommerce-purchase**

### Events
**https://analytics.google.com/analytics/web/#/p530154289/reports/explorer?params=_u..nav%3Dmaui&r=events**

Здесь увидишь все `view_item`, `begin_checkout`, `purchase`, `web_vital` события — и за сегодня, и накопленные.

---

## Где что смотреть после набора данных (≈48 часов)

| Вопрос | Где смотреть |
| --- | --- |
| Сколько посещений / уников за неделю | Looker Studio → Overview |
| Какой источник конвертит лучше? | GA4 → Mini-course Funnel → breakdown by first_utm_source |
| Сколько% посетителей кликают "Купить"? | Funnel: Step 1 → Step 3 conversion rate |
| Где основной drop-off в воронке? | Funnel: смотри биггест gap между steps |
| Что улучшать на лендинге? | Free-form Exploration → Total revenue / sessions per source — низкий = слабая creative |
| Готов ли запускать масштабную рекламу? | Audiences → Purchasers — если >100, LAL качественная |
| Что сейчас люди делают на сайте | Realtime |

---

## Если что-то не пошло

- **Looker Studio показывает "Нет данных"** — нормально первые 24-48ч. Возвращайся завтра.
- **GA4 Exploration не показывает покупки** — проверь Realtime: видны ли events `purchase`? Если нет — backfill ещё не доехал (до 48ч лаг).
- **Хочешь добавить ещё страницу в Looker** — drag-and-drop в Studio. Все 4 custom dimensions (`first_utm_source`, `first_utm_campaign`, `first_utm_content`, `cta_location`) уже подключены через GA4 connector.

Если возникнут вопросы по конкретному отчёту — кидай скрин, разберём.
