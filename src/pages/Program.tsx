import { ArrowLeft } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const weeks = [
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
];

const outcomes = [
  "Чёткое позиционирование и понимание клиента",
  "Доработанный MVP, готовый к показу",
  "Лендинг",
  "Модель монетизации и цена",
  "Шаблон outreach-сообщения",
  "План выхода на рынок",
  "Набор AI-промптов для исследования, разработки и маркетинга",
  "Обратная связь от ментора и группы каждую неделю",
];

function SectionBlock({ label, color, items }: { label: string; color: "gold" | "blue" | "green"; items: string[] }) {
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
      <p className={`text-xs font-semibold uppercase tracking-wider mb-2.5 ${labelColors[color]}`}>{label}</p>
      <ul className="space-y-1.5">
        {items.map((item, i) => (
          <li key={i} className="flex gap-2.5 text-[13px] leading-relaxed text-foreground/80">
            <span className={`w-1 h-1 rounded-full ${dotColors[color]} mt-[7px] shrink-0`} />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

function WeekCard({ week }: { week: typeof weeks[0] }) {
  return (
    <div className="border border-border rounded-xl overflow-hidden bg-card">
      <div className="px-5 py-4 border-b border-border bg-secondary/30">
        <p className="text-[11px] text-muted-foreground font-medium uppercase tracking-wider mb-0.5">Неделя {week.number}</p>
        <h3 className="text-[15px] font-semibold text-foreground leading-snug">{week.title}</h3>
      </div>

      <div className="px-5 py-4 space-y-5">
        <SectionBlock label="Учу и показываю" color="gold" items={week.teach} />
        <SectionBlock label="Делаем вместе" color="blue" items={week.together} />
        <div className="bg-secondary/40 rounded-lg p-4 -mx-1">
          <SectionBlock label="Задание на неделю" color="green" items={week.homework} />
        </div>
      </div>
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

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Top bar */}
      <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-3xl mx-auto px-4 py-3 flex items-center justify-between">
          <a href="/" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors text-sm">
            <ArrowLeft className="w-4 h-4" />
            Назад
          </a>
          <CTAButton className="text-sm px-4 py-2 rounded-lg" />
        </div>
      </nav>

      <main className={`max-w-3xl mx-auto ${isMobile ? 'px-4 py-8' : 'px-6 py-16'}`}>
        {/* Hero */}
        <header className={`${isMobile ? 'mb-8' : 'mb-14'} text-center`}>
          <p className="text-primary text-xs font-semibold uppercase tracking-widest mb-2">The Founders Circle</p>
          <h1 className={`${isMobile ? 'text-2xl' : 'text-4xl'} font-bold text-foreground mb-3 font-['Playfair_Display']`}>
            Программа. Месяц 1
          </h1>
          <p className={`${isMobile ? 'text-base' : 'text-lg'} text-foreground/60 max-w-xl mx-auto`}>
            От сырой идеи к готовности запуска
          </p>
        </header>

        {/* Who & Result */}
        <div className={`grid ${isMobile ? 'grid-cols-1 gap-3' : 'grid-cols-2 gap-5'} mb-10`}>
          <div className="border border-border rounded-xl p-5 bg-card">
            <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">Для кого</p>
            <p className="text-[13px] text-foreground/75 leading-relaxed">
              Есть идея, базовый прототип, общее понимание рынка. Нет чёткого позиционирования, нет клиентов, нет уверенности что всё правильно.
            </p>
          </div>
          <div className="border border-primary/25 rounded-xl p-5 bg-primary/5">
            <p className="text-xs font-semibold uppercase tracking-wider text-primary mb-2">Результат месяца</p>
            <p className="text-[13px] text-foreground/75 leading-relaxed">
              Понятный продукт, понятный клиент, доработанный MVP, лендинг, первые контакты с реальными людьми.
            </p>
          </div>
        </div>

        {/* Weeks */}
        <div className={`${isMobile ? 'space-y-5' : 'space-y-6'} mb-12`}>
          {weeks.map((week) => (
            <WeekCard key={week.number} week={week} />
          ))}
        </div>

        {/* Outcomes */}
        <section className="border border-primary/25 rounded-xl p-6 bg-primary/5 mb-12">
          <p className={`${isMobile ? 'text-base' : 'text-lg'} font-bold text-foreground mb-4 text-center`}>
            Что получает каждый участник за месяц 1
          </p>
          <ul className="space-y-2">
            {outcomes.map((item, i) => (
              <li key={i} className="flex items-start gap-2.5 text-[13px] text-foreground/80">
                <span className="w-1 h-1 rounded-full bg-primary mt-[7px] shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </section>

        {/* Bottom CTA */}
        <div className="text-center pb-10">
          <CTAButton className={isMobile ? 'px-8 py-3.5 text-base' : 'px-10 py-4 text-lg'} />
          <p className="text-muted-foreground text-xs mt-3">Старт 16 марта 2026 · Группа 5–7 человек</p>
        </div>
      </main>
    </div>
  );
}
