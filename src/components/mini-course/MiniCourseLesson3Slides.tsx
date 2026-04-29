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

/* ========== Slide 3 — Контр-кейс MetaMinder (до AI) ========== */
const L3_RUN_BEFORE = [
  { num: "20 человек", text: "команда: фронт, бэк, QA, дизайн, PM. Каждому — зарплата каждый месяц" },
  { num: "Месяцы", text: "на одну фичу: разработка, тестирование, ревью, релизы — всё руками" },
  { num: "Сотни $K", text: "сожжено на разработку продукта до того, как он стал зарабатывать" },
];
const L3_RUN_AFTER = [
  "Внедрили AI: вся команда инженеров работает через Cloud-агентов",
  "Заменили продакт-менеджера и дизайнера на AI-воркфлоу",
  "Построили QA-агентов — автотесты пишутся и гоняются без людей",
  "Сократили команду до 4 человек. Скорость — выросла, не упала",
  "Деливерим функционал за недели, а не за месяцы. Качество — то же или выше",
  "Команда воодушевлена. Клиенты счастливы. Так выглядит разработка с AI в 2026",
];
const L3RunEverywhere = () => {
  const isMobile = useIsMobile();
  if (isMobile) {
    return (
      <Stage className="relative">
        <div className="flex flex-col justify-center px-[18px] h-full">
          <Eyebrow mobile>Контр-кейс · до AI</Eyebrow>
          <h2 className="font-display text-[18px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[8px]">
            MetaMinder · как мы строили <span className="text-[hsl(var(--slide-gold))]">до</span> AI
          </h2>
          <div className="space-y-[6px] mb-[10px]">
            {L3_RUN_BEFORE.map((it) => (
              <div key={it.num} className="bg-[hsl(0_70%_55%/0.06)] border-l-2 border-[hsl(0_70%_55%)] rounded-[6px] px-[10px] py-[6px]">
                <span className="text-[12px] font-bold text-[hsl(0_70%_65%)] mr-[6px]">{it.num}</span>
                <span className="text-[9px] text-[hsl(var(--slide-text)/0.9)]">{it.text}</span>
              </div>
            ))}
          </div>
          <p className="text-[9px] font-bold text-[hsl(var(--slide-gold))] uppercase tracking-[0.12em] mb-[3px]">Что изменилось в 2026</p>
          <ul className="space-y-[3px] mb-[8px]">
            {L3_RUN_AFTER.map((t) => (
              <li key={t} className="text-[8px] text-[hsl(var(--slide-text)/0.9)] leading-[1.4]">→ {t}</li>
            ))}
          </ul>
          <p className="text-[9px] text-[hsl(var(--slide-gold))] italic leading-[1.4]">
            20 человек → 4. Месяцы → недели. То же качество. Так работает разработка с AI в 2026.
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
          MetaMinder · как мы строили <span className="text-[hsl(var(--slide-gold))]">до</span> AI
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
          <p className="text-[15px] font-bold text-[hsl(var(--slide-gold))] uppercase tracking-[0.18em] mb-[10px]">Что изменилось в 2026</p>
          <ul className="space-y-[6px]">
            {L3_RUN_AFTER.map((t) => (
              <li key={t} className="text-[18px] text-[hsl(var(--slide-text)/0.9)] leading-[1.45]">→ {t}</li>
            ))}
          </ul>
        </div>
        <p className="text-[22px] text-[hsl(var(--slide-gold))] italic mt-[20px] leading-[1.45] max-w-[1700px]">
          20 человек → 4. Месяцы → недели. То же качество. Команда воодушевлена, клиенты счастливы. Так выглядит разработка с AI в 2026.
        </p>
      </div>
      <Footer />
    </Stage>
  );
};

/* ========== Slide 4 — Главный кейс: Mikey solo с AI ========== */
const L3_MIKEY = [
  { num: "1 человек", text: "я один. Без команды, без сооснователя, без скиллов разработчика" },
  { num: "3 месяца", text: "от пустого экрана до сложного продукта со своим движком матчинга" },
  { num: "≤ $200/мес", text: "на все AI-инструменты. Никаких зарплат, серверов, подрядчиков" },
];
const L3_MIKEY_HOW = [
  "Lovable: собрал черновой фронтенд и дизайн продукта за пару дней",
  "Понял, что Lovable слабо тянет сложный бэкенд — перенёс проект в Claude",
  "В Claude три месяца писал движок матчинга, алгоритмы и AI-функционал",
  "Построил своих AI-агентов и собственный workflow вокруг них",
  "Продукт работает в проде. Уже есть первые живые пользователи",
];
const L3MikeyCase = () => {
  const isMobile = useIsMobile();
  if (isMobile) {
    return (
      <Stage className="relative">
        <div className="flex flex-col justify-center px-[18px] h-full">
          <Eyebrow mobile>Главный кейс · solo с AI</Eyebrow>
          <h2 className="font-display text-[18px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[8px]">
            Mikey · сложный продукт solo за <span className="text-[hsl(var(--slide-gold))]">3 месяца</span> · я не разработчик
          </h2>
          <div className="grid grid-cols-3 gap-[5px] mb-[10px]">
            {L3_MIKEY.map((it) => (
              <div key={it.num} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.3)] rounded-[6px] px-[6px] py-[6px]">
                <div className="text-[12px] font-bold text-[hsl(var(--slide-gold))] leading-[1.05]">{it.num}</div>
                <div className="text-[7.5px] text-[hsl(var(--slide-text)/0.9)] leading-[1.35] mt-[2px]">{it.text}</div>
              </div>
            ))}
          </div>
          <p className="text-[9px] font-bold text-[hsl(var(--slide-gold))] uppercase tracking-[0.12em] mb-[3px]">Как это работало на практике</p>
          <ul className="space-y-[3px] mb-[8px]">
            {L3_MIKEY_HOW.map((t) => (
              <li key={t} className="text-[8px] text-[hsl(var(--slide-text)/0.9)] leading-[1.4]">→ {t}</li>
            ))}
          </ul>
          <p className="text-[9px] text-[hsl(var(--slide-gold))] italic leading-[1.4]">
            Важно: я не разработчик. Я ведущий. AI — исполнитель.
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
          Mikey · сложный продукт solo за <span className="text-[hsl(var(--slide-gold))]">3 месяца</span>. И я не разработчик.
        </h2>
        <div className="grid grid-cols-3 gap-[24px] mb-[32px] max-w-[1700px]">
          {L3_MIKEY.map((it) => (
            <div key={it.num} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.3)] rounded-[14px] px-[28px] py-[22px]">
              <div className="font-display text-[40px] font-bold text-[hsl(var(--slide-gold))] leading-[1.05] mb-[10px]">{it.num}</div>
              <div className="text-[19px] text-[hsl(var(--slide-text)/0.9)] leading-[1.45]">{it.text}</div>
            </div>
          ))}
        </div>
        <div className="bg-[hsl(var(--slide-gold)/0.06)] border-l-[4px] border-[hsl(var(--slide-gold))] rounded-[14px] px-[32px] py-[22px] max-w-[1700px]">
          <p className="text-[15px] font-bold text-[hsl(var(--slide-gold))] uppercase tracking-[0.18em] mb-[10px]">Как это работало на практике</p>
          <ul className="space-y-[6px]">
            {L3_MIKEY_HOW.map((t) => (
              <li key={t} className="text-[19px] text-[hsl(var(--slide-text)/0.9)] leading-[1.45]">→ {t}</li>
            ))}
          </ul>
        </div>
        <p className="text-[22px] text-[hsl(var(--slide-gold))] italic mt-[20px] leading-[1.45] max-w-[1700px]">
          Я не разработчик. Я не писал код руками. Но <b className="not-italic">я вёл</b> — декомпозировал, ревьюил, тестировал. AI делал остальное.
        </p>
      </div>
      <Footer />
    </Stage>
  );
};

