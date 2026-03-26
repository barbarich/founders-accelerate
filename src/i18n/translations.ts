export type Lang = "en" | "ru" | "ua" | "he";

export const supportedLangs: Lang[] = ["en", "ru", "ua", "he"];

export const langLabels: Record<Lang, string> = {
  en: "EN",
  ru: "RU",
  ua: "UA",
  he: "HE",
};

export interface Translations {
  navApply: string;
  navProgram: string;
  navPricing: string;
  navMentor: string;

  heroTag: string;
  heroTitle: string;
  heroSubtitle: string;
  heroCohort: string;
  heroCTA: string;
  heroGroup: string;
  heroSpotsLeft: string;

  statProducts: string;
  statExits: string;
  statUsers: string;
  statCountries: string;

  problemTag: string;
  problemTitle: string;
  problemItems: string[];

  whoTag: string;
  whoTitle: string;
  whoItems: { title: string; desc: string }[];

  mentorTag: string;
  mentorTitle: string;
  mentorSubtitle: string;
  mentorStatement: string[];
  mentorBio: string[];

  trackTag: string;
  trackTitle: string;
  trackItems: { period: string; title: string; subtitle: string; highlight: string }[];

  phasesTag: string;
  phasesTitle: string;
  phasesSubtitle: string;
  phases: { weeks: string; title: string; items: string[]; result: string }[];
  phasesCurriculumCTA: string;
  phasesCurriculumDesc: string;

  resultsTag: string;
  resultsTitle: string;
  resultsSubtitle: string;
  resultsItems: { title: string; desc: string }[];

  formatTag: string;
  formatTitle: string;
  formatSubtitle: string;
  formatColumns: { title: string; sub: string; items: string[] }[];

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

  faqTag: string;
  faqTitle: string;
  faqItems: { q: string; a: string }[];

  ctaTitle: string;
  ctaSubtitle: string;
  ctaCohort: string;
  ctaCTA: string;

  midCTA: string;
  midCTASub: string;

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
    heroSpotsLeft: "Only 3 spots left",

    statProducts: "Products Built",
    statExits: "Successful Exits",
    statUsers: "Paying Users",
    statCountries: "Countries",

    problemTag: "The Problem",
    problemTitle: "Sound familiar?",
    problemItems: [
      "I've had an idea for months, but don't know where to start",
      "Started building, got stuck, and gave up",
      "I'm not technical — I can't build a product",
      "Working alone, no feedback or accountability",
      "No idea how to find my first customers",
    ],

    whoTag: "Who Is This For",
    whoTitle: "This program is for you if…",
    whoItems: [
      { title: "You have an idea", desc: "But don't know how to validate it, build it, or find customers" },
      { title: "You have a prototype", desc: "But it's not growing and you need a strategy to get first users" },
      { title: "You're not technical", desc: "You want to build a product using AI and no-code tools, without a dev team" },
      { title: "You need structure", desc: "Accountability, feedback, and a step-by-step system to actually launch" },
    ],

    mentorTag: "Your Mentor",
    mentorTitle: "Michael Barbarich",
    mentorSubtitle: "Serial entrepreneur. Still building products today.",
    mentorStatement: [
      "My name is Michael Barbarich. I've been building companies for 16 years — and in that time, I've been through pretty much everything an entrepreneur can go through.",
      "I started with small teams and scaled up to hundreds of people. I've worked across EdTech, FinTech, SportTech, e-commerce, and SaaS — with companies taking their very first steps, and with businesses that had been running for 15 years. B2B and B2C, startups and enterprises, Israel and global markets.",
      "I've made every mistake in the book. Not exaggerating — literally every one. Wrong hires, wrong strategy, wrong product calls, wrong partnerships. I paid for them with time and money. And every single time, I sat down and asked: what went wrong, and why.",
      "That's where my methodology came from — not from books or business schools, but from those post-mortems. How to build a product from zero. How to avoid spending a year on something you could test in two weeks. How to make decisions when data is scarce and stakes are high.",
      "The Founders Circle is what I wish I'd had at the very beginning.",
    ],
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
    phasesCurriculumCTA: "View full weekly curriculum →",
    phasesCurriculumDesc: "3 months. From idea to product with first users. With group support and an experienced mentor.",

