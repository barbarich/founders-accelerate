import { useState, useEffect, useCallback, useRef } from "react";
import { ChevronLeft, ChevronRight, Maximize, Minimize, Grid3X3, X, ArrowLeft } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { useNavigate } from "react-router-dom";
import ScaledSlide from "../ScaledSlide";

import M12Slide01Welcome from "./M12Slide01Welcome";
import M12Slide02Journey from "./M12Slide02Journey";
import M12Slide03MainThesis from "./M12Slide03MainThesis";
import M12BlockHeader from "./M12BlockHeader";
import M12Slide04PitchAnatomy from "./M12Slide04PitchAnatomy";
import M12Slide04bExample from "./M12Slide04bExample";
import M12Slide05AIPremium from "./M12Slide05AIPremium";
import M12Slide06PitchPrompt from "./M12Slide06PitchPrompt";
import M12Slide07DemoRules from "./M12Slide07DemoRules";
import M12Slide08FeedbackProtocol from "./M12Slide08FeedbackProtocol";
import M12Slide09Participants from "./M12Slide09Participants";
import M12Slide10Partner from "./M12Slide10Partner";
import M12Slide11PartnerSafe from "./M12Slide11PartnerSafe";
import M12Slide13WhenToRaise from "./M12Slide13WhenToRaise";
import M12Slide14PitchDeck from "./M12Slide14PitchDeck";
import M12Slide15ElevatorPitch from "./M12Slide15ElevatorPitch";
import M12Slide16FindInvestors from "./M12Slide16FindInvestors";
import M12Slide17HowToPitch from "./M12Slide17HowToPitch";
import M12Slide18Alumni from "./M12Slide18Alumni";
import M12Slide19Arsenal from "./M12Slide19Arsenal";
import M12Slide20Commit30 from "./M12Slide20Commit30";
import M12Slide21Closing from "./M12Slide21Closing";

export const slideNames = [
  "Заглавный",
  "Путь за 12 недель",
  "Главная мысль · 3 акта",
  "Блок 1 · Питч за 5 минут",
  "Анатомия 5-минутного питча",
  "Образец питча · Run Everywhere",
  "🔴 AI-премия умерла · защищённость 2026",
  "🔥 Промпт · собери мой питч",
  "Блок 2 · Демо-день",
  "Правила демо-дня",
  "Протокол фидбека",
  "Порядок выступлений · участники",
  "Блок 3 · Партнёрство",
  "Нужен ли партнёр · как выбрать",
  "Как сделать партнёрство безопасным",
  "Блок 4 · Fundraising 101",
  "Когда поднимать · когда рано",
  "Pitch deck · что обязательно внутри",
  "Elevator pitch · 30 секунд",
  "Где искать инвесторов · как отбирать",
  "Как питчить · 🔥 инвестор-симулятор",
  "Блок 5 · Финал",
  "Alumni · дверь не закрывается",
  "Твой арсенал за 12 недель",
  "Коммит на 30 дней",
  "Финальное слово",
];

export function getSlideContent(index: number) {
  switch (index) {
    case 0: return <M12Slide01Welcome />;
    case 1: return <M12Slide02Journey />;
    case 2: return <M12Slide03MainThesis />;
    case 3: return <M12BlockHeader blockNumber={1} title="Питч за 5 минут" subtitle="упакуй 12 недель в историю, которую досказывают за тебя" />;
    case 4: return <M12Slide04PitchAnatomy />;
    case 5: return <M12Slide04bExample />;
    case 6: return <M12Slide05AIPremium />;
    case 7: return <M12Slide06PitchPrompt />;
    case 8: return <M12BlockHeader blockNumber={2} title="Демо-день" subtitle="твои 5 минут. группа и ментор — это победный круг, не экзамен" />;
    case 9: return <M12Slide07DemoRules />;
    case 10: return <M12Slide08FeedbackProtocol />;
    case 11: return <M12Slide09Participants />;
    case 12: return <M12BlockHeader blockNumber={3} title="Партнёрство" subtitle="65% стартапов разваливаются из-за конфликта основателей — это предотвратимо" />;
    case 13: return <M12Slide10Partner />;
    case 14: return <M12Slide11PartnerSafe />;
    case 15: return <M12BlockHeader blockNumber={4} title="Fundraising 101" subtitle="как поднять деньги — и почему это важно знать, даже если поднимать будешь не сейчас" />;
    case 16: return <M12Slide13WhenToRaise />;
    case 17: return <M12Slide14PitchDeck />;
    case 18: return <M12Slide15ElevatorPitch />;
    case 19: return <M12Slide16FindInvestors />;
    case 20: return <M12Slide17HowToPitch />;
    case 21: return <M12BlockHeader blockNumber={5} title="Финал" subtitle="акселератор кончается — компания нет" />;
    case 22: return <M12Slide18Alumni />;
    case 23: return <M12Slide19Arsenal />;
    case 24: return <M12Slide20Commit30 />;
    case 25: return <M12Slide21Closing />;
    default: return null;
  }
}

export const TOTAL = 26;

export default function Meeting12PresentationShell({ backTo = "/admin/meetings" }: { backTo?: string } = {}) {
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
          <h2 className="text-2xl font-semibold text-foreground">Встреча 12 — Все слайды</h2>
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
