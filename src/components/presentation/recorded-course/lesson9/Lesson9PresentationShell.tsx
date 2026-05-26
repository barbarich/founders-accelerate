import { useState, useEffect, useCallback, useRef } from "react";
import { ChevronLeft, ChevronRight, Maximize, Minimize, Grid3X3, X, ArrowLeft } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { useNavigate } from "react-router-dom";
import ScaledSlide from "../../ScaledSlide";

import L9Slide01Welcome from "./L9Slide01Welcome";
import L9Slide02MainThesis from "./L9Slide02MainThesis";
import L9Slide03ShockNumber from "./L9Slide03ShockNumber";
import L9Slide04FourReasons from "./L9Slide04FourReasons";
import L9Slide05JargonTranslator from "./L9Slide05JargonTranslator";
import L9BlockHeader from "./L9BlockHeader";
import L9Slide06Principle from "./L9Slide06Principle";
import L9Slide10NotificationLast from "./L9Slide10NotificationLast";
import L9Slide11Mechanic1Streak from "./L9Slide11Mechanic1Streak";
import L9Slide12Mechanic2Unfinished from "./L9Slide12Mechanic2Unfinished";
import L9Slide13Mechanic3Social from "./L9Slide13Mechanic3Social";
import L9Slide14Mechanic4FreshContent from "./L9Slide14Mechanic4FreshContent";
import L9Slide15Mechanic5Deadline from "./L9Slide15Mechanic5Deadline";
import L9Slide13bWorkshop from "./L9Slide13bWorkshop";
import L9Slide16NoCodeStack from "./L9Slide16NoCodeStack";
import L9Slide17AIPrompt from "./L9Slide17AIPrompt";
import L9Slide18LiveDemo from "./L9Slide18LiveDemo";
import L9Slide18bMessageFromInsight from "./L9Slide18bMessageFromInsight";
import L9Slide20RetentionStackFree from "./L9Slide20RetentionStackFree";
import L9Slide22ReactivationInsights from "./L9Slide22ReactivationInsights";
import L9Slide24Homework from "./L9Slide24Homework";
import L9Slide25NextWeek from "./L9Slide25NextWeek";
import L9SlideLessonSummary from "./L9SlideLessonSummary";

export const slideNames = [
  "Заглавный",
  "Главная мысль",
  "Цифра-удар: 77%",
  "4 причины невозврата",
  "Переводчик жаргона D1/D7/D30",
  "Принцип возврата · одна петля",
  "Блок 3 · 5 механик",
  "Уведомление — это финал",
  "Механика 1 · Streak",
  "Механика 2 · Незаконченное",
  "Механика 3 · Социальный долг",
  "Механика 4 · Свежий контент",
  "Механика 5 · Дедлайн",
  "Практика · карта возврата",
  "Блок 4 · Wow-инструменты",
  "No-code стек",
  "AI-промпт: 7 писем",
  "Live-демо: Claude × Mixpanel (MCP)",
  "Промпт: инсайт → сообщение",
  "Блок 5 · Стек и чек-лист",
  "Retention-стек за $0 на старте",
  "Блок 6 · Реактивация и задание",
  "Реактивация · 6 инсайтов",
  "Задание",
  "Саммари · 5 мыслей",
  "Неделя 9",
];

export function getSlideContent(index: number) {
  switch (index) {
    case 0: return <L9Slide01Welcome />;
    case 1: return <L9Slide02MainThesis />;
    case 2: return <L9Slide03ShockNumber />;
    case 3: return <L9Slide04FourReasons />;
    case 4: return <L9Slide05JargonTranslator />;
    case 5: return <L9Slide06Principle />;
    case 6: return <L9BlockHeader blockNumber={2} title="5 механик возврата" subtitle="встроенных в продукт" />;
    case 7: return <L9Slide10NotificationLast />;
    case 8: return <L9Slide11Mechanic1Streak />;
    case 9: return <L9Slide12Mechanic2Unfinished />;
    case 10: return <L9Slide13Mechanic3Social />;
    case 11: return <L9Slide14Mechanic4FreshContent />;
    case 12: return <L9Slide15Mechanic5Deadline />;
    case 13: return <L9Slide13bWorkshop />;
    case 14: return <L9BlockHeader blockNumber={3} title="Wow-инструменты без кода" />;
    case 15: return <L9Slide16NoCodeStack />;
    case 16: return <L9Slide17AIPrompt />;
    case 17: return <L9Slide18LiveDemo />;
    case 18: return <L9Slide18bMessageFromInsight />;
    case 19: return <L9BlockHeader blockNumber={4} title="Стек и чек-лист" subtitle="запусти всё за вечер" />;
    case 20: return <L9Slide20RetentionStackFree />;
    case 21: return <L9BlockHeader blockNumber={5} title="Реактивация и задание" />;
    case 22: return <L9Slide22ReactivationInsights />;
    case 23: return <L9Slide24Homework />;
    case 24: return <L9SlideLessonSummary />;
    case 25: return <L9Slide25NextWeek />;
    default: return null;
  }
}

export const TOTAL = 26;

export default function Lesson9PresentationShell({ backTo = "/admin/meetings" }: { backTo?: string } = {}) {
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
          <h2 className="text-2xl font-semibold text-foreground">Урок 9 — Все слайды</h2>
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