import React from "react";

// Design tokens (per spec, not via global theme to keep palette exact)
const BG = "#0A0E1A";
const TEXT = "#FFFFFF";
const MUTED = "#94A3B8";
const ACCENT = "#00D4FF";
const RED = "#EF4444";
const GREEN = "#5EEAD4";

const FONT = "'Inter', 'Manrope', system-ui, sans-serif";

const Frame: React.FC<{ children: React.ReactNode; index: number }> = ({ children, index }) => (
  <div
    className="w-full h-full relative flex items-center justify-center"
    style={{ background: BG, color: TEXT, fontFamily: FONT }}
  >
    <div className="w-full h-full flex items-center justify-center px-[120px] py-[100px]">
      {children}
    </div>
    <div
      className="absolute"
      style={{ right: 48, bottom: 36, color: MUTED, fontSize: 18, letterSpacing: "0.02em" }}
    >
      Михаэль &nbsp;|&nbsp; Урок 1 из 4 &nbsp;|&nbsp; Slide {index}/22
    </div>
  </div>
);

const Quote: React.FC<{ size?: number; children: React.ReactNode }> = ({ size = 64, children }) => (
  <div
    className="text-center"
    style={{
      color: ACCENT,
      fontStyle: "italic",
      fontWeight: 500,
      fontSize: size,
      lineHeight: 1.2,
      maxWidth: 1500,
    }}
  >
    «{children}»
  </div>
);

// Slide 1
export const S1 = () => (
  <Frame index={1}>
    <div className="text-center">
      <h1 style={{ fontSize: 96, fontWeight: 600, lineHeight: 1.05 }}>Урок 1. Валидация</h1>
      <p style={{ color: MUTED, fontSize: 36, marginTop: 32, fontWeight: 400 }}>
        Как проверить идею до того, как написать первую строчку кода
      </p>
    </div>
  </Frame>
);

// Slide 2
export const S2 = () => (
  <Frame index={2}>
    <div className="flex flex-col items-center gap-12">
      <Quote size={68}>
        Валидация — это не доказательство того, что идея хорошая. Это попытка её убить.
      </Quote>
      <p style={{ color: MUTED, fontSize: 22 }}>главный инсайт этого урока</p>
    </div>
  </Frame>
);

// Slide 3
export const S3 = () => (
  <Frame index={3}>
    <div className="text-center max-w-[1500px]">
      <h2 style={{ fontSize: 64, fontWeight: 600, lineHeight: 1.15 }}>
        С кем из тех, кто НЕ твой друг, ты говорил про свою идею за последние две недели?
      </h2>
      <p style={{ color: ACCENT, fontSize: 36, marginTop: 56, fontWeight: 500 }}>
        Если ноль — этот урок изменит всё, что ты делаешь дальше.
      </p>
    </div>
  </Frame>
);

// Slide 4
const Stat: React.FC<{ n: string; t: string }> = ({ n, t }) => (
  <div className="flex items-baseline gap-10">
    <span style={{ color: ACCENT, fontSize: 120, fontWeight: 600, lineHeight: 1, minWidth: 380 }}>{n}</span>
    <span style={{ color: TEXT, fontSize: 32, fontWeight: 400, maxWidth: 900 }}>{t}</span>
  </div>
);
export const S4 = () => (
  <Frame index={4}>
    <div className="flex flex-col gap-14">
      <Stat n="42%" t="стартапов закрываются от «no market need»" />
      <Stat n="87%" t="AI-проектов не доходят до продакшена" />
      <Stat n="18 мес" t="средний срок жизни идеи без валидации" />
      <p style={{ color: MUTED, fontSize: 26, marginTop: 24 }}>
        Это не статистика. Это распределение твоих шансов.
      </p>
    </div>
  </Frame>
);

// Slide 5
export const S5 = () => (
  <Frame index={5}>
    <div className="text-center">
      <h2 style={{ fontSize: 96, fontWeight: 600 }}>InterviewNinja</h2>
      <p style={{ color: MUTED, fontSize: 32, marginTop: 24 }}>
        2017–2018. Стартап, который я закрыл.
      </p>
      <p style={{ color: ACCENT, fontSize: 56, marginTop: 64, fontWeight: 500 }}>
        18 месяцев. Команда. Деньги. Закрыто.
      </p>
    </div>
  </Frame>
);

