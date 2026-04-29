import React from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import { useSlideMeta } from "./SlideMetaContext";
import titleBg from "@/assets/slides/title-bg.jpg";

/* ========== Shared atoms (matched to Lessons 1–2) ========== */

const Stage: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = "" }) => (
  <div className={`w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col ${className}`}>{children}</div>
);

const Eyebrow: React.FC<{ children: React.ReactNode; mobile?: boolean }> = ({ children, mobile }) => (
  <p
    className={`uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium ${
      mobile ? "text-[9px] mb-[8px]" : "text-[18px] mb-[20px]"
    }`}
  >
    {children}
  </p>
);

const Footer: React.FC = () => {
  const { index, total, lesson } = useSlideMeta();
  return (
    <div
      className="absolute"
      style={{ right: 48, bottom: 28, color: "hsl(var(--slide-text-muted))", fontSize: 14, letterSpacing: "0.04em" }}
    >
      Михаэль · Урок {lesson} из 4 · Slide {index}/{total}
    </div>
  );
};

const FooterMobile: React.FC = () => {
  const { index, total } = useSlideMeta();
  return (
    <div
      className="absolute"
      style={{ right: 14, bottom: 10, color: "hsl(var(--slide-text-muted))", fontSize: 8, letterSpacing: "0.04em" }}
    >
      Slide {index}/{total}
    </div>
  );
};

/* ========== Slide 1 — Title ========== */
const L3Title = () => {
  const isMobile = useIsMobile();
  if (isMobile) {
    return (
      <Stage className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={titleBg} alt="" className="w-full h-full object-cover opacity-[0.06]" />
          <div className="absolute inset-0 bg-gradient-to-b from-[hsl(var(--slide-bg))] via-[hsl(var(--slide-bg)/0.85)] to-transparent" />
        </div>
        <div className="relative z-10 flex flex-col justify-center px-[28px] h-full">
          <div className="w-[30px] h-[2px] bg-[hsl(var(--slide-gold))] mb-[20px]" />
          <p className="uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] text-[10px] font-medium mb-[10px]">
            Урок 3 · Мини-курс
          </p>
          <h1 className="font-display text-[24px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] tracking-[-0.02em]">
            Собрать рабочий продукт за 7 дней —<br />не «наговорив» код,<br />а управляя AI как джуном
          </h1>
          <div className="mt-[18px] space-y-[8px] text-[12px] text-[hsl(var(--slide-text))] leading-[1.5]">
            <p><span className="text-[hsl(var(--slide-gold))]">→</span> декомпозировать задачу до уровня design doc</p>
            <p><span className="text-[hsl(var(--slide-gold))]">→</span> писать промпты, которые дают рабочий код, а не салат</p>
            <p><span className="text-[hsl(var(--slide-gold))]">→</span> ревьюить diff и тестировать — каждый раз</p>
            <p><span className="text-[hsl(var(--slide-gold))]">→</span> собрать лендинг за 30 минут</p>
          </div>
          <p className="text-[10px] text-[hsl(var(--slide-text-muted))] mt-[14px] italic">
            Это не «вайб-кодинг». Это инженерный воркфлоу с AI внутри.
          </p>
        </div>
        <FooterMobile />
      </Stage>
    );
  }
  return (
    <Stage className="relative overflow-hidden">
      <div className="absolute inset-0">
        <img src={titleBg} alt="" className="w-full h-full object-cover opacity-[0.06]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[hsl(var(--slide-bg))] via-[hsl(var(--slide-bg)/0.85)] to-transparent" />
      </div>
      <div className="relative z-10 flex flex-col justify-center px-[140px] max-w-[1500px] h-full">
        <div className="w-[80px] h-[2px] bg-[hsl(var(--slide-gold))] mb-[44px]" />
        <p className="uppercase tracking-[0.25em] text-[hsl(var(--slide-gold))] text-[20px] font-medium mb-[28px]">
          Урок 3 · Мини-курс The Founders Circle
        </p>
        <h1 className="font-display text-[60px] font-bold text-[hsl(var(--slide-text))] leading-[1.05] tracking-[-0.02em]">
          Собрать рабочий продукт за 7 дней —<br />
          <span className="text-[hsl(var(--slide-gold))]">не «наговорив» код, а управляя AI</span> как джуном
        </h1>
        <div className="mt-[40px] grid grid-cols-2 gap-[24px] max-w-[1500px]">
          <div className="border-l-2 border-[hsl(var(--slide-gold))] pl-[20px]">
            <p className="text-[14px] uppercase tracking-[0.15em] text-[hsl(var(--slide-gold))] mb-[6px]">Декомпозируешь</p>
            <p className="text-[20px] text-[hsl(var(--slide-text))] leading-[1.35]">задачу до уровня design doc, который AI понимает буквально</p>
          </div>
          <div className="border-l-2 border-[hsl(var(--slide-gold))] pl-[20px]">
            <p className="text-[14px] uppercase tracking-[0.15em] text-[hsl(var(--slide-gold))] mb-[6px]">Напишешь</p>
            <p className="text-[20px] text-[hsl(var(--slide-text))] leading-[1.35]">промпты, которые дают рабочий код, а не салат из идей</p>
          </div>
          <div className="border-l-2 border-[hsl(var(--slide-gold))] pl-[20px]">
            <p className="text-[14px] uppercase tracking-[0.15em] text-[hsl(var(--slide-gold))] mb-[6px]">Отревьюишь</p>
            <p className="text-[20px] text-[hsl(var(--slide-text))] leading-[1.35]">каждый diff и протестируешь — без этого AI ломает прод тихо</p>
          </div>
          <div className="border-l-2 border-[hsl(var(--slide-gold))] pl-[20px]">
            <p className="text-[14px] uppercase tracking-[0.15em] text-[hsl(var(--slide-gold))] mb-[6px]">Соберёшь</p>
            <p className="text-[20px] text-[hsl(var(--slide-text))] leading-[1.35]">лендинг за 30 минут — первая точка, где идея становится продаваемой</p>
          </div>
        </div>
        <p className="text-[20px] text-[hsl(var(--slide-text-muted))] mt-[32px] italic">
          Это не «вайб-кодинг». Это инженерный воркфлоу с AI внутри.
        </p>
      </div>
      <Footer />
    </Stage>
  );
};

