import { useState, useEffect, useCallback, useRef } from "react";
import { ChevronLeft, ChevronRight, Maximize, Minimize, Grid3X3, X, ArrowLeft } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { useNavigate } from "react-router-dom";
import ScaledSlide from "../ScaledSlide";

import M7Slide01Welcome from "./M7Slide01Welcome";
import M7Slide02MainThesis from "./M7Slide02MainThesis";
import M7Slide03ShowYourPhone from "./M7Slide03ShowYourPhone";
import M7Slide04FourReasons from "./M7Slide04FourReasons";
import M7Slide05ThreeScreensRule from "./M7Slide05ThreeScreensRule";
import M7Slide06Screen1Intro from "./M7Slide06Screen1Intro";
import M7Slide07PromiseFormula from "./M7Slide07PromiseFormula";
import M7Slide08FiveGoodFirstScreens from "./M7Slide08FiveGoodFirstScreens";
import M7Slide09FiveBadFirstScreens from "./M7Slide09FiveBadFirstScreens";
import M7Slide10FiveSecondTest from "./M7Slide10FiveSecondTest";
import M7Slide11Exercise1 from "./M7Slide11Exercise1";
import M7Slide12Screen2Intro from "./M7Slide12Screen2Intro";
import M7Slide13SkipTheWall from "./M7Slide13SkipTheWall";
import M7Slide14FiveActionFirst from "./M7Slide14FiveActionFirst";
import M7Slide15WhenToAsk from "./M7Slide15WhenToAsk";
import M7Slide16EmptyStates from "./M7Slide16EmptyStates";
import M7Slide17Exercise2 from "./M7Slide17Exercise2";
import M7Slide18Screen3Intro from "./M7Slide18Screen3Intro";
import M7Slide19FiveMechanisms from "./M7Slide19FiveMechanisms";
import M7Slide20MechanismExamples from "./M7Slide20MechanismExamples";
import M7Slide21PushEmail from "./M7Slide21PushEmail";
import M7Slide22Exercise3 from "./M7Slide22Exercise3";
import M7Slide24CircleShare from "./M7Slide24CircleShare";
import M7Slide25Homework from "./M7Slide25Homework";
import M7Slide26NextWeek from "./M7Slide26NextWeek";

export const slideNames = [
  "Заглавный",
  "Главная мысль",
  "Покажи свой телефон",
  "4 причины ухода",
  "Правило трёх экранов",
  "Экран 1 · Одно обещание",
  "Формула обещания",
  "5 правильных первых экранов",
  "5 ошибок первого экрана",
  "Тест на 5 секунд",
  "Упражнение 1",
  "Экран 2 · Одно действие",
  "Сначала результат, потом email",
  "5 продуктов: действие до email",
  "Что и когда спрашивать",
  "Empty states",
  "Упражнение 2",
  "Экран 3 · Причина вернуться",
  "5 механизмов возврата",
  "Примеры механизмов",
  "Push и email",
  "Упражнение 3",
  "Круг · каждый показывает",
  "Домашнее задание",
  "Неделя 8",
];

export function getSlideContent(index: number) {
  switch (index) {
    case 0: return <M7Slide01Welcome />;
    case 1: return <M7Slide02MainThesis />;
    case 2: return <M7Slide03ShowYourPhone />;
    case 3: return <M7Slide04FourReasons />;
    case 4: return <M7Slide05ThreeScreensRule />;
    case 5: return <M7Slide06Screen1Intro />;
    case 6: return <M7Slide07PromiseFormula />;
    case 7: return <M7Slide08FiveGoodFirstScreens />;
    case 8: return <M7Slide09FiveBadFirstScreens />;
    case 9: return <M7Slide10FiveSecondTest />;
    case 10: return <M7Slide11Exercise1 />;
    case 11: return <M7Slide12Screen2Intro />;
    case 12: return <M7Slide13SkipTheWall />;
    case 13: return <M7Slide14FiveActionFirst />;
    case 14: return <M7Slide15WhenToAsk />;
    case 15: return <M7Slide16EmptyStates />;
    case 16: return <M7Slide17Exercise2 />;
    case 17: return <M7Slide18Screen3Intro />;
    case 18: return <M7Slide19FiveMechanisms />;
    case 19: return <M7Slide20MechanismExamples />;
    case 20: return <M7Slide21PushEmail />;
    case 21: return <M7Slide22Exercise3 />;
    case 22: return <M7Slide24CircleShare />;
    case 23: return <M7Slide25Homework />;
    case 24: return <M7Slide26NextWeek />;
    default: return null;
  }
}

export const TOTAL = 25;

export default function Meeting7PresentationShell({ backTo = "/admin/meetings" }: { backTo?: string } = {}) {
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
          <h2 className="text-2xl font-semibold text-foreground">Встреча 7 — Все слайды</h2>
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
