-- Student Cabinet: tables, RLS, RPC functions

-- 1. cohorts table
CREATE TABLE public.cohorts (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  start_date DATE NOT NULL,
  is_active BOOLEAN NOT NULL DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- 2. Add cohort_id to existing tables
ALTER TABLE public.invite_codes ADD COLUMN cohort_id UUID REFERENCES public.cohorts(id) ON DELETE SET NULL;
ALTER TABLE public.participants ADD COLUMN cohort_id UUID REFERENCES public.cohorts(id) ON DELETE SET NULL;

-- 3. cohort_materials table
CREATE TABLE public.cohort_materials (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  cohort_id UUID NOT NULL REFERENCES public.cohorts(id) ON DELETE CASCADE,
  week_number INTEGER NOT NULL,
  type TEXT NOT NULL DEFAULT 'presentation',
  title TEXT NOT NULL,
  url TEXT NOT NULL,
  sort_order INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- 4. announcements table
CREATE TABLE public.announcements (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  cohort_id UUID NOT NULL REFERENCES public.cohorts(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  content TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- 5. resources table
CREATE TABLE public.resources (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  cohort_id UUID REFERENCES public.cohorts(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  url TEXT NOT NULL,
  category TEXT NOT NULL DEFAULT 'general',
  sort_order INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- 6. progress_checklist table
CREATE TABLE public.progress_checklist (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  participant_id UUID NOT NULL REFERENCES public.participants(id) ON DELETE CASCADE,
  week_number INTEGER NOT NULL,
  item_key TEXT NOT NULL,
  is_completed BOOLEAN NOT NULL DEFAULT false,
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  UNIQUE(participant_id, week_number, item_key)
);

-- Enable RLS
ALTER TABLE public.cohorts ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.cohort_materials ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.announcements ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.resources ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.progress_checklist ENABLE ROW LEVEL SECURITY;

-- Admin policies (authenticated + is_admin)
CREATE POLICY "Admins can select cohorts" ON public.cohorts FOR SELECT TO authenticated USING (public.is_admin());
CREATE POLICY "Admins can insert cohorts" ON public.cohorts FOR INSERT TO authenticated WITH CHECK (public.is_admin());
CREATE POLICY "Admins can update cohorts" ON public.cohorts FOR UPDATE TO authenticated USING (public.is_admin());
CREATE POLICY "Admins can delete cohorts" ON public.cohorts FOR DELETE TO authenticated USING (public.is_admin());

CREATE POLICY "Admins can select cohort_materials" ON public.cohort_materials FOR SELECT TO authenticated USING (public.is_admin());
CREATE POLICY "Admins can insert cohort_materials" ON public.cohort_materials FOR INSERT TO authenticated WITH CHECK (public.is_admin());
CREATE POLICY "Admins can update cohort_materials" ON public.cohort_materials FOR UPDATE TO authenticated USING (public.is_admin());
CREATE POLICY "Admins can delete cohort_materials" ON public.cohort_materials FOR DELETE TO authenticated USING (public.is_admin());

CREATE POLICY "Admins can select announcements" ON public.announcements FOR SELECT TO authenticated USING (public.is_admin());
CREATE POLICY "Admins can insert announcements" ON public.announcements FOR INSERT TO authenticated WITH CHECK (public.is_admin());
CREATE POLICY "Admins can update announcements" ON public.announcements FOR UPDATE TO authenticated USING (public.is_admin());
CREATE POLICY "Admins can delete announcements" ON public.announcements FOR DELETE TO authenticated USING (public.is_admin());

CREATE POLICY "Admins can select resources" ON public.resources FOR SELECT TO authenticated USING (public.is_admin());
CREATE POLICY "Admins can insert resources" ON public.resources FOR INSERT TO authenticated WITH CHECK (public.is_admin());
CREATE POLICY "Admins can update resources" ON public.resources FOR UPDATE TO authenticated USING (public.is_admin());
CREATE POLICY "Admins can delete resources" ON public.resources FOR DELETE TO authenticated USING (public.is_admin());

CREATE POLICY "Admins can select progress_checklist" ON public.progress_checklist FOR SELECT TO authenticated USING (public.is_admin());

-- Anon policies (student read access)
CREATE POLICY "Anon can select cohorts" ON public.cohorts FOR SELECT TO anon USING (true);
CREATE POLICY "Anon can select cohort_materials" ON public.cohort_materials FOR SELECT TO anon USING (true);
CREATE POLICY "Anon can select announcements" ON public.announcements FOR SELECT TO anon USING (true);
CREATE POLICY "Anon can select resources" ON public.resources FOR SELECT TO anon USING (true);
CREATE POLICY "Anon can select progress_checklist" ON public.progress_checklist FOR SELECT TO anon USING (true);
CREATE POLICY "Anon can select participants" ON public.participants FOR SELECT TO anon USING (true);
CREATE POLICY "Anon can select invite_codes" ON public.invite_codes FOR SELECT TO anon USING (true);

-- RPC: Validate invite code and create/find participant
CREATE OR REPLACE FUNCTION public.validate_invite_code(
  _code TEXT,
  _email TEXT
)
RETURNS JSON
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  _invite invite_codes%ROWTYPE;
  _participant participants%ROWTYPE;
BEGIN
  SELECT * INTO _invite FROM invite_codes
  WHERE code = _code AND is_active = true
    AND (max_uses IS NULL OR used_count < max_uses);

  IF NOT FOUND THEN
    RETURN json_build_object('error', 'Неверный или истёкший код доступа');
  END IF;

  SELECT * INTO _participant FROM participants
  WHERE email = lower(_email) AND invite_code_id = _invite.id;

  IF NOT FOUND THEN
    INSERT INTO participants (email, user_id, invite_code_id, cohort_id, is_active)
    VALUES (lower(_email), gen_random_uuid(), _invite.id, _invite.cohort_id, true)
    RETURNING * INTO _participant;

    UPDATE invite_codes SET used_count = used_count + 1 WHERE id = _invite.id;
  END IF;

  IF NOT _participant.is_active THEN
    RETURN json_build_object('error', 'Аккаунт деактивирован');
  END IF;

  RETURN json_build_object(
    'participantId', _participant.id,
    'email', _participant.email,
    'cohortId', _participant.cohort_id,
    'fullName', _participant.full_name
  );
END;
$$;

-- RPC: Toggle progress checklist item
CREATE OR REPLACE FUNCTION public.toggle_progress(
  _participant_id UUID,
  _week_number INTEGER,
  _item_key TEXT,
  _is_completed BOOLEAN
)
RETURNS VOID
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  IF NOT EXISTS (SELECT 1 FROM participants WHERE id = _participant_id AND is_active = true) THEN
    RAISE EXCEPTION 'Invalid participant';
  END IF;

  INSERT INTO progress_checklist (participant_id, week_number, item_key, is_completed, updated_at)
  VALUES (_participant_id, _week_number, _item_key, _is_completed, now())
  ON CONFLICT (participant_id, week_number, item_key)
  DO UPDATE SET is_completed = _is_completed, updated_at = now();
END;
$$;
