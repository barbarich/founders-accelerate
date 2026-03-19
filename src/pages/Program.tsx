import { ArrowLeft } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { useState } from "react";

type Week = {
  number: number;
  title: string;
  teach: string[];
  together: string[];
  homework: string[];
};

type MonthData = {
  month: number;
  label: string;
  subtitle: string;
  forWhom: string;
  result: string;
  weeks: Week[];
  outcomes: string[];
};

const months: MonthData[] = [
  {
    month: 1,
    label: "Валидация и фундамент",
    subtitle: "От сырой идеи к готовности запуска",
    forWhom:
      "Есть идея, базовый прототип, общее понимание рынка. Нет чёткого позиционирования, нет клиентов, нет уверенности что всё правильно.",
    result:
      "Понятный продукт, понятный клиент, доработанный MVP, лендинг, первые контакты с реальными людьми.",
    weeks: [
      {
        number: 1,
        title: "Кто ваш клиент и зачем ему ваш продукт",
        teach: [
          "Как определить кто заплатит за продукт (а не кому он «может быть полезен»)",
          "Как провести customer-интервью за 15 минут — 5 правильных вопросов",
          "Как использовать AI для мгновенного анализа аудитории и конкурентов (промпты, демо на экране)",
        ],
        together: [
          "Каждый питчит свой продукт — группа и ментор дают обратную связь",
          "Прогоняем AI-анализ аудитории для каждого проекта",
          "Формулируем: кто клиент, какая боль, почему текущие решения не работают",
          "Разбор каждого участника: 5 минут на проект — что вижу, где слабое место, что проверить первым",
        ],
        homework: [
          "5 интервью с потенциальными клиентами (шаблон вопросов готов с встречи)",
          "AI-анализ 5 конкурентов по промптам с встречи",
          '"[продукт] помогает [кому] решить [что]" — сформулировать одно предложение',
        ],
      },
      {
        number: 2,
        title: "Позиционирование, цена и что должен делать ваш MVP",
        teach: [
          "Как упаковать продукт: позиционирование в одно предложение, которое продаёт",
          "Как выбрать модель монетизации и определить цену (с примерами из моих продуктов)",
          "Как отрезать лишнее в MVP: что оставить, что убрать, как не строить полгода",
        ],
        together: [
          "Каждый делится результатами интервью — что узнали, что изменилось",
          "Формулируем позиционирование для каждого продукта",
          'Упражнение "убей фичи": 10 → 3 → 1 главная',
          "Определяем цену и модель монетизации",
          "Разбор каждого участника: 5 минут — позиционирование, цена, MVP-скоуп",
        ],
        homework: [
          "Финальный список фич MVP: что делает, что НЕ делает",
          "Показать прототип 3 людям из целевой аудитории, записать реакцию",
          "Подготовить список доработок прототипа (что починить, что добавить, что убрать)",
        ],
      },
      {
        number: 3,
        title: "Доработка продукта и создание лендинга",
        teach: [
          "Как дорабатывать продукт с помощью AI — живое демо: Claude Code, Cursor, Lovable",
          "Как построить лендинг за 30 минут в Lovable (строю на экране от промпта до готовой страницы)",
          "Как подключить базовые вещи без разработчика: авторизация, оплата, аналитика",
        ],
        together: [
          "Каждый показывает прогресс: что доработал, что говорят первые люди",
          "У кого нет лендинга — начинаем строить в Lovable прямо на встрече",
          "Составляем роадмап на 2 недели: что доделать к демо-дню",
          "Разбор каждого участника: 5 минут — демо продукта, что блокирует, решения",
        ],
        homework: [
          'Довести MVP до состояния "можно показать живому человеку"',
          "Готовый лендинг",
          "Показать продукт ещё 5 людям, собрать обратную связь",
          "Подготовить 2-минутное демо для демо-дня",
        ],
      },
      {
        number: 4,
        title: "Демо-день и подготовка к запуску",
        teach: [
          "Как найти первых клиентов без бюджета: cold outreach, комьюнити, контент",
          "Как написать сообщение которое не игнорируют (шаблоны, примеры, промпты для AI)",
          "Мой кейс The Founders Circle: один пост → 170 человек. Разбираем почему сработало",
        ],
        together: [
          "Демо-день: каждый показывает продукт и лендинг за 2 минуты",
          "Группа даёт обратную связь как потенциальные клиенты",
          "Пишем первое outreach-сообщение прямо на встрече — критикуем, дорабатываем",
          "Составляем план выхода на рынок: каналы, действия, цифры",
          "Разбор каждого участника: 5 минут — готовность к запуску, план на месяц 2",
        ],
        homework: [
          "Отправить 20 outreach-сообщений",
          "Опубликовать первый пост о продукте",
          "Показать продукт 10 новым людям",
          "Список 50 мест где живёт аудитория",
        ],
      },
    ],
    outcomes: [
      "Чёткое позиционирование и понимание клиента",
      "Доработанный MVP, готовый к показу",
      "Лендинг",
      "Модель монетизации и цена",
      "Шаблон outreach-сообщения",
      "План выхода на рынок",
      "Набор AI-промптов для исследования, разработки и маркетинга",
      "Обратная связь от ментора и группы каждую неделю",
    ],
  },
  {
    month: 2,
    label: "Построение продукта",
    subtitle: "От прототипа к продукту, который хочется использовать",
    forWhom:
      "Есть валидированная идея, первый прототип, лендинг. Продукт ещё сырой, нет упаковки, нет контента, пользователи не возвращаются.",
    result:
      "Рабочий MVP с отполированным UX, лендинг который конвертит, личный бренд фаундера, первая аудитория и контент-система.",
    weeks: [
      {
        number: 5,
        title: "Строим MVP с AI — из идеи в рабочий продукт за вечер",
        teach: [
          "No-code и AI-билдеры (Lovable, Cursor, Bolt, v0) — что выбрать и когда",
          'Принцип "одна фича — одна проблема": как не утонуть в фичах',
          "Живой разбор: строю мини-продукт с нуля за 20 минут на глазах у группы",
        ],
        together: [
          "Каждый определяет core-сценарий и начинает строить MVP прямо на встрече",
          "Менторская помощь в реальном времени — разбираем технические блокеры",
          "Разбор каждого участника: 5 минут — архитектура, выбор инструмента, план на неделю",
        ],
        homework: [
          "Довести MVP до рабочего состояния (1 ключевой сценарий работает от начала до конца)",
          "Протестировать на 3 людях",
          "Записать на видео их реакцию",
        ],
      },
      {
        number: 6,
        title: "Продукт, который не отпускает — UX, onboarding, первые 60 секунд",
        teach: [
          "Почему 70% пользователей уходят в первую минуту и как это исправить",
          "Анатомия идеального onboarding (разбор Notion, Canva, Duolingo)",
          '"Aha moment" — как привести пользователя к ценности за минимум шагов',
          "AI-инструменты для дизайна (Figma AI, Midjourney, Ideogram)",
        ],
        together: [
          "Проходим продукт каждого участника как новый пользователь — фиксируем где теряемся, что непонятно, что бесит",
          "Переделываем onboarding прямо на встрече",
          "Разбор каждого участника: 5 минут — первое впечатление, слабые точки, план доработки",
        ],
        homework: [
          "Переработать первые 3 экрана/шага",
          'Провести 5 тестов "60 секунд" (даёшь продукт незнакомому человеку, молча наблюдаешь)',
          "Записать что пошло не так и что исправить",
        ],
      },
      {
        number: 7,
        title: "Упаковка — лендинг, визуал и текст, которые продают",
        teach: [
          "Анатомия лендинга, который конвертит: заголовок, оффер, соцдоказательства, CTA",
          "Копирайтинг для стартапов — формулы (PAS, AIDA, BAB) и как писать с AI",
          "Визуальная айдентика без дизайнера (Canva, Brandmark, AI-генерация)",
        ],
        together: [
          "Разбираем лендинги участников — что работает, что нет",
          "Переписываем заголовки и офферы вместе",
          "Создаём визуальный стиль для каждого проекта",
          "Разбор каждого участника: 5 минут — лендинг, оффер, визуал",
        ],
        homework: [
          "Финализировать лендинг (готовый к трафику)",
          "Создать набор визуалов (лого, цвета, 5 баннеров)",
          "Написать 3 варианта оффера и протестировать на 10 людях — какой заходит лучше",
        ],
      },
      {
        number: 8,
        title: "Контент и личный бренд — как продавать до запуска",
        teach: [
          "Зачем фаундеру личный бренд и как он заменяет рекламный бюджет",
          "Building in public: как рассказывать историю создания продукта",
          "Контент-система: 1 идея → 5 форматов",
          "AI для контента (ChatGPT, Opus Clip, CapCut, HeyGen, ElevenLabs)",
        ],
        together: [
          'Каждый пишет "историю фаундера"',
          "Создаём контент-план на 2 недели",
          "Снимаем первое видео о продукте прямо на встрече",
          "Разбор каждого участника: 5 минут — контент-стратегия, каналы, план",
        ],
        homework: [
          "Опубликовать 5 единиц контента (посты + видео)",
          "Набрать первых 50 подписчиков в одном канале",
          "Собрать обратную связь — что зашло, что нет",
        ],
      },
    ],
    outcomes: [
      "Рабочий MVP, который решает одну ключевую проблему",
      "Отполированный onboarding — пользователь понимает продукт за 60 секунд",
      "Лендинг, готовый к трафику, с конвертящим оффером",
      "Визуальная айдентика: лого, цвета, баннеры",
      "Личный бренд фаундера: история, контент-план, первые подписчики",
      "Контент-система и AI-инструменты для создания контента",
      "Первая аудитория в выбранном канале",
      "Обратная связь от ментора и группы каждую неделю",
    ],
  },
  {
    month: 3,
    label: "Запуск, продажи и рост",
    subtitle: "От готового продукта к первым платящим пользователям",
    forWhom:
      "Есть рабочий MVP, лендинг, контент. Нет системного привлечения пользователей, нет продаж, нет понимания как масштабировать.",
    result:
      "Первые платящие пользователи, работающие каналы привлечения, навык продаж, pitch deck и план роста на 90 дней.",
    weeks: [
      {
        number: 9,
        title: "Маркетинг с нуля — каналы и воронки",
        teach: [
          "Где искать первых пользователей (Product Hunt, Reddit, Telegram, LinkedIn, нишевые сообщества)",
          "Email-маркетинг и nurturing (Mailchimp, Resend)",
          "Партнёрства и коллаборации как бесплатный канал роста",
          "AI для персонализации outreach (Clay, Instantly)",
        ],
        together: [
          "Составляем карту каналов для каждого проекта",
          "Пишем outreach-сообщения — критикуем, дорабатываем",
          "Планируем запуск: даты, каналы, последовательность",
          "Разбор каждого участника: 5 минут — маркетинг-план, каналы, первые шаги",
        ],
        homework: [
          "Запустить 2 канала привлечения",
          "Отправить 30 персонализированных сообщений",
          "Собрать первые 20 лидов",
        ],
      },
      {
        number: 10,
        title: "Продажи для фаундеров — от демо до оплаты",
        teach: [
          "Холодные письма и DM, которые открывают — шаблоны и примеры",
          "Структура продающего демо-звонка (15 минут)",
          'Работа с возражениями: "дорого", "не сейчас", "а у конкурентов..."',
          "Ценообразование и как не бояться просить деньги",
        ],
        together: [
          'Ролевые игры "продавец-покупатель" на реальных продуктах участников',
          "Разбор реальных переписок — что сработало, что нет",
          "Отрабатываем возражения — каждый уходит с готовым скриптом",
          "Разбор каждого участника: 5 минут — воронка, конверсии, блокеры",
        ],
        homework: [
          "Провести 5-10 демо-звонков",
          "Закрыть первую продажу (или получить первого платящего пользователя)",
          "Собрать 3 отзыва / testimonials",
        ],
      },
      {
        number: 11,
        title: "Платный трафик, growth hacking и автоматизация",
        teach: [
          "Meta Ads, Google Ads — первая рекламная кампания на минимальном бюджете ($50-100)",
          "Growth-механики: реферальные программы, вирусные петли",
          "Автоматизация рутины (Zapier, Make, n8n)",
          "AI для рекламных креативов (AdCreative.ai, Canva AI)",
        ],
        together: [
          "Создание рекламных креативов для каждого проекта",
          "Запуск тестовой кампании прямо на встрече",
          "Строим 1-2 автоматизации для каждого проекта",
          "Разбор каждого участника: 5 минут — метрики, результаты, оптимизация",
        ],
        homework: [
          "Запустить 2-3 рекламные кампании",
          "Протестировать 1 growth-механику (реферальная программа или вирусная петля)",
          "Автоматизировать 2 рутинных процесса",
        ],
      },
      {
        number: 12,
        title: "Финальный демо-день и стратегия на 90 дней",
        teach: [
          "Pitch deck: структура и storytelling — как рассказать историю за 5 минут",
          "Нужны ли инвестиции и когда — bootstrapping vs fundraising",
          "OKR и квартальное планирование для стартапа",
          "Ресурсы и сообщества для фаундеров после акселератора",
        ],
        together: [
          "Финальные питчи (5 мин) перед приглашёнными экспертами и инвесторами",
          "Обратная связь от менторов, экспертов и группы",
          "Нетворкинг-сессия",
          "Вручение сертификатов и celebration",
        ],
        homework: [
          "90-дневный план роста",
          "3 OKR на следующий квартал",
          "Pitch deck на 10 слайдов",
          "Оставаться в alumni-сообществе и делиться прогрессом",
        ],
      },
    ],
    outcomes: [
      "Первые платящие пользователи или активная бесплатная база",
      "Работающие каналы привлечения — органика и платный трафик",
      "Навык продаж: скрипты, демо-звонки, работа с возражениями",
      "Рекламные креативы и запущенные кампании",
      "Автоматизированные процессы (email, onboarding, поддержка)",
      "Готовый pitch deck для инвесторов",
      "90-дневный план роста с OKR",
      "Alumni-сообщество и нетворкинг с другими фаундерами",
    ],
  },
];

