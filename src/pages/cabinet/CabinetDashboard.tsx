import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { useStudentSession } from "@/components/cabinet/StudentGuard";
import { getCurrentWeek, getWeekTitle } from "@/data/program";
import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, Link as LinkIcon, Megaphone, Video, Calendar, ExternalLink } from "lucide-react";

interface Announcement {
  id: string;
  title: string;
  content: string;
  created_at: string;
}

interface Meeting {
  id: string;
  week_number: number;
  title: string;
  agenda: string | null;
}

const ZOOM_LINK = "https://us02web.zoom.us/j/89609077818?pwd=8hJUD5dEbU25lstTFvKQNqKd8KyzLk.1";

// 12 встреч, каждый понедельник с 16 марта 2026, 18:30
function getMeetingDate(weekNumber: number): Date {
  const start = new Date(2026, 2, 16, 18, 30); // March 16, 2026 18:30
  const date = new Date(start);
  date.setDate(date.getDate() + (weekNumber - 1) * 7);
  return date;
}

function formatMeetingDate(date: Date): string {
  return date.toLocaleDateString("ru-RU", {
    weekday: "long",
    day: "numeric",
    month: "long",
  });
}

export default function CabinetDashboard() {
  const session = useStudentSession();
  const [currentWeek, setCurrentWeek] = useState(1);
  const [progress, setProgress] = useState({ done: 0, total: 36 });
  const [announcements, setAnnouncements] = useState<Announcement[]>([]);

  useEffect(() => {
    if (!session) return;

    supabase
      .from("cohorts")
      .select("start_date")
      .eq("id", session.cohortId)
      .single()
      .then(({ data }) => {
        if (data) {
          setCurrentWeek(getCurrentWeek(data.start_date));
        }
      });

    supabase
      .from("progress_checklist")
      .select("id")
      .eq("participant_id", session.participantId)
      .eq("is_completed", true)
      .then(({ data }) => {
        setProgress({ done: data?.length ?? 0, total: 36 });
      });

    supabase
      .from("announcements")
      .select("*")
      .eq("cohort_id", session.cohortId)
      .order("created_at", { ascending: false })
      .limit(5)
      .then(({ data }) => {
        setAnnouncements((data as Announcement[]) ?? []);
      });
  }, [session]);

  const progressPercent = Math.round((progress.done / progress.total) * 100);

  // Find next upcoming meeting
  const now = new Date();
  let nextMeetingWeek = currentWeek;
  for (let w = 1; w <= 12; w++) {
    const meetDate = getMeetingDate(w);
    if (meetDate > now) {
      nextMeetingWeek = w;
      break;
    }
  }
  const nextMeetingDate = getMeetingDate(nextMeetingWeek);
  const isToday = now.toDateString() === nextMeetingDate.toDateString();

  return (
    <div>
      <h1 className="text-2xl font-bold text-foreground mb-1">Dashboard</h1>
      <p className="text-muted-foreground text-sm mb-8">
        Добро пожаловать, {session?.fullName || session?.email}
      </p>

      {/* Next meeting */}
      <Card className={`mb-6 ${isToday ? "border-primary bg-primary/5" : "border-border"}`}>
        <CardContent className="p-5">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-primary mb-1 flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5" />
                {isToday ? "Сегодня" : "Ближайшая встреча"}
              </p>
              <p className="text-lg font-bold text-foreground">
                Встреча {nextMeetingWeek} — {getWeekTitle(nextMeetingWeek)}
              </p>
              <p className="text-sm text-muted-foreground mt-1">
                {formatMeetingDate(nextMeetingDate)}, 18:30–20:30
              </p>
            </div>
            <a
              href={ZOOM_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 inline-flex items-center gap-2 bg-primary text-primary-foreground text-sm font-semibold px-5 py-2.5 rounded-lg hover:bg-primary/90 transition-all hover:scale-[1.02] active:scale-[0.98] shadow-md shadow-primary/20"
            >
              <Video className="w-4 h-4" />
              Присоединиться
              <ExternalLink className="w-3.5 h-3.5 opacity-70" />
            </a>
          </div>
        </CardContent>
      </Card>

      {/* Current week + progress */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        <Card className="border-primary/25 bg-primary/5">
          <CardContent className="p-5">
            <p className="text-xs font-semibold uppercase tracking-wider text-primary mb-1">
              Текущая неделя
            </p>
            <p className="text-2xl font-bold text-foreground">
              Неделя {currentWeek}
            </p>
            <p className="text-sm text-muted-foreground mt-1">
              {getWeekTitle(currentWeek)}
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-5">
            <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1">
              Прогресс
            </p>
            <p className="text-2xl font-bold text-foreground">
              {progress.done}/{progress.total}
            </p>
            <div className="mt-2 h-2 bg-secondary rounded-full overflow-hidden">
              <div
                className="h-full bg-primary rounded-full transition-all"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quick links */}
      <div className="grid grid-cols-2 gap-4 mb-8">
        <Link to="/cabinet/program">
          <Card className="hover:border-primary/30 transition-colors cursor-pointer">
            <CardContent className="p-5 flex items-center gap-3">
              <BookOpen className="w-5 h-5 text-muted-foreground" />
              <span className="text-sm font-medium">Программа</span>
            </CardContent>
          </Card>
        </Link>
        <Link to="/cabinet/resources">
          <Card className="hover:border-primary/30 transition-colors cursor-pointer">
            <CardContent className="p-5 flex items-center gap-3">
              <LinkIcon className="w-5 h-5 text-muted-foreground" />
              <span className="text-sm font-medium">Ресурсы</span>
            </CardContent>
          </Card>
        </Link>
      </div>

      {/* Announcements */}
      <div>
        <h2 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
          <Megaphone className="w-5 h-5" />
          Объявления
        </h2>
        {announcements.length === 0 ? (
          <p className="text-sm text-muted-foreground">Пока нет объявлений</p>
        ) : (
          <div className="space-y-3">
            {announcements.map((a) => (
              <Card key={a.id}>
                <CardContent className="p-4">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <p className="text-sm font-medium text-foreground">
                        {a.title}
                      </p>
                      <p className="text-sm text-muted-foreground mt-1">
                        {a.content}
                      </p>
                    </div>
                    <p className="text-xs text-muted-foreground whitespace-nowrap">
                      {new Date(a.created_at).toLocaleDateString("ru-RU")}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
