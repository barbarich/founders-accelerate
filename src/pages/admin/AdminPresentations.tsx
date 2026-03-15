import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Plus, ExternalLink, Pencil, Trash2 } from "lucide-react";
import type { Database } from "@/integrations/supabase/types";

type Presentation = Database["public"]["Tables"]["presentations"]["Row"];

export default function AdminPresentations() {
  const [items, setItems] = useState<Presentation[]>([]);
  const [open, setOpen] = useState(false);
  const [editing, setEditing] = useState<Presentation | null>(null);
  const [form, setForm] = useState({ title: "", description: "", url: "" });

  const load = async () => {
    const { data } = await supabase.from("presentations").select("*").order("sort_order");
    if (data) setItems(data);
  };

  useEffect(() => { load(); }, []);

  const openNew = () => {
    setEditing(null);
    setForm({ title: "", description: "", url: "" });
    setOpen(true);
  };

  const openEdit = (p: Presentation) => {
    setEditing(p);
    setForm({ title: p.title, description: p.description || "", url: p.url || "" });
    setOpen(true);
  };

  const save = async () => {
    if (editing) {
      await supabase.from("presentations").update(form).eq("id", editing.id);
    } else {
      await supabase.from("presentations").insert({ ...form, sort_order: items.length });
    }
    setOpen(false);
    load();
  };

  const remove = async (id: string) => {
    if (!confirm("Удалить презентацию?")) return;
    await supabase.from("presentations").delete().eq("id", id);
    load();
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Презентации</h1>
          <p className="text-sm text-muted-foreground">Ссылки на презентации программы</p>
        </div>
        <Button onClick={openNew} size="sm">
          <Plus className="w-4 h-4 mr-1" /> Добавить
        </Button>
      </div>

      <div className="space-y-3">
        {items.map((p) => (
          <Card key={p.id}>
            <CardContent className="p-4 flex items-center justify-between">
              <div className="min-w-0 flex-1">
                <p className="font-medium text-foreground truncate">{p.title}</p>
                {p.description && <p className="text-sm text-muted-foreground truncate">{p.description}</p>}
              </div>
              <div className="flex items-center gap-1 ml-4 shrink-0">
                {p.url && (
                  <a href={p.url} target="_blank" rel="noopener noreferrer">
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <ExternalLink className="w-4 h-4" />
                    </Button>
                  </a>
                )}
                <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => openEdit(p)}>
                  <Pencil className="w-4 h-4" />
                </Button>
                <Button variant="ghost" size="icon" className="h-8 w-8 text-destructive" onClick={() => remove(p.id)}>
                  <Trash2 className="w-4 h-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
        {items.length === 0 && (
          <p className="text-center text-muted-foreground py-12 text-sm">Нет презентаций</p>
        )}
      </div>

      <Sheet open={open} onOpenChange={setOpen}>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>{editing ? "Редактировать" : "Новая презентация"}</SheetTitle>
          </SheetHeader>
          <div className="space-y-4 mt-6">
            <div className="space-y-2">
              <Label>Название</Label>
              <Input value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} />
            </div>
            <div className="space-y-2">
              <Label>Описание</Label>
              <Textarea value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} rows={3} />
            </div>
            <div className="space-y-2">
              <Label>URL</Label>
              <Input value={form.url} onChange={(e) => setForm({ ...form, url: e.target.value })} placeholder="/pitch или https://..." />
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
