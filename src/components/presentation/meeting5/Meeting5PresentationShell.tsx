import { useState, useEffect, useCallback, useRef } from "react";
import { ChevronLeft, ChevronRight, Maximize, Minimize, Grid3X3, X, ArrowLeft } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { useNavigate } from "react-router-dom";
import ScaledSlide from "../ScaledSlide";

import M5Slide01Welcome from "./M5Slide01Welcome";
import M5Slide02Wall from "./M5Slide02Wall";
import M5Slide03Recap from "./M5Slide03Recap";
import M5Slide04ThreeThings from "./M5Slide04ThreeThings";
import M5BlockHeader from "./M5BlockHeader";
import M5Slide05Stack from "./M5Slide05Stack";
import M5Slide06SwitchSignals from "./M5Slide06SwitchSignals";
import M5Slide07AntiPatterns from "./M5Slide07AntiPatterns";
import M5Slide08Observability from "./M5Slide08Observability";
import M5Slide10P1Scaffolder from "./M5Slide10P1Scaffolder";
import M5Slide11P2Debug from "./M5Slide11P2Debug";
import M5Slide12DemoScope from "./M5Slide12DemoScope";
import M5Slide13Storytelling from "./M5Slide13Storytelling";

import M5Slide14Metrics from "./M5Slide14Metrics";
import M5Slide15StoryShift from "./M5Slide15StoryShift";
import M5Slide16UnityIdea from "./M5Slide16UnityIdea";
import M5Slide17Hooks from "./M5Slide17Hooks";
import M5Slide19S1StoryPrompt from "./M5Slide19S1StoryPrompt";
import M5Slide20Workshop from "./M5Slide20Workshop";
import M5Slide21Homework from "./M5Slide21Homework";
import M5Slide22NextWeek from "./M5Slide22NextWeek";
import M5Slide23Closing from "./M5Slide23Closing";

export const slideNames = [
  "Добро пожаловать",
  "Два навыка сегодня",
  "Блок 1 — MVP за вечер",
  "Стек: 3 инструмента",
  "Первый запуск за 5 мин",
  "CLAUDE.md",
  "Skills в Claude Code",
  "5 правил промпта",
  "Supabase + Vercel",
  "P1 MVP Scaffolder",
  "P2 Debug Partner",
  "Демо — таймлайн",
  "Сторителлинг",
  "Найди историю в продукте",
  "Клиент — герой, ты — проводник",
  "Конфликт = боль клиента",
  "Трансформация: до/после",
  "Деталь = доверие",
  "Хук + структура + удержание",
  "ДЗ: 3 ссылки",
  "Неделя 6",
  "Закрытие",
];

export function getSlideContent(index: number) {
  switch (index) {
    case 0: return <M5Slide01Welcome />;
    case 1: return <M5Slide02Wall />;
    case 2: return <M5BlockHeader blockNumber={1} title="Вайбкодинг" subtitle="Claude Code · Supabase · Vercel — строишь продукт, не пишешь код" />;
    case 3: return <M5Slide03Recap />;
    case 4: return <M5Slide04ThreeThings />;
    case 5: return <M5Slide05Stack />;
    case 6: return <M5Slide06SwitchSignals />;
    case 7: return <M5Slide07AntiPatterns />;
    case 8: return <M5Slide08Observability />;
    case 9: return <M5Slide10P1Scaffolder />;
    case 10: return <M5Slide11P2Debug />;
    case 11: return <M5Slide12DemoScope />;
    case 12: return <M5Slide13Storytelling />;
    case 13: return <M5Slide16UnityIdea />;
    case 14: return <M5Slide17Hooks />;
    case 15: return <M5Slide14Metrics />;
    case 16: return <M5Slide15StoryShift />;
    case 17: return <M5Slide19S1StoryPrompt />;
    case 18: return <M5Slide20Workshop />;
    case 19: return <M5Slide21Homework />;
    case 20: return <M5Slide22NextWeek />;
    case 21: return <M5Slide23Closing />;
    default: return null;
  }
}

export const TOTAL = 22;

export default function Meeting5PresentationShell({ backTo = "/admin/meetings" }: { backTo?: string } = {}) {
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
          <h2 className="text-2xl font-semibold text-foreground">Встреча 5 — Все слайды</h2>
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
          onClick={() => { if (!isMobile) next(); }}
          onTouchStart={(e) => { touchStartRef.current = { x: e.touches[0].clientX, y: e.touches[0].clientY }; }}
          onTouchEnd={(e) => {
            if (!touchStartRef.current) return;
            const t = e.changedTouches[0];
            const dx = t.clientX - touchStartRef.current.x;
            const dy = t.clientY - touchStartRef.current.y;
            touchStartRef.current = null;
            if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy)) { dx < 0 ? next() : prev(); }
            else if (Math.abs(dx) < 10 && Math.abs(dy) < 10) next();
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
