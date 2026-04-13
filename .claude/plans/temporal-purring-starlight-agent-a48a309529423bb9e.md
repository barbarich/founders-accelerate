# Stripe Payment Integration Plan — The Founders Circle

## Executive Summary

Replace the manual bank-transfer flow on `Register.tsx` with Stripe Checkout Sessions, backed by two Supabase Edge Functions (`create-checkout-session` and `stripe-webhook`). On successful payment the webhook auto-provisions a participant record, generates an invite code, and links everything to the active cohort. The manual bank-transfer option stays as a fallback.

---

## 1. Architectural Decisions

### 1.1 Stripe Checkout (hosted) vs Stripe Elements (embedded)

**Decision: Stripe Checkout (hosted redirect)**

Rationale:
- PCI compliance handled entirely by Stripe; zero sensitive card data touches our server or frontend.
- Built-in support for Apple Pay, Google Pay, and localized payment methods in Israel.
- Stripe Checkout natively handles SCA/3DS challenges.
- Far less frontend code: one button redirects to `checkout.stripe.com`, Stripe handles the rest.
- For a 3-tier pricing page this is the standard approach; Stripe Elements would be over-engineering.

### 1.2 Subscription vs One-time Payments for the Monthly Plan

**Decision: Stripe Subscription with `cancel_at` set to 3 months from start**

Rationale:
- ₪2,000/month for exactly 3 months maps perfectly to a Stripe Subscription with `subscription_data.cancel_at` set to the timestamp 3 months ahead.
- Stripe handles recurring billing, failed-payment retries, and receipt emails automatically.
- The alternative (3 manual one-time charges) would require building a scheduler — unnecessary complexity.
- The subscription auto-cancels after 3 payments; no manual intervention needed.
- If a student drops out early, admin can cancel the subscription from the Stripe Dashboard.

### 1.3 Currency

ILS (Israeli New Shekel) is fully supported by Stripe. All prices will be in ILS. Stripe amounts are in the smallest unit: 1 ILS = 100 agorot. So ₪2,000 = 200000, ₪4,500 = 450000, ₪600 = 60000.

### 1.4 Statement Descriptor

Configure in Stripe Dashboard: Settings > Public details > Statement descriptor = "FOUNDERS CIRCLE" (max 22 chars). Per-session override is also possible via `payment_intent_data.statement_descriptor` but the dashboard default is simpler. The customer's bank statement will show "FOUNDERS CIRCLE" instead of "Run Everywhere".

---

## 2. Stripe Dashboard Configuration (Manual Steps)

These steps are performed once in the Stripe Dashboard before any code is deployed.

### 2.1 Account Settings
1. **Business name:** In Settings > Public details, set "Business name" to "The Founders Circle" and "Statement descriptor" to "FOUNDERS CIRCLE".
2. **Branding:** Upload logo, set brand color to match the accent color (`hsl(24, 70%, 50%)` — the warm orange used in the app).

### 2.2 Create Products and Prices

**Product 1: "The Founders Circle — Accelerator Program"**
- Price A (recurring): ₪2,000/month ILS, billing period = monthly. This will be the `price_monthly` ID.
- Price B (one-time): ₪4,500 ILS. This will be the `price_full` ID.

**Product 2: "The Founders Circle — Consultation"**
- Price C (one-time): ₪600 ILS. This will be the `price_consultation` ID.

### 2.3 Webhook Endpoint
After deploying the Edge Function, register the webhook:
- URL: `https://pszphlbgrnhbpnpvebpu.supabase.co/functions/v1/stripe-webhook`
- Events to listen for:
  - `checkout.session.completed`
  - `invoice.payment_succeeded` (for subscription renewals)
  - `customer.subscription.deleted` (for cancellation tracking)
- Copy the webhook signing secret (`whsec_...`) into Supabase secrets.

### 2.4 API Keys
- **Publishable key** (`pk_live_...`): Goes into frontend `.env` as `VITE_STRIPE_PUBLISHABLE_KEY`.
- **Secret key** (`sk_live_...`): Goes into Supabase Edge Function secrets only. Never on frontend.
- **Webhook signing secret** (`whsec_...`): Goes into Supabase Edge Function secrets only.