    resultsTag: "Outcomes",
    resultsTitle: "What You'll Achieve in 12 Weeks",
    resultsSubtitle: "No matter your stage — the program accelerates your path to results.",
    resultsItems: [
      { title: "Clear Action Plan", desc: "Understanding every step — from idea to product in the market" },
      { title: "Motivation & Discipline", desc: "A group, mentor, and system that keep you going" },
      { title: "AI as a Superpower", desc: "Build products with AI — without a dev team" },
      { title: "Working Business Model", desc: "Clear monetization, tested with real customers" },
      { title: "First Users", desc: "Acquisition strategy and first paying customers" },
      { title: "Community of 170+ Founders", desc: "Network, support, and connections that last forever" },
    ],

    formatTag: "Format",
    formatTitle: "The Founders Circle",
    formatSubtitle: "12 weeks · group of 5–7 · from idea to product",
    formatColumns: [
      { title: "Every Week", sub: "2-hour session", items: ["Progress review", "Theory + practice", "New tools & methodologies", "Case studies", "Next steps planning", "Homework"] },
      { title: "Mentorship", sub: "Unlimited access", items: ["Direct access to me — any question", "Not just during sessions, but between them", "Telegram group for quick communication", "You're never alone with a problem"] },
      { title: "Expert Sessions", sub: "Monthly", items: ["Marketing & sales", "Artificial intelligence", "Legal & finance", "Strategy & growth"] },
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

    testimonialsTag: "Testimonials",
    testimonialsTitle: "What Participants Say",
    testimonials: [
      {
        name: "Daria Kovalenko",
        role: "EdTech founder",
        text: "Before TFC I spent 8 months building a product nobody wanted. Michael's framework helped me validate a new idea in 3 weeks — and I launched it with paying users on day one. The program is intense but incredibly practical.",
      },
      {
        name: "Amit Levi",
        role: "SaaS founder, Tel Aviv",
        text: "I came in with a rough concept and left with a real business. Michael doesn't sugarcoat things — he tells you exactly where you're wasting time. That honesty saved me at least 6 months of going in circles.",
      },
      {
        name: "Tomáš Horák",
        role: "Marketplace startup, Prague",
        text: "The best part isn't the theory — it's how Michael pushes you to actually do the work. By week 4 I had my first paying customers. I'd recommend this to anyone who's tired of planning and ready to build.",
      },
      {
        name: "Yael Ben-David",
        role: "HealthTech founder",
        text: "I've done other accelerators before. TFC is different because it's small, personal, and Michael genuinely cares about your progress. The custdev methodology alone was worth the entire investment.",
      },
      {
        name: "Oleg Marchenko",
        role: "B2B SaaS, Kyiv",
        text: "I was skeptical at first — another course? But this isn't a course. It's a structured path from zero to launch with someone who's actually done it multiple times. My startup now has 40+ users and growing.",
      },
    ],

    faqTag: "FAQ",
    faqTitle: "Frequently Asked Questions",
    faqItems: [
      { q: "Do I need technical skills?", a: "Not at all. We use AI and no-code tools to build products. You don't need to write a single line of code." },
      { q: "What if I don't have an idea yet?", a: "That's fine! The first weeks focus on finding and validating ideas. Many participants come in without a clear concept." },
      { q: "How much time per week is needed?", a: "Plan for 4–6 hours per week: a 2-hour session plus homework and applying what you've learned." },
      { q: "Can I join mid-program?", a: "No. Each cohort starts together to build group dynamics and ensure consistent progress." },
      { q: "What happens after 12 weeks?", a: "You keep your community access, contacts, and growth plan. Many graduates continue collaborating and supporting each other." },
      { q: "Is there a refund policy?", a: "If after the first session you feel it's not right for you, we'll offer a full refund — no questions asked." },
    ],

    ctaTitle: "Ready to Launch?",
    ctaSubtitle: "Join the next cohort and go from idea to product in 12 weeks.",
    ctaCohort: "Next cohort: April 13, 2026",
    ctaCTA: "Apply Now",

    midCTA: "Interested? Apply before spots fill up",
    midCTASub: "We'll contact you within 24 hours",

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
    heroSpotsLeft: "Осталось 3 места",

    statProducts: "Продуктов",
    statExits: "Экзитов",
    statUsers: "Пользователей",
    statCountries: "Стран",

    problemTag: "Проблема",
    problemTitle: "Знакомо?",
    problemItems: [
      "У меня есть идея уже полгода, но я не знаю с чего начать",
      "Начал строить, застрял и забросил",
      "Не технический — не могу сделать продукт",
      "Делаю один, не хватает обратной связи",
      "Не понимаю как найти первых клиентов",
    ],

    whoTag: "Для кого",
    whoTitle: "Эта программа для вас, если…",
    whoItems: [
      { title: "У вас есть идея", desc: "Но вы не знаете как её проверить, реализовать и найти клиентов" },
      { title: "У вас есть прототип", desc: "Но он не растёт и нужна стратегия для первых пользователей" },
      { title: "Вы не технический", desc: "Хотите создать продукт с помощью AI и no-code, без разработчиков" },
      { title: "Вам нужна система", desc: "Дисциплина, обратная связь и пошаговый план для реального запуска" },
    ],

    mentorTag: "Ментор",
    mentorTitle: "Михаэль Барбарич",
    mentorSubtitle: "Действующий предприниматель. Строю продукты и сейчас.",
    mentorStatement: [
      "Меня зовут Михаэль Барбарич. Я строю компании уже 16 лет — и за это время прошёл через всё, что только может случиться с предпринимателем.",
      "Я начинал с маленьких команд и доходил до сотен человек в организации. Работал в EdTech, FinTech, SportTech, e-commerce и SaaS — с компаниями, которые делали первые шаги, и с теми, кто уже 15 лет держался на рынке. B2B и B2C, стартапы и корпорации, Израиль и международные рынки.",
      "Я совершил все ошибки, которые только возможно совершить. Не преувеличиваю — буквально все. Ошибался в найме, в стратегии, в продукте, в партнёрствах. Платил за это временем и деньгами. И каждый раз разбирал: что пошло не так и почему.",
      "Именно из этих разборов — не из книг и не из бизнес-школ — выросла методология, которую я сегодня применяю сам и передаю на своей менторской программе. Как строить продукт с нуля. Как не тратить год на то, что можно проверить за две недели. Как принимать решения, когда данных мало, а ставки высоки.",
      "The Founders Circle — это то, что я хотел бы иметь в самом начале своего пути.",
    ],
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
    phasesCurriculumCTA: "Смотреть полную программу по неделям →",
    phasesCurriculumDesc: "3 месяца. От идеи до продукта с первыми пользователями. С поддержкой группы и опытного ментора.",

    resultsTag: "Результат",
    resultsTitle: "Что вы получите за 12 недель",
    resultsSubtitle: "Неважно, на какой вы стадии — программа ускорит ваш путь к результату.",
    resultsItems: [
      { title: "Чёткий план действий", desc: "Понимание каждого шага — от идеи до продукта в рынке" },
      { title: "Мотивация и дисциплина", desc: "Группа, ментор и система, которые не дадут остановиться" },
      { title: "AI как суперсила", desc: "Навык создания продуктов с помощью AI — без команды разработчиков" },
      { title: "Рабочая бизнес-модель", desc: "Понятная монетизация, проверенная на реальных клиентах" },
      { title: "Первые пользователи", desc: "Стратегия привлечения и первые платящие клиенты" },
      { title: "Комьюнити 170+ фаундеров", desc: "Нетворк, поддержка и связи, которые остаются навсегда" },
    ],

    formatTag: "Формат программы",
    formatTitle: "The Founders Circle",
    formatSubtitle: "12 недель · группа 5–7 человек · от идеи до продукта",
    formatColumns: [
      { title: "Каждую неделю", sub: "Встреча 2 часа", items: ["Разбор прогресса за неделю", "Теория + практика", "Новые инструменты и методологии", "Разбор кейсов", "Планирование следующего шага", "Домашнее задание"] },
      { title: "Менторство", sub: "Без ограничений", items: ["Доступ ко мне лично — по любым вопросам", "Не только на встречах, но и между ними", "Telegram-группа для быстрой связи", "Вы никогда не один на один с проблемой"] },
      { title: "Эксперты", sub: "Раз в месяц", items: ["Маркетинг и продажи", "Искусственный интеллект", "Legal и финансы", "Стратегия и рост"] },
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

    testimonialsTag: "Отзывы",
    testimonialsTitle: "Что говорят участники",
    testimonials: [
      {
        name: "Дарья Коваленко",
        role: "Основательница EdTech-стартапа",
        text: "До TFC я 8 месяцев строила продукт, который никому не был нужен. Методология Михаэля помогла мне проверить новую идею за 3 недели — и запуститься с платящими пользователями в первый же день. Программа интенсивная, но невероятно практичная.",
      },
      {
        name: "Амит Леви",
        role: "Основатель SaaS, Тель-Авив",
        text: "Я пришёл с сырой концепцией и ушёл с реальным бизнесом. Михаэль не приукрашивает — он прямо говорит, где ты тратишь время впустую. Эта честность сэкономила мне минимум полгода хождения по кругу.",
      },
      {
        name: "Томаш Горак",
        role: "Маркетплейс-стартап, Прага",
        text: "Лучшее в программе — не теория, а то, как Михаэль заставляет тебя реально делать. К четвёртой неделе у меня были первые платящие клиенты. Рекомендую всем, кто устал планировать и готов строить.",
      },
      {
        name: "Яэль Бен-Давид",
        role: "Основательница HealthTech",
        text: "Я была в других акселераторах. TFC отличается тем, что он маленький, персональный, и Михаэлю реально важен твой прогресс. Одна только методология кастдева стоила всей инвестиции.",
      },
      {
        name: "Олег Марченко",
        role: "B2B SaaS, Киев",
        text: "Сначала я сомневался — ещё один курс? Но это не курс. Это структурированный путь от нуля до запуска с человеком, который сам прошёл этот путь несколько раз. Сейчас у моего стартапа 40+ пользователей и число растёт.",
      },
    ],

    faqTag: "Вопросы",
    faqTitle: "Часто задаваемые вопросы",
    faqItems: [
      { q: "Нужны ли технические навыки?", a: "Нет. Мы используем AI и no-code инструменты. Вам не нужно писать ни строчки кода." },
      { q: "А если у меня ещё нет идеи?", a: "Это нормально! Первые недели мы фокусируемся на поиске и валидации идей. Многие участники приходят без чёткого концепта." },
      { q: "Сколько времени нужно в неделю?", a: "Планируйте 4–6 часов: 2-часовая встреча + домашка и практика." },
      { q: "Можно ли присоединиться в середине?", a: "Нет. Каждая группа стартует вместе для лучшей динамики и прогресса." },
      { q: "Что происходит после 12 недель?", a: "Вы сохраняете доступ к комьюнити, контакты и план роста. Многие выпускники продолжают сотрудничать." },
      { q: "Есть ли возврат денег?", a: "Если после первой встречи вы поймёте, что это не для вас — вернём полную стоимость без вопросов." },
    ],

    ctaTitle: "Готовы начать?",
    ctaSubtitle: "Присоединяйтесь к следующему набору и запустите продукт за 12 недель.",
    ctaCohort: "Следующий набор: 13 апреля 2026",
    ctaCTA: "Подать заявку",

    midCTA: "Интересно? Подайте заявку, пока есть места",
    midCTASub: "Свяжемся в течение 24 часов",

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
    heroSpotsLeft: "Залишилось 3 місця",

    statProducts: "Продуктів",
    statExits: "Екзітів",
    statUsers: "Користувачів",
    statCountries: "Країн",

    problemTag: "Проблема",
    problemTitle: "Знайоме?",
    problemItems: [
      "У мене є ідея вже півроку, але не знаю з чого почати",
      "Почав будувати, застряг і закинув",
      "Не технічний — не можу зробити продукт",
      "Роблю сам, бракує зворотного зв'язку",
      "Не розумію як знайти перших клієнтів",
    ],

    whoTag: "Для кого",
    whoTitle: "Ця програма для вас, якщо…",
    whoItems: [
      { title: "У вас є ідея", desc: "Але ви не знаєте як її перевірити, реалізувати і знайти клієнтів" },
      { title: "У вас є прототип", desc: "Але він не росте і потрібна стратегія для перших користувачів" },
      { title: "Ви не технічний", desc: "Хочете створити продукт за допомогою AI і no-code, без розробників" },
      { title: "Вам потрібна система", desc: "Дисципліна, зворотний зв'язок і покроковий план для реального запуску" },
    ],

    mentorTag: "Ментор",
    mentorTitle: "Міхаель Барбарич",
    mentorSubtitle: "Діючий підприємець. Будую продукти і зараз.",
    mentorStatement: [
      "Мене звати Михаель Барбарич. Я будую компанії вже 16 років — і за цей час пройшов через усе, що тільки може трапитися з підприємцем.",
      "Починав з невеликих команд і доходив до сотень людей в організації. Працював у EdTech, FinTech, SportTech, e-commerce та SaaS — з компаніями, що робили перші кроки, і з тими, хто вже 15 років тримався на ринку. B2B і B2C, стартапи й корпорації, Ізраїль і міжнародні ринки.",
      "Я зробив усі помилки, які тільки можливо зробити. Без перебільшень — буквально всі. Помилявся в наймі, у стратегії, у продукті, у партнерствах. Платив за це часом і грошима. І щоразу сідав і розбирав: що пішло не так і чому.",
      "Саме з цих розборів — не з книжок і не з бізнес-шкіл — виросла методологія, яку я сьогодні застосовую сам і передаю на своїй менторській програмі. Як будувати продукт з нуля. Як не витрачати рік на те, що можна перевірити за два тижні. Як ухвалювати рішення, коли даних мало, а ставки високі.",
      "The Founders Circle — це те, що я хотів би мати на самому початку свого шляху.",
    ],
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
    phasesCurriculumCTA: "Переглянути повну програму по тижнях →",
    phasesCurriculumDesc: "3 місяці. Від ідеї до продукту з першими користувачами. З підтримкою групи та досвідченого ментора.",

    resultsTag: "Результат",
    resultsTitle: "Що ви отримаєте за 12 тижнів",
    resultsSubtitle: "Неважливо, на якій ви стадії — програма прискорить ваш шлях до результату.",
    resultsItems: [
      { title: "Чіткий план дій", desc: "Розуміння кожного кроку — від ідеї до продукту на ринку" },
      { title: "Мотивація та дисципліна", desc: "Група, ментор і система, які не дадуть зупинитися" },
      { title: "AI як суперсила", desc: "Навичка створення продуктів за допомогою AI — без команди розробників" },
      { title: "Робоча бізнес-модель", desc: "Зрозуміла монетизація, перевірена на реальних клієнтах" },
      { title: "Перші користувачі", desc: "Стратегія залучення та перші клієнти, що платять" },
      { title: "Спільнота 170+ фаундерів", desc: "Нетворк, підтримка та зв'язки, що залишаються назавжди" },
    ],

    formatTag: "Формат програми",
    formatTitle: "The Founders Circle",
    formatSubtitle: "12 тижнів · група 5–7 осіб · від ідеї до продукту",
    formatColumns: [
      { title: "Щотижня", sub: "Зустріч 2 години", items: ["Розбір прогресу за тиждень", "Теорія + практика", "Нові інструменти та методології", "Розбір кейсів", "Планування наступного кроку", "Домашнє завдання"] },
      { title: "Менторство", sub: "Без обмежень", items: ["Доступ до мене особисто — з будь-яких питань", "Не тільки на зустрічах, але й між ними", "Telegram-група для швидкого зв'язку", "Ви ніколи не сам на сам із проблемою"] },
      { title: "Експерти", sub: "Раз на місяць", items: ["Маркетинг і продажі", "Штучний інтелект", "Legal і фінанси", "Стратегія та зростання"] },
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

    testimonialsTag: "Відгуки",
    testimonialsTitle: "Що кажуть учасники",
    testimonials: [
      {
        name: "Дарʼя Коваленко",
        role: "Засновниця EdTech-стартапу",
        text: "До TFC я 8 місяців будувала продукт, який нікому не був потрібен. Методологія Міхаеля допомогла мені перевірити нову ідею за 3 тижні — і запуститися з платними користувачами в перший же день. Програма інтенсивна, але неймовірно практична.",
      },
      {
        name: "Аміт Леві",
        role: "Засновник SaaS, Тель-Авів",
        text: "Я прийшов із сирою концепцією і пішов із реальним бізнесом. Міхаель не прикрашає — він прямо каже, де ти витрачаєш час даремно. Ця чесність зекономила мені щонайменше пів року ходіння по колу.",
      },
      {
        name: "Томаш Горак",
        role: "Маркетплейс-стартап, Прага",
        text: "Найкраще в програмі — не теорія, а те, як Міхаель змушує тебе реально діяти. До четвертого тижня у мене вже були перші платні клієнти. Рекомендую всім, хто втомився планувати і готовий будувати.",
      },
      {
        name: "Яель Бен-Давід",
        role: "Засновниця HealthTech",
        text: "Я була в інших акселераторах. TFC відрізняється тим, що він маленький, персональний, і Міхаелю справді важливий твій прогрес. Одна лише методологія кастдеву вартувала всієї інвестиції.",
      },
      {
        name: "Олег Марченко",
        role: "B2B SaaS, Київ",
        text: "Спочатку я сумнівався — ще один курс? Але це не курс. Це структурований шлях від нуля до запуску з людиною, яка сама пройшла цей шлях кілька разів. Зараз у мого стартапу 40+ користувачів і їх кількість зростає.",
      },
    ],

    faqTag: "Питання",
    faqTitle: "Поширені запитання",
    faqItems: [
      { q: "Чи потрібні технічні навички?", a: "Ні. Ми використовуємо AI та no-code інструменти. Вам не потрібно писати жодного рядка коду." },
      { q: "А якщо в мене ще немає ідеї?", a: "Це нормально! Перші тижні ми фокусуємося на пошуку та валідації ідей." },
      { q: "Скільки часу потрібно на тиждень?", a: "Плануйте 4–6 годин: 2-годинна зустріч + домашка та практика." },
      { q: "Чи можна приєднатися посередині?", a: "Ні. Кожна група стартує разом для кращої динаміки." },
      { q: "Що відбувається після 12 тижнів?", a: "Ви зберігаєте доступ до спільноти, контакти та план зростання." },
      { q: "Чи є повернення грошей?", a: "Якщо після першої зустрічі ви зрозумієте, що це не для вас — повернемо повну вартість без питань." },
    ],

    ctaTitle: "Готові почати?",
    ctaSubtitle: "Приєднуйтесь до наступного набору та запустіть продукт за 12 тижнів.",
    ctaCohort: "Наступний набір: 13 квітня 2026",
    ctaCTA: "Подати заявку",

    midCTA: "Цікаво? Подайте заявку, поки є місця",
    midCTASub: "Зв'яжемося протягом 24 годин",

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
    heroSpotsLeft: "נותרו 3 מקומות",

    statProducts: "מוצרים",
    statExits: "אקזיטים",
    statUsers: "משתמשים",
    statCountries: "מדינות",

    problemTag: "הבעיה",
    problemTitle: "מוכר?",
    problemItems: [
      "יש לי רעיון כבר חצי שנה, אבל לא יודע מאיפה להתחיל",
      "התחלתי לבנות, נתקעתי וויתרתי",
      "אני לא טכני — אני לא יכול לבנות מוצר",
      "עובד לבד, חסר לי פידבק",
      "לא מבין איך למצוא לקוחות ראשונים",
    ],

    whoTag: "למי מתאים",
    whoTitle: "התוכנית מתאימה לכם אם…",
    whoItems: [
      { title: "יש לכם רעיון", desc: "אבל לא יודעים איך לבדוק אותו, לבנות ולמצוא לקוחות" },
      { title: "יש לכם אב-טיפוס", desc: "אבל הוא לא גדל וצריך אסטרטגיה למשתמשים ראשונים" },
      { title: "אתם לא טכניים", desc: "רוצים לבנות מוצר עם AI וכלי no-code, בלי צוות פיתוח" },
      { title: "צריכים מבנה", desc: "משמעת, פידבק ותוכנית צעד אחר צעד להשקה אמיתית" },
    ],

    mentorTag: "המנטור שלכם",
    mentorTitle: "מיכאל ברבריץ׳",
    mentorSubtitle: "יזם פעיל. בונה מוצרים גם היום.",
    mentorStatement: [
      "קוראים לי מיכאל ברברי׳ץ. אני בונה חברות כבר 16 שנה — ובמהלך הזמן הזה עברתי כמעט כל מה שיכול לקרות ליזם.",
      "התחלתי עם צוותים קטנים והגעתי לארגונים של מאות אנשים. עבדתי ב-EdTech, FinTech, SportTech, e-commerce ו-SaaS — עם חברות שזה עתה קמו, ועם כאלה שכבר 15 שנה בשוק. B2B ו-B2C, סטארטאפים ותאגידים, ישראל ושווקים בינלאומיים.",
      "עשיתי את כל הטעויות שאפשר לעשות. לא מגזים — ממש את כולן. טעיתי בגיוסים, באסטרטגיה, במוצר, בשותפויות. שילמתי על זה בזמן ובכסף. ובכל פעם ישבתי ופירקתי: מה הלך לא בסדר ולמה.",
      "מהפירוקים האלה — לא מספרים ולא מ-MBA — צמחה המתודולוגיה שאני מיישם היום בעצמי ומעביר בתוכנית המנטורינג שלי. איך בונים מוצר מאפס. איך לא מבזבזים שנה על משהו שאפשר לבדוק בשבועיים. איך מקבלים החלטות כשאין מספיק דאטה והסיכון גבוה.",
      "The Founders Circle — זה מה שהייתי רוצה שיהיה לי בתחילת הדרך.",
    ],
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
    phasesCurriculumCTA: "צפו בתוכנית המלאה לפי שבועות →",
    phasesCurriculumDesc: "3 חודשים. מרעיון למוצר עם משתמשים ראשונים. עם תמיכה קבוצתית ומנטור מנוסה.",

    resultsTag: "תוצאות",
    resultsTitle: "מה תשיגו ב-12 שבועות",
    resultsSubtitle: "לא משנה באיזה שלב אתם — התוכנית תאיץ את הדרך לתוצאות.",
    resultsItems: [
      { title: "תוכנית פעולה ברורה", desc: "הבנה של כל שלב — מרעיון למוצר בשוק" },
      { title: "מוטיבציה ומשמעת", desc: "קבוצה, מנטור ומערכת שלא נותנים לעצור" },
      { title: "AI ככוח-על", desc: "היכולת לבנות מוצרים עם AI — בלי צוות פיתוח" },
      { title: "מודל עסקי עובד", desc: "מונטיזציה ברורה, נבדקה על לקוחות אמיתיים" },
      { title: "משתמשים ראשונים", desc: "אסטרטגיית גיוס ולקוחות משלמים ראשונים" },
      { title: "קהילה של 170+ יזמים", desc: "נטוורק, תמיכה וקשרים שנשארים לתמיד" },
    ],

    formatTag: "פורמט התוכנית",
    formatTitle: "The Founders Circle",
    formatSubtitle: "12 שבועות · קבוצה של 5–7 · מרעיון למוצר",
    formatColumns: [
      { title: "כל שבוע", sub: "מפגש של שעתיים", items: ["סקירת התקדמות", "תיאוריה + פרקטיקה", "כלים ומתודולוגיות חדשות", "ניתוח מקרים", "תכנון הצעד הבא", "שיעורי בית"] },
      { title: "מנטורינג", sub: "גישה ללא הגבלה", items: ["גישה ישירה אלי — כל שאלה", "לא רק במפגשים, אלא גם ביניהם", "קבוצת Telegram לתקשורת מהירה", "אתם לעולם לא לבד עם בעיה"] },
      { title: "מומחים אורחים", sub: "פעם בחודש", items: ["שיווק ומכירות", "בינה מלאכותית", "משפט וכספים", "אסטרטגיה וצמיחה"] },
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

    testimonialsTag: "המלצות",
    testimonialsTitle: "מה אומרים המשתתפים",
    testimonials: [
      {
        name: "דריה קובלנקו",
        role: "מייסדת סטארטאפ EdTech",
        text: "לפני TFC בניתי 8 חודשים מוצר שאף אחד לא רצה. המתודולוגיה של מיכאל עזרה לי לבדוק רעיון חדש ב-3 שבועות — והשקתי עם לקוחות משלמים ביום הראשון. התוכנית אינטנסיבית אבל מעשית להפליא.",
      },
      {
        name: "עמית לוי",
        role: "מייסד SaaS, תל אביב",
        text: "הגעתי עם קונספט גולמי ויצאתי עם עסק אמיתי. מיכאל לא מייפה דברים — הוא אומר לך בדיוק איפה אתה מבזבז זמן. הכנות הזו חסכה לי לפחות חצי שנה של הסתובבות במעגלים.",
      },
      {
        name: "תומאש הוראק",
        role: "סטארטאפ מרקטפלייס, פראג",
        text: "הדבר הכי טוב הוא לא התיאוריה — אלא איך שמיכאל דוחף אותך לעשות בפועל. עד שבוע 4 כבר היו לי לקוחות משלמים ראשונים. ממליץ לכל מי שנמאס לו לתכנן ומוכן לבנות.",
      },
      {
        name: "יעל בן-דוד",
        role: "מייסדת HealthTech",
        text: "עשיתי אקסלרטורים אחרים. TFC שונה כי הוא קטן, אישי, ולמיכאל באמת אכפת מההתקדמות שלך. מתודולוגיית הקאסטדב לבדה שווה את כל ההשקעה.",
      },
      {
        name: "אולג מרצ׳נקו",
        role: "B2B SaaS, קייב",
        text: "בהתחלה הייתי סקפטי — עוד קורס? אבל זה לא קורס. זו דרך מובנית מאפס להשקה עם מישהו שבאמת עבר את זה כמה פעמים. לסטארטאפ שלי יש היום 40+ משתמשים והמספר גדל.",
      },
    ],

    faqTag: "שאלות נפוצות",
    faqTitle: "שאלות נפוצות",
    faqItems: [
      { q: "צריך ידע טכני?", a: "בכלל לא. אנחנו משתמשים בכלי AI ו-no-code. לא צריך לכתוב שורת קוד אחת." },
      { q: "מה אם אין לי רעיון?", a: "זה בסדר! בשבועות הראשונים מתמקדים בחיפוש וולידציה של רעיונות." },
      { q: "כמה זמן צריך בשבוע?", a: "תכננו 4–6 שעות: מפגש של שעתיים + שיעורי בית ותרגול." },
      { q: "אפשר להצטרף באמצע?", a: "לא. כל מחזור מתחיל ביחד לדינמיקה קבוצתית טובה יותר." },
      { q: "מה קורה אחרי 12 שבועות?", a: "אתם שומרים גישה לקהילה, קשרים ותוכנית צמיחה." },
      { q: "יש מדיניות החזר?", a: "אם אחרי המפגש הראשון תרגישו שזה לא מתאים — החזר מלא, ללא שאלות." },
    ],

    ctaTitle: "מוכנים להתחיל?",
    ctaSubtitle: "הצטרפו למחזור הבא ועברו מרעיון למוצר ב-12 שבועות.",
    ctaCohort: "מחזור הבא: 13 באפריל 2026",
    ctaCTA: "הגש מועמדות",

    midCTA: "מתעניינים? הגישו מועמדות לפני שהמקומות נגמרים",
    midCTASub: "ניצור קשר תוך 24 שעות",

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
