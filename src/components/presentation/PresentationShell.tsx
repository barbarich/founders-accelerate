import { useState, useEffect, useCallback, useRef } from "react";
import { ChevronLeft, ChevronRight, Maximize, Minimize, Grid3X3, X, ChevronsRight } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import ScaledSlide from "./ScaledSlide";

// Slides
import Slide01Title from "./slides/Slide01Title";
import Slide02WhoAmI from "./slides/Slide02WhoAmI";
import SlideTimeline from "./slides/SlideTimeline";
import Slide10Lessons from "./slides/Slide10Lessons";
import Slide11PainPoints from "./slides/Slide11PainPoints";
import Slide12WhyHappens from "./slides/Slide12WhyHappens";
import Slide13Format from "./slides/Slide13Format";
import Slide14Results from "./slides/Slide14Results";
import Slide15Phases from "./slides/Slide15Phases";
import Slide16Comparison from "./slides/Slide16Comparison";
import Slide17Demo from "./slides/Slide17Demo";
import Slide18Pricing from "./slides/Slide18Pricing";
import Slide19QA from "./slides/Slide19QA";
import Slide20CTA from "./slides/Slide20CTA";

import brich1 from "@/assets/slides/brich-1.jpg";
import skyroom1 from "@/assets/slides/skyroom-1.jpg";
import perapuff1 from "@/assets/slides/perapuff-1.jpg";
import runeverywhere1 from "@/assets/slides/runeverywhere-1.jpg";
import forextester1 from "@/assets/slides/forextester-1.jpg";
import metaminder1 from "@/assets/slides/metaminder-1.jpg";
import mymikey1 from "@/assets/slides/mymikey-1.jpg";

const timelineSlides = [
  { period: "2009–2013", title: "B-rich Education", subtitle: "EdTech · Первый бизнес · 18 лет", description: "В 18 лет создал первый бизнес с бюджетом $10. Из одной комнаты и двух групп построил одну из крупнейших школ в городе — 2000+ студентов, 20 преподавателей.", highlight: "С $10 до 2000+ студентов", image: brich1 },
  { period: "2013–2016", title: "Sky Room", subtitle: "HoReCa · Ресторан · Экзит", description: "2 ресторана с нуля: привлечение партнёров и инвесторов, анализ рынка, концепция, строительство, меню, операционное управление, маркетинг. Продажа бизнеса перед релокацией в Израиль.", highlight: "Полный цикл → экзит", image: skyroom1 },
  { period: "2018–2021", title: "פופים PERA", subtitle: "E-commerce · Экзит", description: "Без опыта работы в Израиле и почти без иврита — нашёл нишу, понял аудиторию и построил работающий бизнес. За 1.5 года конкурировали наравне с компаниями, которые были 20 лет на рынке. 5000+ продаж. Продал как готовый бизнес.", highlight: "С нуля до лидера ниши → экзит", image: perapuff1, imageContain: true },
  { period: "2020–2022", title: "RunEverywhere", subtitle: "Health & Fitness · B2C · Экзит", description: "Стартап, ставший прибыльным с первого месяца. Запуск в правильное время — когда был яркий запрос аудитории. 50,000+ платящих клиентов в 107 странах, команда 60 человек. Комьюнити как ключ к удержанию пользователей.", highlight: "50K+ клиентов · 107 стран", image: runeverywhere1 },
  { period: "2023–2024", title: "ForexTester", subtitle: "FinTech · B2C · CEO · Кризис-менеджмент", description: "Пришёл как кризис-менеджер и CEO. Оптимизировал команды, нанимал людей, строил сложные технические продукты. Результат: чистая прибыль +30%, операционные расходы −45%, новые продукты запущены.", highlight: "Прибыль +30% · расходы −45%", image: forextester1, imageContain: true },
  { period: "2024–н.в.", title: "MetaMinder", subtitle: "B2B SaaS · EdTech · CEO / CPO / CMO", description: "AI-платформа для обучения сотрудников. Сам выполняю роли CEO, CPO и CMO — настроил процессы и автоматизировал с помощью AI. От идеи до первых платящих B2B клиентов за 7 месяцев.", highlight: "От идеи до платящих клиентов за 7 месяцев", image: metaminder1 },
  { period: "2025–н.в.", title: "mymikey.ai", subtitle: "AI · Dating · Стартап", description: "AI-матчмейкер нового поколения. Строю прямо сейчас с помощью AI-инструментов. Один человек = полная разработка продукта.", highlight: "Строю прямо сейчас", image: mymikey1, imageContain: true },
];