---

## 3. Environment Variables

### 3.1 Frontend `.env` (add to existing file)
```
VITE_STRIPE_PUBLISHABLE_KEY=pk_live_...
```

### 3.2 Supabase Edge Function Secrets (via CLI or Dashboard)
```bash
supabase secrets set STRIPE_SECRET_KEY=sk_live_...
supabase secrets set STRIPE_WEBHOOK_SECRET=whsec_...
supabase secrets set STRIPE_PRICE_MONTHLY=price_...
supabase secrets set STRIPE_PRICE_FULL=price_...
supabase secrets set STRIPE_PRICE_CONSULTATION=price_...
supabase secrets set SITE_URL=https://founders-circle.space
```

---

## 4. npm Packages

**Add one package:**
```bash
npm install @stripe/stripe-js
```

This is the Stripe.js loader (~5KB). It provides `loadStripe()` which is used only for the redirect to Checkout. No `stripe` Node.js SDK is needed on the frontend — the server-side SDK runs in the Edge Function via Deno import.

---

## 5. Database Migration

New file: `supabase/migrations/20260330000000_stripe_payments.sql`

```sql
-- Payments tracking table
CREATE TABLE public.payments (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  stripe_session_id TEXT UNIQUE,
  stripe_customer_id TEXT,
  stripe_subscription_id TEXT,
  participant_id UUID REFERENCES public.participants(id) ON DELETE SET NULL,
  email TEXT NOT NULL,
  full_name TEXT,
  amount INTEGER NOT NULL,          -- in agorot (smallest ILS unit)
  currency TEXT NOT NULL DEFAULT 'ils',
  plan_type TEXT NOT NULL,           -- 'monthly' | 'full' | 'consultation'
  status TEXT NOT NULL DEFAULT 'pending', -- 'pending' | 'completed' | 'failed' | 'refunded'
  metadata JSONB DEFAULT '{}',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Add Stripe fields to participants
ALTER TABLE public.participants
  ADD COLUMN IF NOT EXISTS stripe_customer_id TEXT,
  ADD COLUMN IF NOT EXISTS payment_status TEXT DEFAULT 'pending';
  -- payment_status: 'pending' | 'paid' | 'subscription_active' | 'subscription_cancelled'

-- Index for webhook lookups
CREATE INDEX IF NOT EXISTS idx_payments_stripe_session_id ON public.payments(stripe_session_id);
CREATE INDEX IF NOT EXISTS idx_payments_stripe_customer_id ON public.payments(stripe_customer_id);
CREATE INDEX IF NOT EXISTS idx_participants_stripe_customer_id ON public.participants(stripe_customer_id);

-- RLS: payments table
ALTER TABLE public.payments ENABLE ROW LEVEL SECURITY;

-- Admin can see all payments
CREATE POLICY "Admins can select payments"
  ON public.payments FOR SELECT TO authenticated
  USING (public.is_admin());

CREATE POLICY "Admins can update payments"
  ON public.payments FOR UPDATE TO authenticated
  USING (public.is_admin());

-- Service role (Edge Functions) can do everything via SECURITY DEFINER functions
-- No anon access to payments — students do not query this table directly

-- RPC: Create participant from payment (called by webhook Edge Function)
CREATE OR REPLACE FUNCTION public.provision_paid_participant(
  _email TEXT,
  _full_name TEXT,
  _stripe_customer_id TEXT,
  _stripe_session_id TEXT,
  _amount INTEGER,
  _plan_type TEXT,
  _cohort_id UUID DEFAULT NULL
)
RETURNS JSON
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  _invite invite_codes%ROWTYPE;
  _participant participants%ROWTYPE;
  _target_cohort_id UUID;
  _generated_code TEXT;
  _payment_status TEXT;
BEGIN
  -- Idempotency: check if payment already processed
  IF EXISTS (SELECT 1 FROM payments WHERE stripe_session_id = _stripe_session_id AND status = 'completed') THEN
    SELECT p.id, p.email, p.cohort_id, p.full_name
    INTO _participant
    FROM participants p
    JOIN payments pay ON pay.participant_id = p.id
    WHERE pay.stripe_session_id = _stripe_session_id
    LIMIT 1;

    RETURN json_build_object(
      'status', 'already_processed',
      'participantId', _participant.id
    );
  END IF;

  -- Determine cohort: use provided or find the active one
  IF _cohort_id IS NOT NULL THEN
    _target_cohort_id := _cohort_id;
  ELSE
    SELECT id INTO _target_cohort_id FROM cohorts WHERE is_active = true ORDER BY start_date DESC LIMIT 1;
  END IF;

  -- Determine payment status based on plan type
  IF _plan_type = 'monthly' THEN
    _payment_status := 'subscription_active';
  ELSIF _plan_type = 'consultation' THEN
    _payment_status := 'paid';
  ELSE
    _payment_status := 'paid';
  END IF;

  -- Check if participant already exists by email
  SELECT * INTO _participant FROM participants WHERE email = lower(_email) LIMIT 1;

  IF NOT FOUND AND _plan_type != 'consultation' THEN
    -- Generate unique invite code
    _generated_code := upper(substr(md5(random()::text), 1, 4)) || '-' || upper(substr(md5(random()::text), 1, 4));

    -- Create invite code
    INSERT INTO invite_codes (code, cohort_id, is_active, max_uses, used_count, label)
    VALUES (_generated_code, _target_cohort_id, true, 1, 1, 'Auto: Stripe ' || _plan_type)
    RETURNING * INTO _invite;

    -- Create participant
    INSERT INTO participants (email, full_name, user_id, invite_code_id, cohort_id, is_active, stripe_customer_id, payment_status)
    VALUES (lower(_email), _full_name, gen_random_uuid(), _invite.id, _target_cohort_id, true, _stripe_customer_id, _payment_status)
    RETURNING * INTO _participant;
  ELSIF FOUND THEN
    -- Update existing participant with Stripe info
    UPDATE participants
    SET stripe_customer_id = COALESCE(_stripe_customer_id, stripe_customer_id),
        payment_status = _payment_status,
        is_active = true
    WHERE id = _participant.id
    RETURNING * INTO _participant;

    -- Get the associated invite code for return
    SELECT code INTO _generated_code FROM invite_codes WHERE id = _participant.invite_code_id;
  END IF;

  -- Record payment
  INSERT INTO payments (stripe_session_id, stripe_customer_id, participant_id, email, full_name, amount, plan_type, status)
  VALUES (_stripe_session_id, _stripe_customer_id, _participant.id, lower(_email), _full_name, _amount, _plan_type, 'completed');

  RETURN json_build_object(
    'status', 'provisioned',
    'participantId', _participant.id,
    'email', _participant.email,
    'cohortId', _participant.cohort_id,
    'inviteCode', _generated_code
  );
END;
$$;
```