/* ========== Slide 2 — Главный инсайт ========== */
const L3Insight = () => {
  const isMobile = useIsMobile();
  if (isMobile) {
    return (
      <Stage className="relative">
        <div className="flex flex-col justify-center px-[24px] h-full">
          <Eyebrow mobile>Главный инсайт</Eyebrow>
          <div className="bg-[hsl(var(--slide-gold)/0.1)] border-l-2 border-[hsl(var(--slide-gold))] px-[14px] py-[14px]">
            <p className="text-[14px] font-bold text-[hsl(var(--slide-text))] leading-[1.3]">
              «AI пишет код за минуты. Но если ты не знаешь, что и зачем строишь — ты получишь 10 000 строк бесполезного. Скорость без направления — это быстрая дорога в никуда.»
            </p>
          </div>
          <p className="text-[10px] text-[hsl(var(--slide-text-muted))] mt-[10px]">
            AI усиливает то, что у тебя уже есть. И отсутствие плана — тоже усиливает.
          </p>
        </div>
        <FooterMobile />
      </Stage>
    );
  }
  return (
    <Stage className="relative">
      <div className="flex flex-col justify-center px-[140px] h-full">
        <Eyebrow>Главный инсайт</Eyebrow>
        <div className="bg-[hsl(var(--slide-gold)/0.1)] border-l-[4px] border-[hsl(var(--slide-gold))] px-[40px] py-[36px] max-w-[1600px]">
          <p className="text-[44px] font-bold text-[hsl(var(--slide-text))] leading-[1.2]">
            «AI пишет код за минуты. Но если ты не знаешь, что и зачем строишь — ты получишь 10 000 строк бесполезного. Скорость без направления — это просто быстрая дорога в никуда.»
          </p>
        </div>
        <p className="text-[22px] text-[hsl(var(--slide-text-muted))] mt-[24px] italic max-w-[1500px]">
          AI усиливает то, что у тебя уже есть. План, дисциплину, ревью. И отсутствие всего этого — тоже усиливает.
        </p>
      </div>
      <Footer />
    </Stage>
  );
};

/* ========== Slide 3 — Mirror question ========== */
const L3Mirror = () => {
  const isMobile = useIsMobile();
  if (isMobile) {
    return (
      <Stage className="relative">
        <div className="flex flex-col justify-center px-[20px] h-full">
          <Eyebrow mobile>Вопрос на старт</Eyebrow>
          <h2 className="font-display text-[20px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[12px]">
            Покажи последний diff, который ты прочитал — строка за строкой — перед тем как принять.
          </h2>
          <p className="text-[11px] text-[hsl(var(--slide-text)/0.9)] leading-[1.5] mb-[10px]">
            Не помнишь? Значит, ты не разработчик с AI. Ты пассажир.
          </p>
          <p className="text-[10px] italic text-[hsl(var(--slide-gold))] leading-[1.4]">
            После этого урока ты будешь сидеть за рулём, а AI — печатать.
          </p>
        </div>
        <FooterMobile />
      </Stage>
    );
  }
  return (
    <Stage className="relative">
      <div className="flex flex-col justify-center px-[140px] h-full max-w-[1700px]">
        <Eyebrow>Вопрос на старт</Eyebrow>
        <h2 className="font-display text-[58px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[28px] tracking-[-0.01em] max-w-[1500px]">
          Покажи последний diff, который ты прочитал — строка за строкой — перед тем как принять.
        </h2>
        <p className="text-[26px] text-[hsl(var(--slide-text)/0.9)] leading-[1.5] mb-[24px] max-w-[1400px]">
          Не помнишь? Значит, ты не разработчик с AI. Ты <b>пассажир</b>, который надеется, что водитель не врежется.
        </p>
        <p className="text-[24px] italic text-[hsl(var(--slide-gold))] leading-[1.45] max-w-[1500px]">
          После этого урока ты будешь сидеть за рулём. AI — только печатает.
        </p>
      </div>
      <Footer />
    </Stage>
  );
};

/* ========== Slide 4 — Контр-кейс RunEverywhere (до AI) ========== */
const L3_RUN_BEFORE = [
  { num: "6 мес", text: "от идеи до первой версии — фронт, бэк, инфра вручную" },
  { num: "3 человека", text: "команда: я + фронт + бэк. Зарплаты, созвоны, ревью PR" },
  { num: "≈ $40K", text: "сожжено до того, как первый юзер сказал «не пользуюсь»" },
];
const L3_RUN_AFTER = [
  "Сейчас тот же скоуп — solo, 2–3 недели, $0 на разработку",
  "AI закрывает позиции фронта и бэка на уровне крепкого джуна",
  "Мой job сменился: я не пишу код. Я декомпозирую, ревьюю и тестирую",
];
const L3RunEverywhere = () => {
  const isMobile = useIsMobile();
  if (isMobile) {
    return (
      <Stage className="relative">
        <div className="flex flex-col justify-center px-[18px] h-full">
          <Eyebrow mobile>Контр-кейс · до AI</Eyebrow>
          <h2 className="font-display text-[18px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[8px]">
            RunEverywhere · 2022. Как мы строили <span className="text-[hsl(var(--slide-gold))]">до</span> AI
          </h2>
          <div className="space-y-[6px] mb-[10px]">
            {L3_RUN_BEFORE.map((it) => (
              <div key={it.num} className="bg-[hsl(0_70%_55%/0.06)] border-l-2 border-[hsl(0_70%_55%)] rounded-[6px] px-[10px] py-[6px]">
                <span className="text-[12px] font-bold text-[hsl(0_70%_65%)] mr-[6px]">{it.num}</span>
                <span className="text-[9px] text-[hsl(var(--slide-text)/0.9)]">{it.text}</span>
              </div>
            ))}
          </div>
          <p className="text-[9px] font-bold text-[hsl(var(--slide-gold))] uppercase tracking-[0.12em] mb-[3px]">Что изменилось в 2024</p>
          <ul className="space-y-[3px] mb-[8px]">
            {L3_RUN_AFTER.map((t) => (
              <li key={t} className="text-[8.5px] text-[hsl(var(--slide-text)/0.9)] leading-[1.4]">→ {t}</li>
            ))}
          </ul>
          <p className="text-[9px] text-[hsl(var(--slide-gold))] italic leading-[1.4]">
            Те же задачи. Цена и скорость — другие на порядок.
          </p>
        </div>
        <FooterMobile />
      </Stage>
    );
  }
  return (
    <Stage className="relative">
      <div className="flex flex-col justify-center px-[140px] h-full max-w-[1800px]">
        <Eyebrow>Контр-кейс · как было до AI</Eyebrow>
        <h2 className="font-display text-[58px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[28px] tracking-[-0.01em]">
          RunEverywhere · 2022. Как мы строили <span className="text-[hsl(var(--slide-gold))]">до</span> AI
        </h2>
        <div className="grid grid-cols-3 gap-[24px] mb-[32px] max-w-[1700px]">
          {L3_RUN_BEFORE.map((it) => (
            <div key={it.num} className="bg-[hsl(0_70%_55%/0.06)] border-l-[4px] border-[hsl(0_70%_55%)] rounded-[14px] px-[28px] py-[22px]">
              <div className="font-display text-[40px] font-bold text-[hsl(0_70%_65%)] leading-[1.05] mb-[10px]">{it.num}</div>
              <div className="text-[19px] text-[hsl(var(--slide-text)/0.9)] leading-[1.45]">{it.text}</div>
            </div>
          ))}
        </div>
        <div className="bg-[hsl(var(--slide-gold)/0.06)] border-l-[4px] border-[hsl(var(--slide-gold))] rounded-[14px] px-[32px] py-[22px] max-w-[1700px]">
          <p className="text-[15px] font-bold text-[hsl(var(--slide-gold))] uppercase tracking-[0.18em] mb-[10px]">Что изменилось в 2024</p>
          <ul className="space-y-[8px]">
            {L3_RUN_AFTER.map((t) => (
              <li key={t} className="text-[20px] text-[hsl(var(--slide-text)/0.9)] leading-[1.45]">→ {t}</li>
            ))}
          </ul>
        </div>
        <p className="text-[22px] text-[hsl(var(--slide-gold))] italic mt-[20px] leading-[1.45] max-w-[1700px]">
          Те же задачи. Цена и скорость — другие на порядок. Но только если ты ведёшь, а не «договариваешься» с моделью.
        </p>
      </div>
      <Footer />
    </Stage>
  );
};