// Slide 6
export const S6 = () => (
  <Frame index={6}>
    <div className="grid grid-cols-2 gap-24 w-full max-w-[1500px]">
      <div>
        <h3 style={{ fontSize: 48, fontWeight: 600, marginBottom: 32 }}>Что строил</h3>
        <p style={{ color: MUTED, fontSize: 28, lineHeight: 1.5 }}>
          Платформа подготовки к техническим собеседованиям с ментором. Match с интервьюером, mock-сессии, обратная связь.
        </p>
      </div>
      <div>
        <h3 style={{ fontSize: 48, fontWeight: 600, marginBottom: 32 }}>Цифры</h3>
        <ul style={{ color: TEXT, fontSize: 28, lineHeight: 1.7 }}>
          <li>• 18 месяцев разработки</li>
          <li>• Команда: 4 человека</li>
          <li>• Вложено: ~$120k</li>
          <li>• Платящих клиентов на момент закрытия: 0</li>
        </ul>
      </div>
    </div>
  </Frame>
);

// Slide 7
export const S7 = () => (
  <Frame index={7}>
    <div className="max-w-[1500px] w-full">
      <h2 style={{ fontSize: 64, fontWeight: 600, marginBottom: 56 }}>Сигналы, которые я не услышал</h2>
      <ol style={{ fontSize: 36, lineHeight: 1.6, listStyle: "none", padding: 0 }}>
        {[
          "Никто не платил до того, как был продукт",
          "«Интересно» вместо «когда я могу попробовать?»",
          "Хвалили друзья. Не хвалили незнакомцы.",
          "Я задавал вопросы, чтобы услышать «да»",
        ].map((t, i) => (
          <li key={i} style={{ display: "flex", gap: 24, marginBottom: 18 }}>
            <span style={{ color: ACCENT, minWidth: 60 }}>{i + 1}.</span>
            <span>{t}</span>
          </li>
        ))}
      </ol>
    </div>
  </Frame>
);

// Slide 8
export const S8 = () => (
  <Frame index={8}>
    <div className="max-w-[1500px] w-full">
      <h2 style={{ fontSize: 64, fontWeight: 600, marginBottom: 64 }}>Что я сделал бы сейчас</h2>
      {["Спросил бы $1 до постройки", "Говорил бы с теми, кто меня не любит", "Слушал бы паузы, а не слова"].map((t, i) => (
        <div key={i} style={{ display: "flex", gap: 32, marginBottom: 36, alignItems: "baseline" }}>
          <span style={{ color: ACCENT, fontSize: 56, fontWeight: 600, minWidth: 80 }}>{i + 1}</span>
          <span style={{ fontSize: 40, fontWeight: 500 }}>{t}</span>
        </div>
      ))}
    </div>
  </Frame>
);

// Slide 9
export const S9 = () => (
  <Frame index={9}>
    <div className="text-center max-w-[1500px]">
      <h2 style={{ fontSize: 80, fontWeight: 600 }}>MetaMinder</h2>
      <p style={{ color: MUTED, fontSize: 30, marginTop: 20, marginBottom: 64 }}>
        2019–2025. B2B SaaS LMS. Экзит.
      </p>
      <Quote size={52}>
        В первой версии — никто не покупал. Во второй — нашли свою нишу. Разница — 47 разговоров.
      </Quote>
    </div>
  </Frame>
);

// Slide 10
export const S10 = () => (
  <Frame index={10}>
    <div className="text-center max-w-[1500px]">
      <h2 style={{ fontSize: 80, fontWeight: 600 }}>Mikey</h2>
      <p style={{ color: MUTED, fontSize: 30, marginTop: 20, marginBottom: 64 }}>
        2025–сейчас. AI-matchmaking для Израиля.
      </p>
      <Quote size={56}>Валидация — это не разовый акт. Это ритм.</Quote>
    </div>
  </Frame>
);

