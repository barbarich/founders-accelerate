import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Switch } from "@/components/ui/switch";
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "@/components/ui/table";
import { Loader2 } from "lucide-react";
import type { Database } from "@/integrations/supabase/types";

type Participant = Database["public"]["Tables"]["participants"]["Row"];

export default function AdminParticipants() {
  const [participants, setParticipants] = useState<Participant[]>([]);
  const [loading, setLoading] = useState(true);
  const [toggling, setToggling] = useState<string | null>(null);

  const load = async () => {
    const { data } = await supabase
      .from("participants")
      .select("*")
      .order("created_at", { ascending: false });
    if (data) setParticipants(data);
    setLoading(false);
  };

  useEffect(() => { load(); }, []);

  const toggleActive = async (p: Participant) => {
    setToggling(p.id);
    await supabase
      .from("participants")
      .update({ is_active: !p.is_active })
      .eq("id", p.id);
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
              <TableHead>Дата регистрации</TableHead>
              <TableHead className="text-right">Доступ</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {participants.map((p) => (
              <TableRow key={p.id}>
                <TableCell className="font-medium">{p.email}</TableCell>
                <TableCell>{p.full_name || "—"}</TableCell>
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
            ))}
          </TableBody>
        </Table>
      )}
    </div>
  );
}
