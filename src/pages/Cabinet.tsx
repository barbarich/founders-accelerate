import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { LogOut, Presentation, Loader2, Mail } from "lucide-react";
import type { Database } from "@/integrations/supabase/types";

type Meeting = Database["public"]["Tables"]["meetings"]["Row"];

export default function Cabinet() {
  const navigate = useNavigate();
  const [meetings, setMeetings] = useState<Meeting[]>([]);
  const [loading, setLoading] = useState(true);
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");

  useEffect(() => {
    const load = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) { setLoading(false); return; }

      const email = session.user.email ?? "";
      setUserEmail(email);
      setUserName(
        session.user.user_metadata?.full_name ??
        session.user.user_metadata?.name ??
        email
      );

      // Get participant record
      const { data: participant } = await supabase
        .from("participants")
        .select("id")
        .eq("user_id", session.user.id)
        .single();

      if (!participant) { setLoading(false); return; }

      // Get only assigned meetings via participant_meetings join
      const { data: assignments } = await supabase
        .from("participant_meetings")
        .select("meeting_id")
        .eq("participant_id", participant.id);

      if (assignments && assignments.length > 0) {
        const meetingIds = assignments.map(a => a.meeting_id);
        const { data: meetingsData } = await supabase
          .from("meetings")
          .select("*")
          .in("id", meetingIds)
          .order("week_number");
        if (meetingsData) setMeetings(meetingsData);
      }

      setLoading(false);
    };
    load();
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border">
        <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-lg font-bold text-foreground">The Founders Circle</h1>
            {userName && <p className="text-sm text-foreground">{userName}</p>}
            {userEmail && (
              <p className="text-xs text-muted-foreground flex items-center gap-1">
                <Mail className="w-3 h-3" /> {userEmail}
              </p>
            )}
          </div>
          <Button variant="ghost" size="sm" onClick={handleLogout}>
            <LogOut className="w-4 h-4 mr-1" /> Выйти
          </Button>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-8">
        <h2 className="text-xl font-semibold text-foreground mb-6">Презентации</h2>

        {loading ? (
          <div className="flex justify-center py-12">
            <Loader2 className="w-6 h-6 animate-spin text-muted-foreground" />
          </div>
        ) : meetings.length === 0 ? (
          <p className="text-muted-foreground text-center py-12">Пока нет доступных презентаций</p>
        ) : (
          <div className="space-y-3">
            {meetings.map((meeting) => (
              <Card key={meeting.id}>
                <CardContent className="p-4 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Presentation className="w-5 h-5 text-primary shrink-0" />
                    <div>
                      <p className="font-medium text-foreground">{meeting.title}</p>
                      {meeting.week_number && (
                        <p className="text-xs text-muted-foreground">Неделя {meeting.week_number}</p>
                      )}
                    </div>
                  </div>
                  {meeting.presentation_url && (
                    <Link to={`/cabinet/meeting/${meeting.id}`}>
                      <Button size="sm" variant="outline">Открыть</Button>
                    </Link>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