/* ========== Slide 5 — Мой рабочий стек: Lovable + Claude + MCP ========== */
const L3_STACK = [
  {
    n: "01",
    name: "Lovable",
    tag: "ФРОНТЕНД · ДИЗАЙН · ПРОТОТИПЫ",
    body: "Сюда иду первым делом. Лучше всех отдаёт дизайн и прорабатывает элементы. Простой инструмент — все прототипы, лендинги и UI-куски делаю здесь.",
  },
  {
    n: "02",
    name: "Claude Code",
    tag: "ПОЛНОЦЕННЫЙ ПРОДУКТ · БЭКЕНД · ИНФРА",
    body: "Когда нужна работающая система — подключаю Claude. Накручены десятки скиллов и воркфлоу. Закрывает фронт, бэк, рефакторинг, оптимизацию и интеграции.",
  },
  {
    n: "03",
    name: "MCP",
    tag: "ПРЯМОЕ ПОДКЛЮЧЕНИЕ К СЕРВИСАМ",
    body: "Вместо ручной настройки — Claude сам подключается к Mixpanel, Stripe, Supabase, Figma, Gmail и настраивает всё под задачу.",
  },
];
const L3Stack = () => {
  const isMobile = useIsMobile();
  if (isMobile) {
    return (
      <Stage className="relative">
        <div className="flex flex-col justify-center px-[18px] h-full">
          <Eyebrow mobile>Мой рабочий стек · на примере Mikey</Eyebrow>
          <h2 className="font-display text-[17px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[8px]">
            За 4 месяца от идеи до продукта в рынке — связка из <span className="text-[hsl(var(--slide-gold))]">трёх инструментов</span>.
          </h2>
          <p className="text-[9px] text-[hsl(var(--slide-text)/0.85)] leading-[1.45] mb-[8px]">
            Начал в Lovable — красиво, но довести до ума не получалось. Перенёс в Claude Code — серьёзная работа возможна только в профессиональном инструменте. Визуал — в Lovable, систему — в Claude.
          </p>
          <div className="space-y-[5px]">
            {L3_STACK.map((s) => (
              <div key={s.n} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.3)] rounded-[6px] px-[10px] py-[6px]">
                <p className="text-[9px] font-bold text-[hsl(var(--slide-text))]">
                  <span className="text-[hsl(var(--slide-gold))]">{s.n}.</span> {s.name}
                </p>
                <p className="text-[7px] uppercase tracking-[0.1em] text-[hsl(var(--slide-gold))] mb-[2px]">{s.tag}</p>
                <p className="text-[8px] text-[hsl(var(--slide-text)/0.85)] leading-[1.4]">{s.body}</p>
              </div>
            ))}
          </div>
          <p className="text-[9px] text-[hsl(var(--slide-gold))] italic mt-[8px] leading-[1.4]">
            Связка Lovable + Claude Code + MCP — Mikey уже в рынке, с реальными пользователями.
          </p>
        </div>
        <FooterMobile />
      </Stage>
    );
  }
  return (
    <Stage className="relative">
      <div className="flex flex-col justify-center px-[140px] h-full max-w-[1800px]">
        <Eyebrow>Мой рабочий стек · на примере Mikey</Eyebrow>
        <h2 className="font-display text-[54px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[18px] tracking-[-0.01em]">
          За 4 месяца от идеи до продукта в рынке — связка из <span className="text-[hsl(var(--slide-gold))]">трёх инструментов</span>.
        </h2>
        <p className="text-[22px] text-[hsl(var(--slide-text)/0.88)] leading-[1.45] mb-[28px] max-w-[1600px]">
          Я начал Mikey в Lovable. Казалось — космос, всё получается, выглядит красиво. Но довести до ума технически не получалось. Перенёс в Claude Code — и понял: серьёзная работа над сложным продуктом возможна только в профессиональном инструменте. С тех пор визуал делаю в Lovable, всю остальную систему — в Claude.
        </p>
        <div className="grid grid-cols-3 gap-[24px] mb-[20px] max-w-[1700px]">
          {L3_STACK.map((s) => (
            <div key={s.n} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.3)] rounded-[14px] px-[28px] py-[24px]">
              <p className="text-[14px] font-bold text-[hsl(var(--slide-gold))] uppercase tracking-[0.18em] mb-[10px]">{s.n}</p>
              <p className="font-display text-[28px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[6px]">{s.name}</p>
              <p className="text-[12px] uppercase tracking-[0.14em] text-[hsl(var(--slide-gold))] mb-[10px]">{s.tag}</p>
              <p className="text-[17px] text-[hsl(var(--slide-text)/0.88)] leading-[1.5]">{s.body}</p>
            </div>
          ))}
        </div>
        <p className="text-[22px] text-[hsl(var(--slide-gold))] italic leading-[1.45] max-w-[1700px]">
          Связка <b className="not-italic">Lovable + Claude Code + MCP</b> — Mikey уже в рынке, с реальными пользователями.
        </p>
      </div>
      <Footer />
    </Stage>
  );
};