---

## 6. Supabase Edge Functions

### 6.1 `supabase/functions/create-checkout-session/index.ts`

**Purpose:** Called from the frontend to create a Stripe Checkout Session and return the URL.

**Responsibilities:**
- Validate the `plan_type` parameter ('monthly', 'full', 'consultation').
- Map plan_type to the correct Stripe Price ID.
- For 'monthly': create a subscription checkout with `subscription_data.cancel_at` = now + 3 months.
- For 'full' and 'consultation': create a one-time payment checkout.
- Include customer email (if provided) for pre-filling.
- Set metadata: `plan_type`, `cohort_id` (the currently active cohort).
- Set `success_url` and `cancel_url` with session_id placeholder.
- Return the checkout session URL.

**Approximate structure (~120 lines):**

```
import Stripe from "https://esm.sh/stripe@14?target=deno"

- CORS headers helper
- Create Stripe client with STRIPE_SECRET_KEY
- Parse request body: { plan_type, email?, full_name?, cohort_id? }
- Validate plan_type is one of 'monthly' | 'full' | 'consultation'
- Map to price ID from env vars
- Build session params:
  - mode: plan_type === 'monthly' ? 'subscription' : 'payment'
  - line_items: [{ price: priceId, quantity: 1 }]
  - customer_email: email (if provided)
  - metadata: { plan_type, cohort_id, full_name, email }
  - success_url: SITE_URL/register/success?session_id={CHECKOUT_SESSION_ID}
  - cancel_url: SITE_URL/register?cancelled=true
  - If subscription: subscription_data.cancel_at = Math.floor(Date.now()/1000) + 90*24*60*60
  - If subscription: subscription_data.metadata = { plan_type, cohort_id }
- Create session via stripe.checkout.sessions.create()
- Return { url: session.url }
```

