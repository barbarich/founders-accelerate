import { useState, useEffect, useCallback, useRef } from "react";
import { ChevronLeft, ChevronRight, Maximize, Minimize, Grid3X3, X, ArrowLeft } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { useNavigate } from "react-router-dom";
import ScaledSlide from "../../ScaledSlide";

import L4Slide01Welcome from "./L4Slide01Welcome";
import L4Slide02Recap from "./L4Slide02Recap";
import L4Slide03ThreeThings from "./L4Slide03ThreeThings";
import L4BlockHeader from "./L4BlockHeader";
import L4Slide04ShowProgress from "./L4Slide04ShowProgress";
import L4Slide05MetaMinderCase from "./L4Slide05MetaMinderCase";
import L4Slide06AIStack from "./L4Slide06AIStack";
import L4Slide07AdvancedPrompts from "./L4Slide07AdvancedPrompts";
import L4Slide08BeforeAfter from "./L4Slide08BeforeAfter";
import L4Slide09LandingFromFrameworks from "./L4Slide09LandingFromFrameworks";
import L4Slide10LandingAnatomy from "./L4Slide10LandingAnatomy";
import L4Slide11LovableDemo from "./L4Slide11LovableDemo";
import L4Slide12AuthPayments from "./L4Slide12AuthPayments";
import L4Slide13Analytics from "./L4Slide13Analytics";
import L4SlideStripeWhy from "./L4SlideStripeWhy";
import L4SlidePaymentLink from "./L4SlidePaymentLink";
import L4SlideRefundFlow from "./L4SlideRefundFlow";
import L4SlideStripeAtlas from "./L4SlideStripeAtlas";
import L4Slide14Workshop from "./L4Slide14Workshop";
import L4Slide15Homework from "./L4Slide15Homework";
import L4Slide16Closing from "./L4Slide16Closing";
import L4SlideLessonSummary from "./L4SlideLessonSummary";

export const slideNames = [
  "Добро пожаловать",
  "Три вещи",
  "Блок 1: AI = продуктовая команда",
  "Кейс MetaMinder",
  "Ваш AI-стек",
  "Промпты, которые работают",
  "До / После",
  "Блок 2: Лендинг за 30 минут",
  "8 блоков лендинга",
  "Промпт для Lovable",
  "Стиль для Lovable",
  "Блок 3: Подключаем без разработчика",
  "Авторизация и оплата",
  "Аналитика",
  "Блок 4: Stripe · берём первые деньги",
  "Зачем Stripe именно",
  "Payment Link за 10 минут",
  "Refund vs Chargeback",
  "Stripe Atlas · для нерезидентов США",
  "Блок 5: Два пути запуска",
  "Лендинг с нуля или улучшение",
  "Блок 6: Задание",
  "Домашка",
  "Саммари · 5 мыслей",
  "Закрытие",
];

export function getSlideContent(index: number) {
  switch (index) {
    case 0: return <L4Slide01Welcome />;
    case 1: return <L4Slide03ThreeThings />;
    case 2: return <L4BlockHeader blockNumber={1} title="AI заменяет продакта и дизайнера" />;
    case 3: return <L4Slide05MetaMinderCase />;
    case 4: return <L4Slide06AIStack />;
    case 5: return <L4Slide07AdvancedPrompts />;
    case 6: return <L4Slide08BeforeAfter />;
    case 7: return <L4BlockHeader blockNumber={2} title="Лендинг за 30 минут" subtitle="Lovable + промпт + стиль" />;
    case 8: return <L4Slide09LandingFromFrameworks />;
    case 9: return <L4Slide10LandingAnatomy />;
    case 10: return <L4Slide11LovableDemo />;
    case 11: return <L4BlockHeader blockNumber={3} title="Подключаем без разработчика" subtitle="auth + analytics" />;
    case 12: return <L4Slide12AuthPayments />;
    case 13: return <L4Slide13Analytics />;
    case 14: return <L4BlockHeader blockNumber={4} title="Stripe · берём первые деньги" subtitle="платежи без бэкенда + Stripe Atlas для нерезидентов" />;
    case 15: return <L4SlideStripeWhy />;
    case 16: return <L4SlidePaymentLink />;
    case 17: return <L4SlideRefundFlow />;
    case 18: return <L4SlideStripeAtlas />;
    case 19: return <L4BlockHeader blockNumber={5} title="Два пути запуска" subtitle="лендинг с нуля или улучшение существующего" />;
    case 20: return <L4Slide14Workshop />;
    case 21: return <L4BlockHeader blockNumber={6} title="Задание на неделю" />;
    case 22: return <L4Slide15Homework />;
    case 23: return <L4SlideLessonSummary />;
    case 24: return <L4Slide16Closing />;
    default: return null;
  }
}

export const TOTAL = 25;

export default function Lesson4PresentationShell({ backTo = "/admin/meetings" }: { backTo?: string } = {}) {
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
          <h2 className="text-2xl font-semibold text-foreground">Урок 4 — Все слайды</h2>
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
