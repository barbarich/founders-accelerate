import { useState, useEffect, useCallback, useRef } from "react";
import { ChevronLeft, ChevronRight, Maximize, Minimize, Grid3X3, X, ArrowLeft } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { useNavigate } from "react-router-dom";
import ScaledSlide from "../../ScaledSlide";

import L17Slide01Welcome from "./L17Slide01Welcome";
import L17Slide02MainThesis from "./L17Slide02MainThesis";
import L17SlideRoadmap from "./L17SlideRoadmap";
import L17BlockHeader from "./L17BlockHeader";
import L17SlidePathRecap from "./L17SlidePathRecap";
import L17SlideAssets from "./L17SlideAssets";
import L17SlideWhatChanged from "./L17SlideWhatChanged";
import L17SlideWhereYouAre from "./L17SlideWhereYouAre";
import L17SlideBehindIsFine from "./L17SlideBehindIsFine";
import L17SlideMonth1Goal from "./L17SlideMonth1Goal";
import L17SlideMonth1Plan from "./L17SlideMonth1Plan";
import L17SlideWeeklyRhythm from "./L17SlideWeeklyRhythm";
import L17SlideOneNumber from "./L17SlideOneNumber";
import L17SlideQuarterPlan from "./L17SlideQuarterPlan";
import L17SlideMilestones from "./L17SlideMilestones";
import L17SlideWhenToPivot from "./L17SlideWhenToPivot";
import L17SlideRealCurve from "./L17SlideRealCurve";
import L17SlideRules from "./L17SlideRules";
import L17SlideFounderNote from "./L17SlideFounderNote";
import L17SlideStayInTouch from "./L17SlideStayInTouch";
import L17SlideHomework from "./L17SlideHomework";
import L17SlideLessonSummary from "./L17SlideLessonSummary";
import L17SlideClosing from "./L17SlideClosing";

export const slideNames = [
  "Заглавный",
  "Главная мысль · решает не знание",
  "Карта урока · пять частей",
  "Блок 1: Что у тебя теперь есть",
  "Три фазы, которые ты прошёл",
  "Что у тебя на руках · 12 вещей",
  "Было и стало",
  "Блок 2: Где ты сейчас",
  "Три точки · А, Б, В",
  "Отстал - не значит проиграл",
  "Блок 3: Первые 30 дней",
  "Цель первого месяца - одна",
  "30 дней по неделям",
  "Ритм недели · 6 часов",
  "Одно число, которое ты держишь",
  "Блок 4: Следующие 90 дней",
  "Три месяца - три задачи",
  "Чек-точки · 30, 60, 90 день",
  "Что менять · одна переменная за раз",
  "Блок 5: Как не сдаться",
  "Как это выглядит на самом деле",
  "5 правил, которые держат",
  "От меня лично",
  "Остаёмся на связи",
  "Финальное задание · 7 пунктов",
  "Саммари · 5 мыслей",
  "Закрытие · курс пройден",
];

export function getSlideContent(index: number) {
  switch (index) {
    case 0: return <L17Slide01Welcome />;
    case 1: return <L17Slide02MainThesis />;
    case 2: return <L17SlideRoadmap />;
    case 3: return <L17BlockHeader blockNumber={1} title="Что у тебя теперь есть" subtitle="не знания на слайдах, а сделанные вещи" />;
    case 4: return <L17SlidePathRecap />;
    case 5: return <L17SlideAssets />;
    case 6: return <L17SlideWhatChanged />;
    case 7: return <L17BlockHeader blockNumber={2} title="Где ты сейчас" subtitle="одна честная точка - и план под неё" />;
    case 8: return <L17SlideWhereYouAre />;
    case 9: return <L17SlideBehindIsFine />;
    case 10: return <L17BlockHeader blockNumber={3} title="Первые 30 дней" subtitle="по неделям, с ритмом и одним числом" />;
    case 11: return <L17SlideMonth1Goal />;
    case 12: return <L17SlideMonth1Plan />;
    case 13: return <L17SlideWeeklyRhythm />;
    case 14: return <L17SlideOneNumber />;
    case 15: return <L17BlockHeader blockNumber={4} title="Следующие 90 дней" subtitle="три месяца - три разные задачи" />;
    case 16: return <L17SlideQuarterPlan />;
    case 17: return <L17SlideMilestones />;
    case 18: return <L17SlideWhenToPivot />;
    case 19: return <L17BlockHeader blockNumber={5} title="Как не сдаться" subtitle="что происходит на самом деле и что с этим делать" />;
    case 20: return <L17SlideRealCurve />;
    case 21: return <L17SlideRules />;
    case 22: return <L17SlideFounderNote />;
    case 23: return <L17SlideStayInTouch />;
    case 24: return <L17SlideHomework />;
    case 25: return <L17SlideLessonSummary />;
    case 26: return <L17SlideClosing />;
    default: return null;
  }
}

export const TOTAL = 27;

export default function Lesson17PresentationShell({ backTo = "/admin/meetings" }: { backTo?: string } = {}) {
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
          <h2 className="text-2xl font-semibold text-foreground">Урок 17 - Что дальше: план на 30 и 90 дней</h2>
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
