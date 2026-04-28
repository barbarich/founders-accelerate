import { useEffect } from "react";
import { Link } from "react-router-dom";
import { slides } from "@/components/mini-course/MiniCourseLesson1Slides";

/**
 * Plain-text / AI-friendly version of the Lesson 1 presentation.
 *
 * Renders every slide stacked, without scaling or fullscreen logic, so that:
 *  - Claude / ChatGPT / any LLM can fetch the URL once and read ALL slide text
 *  - Search engines and screen readers can index full content
 *
 * The visual layout of individual slides is intentionally left as-is — the goal
 * is text accessibility, not a polished print layout.
 */
export default function MiniCourseLesson1Text() {
  useEffect(() => {
    const prevTitle = document.title;
    document.title = "Урок 1: Валидация идеи — текстовая версия (для AI / Claude)";

    const meta = document.createElement("meta");
    meta.name = "description";
    meta.content =
      "Полная текстовая версия урока 1 мини-курса The Founders Circle — все 28 слайдов на одной странице для удобного анализа AI-ассистентами.";
    document.head.appendChild(meta);

    const robots = document.createElement("meta");
    robots.name = "robots";
    robots.content = "index, follow";
    document.head.appendChild(robots);

    return () => {
      document.title = prevTitle;
      meta.remove();
      robots.remove();
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#0A0E1A] text-white">
      {/* Header — instructions for humans + AI */}
      <header className="max-w-[1100px] mx-auto px-6 py-10 border-b border-white/10">
        <p className="text-[12px] uppercase tracking-[0.2em] text-[hsl(38_45%_58%)] font-mono mb-3">
          Текстовая версия · для AI-ассистентов
        </p>
        <h1 className="font-display text-[36px] md:text-[48px] font-bold leading-tight mb-4">
          Урок 1: Валидация идеи — все слайды на одной странице
        </h1>
        <p className="text-[16px] text-white/70 leading-relaxed mb-4">
          Это полная текстовая версия презентации (всего {slides.length} слайдов). Страница сделана,
          чтобы AI-ассистенты (Claude, ChatGPT, Gemini) могли по одной ссылке прочитать
          весь контент урока и дать обратную связь.
        </p>
        <p className="text-[14px] text-white/50 mb-2">
          Интерактивная версия презентации:{" "}
          <Link to="/mini-course/lesson1" className="text-[hsl(38_45%_58%)] underline">
            /mini-course/lesson1
          </Link>
        </p>
        <div className="mt-4 p-4 rounded-md bg-[hsl(38_45%_58%/0.08)] border border-[hsl(38_45%_58%/0.25)]">
          <p className="text-[14px] text-white/85 mb-2 font-semibold">
            Если ты — AI (Claude / ChatGPT / Gemini): читай этот файл
          </p>
          <p className="text-[13px] text-white/70 mb-2">
            Эта страница — SPA на JavaScript, и при обычном fetch ты увидишь только пустую оболочку.
            Весь текст урока доступен как статический Markdown по прямой ссылке (без JS):
          </p>
          <a
            href="/mini-course/lesson1.md"
            className="text-[hsl(38_45%_58%)] underline break-all text-[14px]"
          >
            https://founders-circle.space/mini-course/lesson1.md
          </a>
        </div>
        <details className="mt-6 text-[14px] text-white/60">
          <summary className="cursor-pointer text-white/80 font-semibold">
            Подсказка: как попросить Claude оценить презентацию
          </summary>
          <pre className="mt-3 p-4 bg-white/5 rounded-md whitespace-pre-wrap text-[13px] leading-relaxed">
{`Прочитай эту презентацию и оцени её:
https://founders-circle.space/mini-course/lesson1.md

Проверь:
- логику и поток между слайдами
- ясность ключевых сообщений
- что повторяется и что можно убрать
- что стоит добавить или переформулировать
Дай конкретные рекомендации по каждому слайду.`}
          </pre>
        </details>
      </header>

      {/* All slides, stacked */}
      <main className="max-w-[1920px] mx-auto">
        {slides.map((Slide, i) => (
          <section
            key={i}
            id={`slide-${i + 1}`}
            aria-label={`Слайд ${i + 1} из ${slides.length}`}
            className="border-b border-white/10"
          >
            <div className="max-w-[1100px] mx-auto px-6 pt-10 pb-2">
              <p className="text-[12px] uppercase tracking-[0.2em] text-[hsl(38_45%_58%)] font-mono">
                Слайд {i + 1} / {slides.length}
              </p>
            </div>
            {/* Native slide width is 1920px. Wrap in fixed-width container so layouts
                don't explode the page; allow horizontal scroll on smaller screens. */}
            <div className="overflow-x-auto">
              <div style={{ width: 1920, height: 1080 }} className="mx-auto">
                <Slide />
              </div>
            </div>
          </section>
        ))}
      </main>

      <footer className="max-w-[1100px] mx-auto px-6 py-10 text-center text-[14px] text-white/50">
        The Founders Circle · Mini-course · Lesson 1
      </footer>
    </div>
  );
}