import { useState, useEffect, useCallback, useRef } from "react";
import { ChevronLeft, ChevronRight, Maximize, Minimize, Grid3X3, X, ChevronsRight, ArrowLeft } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { useNavigate } from "react-router-dom";
import ScaledSlide from "../../ScaledSlide";

import L1Slide01Welcome from "./L1Slide01Welcome";
import L1Slide02MainMistake from "./L1Slide02MainMistake";
import L1Slide03ThreeThings from "./L1Slide03ThreeThings";
import L1BlockHeader from "./L1BlockHeader";
import L1Slide04CompetitorLevels from "./L1Slide04CompetitorLevels";
import L1Slide05WhatToCheck from "./L1Slide05WhatToCheck";
import L1Slide06MetaMinder from "./L1Slide06MetaMinder";
import L1Slide07DeepResearch from "./L1Slide07DeepResearch";
import L1Slide08DeepResearchPrompt from "./L1Slide08DeepResearchPrompt";
import L1Slide08bNotebookLM from "./L1Slide08bNotebookLM";
import L1Slide08cValidateProblem from "./L1Slide08cValidateProblem";
import L1Slide13bSmokeTest from "./L1Slide13bSmokeTest";
import L1Slide09SimilarWeb from "./L1Slide09SimilarWeb";
import L1Slide10MetaAdLibrary from "./L1Slide10MetaAdLibrary";
import L1Slide10bGoogleTrends from "./L1Slide10bGoogleTrends";
import L1Slide11Reviews from "./L1Slide11Reviews";
import L1Slide12Teardown from "./L1Slide12Teardown";
import L1Slide13BusinessModel from "./L1Slide13BusinessModel";
import L1Slide14WhoWillPay from "./L1Slide14WhoWillPay";
import L1Slide15Interview from "./L1Slide15Interview";
import L1Slide16FindPeople from "./L1Slide16FindPeople";
import L1Slide15bHypothesis from "./L1Slide15bHypothesis";
import L1Slide17Tldv from "./L1Slide17Tldv";
import L1Slide18Tally from "./L1Slide18Tally";
import L1Slide19Formula from "./L1Slide19Formula";
import L1Slide20ThreeTests from "./L1Slide20ThreeTests";

import L1Slide22Step1 from "./L1Slide22Step1";
import L1Slide23Step2 from "./L1Slide23Step2";
import L1Slide24Step3 from "./L1Slide24Step3";
import L1Slide25ReviewFormat from "./L1Slide25ReviewFormat";
import L1Slide26HWCompetitors from "./L1Slide26HWCompetitors";
import L1Slide27HWCustdev from "./L1Slide27HWCustdev";
import L1Slide28HWPositioning from "./L1Slide28HWPositioning";
import L1Slide29NextMeeting from "./L1Slide29NextMeeting";
import L1Slide30Toolkit from "./L1Slide30Toolkit";
import L1Slide31Closing from "./L1Slide31Closing";
import L1SlideLessonSummary from "./L1SlideLessonSummary";

export const slideNames = [
  "Добро пожаловать",
  "Главная ошибка",
  "Три вещи",
  "Блок 1: Конкуренты",
  "Три уровня конкурентов",
  "Что смотреть",
  "Пример: MetaMinder",
  "Deep Research",
  "Промпт Deep Research",
  "NotebookLM",
  "Валидируй проблему",
  "SimilarWeb",
  "Meta Ad Library",
  "Google Trends",
  "Отзывы конкурентов",
  "Продуктовый teardown",
  "Бизнес-модель",
  "Smoke-test спроса",
  "Блок 2: Пошаговый план",
  "5 шагов · конкуренты",
  "Блок 3: Задание",
  "ДЗ: Конкуренты",
  "Блок 4: Инструменты",
  "Набор инструментов",
  "Саммари · 5 мыслей",
  "Закрытие",
];

export function getSlideContent(index: number) {
  switch (index) {
    case 0: return <L1Slide01Welcome />;
    case 1: return <L1Slide02MainMistake />;
    case 2: return <L1Slide03ThreeThings />;
    case 3: return <L1BlockHeader blockNumber={1} title="Конкурентный анализ" />;
    case 4: return <L1Slide04CompetitorLevels />;
    case 5: return <L1Slide05WhatToCheck />;
    case 6: return <L1Slide06MetaMinder />;
    case 7: return <L1Slide07DeepResearch />;
    case 8: return <L1Slide08DeepResearchPrompt />;
    case 9: return <L1Slide08bNotebookLM />;
    case 10: return <L1Slide08cValidateProblem />;
    case 11: return <L1Slide09SimilarWeb />;
    case 12: return <L1Slide10MetaAdLibrary />;
    case 13: return <L1Slide10bGoogleTrends />;
    case 14: return <L1Slide11Reviews />;
    case 15: return <L1Slide12Teardown />;
    case 16: return <L1Slide13BusinessModel />;
    case 17: return <L1Slide13bSmokeTest />;
    case 18: return <L1BlockHeader blockNumber={2} title="Пошаговый план" subtitle="открой Claude или ChatGPT и пройди 5 шагов" />;
    case 19: return <L1Slide22Step1 />;
    case 20: return <L1BlockHeader blockNumber={3} title="Задание на неделю" />;
    case 21: return <L1Slide26HWCompetitors />;
    case 22: return <L1BlockHeader blockNumber={4} title="Набор инструментов" />;
    case 23: return <L1Slide30Toolkit />;
    case 24: return <L1SlideLessonSummary />;
    case 25: return <L1Slide31Closing />;
    default: return null;
  }
}

export const TOTAL = 26;

export default function Lesson1PresentationShell({ backTo = "/admin/meetings" }: { backTo?: string } = {}) {
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
          <h2 className="text-2xl font-semibold text-foreground">Урок 1 — Все слайды</h2>
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
            <ScaledSlide>
              <div className={`w-full h-full bg-[hsl(var(--slide-bg))] ${isMobile ? '' : 'pr-[540px]'}`}>
                {getSlideContent(displayed)}
              </div>
            </ScaledSlide>
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
