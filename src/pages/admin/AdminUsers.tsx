import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Plus, Trash2, Shield } from "lucide-react";
import type { Database } from "@/integrations/supabase/types";

type AdminUser = Database["public"]["Tables"]["admin_users"]["Row"];

export default function AdminUsers() {
  const [admins, setAdmins] = useState<AdminUser[]>([]);
  const [newEmail, setNewEmail] = useState("");
  const [adding, setAdding] = useState(false);

  const load = async () => {
    const { data } = await supabase.from("admin_users").select("*").order("created_at");
    if (data) setAdmins(data);
  };

  useEffect(() => { load(); }, []);

  const addAdmin = async () => {
    if (!newEmail.includes("@")) return;
    setAdding(true);
    const { error } = await supabase.from("admin_users").insert({ email: newEmail.trim().toLowerCase() });
    if (error) {
      alert(error.message);
    } else {
      setNewEmail("");
      load();
    }
    setAdding(false);
  };

  const remove = async (admin: AdminUser) => {
    if (!confirm(`Удалить ${admin.email} из админов?`)) return;
    await supabase.from("admin_users").delete().eq("id", admin.id);
    load();
  };

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-foreground">Управление админами</h1>
        <p className="text-sm text-muted-foreground">Только пользователи из этого списка могут войти в админ-панель</p>
      </div>

      <div className="flex gap-2 mb-6">
        <Input
          value={newEmail}
          onChange={(e) => setNewEmail(e.target.value)}
          placeholder="email@example.com"
          type="email"
          className="max-w-sm"
          onKeyDown={(e) => e.key === "Enter" && addAdmin()}
        />
        <Button onClick={addAdmin} disabled={adding || !newEmail.includes("@")} size="sm">
          <Plus className="w-4 h-4 mr-1" /> Добавить
        </Button>
      </div>

      <div className="space-y-2">
        {admins.map((admin) => (
          <Card key={admin.id}>
            <CardContent className="p-3 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Shield className="w-4 h-4 text-primary" />
                <span className="text-sm text-foreground">{admin.email}</span>
              </div>
              <Button variant="ghost" size="icon" className="h-8 w-8 text-destructive" onClick={() => remove(admin)}>
                <Trash2 className="w-4 h-4" />
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
