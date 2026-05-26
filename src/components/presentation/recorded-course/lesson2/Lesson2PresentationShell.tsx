import { useState, useEffect, useCallback, useRef } from "react";
import { ChevronLeft, ChevronRight, Maximize, Minimize, Grid3X3, X, ChevronsRight, ArrowLeft } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { useNavigate } from "react-router-dom";
import ScaledSlide from "../../ScaledSlide";

import L2Slide01Welcome from "./L2Slide01Welcome";
import L2Slide02MainMistake from "./L2Slide02MainMistake";
import L2Slide03ThreeThings from "./L2Slide03ThreeThings";
import L2BlockHeader from "./L2BlockHeader";
import L2SlideMyWorkflow from "./L2SlideMyWorkflow";
import L2SlideWhyPrototype from "./L2SlideWhyPrototype";
import L2SlidePrototypeStack from "./L2SlidePrototypeStack";
import L2SlideSurveysIntro from "./L2SlideSurveysIntro";
import L2SlideSurveysStack from "./L2SlideSurveysStack";
import L2SlideSurveysDistribution from "./L2SlideSurveysDistribution";
import L2SlidePassFail from "./L2SlidePassFail";
import L2Slide04CompetitorLevels from "./L2Slide04CompetitorLevels";
import L2Slide05WhatToCheck from "./L2Slide05WhatToCheck";
import L2Slide06MetaMinder from "./L2Slide06MetaMinder";
import L2Slide07Perplexity from "./L2Slide07Perplexity";
import L2Slide08PerplexityPrompts from "./L2Slide08PerplexityPrompts";
import L2Slide09SimilarWeb from "./L2Slide09SimilarWeb";
import L2Slide10MetaAdLibrary from "./L2Slide10MetaAdLibrary";
import L2Slide10bGoogleTrends from "./L2Slide10bGoogleTrends";
import L2Slide11Reviews from "./L2Slide11Reviews";
import L2Slide12Teardown from "./L2Slide12Teardown";
import L2Slide13BusinessModel from "./L2Slide13BusinessModel";
import L2Slide14WhoWillPay from "./L2Slide14WhoWillPay";
import L2Slide15Interview from "./L2Slide15Interview";
import L2Slide16FindPeople from "./L2Slide16FindPeople";
import L2Slide15bHypothesis from "./L2Slide15bHypothesis";
import L2Slide17Tldv from "./L2Slide17Tldv";
import L2Slide18Tally from "./L2Slide18Tally";
import L2Slide19Formula from "./L2Slide19Formula";
import L2Slide20ThreeTests from "./L2Slide20ThreeTests";

import L2Slide22Step1 from "./L2Slide22Step1";
import L2Slide23Step2 from "./L2Slide23Step2";
import L2Slide24Step3 from "./L2Slide24Step3";
import L2Slide25ReviewFormat from "./L2Slide25ReviewFormat";
import L2Slide26HWCompetitors from "./L2Slide26HWCompetitors";
import L2Slide27HWCustdev from "./L2Slide27HWCustdev";
import L2Slide28HWPositioning from "./L2Slide28HWPositioning";
import L2Slide29NextMeeting from "./L2Slide29NextMeeting";
import L2Slide30Toolkit from "./L2Slide30Toolkit";
import L2Slide31Closing from "./L2Slide31Closing";
import L2SlideLessonSummary from "./L2SlideLessonSummary";

export const slideNames = [
  "Добро пожаловать",
  "Главная ошибка",
  "Как я строю продукт сейчас · 7 шагов",
  "Зачем прототип ДО кастдева",
  "Стек прототипа · Lovable / Claude Code / Codex",
  "Три вещи",
  "Блок 1: Кто заплатит и как с ним поговорить",
  "Кто заплатит",
  "Customer-интервью",
  "Гипотеза для custdev",
  "Где найти людей",
  "tl;dv · запись интервью",
  "Блок 2: Количественные опросы",
  "Зачем 100 опросов после 10 интервью",
  "Стек: Tally / Typeform / Google Forms",
  "4 канала дистрибуции",
  "PASS / FAIL критерий + Action gate",
  "Блок 3: Пошаговый план",
  "5 шагов · вопросы для custdev",
  "Блок 4: Задание",
  "ДЗ: 10 интервью + 100 опросов",
  "Саммари · 5 мыслей",
  "Закрытие",
];

