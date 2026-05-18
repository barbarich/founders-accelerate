import { useState, useEffect, useCallback, useRef } from "react";
import { ChevronLeft, ChevronRight, Maximize, Minimize, Grid3X3, X, ArrowLeft } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { useNavigate } from "react-router-dom";
import ScaledSlide from "../ScaledSlide";

import M10Slide01Welcome from "./M10Slide01Welcome";
import M10Slide02MainThesis from "./M10Slide02MainThesis";
import M10BlockHeader from "./M10BlockHeader";
import M10Slide03PreFlightChecklist from "./M10Slide03PreFlightChecklist";
import M10Slide16EventsSetup from "./M10Slide16EventsSetup";
import M10Slide17EventsBestPractices from "./M10Slide17EventsBestPractices";
import M10Slide04OldVsNewMeta from "./M10Slide04OldVsNewMeta";
import M10Slide05Andromeda from "./M10Slide05Andromeda";
import M10Slide06BudgetLearningPhase from "./M10Slide06BudgetLearningPhase";
import M10Slide07WorkshopCampaign from "./M10Slide07WorkshopCampaign";
import M10Slide08WorkshopAdSet from "./M10Slide08WorkshopAdSet";
import M10Slide09WorkshopAd from "./M10Slide09WorkshopAd";
import M10Slide10WorkshopPublish from "./M10Slide10WorkshopPublish";
import M10Slide11WorkshopAfterLaunch from "./M10Slide11WorkshopAfterLaunch";
import M10Slide12CohortAdaptation from "./M10Slide12CohortAdaptation";
import M10Slide13Top7Mistakes from "./M10Slide13Top7Mistakes";
import M10Slide14Homework from "./M10Slide14Homework";
import M10Slide15NextWeek from "./M10Slide15NextWeek";

export const slideNames = [
  "Заглавный",
  "Главная мысль",
  "Блок 1 · Перед запуском",
  "Pre-flight · 6 пунктов готовности",
  "События на пикселе · что и куда",
  "Топ-практики событий · 2026",
  "Блок 2 · Meta-реклама 2026",
  "Старый vs новый Meta",
  "Andromeda + Advantage+",
  "Бюджет и learning phase",
  "Блок 3 · 🔴 Live workshop",
  "Шаг 1 · Business Manager → Campaign",
  "Шаг 2 · Ad Set · Advantage+ Audience",
  "Шаг 3 · Ad · Dynamic Creative",
  "Шаг 4 · Review → Publish",
  "Шаг 5 · After launch · метрики",
  "Блок 4 · Когорта",
  "Адаптация под каждого",
  "Блок 5 · Ошибки",
  "Семь ошибок одиночек",
  "Блок 6 · Домашка",
  "Домашка к M11",
  "M11 + M12",
];

export function getSlideContent(index: number) {
  switch (index) {
    case 0: return <M10Slide01Welcome />;
    case 1: return <M10Slide02MainThesis />;
    case 2: return <M10BlockHeader blockNumber={1} title="Перед запуском" subtitle="что должно быть готово ДО Ads Manager" />;
    case 3: return <M10Slide03PreFlightChecklist />;
    case 4: return <M10Slide16EventsSetup />;
    case 5: return <M10Slide17EventsBestPractices />;
    case 6: return <M10BlockHeader blockNumber={2} title="Meta-реклама 2026" subtitle="алгоритм работает за тебя — если ты ему даёшь работать" />;
    case 7: return <M10Slide04OldVsNewMeta />;
    case 8: return <M10Slide05Andromeda />;
    case 9: return <M10Slide06BudgetLearningPhase />;
    case 10: return <M10BlockHeader blockNumber={3} title="🔴 Live workshop" subtitle="настраиваем кампанию на моём кабинете — ты повторяешь у себя" />;
    case 11: return <M10Slide07WorkshopCampaign />;
    case 12: return <M10Slide08WorkshopAdSet />;
    case 13: return <M10Slide09WorkshopAd />;
    case 14: return <M10Slide10WorkshopPublish />;
    case 15: return <M10Slide11WorkshopAfterLaunch />;
    case 16: return <M10BlockHeader blockNumber={4} title="Адаптация под когорту" subtitle="схема одна — objective и креативы разные" />;
    case 17: return <M10Slide12CohortAdaptation />;
    case 18: return <M10BlockHeader blockNumber={5} title="Семь ошибок" subtitle="на которых ломаются первые кампании" />;
    case 19: return <M10Slide13Top7Mistakes />;
    case 20: return <M10BlockHeader blockNumber={6} title="Домашка" subtitle="кампания живёт, данные собираются, ты не паникуешь" />;
    case 21: return <M10Slide14Homework />;
    case 22: return <M10Slide15NextWeek />;
    default: return null;
  }
}

export const TOTAL = 23;

export default function Meeting10PresentationShell({ backTo = "/admin/meetings" }: { backTo?: string } = {}) {
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
          <h2 className="text-2xl font-semibold text-foreground">Встреча 10 — Все слайды</h2>
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
