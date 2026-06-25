import { type MouseEvent, useEffect, useRef, useState } from "react";
import { SEO, breadcrumb } from "@/components/SEO";
import { trackBeginCheckout, trackSelectContent, trackViewItem, trackViewItemList } from "@/lib/analytics";
import "./mini-course-landing/styles.css";
import "./recorded-course-landing/styles.css";

const michaelPhoto = "/images/michael.jpg";

/* ------------------------------------------------------------------ *
 * PRICING CONFIG — single source of truth. Edit here only.
 * Stripe Payment Links (live), created 2026-06-25:
 *   $397 → plink_1Tm6vkH48tuRDAGFY8piOXkJ
 *   $997 → plink_1Tm6w6H48tuRDAGFyn93Hm8I
 * ------------------------------------------------------------------ */
const TIER_RECORDED = {
  id: "recorded",
  price: 397,
  futurePrice: 597, // "soft launch" struck price — first-wave anchor, not a countdown
  checkoutUrl: "https://buy.stripe.com/00weVd1QQ9QugYRf5Z8k80b",
};
const TIER_MENTOR = {
  id: "mentor",
  price: 997,
  futurePrice: 1497,
  checkoutUrl: "https://buy.stripe.com/8x28wP8fe3s6381cXR8k80c",
};

// Social proof — deterministic, grows slowly. Big course is newer than the
// mini-course, so the base is intentionally modest and honest.
const STUDENT_BASE = 74;
const STUDENT_PER_WEEK = 3;
const STUDENT_ANCHOR = Date.UTC(2026, 5, 24); // 2026-06-24
const RATING = 4.9;

function studentCount(): number {
  const weeks = Math.floor((Date.now() - STUDENT_ANCHOR) / (7 * 86400000));
  return STUDENT_BASE + STUDENT_PER_WEEK * Math.max(0, weeks);
}

function onBuyClick(cta: string, value: number): void {
  trackBeginCheckout(cta, value);
}

// Support manager — Telegram. The "talk to a human" button for hesitant visitors.
const MANAGER_TG = "https://t.me/yelyzaveta96";
function onManagerClick(): void {
  trackSelectContent("manager_telegram", "yelyzaveta96");
}

