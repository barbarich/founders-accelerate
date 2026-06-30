import { createContext, useContext, useEffect, useRef, useState, type ReactNode } from "react";
import { SEO, breadcrumb } from "@/components/SEO";
import {
  trackBeginCheckout,
  trackViewItem,
  trackViewItemList,
} from "@/lib/analytics";
import "./mini-course-landing/styles.css";

const michaelPhoto = "/images/michael.jpg";

// Stripe Payment Links — Mini-Course AI-Founder, both redirect to /mini-course/thank-you
const STRIPE_PRE_URL = "https://buy.stripe.com/cNibJ1gLKfaObEx3nh8k803"; // $19 — до 1 июля
const STRIPE_POST_URL = "https://buy.stripe.com/28E28reDCfaO4c57Dx8k80d"; // $37 — с 1 июля

// --- Цена меняется глобально в ночь на 2 июля по Израилю -------------------
// 2026-07-02 00:00 Israel (IDT, UTC+3) === 2026-07-01 21:00 UTC.
// $19 действует по 1 июля включительно; в ночь на 2 июля — переход на следующую цену.
// Один фиксированный момент → у всех посетителей цена переключается одновременно.
const PRICE_FLIP_AT = Date.UTC(2026, 6, 1, 21, 0, 0);

const PRE_PRICE = 19; // действующая цена до 1 июля
const POST_PRICE = 37; // цена с 1 июля
const POST_OLD_PRICE = 249; // зачёркнутый якорь после 1 июля
const PRE_DISCOUNT = Math.round(((POST_PRICE - PRE_PRICE) / POST_PRICE) * 100); // экономия против будущей цены ≈ 49%
const POST_DISCOUNT = Math.round(((POST_OLD_PRICE - POST_PRICE) / POST_OLD_PRICE) * 100); // ≈ 85%

// После 1 июля — 7-дневный таймер срочности на посетителя. Цена при этом НЕ меняется
// (остаётся $37, как и было изначально с «мёртвым» 7-дневным таймером).
const POST_TIMER_MS = 7 * 24 * 60 * 60 * 1000;
const POST_DEADLINE_KEY = "mc_post_deadline_v1";

// Social proof — deterministic: every visitor sees the same number on a given day, +30/day
const PURCHASE_BASE = 1037;
const PURCHASE_PER_DAY = 30;
const PURCHASE_ANCHOR = Date.UTC(2026, 5, 2); // 2026-06-02; bump to launch day to reset the base
const RATING = 4.8;

function purchaseCount(): number {
  const days = Math.floor((Date.now() - PURCHASE_ANCHOR) / 86400000);
  return PURCHASE_BASE + PURCHASE_PER_DAY * Math.max(0, days);
}

type Phase = "pre" | "post";

type Offer = {
  phase: Phase; // pre = до 1 июля ($19), post = с 1 июля ($37)
  price: number; // current buyable price
  oldPrice: number | null; // struck anchor price (только в post — $249)
  discountLabel: string | null; // pill у цены: pre = "скоро $37", post = "−85%"
  discount: number; // % для коротких подписей
  checkoutUrl: string;
  timerActive: boolean; // есть ли живой обратный отсчёт
  d: string;
  h: string;
  m: string;
  s: string; // zero-padded countdown parts
};

const pad2 = (n: number) => String(Math.max(0, n)).padStart(2, "0");

/** Разбить миллисекунды на дни/часы/минуты/секунды (с ведущими нулями). */
function split(ms: number): { d: string; h: string; m: string; s: string } {
  const t = Math.max(0, ms);
  return {
    d: pad2(Math.floor(t / 86400000)),
    h: pad2(Math.floor((t % 86400000) / 3600000)),
    m: pad2(Math.floor((t % 3600000) / 60000)),
    s: pad2(Math.floor((t % 60000) / 1000)),
  };
}

/** Read (or lazily create) this browser's personal 7-day post-flip deadline. */
function readPostDeadline(now: number): number {
  try {
    const raw = localStorage.getItem(POST_DEADLINE_KEY);
    const d = raw ? parseInt(raw, 10) : NaN;
    if (!raw || Number.isNaN(d)) {
      const fresh = now + POST_TIMER_MS;
      localStorage.setItem(POST_DEADLINE_KEY, String(fresh));
      return fresh;
    }
    return d;
  } catch {
    // private mode — keep a fresh urgency window rather than locking them out
    return now + POST_TIMER_MS;
  }
}

function computeOffer(now: number, postDeadline: number): Offer {
  // --- ДО 1 июля: цена $19, отсчёт до повышения ---------------------------
  if (now < PRICE_FLIP_AT) {
    return {
      phase: "pre",
      price: PRE_PRICE,
      oldPrice: null,
      discountLabel: `скоро $${POST_PRICE}`,
      discount: PRE_DISCOUNT,
      checkoutUrl: STRIPE_PRE_URL,
      timerActive: true,
      ...split(PRICE_FLIP_AT - now),
    };
  }
  // --- С 1 июля: цена $37 (зачёркнуто $249), 7-дневный таймер срочности ----
  const ms = postDeadline - now;
  const timerActive = ms > 0;
  return {
    phase: "post",
    price: POST_PRICE,
    oldPrice: POST_OLD_PRICE,
    discountLabel: `−${POST_DISCOUNT}%`,
    discount: POST_DISCOUNT,
    checkoutUrl: STRIPE_POST_URL,
    timerActive, // по истечении таймер исчезает, но цена остаётся $37
    ...split(timerActive ? ms : 0),
  };
}