/* ========== Slide 5 — Главный кейс: Mikey solo с AI ========== */
const L3_MIKEY = [
  { num: "1 человек", text: "ты, твоя ЦА в голове, твой design doc" },
  { num: "14 дней", text: "от пустой папки до рабочего MVP, который можно отдать юзеру" },
  { num: "$0", text: "на разработку. Подписки на AI-инструменты — < $50/мес" },
];
const L3_MIKEY_HOW = [
  "Декомпозировал MVP на 18 задач уровня «AI-джун за час»",
  "На каждую задачу — короткий design doc (что, зачем, контракт)",
  "AI пишет → я читаю diff → запускаю → правлю промпт, если не так",
  "Каждый день — выкат. Каждый выкат — обратная связь от 1–2 юзеров",
];
const L3MikeyCase = () => {
  const isMobile = useIsMobile();
  if (isMobile) {
    return (
      <Stage className="relative">
        <div className="flex flex-col justify-center px-[18px] h-full">
          <Eyebrow mobile>Главный кейс · solo с AI</Eyebrow>
          <h2 className="font-display text-[18px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[8px]">
            Mikey · от пустой папки до MVP за <span className="text-[hsl(var(--slide-gold))]">14 дней</span>
          </h2>
          <div className="grid grid-cols-3 gap-[5px] mb-[10px]">
            {L3_MIKEY.map((it) => (
              <div key={it.num} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.3)] rounded-[6px] px-[6px] py-[6px]">
                <div className="text-[12px] font-bold text-[hsl(var(--slide-gold))] leading-[1.05]">{it.num}</div>
                <div className="text-[7.5px] text-[hsl(var(--slide-text)/0.9)] leading-[1.35] mt-[2px]">{it.text}</div>
              </div>
            ))}
          </div>
          <p className="text-[9px] font-bold text-[hsl(var(--slide-gold))] uppercase tracking-[0.12em] mb-[3px]">Как это работало</p>
          <ul className="space-y-[3px] mb-[8px]">
            {L3_MIKEY_HOW.map((t) => (
              <li key={t} className="text-[8.5px] text-[hsl(var(--slide-text)/0.9)] leading-[1.4]">→ {t}</li>
            ))}
          </ul>
          <p className="text-[9px] text-[hsl(var(--slide-gold))] italic leading-[1.4]">
            Не «AI построил продукт». Я построил продукт. AI печатал.
          </p>
        </div>
        <FooterMobile />
      </Stage>
    );
  }
  return (
    <Stage className="relative">
      <div className="flex flex-col justify-center px-[140px] h-full max-w-[1800px]">
        <Eyebrow>Главный кейс · solo с AI</Eyebrow>
        <h2 className="font-display text-[58px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[28px] tracking-[-0.01em]">
          Mikey · от пустой папки до MVP за <span className="text-[hsl(var(--slide-gold))]">14 дней</span>
        </h2>
        <div className="grid grid-cols-3 gap-[24px] mb-[32px] max-w-[1700px]">
          {L3_MIKEY.map((it) => (
            <div key={it.num} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.3)] rounded-[14px] px-[28px] py-[22px]">
              <div className="font-display text-[44px] font-bold text-[hsl(var(--slide-gold))] leading-[1.05] mb-[10px]">{it.num}</div>
              <div className="text-[19px] text-[hsl(var(--slide-text)/0.9)] leading-[1.45]">{it.text}</div>
            </div>
          ))}
        </div>
        <div className="bg-[hsl(var(--slide-gold)/0.06)] border-l-[4px] border-[hsl(var(--slide-gold))] rounded-[14px] px-[32px] py-[22px] max-w-[1700px]">
          <p className="text-[15px] font-bold text-[hsl(var(--slide-gold))] uppercase tracking-[0.18em] mb-[10px]">Как это работало на практике</p>
          <ul className="space-y-[8px]">
            {L3_MIKEY_HOW.map((t) => (
              <li key={t} className="text-[20px] text-[hsl(var(--slide-text)/0.9)] leading-[1.45]">→ {t}</li>
            ))}
          </ul>
        </div>
        <p className="text-[22px] text-[hsl(var(--slide-gold))] italic mt-[20px] leading-[1.45] max-w-[1700px]">
          Не «AI построил продукт». <b className="not-italic">Я</b> построил продукт. AI печатал.
        </p>
      </div>
      <Footer />
    </Stage>
  );
};

