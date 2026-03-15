import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent } from "@/components/ui/card";
import { Presentation, CalendarDays, Video, Users } from "lucide-react";
import { Link } from "react-router-dom";

export default function AdminDashboard() {
  const [counts, setCounts] = useState({ presentations: 0, plans: 0, meetings: 0, admins: 0 });

  useEffect(() => {
    Promise.all([
      supabase.from("presentations").select("id", { count: "exact", head: true }),
      supabase.from("monthly_plans").select("id", { count: "exact", head: true }),
      supabase.from("meetings").select("id", { count: "exact", head: true }),
      supabase.from("admin_users").select("id", { count: "exact", head: true }),
    ]).then(([p, m, mt, a]) => {
      setCounts({
        presentations: p.count ?? 0,
        plans: m.count ?? 0,
        meetings: mt.count ?? 0,
        admins: a.count ?? 0,
      });
    });
  }, []);

  const cards = [
    { label: "Презентации", count: counts.presentations, icon: Presentation, to: "/admin/presentations" },
    { label: "Месячные планы", count: counts.plans, icon: CalendarDays, to: "/admin/plans" },
    { label: "Встречи", count: counts.meetings, icon: Video, to: "/admin/meetings" },
    { label: "Админы", count: counts.admins, icon: Users, to: "/admin/users" },
  ];

  return (
    <div>
      <h1 className="text-2xl font-bold text-foreground mb-1">Dashboard</h1>
      <p className="text-muted-foreground text-sm mb-8">Управление программой акселератора</p>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {cards.map((c) => (
          <Link key={c.to} to={c.to}>
            <Card className="hover:border-primary/30 transition-colors cursor-pointer">
              <CardContent className="p-5">
                <c.icon className="w-5 h-5 text-muted-foreground mb-3" />
                <p className="text-2xl font-bold text-foreground">{c.count}</p>
                <p className="text-sm text-muted-foreground">{c.label}</p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
