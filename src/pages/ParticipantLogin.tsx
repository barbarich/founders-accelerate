import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Mail, Loader2, KeyRound, ArrowLeft } from "lucide-react";

export default function ParticipantLogin() {
  const navigate = useNavigate();
  const [step, setStep] = useState<"code" | "email" | "sent">("code");
  const [code, setCode] = useState("");
  const [codeId, setCodeId] = useState<string | null>(null);
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      if (session) navigate("/cabinet", { replace: true });
    });
    return () => subscription.unsubscribe();
  }, [navigate]);

  const validateCode = async () => {
    const trimmed = code.trim().toUpperCase();
    if (!trimmed) return;
    setLoading(true);
    setError("");

    const { data, error: err } = await supabase
      .from("invite_codes")
      .select("id, max_uses, used_count")
      .eq("code", trimmed)
      .eq("is_active", true)
      .maybeSingle();

    if (err || !data) {
      setError("Неверный или неактивный код приглашения");
      setLoading(false);
      return;
    }

    if (data.max_uses !== null && data.used_count >= data.max_uses) {
      setError("Код приглашения больше не действителен");
      setLoading(false);
      return;
    }

    setCodeId(data.id);
    localStorage.setItem("invite_code_id", data.id);
    setStep("email");
    setLoading(false);
  };

  const handleEmailOtp = async () => {
    if (!email.includes("@")) return;
    setLoading(true);
    setError("");
    const { error } = await supabase.auth.signInWithOtp({
      email: email.trim().toLowerCase(),
      options: { emailRedirectTo: `${window.location.origin}/cabinet` },
    });
    if (error) {
      setError(error.message);
    } else {
      setStep("sent");
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <Card className="w-full max-w-md border-border">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold text-foreground">
            The Founders Circle
          </CardTitle>
          <CardDescription>
            {step === "code" && "Введите код приглашения для доступа к программе"}
            {step === "email" && "Введите email для регистрации"}
            {step === "sent" && "Проверьте почту"}
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {step === "code" && (
            <>
              <div className="space-y-2">
                <Input
                  placeholder="Код приглашения"
                  value={code}
                  onChange={(e) => setCode(e.target.value.toUpperCase())}
                  onKeyDown={(e) => e.key === "Enter" && validateCode()}
                  className="text-center text-lg tracking-widest font-mono uppercase"
                  maxLength={20}
                />
                <Button
                  onClick={validateCode}
                  disabled={loading || !code.trim()}
                  className="w-full"
                >
                  {loading ? <Loader2 className="w-4 h-4 animate-spin mr-2" /> : <KeyRound className="w-4 h-4 mr-2" />}
                  Продолжить
                </Button>
              </div>
              {error && <p className="text-sm text-destructive text-center">{error}</p>}
            </>
          )}

          {step === "email" && (
            <>
              <div className="space-y-2">
                <Input
                  type="email"
                  placeholder="email@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleEmailOtp()}
                />
                <Button
                  onClick={handleEmailOtp}
                  disabled={loading || !email.includes("@")}
                  className="w-full"
                >
                  {loading ? <Loader2 className="w-4 h-4 animate-spin mr-2" /> : <Mail className="w-4 h-4 mr-2" />}
                  Получить ссылку для входа
                </Button>
              </div>
              <Button variant="ghost" size="sm" className="w-full" onClick={() => { setStep("code"); setError(""); }}>
                <ArrowLeft className="w-4 h-4 mr-1" /> Назад
              </Button>
              {error && <p className="text-sm text-destructive text-center">{error}</p>}
            </>
          )}

          {step === "sent" && (
            <div className="text-center space-y-3">
              <Mail className="w-12 h-12 mx-auto text-primary" />
              <p className="text-foreground font-medium">Проверьте почту</p>
              <p className="text-sm text-muted-foreground">
                Мы отправили ссылку для входа на <span className="font-medium text-foreground">{email}</span>
              </p>
              <Button variant="ghost" size="sm" onClick={() => { setStep("email"); }}>
                Использовать другой email
              </Button>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