/* ========== Slide 6 — Agentic Engineering Workflow (5 шагов) ========== */
const L3_WORKFLOW = [
  { n: "01", t: "Декомпозиция", body: "Разбей фичу на задачи уровня «джун за час». Если задача шире — она ещё не задача." },
  { n: "02", t: "Design doc", body: "Что, зачем, контракт (вход/выход), границы. 1 экран текста на задачу." },
  { n: "03", t: "Промпт по design doc", body: "Не «сделай красиво». Скармливаешь doc + контекст файлов. AI пишет diff." },
  { n: "04", t: "Ревью diff", body: "Читаешь каждое изменение. Не понял строку — спрашиваешь AI «зачем это». Не отвечает внятно — откатываешь." },
  { n: "05", t: "Тест → выкат", body: "Запустил, кликнул, проверил кейс из design doc. Только потом — merge." },
];
const L3Workflow = () => {
  const isMobile = useIsMobile();
  if (isMobile) {
    return (
      <Stage className="relative">
        <div className="flex flex-col justify-center px-[18px] h-full">
          <Eyebrow mobile>Главный сдвиг</Eyebrow>
          <h2 className="font-display text-[18px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[8px]">
            Agentic engineering workflow — <span className="text-[hsl(var(--slide-gold))]">5 шагов</span>
          </h2>
          <div className="space-y-[5px]">
            {L3_WORKFLOW.map((s) => (
              <div key={s.n} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.22)] rounded-[6px] px-[10px] py-[6px]">
                <p className="text-[9px] font-bold text-[hsl(var(--slide-text))]">
                  <span className="text-[hsl(var(--slide-gold))]">{s.n}.</span> {s.t}
                </p>
                <p className="text-[8px] text-[hsl(var(--slide-text)/0.85)] leading-[1.4]">{s.body}</p>
              </div>
            ))}
          </div>
          <p className="text-[9px] text-[hsl(var(--slide-gold))] italic mt-[8px] leading-[1.4]">
            Пропустил шаг — получил мусор и не понял, в каком месте сломалось.
          </p>
        </div>
        <FooterMobile />
      </Stage>
    );
  }
  return (
    <Stage className="relative">
      <div className="flex flex-col justify-center px-[120px] h-full max-w-[1900px]">
        <Eyebrow>Главный сдвиг — мышление, а не инструмент</Eyebrow>
        <h2 className="font-display text-[56px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[32px] tracking-[-0.01em]">
          Agentic engineering workflow · <span className="text-[hsl(var(--slide-gold))]">5 шагов</span>, всегда в этом порядке
        </h2>
        <div className="grid grid-cols-5 gap-[18px] mb-[24px]">
          {L3_WORKFLOW.map((s) => (
            <div key={s.n} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.3)] rounded-[12px] px-[20px] py-[20px]">
              <p className="text-[14px] font-bold text-[hsl(var(--slide-gold))] uppercase tracking-[0.18em] mb-[10px]">{s.n}</p>
              <p className="text-[22px] font-bold text-[hsl(var(--slide-text))] leading-[1.2] mb-[8px]">{s.t}</p>
              <p className="text-[15px] text-[hsl(var(--slide-text)/0.85)] leading-[1.5]">{s.body}</p>
            </div>
          ))}
        </div>
        <p className="text-[22px] text-[hsl(var(--slide-gold))] italic leading-[1.45] max-w-[1700px]">
          Пропустил шаг — получил мусор и не понял, в каком месте сломалось. Эти 5 шагов — единственная разница между «AI работает» и «AI меня бесит».
        </p>
      </div>
      <Footer />
    </Stage>
  );
};

/* ========== Slide 7 — Декомпозиция + Design Doc (шаблон) ========== */
const L3_DESIGN_DOC = `# Задача: <короткое имя, глагол + объект>

## Зачем (для юзера)
1 предложение. Какая боль закрывается.
Ссылка на цитату из custdev.

## Контракт
- Вход: что приходит (данные, событие, клик)
- Выход: что должно произойти (UI, запись в БД, ответ API)
- Граничные случаи: 2–3 сценария «что если»

## Не делать
- Что НЕ входит в задачу (чтобы AI не уехал в сторону)

## Acceptance
- [ ] Кейс 1: …
- [ ] Кейс 2: …
- [ ] Кейс 3: …`;
const L3DesignDoc = () => {
  const isMobile = useIsMobile();
  if (isMobile) {
    return (
      <Stage className="relative">
        <div className="flex flex-col justify-center px-[16px] h-full">
          <Eyebrow mobile>Шаги 1–2 · фундамент</Eyebrow>
          <h2 className="font-display text-[17px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[6px]">
            Декомпозиция → <span className="text-[hsl(var(--slide-gold))]">Design doc</span>
          </h2>
          <p className="text-[8.5px] text-[hsl(var(--slide-text)/0.85)] leading-[1.45] mb-[6px]">
            Правило: задача = 1 экран design doc. Шире — режь.
          </p>
          <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.3)] rounded-[6px] px-[10px] py-[8px]">
            <pre className="text-[7px] text-[hsl(var(--slide-text))] leading-[1.4] whitespace-pre-wrap font-mono">{L3_DESIGN_DOC}</pre>
          </div>
          <p className="text-[9px] text-[hsl(var(--slide-gold))] italic mt-[8px] leading-[1.4]">
            Без doc — AI угадывает. И почти всегда — мимо.
          </p>
        </div>
        <FooterMobile />
      </Stage>
    );
  }
  return (
    <Stage className="relative">
      <div className="flex flex-col justify-center px-[140px] h-full max-w-[1800px]">
        <Eyebrow>Шаги 1–2 · фундамент всего урока</Eyebrow>
        <h2 className="font-display text-[56px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[16px] tracking-[-0.01em]">
          Декомпозиция → <span className="text-[hsl(var(--slide-gold))]">Design doc</span> на каждую задачу
        </h2>
        <p className="text-[22px] text-[hsl(var(--slide-text)/0.88)] leading-[1.45] mb-[28px] max-w-[1500px]">
          Правило: задача = ровно 1 экран design doc. Если doc не помещается — задача не декомпозирована.
          Без doc AI угадывает контракт. И почти всегда — мимо.
        </p>
        <div className="grid grid-cols-[1fr_1.2fr] gap-[28px]">
          <div className="bg-[hsl(var(--slide-gold)/0.06)] border-l-[4px] border-[hsl(var(--slide-gold))] rounded-[12px] px-[24px] py-[20px]">
            <p className="text-[15px] font-bold text-[hsl(var(--slide-gold))] uppercase tracking-[0.18em] mb-[10px]">Зачем design doc</p>
            <ul className="space-y-[8px] text-[18px] text-[hsl(var(--slide-text)/0.9)] leading-[1.5]">
              <li>→ ты сам понимаешь, что строишь</li>
              <li>→ AI получает контракт, а не настроение</li>
              <li>→ у тебя есть критерий «готово» (acceptance)</li>
              <li>→ через неделю помнишь, зачем это вообще</li>
            </ul>
          </div>
          <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.3)] rounded-[12px] px-[24px] py-[18px]">
            <p className="text-[14px] font-bold text-[hsl(var(--slide-gold))] uppercase tracking-[0.18em] mb-[8px]">Шаблон design doc</p>
            <pre className="text-[14px] text-[hsl(var(--slide-text))] leading-[1.5] whitespace-pre-wrap font-mono">{L3_DESIGN_DOC}</pre>
          </div>
        </div>
      </div>
      <Footer />
    </Stage>
  );
};