// Slide 11
export const S11 = () => (
  <Frame index={11}>
    <div className="text-center max-w-[1500px]">
      <h2 style={{ fontSize: 80, fontWeight: 600 }}>RunEverywhere</h2>
      <p style={{ color: MUTED, fontSize: 30, marginTop: 20, marginBottom: 64 }}>
        50,000+ пользователей в 107 странах.
      </p>
      <Quote size={50}>
        Я не задавал вопросы. Рынок сам говорил. Я просто умел слушать.
      </Quote>
    </div>
  </Frame>
);

// Slide 12
export const S12 = () => (
  <Frame index={12}>
    <Quote size={68}>
      Валидация — это не доказательство того, что идея хорошая. Это попытка её убить.
    </Quote>
  </Frame>
);

// Slide 13
export const S13 = () => (
  <Frame index={13}>
    <div className="text-center">
      <p style={{ fontSize: 64, fontWeight: 600, marginBottom: 32 }}>Теперь — метод.</p>
      <p style={{ fontSize: 56, color: ACCENT, fontWeight: 500 }}>
        10 разговоров до первого пикселя.
      </p>
    </div>
  </Frame>
);

// Slide 14
export const S14 = () => (
  <Frame index={14}>
    <div className="max-w-[1500px] w-full">
      <h2 style={{ fontSize: 64, fontWeight: 600, marginBottom: 56 }}>Кого ты НЕ интервьюируешь</h2>
      {["Друзей", "Семью", "Тех, кому ты нравишься"].map((t) => (
        <div key={t} style={{ display: "flex", gap: 28, alignItems: "center", marginBottom: 24, fontSize: 44 }}>
          <span style={{ color: RED, fontSize: 48 }}>❌</span>
          <span>{t}</span>
        </div>
      ))}
      <p style={{ color: ACCENT, fontStyle: "italic", fontSize: 30, marginTop: 56, lineHeight: 1.4 }}>
        «Ты ищешь людей, которые скажут "это не работает" — потому что только они скажут правду.»
      </p>
    </div>
  </Frame>
);

// Slide 15
export const S15 = () => (
  <Frame index={15}>
    <div className="w-full max-w-[1600px]">
      <div className="grid grid-cols-2 gap-16">
        <div>
          <h3 style={{ color: RED, fontSize: 44, fontWeight: 600, marginBottom: 28 }}>❌ ПЛОХО</h3>
          <p style={{ fontSize: 30, fontStyle: "italic", lineHeight: 1.5 }}>
            «Тебе бы пригодилось приложение, которое...?»
          </p>
        </div>
        <div>
          <h3 style={{ color: GREEN, fontSize: 44, fontWeight: 600, marginBottom: 28 }}>✅ ХОРОШО</h3>
          <p style={{ fontSize: 30, fontStyle: "italic", lineHeight: 1.5 }}>
            «Расскажи, как ты решал эту проблему в последний раз?»
          </p>
        </div>
      </div>
      <p style={{ color: ACCENT, fontSize: 30, textAlign: "center", marginTop: 72, lineHeight: 1.4 }}>
        «Спрашивай про прошлое. Не про будущее. Прошлое — данные. Будущее — фантазии.»
      </p>
    </div>
  </Frame>
);

// Slide 16
const List: React.FC<{ items: string[] }> = ({ items }) => (
  <ul style={{ fontSize: 26, lineHeight: 1.6, listStyle: "none", padding: 0 }}>
    {items.map((t) => (
      <li key={t} style={{ marginBottom: 14 }}>• {t}</li>
    ))}
  </ul>
);
export const S16 = () => (
  <Frame index={16}>
    <div className="w-full max-w-[1600px] grid grid-cols-2 gap-20">
      <div>
        <h3 style={{ color: GREEN, fontSize: 44, fontWeight: 600, marginBottom: 28 }}>✅ PASS</h3>
        <List
          items={[
            "Описывают ту же боль теми же словами",
            "Сами рассказывают про костыли",
            "Спрашивают «когда я могу попробовать?»",
            "Готовы заплатить ДО продукта",
          ]}
        />
      </div>
      <div>
        <h3 style={{ color: RED, fontSize: 44, fontWeight: 600, marginBottom: 28 }}>❌ FAIL</h3>
        <List
          items={[
            "«Интересная идея»",
            "«Я бы попробовал»",
            "«У моего друга была такая проблема»",
            "Пауза перед ответом",
          ]}
        />
      </div>
    </div>
  </Frame>
);