### 6.2 `supabase/functions/stripe-webhook/index.ts`

**Purpose:** Receives Stripe webhook events, verifies signature, processes payment events.

**Responsibilities:**
- Verify webhook signature using `STRIPE_WEBHOOK_SECRET`.
- Handle `checkout.session.completed`:
  - Extract metadata (plan_type, email, full_name, cohort_id).
  - For accelerator plans: call `provision_paid_participant` RPC.
  - For consultation: record payment only (no participant creation).
- Handle `invoice.payment_succeeded` (subscription renewal tracking).
- Handle `customer.subscription.deleted` (update participant payment_status).
- Return 200 for all events (even unhandled ones, to avoid Stripe retries).

**Approximate structure (~150 lines):**

```
import Stripe from "https://esm.sh/stripe@14?target=deno"
import { createClient } from "https://esm.sh/@supabase/supabase-js@2"

- Stripe client + Supabase service-role client
- Read raw body for signature verification
- Verify signature: stripe.webhooks.constructEvent(body, sig, webhookSecret)
- Switch on event.type:
  case 'checkout.session.completed':
    - Extract session object
    - Get metadata: plan_type, email, full_name, cohort_id
    - Get customer email from session.customer_details.email
    - Get stripe_customer_id from session.customer
    - Get amount from session.amount_total
    - Call supabase.rpc('provision_paid_participant', { ... })
    - Log result

  case 'invoice.payment_succeeded':
    - Extract subscription ID
    - Update payment record (track renewal)

  case 'customer.subscription.deleted':
    - Find participant by stripe_customer_id
    - Update payment_status to 'subscription_cancelled'

  default:
    - Log unhandled event type, return 200

- Return { received: true }
```

---

## 7. Frontend Changes — File-by-File Breakdown

### 7.1 NEW: `src/lib/stripe.ts` (~15 lines)

Stripe.js singleton loader.

```typescript
import { loadStripe, type Stripe } from '@stripe/stripe-js';

let stripePromise: Promise<Stripe | null> | null = null;

export function getStripe(): Promise<Stripe | null> {
  if (!stripePromise) {
    stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY);
  }
  return stripePromise;
}
```

### 7.2 NEW: `src/lib/checkout.ts` (~50 lines)

Checkout session creation helper. Calls the Edge Function and redirects.

```typescript
- Type: PlanType = 'monthly' | 'full' | 'consultation'
- Interface: CheckoutParams { planType: PlanType; email?: string; fullName?: string }
- Function: createCheckoutSession(params: CheckoutParams): Promise<void>
  - Call supabase.functions.invoke('create-checkout-session', { body: params })
  - Parse response for { url }
  - window.location.href = url (redirect to Stripe)
  - Error handling with toast notification
```

### 7.3 MODIFY: `src/pages/Register.tsx` (rewrite, ~250 lines → split into components)

The current Register.tsx (143 lines) shows manual bank transfer info. It will be restructured into:

**New Register.tsx (~180 lines):**
- Import PricingCards and ManualPayment components
- Add state for `showManualPayment` toggle
- Add `?cancelled=true` detection from URL to show "payment cancelled" toast
- Layout:
  1. Header (same as current)
  2. PricingCards component (3 cards with "Pay with card" buttons)
  3. "Prefer bank transfer?" toggle → shows ManualPayment component
  4. Footer