export function getSlideContent(index: number) {
  switch (index) {
    case 0: return <L2Slide01Welcome />;
    case 1: return <L2Slide02MainMistake />;
    case 2: return <L2SlideMyWorkflow />;
    case 3: return <L2SlideWhyPrototype />;
    case 4: return <L2SlidePrototypeStack />;
    case 5: return <L2Slide03ThreeThings />;
    case 6: return <L2BlockHeader blockNumber={1} title="Кто заплатит и как с ним поговорить" subtitle="качественный custdev: 10 интервью" />;
    case 7: return <L2Slide14WhoWillPay />;
    case 8: return <L2Slide15Interview />;
    case 9: return <L2Slide15bHypothesis />;
    case 10: return <L2Slide16FindPeople />;
    case 11: return <L2Slide17Tldv />;
    case 12: return <L2BlockHeader blockNumber={2} title="Количественные опросы" subtitle="100+ ответов: измеряем размер боли" />;
    case 13: return <L2SlideSurveysIntro />;
    case 14: return <L2SlideSurveysStack />;
    case 15: return <L2SlideSurveysDistribution />;
    case 16: return <L2SlidePassFail />;
    case 17: return <L2BlockHeader blockNumber={3} title="Пошаговый план" subtitle="открой Claude или ChatGPT и составь свой custdev" />;
    case 18: return <L2Slide23Step2 />;
    case 19: return <L2BlockHeader blockNumber={4} title="Задание на эту неделю" />;
    case 20: return <L2Slide27HWCustdev />;
    case 21: return <L2SlideLessonSummary />;
    case 22: return <L2Slide31Closing />;
    default: return null;
  }
}

export const TOTAL = 23;

