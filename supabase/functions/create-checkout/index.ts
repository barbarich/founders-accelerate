// Creates a Stripe Checkout Session for the AI Founder mini-course ($19)
import Stripe from "https://esm.sh/stripe@17.7.0?target=deno";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.45.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const stripeKey = Deno.env.get("STRIPE_SECRET_KEY");
    if (!stripeKey) {
      throw new Error("STRIPE_SECRET_KEY is not configured");
    }

    const stripe = new Stripe(stripeKey, {
      apiVersion: "2024-11-20.acacia",
    });

    const body = await req.json().catch(() => ({}));
    const email: string | undefined =
      typeof body?.email === "string" && body.email.trim()
        ? body.email.trim().toLowerCase()
        : undefined;

    const origin =
      req.headers.get("origin") ??
      req.headers.get("referer")?.replace(/\/$/, "") ??
      "https://founders-circle.space";

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      payment_method_types: ["card"],
      customer_email: email,
      line_items: [
        {
          price_data: {
            currency: "usd",
            unit_amount: 1900, // $19.00
            product_data: {
              name: "Mini-course AI Founder",
              description:
                "5 уроков (~4 часа видео), презентации, AI-агенты, промпты, шаблоны Customer Development, разборы кейсов. Доступ навсегда.",
            },
          },
          quantity: 1,
        },
      ],
      allow_promotion_codes: true,
      success_url: `${origin}/ru/thank-you?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/ru#buy`,
      metadata: {
        product: "mini-course-ai-founder",
      },
    });

    // Persist a pending order (service role bypasses RLS)
    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const serviceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    const supabase = createClient(supabaseUrl, serviceKey);

    await supabase.from("orders").insert({
      stripe_session_id: session.id,
      customer_email: email ?? null,
      product_name: "Mini-course AI Founder",
      amount_cents: 1900,
      currency: "usd",
      status: "pending",
      metadata: { mode: session.mode },
    });

    return new Response(JSON.stringify({ url: session.url }), {
      status: 200,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error("create-checkout error:", err);
    const message = err instanceof Error ? err.message : "Unknown error";
    return new Response(JSON.stringify({ error: message }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});