// Slide 17
const Card: React.FC<{ icon: string; title: string; sub: string }> = ({ icon, title, sub }) => (
  <div
    style={{
      border: `1px solid ${ACCENT}33`,
      borderRadius: 16,
      padding: 36,
      background: "rgba(0,212,255,0.04)",
      width: 520,
    }}
  >
    <div style={{ fontSize: 56, marginBottom: 16 }}>{icon}</div>
    <div style={{ fontSize: 30, fontWeight: 600, marginBottom: 10 }}>{title}</div>
    <div style={{ color: MUTED, fontSize: 22, marginBottom: 24, lineHeight: 1.4 }}>{sub}</div>
    <button
      style={{
        background: ACCENT,
        color: "#001018",
        border: "none",
        borderRadius: 10,
        padding: "14px 28px",
        fontSize: 22,
        fontWeight: 600,
        cursor: "pointer",
      }}
    >
      Скачать
    </button>
  </div>
);
export const S17 = () => (
  <Frame index={17}>
    <div className="flex flex-col items-center gap-12">
      <h2 style={{ fontSize: 64, fontWeight: 600 }}>Скачай прямо сейчас</h2>
      <div className="flex gap-12">
        <Card icon="📄" title="Скрипт интервью" sub="12 готовых вопросов под адаптацию" />
        <Card icon="✅" title="Чеклист сигналов" sub="pass/fail в одной странице" />
      </div>
      <div
        style={{
          width: 140,
          height: 140,
          background: "#FFFFFF",
          borderRadius: 12,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#0A0E1A",
          fontSize: 14,
          fontWeight: 600,
        }}
      >
        QR
      </div>
    </div>
  </Frame>
);

// Slide 18
const Task: React.FC<{ time: string; text: string }> = ({ time, text }) => (
  <div
    style={{
      border: `1px solid ${ACCENT}33`,
      borderRadius: 14,
      padding: "24px 32px",
      background: "rgba(0,212,255,0.04)",
      display: "flex",
      gap: 28,
      alignItems: "center",
      maxWidth: 1400,
    }}
  >
    <span
      style={{
        background: ACCENT,
        color: "#001018",
        padding: "8px 18px",
        borderRadius: 999,
        fontSize: 22,
        fontWeight: 700,
        whiteSpace: "nowrap",
      }}
    >
      {time}
    </span>
    <span style={{ fontSize: 26, lineHeight: 1.5 }}>{text}</span>
  </div>
);
export const S18 = () => (
  <Frame index={18}>
    <div className="flex flex-col gap-6 w-full items-center">
      <h2 style={{ fontSize: 56, fontWeight: 600, marginBottom: 24 }}>Сейчас — твоя очередь</h2>
      <Task time="3 мин" text="Напиши 5 имён людей, с которыми ты будешь говорить. Не друзей." />
      <Task time="3 мин" text="Сформулируй главную гипотезу: «Я предполагаю, что [кто] страдает от [чего] и сейчас решает это [как].»" />
      <Task time="5 мин" text="Адаптируй 3 вопроса из шаблона под свою нишу. Не копируй — переписывай своими словами." />
      <p style={{ color: ACCENT, fontStyle: "italic", fontSize: 26, marginTop: 24, textAlign: "center", maxWidth: 1300 }}>
        «Поставь видео на паузу. Сделай это руками. Иначе остаток урока бесполезен.»
      </p>
    </div>
  </Frame>
);

