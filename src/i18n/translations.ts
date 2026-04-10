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
  footerPrivacy: string;
  footerTerms: string;
  footerContact: string;

  privacyTitle: string;
  privacyLastUpdated: string;
  privacySections: { title: string; content: string }[];
  privacyBack: string;

  termsTitle: string;
  termsLastUpdated: string;
  termsSections: { title: string; content: string }[];
  termsBack: string;

  contactTitle: string;
  contactSubtitle: string;
  contactNameLabel: string;
  contactEmailLabel: string;
  contactSubjectLabel: string;
  contactMessageLabel: string;
  contactMessagePlaceholder: string;
  contactSubmit: string;
  contactSuccess: string;
  contactError: string;
  contactBack: string;
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
    problemIntro: "",
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
      { q: "Do I need technical skills?", a: "No. We build using AI and no-code tools - you won't write a single line of code. Several participants in the first cohort couldn't even set up a domain when they started. By the end of the program, they had working products with real users." },
      { q: "What if I don't have an idea yet?", a: "Come anyway. The first weeks of the program are specifically about this - how to find and quickly validate an idea that the market actually needs. About half of participants show up without a clear concept, and that's a completely normal starting point." },
      { q: "How is this different from other courses and accelerators?", a: "The main difference is group size and direct access to me. Each cohort has 5-7 people. I know your product, your blockers, your specific situation. You're not watching pre-recorded videos - you're working in real time and getting feedback on your actual case, not some textbook startup scenario." },
      { q: "How much time do I need each week?", a: "Plan for 4-6 hours: a 2-hour session plus homework and hands-on practice. This isn't 'watch and forget' - between sessions you're actually building and testing things. That's exactly why 12 weeks produces a real result." },
      { q: "Can I join mid-program?", a: "No. The group starts together and goes through the journey together - that's essential for the group dynamics and the trust that builds inside the cohort. Keep an eye on the next cohort start date." },
      { q: "What happens after 12 weeks?", a: "You stay in the community, keep access to all materials, and leave with a 3-6 month growth plan. Many participants continue working together after the program ends - it's a network that stays with you, not something that stops when the program does." },
      { q: "Is there a money-back guarantee?", a: "If after the first session you feel the program isn't right for you - I'll refund you in full. No negotiation, no questions. I have no interest in keeping people in the program who don't feel it's a fit - that's bad for the whole group." },
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
    footerPrivacy: "Privacy Policy",
    footerTerms: "Terms of Service",
    footerContact: "Contact Us",

    privacyTitle: "Privacy Policy",
    privacyLastUpdated: "Last updated: April 2, 2026",
    privacySections: [
      {
        title: "1. Introduction",
        content: "The Founders Circle (\"we\", \"us\", \"our\") respects your privacy and is committed to protecting the personal data you share with us. This Privacy Policy describes what data we collect, how we use it, and your rights regarding your personal information. This policy applies to all interactions with our website, messenger communications (including Meta/Facebook Messenger), application forms, and related services.",
      },
      {
        title: "2. Data We Collect",
        content: "We may collect the following categories of personal data:\n\n• Contact information: name, email address, phone number\n• Application data: information about your startup idea, current stage, preferred language of communication\n• Communication data: messages you send us through Meta Messenger, WhatsApp, or other messaging platforms\n• Technical data: IP address, browser type, device information, cookies\n• Usage data: pages visited, time spent on the site, referral source",
      },
      {
        title: "3. How We Use Your Data",
        content: "We use your personal data for the following purposes:\n\n• Processing your application to the accelerator program\n• Communicating with you about the program, including via Meta Messenger\n• Sending you relevant information about our services and events\n• Improving our website and services\n• Complying with legal obligations\n• Running advertising campaigns, including Meta (Facebook/Instagram) ads with messaging objectives",
      },
      {
        title: "4. Legal Basis for Processing",
        content: "We process your data based on:\n\n• Your consent — when you submit an application form, send us a message, or interact with our ads\n• Legitimate interest — to improve our services and communicate relevant information\n• Contractual necessity — to fulfill our obligations under the accelerator program agreement",
      },
      {
        title: "5. Meta Messenger & Advertising",
        content: "When you interact with our Meta (Facebook/Instagram) advertising campaigns and send us messages through Meta Messenger, we receive your name, profile information, and message content as provided by Meta Platforms. This data is used exclusively to respond to your inquiry and provide information about our accelerator program. We do not sell or share this data with third parties for their own marketing purposes.",
      },
      {
        title: "6. Data Sharing",
        content: "We do not sell your personal data. We may share your data with:\n\n• Service providers who help us operate our platform (hosting, analytics, CRM)\n• Meta Platforms, Inc. — in connection with advertising campaigns and messaging\n• Legal authorities — when required by law\n\nAll third-party service providers are contractually required to protect your data.",
      },
      {
        title: "7. Data Retention",
        content: "We retain your personal data for as long as necessary to fulfill the purposes described in this policy, or as required by law. Application data is typically retained for up to 2 years after your last interaction with us. You may request deletion of your data at any time.",
      },
      {
        title: "8. Your Rights",
        content: "Depending on your location, you may have the following rights:\n\n• Access — request a copy of data we hold about you\n• Correction — request correction of inaccurate data\n• Deletion — request deletion of your personal data\n• Restriction — request that we limit the processing of your data\n• Portability — receive your data in a machine-readable format\n• Objection — object to our processing of your data\n• Withdraw consent — withdraw your consent at any time\n\nTo exercise any of these rights, contact us at the email provided below.",
      },
      {
        title: "9. Cookies",
        content: "Our website uses cookies and similar tracking technologies, including Meta Pixel, for analytics and advertising purposes. You can manage your cookie preferences through your browser settings. For more information about how Meta uses cookies, please refer to Meta's Cookie Policy.",
      },
      {
        title: "10. Contact Us",
        content: "If you have questions about this Privacy Policy or wish to exercise your rights, please contact us:\n\nThe Founders Circle\nEmail: michael@founders-circle.co",
      },
    ],
    privacyBack: "Back to Home",

    termsTitle: "Terms of Service",
    termsLastUpdated: "Last updated: April 10, 2026",
    termsSections: [
      {
        title: "1. Introduction",
        content: "These Terms of Service (\"Terms\") govern your access to and use of the website founders-circle.space and all related services provided by RunEverywhere, Inc. (\"Company\", \"we\", \"us\", \"our\"). By accessing or using our services, you agree to be bound by these Terms. If you do not agree, please do not use our services.",
      },
      {
        title: "2. Services",
        content: "The Founders Circle provides the following services:\n\n• Startup accelerator program — a structured 12-week program for early-stage founders including mentorship, workshops, and peer support\n• Consulting services — one-on-one strategic consulting for founders and startups\n• Educational events — workshops, webinars, and group sessions on topics related to building and scaling startups\n\nThe specific scope, duration, and terms of each service are described on our website and in individual agreements.",
      },
      {
        title: "3. Eligibility",
        content: "Our services are intended for individuals who are at least 18 years of age and have the legal capacity to enter into binding agreements. By using our services, you represent that you meet these requirements.",
      },
      {
        title: "4. Registration and Accounts",
        content: "To access certain services, you may need to submit an application or create an account. You agree to:\n\n• Provide accurate and complete information\n• Keep your account credentials confidential\n• Notify us promptly of any unauthorized access\n• Be responsible for all activity under your account",
      },
      {
        title: "5. Payments and Refunds",
        content: "Payment terms are specified at the time of purchase or enrollment. All payments are processed securely through Stripe.\n\n• Prices are listed in the currency indicated on the website\n• Payment is due at the time of enrollment unless otherwise agreed\n• Refund requests must be submitted within 7 days of purchase\n• Refunds are provided at the Company's discretion based on the circumstances\n• No refund is available after the program has started, unless required by applicable law",
      },
      {
        title: "6. Intellectual Property",
        content: "All content on our website and in our programs — including text, graphics, logos, course materials, presentations, and software — is the property of RunEverywhere, Inc. or its licensors and is protected by intellectual property laws.\n\nYou may not reproduce, distribute, or create derivative works from our content without prior written consent.",
      },
      {
        title: "7. User Conduct",
        content: "When using our services, you agree not to:\n\n• Violate any applicable laws or regulations\n• Infringe on the rights of others\n• Share confidential information from the program with unauthorized parties\n• Use our services for any fraudulent or harmful purpose\n• Interfere with the operation of our website or services",
      },
      {
        title: "8. Limitation of Liability",
        content: "To the maximum extent permitted by law, RunEverywhere, Inc. shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of our services.\n\nOur total liability for any claim related to our services shall not exceed the amount you paid to us in the 12 months preceding the claim.",
      },
      {
        title: "9. Termination",
        content: "We reserve the right to suspend or terminate your access to our services at any time, with or without cause, and with or without notice. Upon termination, your right to use our services ceases immediately.\n\nYou may terminate your participation by contacting us at the email below. Termination does not automatically entitle you to a refund.",
      },
      {
        title: "10. Governing Law and Contact",
        content: "These Terms are governed by the laws of the State of Delaware, United States, without regard to conflict of law principles.\n\nIf you have any questions about these Terms, please contact us:\n\nRunEverywhere, Inc.\nEmail: michael.barbarych@gmail.com",
      },
    ],
    termsBack: "Back to Home",

    contactTitle: "Contact Us",
    contactSubtitle: "Have a question or want to learn more? Send us a message and we'll get back to you shortly.",
    contactNameLabel: "Your Name",
    contactEmailLabel: "Email Address",
    contactSubjectLabel: "Subject",
    contactMessageLabel: "Message",
    contactMessagePlaceholder: "How can we help you?",
    contactSubmit: "Send Message",
    contactSuccess: "Message sent! We'll get back to you soon.",
    contactError: "Something went wrong. Please try again or email us directly.",
    contactBack: "Back to Home",
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
    problemIntro: "",
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
      { q: "Нужны ли технические навыки?", a: "Нет. Мы строим с помощью AI и no-code инструментов - ты не напишешь ни строчки кода. Несколько участников первого потока не умели даже настроить домен. К концу программы у них были работающие продукты с реальными пользователями." },
      { q: "А если у меня пока нет идеи?", a: "Приходи. Первые недели программы как раз про это - как найти и быстро проверить идею, которая реально нужна рынку. Половина участников приходит без чёткого концепта - и это нормальная точка входа." },
      { q: "Чем это отличается от других курсов и акселераторов?", a: "Главное отличие - размер группы и прямой доступ ко мне. В потоке 5-7 человек. Я знаю твой продукт, твои блоки и твою ситуацию. Ты не смотришь записанные видео - ты работаешь в реальном времени и получаешь фидбек на свой конкретный кейс, а не на абстрактный стартап из учебника." },
      { q: "Сколько времени нужно в неделю?", a: "Рассчитывай на 4-6 часов: 2-часовая сессия плюс домашнее задание и практика. Это не «посмотри и забудь» - между сессиями ты реально что-то строишь и проверяешь. Именно поэтому за 12 недель получается реальный результат." },
      { q: "Можно ли присоединиться позже, в середине потока?", a: "Нет. Группа стартует вместе и проходит путь вместе - это принципиально для динамики и доверия внутри команды. Следи за датой старта следующего потока." },
      { q: "Что будет после 12 недель?", a: "Ты остаёшься в комьюнити, сохраняешь доступ к материалам и план роста на следующие 3-6 месяцев. Многие участники продолжают работать вместе - это сеть которая остаётся с тобой, а не заканчивается с программой." },
      { q: "Есть ли гарантия возврата?", a: "Если после первой сессии ты почувствуешь, что программа не для тебя - верну деньги полностью. Без торга и без вопросов. Я не заинтересован держать в программе людей, которым она не подходит - это плохо для всей группы." },
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
    footerPrivacy: "Политика конфиденциальности",
    footerTerms: "Условия использования",
    footerContact: "Связаться с нами",

    privacyTitle: "Политика конфиденциальности",
    privacyLastUpdated: "Последнее обновление: 2 апреля 2026 г.",
    privacySections: [
      {
        title: "1. Введение",
        content: "The Founders Circle («мы», «нас», «наш») уважает вашу конфиденциальность и обязуется защищать персональные данные, которыми вы с нами делитесь. Настоящая Политика конфиденциальности описывает, какие данные мы собираем, как мы их используем и какие у вас есть права в отношении вашей личной информации. Эта политика распространяется на все взаимодействия с нашим сайтом, мессенджерами (включая Meta/Facebook Messenger), формы заявок и связанные сервисы.",
      },
      {
        title: "2. Данные, которые мы собираем",
        content: "Мы можем собирать следующие категории персональных данных:\n\n• Контактная информация: имя, адрес электронной почты, номер телефона\n• Данные заявки: информация о вашей стартап-идее, текущей стадии, предпочтительном языке общения\n• Данные переписки: сообщения, которые вы отправляете нам через Meta Messenger, WhatsApp или другие мессенджеры\n• Технические данные: IP-адрес, тип браузера, информация об устройстве, файлы cookie\n• Данные об использовании: посещённые страницы, время на сайте, источник перехода",
      },
      {
        title: "3. Как мы используем ваши данные",
        content: "Мы используем ваши персональные данные в следующих целях:\n\n• Обработка вашей заявки на участие в программе-акселераторе\n• Связь с вами по вопросам программы, в том числе через Meta Messenger\n• Отправка вам актуальной информации о наших услугах и мероприятиях\n• Улучшение нашего сайта и сервисов\n• Соблюдение требований законодательства\n• Проведение рекламных кампаний, включая рекламу в Meta (Facebook/Instagram) с целями обмена сообщениями",
      },
      {
        title: "4. Правовые основания обработки",
        content: "Мы обрабатываем ваши данные на основании:\n\n• Вашего согласия — когда вы отправляете заявку, пишете нам сообщение или взаимодействуете с нашей рекламой\n• Законного интереса — для улучшения наших услуг и предоставления актуальной информации\n• Договорной необходимости — для выполнения наших обязательств по договору программы-акселератора",
      },
      {
        title: "5. Meta Messenger и реклама",
        content: "Когда вы взаимодействуете с нашими рекламными кампаниями в Meta (Facebook/Instagram) и отправляете нам сообщения через Meta Messenger, мы получаем ваше имя, информацию профиля и содержание сообщения, предоставленные Meta Platforms. Эти данные используются исключительно для ответа на ваш запрос и предоставления информации о нашей программе-акселераторе. Мы не продаём и не передаём эти данные третьим лицам для их собственных маркетинговых целей.",
      },
      {
        title: "6. Передача данных",
        content: "Мы не продаём ваши персональные данные. Мы можем передавать ваши данные:\n\n• Поставщикам услуг, которые помогают нам в работе платформы (хостинг, аналитика, CRM)\n• Meta Platforms, Inc. — в связи с рекламными кампаниями и обменом сообщениями\n• Государственным органам — когда это требуется по закону\n\nВсе сторонние поставщики услуг обязаны по договору защищать ваши данные.",
      },
      {
        title: "7. Хранение данных",
        content: "Мы храним ваши персональные данные столько, сколько необходимо для выполнения целей, описанных в настоящей политике, или в соответствии с требованиями закона. Данные заявки обычно хранятся до 2 лет после вашего последнего взаимодействия с нами. Вы можете запросить удаление ваших данных в любое время.",
      },
      {
        title: "8. Ваши права",
        content: "В зависимости от вашего местоположения вы можете обладать следующими правами:\n\n• Доступ — запросить копию данных, которые мы храним о вас\n• Исправление — запросить исправление неточных данных\n• Удаление — запросить удаление ваших персональных данных\n• Ограничение — запросить ограничение обработки ваших данных\n• Переносимость — получить ваши данные в машиночитаемом формате\n• Возражение — возразить против обработки ваших данных\n• Отзыв согласия — отозвать своё согласие в любое время\n\nДля реализации любого из этих прав свяжитесь с нами по указанному ниже адресу электронной почты.",
      },
      {
        title: "9. Файлы cookie",
        content: "Наш сайт использует файлы cookie и аналогичные технологии отслеживания, включая Meta Pixel, в целях аналитики и рекламы. Вы можете управлять настройками cookie через настройки вашего браузера. Для получения дополнительной информации об использовании файлов cookie компанией Meta обратитесь к Политике cookie Meta.",
      },
      {
        title: "10. Связаться с нами",
        content: "Если у вас есть вопросы по данной Политике конфиденциальности или вы хотите реализовать свои права, свяжитесь с нами:\n\nThe Founders Circle\nEmail: michael@founders-circle.co",
      },
    ],
    privacyBack: "На главную",

    termsTitle: "Условия использования",
    termsLastUpdated: "Последнее обновление: 10 апреля 2026",
    termsSections: [
      {
        title: "1. Введение",
        content: "Настоящие Условия использования («Условия») регулируют доступ и использование веб-сайта founders-circle.space и всех связанных услуг, предоставляемых RunEverywhere, Inc. («Компания», «мы», «нас», «наш»). Используя наши услуги, вы соглашаетесь с настоящими Условиями. Если вы не согласны, пожалуйста, не используйте наши услуги.",
      },
      {
        title: "2. Услуги",
        content: "The Founders Circle предоставляет следующие услуги:\n\n• Программа-акселератор — структурированная 12-недельная программа для фаундеров ранних стадий, включающая менторство, мастер-классы и поддержку коллег\n• Консалтинг — индивидуальные стратегические консультации для фаундеров и стартапов\n• Образовательные мероприятия — воркшопы, вебинары и групповые сессии по темам создания и масштабирования стартапов\n\nКонкретный объём, продолжительность и условия каждой услуги описаны на нашем сайте и в индивидуальных соглашениях.",
      },
      {
        title: "3. Право на участие",
        content: "Наши услуги предназначены для лиц старше 18 лет, обладающих полной дееспособностью для заключения обязывающих соглашений. Используя наши услуги, вы подтверждаете, что соответствуете этим требованиям.",
      },
      {
        title: "4. Регистрация и учётные записи",
        content: "Для доступа к некоторым услугам вам может потребоваться подать заявку или создать учётную запись. Вы обязуетесь:\n\n• Предоставлять точную и полную информацию\n• Хранить данные учётной записи в тайне\n• Незамедлительно уведомлять нас о несанкционированном доступе\n• Нести ответственность за все действия в рамках вашей учётной записи",
      },
      {
        title: "5. Оплата и возвраты",
        content: "Условия оплаты указываются при покупке или регистрации. Все платежи обрабатываются безопасно через Stripe.\n\n• Цены указаны в валюте, обозначенной на сайте\n• Оплата производится в момент регистрации, если не согласовано иное\n• Запросы на возврат должны быть отправлены в течение 7 дней после покупки\n• Возвраты предоставляются по усмотрению Компании в зависимости от обстоятельств\n• Возврат недоступен после начала программы, если иное не предусмотрено законом",
      },
      {
        title: "6. Интеллектуальная собственность",
        content: "Весь контент на нашем сайте и в программах — включая тексты, графику, логотипы, учебные материалы, презентации и программное обеспечение — является собственностью RunEverywhere, Inc. или её лицензиаров и защищён законодательством об интеллектуальной собственности.\n\nВы не вправе воспроизводить, распространять или создавать производные работы на основе нашего контента без предварительного письменного согласия.",
      },
      {
        title: "7. Правила поведения",
        content: "Используя наши услуги, вы обязуетесь не:\n\n• Нарушать действующее законодательство и нормативные акты\n• Нарушать права других лиц\n• Делиться конфиденциальной информацией программы с неуполномоченными лицами\n• Использовать наши услуги в мошеннических или вредоносных целях\n• Вмешиваться в работу нашего сайта или сервисов",
      },
      {
        title: "8. Ограничение ответственности",
        content: "В максимально допустимой законом степени RunEverywhere, Inc. не несёт ответственности за любые косвенные, случайные, специальные, последующие или штрафные убытки, возникающие в связи с использованием наших услуг.\n\nОбщая ответственность за любое требование, связанное с нашими услугами, не превышает сумму, уплаченную вами нам за 12 месяцев, предшествующих требованию.",
      },
      {
        title: "9. Прекращение",
        content: "Мы оставляем за собой право приостановить или прекратить ваш доступ к нашим услугам в любое время, с указанием или без указания причин, с уведомлением или без. После прекращения ваше право на использование услуг прекращается немедленно.\n\nВы можете прекратить участие, связавшись с нами по электронной почте ниже. Прекращение не даёт автоматического права на возврат средств.",
      },
      {
        title: "10. Применимое право и контакты",
        content: "Настоящие Условия регулируются законодательством штата Делавэр, США, без учёта норм о коллизии законов.\n\nПо любым вопросам, связанным с настоящими Условиями, обращайтесь:\n\nRunEverywhere, Inc.\nEmail: michael.barbarych@gmail.com",
      },
    ],
    termsBack: "На главную",

    contactTitle: "Связаться с нами",
    contactSubtitle: "Есть вопрос или хотите узнать больше? Отправьте нам сообщение, и мы ответим в ближайшее время.",
    contactNameLabel: "Ваше имя",
    contactEmailLabel: "Email",
    contactSubjectLabel: "Тема",
    contactMessageLabel: "Сообщение",
    contactMessagePlaceholder: "Чем мы можем вам помочь?",
    contactSubmit: "Отправить",
    contactSuccess: "Сообщение отправлено! Мы свяжемся с вами в ближайшее время.",
    contactError: "Что-то пошло не так. Попробуйте ещё раз или напишите нам напрямую.",
    contactBack: "На главную",
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
    problemIntro: "",
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
      { q: "Чи потрібні технічні навички?", a: "Ні. Ми будуємо за допомогою AI і no-code інструментів - ти не напишеш жодного рядка коду. Кілька учасників першого потоку на початку навіть не вміли налаштувати домен. До кінця програми у них були робочі продукти з реальними користувачами." },
      { q: "А якщо в мене поки немає ідеї?", a: "Приходь. Перші тижні програми саме про це - як знайти і швидко перевірити ідею, яка реально потрібна ринку. Половина учасників приходить без чіткого концепту - і це нормальна точка входу." },
      { q: "Чим це відрізняється від інших курсів і акселераторів?", a: "Головна відмінність - розмір групи і прямий доступ до мене. У потоці 5-7 людей. Я знаю твій продукт, твої блоки і твою ситуацію. Ти не дивишся записані відео - ти працюєш у реальному часі і отримуєш фідбек на свій конкретний кейс, а не на абстрактний стартап з підручника." },
      { q: "Скільки часу потрібно на тиждень?", a: "Розраховуй на 4-6 годин: 2-годинна сесія плюс домашнє завдання і практика. Це не «подивись і забудь» - між сесіями ти реально щось будуєш і перевіряєш. Саме тому за 12 тижнів виходить реальний результат." },
      { q: "Чи можна приєднатися пізніше, в середині потоку?", a: "Ні. Група стартує разом і проходить шлях разом - це принципово для динаміки і довіри всередині команди. Стеж за датою старту наступного потоку." },
      { q: "Що буде після 12 тижнів?", a: "Ти залишаєшся в ком'юніті, зберігаєш доступ до матеріалів і план зростання на наступні 3-6 місяців. Багато учасників продовжують працювати разом - це мережа, яка залишається з тобою, а не закінчується з програмою." },
      { q: "Чи є гарантія повернення грошей?", a: "Якщо після першої сесії ти відчуєш, що програма не для тебе - поверну гроші повністю. Без торгу і без питань. Я не зацікавлений тримати в програмі людей, яким вона не підходить - це погано для всієї групи." },
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
    footerPrivacy: "Політика конфіденційності",
    footerTerms: "Умови використання",
    footerContact: "Зв'язатися з нами",

    privacyTitle: "Політика конфіденційності",
    privacyLastUpdated: "Останнє оновлення: 2 квітня 2026 р.",
    privacySections: [
      {
        title: "1. Вступ",
        content: "The Founders Circle («ми», «нас», «наш») поважає вашу конфіденційність та зобов'язується захищати персональні дані, якими ви з нами ділитесь. Ця Політика конфіденційності описує, які дані ми збираємо, як їх використовуємо та які у вас є права щодо вашої особистої інформації. Ця політика поширюється на всі взаємодії з нашим сайтом, месенджерами (включаючи Meta/Facebook Messenger), формами заявок та пов'язаними сервісами.",
      },
      {
        title: "2. Дані, які ми збираємо",
        content: "Ми можемо збирати такі категорії персональних даних:\n\n• Контактна інформація: ім'я, адреса електронної пошти, номер телефону\n• Дані заявки: інформація про вашу стартап-ідею, поточну стадію, бажану мову спілкування\n• Дані листування: повідомлення, які ви надсилаєте нам через Meta Messenger, WhatsApp або інші месенджери\n• Технічні дані: IP-адреса, тип браузера, інформація про пристрій, файли cookie\n• Дані про використання: відвідані сторінки, час на сайті, джерело переходу",
      },
      {
        title: "3. Як ми використовуємо ваші дані",
        content: "Ми використовуємо ваші персональні дані з такою метою:\n\n• Обробка вашої заявки на участь у програмі-акселераторі\n• Зв'язок з вами щодо програми, зокрема через Meta Messenger\n• Надсилання актуальної інформації про наші послуги та заходи\n• Покращення нашого сайту та сервісів\n• Дотримання вимог законодавства\n• Проведення рекламних кампаній, включаючи рекламу в Meta (Facebook/Instagram) з цілями обміну повідомленнями",
      },
      {
        title: "4. Правові підстави обробки",
        content: "Ми обробляємо ваші дані на підставі:\n\n• Вашої згоди — коли ви надсилаєте заявку, пишете нам повідомлення або взаємодієте з нашою рекламою\n• Законного інтересу — для покращення наших послуг та надання актуальної інформації\n• Договірної необхідності — для виконання наших зобов'язань за договором програми-акселератора",
      },
      {
        title: "5. Meta Messenger та реклама",
        content: "Коли ви взаємодієте з нашими рекламними кампаніями в Meta (Facebook/Instagram) та надсилаєте нам повідомлення через Meta Messenger, ми отримуємо ваше ім'я, інформацію профілю та зміст повідомлення, надані Meta Platforms. Ці дані використовуються виключно для відповіді на ваш запит та надання інформації про нашу програму-акселератор. Ми не продаємо і не передаємо ці дані третім особам для їхніх власних маркетингових цілей.",
      },
      {
        title: "6. Передача даних",
        content: "Ми не продаємо ваші персональні дані. Ми можемо передавати ваші дані:\n\n• Постачальникам послуг, які допомагають нам у роботі платформи (хостинг, аналітика, CRM)\n• Meta Platforms, Inc. — у зв'язку з рекламними кампаніями та обміном повідомленнями\n• Державним органам — коли це вимагається законом\n\nУсі сторонні постачальники послуг зобов'язані за договором захищати ваші дані.",
      },
      {
        title: "7. Зберігання даних",
        content: "Ми зберігаємо ваші персональні дані стільки, скільки необхідно для виконання цілей, описаних у цій політиці, або відповідно до вимог закону. Дані заявки зазвичай зберігаються до 2 років після вашої останньої взаємодії з нами. Ви можете запросити видалення ваших даних у будь-який час.",
      },
      {
        title: "8. Ваші права",
        content: "Залежно від вашого місцезнаходження ви можете мати такі права:\n\n• Доступ — запросити копію даних, які ми зберігаємо про вас\n• Виправлення — запросити виправлення неточних даних\n• Видалення — запросити видалення ваших персональних даних\n• Обмеження — запросити обмеження обробки ваших даних\n• Переносимість — отримати ваші дані у машиночитаному форматі\n• Заперечення — заперечити проти обробки ваших даних\n• Відкликання згоди — відкликати свою згоду у будь-який час\n\nДля реалізації будь-якого з цих прав зв'яжіться з нами за вказаною нижче електронною адресою.",
      },
      {
        title: "9. Файли cookie",
        content: "Наш сайт використовує файли cookie та аналогічні технології відстеження, включаючи Meta Pixel, з метою аналітики та реклами. Ви можете керувати налаштуваннями cookie через налаштування вашого браузера. Для отримання додаткової інформації про використання файлів cookie компанією Meta зверніться до Політики cookie Meta.",
      },
      {
        title: "10. Зв'язатися з нами",
        content: "Якщо у вас є питання щодо цієї Політики конфіденційності або ви хочете реалізувати свої права, зв'яжіться з нами:\n\nThe Founders Circle\nEmail: michael@founders-circle.co",
      },
    ],
    privacyBack: "На головну",

    termsTitle: "Умови використання",
    termsLastUpdated: "Останнє оновлення: 10 квітня 2026",
    termsSections: [
      {
        title: "1. Вступ",
        content: "Ці Умови використання («Умови») регулюють доступ та використання веб-сайту founders-circle.space та всіх пов'язаних послуг, що надаються RunEverywhere, Inc. («Компанія», «ми», «нас», «наш»). Використовуючи наші послуги, ви погоджуєтесь з цими Умовами. Якщо ви не згодні, будь ласка, не користуйтесь нашими послугами.",
      },
      {
        title: "2. Послуги",
        content: "The Founders Circle надає такі послуги:\n\n• Програма-акселератор — структурована 12-тижнева програма для засновників ранніх стадій, що включає менторство, майстер-класи та підтримку колег\n• Консалтинг — індивідуальні стратегічні консультації для засновників та стартапів\n• Освітні заходи — воркшопи, вебінари та групові сесії з тем створення та масштабування стартапів\n\nКонкретний обсяг, тривалість та умови кожної послуги описані на нашому сайті та в індивідуальних угодах.",
      },
      {
        title: "3. Право на участь",
        content: "Наші послуги призначені для осіб старше 18 років, які мають повну дієздатність для укладання зобов'язуючих угод. Використовуючи наші послуги, ви підтверджуєте, що відповідаєте цим вимогам.",
      },
      {
        title: "4. Реєстрація та облікові записи",
        content: "Для доступу до деяких послуг вам може знадобитися подати заявку або створити обліковий запис. Ви зобов'язуєтесь:\n\n• Надавати точну та повну інформацію\n• Зберігати дані облікового запису в таємниці\n• Негайно повідомляти нас про несанкціонований доступ\n• Нести відповідальність за всі дії в рамках вашого облікового запису",
      },
      {
        title: "5. Оплата та повернення",
        content: "Умови оплати зазначаються при купівлі або реєстрації. Усі платежі обробляються безпечно через Stripe.\n\n• Ціни вказані у валюті, зазначеній на сайті\n• Оплата здійснюється в момент реєстрації, якщо не домовлено інше\n• Запити на повернення повинні бути надіслані протягом 7 днів після купівлі\n• Повернення надається на розсуд Компанії залежно від обставин\n• Повернення недоступне після початку програми, якщо інше не передбачено законом",
      },
      {
        title: "6. Інтелектуальна власність",
        content: "Увесь контент на нашому сайті та в програмах — включаючи тексти, графіку, логотипи, навчальні матеріали, презентації та програмне забезпечення — є власністю RunEverywhere, Inc. або її ліцензіарів та захищений законодавством про інтелектуальну власність.\n\nВи не маєте права відтворювати, поширювати або створювати похідні роботи на основі нашого контенту без попереднього письмового дозволу.",
      },
      {
        title: "7. Правила поведінки",
        content: "Використовуючи наші послуги, ви зобов'язуєтесь не:\n\n• Порушувати чинне законодавство та нормативні акти\n• Порушувати права інших осіб\n• Поширювати конфіденційну інформацію програми неуповноваженим особам\n• Використовувати наші послуги в шахрайських або шкідливих цілях\n• Втручатися в роботу нашого сайту або сервісів",
      },
      {
        title: "8. Обмеження відповідальності",
        content: "В максимально допустимій законом мірі RunEverywhere, Inc. не несе відповідальності за будь-які непрямі, випадкові, спеціальні, наслідкові або штрафні збитки, що виникають у зв'язку з використанням наших послуг.\n\nЗагальна відповідальність за будь-яку вимогу, пов'язану з нашими послугами, не перевищує суму, сплачену вами нам за 12 місяців, що передують вимозі.",
      },
      {
        title: "9. Припинення",
        content: "Ми залишаємо за собою право призупинити або припинити ваш доступ до наших послуг у будь-який час, із зазначенням або без зазначення причин, з повідомленням або без. Після припинення ваше право на використання послуг припиняється негайно.\n\nВи можете припинити участь, зв'язавшись з нами за електронною поштою нижче. Припинення не дає автоматичного права на повернення коштів.",
      },
      {
        title: "10. Застосовне право та контакти",
        content: "Ці Умови регулюються законодавством штату Делавер, США, без урахування норм про колізію законів.\n\nЗ будь-яких питань щодо цих Умов звертайтесь:\n\nRunEverywhere, Inc.\nEmail: michael.barbarych@gmail.com",
      },
    ],
    termsBack: "На головну",

    contactTitle: "Зв'язатися з нами",
    contactSubtitle: "Маєте питання або хочете дізнатися більше? Надішліть нам повідомлення, і ми відповімо найближчим часом.",
    contactNameLabel: "Ваше ім'я",
    contactEmailLabel: "Email",
    contactSubjectLabel: "Тема",
    contactMessageLabel: "Повідомлення",
    contactMessagePlaceholder: "Чим ми можемо вам допомогти?",
    contactSubmit: "Надіслати",
    contactSuccess: "Повідомлення надіслано! Ми зв'яжемося з вами найближчим часом.",
    contactError: "Щось пішло не так. Спробуйте ще раз або напишіть нам напряму.",
    contactBack: "На головну",
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
    problemIntro: "",
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
      { q: "האם צריך ידע טכני?", a: "לא. אנחנו בונים עם כלי AI ו-no-code - לא תכתוב שורת קוד אחת. כמה משתתפים בקוהורט הראשון לא ידעו אפילו להגדיר דומיין בהתחלה. עד סוף התוכנית היו להם מוצרים עובדים עם משתמשים אמיתיים." },
      { q: "מה אם עדיין אין לי רעיון?", a: "תבוא. השבועות הראשונים של התוכנית הם בדיוק על זה - איך למצוא ולבדוק במהירות רעיון שהשוק באמת צריך. בערך חצי מהמשתתפים מגיעים בלי קונספט ברור - וזו נקודת התחלה לגמרי תקינה." },
      { q: "במה זה שונה מקורסים ואקסלרטורים אחרים?", a: "ההבדל העיקרי הוא גודל הקבוצה וגישה ישירה אליי. בכל קוהורט יש 5-7 אנשים. אני מכיר את המוצר שלך, את החסמים שלך, את המצב הספציפי שלך. אתה לא צופה בסרטונים מוקלטים - אתה עובד בזמן אמת ומקבל פידבק על הקייס הספציפי שלך, לא על סטארטאפ דמיוני מספר לימוד." },
      { q: "כמה זמן צריך בשבוע?", a: "תכנן על 4-6 שעות: פגישה של שעתיים פלוס שיעורי בית ותרגול מעשי. זה לא 'תראה ותשכח' - בין הפגישות אתה ממש בונה ובודק דברים. בדיוק בגלל זה 12 שבועות מייצרות תוצאה אמיתית." },
      { q: "אפשר להצטרף באמצע?", a: "לא. הקבוצה מתחילה ביחד ועוברת את הדרך ביחד - זה קריטי לדינמיקה ולאמון שנבנה בתוך הקוהורט. תעקוב אחרי תאריך הפתיחה של הקוהורט הבא." },
      { q: "מה קורה אחרי 12 שבועות?", a: "אתה נשאר בקהילה, שומר גישה לכל החומרים ויוצא עם תוכנית צמיחה ל-3-6 חודשים. הרבה משתתפים ממשיכים לעבוד ביחד אחרי שהתוכנית מסתיימת - זו רשת שנשארת איתך, לא משהו שנגמר עם התוכנית." },
      { q: "יש אחריות להחזר כסף?", a: "אם אחרי הפגישה הראשונה תרגיש שהתוכנית לא בשבילך - אחזיר לך את הכסף במלואו. בלי מיקוח ובלי שאלות. אין לי עניין להחזיק בתוכנית אנשים שהיא לא מתאימה להם - זה רע לכל הקבוצה." },
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
    footerPrivacy: "מדיניות פרטיות",
    footerTerms: "תנאי שימוש",
    footerContact: "צור קשר",

    privacyTitle: "מדיניות פרטיות",
    privacyLastUpdated: "עדכון אחרון: 2 באפריל 2026",
    privacySections: [
      {
        title: "1. מבוא",
        content: "The Founders Circle (\"אנחנו\", \"אנו\", \"שלנו\") מכבדת את פרטיותכם ומחויבת להגן על המידע האישי שאתם משתפים איתנו. מדיניות פרטיות זו מתארת אילו נתונים אנו אוספים, כיצד אנו משתמשים בהם ומה זכויותיכם בנוגע למידע האישי שלכם. מדיניות זו חלה על כל האינטראקציות עם האתר שלנו, תקשורת במסנג'ר (כולל Meta/Facebook Messenger), טפסי הרשמה ושירותים קשורים.",
      },
      {
        title: "2. מידע שאנו אוספים",
        content: "אנו עשויים לאסוף את הקטגוריות הבאות של מידע אישי:\n\n• פרטי קשר: שם, כתובת דוא\"ל, מספר טלפון\n• נתוני הרשמה: מידע על רעיון הסטארטאפ שלכם, שלב נוכחי, שפת תקשורת מועדפת\n• נתוני תקשורת: הודעות שאתם שולחים לנו דרך Meta Messenger, WhatsApp או פלטפורמות הודעות אחרות\n• נתונים טכניים: כתובת IP, סוג דפדפן, מידע על המכשיר, עוגיות\n• נתוני שימוש: דפים שנצפו, זמן שהייה באתר, מקור ההפניה",
      },
      {
        title: "3. כיצד אנו משתמשים במידע שלכם",
        content: "אנו משתמשים במידע האישי שלכם למטרות הבאות:\n\n• עיבוד הבקשה שלכם לתוכנית האקסלרטור\n• תקשורת איתכם בנוגע לתוכנית, כולל דרך Meta Messenger\n• שליחת מידע רלוונטי על השירותים והאירועים שלנו\n• שיפור האתר והשירותים שלנו\n• עמידה בדרישות חוקיות\n• הפעלת קמפיינים פרסומיים, כולל מודעות Meta (Facebook/Instagram) עם יעדי הודעות",
      },
      {
        title: "4. בסיס חוקי לעיבוד",
        content: "אנו מעבדים את המידע שלכם על בסיס:\n\n• הסכמתכם — כאשר אתם שולחים טופס הרשמה, שולחים לנו הודעה או מתקשרים עם הפרסומות שלנו\n• אינטרס לגיטימי — לשיפור השירותים שלנו ותקשורת מידע רלוונטי\n• הכרח חוזי — למילוי התחייבויותינו במסגרת הסכם תוכנית האקסלרטור",
      },
      {
        title: "5. Meta Messenger ופרסום",
        content: "כאשר אתם מתקשרים עם קמפיינים פרסומיים שלנו ב-Meta (Facebook/Instagram) ושולחים לנו הודעות דרך Meta Messenger, אנו מקבלים את שמכם, מידע הפרופיל ותוכן ההודעה כפי שסופקו על ידי Meta Platforms. מידע זה משמש אך ורק למענה לפנייתכם ולמתן מידע על תוכנית האקסלרטור שלנו. אנו לא מוכרים או משתפים מידע זה עם צדדים שלישיים למטרות שיווקיות שלהם.",
      },
      {
        title: "6. שיתוף מידע",
        content: "אנו לא מוכרים את המידע האישי שלכם. אנו עשויים לשתף את המידע שלכם עם:\n\n• ספקי שירות המסייעים לנו בהפעלת הפלטפורמה (אחסון, אנליטיקה, CRM)\n• Meta Platforms, Inc. — בקשר לקמפיינים פרסומיים והודעות\n• רשויות חוקיות — כאשר נדרש על פי חוק\n\nכל ספקי השירות של צדדים שלישיים מחויבים חוזית להגן על המידע שלכם.",
      },
      {
        title: "7. שמירת מידע",
        content: "אנו שומרים את המידע האישי שלכם כל עוד נדרש למילוי המטרות המתוארות במדיניות זו, או כנדרש על פי חוק. נתוני הרשמה נשמרים בדרך כלל עד שנתיים לאחר האינטראקציה האחרונה שלכם איתנו. תוכלו לבקש מחיקת המידע שלכם בכל עת.",
      },
      {
        title: "8. הזכויות שלכם",
        content: "בהתאם למיקומכם, ייתכן שיש לכם את הזכויות הבאות:\n\n• גישה — לבקש עותק של המידע שאנו מחזיקים עליכם\n• תיקון — לבקש תיקון מידע לא מדויק\n• מחיקה — לבקש מחיקת המידע האישי שלכם\n• הגבלה — לבקש הגבלת עיבוד המידע שלכם\n• ניידות — לקבל את המידע שלכם בפורמט קריא מכונה\n• התנגדות — להתנגד לעיבוד המידע שלכם\n• ביטול הסכמה — לבטל את הסכמתכם בכל עת\n\nלמימוש כל אחת מזכויות אלה, צרו איתנו קשר בדוא\"ל המצוין להלן.",
      },
      {
        title: "9. עוגיות",
        content: "האתר שלנו משתמש בעוגיות וטכנולוגיות מעקב דומות, כולל Meta Pixel, למטרות אנליטיקה ופרסום. תוכלו לנהל את העדפות העוגיות שלכם דרך הגדרות הדפדפן. למידע נוסף על השימוש של Meta בעוגיות, עיינו במדיניות העוגיות של Meta.",
      },
      {
        title: "10. צרו קשר",
        content: "אם יש לכם שאלות לגבי מדיניות פרטיות זו או שאתם מעוניינים לממש את זכויותיכם, צרו איתנו קשר:\n\nThe Founders Circle\nEmail: michael@founders-circle.co",
      },
    ],
    privacyBack: "חזרה לעמוד הראשי",

    termsTitle: "תנאי שימוש",
    termsLastUpdated: "עדכון אחרון: 10 באפריל 2026",
    termsSections: [
      {
        title: "1. מבוא",
        content: "תנאי שימוש אלה (\"התנאים\") מסדירים את הגישה והשימוש באתר founders-circle.space ובכל השירותים הקשורים שמסופקים על ידי RunEverywhere, Inc. (\"החברה\", \"אנחנו\", \"שלנו\"). בשימוש בשירותינו, אתה מסכים לתנאים אלה. אם אינך מסכים, אנא אל תשתמש בשירותינו.",
      },
      {
        title: "2. שירותים",
        content: "The Founders Circle מספק את השירותים הבאים:\n\n• תוכנית אקסלרטור — תוכנית מובנית של 12 שבועות למייסדים בשלבים מוקדמים הכוללת מנטורינג, סדנאות ותמיכת עמיתים\n• שירותי ייעוץ — ייעוץ אסטרטגי אישי למייסדים וסטארטאפים\n• אירועים חינוכיים — סדנאות, וובינרים ומפגשים קבוצתיים בנושאי בנייה והרחבת סטארטאפים\n\nההיקף, משך הזמן והתנאים של כל שירות מפורטים באתר שלנו ובהסכמים אישיים.",
      },
      {
        title: "3. זכאות",
        content: "השירותים שלנו מיועדים לאנשים בני 18 ומעלה בעלי כשרות משפטית לחתום על הסכמים מחייבים. בשימוש בשירותינו, אתה מצהיר שאתה עומד בדרישות אלה.",
      },
      {
        title: "4. רישום וחשבונות",
        content: "לצורך גישה לשירותים מסוימים, ייתכן שתצטרך להגיש בקשה או ליצור חשבון. אתה מתחייב:\n\n• לספק מידע מדויק ומלא\n• לשמור על סודיות פרטי החשבון\n• להודיע לנו מיד על גישה לא מורשית\n• לשאת באחריות לכל הפעילות בחשבונך",
      },
      {
        title: "5. תשלומים והחזרים",
        content: "תנאי התשלום מצוינים בעת הרכישה או ההרשמה. כל התשלומים מעובדים באופן מאובטח דרך Stripe.\n\n• המחירים מצוינים במטבע המופיע באתר\n• התשלום מתבצע בעת ההרשמה, אלא אם סוכם אחרת\n• בקשות להחזר יש להגיש תוך 7 ימים מהרכישה\n• החזרים ניתנים לפי שיקול דעת החברה בהתאם לנסיבות\n• אין החזר לאחר תחילת התוכנית, אלא אם נדרש על פי חוק",
      },
      {
        title: "6. קניין רוחני",
        content: "כל התוכן באתר ובתוכניות שלנו — כולל טקסטים, גרפיקה, לוגואים, חומרי לימוד, מצגות ותוכנה — הוא רכושה של RunEverywhere, Inc. או בעלי הרישיון שלה ומוגן בחוקי קניין רוחני.\n\nאינך רשאי לשכפל, להפיץ או ליצור עבודות נגזרות מהתוכן שלנו ללא הסכמה מראש בכתב.",
      },
      {
        title: "7. כללי התנהגות",
        content: "בשימוש בשירותינו, אתה מתחייב שלא:\n\n• להפר חוקים או תקנות חלים\n• לפגוע בזכויות של אחרים\n• לשתף מידע סודי מהתוכנית עם גורמים לא מורשים\n• להשתמש בשירותינו למטרות הונאה או מזיקות\n• להפריע לפעולת האתר או השירותים שלנו",
      },
      {
        title: "8. הגבלת אחריות",
        content: "במידה המרבית המותרת בחוק, RunEverywhere, Inc. לא תישא באחריות לכל נזק עקיף, מקרי, מיוחד, תוצאתי או עונשי הנובע משימושך בשירותינו.\n\nהאחריות הכוללת שלנו לכל תביעה הקשורה לשירותינו לא תעלה על הסכום ששילמת לנו ב-12 החודשים שקדמו לתביעה.",
      },
      {
        title: "9. סיום",
        content: "אנו שומרים לעצמנו את הזכות להשעות או לסיים את גישתך לשירותינו בכל עת, עם או בלי סיבה, עם או בלי הודעה מוקדמת. עם הסיום, זכותך להשתמש בשירותים מפסיקה מיד.\n\nאתה יכול לסיים את השתתפותך על ידי פנייה אלינו בדוא\"ל שלהלן. סיום אינו מזכה אוטומטית בהחזר.",
      },
      {
        title: "10. דין חל ויצירת קשר",
        content: "תנאים אלה כפופים לחוקי מדינת דלאוור, ארצות הברית, ללא התחשבות בכללי ברירת דין.\n\nלכל שאלה בנוגע לתנאים אלה, אנא פנו אלינו:\n\nRunEverywhere, Inc.\nEmail: michael.barbarych@gmail.com",
      },
    ],
    termsBack: "חזרה לעמוד הראשי",

    contactTitle: "צור קשר",
    contactSubtitle: "יש לך שאלה או רוצה לדעת עוד? שלח לנו הודעה ונחזור אליך בהקדם.",
    contactNameLabel: "שם מלא",
    contactEmailLabel: "כתובת אימייל",
    contactSubjectLabel: "נושא",
    contactMessageLabel: "הודעה",
    contactMessagePlaceholder: "כיצד נוכל לעזור לך?",
    contactSubmit: "שלח הודעה",
    contactSuccess: "ההודעה נשלחה! נחזור אליך בהקדם.",
    contactError: "משהו השתבש. נסה שוב או שלח לנו אימייל ישירות.",
    contactBack: "חזרה לעמוד הראשי",
  },
};