/* ========== Slide 8 — Шаг 3: промпт по design doc ========== */
const L3_PROMPT = `Ты — senior-инженер. Я даю тебе design doc одной задачи.

Контекст проекта: <стек: React + Vite + Tailwind, Supabase, ...>
Файлы, которые тебе нужно знать: <список путей>

Design doc:
«««
<вставь сюда design doc из шаблона>
»»»

Что от тебя нужно:
1. Кратко (3–5 строк) перескажи задачу своими словами. Если ты её понял иначе — мы разойдёмся ДО кода.
2. Перечисли файлы, которые ты собираешься менять/создавать. Жди моего ОК.
3. Только после ОК — выдай diff. Не весь файл, а изменения.
4. В конце — ручной чек-лист: как мне за 2 минуты убедиться, что acceptance выполнен.

Если в design doc чего-то не хватает — задай 1–3 уточняющих вопроса. Не выдумывай.`;
const L3PromptSlide = () => {
  const isMobile = useIsMobile();
  if (isMobile) {
    return (
      <Stage className="relative">
        <div className="flex flex-col justify-center px-[16px] h-full">
          <Eyebrow mobile>Шаг 3 · промпт</Eyebrow>
          <h2 className="font-display text-[17px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[6px]">
            Промпт, который не даёт AI <span className="text-[hsl(var(--slide-gold))]">убежать</span>
          </h2>
          <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.3)] rounded-[6px] px-[10px] py-[7px]">
            <pre className="text-[6.5px] text-[hsl(var(--slide-text))] leading-[1.4] whitespace-pre-wrap font-mono">{L3_PROMPT}</pre>
          </div>
          <p className="text-[9px] text-[hsl(var(--slide-gold))] italic mt-[6px] leading-[1.4]">
            «Перескажи задачу» + «жди ОК» + «задай вопросы» — три ловушки, в которые AI чаще всего попадает.
          </p>
        </div>
        <FooterMobile />
      </Stage>
    );
  }
  return (
    <Stage className="relative">
      <div className="flex flex-col justify-center px-[140px] h-full max-w-[1800px]">
        <Eyebrow>Шаг 3 · промпт по design doc</Eyebrow>
        <h2 className="font-display text-[56px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[20px] tracking-[-0.01em]">
          Промпт, который не даёт AI <span className="text-[hsl(var(--slide-gold))]">убежать в сторону</span>
        </h2>
        <div className="grid grid-cols-[1.4fr_1fr] gap-[28px]">
          <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.3)] rounded-[12px] px-[24px] py-[18px]">
            <p className="text-[14px] font-bold text-[hsl(var(--slide-gold))] uppercase tracking-[0.18em] mb-[8px]">Шаблон промпта</p>
            <pre className="text-[14px] text-[hsl(var(--slide-text))] leading-[1.55] whitespace-pre-wrap font-mono">{L3_PROMPT}</pre>
          </div>
          <div className="bg-[hsl(var(--slide-gold)/0.06)] border-l-[4px] border-[hsl(var(--slide-gold))] rounded-[12px] px-[24px] py-[20px]">
            <p className="text-[15px] font-bold text-[hsl(var(--slide-gold))] uppercase tracking-[0.18em] mb-[12px]">Что в нём важно</p>
            <ul className="space-y-[12px] text-[18px] text-[hsl(var(--slide-text)/0.9)] leading-[1.5]">
              <li><b className="text-[hsl(var(--slide-text))]">Перескажи своими словами.</b> Ловишь расхождение в понимании ДО написания кода.</li>
              <li><b className="text-[hsl(var(--slide-text))]">Жди ОК на список файлов.</b> 80% мусора AI рождается, когда он молча трогает «не те» файлы.</li>
              <li><b className="text-[hsl(var(--slide-text))]">Задай вопросы, не выдумывай.</b> Это разрешение AI признать пробел — без него он галлюцинирует.</li>
              <li><b className="text-[hsl(var(--slide-text))]">Чек-лист в конце.</b> Не «всё работает», а конкретные шаги ручной проверки.</li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </Stage>
  );
};

