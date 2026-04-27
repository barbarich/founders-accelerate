import { useState, useEffect, useCallback, useRef } from "react";
import { ChevronLeft, ChevronRight, Maximize, Minimize, Grid3X3, X, ChevronsRight, ArrowLeft } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { useNavigate } from "react-router-dom";
import ScaledSlide from "../ScaledSlide";

import M1Slide01Welcome from "./M1Slide01Welcome";
import M1Slide02MainMistake from "./M1Slide02MainMistake";
import M1Slide03ThreeThings from "./M1Slide03ThreeThings";
import M1BlockHeader from "./M1BlockHeader";
import M1Slide04CompetitorLevels from "./M1Slide04CompetitorLevels";
import M1Slide05WhatToCheck from "./M1Slide05WhatToCheck";
import M1Slide06MetaMinder from "./M1Slide06MetaMinder";
import M1Slide07Perplexity from "./M1Slide07Perplexity";
import M1Slide08PerplexityPrompts from "./M1Slide08PerplexityPrompts";
import M1Slide09SimilarWeb from "./M1Slide09SimilarWeb";
import M1Slide10MetaAdLibrary from "./M1Slide10MetaAdLibrary";
import M1Slide10bGoogleTrends from "./M1Slide10bGoogleTrends";
import M1Slide11Reviews from "./M1Slide11Reviews";
import M1Slide12Teardown from "./M1Slide12Teardown";
import M1Slide13BusinessModel from "./M1Slide13BusinessModel";
import M1Slide14WhoWillPay from "./M1Slide14WhoWillPay";
import M1Slide15Interview from "./M1Slide15Interview";
import M1Slide16FindPeople from "./M1Slide16FindPeople";
import M1Slide15bHypothesis from "./M1Slide15bHypothesis";
import M1Slide17Tldv from "./M1Slide17Tldv";
import M1Slide18Tally from "./M1Slide18Tally";
import M1Slide19Formula from "./M1Slide19Formula";
import M1Slide20ThreeTests from "./M1Slide20ThreeTests";

import M1Slide22Step1 from "./M1Slide22Step1";
import M1Slide23Step2 from "./M1Slide23Step2";
import M1Slide24Step3 from "./M1Slide24Step3";
import M1Slide25ReviewFormat from "./M1Slide25ReviewFormat";
import M1Slide26HWCompetitors from "./M1Slide26HWCompetitors";
import M1Slide27HWCustdev from "./M1Slide27HWCustdev";
import M1Slide28HWPositioning from "./M1Slide28HWPositioning";
import M1Slide29NextMeeting from "./M1Slide29NextMeeting";
import M1Slide30Toolkit from "./M1Slide30Toolkit";
import M1Slide31Closing from "./M1Slide31Closing";

const slideNames = [
  "Добро пожаловать",
  "Знакомство: питч идей",
  "Главная ошибка",
  "Три вещи",
  "Блок 1: Конкуренты",
  "Три уровня конкурентов",
  "Что смотреть",
  "Пример: MetaMinder",
  "Perplexity.ai",
  "Запросы Perplexity",
  "SimilarWeb",
  "Meta Ad Library",
  "Google Trends",
  "Отзывы конкурентов",
  "Продуктовый teardown",
  "Бизнес-модель",
  "Блок 2: Аудитория",
  "Кто заплатит",
  "Customer-интервью",
  "Гипотеза для custdev",
  "Где найти людей",
  "tl;dv",
  "Google Docs & Forms",
  "Блок 3: Позиционирование",
  "Формула",
  "Три теста",
  "Блок 4: Практика",
  "Шаг 1: Конкуренты",
  "Шаг 2: Вопросы для custdev",
  "Шаг 3: Позиционирование",
  "Блок 5: Задание",
  "ДЗ: Конкуренты",
  "ДЗ: Custdev",
  "ДЗ: Позиционирование",
  "Следующая встреча",
  "Блок 6: Инструменты",
  "Набор инструментов",
  "Закрытие",
];

function getSlideContent(index: number) {
  switch (index) {
    case 0: return <M1Slide01Welcome />;
    case 1: return <M1Slide25ReviewFormat />;
    case 2: return <M1Slide02MainMistake />;
    case 3: return <M1Slide03ThreeThings />;
    case 4: return <M1BlockHeader blockNumber={1} title="Конкурентный анализ" />;
    case 5: return <M1Slide04CompetitorLevels />;
    case 6: return <M1Slide05WhatToCheck />;
    case 7: return <M1Slide06MetaMinder />;
    case 8: return <M1Slide07Perplexity />;
    case 9: return <M1Slide08PerplexityPrompts />;
    case 10: return <M1Slide09SimilarWeb />;
    case 11: return <M1Slide10MetaAdLibrary />;
    case 12: return <M1Slide10bGoogleTrends />;
    case 13: return <M1Slide11Reviews />;
    case 14: return <M1Slide12Teardown />;
    case 15: return <M1Slide13BusinessModel />;
    case 16: return <M1BlockHeader blockNumber={2} title="Целевая аудитория" />;
    case 17: return <M1Slide14WhoWillPay />;
    case 18: return <M1Slide15Interview />;
    case 19: return <M1Slide15bHypothesis />;
    case 20: return <M1Slide16FindPeople />;
    case 21: return <M1Slide17Tldv />;
    case 22: return <M1Slide18Tally />;
    case 23: return <M1BlockHeader blockNumber={3} title="Позиционирование" />;
    case 24: return <M1Slide19Formula />;
    case 25: return <M1Slide20ThreeTests />;
    case 26: return <M1BlockHeader blockNumber={4} title="Делаем вместе" subtitle="30 минут" />;
    case 27: return <M1Slide22Step1 />;
    case 28: return <M1Slide23Step2 />;
    case 29: return <M1Slide24Step3 />;
    case 30: return <M1BlockHeader blockNumber={5} title="Задание на неделю" />;
    case 31: return <M1Slide26HWCompetitors />;
    case 32: return <M1Slide27HWCustdev />;
    case 33: return <M1Slide28HWPositioning />;
    case 34: return <M1Slide29NextMeeting />;
    case 35: return <M1BlockHeader blockNumber={6} title="Набор инструментов" />;
    case 36: return <M1Slide30Toolkit />;
    case 37: return <M1Slide31Closing />;
    default: return null;
  }
}

const TOTAL = 38;

export default function Meeting1PresentationShell({ backTo = "/admin/meetings" }: { backTo?: string } = {}) {
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
          <h2 className="text-2xl font-semibold text-foreground">Встреча 1 — Все слайды</h2>
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
