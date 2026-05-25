import { useState, useEffect, useCallback, useRef } from "react";
import { ChevronLeft, ChevronRight, Maximize, Minimize, Grid3X3, X, ArrowLeft } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { useNavigate } from "react-router-dom";
import ScaledSlide from "../ScaledSlide";

import M11Slide01Welcome from "./M11Slide01Welcome";
import M11Slide02MainThesis from "./M11Slide02MainThesis";
import M11BlockHeader from "./M11BlockHeader";
import M11Slide03MotionMap from "./M11Slide03MotionMap";
import M11Slide03bCRM from "./M11Slide03bCRM";
import M11Slide04KillerICP from "./M11Slide04KillerICP";
import M11Slide04bWhatIsICP from "./M11Slide04bWhatIsICP";
import M11Slide05Dream50 from "./M11Slide05Dream50";
import M11Slide06Multithreading from "./M11Slide06Multithreading";
import M11Slide07ChannelPriority from "./M11Slide07ChannelPriority";
import M11Slide08MetaMinderB2B from "./M11Slide08MetaMinderB2B";
import M11Slide09TriggerOutreach from "./M11Slide09TriggerOutreach";
import M11Slide10Discovery from "./M11Slide10Discovery";
import M11Slide11PreCallPrompt from "./M11Slide11PreCallPrompt";
import M11Slide12DemoThatCloses from "./M11Slide12DemoThatCloses";
import M11Slide13Objections from "./M11Slide13Objections";
import M11Slide14Closing from "./M11Slide14Closing";
import M11Slide15MAPPilot from "./M11Slide15MAPPilot";
import M11Slide16ExpansionLoop from "./M11Slide16ExpansionLoop";
import M11Slide17Homework from "./M11Slide17Homework";
import M11Slide18NextWeek from "./M11Slide18NextWeek";

export const slideNames = [
  "Заглавный",
  "Главная мысль",
  "Блок 1 · Карта motion",
  "7 этапов · один путь",
  "CRM · первые дни",
  "Блок 2 · ICP + List",
  "Что такое ICP и почему это критично",
  "Killer ICP · 7 фильтров",
  "Dream 50 · target list",
  "Multithreading · 4 роли",
  "Блок 3 · Outreach",
  "Приоритет каналов",
  "🔥 Кейс MetaMinder · события",
  "Trigger-based outreach",
  "Блок 4 · The Call",
  "Demo flow · 6 шагов структуры",
  "🔥 Главный промпт · Pre-call research",
  "Demo that closes · 6 правил",
  "5 возражений · полные диалоги",
  "Closing · 3 фразы + next step",
  "Блок 5 · After close",
  "🔥 MAP · Mutual Action Plan",
  "Expansion loop · 1 сделка → 4",
  "Блок 6 · Финал",
  "Домашка к M12",
  "M12 + alumni",
];

export function getSlideContent(index: number) {
  switch (index) {
    case 0: return <M11Slide01Welcome />;
    case 1: return <M11Slide02MainThesis />;
    case 2: return <M11BlockHeader blockNumber={1} title="Карта motion" subtitle="7 этапов от пустого CRM до подписанной сделки" />;
    case 3: return <M11Slide03MotionMap />;
    case 4: return <M11Slide03bCRM />;
    case 5: return <M11BlockHeader blockNumber={2} title="ICP + Target list" subtitle="на ком фокусируешься — определяет всё, что ниже" />;
    case 6: return <M11Slide04bWhatIsICP />;
    case 7: return <M11Slide04KillerICP />;
    case 8: return <M11Slide05Dream50 />;
    case 9: return <M11Slide06Multithreading />;
    case 10: return <M11BlockHeader blockNumber={3} title="Multi-touch outreach" subtitle="warm intro > event > DM > email — не наоборот" />;
    case 11: return <M11Slide07ChannelPriority />;
    case 12: return <M11Slide08MetaMinderB2B />;
    case 13: return <M11Slide09TriggerOutreach />;
    case 14: return <M11BlockHeader blockNumber={4} title="The Call" subtitle="discovery · demo · objections · close — здесь решаются деньги" />;
    case 15: return <M11Slide10Discovery />;
    case 16: return <M11Slide11PreCallPrompt />;
    case 17: return <M11Slide12DemoThatCloses />;
    case 18: return <M11Slide13Objections />;
    case 19: return <M11Slide14Closing />;
    case 20: return <M11BlockHeader blockNumber={5} title="After close" subtitle="то, чего соло-фаундеры просто не делают — и теряют 70% сделок" />;
    case 21: return <M11Slide15MAPPilot />;
    case 22: return <M11Slide16ExpansionLoop />;
    case 23: return <M11BlockHeader blockNumber={6} title="Финал" subtitle="домашка · что после акселератора" />;
    case 24: return <M11Slide17Homework />;
    case 25: return <M11Slide18NextWeek />;
    default: return null;
  }
}

export const TOTAL = 26;

export default function Meeting11PresentationShell({ backTo = "/admin/meetings" }: { backTo?: string } = {}) {
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
          <h2 className="text-2xl font-semibold text-foreground">Встреча 11 — Все слайды</h2>
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
