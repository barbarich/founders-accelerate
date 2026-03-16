import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Checkbox } from "@/components/ui/checkbox";
import { Plus, Pencil, Trash2, Link as LinkIcon, FileText, ExternalLink, Presentation, Send } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "@/hooks/use-toast";
import type { Database } from "@/integrations/supabase/types";

type Meeting = Database["public"]["Tables"]["meetings"]["Row"];
type Material = Database["public"]["Tables"]["meeting_materials"]["Row"];
type MonthlyPlan = Database["public"]["Tables"]["monthly_plans"]["Row"];
type Participant = Database["public"]["Tables"]["participants"]["Row"];

export default function AdminMeetings() {
  const navigate = useNavigate();
  const [meetings, setMeetings] = useState<Meeting[]>([]);
  const [months, setMonths] = useState<MonthlyPlan[]>([]);
  const [materials, setMaterials] = useState<Record<string, Material[]>>({});
  const [open, setOpen] = useState(false);
  const [editing, setEditing] = useState<Meeting | null>(null);
  const [form, setForm] = useState({ month_id: "", week_number: 1, title: "", agenda: "", presentation_url: "" });
  const [expandedId, setExpandedId] = useState<string | null>(null);

  // Material form
  const [matOpen, setMatOpen] = useState(false);
  const [matMeetingId, setMatMeetingId] = useState<string | null>(null);
  const [matForm, setMatForm] = useState({ title: "", type: "link", url: "" });

  // Send to participants
  const [sendOpen, setSendOpen] = useState(false);
  const [sendMeetingId, setSendMeetingId] = useState<string | null>(null);
  const [participants, setParticipants] = useState<Participant[]>([]);
  const [alreadySent, setAlreadySent] = useState<Set<string>>(new Set());
  const [selected, setSelected] = useState<Set<string>>(new Set());
  const [sending, setSending] = useState(false);

  const load = async () => {
    const [{ data: mData }, { data: moData }] = await Promise.all([
      supabase.from("meetings").select("*").order("week_number"),
      supabase.from("monthly_plans").select("*").order("month_number"),
    ]);
    if (mData) setMeetings(mData);
    if (moData) setMonths(moData);
  };

  const loadMaterials = async (meetingId: string) => {
    const { data } = await supabase.from("meeting_materials").select("*").eq("meeting_id", meetingId).order("sort_order");
    if (data) setMaterials((prev) => ({ ...prev, [meetingId]: data }));
  };

  useEffect(() => { load(); }, []);

  const toggleExpand = (id: string) => {
    if (expandedId === id) {
      setExpandedId(null);
    } else {
      setExpandedId(id);
      if (!materials[id]) loadMaterials(id);
    }
  };

  const openNew = () => {
    setEditing(null);
    setForm({ month_id: months[0]?.id || "", week_number: meetings.length + 1, title: "", agenda: "", presentation_url: "" });
    setOpen(true);
  };

  const openEdit = (m: Meeting) => {
    setEditing(m);
    setForm({
      month_id: m.month_id || "",
      week_number: m.week_number || 1,
      title: m.title,
      agenda: m.agenda || "",
      presentation_url: m.presentation_url || "",
    });
    setOpen(true);
  };

  const save = async () => {
    const payload = { ...form, month_id: form.month_id || null };
    if (editing) {
      await supabase.from("meetings").update(payload).eq("id", editing.id);
    } else {
      await supabase.from("meetings").insert(payload);
    }
    setOpen(false);
    load();
  };

  const removeMeeting = async (id: string) => {
    if (!confirm("Удалить встречу и все материалы?")) return;
    await supabase.from("meetings").delete().eq("id", id);
    load();
  };

  const addMaterial = (meetingId: string) => {
    setMatMeetingId(meetingId);
    setMatForm({ title: "", type: "link", url: "" });
    setMatOpen(true);
  };

  const saveMaterial = async () => {
    if (!matMeetingId) return;
    await supabase.from("meeting_materials").insert({ ...matForm, meeting_id: matMeetingId });
    setMatOpen(false);
    loadMaterials(matMeetingId);
  };

  const removeMaterial = async (mat: Material) => {
    await supabase.from("meeting_materials").delete().eq("id", mat.id);
    loadMaterials(mat.meeting_id);
  };

  const getMonthLabel = (monthId: string | null) => {
    const m = months.find((mo) => mo.id === monthId);
    return m ? `М${m.month_number}` : "";
  };

  // Send to participants
  const openSendDialog = async (meetingId: string) => {
    setSendMeetingId(meetingId);
    setSending(false);

    const [{ data: parts }, { data: existing }] = await Promise.all([
      supabase.from("participants").select("*").eq("is_active", true).order("created_at"),
      supabase.from("participant_meetings").select("participant_id").eq("meeting_id", meetingId),
    ]);

    const activeParticipants = parts || [];
    setParticipants(activeParticipants);

    const alreadySet = new Set((existing || []).map(e => e.participant_id));
    setAlreadySent(alreadySet);
    setSelected(new Set());
    setSendOpen(true);
  };

  const toggleParticipant = (id: string) => {
    setSelected(prev => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id); else next.add(id);
      return next;
    });
  };

  const selectAll = () => {
    const notSent = participants.filter(p => !alreadySent.has(p.id)).map(p => p.id);
    setSelected(prev => prev.size === notSent.length ? new Set() : new Set(notSent));
  };

  const sendToParticipants = async () => {
    if (!sendMeetingId || selected.size === 0) return;
    setSending(true);
    const rows = Array.from(selected).map(pid => ({
      participant_id: pid,
      meeting_id: sendMeetingId,
    }));
    const { error } = await supabase.from("participant_meetings").insert(rows);
    setSending(false);
    if (error) {
      toast({ title: "Ошибка", description: error.message, variant: "destructive" });
    } else {
      toast({ title: "Отправлено", description: `Презентация отправлена ${selected.size} участникам` });
      setSendOpen(false);
    }
  };

  const notSentCount = participants.filter(p => !alreadySent.has(p.id)).length;

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Встречи</h1>
          <p className="text-sm text-muted-foreground">Планы встреч, презентации и материалы</p>
        </div>
        <Button onClick={openNew} size="sm">
          <Plus className="w-4 h-4 mr-1" /> Добавить
        </Button>
      </div>

      <div className="space-y-3">
        {meetings.map((m) => (
          <Card key={m.id} className="overflow-hidden">
            <CardContent className="p-0">
              <div
                className="p-4 cursor-pointer hover:bg-secondary/20 transition-colors"
                onClick={() => toggleExpand(m.id)}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3 min-w-0">
                    <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded shrink-0">
                      {getMonthLabel(m.month_id)} W{m.week_number}
                    </span>
                    <p className="font-medium text-foreground truncate">{m.title}</p>
                  </div>
                  <div className="flex items-center gap-1 ml-2 shrink-0" onClick={(e) => e.stopPropagation()}>
                    <Button variant="ghost" size="icon" className="h-8 w-8" title="Отправить участникам" onClick={() => openSendDialog(m.id)}>
                      <Send className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => openEdit(m)}>
                      <Pencil className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="icon" className="h-8 w-8 text-destructive" onClick={() => removeMeeting(m.id)}>
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>

              {expandedId === m.id && (
                <div className="border-t border-border p-4 bg-secondary/10">
                  {m.agenda && (
                    <div className="mb-4">
                      <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2">Повестка</p>
                      <pre className="text-sm text-foreground/80 whitespace-pre-wrap font-sans leading-relaxed">{m.agenda}</pre>
                    </div>
                  )}
                  {m.presentation_url && (
                    <div className="mb-4">
                      {m.presentation_url.startsWith("/admin/meeting/") ? (
                        <button onClick={() => navigate(m.presentation_url!)} className="text-sm text-primary hover:underline flex items-center gap-1">
                          <Presentation className="w-3.5 h-3.5" /> Открыть презентацию
                        </button>
                      ) : (
                        <a href={m.presentation_url} target="_blank" rel="noopener noreferrer" className="text-sm text-primary hover:underline flex items-center gap-1">
                          <ExternalLink className="w-3.5 h-3.5" /> Презентация
                        </a>
                      )}
                    </div>
                  )}

                  <div className="flex items-center justify-between mb-2">
                    <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Материалы</p>
                    <Button variant="outline" size="sm" className="h-7 text-xs" onClick={() => addMaterial(m.id)}>
                      <Plus className="w-3 h-3 mr-1" /> Добавить
                    </Button>
                  </div>

                  {(materials[m.id] || []).length > 0 ? (
                    <div className="space-y-1.5">
                      {(materials[m.id] || []).map((mat) => (
                        <div key={mat.id} className="flex items-center justify-between bg-card rounded-lg px-3 py-2">
                          <a href={mat.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-foreground hover:text-primary transition-colors min-w-0">
                            {mat.type === "link" ? <LinkIcon className="w-3.5 h-3.5 shrink-0" /> : <FileText className="w-3.5 h-3.5 shrink-0" />}
                            <span className="truncate">{mat.title}</span>
                          </a>
                          <Button variant="ghost" size="icon" className="h-7 w-7 text-destructive shrink-0" onClick={() => removeMaterial(mat)}>
                            <Trash2 className="w-3.5 h-3.5" />
                          </Button>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-xs text-muted-foreground py-2">Нет материалов</p>
                  )}
                </div>
              )}
            </CardContent>
          </Card>
        ))}
        {meetings.length === 0 && (
          <p className="text-center text-muted-foreground py-12 text-sm">Нет встреч</p>
        )}
      </div>

      {/* Meeting form */}
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>{editing ? "Редактировать встречу" : "Новая встреча"}</SheetTitle>
          </SheetHeader>
          <div className="space-y-4 mt-6">
            <div className="space-y-2">
              <Label>Месяц</Label>
              <Select value={form.month_id} onValueChange={(v) => setForm({ ...form, month_id: v })}>
                <SelectTrigger><SelectValue placeholder="Выберите месяц" /></SelectTrigger>
                <SelectContent>
                  {months.map((mo) => (
                    <SelectItem key={mo.id} value={mo.id}>М{mo.month_number}: {mo.title}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label>Неделя</Label>
              <Input type="number" min={1} value={form.week_number} onChange={(e) => setForm({ ...form, week_number: parseInt(e.target.value) || 1 })} />
            </div>
            <div className="space-y-2">
              <Label>Название</Label>
              <Input value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} />
            </div>
            <div className="space-y-2">
              <Label>Повестка</Label>
              <Textarea value={form.agenda} onChange={(e) => setForm({ ...form, agenda: e.target.value })} rows={8} className="font-mono text-sm" />
            </div>
            <div className="space-y-2">
              <Label>URL презентации</Label>
              <Input value={form.presentation_url} onChange={(e) => setForm({ ...form, presentation_url: e.target.value })} />
            </div>
            <Button onClick={save} className="w-full" disabled={!form.title}>
              {editing ? "Сохранить" : "Добавить"}
            </Button>
          </div>
        </SheetContent>
      </Sheet>

      {/* Material form */}
      <Sheet open={matOpen} onOpenChange={setMatOpen}>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Новый материал</SheetTitle>
          </SheetHeader>
          <div className="space-y-4 mt-6">
            <div className="space-y-2">
              <Label>Название</Label>
              <Input value={matForm.title} onChange={(e) => setMatForm({ ...matForm, title: e.target.value })} />
            </div>
            <div className="space-y-2">
              <Label>Тип</Label>
              <Select value={matForm.type} onValueChange={(v) => setMatForm({ ...matForm, type: v })}>
                <SelectTrigger><SelectValue /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="link">Ссылка</SelectItem>
                  <SelectItem value="file">Файл</SelectItem>
                  <SelectItem value="document">Документ</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label>URL</Label>
              <Input value={matForm.url} onChange={(e) => setMatForm({ ...matForm, url: e.target.value })} placeholder="https://..." />
            </div>
            <Button onClick={saveMaterial} className="w-full" disabled={!matForm.title || !matForm.url}>
              Добавить
            </Button>
          </div>
        </SheetContent>
      </Sheet>

      {/* Send to participants dialog */}
      <Dialog open={sendOpen} onOpenChange={setSendOpen}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>Отправить участникам</DialogTitle>
          </DialogHeader>
          <div className="space-y-3 max-h-[400px] overflow-y-auto">
            {participants.length === 0 ? (
              <p className="text-sm text-muted-foreground py-4 text-center">Нет активных участников</p>
            ) : (
              <>
                {notSentCount > 0 && (
                  <div className="flex items-center gap-2 pb-2 border-b border-border">
                    <Checkbox
                      checked={selected.size === notSentCount && notSentCount > 0}
                      onCheckedChange={selectAll}
                    />
                    <span className="text-sm font-medium text-foreground">Выбрать всех</span>
                  </div>
                )}
                {participants.map((p) => {
                  const already = alreadySent.has(p.id);
                  return (
                    <label key={p.id} className={`flex items-center gap-3 py-1.5 ${already ? "opacity-50" : "cursor-pointer"}`}>
                      <Checkbox
                        checked={already || selected.has(p.id)}
                        disabled={already}
                        onCheckedChange={() => toggleParticipant(p.id)}
                      />
                      <div className="min-w-0">
                        <p className="text-sm font-medium text-foreground truncate">
                          {p.full_name || "Без имени"}
                        </p>
                        <p className="text-xs text-muted-foreground truncate">{p.email}</p>
                      </div>
                      {already && (
                        <span className="text-xs text-muted-foreground ml-auto shrink-0">уже отправлено</span>
                      )}
                    </label>
                  );
                })}
              </>
            )}
          </div>
          <DialogFooter>
            <Button onClick={sendToParticipants} disabled={selected.size === 0 || sending}>
              <Send className="w-4 h-4 mr-1" />
              Отправить {selected.size > 0 && `(${selected.size})`}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
