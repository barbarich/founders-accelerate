import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { setStudentSession } from "@/lib/student-session";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { GraduationCap } from "lucide-react";

export default function CabinetLogin() {
  const [code, setCode] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const { data, error: rpcError } = await supabase.rpc(
      "validate_invite_code",
      { _code: code.trim(), _email: email.trim().toLowerCase() }
    );

    if (rpcError) {
      setError("Ошибка сервера. Попробуйте позже.");
      setLoading(false);
      return;
    }

    const result = data as {
      error?: string;
      participantId?: string;
      email?: string;
      cohortId?: string;
      fullName?: string | null;
    };

    if (result.error) {
      setError(result.error);
      setLoading(false);
      return;
    }

    setStudentSession({
      participantId: result.participantId!,
      email: result.email!,
      cohortId: result.cohortId!,
      fullName: result.fullName ?? null,
    });

    navigate("/cabinet");
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <Card className="w-full max-w-sm border-border">
        <CardHeader className="text-center pb-4">
          <div className="mx-auto w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-3">
            <GraduationCap className="w-5 h-5 text-primary" />
          </div>
          <CardTitle className="text-xl font-semibold">
            Личный кабинет
          </CardTitle>
          <CardDescription>The Founders Circle</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="code">Код доступа</Label>
              <Input
                id="code"
                type="text"
                value={code}
                onChange={(e) => setCode(e.target.value)}
                placeholder="XXXX-XXXX"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                required
              />
            </div>
            {error && <p className="text-sm text-destructive">{error}</p>}
            <Button type="submit" className="w-full" disabled={loading}>
              {loading ? "..." : "Войти"}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
