import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Plus, Trash2 } from "lucide-react";

interface Announcement {
  id: string;
  cohort_id: string;
  title: string;
  content: string;
  created_at: string;
}

interface Cohort {
  id: string;
  name: string;
}

export default function AdminAnnouncements() {
  const [announcements, setAnnouncements] = useState<Announcement[]>([]);
  const [cohorts, setCohorts] = useState<Cohort[]>([]);
  const [filterCohort, setFilterCohort] = useState<string>("all");
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({ cohort_id: "", title: "", content: "" });

  const load = async () => {
    const { data: cohortsData } = await supabase
      .from("cohorts")
      .select("id, name")
      .order("created_at", { ascending: false });
    const cohortsList = (cohortsData as Cohort[]) ?? [];
    setCohorts(cohortsList);

    let query = supabase
      .from("announcements")
      .select("*")
      .order("created_at", { ascending: false });

    if (filterCohort !== "all") {
      query = query.eq("cohort_id", filterCohort);
    }

    const { data } = await query;
    setAnnouncements((data as Announcement[]) ?? []);
  };

  useEffect(() => {
    load();
  }, [filterCohort]);

  const save = async () => {
    await supabase.from("announcements").insert({
      cohort_id: form.cohort_id,
      title: form.title,
      content: form.content,
    });
    setOpen(false);
    setForm({ cohort_id: "", title: "", content: "" });
    load();
  };

  const remove = async (id: string) => {
    await supabase.from("announcements").delete().eq("id", id);
    load();
  };

  const getCohortName = (cohortId: string) =>
    cohorts.find((c) => c.id === cohortId)?.name ?? "—";

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-foreground mb-1">
            Объявления
          </h1>
          <p className="text-muted-foreground text-sm">
            Новости и уведомления для студентов
          </p>
        </div>
        <Button
          onClick={() => {
            setForm({
              cohort_id: cohorts[0]?.id ?? "",
              title: "",
              content: "",
            });
            setOpen(true);
          }}
          size="sm"
        >
          <Plus className="w-4 h-4 mr-1" /> Новое
        </Button>
      </div>

      {/* Filter */}
      <div className="mb-6">
        <select
          value={filterCohort}
          onChange={(e) => setFilterCohort(e.target.value)}
          className="text-sm border border-border rounded-lg px-3 py-2 bg-background"
        >
          <option value="all">Все потоки</option>
          {cohorts.map((c) => (
            <option key={c.id} value={c.id}>
              {c.name}
            </option>
          ))}
        </select>
      </div>

      {announcements.length === 0 ? (
        <p className="text-sm text-muted-foreground">Объявлений пока нет</p>
      ) : (
        <div className="space-y-3">
          {announcements.map((a) => (
            <Card key={a.id}>
              <CardContent className="p-4">
                <div className="flex items-start justify-between gap-2">
                  <div className="flex-1">
                    <p className="text-sm font-medium text-foreground">
                      {a.title}
                    </p>
                    <p className="text-sm text-muted-foreground mt-1">
                      {a.content}
                    </p>
                    <p className="text-xs text-muted-foreground mt-2">
                      {getCohortName(a.cohort_id)} &middot;{" "}
                      {new Date(a.created_at).toLocaleDateString("ru-RU")}
                    </p>
                  </div>
                  <button
                    onClick={() => remove(a.id)}
                    className="text-muted-foreground hover:text-destructive"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      <Sheet open={open} onOpenChange={setOpen}>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Новое объявление</SheetTitle>
          </SheetHeader>
          <div className="space-y-4 mt-6">
            <div className="space-y-2">
              <Label>Поток</Label>
              <select
                value={form.cohort_id}
                onChange={(e) =>
                  setForm({ ...form, cohort_id: e.target.value })
                }
                className="w-full text-sm border border-border rounded-lg px-3 py-2 bg-background"
              >
                {cohorts.map((c) => (
                  <option key={c.id} value={c.id}>
                    {c.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="space-y-2">
              <Label>Заголовок</Label>
              <Input
                value={form.title}
                onChange={(e) => setForm({ ...form, title: e.target.value })}
                placeholder="Перенос встречи"
              />
            </div>
            <div className="space-y-2">
              <Label>Текст</Label>
              <Textarea
                value={form.content}
                onChange={(e) => setForm({ ...form, content: e.target.value })}
                placeholder="Встреча переносится на четверг..."
                rows={4}
              />
            </div>
            <Button
              onClick={save}
              className="w-full"
              disabled={!form.cohort_id || !form.title || !form.content}
            >
              Опубликовать
            </Button>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