// Slide 19
export const S19 = () => (
  <Frame index={19}>
    <div className="max-w-[1500px] w-full">
      <h2 style={{ fontSize: 56, fontWeight: 600, marginBottom: 56 }}>
        Где это ломается, если идти одному
      </h2>
      {[
        ["Нет ритма.", "Один разговор и бросил."],
        ["Нет обратной связи на интерпретацию.", "Ты услышал «интересно» — и подумал, что это «да»."],
        ["Страх отказа.", "Ты выбираешь только лояльных собеседников."],
      ].map(([t, sub], i) => (
        <div key={i} style={{ marginBottom: 32, display: "flex", gap: 28 }}>
          <span style={{ color: ACCENT, fontSize: 40, fontWeight: 600, minWidth: 50 }}>{i + 1}</span>
          <div>
            <div style={{ fontSize: 36, fontWeight: 500 }}>{t}</div>
            <div style={{ color: MUTED, fontSize: 26, marginTop: 6 }}>{sub}</div>
          </div>
        </div>
      ))}
    </div>
  </Frame>
);

// Slide 20
export const S20 = () => (
  <Frame index={20}>
    <div className="text-center max-w-[1500px]">
      <h2 style={{ fontSize: 72, fontWeight: 600 }}>The Founders Circle</h2>
      <p style={{ color: ACCENT, fontSize: 32, marginTop: 16, marginBottom: 48 }}>
        3 месяца. 12 встреч. От идеи до первых клиентов.
      </p>
      <ul style={{ fontSize: 26, lineHeight: 1.7, listStyle: "none", padding: 0, textAlign: "left", maxWidth: 1100, margin: "0 auto" }}>
        <li>• У тебя есть идея, и ты не хочешь потерять 18 месяцев</li>
        <li>• Ты уже строишь, но застрял</li>
        <li>• Ты прошёл этот урок и понял, что хочешь, чтобы кто-то тебя вёл</li>
      </ul>
      <a
        href="https://founders-circle.space"
        target="_blank"
        rel="noreferrer"
        style={{
          display: "inline-block",
          marginTop: 48,
          background: ACCENT,
          color: "#001018",
          padding: "20px 48px",
          borderRadius: 14,
          fontSize: 28,
          fontWeight: 700,
          textDecoration: "none",
        }}
      >
        Узнать больше → founders-circle.space
      </a>
    </div>
  </Frame>
);

// Slide 21
export const S21 = () => (
  <Frame index={21}>
    <div
      style={{
        color: ACCENT,
        fontStyle: "italic",
        fontWeight: 500,
        fontSize: 56,
        lineHeight: 1.3,
        textAlign: "center",
        maxWidth: 1600,
      }}
    >
      «Валидация — это не доказательство. Это попытка убить идею.
      <br />
      <br />
      Если идея пережила 10 правильных разговоров — можно строить.
      <br />
      <br />
      Если нет — ты только что сэкономил себе 18 месяцев жизни.»
    </div>
  </Frame>
);

// Slide 22
export const S22 = () => (
  <Frame index={22}>
    <div className="max-w-[1500px] w-full">
      <h2 style={{ fontSize: 64, fontWeight: 600, marginBottom: 56 }}>До Урока 2</h2>
      {[
        "Назначь 3 разговора в ближайшие 7 дней",
        "Запиши, что ты услышал — буквально, словами собеседника",
        "На Уроке 2 ты будешь работать с этими записями",
      ].map((t, i) => (
        <div key={i} style={{ display: "flex", gap: 28, alignItems: "baseline", marginBottom: 28 }}>
          <span style={{ color: ACCENT, fontSize: 48, fontWeight: 600, minWidth: 70 }}>{i + 1}</span>
          <span style={{ fontSize: 36, fontWeight: 500 }}>{t}</span>
        </div>
      ))}
      <p style={{ color: MUTED, fontStyle: "italic", fontSize: 28, marginTop: 56 }}>
        Урок 2 — Ресерч и позиционирование. Самый дорогой навык 2026 года.
      </p>
    </div>
  </Frame>
);

export const slides = [S1, S2, S3, S4, S5, S6, S7, S8, S9, S10, S11, S12, S13, S14, S15, S16, S17, S18, S19, S20, S21, S22];
