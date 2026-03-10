import { ArrowLeft, Target, Users, Lightbulb, Rocket, CheckCircle2, MessageSquare, Zap, Calendar } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const weeks = [
  {
    number: 1,
    title: "Кто ваш клиент и зачем ему ваш продукт",
    icon: <Target className="w-5 h-5" />,
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
      'Одно предложение: "[продукт] помогает [кому] решить [что]"',
    ],
  },
  {
    number: 2,
    title: "Позиционирование, цена и что должен делать ваш MVP",
    icon: <Lightbulb className="w-5 h-5" />,
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
    icon: <Zap className="w-5 h-5" />,
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
    icon: <Rocket className="w-5 h-5" />,
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

function SectionLabel({ children, color }: { children: React.ReactNode; color: "gold" | "blue" | "green" }) {
  const colors = {
    gold: "bg-primary/15 text-primary border-primary/20",
    blue: "bg-blue-500/15 text-blue-400 border-blue-500/20",
    green: "bg-emerald-500/15 text-emerald-400 border-emerald-500/20",
  };
  return (
    <span className={`inline-flex items-center text-xs font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full border ${colors[color]}`}>
      {children}
    </span>
  );
}

function WeekCard({ week }: { week: typeof weeks[0] }) {
  return (
    <div className="border border-border rounded-2xl overflow-hidden bg-card">
      {/* Header */}
      <div className="px-6 py-5 border-b border-border bg-secondary/30 flex items-start gap-4">
        <div className="w-10 h-10 rounded-xl bg-primary/15 flex items-center justify-center text-primary shrink-0 mt-0.5">
          {week.icon}
        </div>
        <div>
          <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider mb-1">Неделя {week.number}</p>
          <h3 className="text-lg font-semibold text-foreground leading-snug">{week.title}</h3>
        </div>
      </div>

      <div className="p-6 space-y-6">
        {/* Teach */}
        <div>
          <SectionLabel color="gold">Учу и показываю</SectionLabel>
          <ul className="mt-3 space-y-2">
            {week.teach.map((item, i) => (
              <li key={i} className="flex gap-3 text-sm text-foreground/85 leading-relaxed">
                <span className="text-primary mt-0.5 shrink-0">▸</span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Together */}
        <div>
          <SectionLabel color="blue">Делаем вместе</SectionLabel>
          <ul className="mt-3 space-y-2">
            {week.together.map((item, i) => (
              <li key={i} className="flex gap-3 text-sm text-foreground/85 leading-relaxed">
                <Users className="w-3.5 h-3.5 text-blue-400 mt-1 shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Homework */}
        <div className="bg-secondary/40 rounded-xl p-4">
          <SectionLabel color="green">Задание на неделю</SectionLabel>
          <ul className="mt-3 space-y-2">
            {week.homework.map((item, i) => (
              <li key={i} className="flex gap-3 text-sm text-foreground/85 leading-relaxed">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 mt-1 shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default function Program() {
  const isMobile = useIsMobile();

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Top bar */}
      <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-4xl mx-auto px-4 py-3 flex items-center justify-between">
          <a href="/" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors text-sm">
            <ArrowLeft className="w-4 h-4" />
            Назад
          </a>
          <a
            href="/register"
            className="bg-primary text-primary-foreground text-sm font-medium px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors"
          >
            Присоединиться
          </a>
        </div>
      </nav>

      <main className={`max-w-4xl mx-auto ${isMobile ? 'px-4 py-8' : 'px-6 py-16'}`}>
        {/* Hero */}
        <header className={`${isMobile ? 'mb-10' : 'mb-16'} text-center`}>
          <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-3">The Founders Circle</p>
          <h1 className={`${isMobile ? 'text-3xl' : 'text-5xl'} font-bold text-foreground mb-4 font-['Playfair_Display']`}>
            Программа. Месяц 1
          </h1>
          <p className={`${isMobile ? 'text-lg' : 'text-xl'} text-foreground/70 max-w-2xl mx-auto leading-relaxed`}>
            От сырой идеи к готовности запуска
          </p>
        </header>

        {/* Who & Result */}
        <div className={`grid ${isMobile ? 'grid-cols-1 gap-4' : 'grid-cols-2 gap-6'} mb-12`}>
          <div className="border border-border rounded-2xl p-6 bg-card">
            <div className="flex items-center gap-3 mb-3">
              <MessageSquare className="w-5 h-5 text-primary" />
              <h2 className="font-semibold text-foreground">Для кого</h2>
            </div>
            <p className="text-sm text-foreground/70 leading-relaxed">
              Есть идея, базовый прототип, общее понимание рынка. Нет чёткого позиционирования, нет клиентов, нет уверенности что всё правильно.
            </p>
          </div>
          <div className="border border-primary/30 rounded-2xl p-6 bg-primary/5">
            <div className="flex items-center gap-3 mb-3">
              <Calendar className="w-5 h-5 text-primary" />
              <h2 className="font-semibold text-foreground">Результат месяца</h2>
            </div>
            <p className="text-sm text-foreground/70 leading-relaxed">
              Понятный продукт, понятный клиент, доработанный MVP, лендинг, первые контакты с реальными людьми.
            </p>
          </div>
        </div>

        {/* Weeks */}
        <div className="space-y-8 mb-16">
          {weeks.map((week) => (
            <WeekCard key={week.number} week={week} />
          ))}
        </div>

        {/* Outcomes */}
        <section className="border border-primary/30 rounded-2xl p-8 bg-primary/5 mb-16">
          <h2 className={`${isMobile ? 'text-xl' : 'text-2xl'} font-bold text-foreground mb-6 text-center font-['Playfair_Display']`}>
            Что получает каждый участник за месяц 1
          </h2>
          <div className={`grid ${isMobile ? 'grid-cols-1' : 'grid-cols-2'} gap-3`}>
            {outcomes.map((item, i) => (
              <div key={i} className="flex items-start gap-3 text-sm text-foreground/85">
                <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                {item}
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <div className="text-center pb-8">
          <a
            href="/register"
            className={`inline-block bg-primary text-primary-foreground font-semibold rounded-xl hover:bg-primary/90 transition-colors ${isMobile ? 'px-8 py-3.5 text-base' : 'px-10 py-4 text-lg'}`}
          >
            Присоединиться
          </a>
          <p className="text-muted-foreground text-sm mt-4">Старт 16 марта 2026 · Группа 5–7 человек</p>
        </div>
      </main>
    </div>
  );
}
