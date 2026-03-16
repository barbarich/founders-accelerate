import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "@/components/ui/table";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Plus, Loader2, Copy, Check } from "lucide-react";
import { toast } from "@/hooks/use-toast";

interface InviteCode {
  id: string;
  code: string;
  label: string | null;
  max_uses: number | null;
  used_count: number;
  is_active: boolean;
  created_at: string;
}

function generateCode(): string {
  const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  let result = "";
  for (let i = 0; i < 6; i++) result += chars[Math.floor(Math.random() * chars.length)];
  return result;
}

export default function AdminInviteCodes() {
  const [codes, setCodes] = useState<InviteCode[]>([]);
  const [loading, setLoading] = useState(true);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [form, setForm] = useState({ code: "", label: "", max_uses: "" });
  const [saving, setSaving] = useState(false);
  const [copied, setCopied] = useState<string | null>(null);

  const load = async () => {
    const { data } = await supabase
      .from("invite_codes")
      .select("*")
      .order("created_at", { ascending: false });
    if (data) setCodes(data as InviteCode[]);
    setLoading(false);
  };

  useEffect(() => { load(); }, []);

  const openNew = () => {
    setForm({ code: generateCode(), label: "", max_uses: "" });
    setDialogOpen(true);
  };

  const save = async () => {
    setSaving(true);
    const payload: Record<string, unknown> = {
      code: form.code.trim().toUpperCase(),
      label: form.label.trim() || null,
      max_uses: form.max_uses ? parseInt(form.max_uses) : null,
    };
    const { error } = await supabase.from("invite_codes").insert(payload as any);
    setSaving(false);
    if (error) {
      toast({ title: "Ошибка", description: error.message, variant: "destructive" });
    } else {
      setDialogOpen(false);
      load();
    }
  };

  const toggleActive = async (c: InviteCode) => {
    await supabase.from("invite_codes").update({ is_active: !c.is_active } as any).eq("id", c.id);
    load();
  };

  const copyCode = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopied(code);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Коды приглашений</h1>
          <p className="text-sm text-muted-foreground">Создавайте коды и отслеживайте их использование</p>
        </div>
        <Button onClick={openNew} size="sm">
          <Plus className="w-4 h-4 mr-1" /> Создать код
        </Button>
      </div>

      {loading ? (
        <div className="flex justify-center py-12">
          <Loader2 className="w-6 h-6 animate-spin text-muted-foreground" />
        </div>
      ) : codes.length === 0 ? (
        <p className="text-muted-foreground text-center py-12">Нет кодов приглашений</p>
      ) : (
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Код</TableHead>
              <TableHead>Метка</TableHead>
              <TableHead>Использований</TableHead>
              <TableHead>Дата</TableHead>
              <TableHead className="text-right">Активен</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {codes.map((c) => (
              <TableRow key={c.id}>
                <TableCell>
                  <button
                    onClick={() => copyCode(c.code)}
                    className="inline-flex items-center gap-1.5 font-mono text-sm font-medium text-foreground hover:text-primary transition-colors"
                  >
                    {c.code}
                    {copied === c.code ? <Check className="w-3.5 h-3.5 text-green-500" /> : <Copy className="w-3.5 h-3.5 text-muted-foreground" />}
                  </button>
                </TableCell>
                <TableCell className="text-muted-foreground">{c.label || "—"}</TableCell>
                <TableCell>
                  <span className="font-mono text-sm">
                    {c.used_count}{c.max_uses !== null ? ` / ${c.max_uses}` : ""}
                  </span>
                </TableCell>
                <TableCell className="text-muted-foreground">
                  {new Date(c.created_at).toLocaleDateString("ru-RU")}
                </TableCell>
                <TableCell className="text-right">
                  <Switch checked={c.is_active} onCheckedChange={() => toggleActive(c)} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}

      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent className="max-w-sm">
          <DialogHeader>
            <DialogTitle>Новый код приглашения</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label>Код</Label>
              <div className="flex gap-2">
                <Input
                  value={form.code}
                  onChange={(e) => setForm({ ...form, code: e.target.value.toUpperCase() })}
                  className="font-mono uppercase tracking-widest"
                  maxLength={20}
                />
                <Button variant="outline" size="icon" onClick={() => setForm({ ...form, code: generateCode() })} title="Сгенерировать">
                  🔄
                </Button>
              </div>
            </div>
            <div className="space-y-2">
              <Label>Метка (необязательно)</Label>
              <Input
                value={form.label}
                onChange={(e) => setForm({ ...form, label: e.target.value })}
                placeholder="Когорта 1, Март 2026..."
              />
            </div>
            <div className="space-y-2">
              <Label>Макс. использований (пусто = безлимит)</Label>
              <Input
                type="number"
                min={1}
                value={form.max_uses}
                onChange={(e) => setForm({ ...form, max_uses: e.target.value })}
                placeholder="∞"
              />
            </div>
          </div>
          <DialogFooter>
            <Button onClick={save} disabled={saving || !form.code.trim()}>
              {saving ? <Loader2 className="w-4 h-4 animate-spin mr-1" /> : null}
              Создать
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
