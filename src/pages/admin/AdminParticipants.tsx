import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Switch } from "@/components/ui/switch";
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "@/components/ui/table";
import { Loader2 } from "lucide-react";
import type { Database } from "@/integrations/supabase/types";

type Participant = Database["public"]["Tables"]["participants"]["Row"];

interface InviteCode {
  id: string;
  code: string;
  label: string | null;
}

export default function AdminParticipants() {
  const [participants, setParticipants] = useState<Participant[]>([]);
  const [codes, setCodes] = useState<Record<string, InviteCode>>({});
  const [loading, setLoading] = useState(true);
  const [toggling, setToggling] = useState<string | null>(null);

  const load = async () => {
    const [{ data: pData }, { data: cData }] = await Promise.all([
      supabase.from("participants").select("*").order("created_at", { ascending: false }),
      supabase.from("invite_codes").select("id, code, label"),
    ]);
    if (pData) setParticipants(pData);
    if (cData) {
      const map: Record<string, InviteCode> = {};
      (cData as InviteCode[]).forEach(c => { map[c.id] = c; });
      setCodes(map);
    }
    setLoading(false);
  };

  useEffect(() => { load(); }, []);

  const toggleActive = async (p: Participant) => {
    setToggling(p.id);
    await supabase.from("participants").update({ is_active: !p.is_active }).eq("id", p.id);
    await load();
    setToggling(null);
  };

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-foreground">Участники</h1>
        <p className="text-sm text-muted-foreground">
          Все зарегистрированные участники программы. Отключите доступ тем, кто не участвует.
        </p>
      </div>

      {loading ? (
        <div className="flex justify-center py-12">
          <Loader2 className="w-6 h-6 animate-spin text-muted-foreground" />
        </div>
      ) : participants.length === 0 ? (
        <p className="text-muted-foreground text-center py-12">Пока нет зарегистрированных участников</p>
      ) : (
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Email</TableHead>
              <TableHead>Имя</TableHead>
              <TableHead>Код</TableHead>
              <TableHead>Дата регистрации</TableHead>
              <TableHead className="text-right">Доступ</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {participants.map((p) => {
              const code = (p as any).invite_code_id ? codes[(p as any).invite_code_id] : null;
              return (
                <TableRow key={p.id}>
                  <TableCell className="font-medium">{p.email}</TableCell>
                  <TableCell>{p.full_name || "—"}</TableCell>
                  <TableCell>
                    {code ? (
                      <span className="font-mono text-xs bg-primary/10 text-primary px-1.5 py-0.5 rounded">
                        {code.code}
                      </span>
                    ) : (
                      <span className="text-muted-foreground">—</span>
                    )}
                  </TableCell>
                  <TableCell className="text-muted-foreground">
                    {new Date(p.created_at).toLocaleDateString("ru-RU")}
                  </TableCell>
                  <TableCell className="text-right">
                    <Switch
                      checked={p.is_active}
                      disabled={toggling === p.id}
                      onCheckedChange={() => toggleActive(p)}
                    />
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      )}
    </div>
  );
}