/* ========== Slide 6 — Кейс: MCP сэкономил €3 000 на аналитике ========== */
const L3_MCP_BEFORE = [
  "Брифинг и согласование событий",
  "Подрядчик настраивает Mixpanel",
  "Жду дашборды, согласую правки",
  "Каждый новый ивент — снова через него",
];
const L3_MCP_AFTER = [
  "Claude сам сформировал список ивентов",
  "Через MCP настроил их в Mixpanel",
  "Собрал воронки и визуализации",
  "Дашборды для продуктовых решений готовы",
];
const L3McpAnalytics = () => {
  const isMobile = useIsMobile();
  if (isMobile) {
    return (
      <Stage className="relative">
        <div className="flex flex-col justify-center px-[18px] h-full">
          <Eyebrow mobile>Кейс · Mikey × Claude × MCP × Mixpanel</Eyebrow>
          <h2 className="font-display text-[17px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[6px]">
            Как MCP сэкономил мне <span className="text-[hsl(var(--slide-gold))]">€3 000</span> на продуктовой аналитике.
          </h2>
          <p className="text-[8.5px] text-[hsl(var(--slide-text)/0.85)] leading-[1.45] mb-[8px]">
            Раньше нанимал спеца за €3 000 под ключ. В этот раз отдал задачу Claude через MCP.
          </p>
          <div className="grid grid-cols-2 gap-[6px] mb-[8px]">
            <div className="bg-[hsl(0_70%_55%/0.06)] border-l-2 border-[hsl(0_70%_55%)] rounded-[6px] px-[8px] py-[6px]">
              <p className="text-[8px] font-bold text-[hsl(0_70%_65%)] uppercase tracking-[0.1em] mb-[2px]">Раньше · аналитик</p>
              <p className="text-[10px] font-bold text-[hsl(var(--slide-text))] mb-[4px]">€3 000 · 2–3 недели</p>
              <ul className="space-y-[2px]">
                {L3_MCP_BEFORE.map((t) => (
                  <li key={t} className="text-[7.5px] text-[hsl(var(--slide-text)/0.85)] leading-[1.35]">→ {t}</li>
                ))}
              </ul>
            </div>
            <div className="bg-[hsl(var(--slide-gold)/0.08)] border-l-2 border-[hsl(var(--slide-gold))] rounded-[6px] px-[8px] py-[6px]">
              <p className="text-[8px] font-bold text-[hsl(var(--slide-gold))] uppercase tracking-[0.1em] mb-[2px]">Сейчас · Claude + MCP</p>
              <p className="text-[10px] font-bold text-[hsl(var(--slide-gold))] mb-[4px]">€0 · несколько часов</p>
              <ul className="space-y-[2px]">
                {L3_MCP_AFTER.map((t) => (
                  <li key={t} className="text-[7.5px] text-[hsl(var(--slide-text)/0.85)] leading-[1.35]">✓ {t}</li>
                ))}
              </ul>
            </div>
          </div>
          <p className="text-[9px] text-[hsl(var(--slide-gold))] italic leading-[1.4]">
            От «мне нужна аналитика» до полноценного трекинга и графиков — за один вечер. Без подрядчика, без ожидания.
          </p>
        </div>
        <FooterMobile />
      </Stage>
    );
  }
  return (
    <Stage className="relative">
      <div className="flex flex-col justify-center px-[140px] h-full max-w-[1800px]">
        <Eyebrow>Кейс · Mikey × Claude × MCP × Mixpanel</Eyebrow>
        <h2 className="font-display text-[54px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[18px] tracking-[-0.01em]">
          Как MCP сэкономил мне <span className="text-[hsl(var(--slide-gold))]">€3 000</span> на продуктовой аналитике.
        </h2>
        <p className="text-[22px] text-[hsl(var(--slide-text)/0.88)] leading-[1.45] mb-[28px] max-w-[1600px]">
          В Mikey мне нужна была полноценная продуктовая аналитика. Я не аналитик — понимаю как это работает, но сам никогда не настраивал. Раньше нанимал спеца за €3 000 под ключ. В этот раз отдал задачу Claude через MCP.
        </p>
        <div className="grid grid-cols-2 gap-[28px] mb-[24px] max-w-[1700px]">
          <div className="bg-[hsl(0_70%_55%/0.06)] border-l-[4px] border-[hsl(0_70%_55%)] rounded-[14px] px-[28px] py-[22px]">
            <p className="text-[14px] font-bold text-[hsl(0_70%_65%)] uppercase tracking-[0.18em] mb-[10px]">Раньше · с аналитиком</p>
            <p className="font-display text-[34px] font-bold text-[hsl(0_70%_65%)] leading-[1.05] mb-[14px]">€3 000 · 2–3 недели</p>
            <ul className="space-y-[8px]">
              {L3_MCP_BEFORE.map((t) => (
                <li key={t} className="text-[18px] text-[hsl(var(--slide-text)/0.88)] leading-[1.45]">→ {t}</li>
              ))}
            </ul>
          </div>
          <div className="bg-[hsl(var(--slide-gold)/0.08)] border-l-[4px] border-[hsl(var(--slide-gold))] rounded-[14px] px-[28px] py-[22px]">
            <p className="text-[14px] font-bold text-[hsl(var(--slide-gold))] uppercase tracking-[0.18em] mb-[10px]">Сейчас · Claude + MCP</p>
            <p className="font-display text-[34px] font-bold text-[hsl(var(--slide-gold))] leading-[1.05] mb-[14px]">€0 · несколько часов</p>
            <ul className="space-y-[8px]">
              {L3_MCP_AFTER.map((t) => (
                <li key={t} className="text-[18px] text-[hsl(var(--slide-text)/0.88)] leading-[1.45]">✓ {t}</li>
              ))}
            </ul>
          </div>
        </div>
        <p className="text-[22px] text-[hsl(var(--slide-gold))] italic leading-[1.45] max-w-[1700px]">
          От «мне нужна аналитика» до полноценного трекинга и графиков — <b className="not-italic">за один вечер</b>. Теперь принимаю взвешенные продуктовые решения — без подрядчика и без ожидания.
        </p>
      </div>
      <Footer />
    </Stage>
  );
};