/** SSR/first-paint safe snapshot. localStorage only touched on the client. */
function snapshot(): Offer {
  const now = Date.now();
  if (now < PRICE_FLIP_AT) return computeOffer(now, 0);
  const dl = typeof window !== "undefined" ? readPostDeadline(now) : now + POST_TIMER_MS;
  return computeOffer(now, dl);
}

const OfferContext = createContext<Offer>(snapshot());
function useOffer(): Offer {
  return useContext(OfferContext);
}

/** Single source of truth: one 1s interval, every widget flips together. */
function OfferProvider({ children }: { children: ReactNode }) {
  const postDeadlineRef = useRef<number | null>(null);
  const [offer, setOffer] = useState<Offer>(snapshot);
  useEffect(() => {
    const update = () => {
      const now = Date.now();
      if (now < PRICE_FLIP_AT) {
        setOffer(computeOffer(now, 0));
        return;
      }
      if (postDeadlineRef.current === null) postDeadlineRef.current = readPostDeadline(now);
      setOffer(computeOffer(now, postDeadlineRef.current));
    };
    update();
    const id = window.setInterval(update, 1000);
    return () => window.clearInterval(id);
  }, []);
  return <OfferContext.Provider value={offer}>{children}</OfferContext.Provider>;
}

/**
 * Fire begin_checkout in dataLayer, then let the anchor navigate to Stripe.
 * We don't preventDefault — dataLayer.push is synchronous, GTM tags fire
 * before navigation; if Stripe loads before they finish, sendBeacon-equipped
 * tags will still deliver.
 */
function onBuyClick(cta: string, value: number): void {
  trackBeginCheckout(cta, value);
}

/**
 * Mini-course landing — built 1:1 from the user-supplied HTML mockup.
 * Sections kept as separate components for readability.
 * All copy is intentionally untouched per user instruction.
 */

