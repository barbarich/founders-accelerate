export type Lang = "en" | "ru" | "ua" | "he";

export const supportedLangs: Lang[] = ["en", "ru", "ua", "he"];

export const langLabels: Record<Lang, string> = {
  en: "EN",
  ru: "RU",
  ua: "UA",
  he: "HE",
};

export interface Translations {
  // Nav
  navApply: string;
  navProgram: string;
  navPricing: string;
  navMentor: string;

  // Hero
  heroTag: string;
  heroTitle: string;
  heroSubtitle: string;
  heroCohort: string;
  heroCTA: string;
  heroGroup: string;

  // Problem
  problemTag: string;
  problemTitle: string;
  problemItems: string[];

  // Mentor
  mentorTag: string;
  mentorTitle: string;
  mentorSubtitle: string;
  mentorBio: string[];

  // Track record
  trackTag: string;
  trackTitle: string;
  trackItems: {
    period: string;
    title: string;
    subtitle: string;
    highlight: string;
  }[];

  // Program phases
  phasesTag: string;
  phasesTitle: string;
  phasesSubtitle: string;
  phases: {
    weeks: string;
    title: string;
    items: string[];
    result: string;
  }[];

  // Results
  resultsTag: string;
  resultsTitle: string;
  resultsSubtitle: string;
  resultsItems: { icon: string; title: string; desc: string }[];

  // Format
  formatTag: string;
  formatTitle: string;
  formatSubtitle: string;
  formatColumns: {
    icon: string;
    title: string;
    sub: string;
    items: string[];
  }[];

  // Pricing
  pricingTag: string;
  pricingTitle: string;
  accelTitle: string;
  accelSub: string;
  accelItems: string[];
  accelPrice: string;
  accelPriceSub: string;
  accelMonthly: string;
  accelMonthlySub: string;
  consultTitle: string;
  consultSub: string;
  consultItems: string[];
  consultPrice: string;
  consultPriceSub: string;

  // CTA
  ctaTitle: string;
  ctaSubtitle: string;
  ctaCohort: string;
  ctaCTA: string;

  // Apply form
  applyTitle: string;
  applySubtitle: string;
  applyName: string;
  applyEmail: string;
  applyPhone: string;
  applyIdea: string;
  applyIdeaPlaceholder: string;
  applyStage: string;
  applyStages: string[];
  applyLang: string;
  applySubmit: string;
  applySuccess: string;
  applySuccessSub: string;
  applyBack: string;

  // Footer
  footerRights: string;
}

