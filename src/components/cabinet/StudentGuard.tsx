import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import {
  getStudentSession,
  clearStudentSession,
  type StudentSession,
} from "@/lib/student-session";

interface StudentGuardProps {
  children: React.ReactNode;
  fallback: React.ReactNode;
}

export function StudentGuard({ children, fallback }: StudentGuardProps) {
  const [valid, setValid] = useState<boolean | null>(null);

  useEffect(() => {
    const session = getStudentSession();
    if (!session) {
      setValid(false);
      return;
    }

    supabase
      .from("participants")
      .select("id, is_active")
      .eq("id", session.participantId)
      .single()
      .then(({ data, error }) => {
        if (error || !data || !data.is_active) {
          clearStudentSession();
          setValid(false);
        } else {
          setValid(true);
        }
      });
  }, []);

  if (valid === null) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="w-6 h-6 border-2 border-primary border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  if (!valid) {
    return <>{fallback}</>;
  }

  return <>{children}</>;
}

export function useStudentSession(): StudentSession | null {
  const [session, setSession] = useState<StudentSession | null>(null);

  useEffect(() => {
    setSession(getStudentSession());
  }, []);

  return session;
}