const slideNames = [
  "The Founders Circle",
  "Кто я",
  "B-rich Education",
  "Sky Room",
  "פופים PERA",
  "RunEverywhere",
  "ForexTester",
  "MetaMinder",
  "mymikey.ai",
  "Чему научил путь",
  "Знакомо?",
  "Почему так происходит",
  "Формат программы",
  "Что получите",
  "Как устроена программа",
  "Сравнение с курсами",
  "Мини-демо",
  "Форматы участия",
  "Q&A",
  "Регистрация",
];

function getSlideContent(index: number) {
  if (index === 0) return <Slide01Title />;
  if (index === 1) return <Slide02WhoAmI />;
  if (index >= 2 && index <= 8) {
    const t = timelineSlides[index - 2];
    return <SlideTimeline {...t} index={index - 2} />;
  }
  if (index === 9) return <Slide10Lessons />;
  if (index === 10) return <Slide11PainPoints />;
  if (index === 11) return <Slide12WhyHappens />;
  if (index === 12) return <Slide13Format />;
  if (index === 13) return <Slide14Results />;
  if (index === 14) return <Slide15Phases />;
  if (index === 15) return <Slide16Comparison />;
  if (index === 16) return <Slide17Demo />;
  if (index === 17) return <Slide18Pricing />;
  if (index === 18) return <Slide19QA />;
  if (index === 19) return <Slide20CTA />;
  return null;
}

const TOTAL = 20;

