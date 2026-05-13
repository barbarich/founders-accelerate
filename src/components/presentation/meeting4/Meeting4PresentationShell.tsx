import { useState, useEffect, useCallback, useRef } from "react";
import { ChevronLeft, ChevronRight, Maximize, Minimize, Grid3X3, X, ArrowLeft } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { useNavigate } from "react-router-dom";
import ScaledSlide from "../ScaledSlide";

import M4Slide01Welcome from "./M4Slide01Welcome";
import M4Slide02Recap from "./M4Slide02Recap";
import M4BlockHeader from "./M4BlockHeader";
import M4Slide03DemoRules from "./M4Slide03DemoRules";
import M4Slide04Scorecard from "./M4Slide04Scorecard";
import M4Slide05DemoTime from "./M4Slide05DemoTime";
import M4Slide06NoCustomers from "./M4Slide06NoCustomers";
import M4Slide07ThreeChannels from "./M4Slide07ThreeChannels";
import M4Slide08MyCase from "./M4Slide08MyCase";
import M4Slide09OutreachAnatomy from "./M4Slide09OutreachAnatomy";
import M4Slide10WhereAudience from "./M4Slide10WhereAudience";
import M4Slide11AITools from "./M4Slide11AITools";
import M4Slide11bMassOutreach from "./M4Slide11bMassOutreach";
import M4Slide11cEmailChain from "./M4Slide11cEmailChain";
import M4Slide12WorkshopOutreach from "./M4Slide12WorkshopOutreach";
import M4Slide13WorkshopPlan from "./M4Slide13WorkshopPlan";
import M4Slide14Month1Results from "./M4Slide14Month1Results";
import M4Slide15Month2Preview from "./M4Slide15Month2Preview";
import M4Slide16Homework from "./M4Slide16Homework";
import M4Slide17Closing from "./M4Slide17Closing";

export const slideNames = [
  "Добро пожаловать",
  "Что у вас уже готово",
  "Блок 1: Демо-день",
  "Питч как для клиента",
  "Scorecard оценки",
  "Демо-время",
  "Блок 2: Первые клиенты",
  "Дистрибуция > Продукт",
  "3 канала без бюджета",
  "Кейс: 1 пост → 280 человек",
  "Сообщение которое не игнорируют",
  "Где живёт аудитория",
  "3 инструмента для outreach",
  "Плохое vs хорошее письмо",
  "Цепочка из 3 писем",
  "Блок 3: Воркшоп",
  "Пишем outreach",
  "План выхода на рынок",
  "Блок 4: Итоги и далее",
  "Месяц 1 пройден",
  "Месяц 2: превью",
  "Домашка",
  "Закрытие",
];

export function getSlideContent(index: number) {
  switch (index) {
    case 0: return <M4Slide01Welcome />;
    case 1: return <M4Slide02Recap />;
    case 2: return <M4BlockHeader blockNumber={1} title="Демо-день" subtitle="~50 минут" />;
    case 3: return <M4Slide03DemoRules />;
    case 4: return <M4Slide04Scorecard />;
    case 5: return <M4Slide05DemoTime />;
    case 6: return <M4BlockHeader blockNumber={2} title="Первые клиенты без бюджета" subtitle="~25 минут" />;
    case 7: return <M4Slide06NoCustomers />;
    case 8: return <M4Slide07ThreeChannels />;
    case 9: return <M4Slide08MyCase />;
    case 10: return <M4Slide09OutreachAnatomy />;
    case 11: return <M4Slide10WhereAudience />;
    case 12: return <M4Slide11AITools />;
    case 13: return <M4Slide11bMassOutreach />;
    case 14: return <M4Slide11cEmailChain />;
    case 15: return <M4BlockHeader blockNumber={3} title="Делаем вместе" subtitle="~15 минут" />;
    case 16: return <M4Slide12WorkshopOutreach />;
    case 17: return <M4Slide13WorkshopPlan />;
    case 18: return <M4BlockHeader blockNumber={4} title="Итоги месяца и что дальше" />;
    case 19: return <M4Slide14Month1Results />;
    case 20: return <M4Slide15Month2Preview />;
    case 21: return <M4Slide16Homework />;
    case 22: return <M4Slide17Closing />;
    default: return null;
  }
}

export const TOTAL = 23;

export default function Meeting4PresentationShell({ backTo = "/admin/meetings" }: { backTo?: string } = {}) {
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
          <h2 className="text-2xl font-semibold text-foreground">Встреча 4 — Все слайды</h2>
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
