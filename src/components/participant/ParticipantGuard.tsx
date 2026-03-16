import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import type { Session } from "@supabase/supabase-js";

interface Props {
  children: React.ReactNode;
}

export default function ParticipantGuard({ children }: Props) {
  const navigate = useNavigate();
  const [status, setStatus] = useState<"loading" | "active" | "blocked" | "unauthenticated">("loading");

  useEffect(() => {
    let mounted = true;

    const check = async (session: Session | null) => {
      if (!session) {
        if (mounted) setStatus("unauthenticated");
        return;
      }

      // Ensure participant record exists
      const { data: existing } = await supabase
        .from("participants")
        .select("id, is_active")
        .eq("user_id", session.user.id)
        .maybeSingle();

      if (!existing) {
        // Read invite_code_id from localStorage (set during login flow)
        const inviteCodeId = localStorage.getItem("invite_code_id");

        const insertPayload: Record<string, unknown> = {
          user_id: session.user.id,
          email: session.user.email ?? "",
          full_name: session.user.user_metadata?.full_name ?? session.user.user_metadata?.name ?? null,
          avatar_url: session.user.user_metadata?.avatar_url ?? null,
        };

        if (inviteCodeId) {
          insertPayload.invite_code_id = inviteCodeId;
        }

        await supabase.from("participants").insert(insertPayload as any);

        // Increment used_count atomically
        if (inviteCodeId) {
          await supabase.rpc("use_invite_code", { _code_id: inviteCodeId });
          localStorage.removeItem("invite_code_id");
        }

        if (mounted) setStatus("active");
        return;
      }

      if (mounted) setStatus(existing.is_active ? "active" : "blocked");
    };

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      check(session);
    });

    return () => {
      mounted = false;
      subscription.unsubscribe();
    };
  }, []);

  useEffect(() => {
    if (status === "unauthenticated") navigate("/login", { replace: true });
  }, [status, navigate]);

  if (status === "loading" || status === "unauthenticated") {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="w-6 h-6 border-2 border-primary border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  if (status === "blocked") {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <div className="text-center space-y-3">
          <p className="text-xl font-semibold text-foreground">Доступ отключён</p>
          <p className="text-muted-foreground text-sm">Свяжитесь с организатором программы для восстановления доступа.</p>
          <button
            onClick={async () => { await supabase.auth.signOut(); navigate("/login"); }}
            className="text-sm text-primary hover:underline"
          >
            Выйти
          </button>
        </div>
      </div>
    );
  }

  return <>{children}</>;
}