export const translations: Record<Lang, Translations> = {
  en: {
    navApply: "Apply Now",
    navProgram: "Program",
    navPricing: "Pricing",
    navMentor: "Mentor",

    heroTag: "Accelerator for Founders",
    heroTitle: "Launch Your Product\nin 12 Weeks",
    heroSubtitle: "From idea to paying customers — with a mentor who built 7 products, made 2 exits, and reached 50,000+ users in 107 countries.",
    heroCohort: "Next cohort: April 13, 2026",
    heroCTA: "Apply Now",
    heroGroup: "Group of 5–7 founders",

    problemTag: "The Problem",
    problemTitle: "Sound familiar?",
    problemItems: [
      "I've had an idea for months, but don't know where to start",
      "Started building, got stuck, and gave up",
      "I'm not technical — I can't build a product",
      "Working alone, no feedback or accountability",
      "No idea how to find my first customers",
    ],

    mentorTag: "Your Mentor",
    mentorTitle: "Michael Barbarich",
    mentorSubtitle: "Serial entrepreneur. Still building products today.",
    mentorBio: [
      "16 years in business, 7 in tech",
      "2 exits (tech products + restaurant business)",
      "CEO experience in international companies",
      "Built products from $0 to $8M ARR",
      "50,000+ paying customers in 107 countries",
      "10 years in Israel",
      "Currently: MetaMinder (B2B SaaS) + mymikey.ai (AI startup)",
    ],

    trackTag: "Track Record",
    trackTitle: "7 Products. 2 Exits. Real Results.",
    trackItems: [
      { period: "2009–2013", title: "B-rich Education", subtitle: "EdTech · First business at 18", highlight: "From $10 to 2,000+ students" },
      { period: "2013–2016", title: "Sky Room", subtitle: "HoReCa · Restaurant · Exit", highlight: "Full cycle → exit" },
      { period: "2018–2021", title: "PERA", subtitle: "E-commerce · Exit", highlight: "Zero to market leader → exit" },
      { period: "2020–2022", title: "RunEverywhere", subtitle: "Health & Fitness · B2C", highlight: "50K+ customers · 107 countries" },
      { period: "2023–2024", title: "ForexTester", subtitle: "FinTech · Crisis management", highlight: "Profit +30% · costs −45%" },
      { period: "2024–now", title: "MetaMinder", subtitle: "B2B SaaS · AI platform", highlight: "Idea to paying clients in 7 months" },
      { period: "2025–now", title: "mymikey.ai", subtitle: "AI · Dating · Startup", highlight: "Building right now" },
    ],

    phasesTag: "Program",
    phasesTitle: "How the Program Works",
    phasesSubtitle: "No coding, marketing, or sales experience needed — we'll go through it together, step by step.",
    phases: [
      { weeks: "Weeks 1–4", title: "Foundation", items: ["Validate your idea — test demand", "Market & competitor research", "Build your business model", "Define MVP — what to build first"], result: "Clarity on what to build and for whom" },
      { weeks: "Weeks 5–8", title: "Product", items: ["AI tools for product creation", "Working prototype — no coding skills needed", "Weekly demos and feedback", "Fast iterations and improvements"], result: "Working MVP" },
      { weeks: "Weeks 9–12", title: "Launch", items: ["Go-to-market strategy", "Marketing and first touchpoints", "Acquire first users", "3–6 month growth plan"], result: "Product in the market" },
    ],

    resultsTag: "Outcomes",
    resultsTitle: "What You'll Achieve in 12 Weeks",
    resultsSubtitle: "No matter your stage — the program accelerates your path to results.",
    resultsItems: [
      { icon: "🗺️", title: "Clear Action Plan", desc: "Understanding every step — from idea to product in the market" },
      { icon: "🔥", title: "Motivation & Discipline", desc: "A group, mentor, and system that keep you going" },
      { icon: "🤖", title: "AI as a Superpower", desc: "Build products with AI — without a dev team" },
      { icon: "💰", title: "Working Business Model", desc: "Clear monetization, tested with real customers" },
      { icon: "👥", title: "First Users", desc: "Acquisition strategy and first paying customers" },
      { icon: "🌐", title: "Community of 170+ Founders", desc: "Network, support, and connections that last forever" },
    ],

    formatTag: "Format",
    formatTitle: "The Founders Circle",
    formatSubtitle: "12 weeks · group of 5–7 · from idea to product",
    formatColumns: [
      { icon: "📅", title: "Every Week", sub: "2-hour session", items: ["Progress review", "Theory + practice", "New tools & methodologies", "Case studies", "Next steps planning", "Homework"] },
      { icon: "🧭", title: "Mentorship", sub: "Unlimited access", items: ["Direct access to me — any question", "Not just during sessions, but between them", "Telegram group for quick communication", "You're never alone with a problem"] },
      { icon: "🎤", title: "Expert Sessions", sub: "Monthly", items: ["Marketing & sales", "Artificial intelligence", "Legal & finance", "Strategy & growth"] },
    ],

    pricingTag: "Pricing",
    pricingTitle: "Investment Options",
    accelTitle: "Accelerator",
    accelSub: "Full program · 3 months",
    accelItems: ["12 weekly group sessions (2 hours)", "6 personal consultations with me", "3 expert guest sessions", "Access to me between sessions (Telegram)", "Network & community of 170+ founders", "My contacts and connections"],
    accelPrice: "₪4,500",
    accelPriceSub: "full program",
    accelMonthly: "₪2,000",
    accelMonthlySub: "/ month × 3",
    consultTitle: "Consultation",
    consultSub: "One-time session · 2 hours",
    consultItems: ["Deep dive into your question or project", "Answers based on my experience", "Specific recommendations and next steps", "Business model or product review"],
    consultPrice: "₪1,200",
    consultPriceSub: "/ session",

    ctaTitle: "Ready to Launch?",
    ctaSubtitle: "Join the next cohort and go from idea to product in 12 weeks.",
    ctaCohort: "Next cohort: April 13, 2026",
    ctaCTA: "Apply Now",

    applyTitle: "Apply to The Founders Circle",
    applySubtitle: "Fill out the form and we'll get back to you within 24 hours.",
    applyName: "Full Name",
    applyEmail: "Email",
    applyPhone: "Phone",
    applyIdea: "Describe Your Idea",
    applyIdeaPlaceholder: "What problem does it solve? Who is it for?",
    applyStage: "Current Stage",
    applyStages: ["Just an idea", "Have a prototype", "Have first users", "Already earning"],
    applyLang: "Preferred Language",
    applySubmit: "Submit Application",
    applySuccess: "Application Submitted!",
    applySuccessSub: "We'll contact you within 24 hours.",
    applyBack: "Back to Home",

    footerRights: "© 2026 The Founders Circle. All rights reserved.",
  },

  ru: {
    navApply: "Подать заявку",
    navProgram: "Программа",
    navPricing: "Стоимость",
    navMentor: "Ментор",

    heroTag: "Акселератор для фаундеров",
    heroTitle: "Запусти свой продукт\nза 12 недель",
    heroSubtitle: "От идеи до платящих клиентов — с ментором, который построил 7 продуктов, сделал 2 экзита и вырастил 50 000+ пользователей в 107 странах.",
    heroCohort: "Следующий набор: 13 апреля 2026",
    heroCTA: "Подать заявку",
    heroGroup: "Группа 5–7 фаундеров",

    problemTag: "Проблема",
    problemTitle: "Знакомо?",
    problemItems: [
      "У меня есть идея уже полгода, но я не знаю с чего начать",
      "Начал строить, застрял и забросил",
      "Не технический — не могу сделать продукт",
      "Делаю один, не хватает обратной связи",
      "Не понимаю как найти первых клиентов",
    ],

    mentorTag: "Ментор",
    mentorTitle: "Михаэль Барбарич",
    mentorSubtitle: "Действующий предприниматель. Строю продукты и сейчас.",
    mentorBio: [
      "16 лет в бизнесе, 7 из них в tech",
      "2 экзита (tech-продукты + ресторанный бизнес)",
      "Опыт CEO в международных компаниях",
      "Построил продукты от $0 до $8M ARR",
      "50 000+ платящих клиентов в 107 странах",
      "10 лет в Израиле",
      "Сейчас: MetaMinder (B2B SaaS) + mymikey.ai (AI-стартап)",
    ],

    trackTag: "Трек рекорд",
    trackTitle: "7 продуктов. 2 экзита. Реальные результаты.",
    trackItems: [
      { period: "2009–2013", title: "B-rich Education", subtitle: "EdTech · Первый бизнес · 18 лет", highlight: "С $10 до 2000+ студентов" },
      { period: "2013–2016", title: "Sky Room", subtitle: "HoReCa · Ресторан · Экзит", highlight: "Полный цикл → экзит" },
      { period: "2018–2021", title: "פופים PERA", subtitle: "E-commerce · Экзит", highlight: "С нуля до лидера ниши → экзит" },
      { period: "2020–2022", title: "RunEverywhere", subtitle: "Health & Fitness · B2C", highlight: "50K+ клиентов · 107 стран" },
      { period: "2023–2024", title: "ForexTester", subtitle: "FinTech · Кризис-менеджмент", highlight: "Прибыль +30% · расходы −45%" },
      { period: "2024–н.в.", title: "MetaMinder", subtitle: "B2B SaaS · AI-платформа", highlight: "От идеи до клиентов за 7 месяцев" },
      { period: "2025–н.в.", title: "mymikey.ai", subtitle: "AI · Dating · Стартап", highlight: "Строю прямо сейчас" },
    ],

    phasesTag: "Программа",
    phasesTitle: "Как устроена программа",
    phasesSubtitle: "Не нужен опыт в разработке, маркетинге или продажах — мы пройдём это вместе, шаг за шагом.",
    phases: [
      { weeks: "Недели 1–4", title: "Фундамент", items: ["Валидация идеи — проверяем спрос", "Исследование рынка и конкурентов", "Формируем бизнес-модель", "Определяем MVP — что строить первым"], result: "Понимание, что строить и для кого" },
      { weeks: "Недели 5–8", title: "Продукт", items: ["AI-инструменты для создания продукта", "Рабочий прототип — без навыков кода", "Демо и обратная связь каждую неделю", "Быстрые итерации и улучшения"], result: "Работающий MVP" },
      { weeks: "Недели 9–12", title: "Запуск", items: ["Стратегия выхода на рынок", "Маркетинг и первые касания", "Привлечение первых пользователей", "План роста на 3–6 месяцев"], result: "Продукт в рынке" },
    ],

    resultsTag: "Результат",
    resultsTitle: "Что вы получите за 12 недель",
    resultsSubtitle: "Неважно, на какой вы стадии — программа ускорит ваш путь к результату.",
    resultsItems: [
      { icon: "🗺️", title: "Чёткий план действий", desc: "Понимание каждого шага — от идеи до продукта в рынке" },
      { icon: "🔥", title: "Мотивация и дисциплина", desc: "Группа, ментор и система, которые не дадут остановиться" },
      { icon: "🤖", title: "AI как суперсила", desc: "Навык создания продуктов с помощью AI — без команды разработчиков" },
      { icon: "💰", title: "Рабочая бизнес-модель", desc: "Понятная монетизация, проверенная на реальных клиентах" },
      { icon: "👥", title: "Первые пользователи", desc: "Стратегия привлечения и первые платящие клиенты" },
      { icon: "🌐", title: "Комьюнити 170+ фаундеров", desc: "Нетворк, поддержка и связи, которые остаются навсегда" },
    ],

    formatTag: "Формат программы",
    formatTitle: "The Founders Circle",
    formatSubtitle: "12 недель · группа 5–7 человек · от идеи до продукта",
    formatColumns: [
      { icon: "📅", title: "Каждую неделю", sub: "Встреча 2 часа", items: ["Разбор прогресса за неделю", "Теория + практика", "Новые инструменты и методологии", "Разбор кейсов", "Планирование следующего шага", "Домашнее задание"] },
      { icon: "🧭", title: "Менторство", sub: "Без ограничений", items: ["Доступ ко мне лично — по любым вопросам", "Не только на встречах, но и между ними", "Telegram-группа для быстрой связи", "Вы никогда не один на один с проблемой"] },
      { icon: "🎤", title: "Эксперты", sub: "Раз в месяц", items: ["Маркетинг и продажи", "Искусственный интеллект", "Legal и финансы", "Стратегия и рост"] },
    ],

    pricingTag: "Участие",
    pricingTitle: "Форматы участия",
    accelTitle: "Акселератор",
    accelSub: "Полная программа · 3 месяца",
    accelItems: ["12 еженедельных групповых встреч (2 часа)", "6 личных консультаций со мной (раз в 2 недели)", "3 сессии с приглашёнными экспертами", "Доступ ко мне между встречами (Telegram)", "Нетворк и комьюнити 170+ фаундеров", "Мои контакты и связи"],
    accelPrice: "₪4,500",
    accelPriceSub: "за программу",
    accelMonthly: "₪2,000",
    accelMonthlySub: "/ мес × 3",
    consultTitle: "Консультация",
    consultSub: "Разовая сессия · 2 часа",
    consultItems: ["Глубокое погружение в ваш вопрос или проект", "Ответы на основе моего опыта и экспертизы", "Конкретные рекомендации и следующие шаги", "Разбор бизнес-модели, стратегии или продукта"],
    consultPrice: "₪1,200",
    consultPriceSub: "/ сессия",

    ctaTitle: "Готовы начать?",
    ctaSubtitle: "Присоединяйтесь к следующему набору и запустите продукт за 12 недель.",
    ctaCohort: "Следующий набор: 13 апреля 2026",
    ctaCTA: "Подать заявку",

    applyTitle: "Заявка в The Founders Circle",
    applySubtitle: "Заполните форму и мы свяжемся с вами в течение 24 часов.",
    applyName: "Имя и фамилия",
    applyEmail: "Email",
    applyPhone: "Телефон",
    applyIdea: "Опишите вашу идею",
    applyIdeaPlaceholder: "Какую проблему решает? Для кого?",
    applyStage: "Текущая стадия",
    applyStages: ["Только идея", "Есть прототип", "Есть первые пользователи", "Уже зарабатываю"],
    applyLang: "Предпочтительный язык",
    applySubmit: "Отправить заявку",
    applySuccess: "Заявка отправлена!",
    applySuccessSub: "Мы свяжемся с вами в течение 24 часов.",
    applyBack: "На главную",

    footerRights: "© 2026 The Founders Circle. Все права защищены.",
  },

  ua: {
    navApply: "Подати заявку",
    navProgram: "Програма",
    navPricing: "Вартість",
    navMentor: "Ментор",

    heroTag: "Акселератор для фаундерів",
    heroTitle: "Запусти свій продукт\nза 12 тижнів",
    heroSubtitle: "Від ідеї до клієнтів, що платять — з ментором, який побудував 7 продуктів, зробив 2 екзіти та виростив 50 000+ користувачів у 107 країнах.",
    heroCohort: "Наступний набір: 13 квітня 2026",
    heroCTA: "Подати заявку",
    heroGroup: "Група 5–7 фаундерів",

    problemTag: "Проблема",
    problemTitle: "Знайоме?",
    problemItems: [
      "У мене є ідея вже півроку, але не знаю з чого почати",
      "Почав будувати, застряг і закинув",
      "Не технічний — не можу зробити продукт",
      "Роблю сам, бракує зворотного зв'язку",
      "Не розумію як знайти перших клієнтів",
    ],

    mentorTag: "Ментор",
    mentorTitle: "Міхаель Барбаріч",
    mentorSubtitle: "Діючий підприємець. Будую продукти і зараз.",
    mentorBio: [
      "16 років у бізнесі, 7 з них у tech",
      "2 екзіти (tech-продукти + ресторанний бізнес)",
      "Досвід CEO в міжнародних компаніях",
      "Побудував продукти від $0 до $8M ARR",
      "50 000+ клієнтів, що платять, у 107 країнах",
      "10 років в Ізраїлі",
      "Зараз: MetaMinder (B2B SaaS) + mymikey.ai (AI-стартап)",
    ],

    trackTag: "Трек рекорд",
    trackTitle: "7 продуктів. 2 екзіти. Реальні результати.",
    trackItems: [
      { period: "2009–2013", title: "B-rich Education", subtitle: "EdTech · Перший бізнес · 18 років", highlight: "З $10 до 2000+ студентів" },
      { period: "2013–2016", title: "Sky Room", subtitle: "HoReCa · Ресторан · Екзіт", highlight: "Повний цикл → екзіт" },
      { period: "2018–2021", title: "פופים PERA", subtitle: "E-commerce · Екзіт", highlight: "З нуля до лідера ніші → екзіт" },
      { period: "2020–2022", title: "RunEverywhere", subtitle: "Health & Fitness · B2C", highlight: "50K+ клієнтів · 107 країн" },
      { period: "2023–2024", title: "ForexTester", subtitle: "FinTech · Кризис-менеджмент", highlight: "Прибуток +30% · витрати −45%" },
      { period: "2024–зараз", title: "MetaMinder", subtitle: "B2B SaaS · AI-платформа", highlight: "Від ідеї до клієнтів за 7 місяців" },
      { period: "2025–зараз", title: "mymikey.ai", subtitle: "AI · Dating · Стартап", highlight: "Будую прямо зараз" },
    ],

    phasesTag: "Програма",
    phasesTitle: "Як влаштована програма",
    phasesSubtitle: "Не потрібен досвід у розробці, маркетингу чи продажах — ми пройдемо це разом, крок за кроком.",
    phases: [
      { weeks: "Тижні 1–4", title: "Фундамент", items: ["Валідація ідеї — перевіряємо попит", "Дослідження ринку та конкурентів", "Формуємо бізнес-модель", "Визначаємо MVP — що будувати першим"], result: "Розуміння, що будувати і для кого" },
      { weeks: "Тижні 5–8", title: "Продукт", items: ["AI-інструменти для створення продукту", "Робочий прототип — без навичок коду", "Демо та зворотний зв'язок щотижня", "Швидкі ітерації та покращення"], result: "Працюючий MVP" },
      { weeks: "Тижні 9–12", title: "Запуск", items: ["Стратегія виходу на ринок", "Маркетинг і перші дотики", "Залучення перших користувачів", "План зростання на 3–6 місяців"], result: "Продукт на ринку" },
    ],

    resultsTag: "Результат",
    resultsTitle: "Що ви отримаєте за 12 тижнів",
    resultsSubtitle: "Неважливо, на якій ви стадії — програма прискорить ваш шлях до результату.",
    resultsItems: [
      { icon: "🗺️", title: "Чіткий план дій", desc: "Розуміння кожного кроку — від ідеї до продукту на ринку" },
      { icon: "🔥", title: "Мотивація та дисципліна", desc: "Група, ментор і система, які не дадуть зупинитися" },
      { icon: "🤖", title: "AI як суперсила", desc: "Навичка створення продуктів за допомогою AI — без команди розробників" },
      { icon: "💰", title: "Робоча бізнес-модель", desc: "Зрозуміла монетизація, перевірена на реальних клієнтах" },
      { icon: "👥", title: "Перші користувачі", desc: "Стратегія залучення та перші клієнти, що платять" },
      { icon: "🌐", title: "Спільнота 170+ фаундерів", desc: "Нетворк, підтримка та зв'язки, що залишаються назавжди" },
    ],

    formatTag: "Формат програми",
    formatTitle: "The Founders Circle",
    formatSubtitle: "12 тижнів · група 5–7 осіб · від ідеї до продукту",
    formatColumns: [
      { icon: "📅", title: "Щотижня", sub: "Зустріч 2 години", items: ["Розбір прогресу за тиждень", "Теорія + практика", "Нові інструменти та методології", "Розбір кейсів", "Планування наступного кроку", "Домашнє завдання"] },
      { icon: "🧭", title: "Менторство", sub: "Без обмежень", items: ["Доступ до мене особисто — з будь-яких питань", "Не тільки на зустрічах, але й між ними", "Telegram-група для швидкого зв'язку", "Ви ніколи не сам на сам із проблемою"] },
      { icon: "🎤", title: "Експерти", sub: "Раз на місяць", items: ["Маркетинг і продажі", "Штучний інтелект", "Legal і фінанси", "Стратегія та зростання"] },
    ],

    pricingTag: "Участь",
    pricingTitle: "Формати участі",
    accelTitle: "Акселератор",
    accelSub: "Повна програма · 3 місяці",
    accelItems: ["12 щотижневих групових зустрічей (2 години)", "6 особистих консультацій зі мною", "3 сесії з запрошеними експертами", "Доступ до мене між зустрічами (Telegram)", "Нетворк і спільнота 170+ фаундерів", "Мої контакти та зв'язки"],
    accelPrice: "₪4,500",
    accelPriceSub: "за програму",
    accelMonthly: "₪2,000",
    accelMonthlySub: "/ міс × 3",
    consultTitle: "Консультація",
    consultSub: "Разова сесія · 2 години",
    consultItems: ["Глибоке занурення у ваше питання або проєкт", "Відповіді на основі мого досвіду та експертизи", "Конкретні рекомендації та наступні кроки", "Розбір бізнес-моделі, стратегії або продукту"],
    consultPrice: "₪1,200",
    consultPriceSub: "/ сесія",

    ctaTitle: "Готові почати?",
    ctaSubtitle: "Приєднуйтесь до наступного набору та запустіть продукт за 12 тижнів.",
    ctaCohort: "Наступний набір: 13 квітня 2026",
    ctaCTA: "Подати заявку",

    applyTitle: "Заявка в The Founders Circle",
    applySubtitle: "Заповніть форму і ми зв'яжемося з вами протягом 24 годин.",
    applyName: "Ім'я та прізвище",
    applyEmail: "Email",
    applyPhone: "Телефон",
    applyIdea: "Опишіть вашу ідею",
    applyIdeaPlaceholder: "Яку проблему вирішує? Для кого?",
    applyStage: "Поточна стадія",
    applyStages: ["Тільки ідея", "Є прототип", "Є перші користувачі", "Вже заробляю"],
    applyLang: "Бажана мова",
    applySubmit: "Надіслати заявку",
    applySuccess: "Заявку надіслано!",
    applySuccessSub: "Ми зв'яжемося з вами протягом 24 годин.",
    applyBack: "На головну",

    footerRights: "© 2026 The Founders Circle. Усі права захищені.",
  },

  he: {
    navApply: "הגש מועמדות",
    navProgram: "תוכנית",
    navPricing: "מחירון",
    navMentor: "מנטור",

    heroTag: "אקסלרטור ליזמים",
    heroTitle: "השיקו את המוצר שלכם\nב-12 שבועות",
    heroSubtitle: "מרעיון ללקוחות משלמים — עם מנטור שבנה 7 מוצרים, עשה 2 אקזיטים והגיע ל-50,000+ משתמשים ב-107 מדינות.",
    heroCohort: "מחזור הבא: 13 באפריל 2026",
    heroCTA: "הגש מועמדות",
    heroGroup: "קבוצה של 5–7 יזמים",

    problemTag: "הבעיה",
    problemTitle: "מוכר?",
    problemItems: [
      "יש לי רעיון כבר חצי שנה, אבל לא יודע מאיפה להתחיל",
      "התחלתי לבנות, נתקעתי וויתרתי",
      "אני לא טכני — אני לא יכול לבנות מוצר",
      "עובד לבד, חסר לי פידבק",
      "לא מבין איך למצוא לקוחות ראשונים",
    ],

    mentorTag: "המנטור שלכם",
    mentorTitle: "מיכאל ברבריץ׳",
    mentorSubtitle: "יזם פעיל. בונה מוצרים גם היום.",
    mentorBio: [
      "16 שנים בעסקים, 7 מהם בטק",
      "2 אקזיטים (מוצרי טק + עסק מסעדנות)",
      "ניסיון כ-CEO בחברות בינלאומיות",
      "בנה מוצרים מ-$0 עד $8M ARR",
      "50,000+ לקוחות משלמים ב-107 מדינות",
      "10 שנים בישראל",
      "כרגע: MetaMinder (B2B SaaS) + mymikey.ai (סטארטאפ AI)",
    ],

    trackTag: "רקורד",
    trackTitle: "7 מוצרים. 2 אקזיטים. תוצאות אמיתיות.",
    trackItems: [
      { period: "2009–2013", title: "B-rich Education", subtitle: "EdTech · עסק ראשון בגיל 18", highlight: "מ-$10 ל-2,000+ תלמידים" },
      { period: "2013–2016", title: "Sky Room", subtitle: "HoReCa · מסעדה · אקזיט", highlight: "מחזור מלא → אקזיט" },
      { period: "2018–2021", title: "פופים PERA", subtitle: "E-commerce · אקזיט", highlight: "מאפס למוביל בנישה → אקזיט" },
      { period: "2020–2022", title: "RunEverywhere", subtitle: "Health & Fitness · B2C", highlight: "50K+ לקוחות · 107 מדינות" },
      { period: "2023–2024", title: "ForexTester", subtitle: "FinTech · ניהול משברים", highlight: "רווח +30% · הוצאות −45%" },
      { period: "2024–היום", title: "MetaMinder", subtitle: "B2B SaaS · פלטפורמת AI", highlight: "מרעיון ללקוחות ב-7 חודשים" },
      { period: "2025–היום", title: "mymikey.ai", subtitle: "AI · Dating · סטארטאפ", highlight: "בונה עכשיו" },
    ],

    phasesTag: "תוכנית",
    phasesTitle: "איך התוכנית עובדת",
    phasesSubtitle: "לא צריך ניסיון בפיתוח, שיווק או מכירות — נעבור את זה ביחד, צעד אחר צעד.",
    phases: [
      { weeks: "שבועות 1–4", title: "בסיס", items: ["ולידציה של הרעיון — בדיקת ביקוש", "מחקר שוק ומתחרים", "בניית מודל עסקי", "הגדרת MVP — מה לבנות קודם"], result: "בהירות מה לבנות ולמי" },
      { weeks: "שבועות 5–8", title: "מוצר", items: ["כלי AI ליצירת מוצר", "אב-טיפוס עובד — ללא ידע בקוד", "דמו ופידבק כל שבוע", "איטרציות מהירות ושיפורים"], result: "MVP עובד" },
      { weeks: "שבועות 9–12", title: "השקה", items: ["אסטרטגיית Go-to-Market", "שיווק ומגעים ראשונים", "גיוס משתמשים ראשונים", "תוכנית צמיחה ל-3–6 חודשים"], result: "מוצר בשוק" },
    ],

    resultsTag: "תוצאות",
    resultsTitle: "מה תשיגו ב-12 שבועות",
    resultsSubtitle: "לא משנה באיזה שלב אתם — התוכנית תאיץ את הדרך לתוצאות.",
    resultsItems: [
      { icon: "🗺️", title: "תוכנית פעולה ברורה", desc: "הבנה של כל שלב — מרעיון למוצר בשוק" },
      { icon: "🔥", title: "מוטיבציה ומשמעת", desc: "קבוצה, מנטור ומערכת שלא נותנים לעצור" },
      { icon: "🤖", title: "AI ככוח-על", desc: "היכולת לבנות מוצרים עם AI — בלי צוות פיתוח" },
      { icon: "💰", title: "מודל עסקי עובד", desc: "מונטיזציה ברורה, נבדקה על לקוחות אמיתיים" },
      { icon: "👥", title: "משתמשים ראשונים", desc: "אסטרטגיית גיוס ולקוחות משלמים ראשונים" },
      { icon: "🌐", title: "קהילה של 170+ יזמים", desc: "נטוורק, תמיכה וקשרים שנשארים לתמיד" },
    ],

    formatTag: "פורמט התוכנית",
    formatTitle: "The Founders Circle",
    formatSubtitle: "12 שבועות · קבוצה של 5–7 · מרעיון למוצר",
    formatColumns: [
      { icon: "📅", title: "כל שבוע", sub: "מפגש של שעתיים", items: ["סקירת התקדמות", "תיאוריה + פרקטיקה", "כלים ומתודולוגיות חדשות", "ניתוח מקרים", "תכנון הצעד הבא", "שיעורי בית"] },
      { icon: "🧭", title: "מנטורינג", sub: "גישה ללא הגבלה", items: ["גישה ישירה אלי — כל שאלה", "לא רק במפגשים, אלא גם ביניהם", "קבוצת Telegram לתקשורת מהירה", "אתם לעולם לא לבד עם בעיה"] },
      { icon: "🎤", title: "מומחים אורחים", sub: "פעם בחודש", items: ["שיווק ומכירות", "בינה מלאכותית", "משפט וכספים", "אסטרטגיה וצמיחה"] },
    ],

    pricingTag: "מחירון",
    pricingTitle: "אפשרויות השקעה",
    accelTitle: "אקסלרטור",
    accelSub: "תוכנית מלאה · 3 חודשים",
    accelItems: ["12 מפגשים קבוצתיים שבועיים (שעתיים)", "6 ייעוצים אישיים איתי", "3 מפגשים עם מומחים אורחים", "גישה אלי בין המפגשים (Telegram)", "נטוורק וקהילה של 170+ יזמים", "הקשרים והקשרים שלי"],
    accelPrice: "₪4,500",
    accelPriceSub: "לתוכנית",
    accelMonthly: "₪2,000",
    accelMonthlySub: "/ חודש × 3",
    consultTitle: "ייעוץ",
    consultSub: "מפגש חד-פעמי · שעתיים",
    consultItems: ["צלילה עמוקה לשאלה או לפרויקט שלכם", "תשובות מבוססות ניסיון ומומחיות", "המלצות קונקרטיות וצעדים הבאים", "ניתוח מודל עסקי, אסטרטגיה או מוצר"],
    consultPrice: "₪1,200",
    consultPriceSub: "/ מפגש",

    ctaTitle: "מוכנים להתחיל?",
    ctaSubtitle: "הצטרפו למחזור הבא ועברו מרעיון למוצר ב-12 שבועות.",
    ctaCohort: "מחזור הבא: 13 באפריל 2026",
    ctaCTA: "הגש מועמדות",

    applyTitle: "הגשת מועמדות ל-The Founders Circle",
    applySubtitle: "מלאו את הטופס ונחזור אליכם תוך 24 שעות.",
    applyName: "שם מלא",
    applyEmail: "אימייל",
    applyPhone: "טלפון",
    applyIdea: "תארו את הרעיון שלכם",
    applyIdeaPlaceholder: "איזו בעיה הוא פותר? למי הוא מיועד?",
    applyStage: "שלב נוכחי",
    applyStages: ["רק רעיון", "יש אב-טיפוס", "יש משתמשים ראשונים", "כבר מרוויח"],
    applyLang: "שפה מועדפת",
    applySubmit: "שלח מועמדות",
    applySuccess: "המועמדות נשלחה!",
    applySuccessSub: "ניצור איתכם קשר תוך 24 שעות.",
    applyBack: "חזרה לעמוד הראשי",

    footerRights: "© 2026 The Founders Circle. כל הזכויות שמורות.",
  },
};
