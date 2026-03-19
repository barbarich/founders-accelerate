import { useState, useEffect, useCallback, useRef } from "react";
import { ChevronLeft, ChevronRight, Maximize, Minimize, Grid3X3, X, ArrowLeft } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { useNavigate } from "react-router-dom";
import ScaledSlide from "../ScaledSlide";

import M2Slide01Welcome from "./M2Slide01Welcome";
import M2Slide02Recap from "./M2Slide02Recap";
import M2Slide03ThreeThings from "./M2Slide03ThreeThings";
import M2BlockHeader from "./M2BlockHeader";
import M2Slide04InterviewResults from "./M2Slide04InterviewResults";
import M2Slide05CompetitorInsights from "./M2Slide05CompetitorInsights";
import M2Slide06PositioningCheck from "./M2Slide06PositioningCheck";
import M2Slide07WhyMatters from "./M2Slide07WhyMatters";
import M2Slide08Formula from "./M2Slide08Formula";
import M2Slide09GoodVsBad from "./M2Slide09GoodVsBad";
import M2Slide10FourTests from "./M2Slide10FourTests";
import M2Slide11AIPrompts from "./M2Slide11AIPrompts";
import M2Slide12CommonMistakes from "./M2Slide12CommonMistakes";
import M2Slide13ModelsOverview from "./M2Slide13ModelsOverview";
import M2Slide14HowToChoose from "./M2Slide14HowToChoose";
import M2Slide15PricingPsychology from "./M2Slide15PricingPsychology";
import M2Slide16FirstPrice from "./M2Slide16FirstPrice";
import M2Slide17MyCases from "./M2Slide17MyCases";
import M2Slide18MVPMyths from "./M2Slide18MVPMyths";
import M2Slide19OneFeature from "./M2Slide19OneFeature";
import M2Slide20KillFeatures from "./M2Slide20KillFeatures";
import M2Slide21MVPChecklist from "./M2Slide21MVPChecklist";
import M2Slide22Step1 from "./M2Slide22Step1";
import M2Slide23Step2 from "./M2Slide23Step2";
import M2Slide24Step3 from "./M2Slide24Step3";
import M2Slide25Homework from "./M2Slide25Homework";
import M2Slide26Closing from "./M2Slide26Closing";

const slideNames = [
  "Добро пожаловать",
  "Прошлая неделя",
  "Три вещи",
  "Блок 1: Разбор домашки",
  "Результаты интервью",
  "Находки по конкурентам",
  "Проверка позиционирования",
  "Блок 2: Позиционирование",
  "Почему это важно",
  "Расширенная формула",
  "Плохо vs Хорошо",
  "4 теста",
  "AI-промпты",
  "Топ-5 ошибок",
  "Блок 3: Цена и монетизация",
  "6 моделей",
  "Как выбрать модель",
  "Психология цены",
  "Первая цена",
  "Мои кейсы",
  "Блок 4: MVP",
  "MVP — не убогая версия",
  "Правило одной фичи",
  "Убей фичи",
  "Чеклист MVP",
  "Блок 5: Практика",
  "Шаг 1: Позиционирование",
  "Шаг 2: Убиваем фичи",
  "Шаг 3: Определяем цену",
  "Блок 6: Задание",
  "Домашка",
  "Закрытие",
];

function getSlideContent(index: number) {
  switch (index) {
    case 0: return <M2Slide01Welcome />;
    case 1: return <M2Slide02Recap />;
    case 2: return <M2Slide03ThreeThings />;
    case 3: return <M2BlockHeader blockNumber={1} title="Разбор домашки" subtitle="~20 минут" />;
    case 4: return <M2Slide04InterviewResults />;
    case 5: return <M2Slide05CompetitorInsights />;
    case 6: return <M2Slide06PositioningCheck />;
    case 7: return <M2BlockHeader blockNumber={2} title="Позиционирование" />;
    case 8: return <M2Slide07WhyMatters />;
    case 9: return <M2Slide08Formula />;
    case 10: return <M2Slide09GoodVsBad />;
    case 11: return <M2Slide10FourTests />;
    case 12: return <M2Slide11AIPrompts />;
    case 13: return <M2Slide12CommonMistakes />;
    case 14: return <M2BlockHeader blockNumber={3} title="Цена и монетизация" />;
    case 15: return <M2Slide13ModelsOverview />;
    case 16: return <M2Slide14HowToChoose />;
    case 17: return <M2Slide15PricingPsychology />;
    case 18: return <M2Slide16FirstPrice />;
    case 19: return <M2Slide17MyCases />;
    case 20: return <M2BlockHeader blockNumber={4} title="MVP — что строить, а что нет" />;
    case 21: return <M2Slide18MVPMyths />;
    case 22: return <M2Slide19OneFeature />;
    case 23: return <M2Slide20KillFeatures />;
    case 24: return <M2Slide21MVPChecklist />;
    case 25: return <M2BlockHeader blockNumber={5} title="Делаем вместе" subtitle="30 минут" />;
    case 26: return <M2Slide22Step1 />;
    case 27: return <M2Slide23Step2 />;
    case 28: return <M2Slide24Step3 />;
    case 29: return <M2BlockHeader blockNumber={6} title="Задание на неделю" />;
    case 30: return <M2Slide25Homework />;
    case 31: return <M2Slide26Closing />;
    default: return null;
  }
}

const TOTAL = 32;

export default function Meeting2PresentationShell({ backTo = "/admin/meetings" }: { backTo?: string } = {}) {
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
          <h2 className="text-2xl font-semibold text-foreground">Встреча 2 — Все слайды</h2>
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
