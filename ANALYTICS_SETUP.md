# Analytics Setup — пошаговая инструкция

Что уже сделано в коде (готово к деплою как только подставишь GTM-ID):

- ✅ GTM-сниппет в `index.html` с плейсхолдером `GTM-PLACEHOLDER`
- ✅ Единый dataLayer-слой (`src/lib/analytics.ts`)
- ✅ First-touch UTM-атрибуция с TTL 90 дней (`src/lib/attribution.ts`)
- ✅ Core Web Vitals → dataLayer (`src/lib/webVitals.ts`)
- ✅ События воронки мини-курса: `view_item_list`, `view_item`, `begin_checkout`, `purchase`, `select_content`
- ✅ Удалены прямые вызовы `fbq()` и `gtag()` — всё идёт через GTM
- ✅ Server-side fire purchase в `tfc-bot/bot/services/conversions.py` (GA4 Measurement Protocol + Meta CAPI), вызывается на успешной активации

Что осталось — твои шаги ниже.

---

## Phase A · Stripe Payment Link — пробросить session_id в редирект (5 мин)

Без этого браузерный `purchase` не сможет передать `transaction_id`, и серверный `purchase` (CAPI/GA4) не сможет с ним дедуплицироваться.

1. Открой https://dashboard.stripe.com/payment-links
2. Найди ссылку мини-курса (`buy.stripe.com/cNibJ1gLKfaObEx3nh8k803`), кликни **... → Edit**
3. Прокрути до **After payment → Don't show confirmation page → Redirect customers to your website**
4. Сейчас там стоит: `https://founders-circle.space/mini-course/thank-you`
5. Замени на: `https://founders-circle.space/mini-course/thank-you?session_id={CHECKOUT_SESSION_ID}`
   - Фигурные скобки **обязательны** — это Stripe-плейсхолдер, он подставит реальный `cs_xxx`
6. Save

**Проверка:** сделай тестовую покупку (или используй test mode). После оплаты URL должен содержать `?session_id=cs_live_xxxxx`.

---

## Phase B · GTM-контейнер (10 мин)

1. Открой https://tagmanager.google.com → **Create Account**
2. Account Name: `Founders Circle` · Country: `Israel`
3. Container Name: `founders-circle.space` · Target platform: **Web**
4. Accept ToS → ты получишь `GTM-XXXXXX`. **Скопируй его.**
5. Открой проект `founders-accelerate-main`, замени **все** вхождения `GTM-PLACEHOLDER` на свой `GTM-XXXXXX`:
   ```bash
   cd ~/Downloads/founders-accelerate-main
   sed -i '' 's/GTM-PLACEHOLDER/GTM-XXXXXX/g' index.html
   git add index.html && git commit -m "wire real GTM container id" && git push
   ```
6. Lovable подтянет коммит за 1-2 минуты, продакшен задеплоится.

---

## Phase C · Теги, триггеры, переменные в GTM (25 мин)

В GTM работа идёт в трёх вкладках: **Variables**, **Triggers**, **Tags**. Создавать в этом порядке.

### C.1 Variables — Data Layer Variables

Workspace → **Variables → User-Defined Variables → New** для каждой переменной ниже:

| Variable Name | Type | Data Layer Variable Name |
| --- | --- | --- |
| `DLV - value` | Data Layer Variable | `value` |
| `DLV - currency` | Data Layer Variable | `currency` |
| `DLV - transaction_id` | Data Layer Variable | `transaction_id` |
| `DLV - event_id` | Data Layer Variable | `event_id` |
| `DLV - items` | Data Layer Variable | `items` |
| `DLV - content_name` | Data Layer Variable | `content_name` |
| `DLV - cta_location` | Data Layer Variable | `cta_location` |
| `DLV - first_utm_source` | Data Layer Variable | `first_utm_source` |
| `DLV - first_utm_campaign` | Data Layer Variable | `first_utm_campaign` |
| `DLV - first_utm_content` | Data Layer Variable | `first_utm_content` |
| `DLV - first_utm_medium` | Data Layer Variable | `first_utm_medium` |
| `DLV - fbclid` | Data Layer Variable | `fbclid` |
| `DLV - metric_name` | Data Layer Variable | `metric_name` |
| `DLV - metric_value` | Data Layer Variable | `metric_value` |

### C.2 Triggers — Custom Event

**Triggers → New** для каждого:

