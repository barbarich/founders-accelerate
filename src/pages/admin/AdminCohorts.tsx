import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Plus, GraduationCap, Users } from "lucide-react";

interface Cohort {
  id: string;
  name: string;
  start_date: string;
  is_active: boolean;
  created_at: string;
}

export default function AdminCohorts() {
  const [cohorts, setCohorts] = useState<Cohort[]>([]);
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({ name: "", start_date: "", is_active: true });
  const [studentCounts, setStudentCounts] = useState<Record<string, number>>({});

  const load = async () => {
    const { data } = await supabase
      .from("cohorts")
      .select("*")
      .order("created_at", { ascending: false });
    const list = (data as Cohort[]) ?? [];
    setCohorts(list);

    // Load student counts
    const counts: Record<string, number> = {};
    for (const c of list) {
      const { count } = await supabase
        .from("participants")
        .select("id", { count: "exact", head: true })
        .eq("cohort_id", c.id);
      counts[c.id] = count ?? 0;
    }
    setStudentCounts(counts);
  };

  useEffect(() => {
    load();
  }, []);

  const save = async () => {
    await supabase.from("cohorts").insert({
      name: form.name,
      start_date: form.start_date,
      is_active: form.is_active,
    });
    setOpen(false);
    setForm({ name: "", start_date: "", is_active: true });
    load();
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-foreground mb-1">Потоки</h1>
          <p className="text-muted-foreground text-sm">
            Управление группами студентов
          </p>
        </div>
        <Button onClick={() => setOpen(true)} size="sm">
          <Plus className="w-4 h-4 mr-1" /> Новый поток
        </Button>
      </div>

      {cohorts.length === 0 ? (
        <p className="text-sm text-muted-foreground">Потоков пока нет</p>
      ) : (
        <div className="grid gap-4">
          {cohorts.map((c) => (
            <Link key={c.id} to={`/admin/cohorts/${c.id}`}>
              <Card className="hover:border-primary/30 transition-colors cursor-pointer">
                <CardContent className="p-5 flex items-center gap-4">
                  <GraduationCap className="w-5 h-5 text-muted-foreground shrink-0" />
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-foreground">
                      {c.name}
                    </p>
                    <p className="text-xs text-muted-foreground mt-0.5">
                      Старт:{" "}
                      {new Date(c.start_date).toLocaleDateString("ru-RU")}
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-xs text-muted-foreground flex items-center gap-1">
                      <Users className="w-3 h-3" />
                      {studentCounts[c.id] ?? 0}
                    </span>
                    <span
                      className={`text-xs px-2 py-0.5 rounded-full ${
                        c.is_active
                          ? "bg-emerald-500/10 text-emerald-500"
                          : "bg-muted text-muted-foreground"
                      }`}
                    >
                      {c.is_active ? "Активный" : "Завершён"}
                    </span>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      )}

      <Sheet open={open} onOpenChange={setOpen}>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Новый поток</SheetTitle>
          </SheetHeader>
          <div className="space-y-4 mt-6">
            <div className="space-y-2">
              <Label>Название</Label>
              <Input
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="Поток 1 — Март 2026"
              />
            </div>
            <div className="space-y-2">
              <Label>Дата старта</Label>
              <Input
                type="date"
                value={form.start_date}
                onChange={(e) =>
                  setForm({ ...form, start_date: e.target.value })
                }
              />
            </div>
            <div className="flex items-center gap-2">
              <Switch
                checked={form.is_active}
                onCheckedChange={(v) => setForm({ ...form, is_active: v })}
              />
              <Label>Активный</Label>
            </div>
            <Button onClick={save} className="w-full" disabled={!form.name || !form.start_date}>
              Создать
            </Button>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