/* ========== Slide 9 — Шаги 4–5: Ревью diff и тест ========== */
const L3_REVIEW = [
  { t: "Читай diff построчно", body: "Не «листай красивое». Каждое изменение — вопрос: зачем оно здесь?" },
  { t: "Спроси «почему», если не понял", body: "AI должен объяснить. Не объяснил внятно — откатываешь и переписываешь промпт." },
  { t: "Лови «улучшения по дороге»", body: "AI любит подкрутить смежный код. Это самый частый источник тихих багов. Удаляй." },
  { t: "Никаких merge без acceptance", body: "Прошёл по чек-листу из design doc руками. Не прошло — не merge. Точка." },
];
const L3Review = () => {
  const isMobile = useIsMobile();
  if (isMobile) {
    return (
      <Stage className="relative">
        <div className="flex flex-col justify-center px-[18px] h-full">
          <Eyebrow mobile>Шаги 4–5 · контроль</Eyebrow>
          <h2 className="font-display text-[18px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[8px]">
            Ревью diff + ручной тест — <span className="text-[hsl(var(--slide-gold))]">всегда</span>
          </h2>
          <div className="space-y-[5px] mb-[8px]">
            {L3_REVIEW.map((r) => (
              <div key={r.t} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.22)] rounded-[6px] px-[10px] py-[6px]">
                <p className="text-[9px] font-bold text-[hsl(var(--slide-text))]">{r.t}</p>
                <p className="text-[8px] text-[hsl(var(--slide-text)/0.85)] leading-[1.4]">{r.body}</p>
              </div>
            ))}
          </div>
          <p className="text-[9px] text-[hsl(var(--slide-gold))] italic leading-[1.4]">
            Без ревью diff AI ломает прод тихо. Ты узнаёшь через неделю — от юзера.
          </p>
        </div>
        <FooterMobile />
      </Stage>
    );
  }
  return (
    <Stage className="relative">
      <div className="flex flex-col justify-center px-[140px] h-full max-w-[1800px]">
        <Eyebrow>Шаги 4–5 · ревью diff и тест</Eyebrow>
        <h2 className="font-display text-[58px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[28px] tracking-[-0.01em]">
          Здесь ты <span className="text-[hsl(var(--slide-gold))]">снова инженер</span>, а не пассажир
        </h2>
        <div className="grid grid-cols-2 gap-[24px] mb-[28px] max-w-[1700px]">
          {L3_REVIEW.map((r) => (
            <div key={r.t} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.3)] rounded-[12px] px-[28px] py-[20px]">
              <p className="text-[24px] font-bold text-[hsl(var(--slide-text))] mb-[8px] leading-[1.25]">{r.t}</p>
              <p className="text-[18px] text-[hsl(var(--slide-text)/0.88)] leading-[1.5]">{r.body}</p>
            </div>
          ))}
        </div>
        <p className="text-[22px] text-[hsl(var(--slide-gold))] italic leading-[1.45] max-w-[1700px]">
          Без ревью diff AI ломает прод <b className="not-italic">тихо</b>. Ты узнаёшь через неделю — от юзера. Дешевле потратить 5 минут на чтение, чем 5 часов на разбор.
        </p>
      </div>
      <Footer />
    </Stage>
  );
};

/* ========== Slide 10 — TFC CTA · точка слома одиночки ========== */
const L3TfcCta = () => {
  const isMobile = useIsMobile();
  if (isMobile) {
    return (
      <Stage className="relative">
        <div className="flex flex-col justify-center px-[20px] h-full">
          <Eyebrow mobile>Точка слома одиночки</Eyebrow>
          <h2 className="font-display text-[19px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[8px]">
            Solo с AI ускоряет всё. <span className="text-[hsl(var(--slide-gold))]">И ошибки тоже.</span>
          </h2>
          <p className="text-[10px] text-[hsl(var(--slide-text)/0.9)] leading-[1.5] mb-[8px]">
            Одиночке некому сказать: «ты строишь фичу вместо ценности». AI поддакнет. Друг похвалит. Через 3 недели ты — один с красивым продуктом, в который никто не платит.
          </p>
          <div className="bg-[hsl(var(--slide-gold)/0.1)] border-l-2 border-[hsl(var(--slide-gold))] rounded-[6px] px-[12px] py-[10px] mb-[10px]">
            <p className="text-[10px] font-bold text-[hsl(var(--slide-gold))] uppercase tracking-[0.15em] mb-[4px]">The Founders Circle</p>
            <p className="text-[10px] text-[hsl(var(--slide-text))] leading-[1.5]">
              Группа 5–7 фаундеров. Каждую неделю — ревью того, что ты строишь, против того, что говорят юзеры. Без вежливости.
            </p>
          </div>
          <p className="text-[10px] text-[hsl(var(--slide-gold))] italic leading-[1.4]">
            AI не остановит тебя. Группа — да.
          </p>
        </div>
        <FooterMobile />
      </Stage>
    );
  }
  return (
    <Stage className="relative">
      <div className="flex flex-col justify-center px-[140px] h-full max-w-[1700px]">
        <Eyebrow>Точка слома одиночки</Eyebrow>
        <h2 className="font-display text-[60px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[24px] tracking-[-0.01em]">
          Solo с AI ускоряет всё. <span className="text-[hsl(var(--slide-gold))]">И ошибки тоже.</span>
        </h2>
        <p className="text-[24px] text-[hsl(var(--slide-text)/0.9)] leading-[1.5] mb-[28px] max-w-[1500px]">
          Одиночке <b>некому</b> сказать: «ты строишь фичу вместо ценности». AI поддакнет. Друг похвалит.
          Через 3 недели ты — один с красивым продуктом, в который никто не платит.
        </p>
        <div className="bg-[hsl(var(--slide-gold)/0.08)] border-l-[4px] border-[hsl(var(--slide-gold))] rounded-[14px] px-[36px] py-[26px] max-w-[1500px] mb-[24px]">
          <p className="text-[16px] font-bold text-[hsl(var(--slide-gold))] uppercase tracking-[0.2em] mb-[12px]">The Founders Circle</p>
          <p className="text-[24px] text-[hsl(var(--slide-text))] leading-[1.5]">
            Группа 5–7 фаундеров. Каждую неделю — ревью того, что ты строишь, против того, что говорят юзеры.
            <b className="text-[hsl(var(--slide-gold))]"> Без вежливости.</b> С разбором твоего design doc и diff.
          </p>
        </div>
        <p className="text-[24px] italic text-[hsl(var(--slide-gold))] leading-[1.45] max-w-[1500px]">
          AI не остановит тебя, когда ты бежишь не туда. Группа — да.
        </p>
      </div>
      <Footer />
    </Stage>
  );
};