| Trigger Name | Trigger Type | Event Name (Equals) |
| --- | --- | --- |
| `CE - view_item_list` | Custom Event | `view_item_list` |
| `CE - view_item` | Custom Event | `view_item` |
| `CE - begin_checkout` | Custom Event | `begin_checkout` |
| `CE - purchase` | Custom Event | `purchase` |
| `CE - view_content` | Custom Event | `view_content` |
| `CE - generate_lead` | Custom Event | `generate_lead` |
| `CE - select_content` | Custom Event | `select_content` |
| `CE - web_vital` | Custom Event | `web_vital` |

### C.3 Tags — GA4

**Tags → New → Google Analytics: GA4 Configuration**

1. **Tag Name:** `GA4 Config`
2. **Measurement ID:** `G-5FTW2XFHE6` (твой существующий — оставляем)
3. **Trigger:** `All Pages` (built-in)
4. Save

**Tags → New → Google Analytics: GA4 Event** — повторить для каждого:

| Tag Name | Event Name | Event Parameters | Trigger |
| --- | --- | --- | --- |
| `GA4 - purchase` | `purchase` | `transaction_id={{DLV - transaction_id}}`, `value={{DLV - value}}`, `currency={{DLV - currency}}`, `items={{DLV - items}}`, `first_utm_source={{DLV - first_utm_source}}`, `first_utm_campaign={{DLV - first_utm_campaign}}`, `first_utm_content={{DLV - first_utm_content}}` | `CE - purchase` |
| `GA4 - begin_checkout` | `begin_checkout` | `value={{DLV - value}}`, `currency={{DLV - currency}}`, `items={{DLV - items}}`, `cta_location={{DLV - cta_location}}` | `CE - begin_checkout` |
| `GA4 - view_item` | `view_item` | `value={{DLV - value}}`, `currency={{DLV - currency}}`, `items={{DLV - items}}` | `CE - view_item` |
| `GA4 - view_item_list` | `view_item_list` | `items={{DLV - items}}` | `CE - view_item_list` |
| `GA4 - generate_lead` | `generate_lead` | `content_name={{DLV - content_name}}` | `CE - generate_lead` |
| `GA4 - web_vital` | `web_vital` | `metric_name={{DLV - metric_name}}`, `metric_value={{DLV - metric_value}}` | `CE - web_vital` |

### C.4 Tags — Meta Pixel

**Tags → New → Custom HTML** — `Meta Pixel Base`:

```html
<script>
!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,
document,'script','https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '1742756813766230');
fbq('track', 'PageView');
</script>
```

- **Trigger:** `All Pages` · **Tag firing options:** `Once per page`

**Tags → New → Custom HTML** — `Meta Pixel - Purchase`:

```html
<script>
fbq('track', 'Purchase', {
  value: {{DLV - value}},
  currency: {{DLV - currency}},
  content_ids: ['mini-course-19'],
  content_type: 'product',
  content_name: 'Mini-course AI-product'
}, { eventID: {{DLV - transaction_id}} });
</script>
```

- **Trigger:** `CE - purchase`
- **Tag Sequencing → Fire a tag before:** `Meta Pixel Base` (чтобы fbq был определён)

**Tags → New → Custom HTML** — `Meta Pixel - InitiateCheckout`:

```html
<script>
fbq('track', 'InitiateCheckout', {
  value: {{DLV - value}},
  currency: {{DLV - currency}},
  content_ids: ['mini-course-19']
}, { eventID: {{DLV - event_id}} });
</script>
```

- **Trigger:** `CE - begin_checkout`
- **Tag Sequencing → Fire a tag before:** `Meta Pixel Base`

**Tags → New → Custom HTML** — `Meta Pixel - ViewContent`:

```html
<script>
fbq('track', 'ViewContent', {
  content_ids: ['mini-course-19'],
  content_type: 'product',
  value: {{DLV - value}},
  currency: {{DLV - currency}}
});
</script>
```

- **Trigger:** `CE - view_item`
- **Tag Sequencing → Fire a tag before:** `Meta Pixel Base`

**Tags → New → Custom HTML** — `Meta Pixel - Lead`:

```html
<script>
fbq('track', 'Lead', { content_name: {{DLV - content_name}} });
</script>
```

- **Trigger:** `CE - generate_lead`
- **Tag Sequencing → Fire a tag before:** `Meta Pixel Base`

### C.5 Submit & publish

