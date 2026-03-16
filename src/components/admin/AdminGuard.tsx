import { useEffect, useRef, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import type { Session } from "@supabase/supabase-js";

interface AdminGuardProps {
  children: React.ReactNode;
  fallback: React.ReactNode;
}

export function AdminGuard({ children, fallback }: AdminGuardProps) {
  const [session, setSession] = useState<Session | null>(null);
  const [isAdmin, setIsAdmin] = useState<boolean | null>(null);
  const [initialized, setInitialized] = useState(false);
  const checkingRef = useRef(false);

  // 1. Auth listener — sync only, no async work
  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setSession(session);
        if (!session) {
          setIsAdmin(false);
        }
        setInitialized(true);
      }
    );
    return () => subscription.unsubscribe();
  }, []);

  // 2. Admin check — runs when session changes
  useEffect(() => {
    if (!initialized) return;

    if (!session) {
      setIsAdmin(false);
      return;
    }

    if (checkingRef.current) return;
    checkingRef.current = true;

    supabase
      .from("admin_users")
      .select("id")
      .limit(1)
      .then(({ data, error }) => {
        setIsAdmin(!error && !!data && data.length > 0);
        checkingRef.current = false;
      });
  }, [session, initialized]);

  const loading = !initialized || (!!session && isAdmin === null);

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="w-6 h-6 border-2 border-primary border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  if (!session || !isAdmin) {
    return <>{fallback}</>;
  }

  return <>{children}</>;
}

export function useAdminSession() {
  const [session, setSession] = useState<Session | null>(null);

  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (_event, session) => setSession(session)
    );
    return () => subscription.unsubscribe();
  }, []);

  return session;
}