### 7.4 NEW: `src/components/register/PricingCards.tsx` (~120 lines)

Three pricing tier cards with Stripe checkout buttons.

```
- Import checkout helper from '@/lib/checkout'
- State: loading per plan type
- Three Card components:
  - Monthly: ₪2,000/mo, "3 payments" subtitle, button calls createCheckoutSession({planType:'monthly'})
  - Full: ₪4,500, "Save ₪1,500" badge, button calls createCheckoutSession({planType:'full'})
  - Consultation: ₪600, "60 min session", button calls createCheckoutSession({planType:'consultation'})
- Optional email input above cards (pre-fills Stripe Checkout)
- Loading states on buttons during redirect
- Uses existing shadcn Card, Button components
```

### 7.5 NEW: `src/components/register/ManualPayment.tsx` (~80 lines)

Extract the current bank transfer / Bit content from Register.tsx into this component. Keeps the CopyField helper. Shown only when user clicks "Prefer bank transfer?" link.

### 7.6 NEW: `src/pages/register/PaymentSuccess.tsx` (~90 lines)

Success page after Stripe Checkout redirect.

```
- Parse session_id from URL query params
- Optionally verify session by calling a simple Edge Function or just showing a static success message
- Display:
  - Success icon (CheckCircle2)
  - "Payment confirmed!" heading
  - "Your invite code and login instructions have been sent to your email."
  - "You can also log in directly:" → Link to /cabinet/login
  - If invite code is available in response, display it
```

### 7.7 MODIFY: `src/App.tsx` (add 2 routes)

Add new routes:
```tsx
import PaymentSuccess from "./pages/register/PaymentSuccess";

// Inside Routes:
<Route path="/register/success" element={<PaymentSuccess />} />
```

This is a ~3 line change to the existing App.tsx.

### 7.8 MODIFY: `src/integrations/supabase/types.ts`

After running the migration, regenerate types with `supabase gen types typescript`. This will add:
- `payments` table types
- `stripe_customer_id` and `payment_status` columns on `participants`
- `provision_paid_participant` function signature

### 7.9 OPTIONAL: Admin payments view

A later enhancement (not in initial scope) would add an admin page to view payments. For now, payments are visible in the Stripe Dashboard directly.

---

## 8. Complete User Flow (After Implementation)

### 8.1 New User (Stripe Payment)
1. User visits `/register`
2. Sees 3 pricing tiers with "Pay with card" buttons
3. Clicks desired plan → frontend calls `create-checkout-session` Edge Function
4. Edge Function creates Stripe Checkout Session → returns URL
5. Frontend redirects to Stripe Checkout (hosted page)
6. User completes payment on Stripe
7. Stripe redirects to `/register/success?session_id=cs_...`
8. Meanwhile, Stripe fires `checkout.session.completed` webhook
9. `stripe-webhook` Edge Function receives event → calls `provision_paid_participant` RPC
10. RPC creates invite_code + participant record, links to active cohort
11. User sees success page with instructions to log into `/cabinet/login`
12. User enters their email + the generated invite code → enters cabinet

### 8.2 Existing Manual Payment Flow (Preserved)
1. User visits `/register`
2. Clicks "Prefer bank transfer?"
3. Sees the same bank/Bit details as today
4. Pays manually, sends screenshot to Telegram
5. Admin manually creates invite code in admin panel (existing flow)

---

## 9. Security Considerations