export default function PresentationShell() {
  const isMobile = useIsMobile();
  const [current, setCurrent] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);
  const [showGrid, setShowGrid] = useState(false);
  const [controlsVisible, setControlsVisible] = useState(true);
  const [swipeHintVisible, setSwipeHintVisible] = useState(true);

  const touchStartRef = useRef<{ x: number; y: number } | null>(null);

  const next = useCallback(() => {
    setCurrent((c) => Math.min(c + 1, TOTAL - 1));
    setSwipeHintVisible(false);
  }, []);
  const prev = useCallback(() => setCurrent((c) => Math.max(c - 1, 0)), []);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " ") { e.preventDefault(); next(); }
      if (e.key === "ArrowLeft") { e.preventDefault(); prev(); }
      if (e.key === "Escape" && showGrid) { setShowGrid(false); return; }
      if (e.key === "Escape" && isFullscreen) {
        document.exitFullscreen?.();
      }
      if (e.key === "F5") {
        e.preventDefault();
        document.documentElement.requestFullscreen?.();
      }
      if (e.key === "g" || e.key === "G") setShowGrid((v) => !v);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [next, prev, showGrid, isFullscreen]);

  useEffect(() => {
    const handler = () => setIsFullscreen(!!document.fullscreenElement);
    document.addEventListener("fullscreenchange", handler);
    return () => document.removeEventListener("fullscreenchange", handler);
  }, []);

  // Auto-hide controls
  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;
    const show = () => {
      setControlsVisible(true);
      clearTimeout(timer);
      timer = setTimeout(() => setControlsVisible(false), 3000);
    };
    window.addEventListener("mousemove", show);
    show();
    return () => {
      window.removeEventListener("mousemove", show);
      clearTimeout(timer);
    };
  }, []);

  const toggleFullscreen = () => {
    if (document.fullscreenElement) document.exitFullscreen?.();
    else document.documentElement.requestFullscreen?.();
  };

  // Grid view
  if (showGrid) {
    return (
      <div className="w-full h-screen bg-[hsl(var(--background))] overflow-auto p-8">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-semibold text-foreground">Все слайды</h2>
          <button onClick={() => setShowGrid(false)} className="p-2 text-muted-foreground hover:text-foreground transition-colors">
            <X size={24} />
          </button>
        </div>
        <div className={`grid ${isMobile ? 'grid-cols-2 gap-2' : 'grid-cols-4 gap-4'}`}>
          {Array.from({ length: TOTAL }, (_, i) => (
            <button
              key={i}
              onClick={() => { setCurrent(i); setShowGrid(false); }}
              className={`aspect-video relative rounded-lg overflow-hidden border-2 transition-all hover:border-primary ${
                i === current ? "border-primary ring-2 ring-primary/30" : "border-border"
              }`}
            >
              <ScaledSlide>{getSlideContent(i)}</ScaledSlide>
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 to-transparent p-3">
                <span className="text-xs text-white/80">{i + 1}. {slideNames[i]}</span>
              </div>
            </button>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-screen bg-[hsl(var(--background))] flex overflow-hidden relative">
      {/* Sidebar - desktop only */}
      {!isMobile && showSidebar && (
        <div className="w-[220px] h-full bg-[hsl(var(--card))] border-r border-border overflow-y-auto shrink-0 flex flex-col">
          <div className="p-3 border-b border-border flex items-center justify-between">
            <span className="text-xs text-muted-foreground font-medium uppercase tracking-wider">Слайды</span>
            <button onClick={() => setShowSidebar(false)} className="text-muted-foreground hover:text-foreground">
              <X size={14} />
            </button>
          </div>
          {Array.from({ length: TOTAL }, (_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`p-2 mx-2 my-1 rounded aspect-video relative overflow-hidden border transition-all ${
                i === current ? "border-primary" : "border-transparent hover:border-border"
              }`}
            >
              <ScaledSlide>{getSlideContent(i)}</ScaledSlide>
              <div className="absolute bottom-0 inset-x-0 bg-black/60 px-1.5 py-0.5">
                <span className="text-[9px] text-white/70">{i + 1}</span>
              </div>
            </button>
          ))}
        </div>
      )}

      {/* Main canvas */}
      <div className="flex-1 relative flex flex-col">
        {/* Slide */}
        <div
          className="flex-1 relative"
          onClick={next}
          onTouchStart={(e) => {
            const t = e.touches[0];
            touchStartRef.current = { x: t.clientX, y: t.clientY };
          }}
          onTouchEnd={(e) => {
            if (!touchStartRef.current) return;
            const t = e.changedTouches[0];
            const dx = t.clientX - touchStartRef.current.x;
            const dy = t.clientY - touchStartRef.current.y;
            touchStartRef.current = null;
            if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy)) {
              if (dx < 0) next();
              else prev();
            }
          }}
        >
          <ScaledSlide key={current}>{getSlideContent(current)}</ScaledSlide>

          {/* Swipe hint for mobile on first slide */}
          {isMobile && current === 0 && swipeHintVisible && (
            <div className="absolute bottom-20 inset-x-0 flex justify-center animate-pulse pointer-events-none">
              <div className="flex items-center gap-2 bg-[hsl(var(--card)/0.8)] backdrop-blur-sm rounded-full px-4 py-2">
                <span className="text-xs text-muted-foreground">Свайпните</span>
                <ChevronsRight size={16} className="text-muted-foreground animate-bounce-x" />
              </div>
            </div>
          )}
        </div>

        {/* Bottom controls */}
        <div
          className={`absolute bottom-0 inset-x-0 transition-opacity duration-300 ${
            controlsVisible ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          {/* Progress bar */}
          <div className="h-[3px] bg-[hsl(var(--border))]">
            <div
              className="h-full bg-primary transition-all duration-300"
              style={{ width: `${((current + 1) / TOTAL) * 100}%` }}
            />
          </div>

          {/* Controls */}
          <div className="flex items-center justify-between px-6 py-3 bg-[hsl(var(--card)/0.9)] backdrop-blur-sm">
            <div className="flex items-center gap-3">
              {!showSidebar && (
                <button
                  onClick={(e) => { e.stopPropagation(); setShowSidebar(true); }}
                  className="p-2 text-muted-foreground hover:text-foreground transition-colors rounded"
                  title="Показать слайды"
                >
                  <ChevronRight size={16} />
                </button>
              )}
              <button
                onClick={(e) => { e.stopPropagation(); setShowGrid(true); }}
                className="p-2 text-muted-foreground hover:text-foreground transition-colors rounded"
                title="Все слайды (G)"
              >
                <Grid3X3 size={16} />
              </button>
            </div>

            <div className="flex items-center gap-4">
              <button
                onClick={(e) => { e.stopPropagation(); prev(); }}
                className="p-2 text-muted-foreground hover:text-foreground transition-colors rounded disabled:opacity-30"
                disabled={current === 0}
              >
                <ChevronLeft size={18} />
              </button>
              <span className="text-sm text-muted-foreground font-mono min-w-[60px] text-center">
                {current + 1} / {TOTAL}
              </span>
              <button
                onClick={(e) => { e.stopPropagation(); next(); }}
                className="p-2 text-muted-foreground hover:text-foreground transition-colors rounded disabled:opacity-30"
                disabled={current === TOTAL - 1}
              >
                <ChevronRight size={18} />
              </button>
            </div>

            <button
              onClick={(e) => { e.stopPropagation(); toggleFullscreen(); }}
              className="p-2 text-muted-foreground hover:text-foreground transition-colors rounded"
              title="Полный экран (F5)"
            >
              {isFullscreen ? <Minimize size={16} /> : <Maximize size={16} />}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