const CHECK_ICON = (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const CLOCK_ICON = (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7.5V12l3 1.8" />
  </svg>
);

/** Inline D д HH:MM:SS used in the top bar (days shown only when > 0). */
function CountdownInline() {
  const { d, h, m, s } = useOffer();
  return <span className="mcl-countdown">{d !== "00" ? `${parseInt(d, 10)}д ` : ""}{h}:{m}:{s}</span>;
}

/** Countdown tiles with an optional leading days tile. */
function ClockTiles({ d, h, m, s }: { d: string; h: string; m: string; s: string }) {
  return (
    <span className="mcl-hero-timer-clock">
      {d !== "00" && (<><b>{parseInt(d, 10)}д</b><i> </i></>)}
      <b>{h}</b><i>:</i><b>{m}</b><i>:</i><b>{s}</b>
    </span>
  );
}

/** Compact hero timer — sits between price and CTA. Noticeable, but secondary to price/button. */
function HeroCountdown() {
  const o = useOffer();
  if (!o.timerActive) return null;
  const head =
    o.phase === "pre" ? (
      <>Цена вырастет до ${POST_PRICE} — 2 июля</>
    ) : (
      <>Старт-предложение действует ещё</>
    );
  const aria =
    o.phase === "pre"
      ? `Цена вырастет до ${POST_PRICE} долларов 2 июля. Осталось ${parseInt(o.d, 10)} дней ${o.h} часов ${o.m} минут ${o.s} секунд`
      : `Старт-предложение действует ещё ${parseInt(o.d, 10)} дней ${o.h} часов ${o.m} минут ${o.s} секунд`;
  return (
    <div className="mcl-hero-timer" role="timer" aria-label={aria}>
      <span className="mcl-hero-timer-head">
        <span className="mcl-hero-timer-icon" aria-hidden="true">{CLOCK_ICON}</span>
        {head}
      </span>
      <ClockTiles d={o.d} h={o.h} m={o.m} s={o.s} />
    </div>
  );
}

/** First-screen social proof: purchase count (grows daily) + student rating. */
function TrustStrip() {
  const count = purchaseCount();
  return (
    <div className="mcl-trust">
      <div className="mcl-trust-avatars">
        <img src="/images/Inna.png" alt="" loading="lazy" />
        <img src="/images/Mila.png" alt="" loading="lazy" />
        <img src="/images/Leah.png" alt="" loading="lazy" />
        <img src="/images/Vlad.png" alt="" loading="lazy" />
      </div>
      <div className="mcl-trust-text"><strong>{count}</strong> человек уже купили курс</div>
      <span className="mcl-trust-sep" aria-hidden="true" />
      <div className="mcl-trust-rating">
        <span className="mcl-stars" role="img" aria-label={`Рейтинг ${RATING} из 5`}>
          <span className="mcl-stars-bg">★★★★★</span>
          <span className="mcl-stars-fg" style={{ width: `${(RATING / 5) * 100}%` }}>★★★★★</span>
        </span>
        <span className="mcl-trust-rating-num">{RATING}/5</span>
        <span className="mcl-trust-rating-sub">отзывы студентов</span>
      </div>
    </div>
  );
}

function TopBar() {
  const o = useOffer();
  if (o.phase === "pre") {
    return (
      <div className="mcl-top-bar">
        <span className="mcl-top-bar-full">
          <span className="mcl-top-bar-dot" aria-hidden="true" /> Цена вырастет до ${POST_PRICE} — 2 июля · успей за ${PRE_PRICE} · <CountdownInline />
        </span>
        <span className="mcl-top-bar-short">
          <span className="mcl-top-bar-dot" aria-hidden="true" /> ${PRE_PRICE} → ${POST_PRICE} со 2 июля · <CountdownInline />
        </span>
      </div>
    );
  }
  if (!o.timerActive) {
    return (
      <div className="mcl-top-bar mcl-top-bar--ended">
        <span className="mcl-top-bar-full">Полный курс за ${POST_PRICE} вместо ${POST_OLD_PRICE} · доступ навсегда</span>
        <span className="mcl-top-bar-short">Курс ${POST_PRICE} вместо ${POST_OLD_PRICE}</span>
      </div>
    );
  }
  return (
    <div className="mcl-top-bar">
      <span className="mcl-top-bar-full">
        <span className="mcl-top-bar-dot" aria-hidden="true" /> Старт-цена ${POST_PRICE} вместо ${POST_OLD_PRICE} · предложение ещё <CountdownInline />
      </span>
      <span className="mcl-top-bar-short">
        <span className="mcl-top-bar-dot" aria-hidden="true" /> ${POST_PRICE} вместо ${POST_OLD_PRICE} · ещё <CountdownInline />
      </span>
    </div>
  );
}

/** Mobile-only sticky buy bar — keeps price + timer + CTA in reach on first scroll. */
function MobileBuyBar() {
  const offer = useOffer();
  return (
    <div className="mcl-mobile-buybar">
      <div className="mcl-mobile-buybar-info">
        <div className="mcl-mobile-buybar-price">
          {offer.oldPrice != null && <span className="mcl-mbb-old">${offer.oldPrice}</span>}
          <span className="mcl-mbb-new">${offer.price}</span>
        </div>
        <div className="mcl-mobile-buybar-timer">
          {offer.phase === "pre" ? (
            <>до ${POST_PRICE} · {offer.d !== "00" ? `${parseInt(offer.d, 10)}д ` : ""}{offer.h}:{offer.m}</>
          ) : offer.timerActive ? (
            <>−{offer.discount}% ещё {offer.d !== "00" ? `${parseInt(offer.d, 10)}д ` : ""}{offer.h}:{offer.m}</>
          ) : (
            "доступ навсегда"
          )}
        </div>
      </div>
      <a href={offer.checkoutUrl} className="mcl-mobile-buybar-cta" onClick={() => onBuyClick("mobile_sticky", offer.price)}>
        Купить
      </a>
    </div>
  );
}

function Hero() {
  const offer = useOffer();
  return (
    <header className="mcl-hero">
      <div className="mcl-container">
        <div className="mcl-eyebrow">Мини-курс · 5 уроков</div>
        <h1>Как построить продукт с помощью AI, <em>который покупают</em></h1>
        <p className="mcl-lede">
          5 уроков, ~4 часа. От первого интервью до первых платящих клиентов. Не теория из YouTube — мой реальный воркфлоу из живых стартапов с двумя экзитами и 50,000+ платящими пользователями в 107 странах.
        </p>
        <TrustStrip />
        <div className="mcl-price-block">
          {offer.oldPrice != null && <span className="mcl-price-old">${offer.oldPrice}</span>}
          <span className="mcl-price-new">${offer.price}</span>
          {offer.discountLabel && <span className="mcl-price-discount">{offer.discountLabel}</span>}
        </div>
        <HeroCountdown />
        <div>
          <a href={offer.checkoutUrl} className="mcl-cta-primary" onClick={() => onBuyClick("hero", offer.price)}>Купить курс за ${offer.price}</a>
        </div>
        <div className="mcl-hero-meta">
          <span className="mcl-hero-meta-item">{CHECK_ICON} Stripe · безопасная оплата</span>
          <span className="mcl-hero-meta-item">{CHECK_ICON} Доступ навсегда</span>
          <span className="mcl-hero-meta-item">{CHECK_ICON} Возврат 7 дней</span>
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

function MeetMentor() {
  return (
    <section className="mcl-meet">
      <div className="mcl-container-wide">
        <div className="mcl-meet-label-wrap">
          <div className="mcl-section-label">Знакомство</div>
        </div>
        <div className="mcl-meet-video-wrap">
          <video
            className="mcl-meet-video"
            src="/videos/michael-intro.mp4"
            poster="/videos/michael-intro-poster.jpg"
            controls
            playsInline
            preload="metadata"
          />
        </div>
      </div>
    </section>
  );
}

function Pain() {
  const pairs = [
    {
      before: "Строишь, не поговорив ни с одним пользователем",
      after: "Говоришь с реальными людьми и слышишь их боль",
    },
    {
      before: "Не можешь объяснить, для кого продукт, в одном предложении",
      after: "Одно предложение, от которого «щёлкает»",
    },
    {
      before: "Конкуренты в «топ-5», а ты — нет",
      after: "Знаешь, где они слабые, и бьёшь туда",
    },
    {
      before: "Живёшь в Cursor / Lovable, но воркфлоу хаотичный",
      after: "Воркфлоу agentic engineering: фичи за часы",
    },
    {
      before: "Запуск — пост в Product Hunt и тишина",
      after: "Скрипт, лендинг и первые платящие до запуска",
    },
  ] as const;
  return (
    <section className="mcl-pain">
      <div className="mcl-container">
        <div className="mcl-section-label">До и после курса</div>
        <h2 className="mcl-section-title">Где ты сейчас — и где будешь <em>через 5 уроков</em>.</h2>
        <div className="mcl-stat-callout">
          <div className="mcl-stat-big">87%</div>
          <div className="mcl-stat-text">AI-проектов не доходят до продакшена. Не потому, что они плохо построены — а потому, что построены не для того, кто заплатит.</div>
        </div>
        <div className="mcl-ba-table" role="table" aria-label="До и после курса">
          <div className="mcl-ba-thead" role="row">
            <div className="mcl-ba-th mcl-ba-th--before" role="columnheader">До курса</div>
            <div className="mcl-ba-th mcl-ba-th--after" role="columnheader">После курса</div>
          </div>
          {pairs.map(({ before, after }) => (
            <div key={before} className="mcl-ba-tr" role="row">
              <div className="mcl-ba-td mcl-ba-td--before" role="cell">
                <span className="mcl-ba-tag mcl-ba-tag--before" aria-hidden="true">До</span>
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
          Этот курс — выжимка моих 16 лет в продуктах, двух экзитов и компаний, которые я сейчас веду как CEO и solo-фаундер. Никаких теоретических фреймворков из чужих книг — только то, что работает у меня прямо сейчас.
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

type Lesson = { num: string; title: string; meta: string; result: string; body?: string; bodyHtml?: string; intro?: boolean };
const LESSONS: readonly Lesson[] = [
  { num: "00", title: "Первая победа за 5 минут", meta: "~7 минут · вводный", body: "Тебе не нужны мотивационные интро. Тебе нужно сделать первое реальное действие до того, как закроешь вкладку. На этом уроке ты пишешь одну строку, которая определит, есть ли у тебя идея — или фантазия. Без этой строки остальные уроки бесполезны.", result: "Чёткая формулировка «Я строю X для Y, потому что они страдают от Z» — или честное понимание, что её ещё нет.", intro: true },
  { num: "01", title: "Понять рынок за 30 минут — и не потерять 6 месяцев", meta: "~50 минут · урок 1", body: "Главный кейс — Mikey AI: как я выбирал нишу в дейтинге, где «всё уже есть». Ты делаешь карту конкурентов с AI за 90 минут, находишь их слабые места, вытаскиваешь реальные боли клиентов из отзывов и Reddit и формулируешь одно узкое позиционирование, которое отличает тебя от 50 клонов на рынке.", result: "Готовая карта 5+ конкурентов, список настоящих болей рынка и одна точная формулировка позиционирования, которой ты можешь объяснить продукт за 10 секунд." },
  { num: "02", title: "Услышать правду от рынка за 10 разговоров", meta: "~50 минут · урок 2", body: "Главный кейс — мой провал InterviewNinja: 18 месяцев и потерянные деньги, потому что я строил для воображаемого клиента. Ты получаешь playbook на 10 правильных интервью: кого выбирать, как формулировать вопросы (без наводящих), как копать вглубь, pass- и fail-сигналы. И почему «звучит интересно» — это всегда нет.", result: "Список 10 интервьюируемых, скрипт интервью и чек-лист сигналов. Можешь начинать разговоры в этот же вечер и слышать правду, а не вежливость." },
  { num: "03", title: "Собрать рабочий продукт за 7 дней — управляя AI как джуном", meta: "~60 минут · урок 3", bodyHtml: 'Главный кейс — Mikey, построенный без программистов. Ты получаешь мой реальный воркфлоу agentic engineering: design doc → промпт → ревью diff → тесты. Как работать с Claude Code, Cursor и Lovable так, чтобы получать MVP за дни, а не за недели — не «наговаривая» код, а управляя AI. Плюс <strong>сегмент «лендинг за 30 минут»</strong>, где я строю лендинг руками, в реальном времени, по моим промптам.', result: "Рабочий воркфлоу разработки с AI + готовый лендинг (или MVP-фича) к концу урока, собранный по тем же шагам." },
  { num: "04", title: "Упаковка и запуск — чтобы первые 100 человек нажали «Купить»", meta: "~50 минут · урок 4", body: "Главный кейс — RunEverywhere: как мы вышли в плюс с первой же рекламной кампании и набрали 10,000 пользователей. Запуск — это не Product Hunt и тишина. Это финальная упаковка позиционирования, руками собранные первые 10 платящих через скрипты холодной рассылки, pre-sale до полноценной разработки и формула лендинга, которой я пользуюсь сейчас в 4 продуктах.", result: "Финальная упаковка продукта, скрипт холодной рассылки, pre-sale стратегия и понимание, как закрыть первого платящего клиента до полноценного запуска." },
];

function Curriculum() {
  return (
    <section>
      <div className="mcl-container">
        <div className="mcl-section-label">Что внутри</div>
        <h2 className="mcl-section-title">5 уроков. <em>Один навык в каждом.</em></h2>
        <p className="mcl-section-intro">
          Каждый урок — 40–60 минут с конкретным навыком, который ты применяешь руками к концу видео. Никакой воды, никаких «давайте поговорим о важности». Сразу — что делать, как делать, и сигналы, что ты делаешь это правильно.
        </p>
        <div className="mcl-lessons">
          {LESSONS.map((l) => (
            <div key={l.num} className={`mcl-lesson${l.intro ? " mcl-lesson--intro" : ""}`}>
              <div className="mcl-lesson-header">
                <div className="mcl-lesson-num">{l.num}</div>
                <div className="mcl-lesson-title-block">
                  <h3 className="mcl-lesson-title">{l.title}</h3>
                  <div className="mcl-lesson-meta">{l.meta}</div>
                </div>
              </div>
              {l.bodyHtml ? (
                <p className="mcl-lesson-body" dangerouslySetInnerHTML={{ __html: l.bodyHtml }} />
              ) : (
                <p className="mcl-lesson-body">{l.body}</p>
              )}
              <div className="mcl-lesson-result">
                <strong>Что у тебя будет к концу</strong>
                <span>{l.result}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const BONUSES = [
  { i: "🤖", t: "Доступ к моим личным AI-агентам", d: "Готовые агенты на Claude Code и Paperclip, которые я использую для контента, аутрича и ресерча в TFC и Mikey.", v: "Эквивалент $300+" },
  { i: "⚡", t: "Промпты для разработки и лендингов", d: "Мои реальные промпты, которыми я делаю лендинги за 30 минут и MVP-фичи за час. Скопировал → вставил → работает.", v: "Эквивалент $200+" },
  { i: "📋", t: "Шаблоны Customer Development", d: "Скрипт интервью, чек-лист сигналов, шаблон записи диалогов и pass/fail-формула, которую я применяю сам.", v: "Эквивалент $150" },
  { i: "🚀", t: "Топовые практики Claude Code · май 2026", d: "Самые свежие воркфлоу и приёмы для agentic engineering на момент запуска курса. То, что работает прямо сейчас, не «в общем».", v: "Эквивалент $250" },
  { i: "📊", t: "Презентации всех 5 уроков", d: "Слайды в PDF — можно пересмотреть без видео, скопировать схемы, использовать как чек-лист.", v: "Эквивалент $100" },
  { i: "∞", t: "Доступ навсегда + обновления", d: "Купил один раз — получаешь все будущие обновления курса бесплатно. Воркфлоу AI меняются каждые 3 месяца — ты всегда актуален.", v: "Эквивалент $200+" },
] as const;

function Bonuses() {
  const offer = useOffer();
  return (
    <section className="mcl-bonus" id="bonuses">
      <div className="mcl-container">
        <div className="mcl-section-label">Бонусы внутри</div>
        <h2 className="mcl-section-title">Не только видео. <em>Доступ к моему рабочему стеку.</em></h2>
        <p className="mcl-section-intro">
          За ${offer.price} я отдаю не только уроки, но и весь рабочий набор — инструменты, шаблоны и промпты, которыми пользуюсь сам.
        </p>
        <div className="mcl-bonus-grid">
          {BONUSES.map((b) => (
            <div className="mcl-bonus-item" key={b.t}>
              <div className="mcl-bonus-icon">{b.i}</div>
              <div className="mcl-bonus-content">
                <div className="mcl-bonus-title">{b.t}</div>
                <div className="mcl-bonus-desc">{b.d}</div>
                <div className="mcl-bonus-value">{b.v}</div>
              </div>
            </div>
          ))}
        </div>
        <div className="mcl-value-summary">
          <div className="mcl-value-row"><span>Видеокурс (5 уроков, ~4 часа)</span><strong>$300</strong></div>
          <div className="mcl-value-row"><span>AI-агенты + промпты + шаблоны</span><strong>$650+</strong></div>
          <div className="mcl-value-row"><span>Топовые практики Claude Code май 2026</span><strong>$250</strong></div>
          <div className="mcl-value-row"><span>Презентации + обновления навсегда</span><strong>$300+</strong></div>
          <div className="mcl-value-final">
            <span className="mcl-value-final-label">Реальная стоимость</span>
            <span className="mcl-value-final-price">$1,500+</span>
          </div>
          <div className="mcl-value-final" style={{ borderTop: "none", paddingTop: 8 }}>
            <span className="mcl-value-final-label">Твоя цена сейчас</span>
            <span className="mcl-value-final-price" style={{ color: "var(--mcl-success)" }}>${offer.price}</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function Comparison() {
  const offer = useOffer();
  const rows = [
    ["Структурированный путь", ["no", "Хаос"], ["no", "Нет"], ["yes", "Да"], ["yes", "Да"]],
    ["Реальные кейсы из живых компаний", ["meh", "Чужие"], ["no", "Выдуманные"], ["yes", "4 моих"], ["yes", "Свои"]],
    ["AI-агенты и промпты в подарок", ["no", "—"], ["no", "—"], ["yes", "Да"], ["meh", "Иногда"]],
    ["Свежесть на май 2026", ["no", "Старые"], ["meh", "Зависит"], ["yes", "Да"], ["yes", "Да"]],
    ["Время на освоение", ["no", "100+ ч"], ["no", "∞"], ["yes", "3 ч"], ["meh", "12 нед"]],
    ["Цена", ["yes", "$0"], ["yes", "$20/мес"], ["yes", `$${offer.price} один раз`], ["no", "$5,000+"]],
  ] as const;
  return (
    <section>
      <div className="mcl-container">
        <div className="mcl-section-label">Чем это отличается</div>
        <h2 className="mcl-section-title">YouTube бесплатный. ChatGPT тоже. <em>Так зачем платить ${offer.price}?</em></h2>
        <p className="mcl-section-intro">Честный вопрос, я бы сам его задал. Вот таблица, которая отвечает на него без вранья.</p>
        <div className="mcl-compare-wrap">
          <div className="mcl-compare-table">
            <div className="mcl-compare-row mcl-compare-row--head">
              <div className="mcl-compare-cell" />
              <div className="mcl-compare-cell">YouTube</div>
              <div className="mcl-compare-cell">ChatGPT</div>
              <div className="mcl-compare-cell mcl-highlight">Этот курс</div>
              <div className="mcl-compare-cell">Ментор $5K</div>
            </div>
            {rows.map((r) => (
              <div className="mcl-compare-row" key={r[0] as string}>
                <div className="mcl-compare-cell mcl-compare-cell--label">{r[0]}</div>
                {[1, 2, 3, 4].map((i) => {
                  const [cls, txt] = r[i] as [string, string];
                  const highlight = i === 3 ? " mcl-highlight" : "";
                  const colLabel = ["YouTube", "ChatGPT", "Этот курс", "Ментор $5K"][i - 1];
                  return (
                    <div className={`mcl-compare-cell${highlight}`} data-label={colLabel} key={i}>
                      <span className={`mcl-${cls}`} style={i === 3 && r[0] === "Цена" ? { fontWeight: 700 } : undefined}>{txt}</span>
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
        </div>
        <p style={{ fontSize: 14, color: "var(--mcl-text-muted)", marginTop: 24, lineHeight: 1.55 }}>
          <strong style={{ color: "var(--mcl-text)" }}>Если коротко:</strong> YouTube даёт информацию, но не путь. ChatGPT отвечает на твой вопрос, но не задаёт правильных вопросов тебе. Ментор за $5K — это другой уровень и для другого этапа. Этот курс — самая короткая дорога от «у меня есть идея» до «у меня есть первый платящий клиент».
        </p>
      </div>
    </section>
  );
}

const CASES = [
  { tag: "УРОК 1 · ВАЛИДАЦИЯ", name: "InterviewNinja", url: null, stat: "SaaS для рекрутинга · 18 месяцев · продукт мёртв", lesson: "как я игнорировал сигналы провала, потому что мне «было интересно строить», и сколько это стоило в деньгах и времени." },
  { tag: "УРОК 2 · ПОЗИЦИОНИРОВАНИЕ", name: "Mikey AI", url: "https://mymikey.ai", stat: "AI-дейтинг · solo-фаундер · построен с AI", lesson: "как выбрать нишу в категории, где 200 конкурентов, и сформулировать одно отличие, которое работает." },
  { tag: "УРОК 3 · РАЗРАБОТКА", name: "MetaMinder", url: "https://metaminder.com", stat: "B2B AI-платформа для обучения фронтлайн-персонала · клиенты на всех континентах", lesson: "как то, что раньше делала команда из 20 человек, я сейчас делаю один с AI — и почему это не магия, а воркфлоу." },
  { tag: "УРОК 4 · ЗАПУСК", name: "RunEverywhere", url: null, stat: "B2C · 50,000+ платящих в 107 странах", lesson: "первая рекламная кампания, которая сразу вышла в плюс и принесла 10,000 пользователей — и как собрать такую же связку руками." },
] as const;

function Cases() {
  return (
    <section>
      <div className="mcl-container">
        <div className="mcl-section-label">Кейсы внутри курса</div>
        <h2 className="mcl-section-title">4 моих компании. <em>4 разных истории.</em></h2>
        <p className="mcl-section-intro">
          Каждый из 4 уроков построен вокруг одного главного кейса из моей реальной практики — где я конкретно показываю, какую ошибку сделал, как её увидел, и что сделал бы сейчас. Никакой анонимности и никаких «один мой ученик».
        </p>
        <div className="mcl-cases-grid">
          {CASES.map((c) => (
            <div className="mcl-case-card" key={c.name}>
              <div className="mcl-case-tag">{c.tag}</div>
              <div className="mcl-case-name">
                {c.url ? (
                  <a
                    href={c.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mcl-case-link"
                    title={`Открыть ${c.name} в новой вкладке`}
                  >
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
  { text: "«После каждой сессии точно знаешь, что делать дальше. Никаких гаданий. Михаэль — практик с серьёзной экспертизой. Материал глубокий, подготовка безупречная, маленькая группа — реальное внимание каждому. Это самая чёткая карта для стартапа, которая у меня была.»", img: "/images/Inna.png", n: "Инна и Александра", r: "Ко-фаундеры · Dira.click" },
  { text: "«Михаэль не просто объясняет теорию — он разбирает всё на своих проектах, а потом даёт практиковать прямо на сессии. Он берёт хаос и превращает его в систему.»", img: "/images/Vlad.png", n: "Влад", r: "Фаундер · Better WellBeing" },
  { text: "«После 3 сессий прогресс уже огромный. Как технический специалист, я наконец понимаю, как запускать и растить проект. Фокус на AI-инструментах — must-have сейчас.»", img: "/images/Leah.png", n: "Leah", r: "Фаундер · Default She" },
  { text: "«Структурно, понятно, профессионально. После каждой встречи есть реальное ощущение движения и результата. Я точно знаю, что делать дальше — и делаю.»", img: "/images/Mila.png", n: "Мила", r: "Фаундер · Hobbix" },
] as const;

function SocialProof() {
  return (
    <section className="mcl-social-section">
      <div className="mcl-container">
        <div className="mcl-section-label">Что говорят</div>
        <h2 className="mcl-section-title">Люди, которые уже работают <em>со мной по этой методологии.</em></h2>
        <div className="mcl-social-note">
          Это фаундеры, которые проходят или уже прошли обучение со мной — по тем же принципам и инструментам, что и в курсе. Говорят как есть, без прикрас.
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

function Pricing() {
  const offer = useOffer();
  return (
    <section className="mcl-pricing" id="buy">
      <div className="mcl-container">
        <div className="mcl-section-label">Цена</div>
        <h2 className="mcl-section-title">Один раз. <em>${offer.price}. Доступ навсегда.</em></h2>
        <p className="mcl-section-intro">
          {offer.phase === "pre"
            ? <>Сейчас курс стоит ${PRE_PRICE}. Со 2 июля цена вырастет до ${POST_PRICE} - и дальше будет только расти. Купи сейчас и зафиксируй полный доступ навсегда по самой низкой цене.</>
            : <>Курс стоит ${POST_PRICE} - вместо ${POST_OLD_PRICE} полной ценности всего, что внутри. Единоразовый платёж, доступ навсегда.</>}
        </p>
        <div className="mcl-pricing-card">
          <div className="mcl-pricing-badge">{offer.phase === "pre" ? "Цена вырастет 2 июля" : `−${POST_DISCOUNT}% от $${POST_OLD_PRICE}`}</div>
          <div className="mcl-pricing-name">AI-продукт, который покупают</div>
          <div className="mcl-pricing-tagline">Полный доступ ко всему курсу + бонусам</div>
          {offer.phase === "pre" ? (
            <div className="mcl-pricing-timer">
              <span className="mcl-pricing-timer-dot" aria-hidden="true" />
              <span className="mcl-pricing-timer-label">Цена вырастет до ${POST_PRICE} через</span>
              <span className="mcl-pricing-timer-value">{offer.d !== "00" ? `${parseInt(offer.d, 10)}д ` : ""}{offer.h}:{offer.m}:{offer.s}</span>
            </div>
          ) : offer.timerActive ? (
            <div className="mcl-pricing-timer">
              <span className="mcl-pricing-timer-dot" aria-hidden="true" />
              <span className="mcl-pricing-timer-label">Предложение действует ещё</span>
              <span className="mcl-pricing-timer-value">{offer.d !== "00" ? `${parseInt(offer.d, 10)}д ` : ""}{offer.h}:{offer.m}:{offer.s}</span>
            </div>
          ) : (
            <div className="mcl-pricing-timer mcl-pricing-timer--ended">
              <span className="mcl-pricing-timer-label">Цена ${POST_PRICE} · доступ навсегда</span>
            </div>
          )}
          <div className="mcl-pricing-price">
            <span className="mcl-pricing-price-currency">$</span>
            {offer.oldPrice != null && <span className="mcl-pricing-price-old">{offer.oldPrice}</span>}
            <span className="mcl-pricing-price-new">{offer.price}</span>
          </div>
          <div className="mcl-pricing-note">Единоразовый платёж · никаких подписок</div>
          <ul className="mcl-pricing-features">
            <li>5 уроков (вводный + 4 полноценных), ~4 часа видео</li>
            <li>Презентации всех уроков в PDF</li>
            <li>Доступ к моим личным AI-агентам</li>
            <li>Готовые промпты для разработки и лендингов</li>
            <li>Шаблоны Customer Development</li>
            <li>Топовые практики Claude Code на май 2026</li>
            <li>4 разбора реальных кейсов из моих компаний</li>
            <li>Все будущие обновления курса бесплатно</li>
            <li>Доступ навсегда</li>
          </ul>
          <a href={offer.checkoutUrl} className="mcl-cta-primary" onClick={() => onBuyClick("pricing", offer.price)}>Купить курс за ${offer.price}</a>
          <div className="mcl-guarantee">
            <div className="mcl-guarantee-icon">✓</div>
            <div className="mcl-guarantee-text">
              <strong>Гарантия возврата 7 дней</strong>
              Если в течение недели поймёшь, что курс не для тебя — верну деньги. Без анкет и удерживающих звонков.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function faqItems(price: number) {
  return [
    { q: "Я только начинаю и у меня даже идеи нет. Курс мне подойдёт?", a: ["Да, и даже больше — он может быть тебе полезнее, чем тем, кто уже что-то построил. Вводный урок и Урок 1 как раз про то, как отделить идею от фантазии и не потратить полгода на «звучит круто».", "Если в конце вводного урока ты честно поймёшь, что у тебя пока нет даже зародыша идеи — есть смысл идти на этап до этого, не в курс. И я тебе об этом скажу прямо в видео."] },
    { q: "У меня уже есть MVP. Не будет ли это слишком базово?", a: ["Если у тебя есть MVP, но нет платящих клиентов — это ровно та проблема, которую решает курс. 87% AI-проектов застревают именно на этом этапе, не потому что MVP плохой, а потому что не делалась валидация и нет воркфлоу для запуска.", "Уроки 2 (позиционирование) и 4 (запуск) дадут тебе максимум. Урок 3 (AI-разработка) покажет, как ускорить итерации твоего MVP в 5–10 раз."] },
    { q: "Я не программист. Курс для меня?", a: ["Я тоже не программист. Mikey AI я построил с нуля без единой строчки кода, написанной мной — всё через AI-агентов и промпты. На уроке 3 я показываю, как это делается на конкретных задачах: лендинг, форма, бэкенд-логика.", "Если ты <strong>совсем</strong> не работал с компьютером — будет тяжело. Если открывал Lovable, Cursor или хотя бы ChatGPT — справишься."] },
    { q: "Сколько времени занимает курс?", a: ["~4 часа видео + примерно столько же на практику внутри уроков. То есть 7–8 часов на полный проход. Можно за один уикенд, можно растянуть на 2 недели — материал не устаревает.", "Доступ остаётся у тебя навсегда, плюс все будущие обновления."] },
    { q: "Почему так дёшево? В чём подвох?", a: ["Подвоха нет, и я отвечу честно. Этот курс — top-of-funnel в мою менторскую программу The Founders Circle (TFC). Если после курса ты захочешь пойти глубже — у тебя будет такая опция. Если нет — просто пользуешься курсом, и мы оба довольны.", `$${price} это импульсная цена, на которой я не зарабатываю много, но при этом фильтрую тех, кто реально хочет учиться, от тех, кто скачает «потому что бесплатно» и не откроет.`] },
    { q: "Что если мне не подойдёт?", a: [`7 дней на возврат. Просто пишешь мне на почту — я возвращаю $${price}. Никаких форм, обоснований и удерживающих звонков.`, "Я делаю это потому что уверен в материале. Но если он не для тебя — не хочу держать твои деньги."] },
    { q: "На каком языке курс?", a: ["Все видео на русском. Презентации, шаблоны и промпты — на русском и английском (так чтобы ты мог использовать их с международными командами и AI-агентами без перевода)."] },
    { q: "Как происходит оплата и доступ?", a: ["Оплата через Stripe — карты, Apple Pay, Google Pay. Сразу после успешной оплаты ты попадаешь на страницу благодарности, где открываешь нашего Telegram-бота: внутри лежат все 5 уроков, презентации, AI-агенты и бонусы. Доступ навсегда. Чек об оплате Stripe пришлёт на email."] },
  ];
}

function FAQ() {
  const { price } = useOffer();
  const FAQ_ITEMS = faqItems(price);
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
  const offer = useOffer();
  return (
    <section className="mcl-final-cta">
      <div className="mcl-container">
        <h2>Через 4 часа ты будешь <em>видеть продукт по-другому</em></h2>
        <p>
          Не «больше знаний» — другая оптика. Ты увидишь, что в твоём продукте сломано, и будешь точно знать следующий шаг. За ${offer.price} это, возможно, самая короткая дорога, которую я могу тебе предложить.
        </p>
        <a href={offer.checkoutUrl} className="mcl-cta-primary" onClick={() => onBuyClick("final_cta", offer.price)}>Купить курс за ${offer.price}</a>
        <div className="mcl-hero-meta">
          <span className="mcl-hero-meta-item">{CHECK_ICON} Возврат 7 дней</span>
          <span className="mcl-hero-meta-item">{CHECK_ICON} Доступ навсегда</span>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="mcl-footer">
      <div className="mcl-container">
        <div className="mcl-footer-links">
          <a href="mailto:michael.barbarych@gmail.com">michael.barbarych@gmail.com</a>
          <a href="/ru/privacy">Privacy Policy</a>
          <a href="/ru/terms">Terms of Service</a>
        </div>
        <div>© 2026 Michael Barbarich</div>
      </div>
    </footer>
  );
}

function MiniCourseLandingInner() {
  const offer = useOffer();
  const viewItemFired = useRef(false);

  useEffect(() => {
    document.title = "AI-продукт, который покупают — мини-курс Михаэля Барбарича";
    document.body.classList.add("mcl-body");

    // Top-of-funnel signal: landing rendered.
    trackViewItemList("mini-course-landing", snapshot().price);

    // Qualified intent: pricing section visible.
    const pricingEl = document.getElementById("buy");
    let observer: IntersectionObserver | undefined;
    if (pricingEl && "IntersectionObserver" in window) {
      observer = new IntersectionObserver(
        (entries) => {
          for (const e of entries) {
            if (e.isIntersecting && !viewItemFired.current) {
              viewItemFired.current = true;
              trackViewItem(snapshot().price);
              observer?.disconnect();
            }
          }
        },
        { threshold: 0.4 },
      );
      observer.observe(pricingEl);
    }

    return () => {
      document.body.classList.remove("mcl-body");
      observer?.disconnect();
    };
  }, []);

  return (
    <div className="mcl-root">
      <SEO
        path="/ru"
        title="AI-продукт, который покупают — мини-курс Михаэля Барбарича"
        description={`Мини-курс соло-фаундера: 5 уроков, около 4 часов, от первого интервью до первых платящих клиентов. Цена $${offer.price}, единоразовый платёж через Stripe.`}
        alternates={[
          { lang: "ru", path: "/ru" },
          { lang: "en", path: "/en" },
          { lang: "he", path: "/he" },
          { lang: "x-default", path: "/ru" },
        ]}
        jsonLd={[
          {
            "@context": "https://schema.org",
            "@type": "Course",
            name: "AI-продукт, который покупают — мини-курс",
            description:
              "5 уроков, около 4 часов, от первого интервью до первых платящих клиентов.",
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
            offers: {
              "@type": "Offer",
              price: String(offer.price),
              priceCurrency: "USD",
              availability: "https://schema.org/InStock",
              url: offer.checkoutUrl,
            },
            hasCourseInstance: {
              "@type": "CourseInstance",
              courseMode: "online",
              courseWorkload: "PT4H",
            },
          },
          breadcrumb([
            { name: "Главная", path: "/" },
            { name: "Мини-курс", path: "/ru" },
          ]),
        ]}
      />
      <TopBar />
      <Hero />
      <FounderStrip />
      <MeetMentor />
      <About />
      <Curriculum />
      <Pain />
      <Bonuses />
      <Comparison />
      <Cases />
      <SocialProof />
      <Pricing />
      <FAQ />
      <FinalCTA />
      <Footer />
      <MobileBuyBar />
    </div>
  );
}

export default function MiniCourseLanding() {
  return (
    <OfferProvider>
      <MiniCourseLandingInner />
    </OfferProvider>
  );
}