1. **Preview** (правый верх) → откроется Tag Assistant. Введи `https://founders-circle.space/ru` → ходи по сайту, проверь что все события подсвечиваются.
2. Когда всё ок → **Submit → Publish** с описанием `Initial analytics setup`.

---

## Phase D · GA4 settings (15 мин)

Открой https://analytics.google.com → твой property `G-5FTW2XFHE6`.

### D.1 Mark Key Events

**Admin → Events → Mark as key event** для:
- `purchase`
- `begin_checkout`
- `view_item`
- `generate_lead`

### D.2 Self-referral exclusions (КРИТИЧНО)

Без этого Stripe и Telegram съедят атрибуцию.

**Admin → Data Streams → клик по стриму → Configure tag settings → List unwanted referrals → Add condition:**
- Referral domain **contains** `buy.stripe.com`
- Referral domain **contains** `checkout.stripe.com`
- Referral domain **contains** `t.me`

### D.3 Google Signals (для демографии и интересов)

**Admin → Data Settings → Data Collection → Enable Google signals data collection** → On.

### D.4 Data Retention

**Admin → Data Settings → Data Retention** → выбери **14 months**.

### D.5 Measurement Protocol API Secret

Нужен для server-side фаера из tfc-bot.

**Admin → Data Streams → клик по стриму → Measurement Protocol API secrets → Create**:
- Nickname: `tfc-bot-server`
- Скопируй **Secret value** — пригодится в Phase E.

### D.6 Funnel Exploration

**Explore → Blank → Funnel exploration**

Steps:
1. `view_item` (event_name = view_item)
2. `begin_checkout`
3. `purchase`

Breakdown: `first_utm_source` (Custom dimension — создай в Admin → Custom Definitions → `first_utm_source`, event-scoped).

Это будет твой главный отчёт **«что улучшать»** — где люди отваливаются и какой источник конвертит лучше.

### D.7 Custom dimensions для UTM-полей

**Admin → Custom Definitions → Create custom dimension** для каждой:

| Dimension name | Scope | Event parameter |
| --- | --- | --- |
| `first_utm_source` | Event | `first_utm_source` |
| `first_utm_campaign` | Event | `first_utm_campaign` |
| `first_utm_content` | Event | `first_utm_content` |
| `cta_location` | Event | `cta_location` |

---

## Phase E · Server-side conversions — Railway env vars (5 мин)

Код уже лежит в `~/Downloads/tfc-bot/bot/services/conversions.py`. Активируется автоматически как только появятся env vars.

1. Открой https://railway.app → проект tfc-bot → service tfc-bot → **Variables**
2. Добавь:
   ```
   GA4_MEASUREMENT_ID=G-5FTW2XFHE6
   GA4_API_SECRET=<из Phase D.5>
   META_PIXEL_ID=1742756813766230
   META_CAPI_ACCESS_TOKEN=<твой существующий CAPI access token>
   ```
   `META_CAPI_TEST_EVENT_CODE` оставь пустым (опциональный — нужен только для отладки в Events Manager → Test Events).
3. Деплой:
   ```bash
   cd ~/Downloads/tfc-bot
   railway up --service tfc-bot
   ```
4. **Тест:** активируй тестовый email через бот. В логах должно быть `fire_purchase_done session=cs_... email_hash=...`. В GA4 Realtime → events → должен прилететь второй `purchase` через ~1 минуту. В Meta Events Manager → Activity → проверь что Purchase события идут и Event Match Quality поднимается до Good+.

---

## Phase F · Meta Custom Audiences для ретаргета (15 мин)

После того как GA4 + Pixel начнут собирать данные (1-3 дня для базовой аудитории), создай в **Meta Ads Manager → Audiences → Create audience → Custom Audience → Website**:

| Audience name | Rule |
| --- | --- |
| `MC - All visitors 30d` | All website visitors, **Retention 30 days** |
| `MC - All visitors 90d` | All website visitors, **Retention 90 days** |
| `MC - Begin checkout, no purchase 30d` | People who: `InitiateCheckout` event in last 30d AND NOT `Purchase` event in last 30d |
| `MC - View Content, no purchase 30d` | `ViewContent` AND NOT `Purchase` (last 30d) |
| `MC - Purchasers (seed)` | `Purchase` event, retention 180 days |

После накопления ~50-100 Purchase событий — создай **Lookalike**:
- **Audiences → Create → Lookalike Audience**
- Source: `MC - Purchasers (seed)`
- Country: Israel + Russia + Ukraine (или твой основной рынок)
- Size: **1%** (самый горячий)