/* ========== Slide 11 — Лендинг за 30 минут ========== */
const L3_LANDING_PROMPT = `Сделай мне одностраничный лендинг для <название продукта>.

Кому: <сегмент из custdev — 1 строка>
Боль (их словами): «<дословная цитата из интервью>»
Что обещаем: <одно предложение, измеримый результат>
Как доказываем: <1–2 факта: цифры, кейс, скриншот>
CTA: <одно действие — записаться, оставить email, забронировать>

Структура:
1. Hero: H1 = боль их словами, sub = обещание, кнопка CTA
2. 3 буллета «как это работает»
3. Соц. доказательство (1 цитата + аватар)
4. FAQ из 4 вопросов, которые мне реально задавали в custdev
5. Финальный CTA

Стиль: чисто, без стоковых картинок. Tailwind. Одна страница, mobile-first.
После генерации — покажи мне список секций, жди ОК, потом давай код.`;
const L3Landing = () => {
  const isMobile = useIsMobile();
  if (isMobile) {
    return (
      <Stage className="relative">
        <div className="flex flex-col justify-center px-[16px] h-full">
          <Eyebrow mobile>Первая точка продажи</Eyebrow>
          <h2 className="font-display text-[18px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[6px]">
            Лендинг за <span className="text-[hsl(var(--slide-gold))]">30 минут</span> — без него Урок 4 некуда вести
          </h2>
          <p className="text-[8.5px] text-[hsl(var(--slide-text)/0.85)] leading-[1.45] mb-[6px]">
            Лендинг — первая точка, где идея становится продаваемой. Не сайт-визитка. Одна боль → одно обещание → одно действие.
          </p>
          <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.3)] rounded-[6px] px-[10px] py-[7px]">
            <p className="text-[7px] font-bold text-[hsl(var(--slide-gold))] uppercase tracking-[0.12em] mb-[3px]">Промпт для AI-конструктора</p>
            <pre className="text-[6.5px] text-[hsl(var(--slide-text))] leading-[1.4] whitespace-pre-wrap font-mono">{L3_LANDING_PROMPT}</pre>
          </div>
          <p className="text-[9px] text-[hsl(var(--slide-gold))] italic mt-[6px] leading-[1.4]">
            Цитаты из custdev → H1 и FAQ. Без custdev лендинг — это твой голос, не их.
          </p>
        </div>
        <FooterMobile />
      </Stage>
    );
  }
  return (
    <Stage className="relative">
      <div className="flex flex-col justify-center px-[140px] h-full max-w-[1800px]">
        <Eyebrow>Первая точка, где идея становится продаваемой</Eyebrow>
        <h2 className="font-display text-[56px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[16px] tracking-[-0.01em]">
          Лендинг за <span className="text-[hsl(var(--slide-gold))]">30 минут</span> — без него Уроку 4 некуда вести трафик
        </h2>
        <p className="text-[22px] text-[hsl(var(--slide-text)/0.88)] leading-[1.45] mb-[24px] max-w-[1600px]">
          Лендинг — это <b>не</b> сайт-визитка. Это контракт: <b>одна боль → одно обещание → одно действие</b>.
          Если не помещается на одном экране — не лендинг, а каталог.
        </p>
        <div className="grid grid-cols-[1fr_1.4fr] gap-[28px]">
          <div className="bg-[hsl(var(--slide-gold)/0.06)] border-l-[4px] border-[hsl(var(--slide-gold))] rounded-[12px] px-[24px] py-[20px]">
            <p className="text-[15px] font-bold text-[hsl(var(--slide-gold))] uppercase tracking-[0.18em] mb-[10px]">Что обязательно</p>
            <ul className="space-y-[10px] text-[18px] text-[hsl(var(--slide-text)/0.9)] leading-[1.5]">
              <li>→ H1 = <b>боль их словами</b> из custdev</li>
              <li>→ Подзаголовок = измеримое обещание</li>
              <li>→ Одна CTA. Одна. Не три.</li>
              <li>→ FAQ из реальных вопросов с интервью</li>
              <li>→ Mobile-first. 70% трафика — телефон.</li>
            </ul>
          </div>
          <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.3)] rounded-[12px] px-[24px] py-[18px]">
            <p className="text-[14px] font-bold text-[hsl(var(--slide-gold))] uppercase tracking-[0.18em] mb-[8px]">Промпт · вставь в Lovable / v0 / Cursor</p>
            <pre className="text-[13px] text-[hsl(var(--slide-text))] leading-[1.55] whitespace-pre-wrap font-mono">{L3_LANDING_PROMPT}</pre>
          </div>
        </div>
      </div>
      <Footer />
    </Stage>
  );
};

/* ========== Slide 12 — 5 ловушек разработки с AI ========== */
const L3_TRAPS = [
  { n: "01", t: "Vibe coding", body: "«Сделай красиво» вместо design doc. Получаешь 1000 строк, которые не понимаешь. Чинить дороже, чем переписать." },
  { n: "02", t: "Refactor hell", body: "Просишь поправить кнопку — AI «по дороге» переписывает 12 файлов. Без дисциплины «жди ОК на список файлов» это происходит каждый день." },
  { n: "03", t: "Нет ручного теста", body: "«Должно работать» ≠ работает. Запусти, кликни, проверь acceptance. AI не запускает твой код." },
  { n: "04", t: "Доверие без ревью", body: "Принимаешь diff не читая. Через неделю в проде баг, и ты не знаешь, в каком из 40 коммитов он появился." },
  { n: "05", t: "Фича вместо ценности", body: "AI с радостью построит что угодно. Если не сверяешься с custdev — строишь функционал, а не решение боли." },
];
const L3Traps = () => {
  const isMobile = useIsMobile();
  if (isMobile) {
    return (
      <Stage className="relative">
        <div className="flex flex-col justify-center px-[16px] h-full">
          <Eyebrow mobile>Чего не делать</Eyebrow>
          <h2 className="font-display text-[18px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[8px]">
            5 ловушек разработки <span className="text-[hsl(var(--slide-gold))]">с AI</span>
          </h2>
          <div className="space-y-[5px]">
            {L3_TRAPS.map((r) => (
              <div key={r.n} className="bg-[hsl(0_70%_55%/0.06)] border-l-2 border-[hsl(0_70%_55%)] rounded-[6px] px-[10px] py-[6px]">
                <p className="text-[9px] font-bold text-[hsl(var(--slide-text))]">
                  <span className="text-[hsl(0_70%_65%)]">{r.n}.</span> {r.t}
                </p>
                <p className="text-[8px] text-[hsl(var(--slide-text)/0.85)] leading-[1.4]">{r.body}</p>
              </div>
            ))}
          </div>
          <p className="text-[9px] text-[hsl(var(--slide-gold))] italic mt-[6px] leading-[1.4]">
            Каждая ловушка лечится одним из 5 шагов воркфлоу. Совпадение? Нет.
          </p>
        </div>
        <FooterMobile />
      </Stage>
    );
  }
  return (
    <Stage className="relative">
      <div className="flex flex-col justify-center px-[120px] h-full max-w-[1900px]">
        <Eyebrow>Чего точно не делать</Eyebrow>
        <h2 className="font-display text-[56px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[28px] tracking-[-0.01em]">
          5 ловушек разработки <span className="text-[hsl(var(--slide-gold))]">с AI</span>
        </h2>
        <div className="grid grid-cols-5 gap-[16px] mb-[24px]">
          {L3_TRAPS.map((r) => (
            <div key={r.n} className="bg-[hsl(0_70%_55%/0.06)] border-l-[4px] border-[hsl(0_70%_55%)] rounded-[12px] px-[20px] py-[20px]">
              <p className="text-[14px] font-bold text-[hsl(0_70%_65%)] uppercase tracking-[0.18em] mb-[8px]">{r.n}</p>
              <p className="text-[20px] font-bold text-[hsl(var(--slide-text))] mb-[8px] leading-[1.2]">{r.t}</p>
              <p className="text-[15px] text-[hsl(var(--slide-text)/0.88)] leading-[1.5]">{r.body}</p>
            </div>
          ))}
        </div>
        <p className="text-[22px] text-[hsl(var(--slide-gold))] italic leading-[1.45] max-w-[1700px]">
          Каждая ловушка лечится одним из 5 шагов воркфлоу. Совпадение? Нет — он именно так и собран.
        </p>
      </div>
      <Footer />
    </Stage>
  );
};