1. **Stripe secret key** is only in Supabase Edge Function environment variables. Never in frontend code, never in `.env` that Vite bundles.
2. **Webhook signature verification** is mandatory. The `stripe-webhook` function MUST verify the `stripe-signature` header against the webhook signing secret before processing any event.
3. **Idempotent webhook processing**: The `provision_paid_participant` RPC checks for existing `stripe_session_id` before creating duplicates. Stripe may send the same webhook multiple times.
4. **CORS**: The `create-checkout-session` Edge Function should only allow requests from the app domain (`founders-circle.space` and `localhost:8080` for dev).
5. **No direct payment table access**: Payments table has RLS with admin-only access. Students cannot query or modify payment records. The Edge Functions use the service role (or SECURITY DEFINER functions) to write payments.
6. **Amount validation**: The Edge Function does NOT accept amounts from the frontend. It maps `plan_type` to a fixed Stripe Price ID on the server side. The frontend only sends the plan type string.

---

## 10. Testing Strategy

### 10.1 Stripe Test Mode
All development uses Stripe test mode keys (`pk_test_...`, `sk_test_...`). Stripe provides test card numbers:
- `4242 4242 4242 4242` — succeeds
- `4000 0000 0000 3220` — requires 3DS authentication
- `4000 0000 0000 0002` — decline

### 10.2 Local Webhook Testing
Use Stripe CLI to forward webhooks locally:
```bash
stripe listen --forward-to localhost:54321/functions/v1/stripe-webhook
```
This provides a local webhook signing secret for testing.

### 10.3 Test Cases

**Edge Function: create-checkout-session**
- [ ] Valid monthly plan creates subscription checkout session
- [ ] Valid full plan creates one-time payment session
- [ ] Valid consultation creates one-time payment session
- [ ] Invalid plan_type returns 400
- [ ] Missing plan_type returns 400
- [ ] CORS headers present in response
- [ ] Subscription has cancel_at set ~90 days ahead

**Edge Function: stripe-webhook**
- [ ] Valid signature passes verification
- [ ] Invalid signature returns 400
- [ ] checkout.session.completed for 'full' plan creates participant + invite code
- [ ] checkout.session.completed for 'monthly' plan creates participant with subscription_active status
- [ ] checkout.session.completed for 'consultation' records payment without creating participant
- [ ] Duplicate session_id is handled idempotently (no duplicate participant)
- [ ] customer.subscription.deleted updates participant payment_status
- [ ] Unhandled event types return 200 without error

**Database: provision_paid_participant RPC**
- [ ] Creates new participant for new email
- [ ] Updates existing participant for known email
- [ ] Generates unique invite code linked to active cohort
- [ ] Idempotent on duplicate stripe_session_id
- [ ] Correctly handles null cohort_id (falls back to active cohort)

**Frontend: Register page**
- [ ] Pricing cards render correctly with ILS amounts
- [ ] Click "Pay with card" initiates checkout flow
- [ ] Loading state shown during redirect
- [ ] Cancel redirect shows appropriate message
- [ ] Manual payment toggle reveals bank details
- [ ] Success page renders after redirect with session_id

### 10.4 Vitest Unit Tests
Add to `src/test/`:
- `checkout.test.ts`: test `createCheckoutSession` function (mock supabase.functions.invoke)
- `stripe.test.ts`: test `getStripe` returns singleton promise

---

## 11. Rollback Plan

### If Stripe integration fails post-deploy:

1. **Frontend rollback**: Revert Register.tsx to the current manual-only version. This is a single file revert.
2. **Routes**: Remove `/register/success` route from App.tsx (1 line).
3. **Edge Functions**: Disable or delete the two Edge Functions from Supabase Dashboard. This stops all Stripe processing.
4. **Database**: The `payments` table and new columns on `participants` are additive — they do not break existing functionality. No need to rollback the migration.
5. **Stripe Dashboard**: Deactivate the webhook endpoint. Products/prices remain but are unused.

**Key point**: The manual payment flow (bank transfer + Bit) is preserved as a fallback throughout this integration. Even if Stripe has issues, users can still pay manually.

---

## 12. Implementation Sequence

**Phase 1: Database + Backend (Day 1)**
1. Run the database migration (payments table, participant columns, RPC function)
2. Create and deploy `create-checkout-session` Edge Function
3. Create and deploy `stripe-webhook` Edge Function
4. Set all Supabase secrets (Stripe keys, price IDs, site URL)
5. Register webhook URL in Stripe Dashboard
6. Test with Stripe CLI: `stripe trigger checkout.session.completed`

