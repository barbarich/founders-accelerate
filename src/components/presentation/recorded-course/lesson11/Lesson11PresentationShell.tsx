import { useState, useEffect, useCallback, useRef } from "react";
import { ChevronLeft, ChevronRight, Maximize, Minimize, Grid3X3, X, ArrowLeft } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { useNavigate } from "react-router-dom";
import ScaledSlide from "../../ScaledSlide";

import L11Slide01Welcome from "./L11Slide01Welcome";
import L11Slide02MainThesis from "./L11Slide02MainThesis";
import L11BlockHeader from "./L11BlockHeader";
import L11Slide03Stats from "./L11Slide03Stats";
import L11Slide04SoloFounders from "./L11Slide04SoloFounders";
import L11Slide05ThreePillars from "./L11Slide05ThreePillars";
import L11Slide06PositioningFormula from "./L11Slide06PositioningFormula";
import L11Slide07PositioningExamples from "./L11Slide07PositioningExamples";
import L11Slide08Workshop1 from "./L11Slide08Workshop1";
import L11Slide09VisualStack from "./L11Slide09VisualStack";
import L11Slide10UrlToAds from "./L11Slide10UrlToAds";
import L11SlideMemesAds from "./L11SlideMemesAds";
import L11Slide11OneStyleRule from "./L11Slide11OneStyleRule";
import L11Slide13OldVsNew from "./L11Slide13OldVsNew";
import L11Slide14AdAnatomy from "./L11Slide14AdAnatomy";
import L11Slide16Funnel from "./L11Slide16Funnel";
import L11Slide17Metrics from "./L11Slide17Metrics";
import L11SlideStoryInPackaging from "./L11SlideStoryInPackaging";
import L11SlideVideoProduction from "./L11SlideVideoProduction";
import L11SlideFunnelTypes from "./L11SlideFunnelTypes";
import L11SlideReadiness from "./L11SlideReadiness";
import L11SlideForexFunnel from "./L11SlideForexFunnel";
import L11SlideOffer from "./L11SlideOffer";
import L11SlidePackagePrompt from "./L11SlidePackagePrompt";
import L11Slide20FullStack from "./L11Slide20FullStack";
import L11Slide22Homework from "./L11Slide22Homework";
import L11Slide23NextWeek from "./L11Slide23NextWeek";
import L11SlideLessonSummary from "./L11SlideLessonSummary";

export const slideNames = [
  "Заглавный",
  "Главная мысль",
  "Блок 1 · Зачем упаковка",
  "Кейсы · упаковка победила продукт",
  "5 шагов упаковки · одна линия",
  "Блок 2 · Сообщение",
  "Формула позиционирования + 3 теста",
  "Шесть примеров формул",
  "История в упаковке",
  "Блок 3 · Визуал",
  "Один стиль на AI",
  "AI-дизайн · Canva + Memes",
  "Блок 4 · Креативы: видео, баннеры, реклама",
  "Алгоритм выбирает — ты даёшь объём",
  "Съёмка видео · фаундер + UGC",
  "Блок 5 · Воронка → продажи",
  "Какие воронки бывают · 6 типов",
  "Forex Tester · воронка как одно целое",
  "Твой оффер, а не просто продукт",
  "Сколько стоит платящий клиент · B2B/B2C",
  "Готов к запуску · не сжигай деньги",
  "Промпт · упакуй мой продукт",
  "Домашка · упаковка к запуску",
  "Саммари · 5 мыслей",
  "Что дальше · Урок 12",
];

export function getSlideContent(index: number) {
  switch (index) {
    case 0: return <L11Slide01Welcome />;
    case 1: return <L11Slide02MainThesis />;
    case 2: return <L11BlockHeader blockNumber={1} title="Зачем упаковка" subtitle="сделать продукт таким, чтобы захотелось купить" />;
    case 3: return <L11Slide04SoloFounders />;
    case 4: return <L11Slide05ThreePillars />;
    case 5: return <L11BlockHeader blockNumber={2} title="Сообщение" subtitle="позиционирование + история" />;
    case 6: return <L11Slide06PositioningFormula />;
    case 7: return <L11Slide07PositioningExamples />;
    case 8: return <L11SlideStoryInPackaging />;
    case 9: return <L11BlockHeader blockNumber={3} title="Визуал" subtitle="один стиль везде, собран на AI" />;
    case 10: return <L11Slide09VisualStack />;
    case 11: return <L11Slide10UrlToAds />;
    case 12: return <L11BlockHeader blockNumber={4} title="Креативы: видео, баннеры, реклама" subtitle="алгоритм выбирает — ты даёшь объём" />;
    case 13: return <L11Slide13OldVsNew />;
    case 14: return <L11SlideVideoProduction />;
    case 15: return <L11BlockHeader blockNumber={5} title="Воронка → продажи" subtitle="собрана так, чтобы конвертило" />;
    case 16: return <L11SlideFunnelTypes />;
    case 17: return <L11SlideForexFunnel />;
    case 18: return <L11SlideOffer />;
    case 19: return <L11Slide17Metrics />;
    case 20: return <L11SlideReadiness />;
    case 21: return <L11SlidePackagePrompt />;
    case 22: return <L11Slide22Homework />;
    case 23: return <L11SlideLessonSummary />;
    case 24: return <L11Slide23NextWeek />;
    default: return null;
  }
}

export const TOTAL = 25;

export default function Lesson11PresentationShell({ backTo = "/admin/meetings" }: { backTo?: string } = {}) {
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
          <h2 className="text-2xl font-semibold text-foreground">Урок 11 — Все слайды</h2>
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