export default function Lesson2PresentationShell({ backTo = "/admin/meetings" }: { backTo?: string } = {}) {
  const isMobile = useIsMobile();
  const navigate = useNavigate();
  const [current, setCurrent] = useState(0);
  const [displayed, setDisplayed] = useState(0);
  const [transitioning, setTransitioning] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);
  const [showGrid, setShowGrid] = useState(false);
  const [controlsVisible, setControlsVisible] = useState(true);

  const touchStartRef = useRef<{ x: number; y: number } | null>(null);

  const goTo = useCallback((index: number) => {
    if (index === displayed || transitioning) return;
    setTransitioning(true);
    setTimeout(() => {
      setDisplayed(index);
      setCurrent(index);
      requestAnimationFrame(() => setTransitioning(false));
    }, 200);
  }, [displayed, transitioning]);

  const next = useCallback(() => goTo(Math.min(current + 1, TOTAL - 1)), [current, goTo]);
  const prev = useCallback(() => goTo(Math.max(current - 1, 0)), [current, goTo]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " ") { e.preventDefault(); next(); }
      if (e.key === "ArrowLeft") { e.preventDefault(); prev(); }
      if (e.key === "Escape" && showGrid) { setShowGrid(false); return; }
      if (e.key === "Escape" && isFullscreen) document.exitFullscreen?.();
      if (e.key === "F5") { e.preventDefault(); document.documentElement.requestFullscreen?.(); }
      if (e.key === "g" || e.key === "G") setShowGrid(v => !v);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [next, prev, showGrid, isFullscreen]);

  useEffect(() => {
    const handler = () => setIsFullscreen(!!document.fullscreenElement);
    document.addEventListener("fullscreenchange", handler);
    return () => document.removeEventListener("fullscreenchange", handler);
  }, []);

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;
    const show = () => { setControlsVisible(true); clearTimeout(timer); timer = setTimeout(() => setControlsVisible(false), 3000); };
    window.addEventListener("mousemove", show);
    show();
    return () => { window.removeEventListener("mousemove", show); clearTimeout(timer); };
  }, []);

  const toggleFullscreen = () => {
    if (document.fullscreenElement) document.exitFullscreen?.();
    else document.documentElement.requestFullscreen?.();
  };

  if (showGrid) {
    return (
      <div className="w-full h-screen bg-[hsl(var(--background))] overflow-auto p-8">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-semibold text-foreground">Урок 2 — Все слайды</h2>
          <button onClick={() => setShowGrid(false)} className="p-2 text-muted-foreground hover:text-foreground transition-colors"><X size={24} /></button>
        </div>
        <div className={`grid ${isMobile ? 'grid-cols-2 gap-2' : 'grid-cols-4 gap-4'}`}>
          {Array.from({ length: TOTAL }, (_, i) => (
            <button key={i} onClick={() => { setCurrent(i); setDisplayed(i); setShowGrid(false); }}
              className={`aspect-video relative rounded-lg overflow-hidden border-2 transition-all hover:border-primary ${i === current ? "border-primary ring-2 ring-primary/30" : "border-border"}`}>
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
      {!isMobile && showSidebar && (
        <div className="w-[220px] h-full bg-[hsl(var(--card))] border-r border-border overflow-y-auto shrink-0 flex flex-col">
          <div className="p-3 border-b border-border flex items-center justify-between">
            <span className="text-xs text-muted-foreground font-medium uppercase tracking-wider">Слайды</span>
            <button onClick={() => setShowSidebar(false)} className="text-muted-foreground hover:text-foreground"><X size={14} /></button>
          </div>
          {Array.from({ length: TOTAL }, (_, i) => (
            <button key={i} onClick={() => { setCurrent(i); setDisplayed(i); }}
              className={`p-2 mx-2 my-1 rounded aspect-video relative overflow-hidden border transition-all ${i === current ? "border-primary" : "border-transparent hover:border-border"}`}>
              <ScaledSlide>{getSlideContent(i)}</ScaledSlide>
              <div className="absolute bottom-0 inset-x-0 bg-black/60 px-1.5 py-0.5"><span className="text-[9px] text-white/70">{i + 1}</span></div>
            </button>
          ))}
        </div>
      )}

      <div className="flex-1 relative flex flex-col">
        <div className="flex-1 relative"
          onTouchStart={(e) => { touchStartRef.current = { x: e.touches[0].clientX, y: e.touches[0].clientY }; }}
          onTouchEnd={(e) => {
            if (!touchStartRef.current) return;
            const t = e.changedTouches[0];
            const dx = t.clientX - touchStartRef.current.x;
            const dy = t.clientY - touchStartRef.current.y;
            touchStartRef.current = null;
            if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy)) { dx < 0 ? next() : prev(); }
          }}>
          <div className={`absolute inset-0 transition-opacity duration-200 ease-in-out ${transitioning ? 'opacity-0' : 'opacity-100'}`}>
            <ScaledSlide>{getSlideContent(displayed)}</ScaledSlide>
          </div>
        </div>

        <div className={`absolute bottom-0 inset-x-0 transition-opacity duration-300 ${controlsVisible ? "opacity-100" : "opacity-0 pointer-events-none"}`}>
          <div className="h-[3px] bg-[hsl(var(--border))]">
            <div className="h-full bg-primary transition-all duration-300" style={{ width: `${((current + 1) / TOTAL) * 100}%` }} />
          </div>
          <div className={`flex items-center justify-between ${isMobile ? 'px-3 py-2' : 'px-6 py-3'} bg-[hsl(var(--card)/0.9)] backdrop-blur-sm`}>
            <div className="flex items-center gap-3">
              <button onClick={(e) => { e.stopPropagation(); navigate(backTo); }}
                className="p-2 text-muted-foreground hover:text-foreground transition-colors rounded" title="Назад">
                <ArrowLeft size={16} />
              </button>
              {!isMobile && !showSidebar && (
                <button onClick={(e) => { e.stopPropagation(); setShowSidebar(true); }}
                  className="p-2 text-muted-foreground hover:text-foreground transition-colors rounded" title="Показать слайды">
                  <ChevronRight size={16} />
                </button>
              )}
              <button onClick={(e) => { e.stopPropagation(); setShowGrid(true); }}
                className="p-2 text-muted-foreground hover:text-foreground transition-colors rounded" title="Все слайды (G)">
                <Grid3X3 size={isMobile ? 14 : 16} />
              </button>
            </div>
            <div className="flex items-center gap-4">
              <button onClick={(e) => { e.stopPropagation(); prev(); }}
                className="p-2 text-muted-foreground hover:text-foreground transition-colors rounded disabled:opacity-30" disabled={current === 0}>
                <ChevronLeft size={18} />
              </button>
              <span className="text-sm text-muted-foreground font-mono min-w-[60px] text-center">{current + 1} / {TOTAL}</span>
              <button onClick={(e) => { e.stopPropagation(); next(); }}
                className="p-2 text-muted-foreground hover:text-foreground transition-colors rounded disabled:opacity-30" disabled={current === TOTAL - 1}>
                <ChevronRight size={18} />
              </button>
            </div>
            <button onClick={(e) => { e.stopPropagation(); toggleFullscreen(); }}
              className="p-2 text-muted-foreground hover:text-foreground transition-colors rounded" title="Полный экран (F5)">
              {isFullscreen ? <Minimize size={16} /> : <Maximize size={16} />}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
