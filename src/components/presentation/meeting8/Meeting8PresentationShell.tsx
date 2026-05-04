import { useState, useEffect, useCallback, useRef } from "react";
import { ChevronLeft, ChevronRight, Maximize, Minimize, Grid3X3, X, ArrowLeft } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { useNavigate } from "react-router-dom";
import ScaledSlide from "../ScaledSlide";

import M8Slide01Welcome from "./M8Slide01Welcome";
import M8Slide02MainThesis from "./M8Slide02MainThesis";
import M8Slide03ShockNumber from "./M8Slide03ShockNumber";
import M8Slide04FourReasons from "./M8Slide04FourReasons";
import M8Slide05JargonTranslator from "./M8Slide05JargonTranslator";
import M8BlockHeader from "./M8BlockHeader";
import M8Slide06Principle from "./M8Slide06Principle";
import M8Slide10NotificationLast from "./M8Slide10NotificationLast";
import M8Slide11Mechanic1Streak from "./M8Slide11Mechanic1Streak";
import M8Slide12Mechanic2Unfinished from "./M8Slide12Mechanic2Unfinished";
import M8Slide13Mechanic3Social from "./M8Slide13Mechanic3Social";
import M8Slide14Mechanic4FreshContent from "./M8Slide14Mechanic4FreshContent";
import M8Slide15Mechanic5Deadline from "./M8Slide15Mechanic5Deadline";
import M8Slide16NoCodeStack from "./M8Slide16NoCodeStack";
import M8Slide17AIPrompt from "./M8Slide17AIPrompt";
import M8Slide18LiveDemo from "./M8Slide18LiveDemo";
import M8Slide18bMessageFromInsight from "./M8Slide18bMessageFromInsight";
import M8Slide19AISegmentation from "./M8Slide19AISegmentation";
import M8Slide20FiveAntiPatterns from "./M8Slide20FiveAntiPatterns";
import M8Slide21PersonalCase from "./M8Slide21PersonalCase";
import M8Slide22Checklist from "./M8Slide22Checklist";
import M8Slide23WinBack from "./M8Slide23WinBack";
import M8Slide24Homework from "./M8Slide24Homework";
import M8Slide25NextWeek from "./M8Slide25NextWeek";

const slideNames = [
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
  "Блок 4 · Wow-инструменты",
  "No-code стек",
  "AI-промпт: 7 писем",
  "Live-демо: Claude × Mixpanel (MCP)",
  "Промпт: инсайт → сообщение",
  "AI-сегментация",
  "Блок 5 · Анти-паттерны",
  "5 способов убить retention",
  "Личный кейс: -40% базы",
  "Чек-лист 7 вопросов",
  "Блок 6 · Реактивация и домашка",
  "Win-back за 3 шага",
  "Домашка",
  "Неделя 9",
];

function getSlideContent(index: number) {
  switch (index) {
    case 0: return <M8Slide01Welcome />;
    case 1: return <M8Slide02MainThesis />;
    case 2: return <M8Slide03ShockNumber />;
    case 3: return <M8Slide04FourReasons />;
    case 4: return <M8Slide05JargonTranslator />;
    case 5: return <M8Slide06Principle />;
    case 6: return <M8BlockHeader blockNumber={2} title="5 механик возврата" subtitle="встроенных в продукт" />;
    case 7: return <M8Slide10NotificationLast />;
    case 8: return <M8Slide11Mechanic1Streak />;
    case 9: return <M8Slide12Mechanic2Unfinished />;
    case 10: return <M8Slide13Mechanic3Social />;
    case 11: return <M8Slide14Mechanic4FreshContent />;
    case 12: return <M8Slide15Mechanic5Deadline />;
    case 13: return <M8BlockHeader blockNumber={3} title="Wow-инструменты без кода" />;
    case 14: return <M8Slide16NoCodeStack />;
    case 15: return <M8Slide17AIPrompt />;
    case 16: return <M8Slide18LiveDemo />;
    case 17: return <M8Slide18bMessageFromInsight />;
    case 18: return <M8Slide19AISegmentation />;
    case 19: return <M8BlockHeader blockNumber={4} title="Анти-паттерны" subtitle="что не делать никогда" />;
    case 20: return <M8Slide20FiveAntiPatterns />;
    case 21: return <M8Slide21PersonalCase />;
    case 22: return <M8Slide22Checklist />;
    case 23: return <M8BlockHeader blockNumber={5} title="Реактивация и домашка" />;
    case 24: return <M8Slide23WinBack />;
    case 25: return <M8Slide24Homework />;
    case 26: return <M8Slide25NextWeek />;
    default: return null;
  }
}

const TOTAL = 27;

export default function Meeting8PresentationShell({ backTo = "/admin/meetings" }: { backTo?: string } = {}) {
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
          <h2 className="text-2xl font-semibold text-foreground">Встреча 8 — Все слайды</h2>
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