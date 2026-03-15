import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Plus, Pencil, Trash2 } from "lucide-react";
import type { Database } from "@/integrations/supabase/types";

type MonthlyPlan = Database["public"]["Tables"]["monthly_plans"]["Row"];

export default function AdminMonthlyPlans() {
  const [items, setItems] = useState<MonthlyPlan[]>([]);
  const [open, setOpen] = useState(false);
  const [editing, setEditing] = useState<MonthlyPlan | null>(null);
  const [form, setForm] = useState({ month_number: 1, title: "", content: "" });
  const [viewId, setViewId] = useState<string | null>(null);

  const load = async () => {
    const { data } = await supabase.from("monthly_plans").select("*").order("month_number");
    if (data) setItems(data);
  };

  useEffect(() => { load(); }, []);

  const openNew = () => {
    setEditing(null);
    setForm({ month_number: (items.length > 0 ? Math.max(...items.map(i => i.month_number)) + 1 : 1), title: "", content: "" });
    setOpen(true);
  };

  const openEdit = (p: MonthlyPlan) => {
    setEditing(p);
    setForm({ month_number: p.month_number, title: p.title, content: p.content || "" });
    setOpen(true);
  };

  const save = async () => {
    if (editing) {
      await supabase.from("monthly_plans").update(form).eq("id", editing.id);
    } else {
      await supabase.from("monthly_plans").insert(form);
    }
    setOpen(false);
    load();
  };

  const remove = async (id: string) => {
    if (!confirm("Удалить план?")) return;
    await supabase.from("monthly_plans").delete().eq("id", id);
    load();
  };

  const viewing = items.find(i => i.id === viewId);

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Помесячный план</h1>
          <p className="text-sm text-muted-foreground">Учебный план по месяцам</p>
        </div>
        <Button onClick={openNew} size="sm">
          <Plus className="w-4 h-4 mr-1" /> Добавить
        </Button>
      </div>

      <div className="space-y-3">
        {items.map((p) => (
          <Card key={p.id} className="cursor-pointer hover:border-primary/30 transition-colors" onClick={() => setViewId(viewId === p.id ? null : p.id)}>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs text-muted-foreground font-medium">Месяц {p.month_number}</p>
                  <p className="font-medium text-foreground">{p.title}</p>
                </div>
                <div className="flex items-center gap-1" onClick={(e) => e.stopPropagation()}>
                  <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => openEdit(p)}>
                    <Pencil className="w-4 h-4" />
                  </Button>
                  <Button variant="ghost" size="icon" className="h-8 w-8 text-destructive" onClick={() => remove(p.id)}>
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              </div>
              {viewId === p.id && p.content && (
                <div className="mt-4 pt-4 border-t border-border">
                  <pre className="text-sm text-foreground/80 whitespace-pre-wrap font-sans leading-relaxed">{p.content}</pre>
                </div>
              )}
            </CardContent>
          </Card>
        ))}
        {items.length === 0 && (
          <p className="text-center text-muted-foreground py-12 text-sm">Нет планов</p>
        )}
      </div>

      <Sheet open={open} onOpenChange={setOpen}>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>{editing ? "Редактировать" : "Новый месяц"}</SheetTitle>
          </SheetHeader>
          <div className="space-y-4 mt-6">
            <div className="space-y-2">
              <Label>Номер месяца</Label>
              <Input type="number" min={1} value={form.month_number} onChange={(e) => setForm({ ...form, month_number: parseInt(e.target.value) || 1 })} />
            </div>
            <div className="space-y-2">
              <Label>Название</Label>
              <Input value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} />
            </div>
            <div className="space-y-2">
              <Label>Содержание (Markdown)</Label>
              <Textarea value={form.content} onChange={(e) => setForm({ ...form, content: e.target.value })} rows={12} className="font-mono text-sm" />
            </div>
            <Button onClick={save} className="w-full" disabled={!form.title}>
              {editing ? "Сохранить" : "Добавить"}
            </Button>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