function SectionBlock({
  label,
  color,
  items,
}: {
  label: string;
  color: "gold" | "blue" | "green";
  items: string[];
}) {
  const labelColors = {
    gold: "text-primary",
    blue: "text-blue-400",
    green: "text-emerald-400",
  };
  const dotColors = {
    gold: "bg-primary",
    blue: "bg-blue-400",
    green: "bg-emerald-400",
  };

  return (
    <div>
      <p
        className={`text-xs font-semibold uppercase tracking-wider mb-2.5 ${labelColors[color]}`}
      >
        {label}
      </p>
      <ul className="space-y-1.5">
        {items.map((item, i) => (
          <li
            key={i}
            className="flex gap-2.5 text-[13px] leading-relaxed text-foreground/80"
          >
            <span
              className={`w-1 h-1 rounded-full ${dotColors[color]} mt-[7px] shrink-0`}
            />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

function WeekCard({ week }: { week: Week }) {
  return (
    <div className="border border-border rounded-xl overflow-hidden bg-card">
      <div className="px-5 py-4 border-b border-border bg-secondary/30">
        <p className="text-[11px] text-muted-foreground font-medium uppercase tracking-wider mb-0.5">
          Неделя {week.number}
        </p>
        <h3 className="text-[15px] font-semibold text-foreground leading-snug">
          {week.title}
        </h3>
      </div>

      <div className="px-5 py-4 space-y-5">
        <SectionBlock label="Учу и показываю" color="gold" items={week.teach} />
        <SectionBlock label="Делаем вместе" color="blue" items={week.together} />
        <div className="bg-secondary/40 rounded-lg p-4 -mx-1">
          <SectionBlock
            label="Задание на неделю"
            color="green"
            items={week.homework}
          />
        </div>
      </div>
    </div>
  );
}

function MonthTabs({
  activeMonth,
  onSelect,
  isMobile,
}: {
  activeMonth: number;
  onSelect: (month: number) => void;
  isMobile: boolean;
}) {
  return (
    <div className={`flex ${isMobile ? 'gap-1' : 'gap-2'} justify-center`}>
      {months.map((m) => (
        <button
          key={m.month}
          onClick={() => onSelect(m.month)}
          className={`
            ${isMobile ? 'px-3 py-2 text-xs' : 'px-5 py-2.5 text-sm'}
            rounded-lg font-medium transition-all duration-200
            ${
              activeMonth === m.month
                ? "bg-primary text-primary-foreground shadow-md"
                : "bg-secondary/50 text-muted-foreground hover:bg-secondary hover:text-foreground"
            }
          `}
        >
          {isMobile ? `${m.month}` : `Месяц ${m.month}`}
        </button>
      ))}
    </div>
  );
}

function CTAButton({ className = "" }: { className?: string }) {
  return (
    <a
      href="/register"
      className={`inline-block bg-primary text-primary-foreground font-semibold rounded-xl hover:bg-primary/90 transition-colors ${className}`}
    >
      Присоединиться
    </a>
  );
}

export default function Program() {
  const isMobile = useIsMobile();
  const [activeMonth, setActiveMonth] = useState(1);
  const currentMonth = months.find((m) => m.month === activeMonth)!;

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Top bar */}
      <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-3xl mx-auto px-4 py-3 flex items-center justify-between">
          <a
            href="/"
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors text-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            Назад
          </a>
          <CTAButton className="text-sm px-4 py-2 rounded-lg" />
        </div>
      </nav>

      <main
        className={`max-w-3xl mx-auto ${isMobile ? "px-4 py-8" : "px-6 py-16"}`}
      >
        {/* Hero */}
        <header className={`${isMobile ? "mb-6" : "mb-10"} text-center`}>
          <p className="text-primary text-xs font-semibold uppercase tracking-widest mb-2">
            The Founders Circle
          </p>
          <h1
            className={`${isMobile ? "text-2xl" : "text-4xl"} font-bold text-foreground mb-3 font-['Playfair_Display']`}
          >
            Программа акселератора
          </h1>
          <p
            className={`${isMobile ? "text-sm" : "text-base"} text-foreground/60 max-w-xl mx-auto mb-6`}
          >
            12 недель. От идеи до готового продукта с первыми пользователями
          </p>

          {/* Month Navigation */}
          <MonthTabs
            activeMonth={activeMonth}
            onSelect={setActiveMonth}
            isMobile={isMobile}
          />
        </header>

        {/* Month Title */}
        <div className={`text-center ${isMobile ? "mb-6" : "mb-10"}`}>
          <p className="text-muted-foreground text-xs font-medium uppercase tracking-wider mb-1">
            Месяц {currentMonth.month}
          </p>
          <h2
            className={`${isMobile ? "text-xl" : "text-2xl"} font-bold text-foreground mb-1 font-['Playfair_Display']`}
          >
            {currentMonth.label}
          </h2>
          <p className="text-foreground/50 text-sm">{currentMonth.subtitle}</p>
        </div>

        {/* Who & Result */}
        <div
          className={`grid ${isMobile ? "grid-cols-1 gap-3" : "grid-cols-2 gap-5"} mb-10`}
        >
          <div className="border border-border rounded-xl p-5 bg-card">
            <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
              Точка входа
            </p>
            <p className="text-[13px] text-foreground/75 leading-relaxed">
              {currentMonth.forWhom}
            </p>
          </div>
          <div className="border border-primary/25 rounded-xl p-5 bg-primary/5">
            <p className="text-xs font-semibold uppercase tracking-wider text-primary mb-2">
              Результат месяца
            </p>
            <p className="text-[13px] text-foreground/75 leading-relaxed">
              {currentMonth.result}
            </p>
          </div>
        </div>

        {/* Weeks */}
        <div className={`${isMobile ? "space-y-5" : "space-y-6"} mb-12`}>
          {currentMonth.weeks.map((week) => (
            <WeekCard key={week.number} week={week} />
          ))}
        </div>

        {/* Outcomes */}
        <section className="border border-primary/25 rounded-xl p-6 bg-primary/5 mb-12">
          <p
            className={`${isMobile ? "text-base" : "text-lg"} font-bold text-foreground mb-4 text-center`}
          >
            Что получает каждый участник за месяц {currentMonth.month}
          </p>
          <ul className="space-y-2">
            {currentMonth.outcomes.map((item, i) => (
              <li
                key={i}
                className="flex items-start gap-2.5 text-[13px] text-foreground/80"
              >
                <span className="w-1 h-1 rounded-full bg-primary mt-[7px] shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </section>

        {/* Bottom CTA */}
        <div className="text-center pb-10">
          <CTAButton
            className={
              isMobile ? "px-8 py-3.5 text-base" : "px-10 py-4 text-lg"
            }
          />
          <p className="text-muted-foreground text-xs mt-3">
            Старт 16 марта 2026 · 12 недель · Группа 5-7 человек
          </p>
        </div>
      </main>
    </div>
  );
}