/* ========== Slide 13 — Homework + Closing (объединено) ========== */
const L3_HW = [
  { t: "Возьми ОДНУ фичу из MVP", body: "Самую маленькую, которая закрывает боль из custdev. Не три. Одну." },
  { t: "Напиши design doc", body: "По шаблону со слайда 7. 1 экран. Контракт + acceptance." },
  { t: "Прогони через 5 шагов воркфлоу", body: "Декомпозиция → doc → промпт → ревью diff → ручной тест. Без пропусков." },
  { t: "Собери лендинг за 30 минут", body: "По промпту со слайда 11. H1 = цитата из custdev. Одна CTA." },
  { t: "Покажи 3 юзерам и зафиксируй реакцию", body: "Не «как тебе?». А: «что ты сделал бы прямо сейчас на этой странице?»" },
];
const L3Closing = () => {
  const isMobile = useIsMobile();
  if (isMobile) {
    return (
      <Stage className="relative">
        <div className="flex flex-col justify-center px-[18px] h-full">
          <p className="text-[9px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[3px]">Домашнее задание · 7 дней</p>
          <h2 className="font-display text-[18px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[8px]">
            Собрать рабочий кусок продукта + лендинг
          </h2>
          <ol className="space-y-[5px] mb-[10px]">
            {L3_HW.map((s, i) => (
              <li key={i} className="text-[9px] text-[hsl(var(--slide-text)/0.9)] leading-[1.4]">
                <b className="text-[hsl(var(--slide-gold))]">{i + 1}.</b>{" "}
                <b className="text-[hsl(var(--slide-text))]">{s.t}.</b> {s.body}
              </li>
            ))}
          </ol>
          <div className="bg-[hsl(var(--slide-gold)/0.1)] border-l-2 border-[hsl(var(--slide-gold))] rounded-[6px] px-[10px] py-[8px]">
            <p className="text-[9px] italic font-semibold text-[hsl(var(--slide-gold))] leading-[1.4]">
              «AI убрал из уравнения время и команду. Не убрал — мышление, дисциплину и юзеров.»
            </p>
          </div>
          <p className="text-[9px] text-[hsl(var(--slide-text-muted))] mt-[6px] italic leading-[1.4]">
            В Уроке 4 — как привести на лендинг первых платящих юзеров. Без рекламного бюджета.
          </p>
        </div>
        <FooterMobile />
      </Stage>
    );
  }
  return (
    <Stage className="relative">
      <div className="flex flex-col justify-center px-[140px] h-full max-w-[1800px]">
        <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[14px]">Домашнее задание · 7 дней до Урока 4</p>
        <h2 className="font-display text-[54px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[28px] tracking-[-0.01em]">
          Собрать рабочий кусок продукта + лендинг
        </h2>
        <div className="grid grid-cols-2 gap-[40px]">
          <div>
            <p className="text-[15px] font-bold text-[hsl(var(--slide-gold))] uppercase tracking-[0.18em] mb-[14px]">5 шагов</p>
            <ol className="space-y-[12px]">
              {L3_HW.map((s, i) => (
                <li key={i} className="text-[18px] text-[hsl(var(--slide-text)/0.9)] leading-[1.45]">
                  <span className="text-[hsl(var(--slide-gold))] font-bold mr-2">{i + 1}.</span>
                  <b className="text-[hsl(var(--slide-text))]">{s.t}.</b> {s.body}
                </li>
              ))}
            </ol>
          </div>
          <div className="flex flex-col justify-center">
            <div className="bg-[hsl(var(--slide-gold)/0.08)] border-l-[4px] border-[hsl(var(--slide-gold))] rounded-[14px] px-[32px] py-[26px] mb-[20px]">
              <p className="text-[28px] italic font-semibold text-[hsl(var(--slide-gold))] leading-[1.35]">
                «AI убрал из уравнения время и команду. Не убрал — мышление, дисциплину и юзеров.»
              </p>
            </div>
            <p className="text-[22px] text-[hsl(var(--slide-text)/0.9)] leading-[1.5] mb-[12px]">
              На выходе у тебя: <b className="text-[hsl(var(--slide-gold))]">design doc + рабочая фича + лендинг + 3 живые реакции</b>.
            </p>
            <p className="text-[20px] text-[hsl(var(--slide-text-muted))] italic leading-[1.5]">
              В Уроке 4 — как привести на этот лендинг первых платящих юзеров. Без рекламного бюджета.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </Stage>
  );
};

// Lesson 3 — 13 slides (visual style aligned with Lessons 1–2)
export const slides = [
  L3Title,         // 1  Title
  L3Insight,       // 2  Главный инсайт (pull quote)
  L3Mirror,        // 3  Mirror question
  L3RunEverywhere, // 4  Контр-кейс RunEverywhere (до AI)
  L3MikeyCase,     // 5  Главный кейс Mikey (solo с AI)
  L3Workflow,      // 6  Agentic engineering workflow · 5 шагов
  L3DesignDoc,     // 7  Шаги 1–2: декомпозиция + design doc
  L3PromptSlide,   // 8  Шаг 3: промпт по design doc
  L3Review,        // 9  Шаги 4–5: ревью diff + тест
  L3TfcCta,        // 10 Mid-CTA · точка слома одиночки → TFC
  L3Landing,       // 11 Лендинг за 30 минут + промпт
  L3Traps,         // 12 5 ловушек разработки с AI
  L3Closing,       // 13 Homework + Closing
];