До набора достаточного количества покупателей — Lookalike делай от `MC - All visitors 30d` или `MC - Begin checkout, no purchase 30d`.

---

## Phase G · UTM template для Meta-объявлений (3 мин)

В Meta Ads Manager → Ad level → **URL parameters** — копируй эту строку:

```
utm_source=meta&utm_medium=paid_social&utm_campaign={{campaign.name}}&utm_content={{ad.name}}&utm_term={{adset.name}}
```

Meta автоматически подставит реальные имена. Без этой строки все Meta-визиты в GA4 будут схлопываться в один источник — ты не увидишь, какая creative работает.

---

## Phase H · Optimization в Meta-кампаниях

Когда наберёшь ~30+ Purchase событий в Events Manager:

1. **Ads Manager → новая кампания → Objective: Sales**
2. **Conversion event:** `Purchase`
3. **Attribution setting:** 7-day click, 1-day view (Meta default 2026)
4. **Audience:** старт с Lookalike 1% от Purchasers + интересы; ретаргет — `MC - Begin checkout, no purchase 30d`

---

## Verification checklist

Запустить после Phase A-E:

- [ ] `https://founders-circle.space/ru` загружается, в DevTools → Network фильтр `gtm.js` показывает успешную загрузку
- [ ] DevTools Console: `window.dataLayer` содержит `gtm.start`, `view_item_list`
- [ ] Клик «Купить за $19» → в Console: `window.dataLayer` появилось `begin_checkout` с `event_id`, `value: 19`
- [ ] После тестовой оплаты Stripe URL содержит `?session_id=cs_test_xxx`
- [ ] На `/mini-course/thank-you?session_id=cs_test_xxx` в Console: `dataLayer` содержит `purchase` с `transaction_id: cs_test_xxx`
- [ ] Refresh thank-you → второй `purchase` НЕ срабатывает (dedup работает)
- [ ] GA4 Realtime → события `purchase`, `begin_checkout`, `view_item` появляются
- [ ] Meta Events Manager → Test Events: те же события приходят с `eventID`, дедуп с CAPI отмечается зелёным
- [ ] tfc-bot logs (Railway → Deployments → Logs): `fire_purchase_done session=cs_...` после тестовой активации

---

## Что трекается и зачем — справочник

| Событие | Где срабатывает | Что отвечает |
| --- | --- | --- |
| `view_item_list` | Загрузка `/mini-course` | Сколько уников приходит на лендинг |
| `view_item` | Скролл до секции `#buy` | Конверсия лендинг → серьёзный интерес |
| `begin_checkout` | Клик на любую из 3 кнопок «Купить» | Конверсия интерес → попытка оплаты |
| `purchase` (browser) | Загрузка `/thank-you?session_id=` | Конверсия попытка → оплата |
| `purchase` (server) | Активация в tfc-bot | Catch-all для тех, кого браузерный не словил (AdBlock, ITP) |
| `generate_lead` | Submit формы на Landing/Apply/NewLanding | Лиды акселератора, не курса |
| `select_content` | Клик «Открыть Telegram-бота» на thank-you | Доля купивших, которые реально пошли активировать |
| `web_vital` | Auto (LCP, INP, CLS, FCP, TTFB) | Скорость лендинга для платных визитов |

---

## Когда что-то сломалось

- **Покупка не пришла в GA4** → DevTools → Network → найди `google-analytics.com/g/collect` после клика. Если запроса нет → GTM-тег не отстрелил, проверь триггер. Если есть и 200 OK → жди ~1 минуту GA4 Realtime.
- **Meta Event Match Quality < Good** → Pixel и CAPI отправляют разный `event_id`. Проверь что Pixel шлёт `eventID: {{DLV - transaction_id}}` (Phase C.4) и сервер шлёт `event_id: stripe_session_id` (уже так).
- **Stripe не редиректит с session_id** → Phase A не сделана, перепроверь Payment Link.
- **tfc-bot не шлёт server purchase** → проверь Railway logs на `ga4_mp_send_failed` или `meta_capi_send_failed`. Чаще всего `GA4_API_SECRET` или `META_CAPI_ACCESS_TOKEN` не выставлены.

---

После Phase A-E ты получишь полную воронку с двух источников truth. Phase F-H — для самой рекламы. Удачи.
