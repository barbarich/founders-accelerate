import { useState, useEffect, useCallback, useRef } from "react";
import { ChevronLeft, ChevronRight, Maximize, Minimize, Grid3X3, X, ArrowLeft } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { useNavigate } from "react-router-dom";
import ScaledSlide from "../../ScaledSlide";

import L3Slide01Welcome from "./L3Slide01Welcome";
import L3Slide02Recap from "./L3Slide02Recap";
import L3Slide03ThreeThings from "./L3Slide03ThreeThings";
import L3BlockHeader from "./L3BlockHeader";
import L3Slide04InterviewResults from "./L3Slide04InterviewResults";
import L3Slide05PresentResults from "./L3Slide05PresentResults";
import L3Slide07WhyMatters from "./L3Slide07WhyMatters";
import L3Slide08Formula from "./L3Slide08Formula";
import L3Slide09GoodVsBad from "./L3Slide09GoodVsBad";
import L3Slide10FourTests from "./L3Slide10FourTests";
import L3Slide11AIPrompts from "./L3Slide11AIPrompts";
import L3Slide12CommonMistakes from "./L3Slide12CommonMistakes";
import L3Slide13ModelsOverview from "./L3Slide13ModelsOverview";
import L3Slide14HowToChoose from "./L3Slide14HowToChoose";
import L3Slide15PricingPsychology from "./L3Slide15PricingPsychology";
import L3Slide16FirstPrice from "./L3Slide16FirstPrice";
import L3Slide17MyCases from "./L3Slide17MyCases";
import L3Slide18MVPMyths from "./L3Slide18MVPMyths";
import L3Slide19OneFeature from "./L3Slide19OneFeature";
import L3Slide20KillFeatures from "./L3Slide20KillFeatures";
import L3Slide21MVPChecklist from "./L3Slide21MVPChecklist";
import L3Slide22Step1 from "./L3Slide22Step1";
import L3Slide23Step2 from "./L3Slide23Step2";
import L3Slide24Step3 from "./L3Slide24Step3";
import L3Slide25Homework from "./L3Slide25Homework";
import L3Slide26Closing from "./L3Slide26Closing";

export const slideNames = [
  "Добро пожаловать",
  "Три вещи",
  "Блок 1: Позиционирование",
  "Никто не покупает продукт",
  "Формула результата",
  "Процесс vs Результат",
  "Три формулировки",
  "AI-промпты",
  "Топ-5 ошибок",
  "Блок 2: Цена и монетизация",
  "7 моделей",
  "Как выбрать модель",
  "Психология цены",
  "Цена = стоимость результата",
  "Мои кейсы",
  "Блок 3: MVP",
  "MVP — не убогая версия",
  "Правило одной фичи",
  "Метод MoSCoW",
  "Чеклист MVP",
  "Блок 4: Практика — сделай сейчас",
  "Шаг 1: Позиционирование",
  "Шаг 2: MoSCoW",
  "Шаг 3: Определяем цену",
  "Блок 5: Задание",
  "Домашка",
  "Закрытие",
];

export function getSlideContent(index: number) {
  switch (index) {
    case 0: return <L3Slide01Welcome />;
    case 1: return <L3Slide03ThreeThings />;
    case 2: return <L3BlockHeader blockNumber={1} title="Позиционирование" />;
    case 3: return <L3Slide07WhyMatters />;
    case 4: return <L3Slide08Formula />;
    case 5: return <L3Slide09GoodVsBad />;
    case 6: return <L3Slide10FourTests />;
    case 7: return <L3Slide11AIPrompts />;
    case 8: return <L3Slide12CommonMistakes />;
    case 9: return <L3BlockHeader blockNumber={2} title="Цена и монетизация" />;
    case 10: return <L3Slide13ModelsOverview />;
    case 11: return <L3Slide14HowToChoose />;
    case 12: return <L3Slide15PricingPsychology />;
    case 13: return <L3Slide16FirstPrice />;
    case 14: return <L3Slide17MyCases />;
    case 15: return <L3BlockHeader blockNumber={3} title="MVP — что строить, а что нет" />;
    case 16: return <L3Slide18MVPMyths />;
    case 17: return <L3Slide19OneFeature />;
    case 18: return <L3Slide20KillFeatures />;
    case 19: return <L3Slide21MVPChecklist />;
    case 20: return <L3BlockHeader blockNumber={4} title="Практика — сделай сейчас" subtitle="Открой Claude/ChatGPT и пройди 3 шага" />;
    case 21: return <L3Slide22Step1 />;
    case 22: return <L3Slide23Step2 />;
    case 23: return <L3Slide24Step3 />;
    case 24: return <L3BlockHeader blockNumber={5} title="Задание на неделю" />;
    case 25: return <L3Slide25Homework />;
    case 26: return <L3Slide26Closing />;
    default: return null;
  }
}

export const TOTAL = 27;

export default function Lesson3PresentationShell({ backTo = "/admin/meetings" }: { backTo?: string } = {}) {
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
          <h2 className="text-2xl font-semibold text-foreground">Урок 3 — Все слайды</h2>
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
