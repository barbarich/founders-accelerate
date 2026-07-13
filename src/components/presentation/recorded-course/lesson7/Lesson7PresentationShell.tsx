import { useState, useEffect, useCallback, useRef } from "react";
import { ChevronLeft, ChevronRight, Maximize, Minimize, Grid3X3, X, ArrowLeft } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { useNavigate } from "react-router-dom";
import ScaledSlide from "../../ScaledSlide";

import L7Slide01Welcome from "./L7Slide01Welcome";
import L7Slide02MainThesis from "./L7Slide02MainThesis";
import L7BlockHeader from "./L7BlockHeader";
import L7SlideAhaExamples from "./L7SlideAhaExamples";
import L7SlideAhaTypes from "./L7SlideAhaTypes";
import L7Slide60SecRule from "./L7Slide60SecRule";
import L7SlideFindAhaPrompt from "./L7SlideFindAhaPrompt";
import L7SlideSetupLevers from "./L7SlideSetupLevers";
import L7SlideMetaminderTeardown from "./L7SlideMetaminderTeardown";
import L7SlideAhaDone from "./L7SlideAhaDone";
import L7SlideFirstScreen from "./L7SlideFirstScreen";
import L7SlideActionNow from "./L7SlideActionNow";
import L7SlideHomework from "./L7SlideHomework";
import L7SlideClosing from "./L7SlideClosing";
import L7SlideLessonSummary from "./L7SlideLessonSummary";

export const slideNames = [
  "Заглавный",
  "Главная мысль",
  "Блок 1: Что такое Aha",
  "Aha на 3 примерах · Notion / Canva / Duolingo",
  "4 типа Aha · какой у твоего продукта",
  "Блок 2: Где живёт Aha",
  "Правило 60 секунд",
  "Блок 3: Как найти свой Aha",
  "Универсальный промпт · Aha-detector",
  "Блок 4: Как настроить Aha в продукте",
  "3 рычага · убрать всё между открыл и результат",
  "Разбор · MetaMinder: флоу за руку к персональному результату",
  "Aha настроен, если...",
  "Блок 5: Первый экран = путь к Aha",
  "5 правил первого экрана",
  "Блок 6: Пошаговый план",
  "Найди свой Aha · 5 шагов",
  "Блок 7: Задание",
  "Домашка",
  "Саммари · 5 мыслей",
  "Закрытие",
];

export function getSlideContent(index: number) {
  switch (index) {
    case 0: return <L7Slide01Welcome />;
    case 1: return <L7Slide02MainThesis />;
    case 2: return <L7BlockHeader blockNumber={1} title="Что такое Aha" subtitle="«О, я понял зачем мне это»" />;
    case 3: return <L7SlideAhaExamples />;
    case 4: return <L7SlideAhaTypes />;
    case 5: return <L7BlockHeader blockNumber={2} title="Где живёт Aha" subtitle="первая минута, не первый час" />;
    case 6: return <L7Slide60SecRule />;
    case 7: return <L7BlockHeader blockNumber={3} title="Как найти свой Aha" subtitle="AI-detector + 60-second тест" />;
    case 8: return <L7SlideFindAhaPrompt />;
    case 9: return <L7BlockHeader blockNumber={4} title="Как настроить Aha в продукте" subtitle="убрать всё между «открыл» и «увидел результат»" />;
    case 10: return <L7SlideSetupLevers />;
    case 11: return <L7SlideMetaminderTeardown />;
    case 12: return <L7SlideAhaDone />;
    case 13: return <L7BlockHeader blockNumber={5} title="Первый экран = путь к Aha" subtitle="5 правил, чтобы добраться за 60 сек" />;
    case 14: return <L7SlideFirstScreen />;
    case 15: return <L7BlockHeader blockNumber={6} title="Пошаговый план" subtitle="как найти Aha и спроектировать экран" />;
    case 16: return <L7SlideActionNow />;
    case 17: return <L7BlockHeader blockNumber={7} title="Задание на эту неделю" />;
    case 18: return <L7SlideHomework />;
    case 19: return <L7SlideLessonSummary />;
    case 20: return <L7SlideClosing />;
    default: return null;
  }
}

export const TOTAL = 21;

export default function Lesson7PresentationShell({ backTo = "/admin/meetings" }: { backTo?: string } = {}) {
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
          <h2 className="text-2xl font-semibold text-foreground">Урок 7 — Aha-moment и первый экран</h2>
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
