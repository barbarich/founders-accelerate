import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useStudentSession } from "@/components/cabinet/StudentGuard";
import { months, getCurrentWeek } from "@/data/program";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Checkbox } from "@/components/ui/checkbox";
import { ExternalLink, Presentation, Video, FileText, CheckCircle2, Calendar } from "lucide-react";

const ZOOM_LINK = "https://us02web.zoom.us/j/89609077818?pwd=8hJUD5dEbU25lstTFvKQNqKd8KyzLk.1";

function getMeetingDate(weekNumber: number): Date {
  const start = new Date(2026, 2, 16, 18, 30);
  const date = new Date(start);
  date.setDate(date.getDate() + (weekNumber - 1) * 7);
  return date;
}

function formatMeetingDate(date: Date): string {
  return date.toLocaleDateString("ru-RU", {
    weekday: "short",
    day: "numeric",
    month: "short",
  });
}

interface CohortMaterial {
  id: string;
  week_number: number;
  type: string;
  title: string;
  url: string;
}

interface ProgressItem {
  week_number: number;
  item_key: string;
  is_completed: boolean;
}

const CHECKLIST_ITEMS = [
  { key: "watched_recording", label: "Посмотрел запись" },
  { key: "read_presentation", label: "Изучил презентацию" },
  { key: "did_homework", label: "Выполнил домашнее задание" },
];