/* ========== Slide 7 — Best Practices · Claude Code · 1/2 ========== */
const L3_BP1 = [
  { n: "01", t: "Документация и тесты с первого промпта", body: "Без них проект не масштабируется и не передаётся разработчику. Закладывай сразу." },
  { n: "02", t: "Файлы до 500 строк", body: "Большие файлы = баги и конфликты. Claude сам разобьёт — качество кода вырастет в разы." },
  { n: "03", t: "Сложная задача — топовая модель", body: "Claude Opus 4.7 для архитектуры и сложной логики. На простом — экономь, на важном — нет." },
  { n: "04", t: "Production-ready, а не MVP", body: "Слово «прототип» = поверхностный код. Проси сразу production-quality." },
  { n: "05", t: "Адаптивность с самого начала", body: "Все устройства, ОС, браузеры. Заложено в архитектуре — не переделываешь потом." },
  { n: "06", t: "CLAUDE.md — правила проекта", body: "Стек, конвенции, запреты. Один раз написал — Claude следует им всегда." },
];
const L3BestPractices1 = () => {
  const isMobile = useIsMobile();
  if (isMobile) {
    return (
      <Stage className="relative">
        <div className="flex flex-col justify-center px-[16px] h-full">
          <Eyebrow mobile>Best Practices · Claude Code · 1/2</Eyebrow>
          <h2 className="font-display text-[17px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[6px]">
            Как пишут промпты в NVIDIA, Google — <span className="text-[hsl(var(--slide-gold))]">и как пишу я</span>
          </h2>
          <p className="text-[8.5px] text-[hsl(var(--slide-gold))] uppercase tracking-[0.1em] mb-[6px]">Часть 1 · Качество кода и архитектура</p>
          <div className="space-y-[4px]">
            {L3_BP1.map((s) => (
              <div key={s.n} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.22)] rounded-[6px] px-[8px] py-[5px]">
                <p className="text-[9px] font-bold text-[hsl(var(--slide-text))]">
                  <span className="text-[hsl(var(--slide-gold))]">{s.n}.</span> {s.t}
                </p>
                <p className="text-[7.5px] text-[hsl(var(--slide-text)/0.85)] leading-[1.4]">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
        <FooterMobile />
      </Stage>
    );
  }
  return (
    <Stage className="relative">
      <div className="flex flex-col justify-center px-[120px] h-full max-w-[1900px]">
        <Eyebrow>Best Practices · Claude Code · 1/2</Eyebrow>
        <h2 className="font-display text-[52px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[10px] tracking-[-0.01em]">
          Как пишут промпты в NVIDIA, Google — <span className="text-[hsl(var(--slide-gold))]">и как пишу я</span>
        </h2>
        <p className="text-[20px] uppercase tracking-[0.18em] text-[hsl(var(--slide-gold))] mb-[28px]">Часть 1 · Качество кода и архитектура</p>
        <div className="grid grid-cols-3 gap-[20px] max-w-[1800px]">
          {L3_BP1.map((s) => (
            <div key={s.n} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.3)] rounded-[12px] px-[22px] py-[20px]">
              <p className="text-[14px] font-bold text-[hsl(var(--slide-gold))] uppercase tracking-[0.18em] mb-[10px]">{s.n}</p>
              <p className="text-[20px] font-bold text-[hsl(var(--slide-text))] leading-[1.2] mb-[8px]">{s.t}</p>
              <p className="text-[15px] text-[hsl(var(--slide-text)/0.88)] leading-[1.5]">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </Stage>
  );
};

/* ========== Slide 8 — Best Practices · Claude Code · 2/2 ========== */
const L3_BP2 = [
  { n: "07", t: "Юнит-тесты под каждую фичу", body: "Без тестов AI ломает старое, делая новое. С тестами — качество держится месяцами." },
  { n: "08", t: "Одна задача — один промпт", body: "Не пихай 5 фич в один запрос. Атомарность = контроль качества и контекста." },
  { n: "09", t: "Контекст решает всё", body: "Давай примеры, ТЗ, ссылки на код. Не знаешь как — обсуди с Claude, пока не сложится картина." },
  { n: "10", t: "Сначала план — потом код", body: "Проси Claude план, читай, правь. Реализация по согласованному плану на порядок чище." },
  { n: "11", t: "Второе мнение от другой модели", body: "План от Claude → отдай Codex или Antigravity. Альтернативная модель ловит уязвимости и логические дыры." },
];
const L3BestPractices2 = () => {
  const isMobile = useIsMobile();
  if (isMobile) {
    return (
      <Stage className="relative">
        <div className="flex flex-col justify-center px-[16px] h-full">
          <Eyebrow mobile>Best Practices · Claude Code · 2/2</Eyebrow>
          <h2 className="font-display text-[17px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[6px]">
            Workflow и <span className="text-[hsl(var(--slide-gold))]">контроль качества</span>
          </h2>
          <p className="text-[8.5px] text-[hsl(var(--slide-gold))] uppercase tracking-[0.1em] mb-[6px]">Часть 2 · Как давать задачи, чтобы AI выдавал результат</p>
          <div className="space-y-[4px] mb-[6px]">
            {L3_BP2.map((s) => (
              <div key={s.n} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.22)] rounded-[6px] px-[8px] py-[5px]">
                <p className="text-[9px] font-bold text-[hsl(var(--slide-text))]">
                  <span className="text-[hsl(var(--slide-gold))]">{s.n}.</span> {s.t}
                </p>
                <p className="text-[7.5px] text-[hsl(var(--slide-text)/0.85)] leading-[1.4]">{s.body}</p>
              </div>
            ))}
          </div>
          <p className="text-[9px] text-[hsl(var(--slide-gold))] italic leading-[1.4]">
            Эти 11 правил отделяют vibe-coding от инженерии с AI. Первое — забавно. Второе — выводит продукт в рынок.
          </p>
        </div>
        <FooterMobile />
      </Stage>
    );
  }
  return (
    <Stage className="relative">
      <div className="flex flex-col justify-center px-[120px] h-full max-w-[1900px]">
        <Eyebrow>Best Practices · Claude Code · 2/2</Eyebrow>
        <h2 className="font-display text-[52px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[10px] tracking-[-0.01em]">
          Workflow и <span className="text-[hsl(var(--slide-gold))]">контроль качества</span>
        </h2>
        <p className="text-[20px] uppercase tracking-[0.18em] text-[hsl(var(--slide-gold))] mb-[24px]">Часть 2 · Как давать задачи, чтобы AI выдавал результат</p>
        <div className="grid grid-cols-5 gap-[16px] mb-[20px] max-w-[1800px]">
          {L3_BP2.map((s) => (
            <div key={s.n} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.3)] rounded-[12px] px-[18px] py-[18px]">
              <p className="text-[14px] font-bold text-[hsl(var(--slide-gold))] uppercase tracking-[0.18em] mb-[8px]">{s.n}</p>
              <p className="text-[19px] font-bold text-[hsl(var(--slide-text))] leading-[1.2] mb-[8px]">{s.t}</p>
              <p className="text-[14px] text-[hsl(var(--slide-text)/0.88)] leading-[1.5]">{s.body}</p>
            </div>
          ))}
        </div>
        <p className="text-[22px] text-[hsl(var(--slide-gold))] italic leading-[1.45] max-w-[1700px]">
          Эти 11 правил отделяют <code className="text-[hsl(var(--slide-text))] not-italic">vibe-coding</code> от инженерии с AI. Первое — забавно. Второе — выводит продукт в рынок.
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
  L3RunEverywhere, // 3  Контр-кейс RunEverywhere (до AI)
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