**Phase 2: Frontend (Day 2)**
1. Install `@stripe/stripe-js`
2. Add `VITE_STRIPE_PUBLISHABLE_KEY` to `.env`
3. Create `src/lib/stripe.ts` and `src/lib/checkout.ts`
4. Create `src/components/register/PricingCards.tsx`
5. Create `src/components/register/ManualPayment.tsx`
6. Rewrite `src/pages/Register.tsx` to compose both components
7. Create `src/pages/register/PaymentSuccess.tsx`
8. Add routes to `src/App.tsx`
9. Regenerate Supabase types

**Phase 3: End-to-End Testing (Day 3)**
1. Full flow test with Stripe test cards (all 3 plan types)
2. Verify participant creation and invite code generation
3. Verify student can log into cabinet with auto-generated invite code
4. Test webhook idempotency (send same event twice)
5. Test cancellation flow
6. Test with 3DS card
7. Mobile responsiveness check on Register page

**Phase 4: Go Live**
1. Switch to Stripe live keys
2. Update webhook endpoint to use live signing secret
3. Monitor first real payments in Stripe Dashboard
4. Keep Telegram channel active for manual payment support during transition

---

## 13. File Inventory

### New Files (7 files)
| File | Lines (est.) | Purpose |
|------|-------------|---------|
| `supabase/migrations/20260330000000_stripe_payments.sql` | ~100 | DB migration |
| `supabase/functions/create-checkout-session/index.ts` | ~120 | Edge Function |
| `supabase/functions/stripe-webhook/index.ts` | ~150 | Edge Function |
| `src/lib/stripe.ts` | ~15 | Stripe.js loader |
| `src/lib/checkout.ts` | ~50 | Checkout helper |
| `src/components/register/PricingCards.tsx` | ~120 | Pricing UI |
| `src/components/register/ManualPayment.tsx` | ~80 | Bank transfer (extracted) |
| `src/pages/register/PaymentSuccess.tsx` | ~90 | Success page |

### Modified Files (3 files)
| File | Change |
|------|--------|
| `src/pages/Register.tsx` | Rewrite to compose PricingCards + ManualPayment |
| `src/App.tsx` | Add `/register/success` route (~3 lines) |
| `.env` | Add `VITE_STRIPE_PUBLISHABLE_KEY` |

### Auto-regenerated (1 file)
| File | Change |
|------|--------|
| `src/integrations/supabase/types.ts` | Regenerated via `supabase gen types typescript` |

**All new files are under 200 lines. No file exceeds the 500-line constraint.**

---

## 14. Edge Function: Deno Import Pattern

Supabase Edge Functions run on Deno. The Stripe SDK is imported via esm.sh:

```typescript
import Stripe from "https://esm.sh/stripe@14?target=deno";
```

The Supabase client for service-role access:

```typescript
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const supabase = createClient(
  Deno.env.get("SUPABASE_URL")!,
  Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!
);
```

Note: `SUPABASE_URL` and `SUPABASE_SERVICE_ROLE_KEY` are automatically available in all Supabase Edge Functions. Only the Stripe-specific secrets need to be set manually.

---

## 15. Open Questions / Future Enhancements

1. **Email notifications**: Currently the plan shows the invite code on the success page. A production enhancement would be to send the invite code via email (using Supabase's built-in email or a service like Resend). This is not in the initial scope.

2. **Admin payments dashboard**: Adding a `/admin/payments` page to view payment history. For now, the Stripe Dashboard serves this purpose.

3. **Refund handling**: If `charge.refunded` webhook is needed, add it as a follow-up. For now, refunds are handled manually in Stripe Dashboard.

4. **Coupon/discount codes**: Stripe supports coupons natively in Checkout. Can be added later by passing `discounts` parameter.

5. **Multi-currency**: Currently ILS only. If international students pay in USD, a second set of prices can be created. Stripe Checkout can auto-detect based on customer location.