export default function CabinetProgram() {
  const session = useStudentSession();
  const [materials, setMaterials] = useState<CohortMaterial[]>([]);
  const [progress, setProgress] = useState<ProgressItem[]>([]);
  const [currentWeek, setCurrentWeek] = useState(1);

  useEffect(() => {
    if (!session) return;

    supabase
      .from("cohorts")
      .select("start_date")
      .eq("id", session.cohortId)
      .single()
      .then(({ data }) => {
        if (data) setCurrentWeek(getCurrentWeek(data.start_date));
      });

    supabase
      .from("cohort_materials")
      .select("*")
      .eq("cohort_id", session.cohortId)
      .then(({ data }) => {
        setMaterials((data as CohortMaterial[]) ?? []);
      });

    supabase
      .from("progress_checklist")
      .select("week_number, item_key, is_completed")
      .eq("participant_id", session.participantId)
      .then(({ data }) => {
        setProgress((data as ProgressItem[]) ?? []);
      });
  }, [session]);

  const getMaterialsForWeek = (weekNumber: number) =>
    materials.filter((m) => m.week_number === weekNumber);

  const isChecked = (weekNumber: number, itemKey: string) =>
    progress.some(
      (p) =>
        p.week_number === weekNumber &&
        p.item_key === itemKey &&
        p.is_completed
    );

  const getWeekCompletedCount = (weekNumber: number) =>
    CHECKLIST_ITEMS.filter((item) => isChecked(weekNumber, item.key)).length;

  const toggleProgress = async (
    weekNumber: number,
    itemKey: string,
    checked: boolean
  ) => {
    if (!session) return;

    // Optimistic update
    setProgress((prev) => {
      const filtered = prev.filter(
        (p) => !(p.week_number === weekNumber && p.item_key === itemKey)
      );
      return [
        ...filtered,
        { week_number: weekNumber, item_key: itemKey, is_completed: checked },
      ];
    });

    await supabase.rpc("toggle_progress", {
      _participant_id: session.participantId,
      _week_number: weekNumber,
      _item_key: itemKey,
      _is_completed: checked,
    });
  };

  const materialIcon = (type: string) => {
    switch (type) {
      case "presentation":
        return <Presentation className="w-4 h-4" />;
      case "video":
        return <Video className="w-4 h-4" />;
      default:
        return <FileText className="w-4 h-4" />;
    }
  };

  const allWeeks = months.flatMap((m) => m.weeks);

  return (
    <div>
      <h1 className="text-2xl font-bold text-foreground mb-1">Программа</h1>
      <p className="text-muted-foreground text-sm mb-8">
        12 недель акселератора. Материалы появляются после каждого занятия.
      </p>

      <Accordion
        type="single"
        collapsible
        defaultValue={`week-${currentWeek}`}
        className="space-y-3"
      >
        {allWeeks.map((week) => {
          const weekMaterials = getMaterialsForWeek(week.number);
          const completedCount = getWeekCompletedCount(week.number);
          const month = months.find((m) =>
            m.weeks.some((w) => w.number === week.number)
          )!;

          return (
            <AccordionItem
              key={week.number}
              value={`week-${week.number}`}
              className="border border-border rounded-xl overflow-hidden bg-card"
            >
              <AccordionTrigger className="px-5 py-4 hover:no-underline">
                <div className="flex items-center gap-3 text-left w-full">
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-muted-foreground font-medium uppercase tracking-wider">
                        Неделя {week.number}
                      </span>
                      {week.number === currentWeek && (
                        <span className="text-[10px] bg-primary/10 text-primary px-2 py-0.5 rounded-full font-medium">
                          Сейчас
                        </span>
                      )}
                      {completedCount === 3 && (
                        <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                      )}
                    </div>
                    <p className="text-sm font-semibold text-foreground mt-0.5">
                      {week.title}
                    </p>
                  </div>
                  {completedCount > 0 && completedCount < 3 && (
                    <span className="text-xs text-muted-foreground">
                      {completedCount}/3
                    </span>
                  )}
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-5 pb-5">
                {/* Meeting info + Zoom button */}
                {(() => {
                  const meetDate = getMeetingDate(week.number);
                  const now = new Date();
                  const isMeetingDay = now.toDateString() === meetDate.toDateString();
                  const isPast = meetDate < now;
                  return (
                    <div className={`flex items-center justify-between gap-3 mb-5 p-3.5 rounded-lg border ${isMeetingDay ? "border-primary/40 bg-primary/5" : "border-border bg-secondary/30"}`}>
                      <div className="flex items-center gap-2.5">
                        <Calendar className={`w-4 h-4 ${isMeetingDay ? "text-primary" : "text-muted-foreground"}`} />
                        <div>
                          <p className="text-sm font-medium text-foreground">
                            {formatMeetingDate(meetDate)}, 18:30–20:30
                          </p>
                          {isMeetingDay && (
                            <p className="text-xs text-primary font-medium mt-0.5">Сегодня!</p>
                          )}
                        </div>
                      </div>
                      {!isPast || isMeetingDay ? (
                        <a
                          href={ZOOM_LINK}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`shrink-0 inline-flex items-center gap-2 text-sm font-semibold px-4 py-2 rounded-lg transition-all hover:scale-[1.02] active:scale-[0.98] ${isMeetingDay ? "bg-primary text-primary-foreground shadow-md shadow-primary/20 hover:bg-primary/90" : "bg-secondary text-foreground hover:bg-secondary/80 border border-border"}`}
                        >
                          <Video className="w-4 h-4" />
                          Присоединиться
                        </a>
                      ) : (
                        <span className="text-xs text-muted-foreground">Встреча прошла</span>
                      )}
                    </div>
                  );
                })()}

                {/* Materials */}
                <div className="mb-5">
                  <p className="text-xs font-semibold uppercase tracking-wider text-primary mb-3">
                    Материалы
                  </p>
                  {weekMaterials.length > 0 ? (
                    <div className="space-y-2">
                      {weekMaterials.map((m) => (
                        <a
                          key={m.id}
                          href={m.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-sm text-foreground/80 hover:text-primary transition-colors"
                        >
                          {materialIcon(m.type)}
                          <span>{m.title}</span>
                          <ExternalLink className="w-3 h-3 ml-auto opacity-50" />
                        </a>
                      ))}
                    </div>
                  ) : (
                    <p className="text-sm text-muted-foreground">
                      Скоро будет доступно
                    </p>
                  )}
                </div>

                {/* Program content */}
                <div className="space-y-4 mb-5">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-primary mb-2">
                      Учу и показываю
                    </p>
                    <ul className="space-y-1">
                      {week.teach.map((item, i) => (
                        <li
                          key={i}
                          className="flex gap-2 text-[13px] text-foreground/80"
                        >
                          <span className="w-1 h-1 rounded-full bg-primary mt-[7px] shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-blue-400 mb-2">
                      Делаем вместе
                    </p>
                    <ul className="space-y-1">
                      {week.together.map((item, i) => (
                        <li
                          key={i}
                          className="flex gap-2 text-[13px] text-foreground/80"
                        >
                          <span className="w-1 h-1 rounded-full bg-blue-400 mt-[7px] shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-secondary/40 rounded-lg p-4">
                    <p className="text-xs font-semibold uppercase tracking-wider text-emerald-400 mb-2">
                      Задание на неделю
                    </p>
                    <ul className="space-y-1">
                      {week.homework.map((item, i) => (
                        <li
                          key={i}
                          className="flex gap-2 text-[13px] text-foreground/80"
                        >
                          <span className="w-1 h-1 rounded-full bg-emerald-400 mt-[7px] shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Progress checklist */}
                <div className="border-t border-border pt-4">
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">
                    Мой прогресс
                  </p>
                  <div className="space-y-2">
                    {CHECKLIST_ITEMS.map((item) => (
                      <label
                        key={item.key}
                        className="flex items-center gap-3 cursor-pointer"
                      >
                        <Checkbox
                          checked={isChecked(week.number, item.key)}
                          onCheckedChange={(checked) =>
                            toggleProgress(
                              week.number,
                              item.key,
                              checked as boolean
                            )
                          }
                        />
                        <span className="text-sm text-foreground/80">
                          {item.label}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          );
        })}
      </Accordion>
    </div>
  );
}
