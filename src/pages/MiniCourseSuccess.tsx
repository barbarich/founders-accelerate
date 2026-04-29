import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { CheckCircle2, Loader2, ArrowRight, AlertCircle } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

type Status = "checking" | "paid" | "pending" | "error";

export default function MiniCourseSuccess() {
  const [params] = useSearchParams();
  const sessionId = params.get("session_id");
  const [status, setStatus] = useState<Status>("checking");
  const [email, setEmail] = useState<string | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  useEffect(() => {
    if (!sessionId) {
      setStatus("error");
      setErrorMsg("Не найден идентификатор платежа.");
      return;
    }
    let cancelled = false;
    (async () => {
      try {
        const { data, error } = await supabase.functions.invoke("verify-payment", {
          body: { session_id: sessionId },
        });
        if (cancelled) return;
        if (error) throw error;
        const result = data as { status: string; email?: string | null };
        setEmail(result.email ?? null);
        setStatus(result.status === "paid" ? "paid" : "pending");
      } catch (err) {
        if (cancelled) return;
        console.error(err);
        setStatus("error");
        setErrorMsg(err instanceof Error ? err.message : "Что-то пошло не так");
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [sessionId]);

  return (
    <div className="min-h-screen bg-[#0d0d0d] text-white flex items-center justify-center px-6 py-16">
      <div className="max-w-xl w-full text-center">
        {status === "checking" && (
          <>
            <Loader2 size={48} className="animate-spin mx-auto mb-6 text-[#c89968]" />
            <h1 className="text-2xl font-bold mb-2">Проверяем платёж…</h1>
            <p className="text-white/60">Это займёт пару секунд.</p>
          </>
        )}

        {status === "paid" && (
          <>
            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center">
              <CheckCircle2 size={44} className="text-emerald-400" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Оплата прошла. Спасибо! 🎉</h1>
            <p className="text-lg text-white/70 mb-2">
              Доступ к курсу <strong>Mini-course AI Founder</strong> открыт.
            </p>
            {email && (
              <p className="text-sm text-white/50 mb-8">
                Чек и инструкции отправил на <strong>{email}</strong>.
              </p>
            )}
            <p className="text-white/60 mb-8 text-sm leading-relaxed">
              В ближайшие минуты пришлю письмо со ссылкой на все уроки и материалы.
              Если письма нет — проверь спам или напиши на{" "}
              <a className="text-[#c89968] underline" href="mailto:michael.barbarych@gmail.com">
                michael.barbarych@gmail.com
              </a>
              .
            </p>
            <Link
              to="/mini-course/lesson0"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#c89968] text-black font-semibold hover:brightness-95 transition"
            >
              Начать с вводного урока <ArrowRight size={18} />
            </Link>
          </>
        )}

        {status === "pending" && (
          <>
            <Loader2 size={48} className="animate-spin mx-auto mb-6 text-[#c89968]" />
            <h1 className="text-2xl font-bold mb-3">Платёж ещё обрабатывается</h1>
            <p className="text-white/60 mb-6">
              Stripe пока не подтвердил оплату. Обнови страницу через минуту или
              напиши нам, если статус не меняется.
            </p>
            <button
              onClick={() => window.location.reload()}
              className="px-6 py-3 rounded-full border border-white/20 hover:bg-white/5 transition"
            >
              Обновить
            </button>
          </>
        )}

        {status === "error" && (
          <>
            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-red-500/15 border border-red-500/30 flex items-center justify-center">
              <AlertCircle size={44} className="text-red-400" />
            </div>
            <h1 className="text-2xl font-bold mb-3">Не удалось проверить платёж</h1>
            <p className="text-white/60 mb-6">{errorMsg}</p>
            <p className="text-sm text-white/50">
              Если деньги списаны, напиши на{" "}
              <a className="text-[#c89968] underline" href="mailto:michael.barbarych@gmail.com">
                michael.barbarych@gmail.com
              </a>{" "}
              — открою доступ вручную.
            </p>
          </>
        )}
      </div>
    </div>
  );
}