const CHECK_ICON = (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const TG_ICON = (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M21.94 4.66a1.2 1.2 0 0 0-1.27-.2L3.36 11.3c-.86.34-.83 1.58.04 1.88l4.3 1.47 1.64 5.02c.24.74 1.17.96 1.72.4l2.4-2.42 4.2 3.1c.6.44 1.46.12 1.62-.6l3.07-14.2c.1-.45-.06-.9-.41-1.17ZM9.7 14.13l8.2-5.1c.16-.1.33.12.19.25l-6.62 6.16c-.23.22-.38.51-.43.83l-.23 1.5c-.03.2-.31.22-.37.03l-.86-2.8a.86.86 0 0 1 .35-1.04Z" />
  </svg>
);

/* ------------------------------------------------------------------ *
 * Hero
 * ------------------------------------------------------------------ */
function TopBar() {
  return (
    <div className="mcl-top-bar">
      <span className="mcl-top-bar-full">
        <span className="mcl-top-bar-dot" aria-hidden="true" /> Стартовая цена первой волны · потом дороже
      </span>
      <span className="mcl-top-bar-short">
        <span className="mcl-top-bar-dot" aria-hidden="true" /> Цена первой волны
      </span>
    </div>
  );
}

function scrollToBuy(e: MouseEvent) {
  e.preventDefault();
  document.getElementById("buy")?.scrollIntoView({ behavior: "smooth", block: "start" });
}

function Hero() {
  return (
    <header className="mcl-hero">
      <div className="mcl-container">
        <div className="rcl-metaline rcl-hero-rise d1">
          <span>17 уроков</span><i aria-hidden="true" />
          <span>3 фазы</span><i aria-hidden="true" />
          <span>доступ навсегда</span>
        </div>
        <h1 className="rcl-hero-rise d1">Преврати свой продукт в бизнес, <em>который покупают</em></h1>
        <p className="rcl-hero-sub rcl-hero-rise d2">
          Пошаговая система от сырого прототипа до первых платящих клиентов — на реальных кейсах моих компаний с <strong>двумя экзитами</strong> и <strong>50 000+ платящими пользователями</strong>. Что строить, как строить и как это продать.
        </p>

        <div className="rcl-transform rcl-hero-rise d3" role="img" aria-label="От прототипа к бизнесу с платящими клиентами за 3 фазы и 17 уроков">
          <div className="rcl-transform-node rcl-transform-node--from">
            <span className="rcl-transform-kicker">сейчас</span>
            <span className="rcl-transform-label">Прототип / MVP</span>
          </div>
          <div className="rcl-transform-arrow" aria-hidden="true" />
          <div className="rcl-transform-node rcl-transform-node--to">
            <span className="rcl-transform-kicker">результат</span>
            <span className="rcl-transform-label">Бизнес с платящими</span>
          </div>
        </div>
        <div className="rcl-transform-cap rcl-hero-rise d3" aria-hidden="true">
          <span>3 фазы</span><i /><span>17 уроков</span><i /><span>3 месяца</span>
        </div>

        <div className="rcl-hero-cta-wrap rcl-hero-rise d4">
          <a href="#buy" className="mcl-cta-primary" onClick={scrollToBuy}>Получить доступ</a>
          <div className="rcl-hero-cta-sub">
            2 тарифа · от <b>${TIER_RECORDED.price}</b> · доступ навсегда · возврат 7 дней
          </div>
        </div>

        <div className="rcl-hero-proof rcl-hero-rise d5">
          <span className="rcl-hero-proof-stars" aria-hidden="true">★★★★★</span>
          <span><b>{RATING}</b>/5</span>
          <i aria-hidden="true" />
          <span><b>{studentCount()}</b> фаундеров уже учатся</span>
        </div>
      </div>
    </header>
  );
}

function FounderStrip() {
  return (
    <div className="mcl-founder-strip">
      <div className="mcl-container-wide">
        <div className="mcl-founder-strip-inner">
          <a
            className="mcl-founder-strip-label mcl-linkedin-link"
            href="https://www.linkedin.com/in/michael-barbarich"
            target="_blank"
            rel="noopener noreferrer"
            title="Открыть LinkedIn в новой вкладке"
          >
            Михаэль Барбарич · 16 лет в продуктах
          </a>
          <div className="mcl-founder-stats">
            <div>
              <div className="mcl-founder-stat-num"><em>2</em> экзита</div>
              <div className="mcl-founder-stat-label">Проданные компании</div>
            </div>
            <div>
              <div className="mcl-founder-stat-num">50K<em>+</em></div>
              <div className="mcl-founder-stat-label">Платящих юзеров в 107 странах</div>
            </div>
            <div>
              <div className="mcl-founder-stat-num">$8M<em></em></div>
              <div className="mcl-founder-stat-label">ARR одного из продуктов</div>
            </div>
            <div>
              <div className="mcl-founder-stat-num"><em>2×</em></div>
              <div className="mcl-founder-stat-label">Активных AI-стартапа сейчас</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ *
 * For whom / transformation
 * ------------------------------------------------------------------ */
function ForWhom() {
  const pairs = [
    {
      before: "Есть прототип или MVP, но ни одного платящего клиента",
      after: "Первые платящие — собранные руками, до «идеального» продукта",
    },
    {
      before: "Не понимаешь, кому и за что это продавать",
      after: "Узкое позиционирование и цена, от которых «щёлкает»",
    },
    {
      before: "Строишь фичи, но юзеры не возвращаются",
      after: "Aha-moment, онбординг и 5 механик ретеншена",
    },
    {
      before: "Запуск = пост в соцсетях и тишина",
      after: "Упаковка, Meta-реклама и B2B-аутрич, которые приводят клиентов",
    },
    {
      before: "Делаешь всё в одиночку и тонешь",
      after: "Claude Code как AI-кофаундер + 3 личные консультации со мной",
    },
  ] as const;
  return (
    <section className="mcl-pain">
      <div className="mcl-container">
        <div className="mcl-section-label">Для кого эта программа</div>
        <h2 className="mcl-section-title">Где ты сейчас — и где будешь <em>через 3 месяца</em>.</h2>
        <div className="mcl-stat-callout">
          <div className="mcl-stat-big">87%</div>
          <div className="mcl-stat-text">AI-проектов не доходят до продакшена. Не потому, что плохо построены — а потому, что построены не для того, кто заплатит. Эта программа — про вторую половину пути: превратить продукт в бизнес с платящими.</div>
        </div>
        <div className="mcl-ba-table" role="table" aria-label="До и после программы">
          <div className="mcl-ba-thead" role="row">
            <div className="mcl-ba-th mcl-ba-th--before" role="columnheader">Сейчас</div>
            <div className="mcl-ba-th mcl-ba-th--after" role="columnheader">После программы</div>
          </div>
          {pairs.map(({ before, after }) => (
            <div key={before} className="mcl-ba-tr" role="row">
              <div className="mcl-ba-td mcl-ba-td--before" role="cell">
                <span className="mcl-ba-tag mcl-ba-tag--before" aria-hidden="true">Сейчас</span>
                {before}
              </div>
              <div className="mcl-ba-td mcl-ba-td--after" role="cell">
                <span className="mcl-ba-tag mcl-ba-tag--after" aria-hidden="true">После</span>
                {after}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section>
      <div className="mcl-container">
        <div className="mcl-section-label">Кто я</div>
        <h2 className="mcl-section-title">Я не <em>учу</em> запускать продукты. Я их <em>запускаю</em>.</h2>
        <p className="mcl-section-intro">
          Эта программа — выжимка моих 16 лет в продуктах, двух экзитов и компаний, которые я сейчас веду как CEO и solo-фаундер. Никаких теоретических фреймворков из чужих книг — только то, что работает у меня прямо сейчас.
        </p>
        <div className="mcl-about-card">
          <img className="mcl-about-photo" src={michaelPhoto} alt="Михаэль Барбарич" loading="lazy" />
          <div>
            <a
              className="mcl-about-name mcl-linkedin-link"
              href="https://www.linkedin.com/in/michael-barbarich"
              target="_blank"
              rel="noopener noreferrer"
              title="Открыть LinkedIn в новой вкладке"
            >
              Михаэль Барбарич
            </a>
            <div className="mcl-about-role">Serial entrepreneur · Tel Aviv · 2 экзита · CEO MetaMinder · Solo-founder Mikey AI</div>
            <p className="mcl-about-quote">
              «То, что раньше делала команда из 20 человек, я сейчас делаю один — с AI. И при этом мои продукты лучше, чем были тогда.»
            </p>
            <ul className="mcl-about-bullets">
              <li><span><strong>B-rich Education</strong> — мой первый бизнес в 18 лет. С $10 бюджета вырос до 2000+ студентов и 20 преподавателей.</span></li>
              <li><span><strong>RunEverywhere</strong> — спортивная B2C-платформа. 50,000+ платящих пользователей в 107 странах.</span></li>
              <li><span><strong>ForexTester</strong> — антикризисный CEO финтех-продукта.</span></li>
              <li><span><strong>MetaMinder</strong> — B2B AI-powered платформа для обучения фронтлайн-персонала. Клиенты на всех континентах.</span></li>
              <li><span><strong>Mikey AI</strong> — AI-matchmaking дейтинг-приложение. Построил один, без программирования, с нуля.</span></li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ *
 * Curriculum — 17 lessons grouped into 3 months
 * ------------------------------------------------------------------ */
type Row = { num: string; title: string; desc: string; intro?: boolean };
type Month = { num: string; title: string; sub: string; icon: string; rows: Row[] };

const PROGRAM: readonly Month[] = [
  {
    num: "Старт",
    title: "Вводный урок",
    sub: "О чём программа и как из неё выжать максимум",
    icon: "✦",
    rows: [
      { num: "00", title: "От прототипа до бизнеса, который покупают", desc: "Карта всей программы и главная идея: построить продукт легко, построить продукт, который покупают — настоящая работа. Три блока пути и как с ними работать.", intro: true },
    ],
  },
  {
    num: "Месяц 1",
    title: "Валидация и фундамент",
    sub: "Что строить — и для кого",
    icon: "🔍",
    rows: [
      { num: "01", title: "Конкурентный анализ и проверка идеи", desc: "Карта конкурентов с AI и Deep Research, их слабые места, реальные боли рынка, smoke-тест спроса и одно узкое позиционирование." },
      { num: "02", title: "Customer development", desc: "Сначала количественные опросы — понять суть и масштаб проблемы и родить гипотезы. Потом кастдев-интервью по The Mom Test, чтобы лично их провалидировать. Action-gate." },
      { num: "03", title: "Позиционирование, цена и MVP", desc: "Как сформулировать позиционирование, назначить цену, которую готовы платить, и определить минимальный продукт, который её отрабатывает." },
      { num: "04", title: "Продукт, лендинг и первые платежи", desc: "Лендинг по моим промптам, подключение Stripe, первые реальные платежи и возвраты. Главный кейс — RunEverywhere." },
      { num: "05", title: "Первые 10 клиентов до готового продукта", desc: "Холодный аутрич, pre-sale и waitlist. Как закрыть первых платящих руками, пока продукт ещё не готов." },
    ],
  },
  {
    num: "Месяц 2",
    title: "Построение продукта",
    sub: "Что и как строить — и как удержать юзера",
    icon: "🛠",
    rows: [
      { num: "06", title: "Claude Code как AI-кофаундер", desc: "Agentic engineering: MCP, skills, plan mode. Как управлять AI как джуном и собирать фичи за часы, а не недели." },
      { num: "07", title: "Aha-moment и первый экран", desc: "Момент, в который юзер понимает ценность. Как спроектировать первый экран так, чтобы до него дошли." },
      { num: "08", title: "Первые 3 экрана онбординга", desc: "Онбординг, который доводит до ценности, а не отпугивает. Реальные паттерны из моих продуктов." },
      { num: "09", title: "Retention — 5 механик", desc: "Почему юзеры не возвращаются и 5 конкретных механик, которые это чинят." },
      { num: "10", title: "Сторителлинг и контент", desc: "Как рассказывать о продукте так, чтобы его хотели. Контент, который продаёт без тебя." },
    ],
  },
  {
    num: "Месяц 3",
    title: "Запуск, продажи, рост",
    sub: "Как продать то, что построил",
    icon: "🚀",
    rows: [
      { num: "11", title: "Метрики, воронка и PMF", desc: "9-axis PMF, тест Sean Ellis, что измерять и как читать воронку без самообмана." },
      { num: "12", title: "Упаковка и запуск", desc: "Три кита запуска (позиционирование, визуал, креативы) и три воркшопа сборки." },
      { num: "13", title: "Реклама в Meta", desc: "Live-воркшоп: Andromeda, Advantage+, пиксель и события. Связка, которая выходит в плюс." },
      { num: "14", title: "B2B Sales Motion", desc: "ICP → Dream 50 → close. Аутрич-стек (Apollo + Instantly) и как закрывать B2B-сделки." },
      { num: "15", title: "Привлечение средств", desc: "Bootstrap vs raise, pitch deck, как и когда поднимать деньги — и когда не стоит." },
      { num: "16", title: "Партнёрства и distribution moats", desc: "Каналы дистрибуции и партнёрства как защищённое преимущество. Финал программы." },
    ],
  },
];

function Curriculum() {
  return (
    <section className="rcl-program">
      <div className="mcl-container-wide">
        <div className="rcl-program-head">
          <div className="mcl-section-label">Программа</div>
          <h2 className="mcl-section-title">17 уроков. <em>От идеи до первого платящего клиента.</em></h2>
          <p className="mcl-section-intro">
            Вводный урок плюс три фазы. Каждый урок — конкретный навык с заданиями, шаблонами и промптами. Свой темп, доступ навсегда.
          </p>
        </div>

        {PROGRAM.map((m, i) => {
          const kicker = m.rows[0]?.intro
            ? "Вводный урок"
            : `Фаза ${i} · ${m.rows.length} ${m.rows.length === 1 ? "урок" : "уроков"}`;
          return (
            <div className="rcl-phase" key={m.num}>
              <div className="rcl-phase-head">
                <div className="rcl-phase-icon" aria-hidden="true">{m.icon}</div>
                <div className="rcl-phase-headtext">
                  <div className="rcl-phase-kicker">{kicker}</div>
                  <h3 className="rcl-phase-title">{m.title}</h3>
                  <p className="rcl-phase-sub">{m.sub}</p>
                </div>
              </div>
              <div className={`rcl-lesson-grid${m.rows[0]?.intro ? " rcl-lesson-grid--single" : ""}`}>
                {m.rows.map((r) => (
                  <article className={`rcl-lcard${r.intro ? " rcl-lcard--intro" : ""}`} key={r.num}>
                    <span className="rcl-lcard-num">{r.num}</span>
                    <h4 className="rcl-lcard-title">{r.title}</h4>
                    <p className="rcl-lcard-desc">{r.desc}</p>
                  </article>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ *
 * Bonuses / what you get
 * ------------------------------------------------------------------ */
const BONUSES = [
  { i: "🤖", t: "Доступ к моим личным AI-агентам", d: "Готовые агенты на Claude Code, которыми я делаю контент, аутрич и ресерч в TFC, Mikey и MetaMinder." },
  { i: "⚡", t: "Промпты для разработки и лендингов", d: "Реальные промпты, которыми я делаю лендинги за 30 минут и MVP-фичи за час. Скопировал → вставил → работает." },
  { i: "📋", t: "Шаблоны на каждый этап", d: "Customer development, скрипты аутрича, pitch deck, чек-листы запуска — всё, что применяю сам." },
  { i: "🚀", t: "Свежие практики Claude Code", d: "Самые актуальные воркфлоу agentic engineering на момент записи. То, что работает прямо сейчас." },
  { i: "📊", t: "Презентации всех 17 уроков", d: "Слайды можно пересмотреть без видео, скопировать схемы и использовать как чек-листы." },
  { i: "∞", t: "Доступ навсегда + обновления", d: "Купил один раз — получаешь все будущие обновления. Воркфлоу AI меняются каждые 3 месяца, ты всегда актуален." },
] as const;

function Bonuses() {
  return (
    <section className="mcl-bonus" id="bonuses">
      <div className="mcl-container">
        <div className="mcl-section-label">Что внутри</div>
        <h2 className="mcl-section-title">Не только видео. <em>Весь мой рабочий стек.</em></h2>
        <p className="mcl-section-intro">
          Оба тарифа включают полную программу плюс рабочий набор — инструменты, шаблоны и промпты, которыми я пользуюсь сам каждый день.
        </p>
        <div className="mcl-bonus-grid">
          {BONUSES.map((b) => (
            <div className="mcl-bonus-item" key={b.t}>
              <div className="mcl-bonus-icon">{b.i}</div>
              <div className="mcl-bonus-content">
                <div className="mcl-bonus-title">{b.t}</div>
                <div className="mcl-bonus-desc">{b.d}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ *
 * Live consultations (the $997 differentiator)
 * ------------------------------------------------------------------ */
function Consultations() {
  return (
    <section className="rcl-consult">
      <div className="mcl-container">
        <div className="mcl-section-label">Работа со мной лично</div>
        <h2 className="mcl-section-title">Проходи программу <em>не один</em></h2>
        <p className="mcl-section-intro">
          Есть формат, где я разбираю твой продукт лично: три часовые консультации 1:1 по видеосвязи — по мере твоего продвижения по курсу, ровно тогда, когда они нужнее всего. Это не созвоны «вообще» — мы разбираем именно твой продукт.
        </p>
        <div className="rcl-consult-grid">
          <div className="rcl-consult-card">
            <div className="rcl-consult-card-num">Консультация 1 · после Месяца 1</div>
            <div className="rcl-consult-card-title">Валидация и позиционирование</div>
            <p className="rcl-consult-card-desc">
              Разбираем твой рынок, результаты интервью и опросов и твоё позиционирование. Выходишь с одной чёткой формулировкой, за что и кому продавать.
            </p>
          </div>
          <div className="rcl-consult-card">
            <div className="rcl-consult-card-num">Консультация 2 · после Месяца 2</div>
            <div className="rcl-consult-card-title">Продукт, онбординг, ретеншн</div>
            <p className="rcl-consult-card-desc">
              Смотрим на твой продукт глазами пользователя: aha-moment, первые экраны, что чинить в первую очередь, чтобы юзеры возвращались.
            </p>
          </div>
          <div className="rcl-consult-card">
            <div className="rcl-consult-card-num">Консультация 3 · после Месяца 3</div>
            <div className="rcl-consult-card-title">Запуск, продажи, рост</div>
            <p className="rcl-consult-card-desc">
              Готовим твой запуск: упаковка, каналы, первые платящие. Уходишь с конкретным планом действий на следующие недели.
            </p>
          </div>
        </div>
        <div className="rcl-consult-note">
          <strong>Почему это меняет всё:</strong> запись даёт тебе метод. Личная консультация даёт ответ на твой конкретный вопрос про твой конкретный продукт — то, чего не даст ни один видеоурок. Если хочешь идти не в одиночку — выбери формат с личной работой в тарифах ниже.
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ *
 * Comparison
 * ------------------------------------------------------------------ */
function Comparison() {
  const rows = [
    ["Структурированный путь", ["no", "Хаос"], ["no", "Нет"], ["yes", "17 уроков"], ["yes", "Да"]],
    ["Реальные кейсы из живых компаний", ["meh", "Чужие"], ["no", "Выдуманные"], ["yes", "Мои 4"], ["yes", "Свои"]],
    ["AI-агенты, промпты и шаблоны", ["no", "—"], ["no", "—"], ["yes", "Да"], ["meh", "Иногда"]],
    ["Личный разбор твоего продукта", ["no", "Нет"], ["no", "Нет"], ["yes", "В тарифе $997"], ["yes", "Да"]],
    ["Свой темп, доступ навсегда", ["meh", "Да, но хаос"], ["yes", "Да"], ["yes", "Да"], ["no", "По расписанию"]],
    ["Цена", ["yes", "$0"], ["yes", "$20/мес"], ["yes", "$397–997"], ["no", "$5,000+"]],
  ] as const;
  return (
    <section>
      <div className="mcl-container">
        <div className="mcl-section-label">Чем это отличается</div>
        <h2 className="mcl-section-title">YouTube бесплатный. Ментор за $5K — недоступен. <em>А это — посередине.</em></h2>
        <p className="mcl-section-intro">Честная таблица без вранья.</p>
        <div className="mcl-compare-wrap">
          <div className="mcl-compare-table">
            <div className="mcl-compare-row mcl-compare-row--head">
              <div className="mcl-compare-cell" />
              <div className="mcl-compare-cell">YouTube</div>
              <div className="mcl-compare-cell">ChatGPT</div>
              <div className="mcl-compare-cell mcl-highlight">Программа</div>
              <div className="mcl-compare-cell">Ментор $5K</div>
            </div>
            {rows.map((r) => (
              <div className="mcl-compare-row" key={r[0] as string}>
                <div className="mcl-compare-cell mcl-compare-cell--label">{r[0]}</div>
                {[1, 2, 3, 4].map((i) => {
                  const [cls, txt] = r[i] as [string, string];
                  const highlight = i === 3 ? " mcl-highlight" : "";
                  const colLabel = ["YouTube", "ChatGPT", "Программа", "Ментор $5K"][i - 1];
                  return (
                    <div className={`mcl-compare-cell${highlight}`} data-label={colLabel} key={i}>
                      <span className={`mcl-${cls}`}>{txt}</span>
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
        </div>
        <p style={{ fontSize: 14, color: "var(--mcl-text-muted)", marginTop: 24, lineHeight: 1.55 }}>
          <strong style={{ color: "var(--mcl-text)" }}>Если коротко:</strong> YouTube даёт информацию, но не путь. ChatGPT отвечает на твой вопрос, но не задаёт правильных вопросов тебе. Ментор за $5K — другой бюджет. Эта программа — самая короткая дорога от «у меня есть прототип» до «у меня есть платящие клиенты», а в тарифе $997 — ещё и с моим личным участием.
        </p>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ *
 * Cases + Social proof (reused from mini-course)
 * ------------------------------------------------------------------ */
const CASES = [
  { tag: "ВАЛИДАЦИЯ", name: "InterviewNinja", url: null, stat: "SaaS для рекрутинга · 18 месяцев · продукт мёртв", lesson: "как я игнорировал сигналы провала, потому что мне «было интересно строить», и сколько это стоило." },
  { tag: "ПОЗИЦИОНИРОВАНИЕ", name: "Mikey AI", url: "https://mymikey.ai", stat: "AI-дейтинг · solo-фаундер · построен с AI", lesson: "как выбрать нишу в категории с 200 конкурентами и сформулировать одно отличие, которое работает." },
  { tag: "РАЗРАБОТКА", name: "MetaMinder", url: "https://metaminder.com", stat: "B2B AI-платформа · клиенты на всех континентах", lesson: "как то, что раньше делала команда из 20 человек, я сейчас делаю один с AI — и почему это воркфлоу, а не магия." },
  { tag: "ЗАПУСК", name: "RunEverywhere", url: null, stat: "B2C · 50,000+ платящих в 107 странах", lesson: "первая рекламная кампания, которая сразу вышла в плюс и принесла 10,000 пользователей." },
] as const;

function Cases() {
  return (
    <section>
      <div className="mcl-container">
        <div className="mcl-section-label">Кейсы внутри</div>
        <h2 className="mcl-section-title">4 моих компании. <em>4 разных истории.</em></h2>
        <p className="mcl-section-intro">
          Программа построена вокруг реальных кейсов из моей практики — где я конкретно показываю, какую ошибку сделал, как её увидел и что сделал бы сейчас. Никакой анонимности и «один мой ученик».
        </p>
        <div className="mcl-cases-grid">
          {CASES.map((c) => (
            <div className="mcl-case-card" key={c.name}>
              <div className="mcl-case-tag">{c.tag}</div>
              <div className="mcl-case-name">
                {c.url ? (
                  <a href={c.url} target="_blank" rel="noopener noreferrer" className="mcl-case-link" title={`Открыть ${c.name} в новой вкладке`}>
                    {c.name}
                    <svg className="mcl-case-link-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M7 17L17 7" />
                      <path d="M8 7h9v9" />
                    </svg>
                  </a>
                ) : (
                  c.name
                )}
              </div>
              <div className="mcl-case-stat">{c.stat}</div>
              <div className="mcl-case-lesson"><strong>Чему учит:</strong> {c.lesson}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const TESTIMONIALS = [
  { text: "«После каждой сессии точно знаешь, что делать дальше. Никаких гаданий. Михаэль — практик с серьёзной экспертизой. Материал глубокий, подготовка безупречная. Это самая чёткая карта для стартапа, которая у меня была.»", img: "/images/Inna.png", n: "Инна и Александра", r: "Ко-фаундеры · Dira.click" },
  { text: "«Михаэль не просто объясняет теорию — он разбирает всё на своих проектах, а потом даёт практиковать прямо на сессии. Он берёт хаос и превращает его в систему.»", img: "/images/Vlad.png", n: "Влад", r: "Фаундер · Better WellBeing" },
  { text: "«После 3 сессий прогресс уже огромный. Как технический специалист, я наконец понимаю, как запускать и растить проект. Фокус на AI-инструментах — must-have сейчас.»", img: "/images/Leah.png", n: "Leah", r: "Фаундер · Default She" },
  { text: "«Структурно, понятно, профессионально. После каждой встречи есть реальное ощущение движения и результата. Я точно знаю, что делать дальше — и делаю.»", img: "/images/Mila.png", n: "Мила", r: "Фаундер · Hobbix" },
] as const;

function SocialProof() {
  return (
    <section className="mcl-social-section">
      <div className="mcl-container">
        <div className="mcl-section-label">Что говорят</div>
        <h2 className="mcl-section-title">Фаундеры, которые работают <em>со мной по этой методологии.</em></h2>
        <div className="mcl-social-note">
          Это фаундеры, которые проходят или уже прошли обучение со мной — по тем же принципам и инструментам, что и в программе. Говорят как есть, без прикрас.
        </div>
        <div className="mcl-testimonials">
          {TESTIMONIALS.map((t) => (
            <div className="mcl-testimonial" key={t.n}>
              <div className="mcl-testimonial-stars">★★★★★</div>
              <p className="mcl-testimonial-text">{t.text}</p>
              <div className="mcl-testimonial-author">
                <img className="mcl-testimonial-avatar mcl-testimonial-avatar--img" src={t.img} alt={t.n} loading="lazy" />
                <div className="mcl-testimonial-meta">
                  <div className="mcl-testimonial-name">{t.n}</div>
                  <div className="mcl-testimonial-role">{t.r}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ *
 * Pricing — two tiers
 * ------------------------------------------------------------------ */
function Pricing() {
  return (
    <section className="mcl-pricing" id="buy">
      <div className="mcl-container-wide">
        <div className="mcl-container" style={{ padding: 0 }}>
          <div className="mcl-section-label">Тарифы</div>
          <h2 className="mcl-section-title">Два пути. <em>Один результат — платящие клиенты.</em></h2>
          <p className="mcl-section-intro">
            Полная программа одинаковая в обоих тарифах. Разница в одном: проходишь ли ты её один или с тремя личными консультациями со мной. Стартовая цена первой волны — потом дороже.
          </p>
        </div>

        <div className="rcl-tiers">
          {/* Tier 1 — Recorded */}
          <div className="rcl-tier">
            <div className="rcl-tier-name">Курс в записи</div>
            <p className="rcl-tier-tagline">Вся программа в своём темпе. Учишься сам.</p>
            <div className="rcl-tier-price">
              <span className="rcl-tier-price-cur">$</span>
              <span className="rcl-tier-price-new">{TIER_RECORDED.price}</span>
              <span className="rcl-tier-price-old">${TIER_RECORDED.futurePrice}</span>
              <span className="rcl-tier-save">−${TIER_RECORDED.futurePrice - TIER_RECORDED.price}</span>
            </div>
            <p className="rcl-tier-note">Цена первой волны · потом ${TIER_RECORDED.futurePrice}</p>
            <ul className="rcl-tier-features">
              <li>Все 17 уроков (вводный + 3 месяца), ~15+ часов видео</li>
              <li>Задания, шаблоны и промпты к каждому уроку</li>
              <li>Доступ к моим личным AI-агентам</li>
              <li>Презентации всех уроков</li>
              <li>Свежие практики Claude Code</li>
              <li>4 разбора реальных кейсов из моих компаний</li>
              <li>Все будущие обновления бесплатно</li>
              <li className="rcl-tier-feature--muted">Личные консультации со мной</li>
            </ul>
            <a
              href={TIER_RECORDED.checkoutUrl}
              className="rcl-cta-secondary"
              onClick={() => onBuyClick("pricing_recorded", TIER_RECORDED.price)}
            >
              Купить за ${TIER_RECORDED.price}
            </a>
          </div>

          {/* Tier 2 — Recorded + 1:1 (featured) */}
          <div className="rcl-tier rcl-tier--featured">
            <span className="rcl-tier-badge">Рекомендую</span>
            <div className="rcl-tier-name">Курс + работа лично</div>
            <p className="rcl-tier-tagline">Вся программа + 3 личные консультации 1:1 со мной.</p>
            <div className="rcl-tier-price">
              <span className="rcl-tier-price-cur">$</span>
              <span className="rcl-tier-price-new">{TIER_MENTOR.price}</span>
              <span className="rcl-tier-price-old">${TIER_MENTOR.futurePrice}</span>
              <span className="rcl-tier-save">−${TIER_MENTOR.futurePrice - TIER_MENTOR.price}</span>
            </div>
            <p className="rcl-tier-note">Цена первой волны · потом ${TIER_MENTOR.futurePrice}</p>
            <ul className="rcl-tier-features">
              <li className="rcl-tier-feature--hero">Всё из тарифа «Курс в записи»</li>
              <li className="rcl-tier-feature--hero">3 личные часовые консультации 1:1</li>
              <li className="rcl-tier-feature--hero">Разбор твоего продукта по мере прохождения</li>
              <li>Консультация 1 — валидация и позиционирование</li>
              <li>Консультация 2 — продукт, онбординг, ретеншн</li>
              <li>Консультация 3 — запуск, продажи, рост</li>
              <li>Личная обратная связь на твои задания</li>
            </ul>
            <a
              href={TIER_MENTOR.checkoutUrl}
              className="mcl-cta-primary"
              onClick={() => onBuyClick("pricing_mentor", TIER_MENTOR.price)}
            >
              Купить за ${TIER_MENTOR.price}
            </a>
          </div>
        </div>

        <div className="mcl-container" style={{ padding: 0 }}>
          <div className="mcl-guarantee" style={{ marginTop: 28 }}>
            <div className="mcl-guarantee-icon">✓</div>
            <div className="mcl-guarantee-text">
              <strong>Гарантия возврата 7 дней</strong>
              Если в течение недели поймёшь, что программа не для тебя — верну деньги. Без анкет и удерживающих звонков.
            </div>
          </div>
          <p className="rcl-tier-foot-note">
            Не уверен, что готов к полной программе? Начни с <a href="/ru" style={{ color: "var(--mcl-text)", fontWeight: 600 }}>мини-курса за $19</a> — и зачти его при переходе.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ *
 * FAQ
 * ------------------------------------------------------------------ */
const FAQ_ITEMS = [
  { q: "Чем эта программа отличается от мини-курса за $19?", a: ["Мини-курс — 5 уроков, ~4 часа: быстрый проход от идеи до первого понимания, кому и что продавать. Это вход.", "Эта программа — 17 уроков на 3 месяца: вся дорога от валидации до построения продукта, запуска, продаж, рекламы, B2B-sales и привлечения средств. Глубже, полнее и с разборами реальных кейсов на каждом этапе."] },
  { q: "В чём разница между тарифами $397 и $997?", a: ["Программа внутри — одна и та же: все 17 уроков, шаблоны, промпты, агенты, доступ навсегда.", "В тарифе за <strong>$997</strong> добавляются 3 личные часовые консультации 1:1 со мной по мере прохождения курса — мы разбираем именно твой продукт. Если тебе важна обратная связь и личное участие, бери его. Если предпочитаешь идти сам в своём темпе — $397 даёт всю программу целиком."] },
  { q: "Как и когда проходят личные консультации?", a: ["По видеосвязи, по часу, в удобное время. Привязаны к твоему прогрессу: после Месяца 1 (валидация), Месяца 2 (продукт) и Месяца 3 (запуск).", "Ты бронируешь их сам по мере прохождения — не нужно подстраиваться под расписание группы. Это разбор твоего конкретного продукта, а не лекция."] },
  { q: "Мне нужно сначала пройти мини-курс?", a: ["Не обязательно. Программа самодостаточна и начинается с вводного урока, который вводит в контекст. Но если ты совсем в начале — мини-курс за $19 даёт быстрый и дешёвый способ понять мой подход, и его стоимость засчитывается при переходе."] },
  { q: "Я не программист. Программа для меня?", a: ["Я тоже не программист. Mikey AI я построил с нуля без единой строчки кода, написанной мной — всё через AI-агентов и промпты. Месяц 2 показывает это на конкретных задачах.", "Если открывал Lovable, Cursor или хотя бы ChatGPT — справишься."] },
  { q: "Сколько времени занимает программа?", a: ["Рассчитана на 3 месяца в комфортном темпе, но жёсткого расписания нет — проходишь как удобно. Доступ остаётся навсегда, включая все будущие обновления."] },
  { q: "На каком языке программа?", a: ["Все видео на русском. Презентации, шаблоны и промпты — на русском и английском, чтобы использовать их с международными командами и AI-агентами без перевода."] },
  { q: "Как происходит оплата и доступ?", a: ["Оплата через Stripe — карты, Apple Pay, Google Pay. Сразу после оплаты ты получаешь доступ ко всем урокам, презентациям и материалам. Доступ навсегда. Чек об оплате Stripe пришлёт на email.", "В тарифе $997 после оплаты ты также получаешь ссылку для бронирования личных консультаций."] },
  { q: "Что если мне не подойдёт?", a: ["7 дней на возврат. Просто пишешь мне на почту — я возвращаю деньги. Без форм, обоснований и удерживающих звонков."] },
] as const;

function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  return (
    <section>
      <div className="mcl-container">
        <div className="mcl-section-label">Частые вопросы</div>
        <h2 className="mcl-section-title">Вопросы, которые я <em>сам бы задал.</em></h2>
        <div className="mcl-faq-list">
          {FAQ_ITEMS.map((it, i) => (
            <div className={`mcl-faq-item${openIdx === i ? " mcl-open" : ""}`} key={it.q}>
              <button className="mcl-faq-q" type="button" onClick={() => setOpenIdx(openIdx === i ? null : i)}>
                {it.q}
              </button>
              <div className="mcl-faq-a">
                <div className="mcl-faq-a-inner">
                  {it.a.map((p, j) => <p key={j} dangerouslySetInnerHTML={{ __html: p }} />)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="mcl-final-cta">
      <div className="mcl-container">
        <h2>Продукт у тебя уже есть. <em>Сделаем из него бизнес.</em></h2>
        <p>
          17 уроков, реальные кейсы, весь мой рабочий стек — и, если выберешь, 3 личные консультации со мной. Самая короткая дорога от прототипа до платящих клиентов, которую я могу предложить.
        </p>
        <a href="#buy" className="mcl-cta-primary" onClick={scrollToBuy}>Выбрать тариф</a>
        <div className="mcl-hero-meta">
          <span className="mcl-hero-meta-item">{CHECK_ICON} Возврат 7 дней</span>
          <span className="mcl-hero-meta-item">{CHECK_ICON} Доступ навсегда</span>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ *
 * Manager help — the "talk to a human" decision-helper for hesitant visitors
 * ------------------------------------------------------------------ */
function ManagerHelp() {
  return (
    <section className="rcl-manager">
      <div className="mcl-container">
        <div className="rcl-manager-card">
          <div className="rcl-manager-icon" aria-hidden="true">{TG_ICON}</div>
          <div className="rcl-manager-body">
            <div className="rcl-manager-kicker">Остались вопросы?</div>
            <h2 className="rcl-manager-title">Сомневаешься, подойдёт ли тебе?</h2>
            <p className="rcl-manager-text">
              Напиши Елизавете, моему менеджеру — она ответит на любые вопросы и поможет выбрать тариф. Спокойно, без давления и продаж.
            </p>
          </div>
          <a
            href={MANAGER_TG}
            target="_blank"
            rel="noopener noreferrer"
            className="rcl-manager-cta"
            onClick={onManagerClick}
          >
            {TG_ICON} Написать менеджеру
          </a>
        </div>
      </div>
    </section>
  );
}

/** Persistent button — keeps the manager reachable from anywhere on the page.
 *  Shows who you're writing to (avatar + name + role) so it's not a mystery icon. */
function FloatingManager() {
  return (
    <a
      href={MANAGER_TG}
      target="_blank"
      rel="noopener noreferrer"
      className="rcl-fab"
      onClick={onManagerClick}
      aria-label="Задать вопрос в Telegram"
    >
      <span className="rcl-fab-avatar" aria-hidden="true">
        {TG_ICON}<i className="rcl-fab-dot" />
      </span>
      <span className="rcl-fab-text">Задай вопрос</span>
    </a>
  );
}

function Footer() {
  return (
    <footer className="mcl-footer">
      <div className="mcl-container">
        <div className="mcl-footer-links">
          <a href={MANAGER_TG} target="_blank" rel="noopener noreferrer" onClick={onManagerClick}>Написать менеджеру</a>
          <a href="mailto:michael.barbarych@gmail.com">michael.barbarych@gmail.com</a>
          <a href="/ru/privacy">Privacy Policy</a>
          <a href="/ru/terms">Terms of Service</a>
        </div>
        <div>© 2026 Michael Barbarich</div>
      </div>
    </footer>
  );
}

function RecordedCourseLandingInner() {
  const viewItemFired = useRef(false);

  useEffect(() => {
    document.title = "Большая программа — акселератор в записи · Михаэль Барбарич";
    document.body.classList.add("mcl-body");

    trackViewItemList("recorded-course-landing", TIER_MENTOR.price);

    const buyEl = document.getElementById("buy");
    let observer: IntersectionObserver | undefined;
    if (buyEl && "IntersectionObserver" in window) {
      observer = new IntersectionObserver(
        (entries) => {
          for (const e of entries) {
            if (e.isIntersecting && !viewItemFired.current) {
              viewItemFired.current = true;
              trackViewItem(TIER_MENTOR.price);
              observer?.disconnect();
            }
          }
        },
        { threshold: 0.3 },
      );
      observer.observe(buyEl);
    }

    return () => {
      document.body.classList.remove("mcl-body");
      observer?.disconnect();
    };
  }, []);

  return (
    <div className="mcl-root rcl-page">
      <SEO
        path="/ru/course"
        title="Большая программа — акселератор в записи · Михаэль Барбарич"
        description="17 уроков за 3 месяца: от валидации идеи до первых платящих клиентов, запуска, рекламы и продаж. Два тарифа: $397 курс в записи и $997 курс + 3 личные консультации 1:1."
        jsonLd={[
          {
            "@context": "https://schema.org",
            "@type": "Course",
            name: "Большая программа — акселератор в записи",
            description:
              "17 уроков за 3 месяца: от валидации идеи до первых платящих клиентов, запуска, рекламы и продаж.",
            provider: {
              "@type": "Organization",
              name: "The Founders Circle",
              url: "https://founders-circle.space",
            },
            instructor: {
              "@type": "Person",
              name: "Michael Barbarich",
              url: "https://founders-circle.space/ru/mentor",
            },
            inLanguage: "ru",
            offers: [
              {
                "@type": "Offer",
                name: "Курс в записи",
                price: String(TIER_RECORDED.price),
                priceCurrency: "USD",
                availability: "https://schema.org/InStock",
              },
              {
                "@type": "Offer",
                name: "Курс + 3 личные консультации",
                price: String(TIER_MENTOR.price),
                priceCurrency: "USD",
                availability: "https://schema.org/InStock",
              },
            ],
          },
          breadcrumb([
            { name: "Главная", path: "/" },
            { name: "Программа", path: "/ru/course" },
          ]),
        ]}
      />
      <TopBar />
      <Hero />
      <FounderStrip />
      <About />
      <ForWhom />
      <Curriculum />
      <Bonuses />
      <Consultations />
      <Comparison />
      <Cases />
      <SocialProof />
      <Pricing />
      <ManagerHelp />
      <FAQ />
      <FinalCTA />
      <Footer />
      <FloatingManager />
    </div>
  );
}

export default function RecordedCourseLanding() {
  return <RecordedCourseLandingInner />;
}
