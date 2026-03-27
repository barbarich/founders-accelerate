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
  problemIntro: string;
  problemItems: string[];
  problemOutro: string;

  whoTag: string;
  whoTitle: string;
  whoIntro: string;
  whoItems: { title: string; desc: string }[];

  mentorTag: string;
  mentorTitle: string;
  mentorSubtitle: string;
  mentorStatement: string[];
  mentorBio: string[];
  mentorNote: string;

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
  pricingIntro: string;
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
  guaranteeText: string;

  testimonialsTag: string;
  testimonialsTitle: string;
  testimonials: { name: string; role: string; text: string }[];

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
    heroSubtitle: "A mentorship program from a CEO of international companies and a founder with 16 years of experience who built 7 products across Israel and global markets, with 2 exits.",
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
    problemIntro: "These days I work as CEO at established companies, take on crisis management, and mentor startup founders. In 2026, building has become so easy that the only real question left is: \"What's next?\"",
    problemItems: [
      "I've had an idea for months - but I have no idea where to start",
      "I started building - then got stuck and quietly gave up",
      "I'm not technical - feels like I can't build anything without a developer",
      "I'm doing this alone - no feedback, no deadlines, nobody to tell me when I'm going the wrong way",
      "I have no clue - how to find my first customers and start selling",
    ],
    problemOutro: "If any of this sounds like you - you're in the right place.",

    whoTag: "Who Is This For",
    whoTitle: "For founders at the beginning of the road",
    whoIntro: "I guide you step by step - from idea, MVP, or prototype - to a finished product, in the market, with real users. This program is 100% based on my personal experience. Pure practice, zero theory.",
    whoItems: [
      { title: "You have an idea", desc: "But how do you build it so it actually takes off?" },
      { title: "You have a prototype", desc: "But you're not sure you're building something people will pay for" },
      { title: "You're not technical", desc: "You want to build with AI and no-code tools, no developer needed" },
      { title: "You need support", desc: "Because motivation alone isn't enough - a group and a mentor make all the difference" },
    ],

    mentorTag: "Your Mentor",
    mentorTitle: "Michael Barbarich",
    mentorSubtitle: "CEO MetaMinder, Founder Mikey AI",
    mentorStatement: [
      "16 years in business. At 18 I started my first company with a $10 budget - an education business. Then came restaurants, e-commerce in Israel, a large sports startup. I was CEO at a major Canadian fintech company and now CEO at B2B company MetaMinder, where I went from idea to first paying customers in 7 months. We now have clients on every continent. In parallel, I mentor companies and founders on launching new products and businesses.",
    ],
    mentorBio: [
      "16 years in business",
      "7 products · 2 exits",
      "$0 to $8M ARR",
      "50,000+ customers in 107 countries",
    ],
    mentorNote: "TFC is not a course. It's a mentorship program where I share the knowledge and hands-on experience I gained by making every possible mistake - and learning from each one.",

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
    phasesTitle: "Three phases. Twelve weeks. One outcome.",
    phasesSubtitle: "The goal of the accelerator - your finished product, in the market, with first users, in 12 weeks.",
    phases: [
      { weeks: "Weeks 1–4", title: "Foundation", items: ["Idea validation, market research, business model, MVP"], result: "Foundation" },
      { weeks: "Weeks 5–8", title: "Product", items: ["AI tools, working prototype, weekly demos, fast iterations"], result: "Product" },
      { weeks: "Weeks 9–12", title: "Launch", items: ["Marketing, sales, go to market, first users, 3–6 month growth plan"], result: "Launch" },
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
    pricingIntro: "In mini-groups of 5–7 people I give maximum attention to each participant and their idea. I give feedback, share experience, and guide toward launch step by step.",
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
    guaranteeText: "If after the first session you feel it's not the right fit - I'll refund you in full. No questions asked.",

    testimonialsTag: "Testimonials",
    testimonialsTitle: "What Participants Say",
    testimonials: [
      {
        name: "Daria Kovalenko",
        role: "EdTech founder",
        text: "Before TFC I'd barely moved forward on my EdTech idea for almost a year. By week 3, Michael convinced me to throw out 60% of the concept - and I'm so glad I listened. By week 10 I had 18 paying beta users and a waitlist.",
      },
      {
        name: "Amit Levi",
        role: "SaaS founder, Tel Aviv",
        text: "I came in with rough sketches and left with a real business. Michael doesn't sugarcoat things - he tells you straight where you're wasting time. That honesty saved me at least six months of running in circles.",
      },
      {
        name: "Tomáš Horák",
        role: "Marketplace startup, Prague",
        text: "The best part isn't the theory - it's that Michael makes you do the actual work right now. By week 4 I had my first paying customers. I've done other programs. Here, there's nowhere to hide.",
      },
      {
        name: "Yael Ben-David",
        role: "HealthTech founder",
        text: "TFC is different because the group is small, everything is personal, and Michael genuinely tracks your progress every week. The custdev methodology alone was worth the entire cost of the program.",
      },
      {
        name: "Oleg Marchenko",
        role: "B2B SaaS",
        text: "My startup now has 40+ users, and last week I closed my first annual contract.",
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

    ctaTitle: "The next cohort starts April 13.",
    ctaSubtitle: "Apply and we'll get on a 15-minute call to talk through your specific situation. If you feel this program is what you need, and I see the potential - welcome to TFC Accelerator.",
    ctaCohort: "Next cohort: April 13, 2026",
    ctaCTA: "Apply - takes 1 minute",

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
    heroSubtitle: "Менторская программа от СЕО международных компаний и фаундера с 16-летним стажем, что построил 7 продуктов, в Израиле и на глобальном рынке, сделал 2 экзита.",
    heroCohort: "Следующий поток: 13 апреля 2026",
    heroCTA: "Подать заявку",
    heroGroup: "Группа из 5–7 фаундеров",
    heroSpotsLeft: "Осталось 3 места",

    statProducts: "Продуктов",
    statExits: "Экзитов",
    statUsers: "Пользователей",
    statCountries: "Стран",

    problemTag: "Проблема",
    problemTitle: "Узнаёшь себя?",
    problemIntro: "Последние годы я работаю СЕО в крупных компаниях, работаю как кризис-менеджер и менторю основателей стартапов. В 2026 строить стало так легко, что единственный вопрос - это: «Что дальше?»",
    problemItems: [
      "Идея есть уже несколько месяцев - но я не знаю, с чего начать",
      "Начинал строить - потом застрял и тихо бросил",
      "Я не технарь - кажется, что без разработчика ничего не сделать",
      "Делаю всё один - нет обратной связи, нет дедлайнов, некому сказать когда иду не туда",
      "Понятия не имею - как найти первых клиентов и начать продажи",
    ],
    problemOutro: "Если хоть что-то из этого про тебя - ты попал в правильное место.",

    whoTag: "Для кого",
    whoTitle: "Для тех, кто в начале пути",
    whoIntro: "Я помогаю и веду от идеи, MVP или прототипа, шаг за шагом - к готовому продукту, в рынке, с реальными пользователями. Эта программа 100% основана на моём личном опыте. Только практика, никакой теории.",
    whoItems: [
      { title: "Есть идея", desc: "Но как реализовать её так, чтобы она взлетела?" },
      { title: "Есть прототип", desc: "Но не уверен, что строишь то, что будут покупать" },
      { title: "Ты не технарь", desc: "Хочешь строить с AI и no-code инструментами, без найма разработчиков" },
      { title: "Нужна поддержка", desc: "Потому что мотивации одной недостаточно, а с группой и ментором всё намного эффективнее" },
    ],

    mentorTag: "Ментор",
    mentorTitle: "Михаэль Барбарич",
    mentorSubtitle: "CEO MetaMinder, Founder Mikey AI",
    mentorStatement: [
      "16 лет в бизнесе. В 18 лет построил первую компанию с бюджетом в 10 долларов - образовательная компания. Далее - ресторанный бизнес, e-commerce в Израиле, большой стартап в сфере спорта. Я работал СЕО в крупной Канадской финтех-компании и сейчас СЕО в B2B компании MetaMinder, где за 7 месяцев прошёл путь от идеи до первых платящих клиентов. Сейчас у нас клиенты на всех континентах. Параллельно менторю компании и фаундеров в запуске новых продуктов и компаний.",
    ],
    mentorBio: [
      "16 лет в бизнесе",
      "7 продуктов · 2 экзита",
      "$0 до $8M ARR",
      "50 000+ клиентов в 107 странах",
    ],
    mentorNote: "TFC акселератор - это не курс. Это программа наставничества, где я делюсь знаниями и практическим опытом, который получил, совершив все возможные ошибки и научившись на них.",

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
    phasesTitle: "Три фазы. Двенадцать недель. Один результат.",
    phasesSubtitle: "Цель акселератора - твой готовый продукт, в рынке, с первыми пользователями за 12 недель.",
    phases: [
      { weeks: "Недели 1–4", title: "Фундамент", items: ["Валидация идеи, исследование рынка, бизнес-модель, MVP"], result: "Фундамент" },
      { weeks: "Недели 5–8", title: "Продукт", items: ["AI инструменты, рабочий прототип, еженедельные демо, быстрые итерации"], result: "Продукт" },
      { weeks: "Недели 9–12", title: "Запуск", items: ["Маркетинг, продажи, выход на рынок, первые пользователи, план роста на 3–6 месяцев"], result: "Запуск" },
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

    pricingTag: "Стоимость",
    pricingTitle: "Форматы участия",
    pricingIntro: "В мини-группах по 5–7 человек я уделяю максимум внимания каждому участнику и его идее. Даю фидбек, делюсь опытом и веду к запуску шаг-за-шагом.",
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
    guaranteeText: "Если после первой сессии ты почувствуешь, что это не то - верну деньги полностью. Без вопросов.",

    testimonialsTag: "Отзывы",
    testimonialsTitle: "Что говорят участники",
    testimonials: [
      {
        name: "Дарья Коваленко",
        role: "EdTech основатель",
        text: "До TFC я почти год не двигалась с места с идеей для EdTech-продукта. К третьей неделе Михаэль убедил меня выбросить 60% концепции - и я так рада, что согласилась. К 10-й неделе у меня было 18 платящих бета-пользователей и лист ожидания.",
      },
      {
        name: "Амит Леви",
        role: "SaaS основатель, Тель-Авив",
        text: "Пришла с набросками, ушла с реальным бизнесом. Михаэль не приукрашивает - он прямо говорит, где ты теряешь время. Эта честность сэкономила мне минимум полгода хождения по кругу.",
      },
      {
        name: "Томаш Хорак",
        role: "Marketplace стартап, Прага",
        text: "Лучшее - не теория, а то, что Михаэль заставляет делать работу прямо сейчас. К 4-й неделе у меня были первые платящие клиенты. Я проходил другие программы. Здесь спрятаться не получится.",
      },
      {
        name: "Яэль Бен-Давид",
        role: "HealthTech основатель",
        text: "TFC отличается тем, что группа маленькая, всё личное, и Михаэль реально следит за твоим прогрессом каждую неделю. Только методология кастдева окупила всю стоимость программы.",
      },
      {
        name: "Олег Марченко",
        role: "B2B SaaS",
        text: "У моего стартапа сейчас 40+ пользователей, и на прошлой неделе я закрыл первый годовой контракт.",
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

    ctaTitle: "Следующий поток начинается 13 апреля.",
    ctaSubtitle: "Подай заявку, мы встретимся на 15-минутном звонке и обсудим лично твой кейс. Если ты поймёшь, что эта программа - то, что тебе нужно, а я пойму, что в ней есть потенциал - добро пожаловать в TFC Акселератор.",
    ctaCohort: "Следующий поток: 13 апреля 2026",
    ctaCTA: "Подать заявку - занимает 1 минуту",

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
    heroSubtitle: "Менторська програма від CEO міжнародних компаній і фаундера з 16-річним досвідом, який побудував 7 продуктів в Ізраїлі та на глобальному ринку, з 2 екзитами.",
    heroCohort: "Наступний потік: 13 квітня 2026",
    heroCTA: "Подати заявку",
    heroGroup: "Група з 5–7 засновників",
    heroSpotsLeft: "Залишилось 3 місця",

    statProducts: "Продуктів",
    statExits: "Екзітів",
    statUsers: "Користувачів",
    statCountries: "Країн",

    problemTag: "Проблема",
    problemTitle: "Впізнаєш себе?",
    problemIntro: "Останніми роками я працюю CEO в великих компаніях, працюю як кризис-менеджер і менторю засновників стартапів. У 2026 будувати стало настільки просто, що єдине реальне питання - «Що далі?»",
    problemItems: [
      "Ідея є вже кілька місяців - але я не знаю, з чого почати",
      "Починав будувати - потім застряг і тихо кинув",
      "Я не технар - здається, що без розробника нічого не вийде",
      "Роблю все сам - немає зворотного зв'язку, немає дедлайнів, нікому сказати коли йду не туди",
      "Не уявляю - як знайти перших клієнтів і почати продавати",
    ],
    problemOutro: "Якщо хоч щось із цього про тебе - ти потрапив туди, куди треба.",

    whoTag: "Для кого",
    whoTitle: "Для тих, хто на початку шляху",
    whoIntro: "Я допомагаю і веду від ідеї, MVP або прототипу, крок за кроком - до готового продукту, на ринку, з реальними користувачами. Ця програма на 100% базується на моєму особистому досвіді. Тільки практика, жодної теорії.",
    whoItems: [
      { title: "Є ідея", desc: "Але як реалізувати її так, щоб вона взлетіла?" },
      { title: "Є прототип", desc: "Але не впевнений, що будую те, за що будуть платити" },
      { title: "Ти не технар", desc: "Хочеш будувати з AI і no-code інструментами, без найму розробників" },
      { title: "Потрібна підтримка", desc: "Бо мотивації однієї недостатньо, а з групою і ментором все набагато ефективніше" },
    ],

    mentorTag: "Ментор",
    mentorTitle: "Михаель Барбарич",
    mentorSubtitle: "CEO MetaMinder, Founder Mikey AI",
    mentorStatement: [
      "16 років у бізнесі. У 18 років побудував першу компанію з бюджетом 10 доларів - освітня компанія. Далі - ресторанний бізнес, e-commerce в Ізраїлі, великий стартап у сфері спорту. Я працював CEO у великій канадській фінтех-компанії і зараз CEO в B2B-компанії MetaMinder, де за 7 місяців пройшов шлях від ідеї до перших платних клієнтів. Зараз маємо клієнтів на всіх континентах. Паралельно менторю компанії і засновників у запуску нових продуктів і компаній.",
    ],
    mentorBio: [
      "16 років у бізнесі",
      "7 продуктів · 2 екзити",
      "$0 до $8M ARR",
      "50 000+ клієнтів у 107 країнах",
    ],
    mentorNote: "TFC акселератор - це не курс. Це програма наставництва, де я ділюсь знаннями і практичним досвідом, який отримав, зробивши всі можливі помилки - і навчившись на них.",

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
    phasesTitle: "Три фази. Дванадцять тижнів. Один результат.",
    phasesSubtitle: "Мета акселератора - твій готовий продукт, на ринку, з першими користувачами за 12 тижнів.",
    phases: [
      { weeks: "Тижні 1–4", title: "Фундамент", items: ["Валідація ідеї, дослідження ринку, бізнес-модель, MVP"], result: "Фундамент" },
      { weeks: "Тижні 5–8", title: "Продукт", items: ["AI інструменти, робочий прототип, щотижневі демо, швидкі ітерації"], result: "Продукт" },
      { weeks: "Тижні 9–12", title: "Запуск", items: ["Маркетинг, продажі, вихід на ринок, перші користувачі, план зростання на 3–6 місяців"], result: "Запуск" },
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

    pricingTag: "Вартість",
    pricingTitle: "Формати участі",
    pricingIntro: "У міні-групах з 5–7 осіб я приділяю максимум уваги кожному учаснику і його ідеї. Даю фідбек, ділюсь досвідом і веду до запуску крок-за-кроком.",
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
    guaranteeText: "Якщо після першої сесії відчуєш, що це не твоє - поверну гроші повністю. Без запитань.",

    testimonialsTag: "Відгуки",
    testimonialsTitle: "Що кажуть учасники",
    testimonials: [
      {
        name: "Дар'я Коваленко",
        role: "EdTech засновниця",
        text: "До TFC я майже рік не рухалась з ідеєю для EdTech-продукту. На третьому тижні Михаель переконав мене викинути 60% концепції - і я так рада, що погодилась. На 10-му тижні у мене було 18 платних бета-користувачів і лист очікування.",
      },
      {
        name: "Аміт Леві",
        role: "SaaS засновник, Тель-Авів",
        text: "Прийшла з набрисками, пішла з реальним бізнесом. Михаель не прикрашає - він прямо каже, де ти втрачаєш час. Ця чесність зекономила мені щонайменше півроку ходіння по колу.",
      },
      {
        name: "Томаш Горак",
        role: "Marketplace стартап, Прага",
        text: "Найкраще - не теорія, а те, що Михаель змушує робити роботу зараз. На 4-му тижні у мене були перші платні клієнти. Я проходив інші програми. Тут сховатись не вийде.",
      },
      {
        name: "Яель Бен-Давід",
        role: "HealthTech засновниця",
        text: "TFC відрізняється тим, що група маленька, все особисте, і Михаель реально слідкує за твоїм прогресом щотижня. Тільки методологія кастдеву окупила всю вартість програми.",
      },
      {
        name: "Олег Марченко",
        role: "B2B SaaS",
        text: "У мого стартапу зараз 40+ користувачів, і минулого тижня я закрив перший річний контракт.",
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

    ctaTitle: "Наступний потік стартує 13 квітня.",
    ctaSubtitle: "Подай заявку, і ми зустрінемось на 15-хвилинному дзвінку, щоб обговорити особисто твій кейс. Якщо ти зрозумієш, що ця програма - те, що тобі потрібно, а я побачу, що в ній є потенціал - добро пожалувати до TFC Акселератору.",
    ctaCohort: "Наступний потік: 13 квітня 2026",
    ctaCTA: "Подати заявку - займе 1 хвилину",

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
    heroTitle: "השקת המוצר שלך\nתוך 12 שבועות",
    heroSubtitle: "תוכנית מנטורינג מאת CEO של חברות בינלאומיות ויזם עם 16 שנים נסיון שבנה 7 מוצרים בישראל ובשוק הגלובלי, עם 2 אקזיטים.",
    heroCohort: "קוהורט הבא: 13 באפריל 2026",
    heroCTA: "הגש מועמדות",
    heroGroup: "קבוצה של 5–7 מייסדים",
    heroSpotsLeft: "נשארו 3 מקומות",

    statProducts: "מוצרים",
    statExits: "אקזיטים",
    statUsers: "משתמשים",
    statCountries: "מדינות",

    problemTag: "הבעיה",
    problemTitle: "נשמע מוכר?",
    problemIntro: "בשנים האחרונות אני עובד כ-CEO בחברות גדולות, עובד כמנהל משברים ומעניק מנטורינג למייסדי סטארטאפים. ב-2026 לבנות הפך כל כך פשוט, שהשאלה היחידה שנשארת היא: \"במה נמשיך?\"",
    problemItems: [
      "יש לי רעיון כבר כמה חודשים - אבל אין לי מושג מאיפה מתחילים",
      "התחלתי לבנות - נתקעתי ועזבתי בשקט",
      "אני לא טכני - מרגיש שאי אפשר לבנות כלום בלי מפתח",
      "אני עושה את זה לבד - אין פידבק, אין דדליינים, אין מי שיגיד לי כשאני הולך בכיוון הלא נכון",
      "אין לי מושג - איך למצוא לקוחות ראשונים ולהתחיל למכור",
    ],
    problemOutro: "אם משהו מזה מתאר אותך - הגעת למקום הנכון.",

    whoTag: "למי מתאים",
    whoTitle: "למי שבתחילת הדרך",
    whoIntro: "אני מלווה ומדריך צעד אחר צעד - מרעיון, MVP או פרוטוטיפ - עד מוצר גמור, בשוק, עם משתמשים אמיתיים. התוכנית מבוססת 100% על הניסיון האישי שלי. רק פרקטיקה, אפס תיאוריה.",
    whoItems: [
      { title: "יש לך רעיון", desc: "אבל איך לבנות אותו כך שיצליח?" },
      { title: "יש לך פרוטוטיפ", desc: "אבל אתה לא בטוח שאתה בונה משהו שישלמו עליו" },
      { title: "אתה לא טכני", desc: "רוצה לבנות עם כלי AI ו-no-code, בלי גיוס מפתחים" },
      { title: "אתה צריך תמיכה", desc: "כי מוטיבציה לבד לא מספיקה, עם קבוצה ומנטור הכל הרבה יותר אפקטיבי" },
    ],

    mentorTag: "המנטור שלכם",
    mentorTitle: "מיכאל ברבריץ׳",
    mentorSubtitle: "CEO MetaMinder, Founder Mikey AI",
    mentorStatement: [
      "16 שנות בעסקים. בגיל 18 בניתי את העסק הראשון שלי בתקציב של 10 דולר - עסק חינוכי. אחרי כן - עסקי מסעדות, e-commerce בישראל, סטארטאפ ספורט גדול. הייתי CEO בחברת פינטק קנדית גדולה וכיום CEO בחברת B2B - MetaMinder, שם פיתחתי מרעיון ללקוחות משלמים ראשונים תוך 7 חודשים. היום יש לנו לקוחות בכל יבשת. במקביל אני מעניק מנטורינג לחברות ולמייסדים בהשקת מוצרים וחברות חדשות.",
    ],
    mentorBio: [
      "16 שנים בעסקים",
      "7 מוצרים · 2 אקזיטים",
      "$0 עד $8M ARR",
      "50,000+ לקוחות ב-107 מדינות",
    ],
    mentorNote: "TFC אקסלרטור זה לא קורס. זו תוכנית חניכות שבה אני משתף את הידע והניסיון המעשי שצברתי דרך כל טעויות אפשריות - ולמדתי מהן.",

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
    phasesTitle: "שלושה שלבים. שניים עשר שבועות. תוצאה אחת.",
    phasesSubtitle: "מטרת האקסלרטור - מוצר מוכן שלך, בשוק, עם משתמשים ראשונים תוך 12 שבועות.",
    phases: [
      { weeks: "שבועות 1–4", title: "בסיס", items: ["וולידציה של הרעיון, מחקר שוק, מודל עסקי, MVP"], result: "בסיס" },
      { weeks: "שבועות 5–8", title: "מוצר", items: ["כלי AI, פרוטוטיפ עובד, דמו שבועי, איטרציות מהירות"], result: "מוצר" },
      { weeks: "שבועות 9–12", title: "השקה", items: ["שיווק, מכירות, כניסה לשוק, משתמשים ראשונים, תוכנית צמיחה ל-3–6 חודשים"], result: "השקה" },
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
    pricingIntro: "בקבוצות קטנות של 5–7 אנשים אני מקדיש תשומת לב מקסימלית לכל משתתף ולרעיון שלו. נותן פידבק, משתף ניסיון ומדריך לקראת השקה צעד אחר צעד.",
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
    guaranteeText: "אם אחרי הפגישה הראשונה תרגיש שזה לא מתאים לך - אחזיר את הכסף במלואו. בלי שאלות.",

    testimonialsTag: "המלצות",
    testimonialsTitle: "מה אומרים המשתתפים",
    testimonials: [
      {
        name: "דריה קובלנקו",
        role: "מייסדת EdTech",
        text: "לפני TFC כמעט שנה לא זזתי מהמקום עם הרעיון שלי ל-EdTech. בשבוע השלישי מיכאל שכנע אותי לזרוק 60% מהקונספט - ואני כל כך שמחה שהסכמתי. בשבוע העשירי היו לי 18 משתמשי בטא משלמים ורשימת הממתנה.",
      },
      {
        name: "עמית לוי",
        role: "מייסד SaaS, תל אביב",
        text: "הגעתי עם רעיונות גולמיים ויצאתי עם עסק אמיתי. מיכאל לא מייפה - הוא אומר לך ישירות איפה אתה מבזבז זמן. הישרות הזאת חסכה לי לפחות חצי שנה של הילוך במעגלים.",
      },
      {
        name: "תומאש הוראק",
        role: "סטארטאפ מרקטפלייס, פראג",
        text: "הדבר הכי טוב - זה לא התיאוריה, אלא שמיכאל גורם לך לעשות את העבודה בפועל. כבר בשבוע הרביעי היו לי לקוחות משלמים ראשונים. נסיתי תוכניות אחרות. פה אין איפה להתחבא.",
      },
      {
        name: "יעל בן-דוד",
        role: "מייסדת HealthTech",
        text: "TFC שונה כי הקבוצה קטנה, הכל אישי, ומיכאל באמת עוקב אחרי ההתקדמות שלך כל שבוע. רק מתודולוגיית הקאסטדב שילמה את כל הערך של התוכנית.",
      },
      {
        name: "אולג מרצ׳נקו",
        role: "B2B SaaS",
        text: "לסטארטאפ שלי יש כיום 40+ משתמשים, ובשבוע שעבר סגרתי את החוזה השנתי הראשון שלי.",
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

    ctaTitle: "הקוהורט הבא מתחיל ב-13 באפריל.",
    ctaSubtitle: "הגש בקשה וניפגש בשיחה קצרה של 15 דקות כדי לשוחח על הקייס הספציפי שלך. אם תרגיש שהתוכנית היא מה שאתה צריך, ואני אראה פוטנציאל - ברוכים הבאים ל-TFC אקסלרטור.",
    ctaCohort: "קוהורט הבא: 13 באפריל 2026",
    ctaCTA: "להגיש בקשה - לוקח דקה אחת",

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
