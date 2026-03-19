-- ============================================================
-- ЧАСТЬ 1: Создание новых таблиц (миграция кабинета студента)
-- ============================================================

-- cohorts
CREATE TABLE IF NOT EXISTS public.cohorts (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  start_date DATE NOT NULL,
  is_active BOOLEAN NOT NULL DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- cohort_id на invite_codes (проверяем есть ли уже)
DO $$ BEGIN
  IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'invite_codes' AND column_name = 'cohort_id') THEN
    ALTER TABLE public.invite_codes ADD COLUMN cohort_id UUID REFERENCES public.cohorts(id) ON DELETE SET NULL;
  END IF;
END $$;

-- cohort_id на participants
DO $$ BEGIN
  IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'participants' AND column_name = 'cohort_id') THEN
    ALTER TABLE public.participants ADD COLUMN cohort_id UUID REFERENCES public.cohorts(id) ON DELETE SET NULL;
  END IF;
END $$;

-- cohort_materials
CREATE TABLE IF NOT EXISTS public.cohort_materials (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  cohort_id UUID NOT NULL REFERENCES public.cohorts(id) ON DELETE CASCADE,
  week_number INTEGER NOT NULL,
  type TEXT NOT NULL DEFAULT 'presentation',
  title TEXT NOT NULL,
  url TEXT NOT NULL,
  sort_order INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- announcements
CREATE TABLE IF NOT EXISTS public.announcements (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  cohort_id UUID NOT NULL REFERENCES public.cohorts(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  content TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- resources
CREATE TABLE IF NOT EXISTS public.resources (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  cohort_id UUID REFERENCES public.cohorts(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  url TEXT NOT NULL,
  category TEXT NOT NULL DEFAULT 'general',
  sort_order INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- progress_checklist
CREATE TABLE IF NOT EXISTS public.progress_checklist (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  participant_id UUID NOT NULL REFERENCES public.participants(id) ON DELETE CASCADE,
  week_number INTEGER NOT NULL,
  item_key TEXT NOT NULL,
  is_completed BOOLEAN NOT NULL DEFAULT false,
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  UNIQUE(participant_id, week_number, item_key)
);

-- ============================================================
-- ЧАСТЬ 2: RLS
-- ============================================================

ALTER TABLE public.cohorts ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.cohort_materials ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.announcements ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.resources ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.progress_checklist ENABLE ROW LEVEL SECURITY;

-- Admin policies
DO $$ BEGIN
  -- cohorts
  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE policyname = 'Admins can select cohorts') THEN
    CREATE POLICY "Admins can select cohorts" ON public.cohorts FOR SELECT TO authenticated USING (public.is_admin());
  END IF;
  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE policyname = 'Admins can insert cohorts') THEN
    CREATE POLICY "Admins can insert cohorts" ON public.cohorts FOR INSERT TO authenticated WITH CHECK (public.is_admin());
  END IF;
  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE policyname = 'Admins can update cohorts') THEN
    CREATE POLICY "Admins can update cohorts" ON public.cohorts FOR UPDATE TO authenticated USING (public.is_admin());
  END IF;
  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE policyname = 'Admins can delete cohorts') THEN
    CREATE POLICY "Admins can delete cohorts" ON public.cohorts FOR DELETE TO authenticated USING (public.is_admin());
  END IF;

  -- cohort_materials
  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE policyname = 'Admins can select cohort_materials') THEN
    CREATE POLICY "Admins can select cohort_materials" ON public.cohort_materials FOR SELECT TO authenticated USING (public.is_admin());
  END IF;
  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE policyname = 'Admins can insert cohort_materials') THEN
    CREATE POLICY "Admins can insert cohort_materials" ON public.cohort_materials FOR INSERT TO authenticated WITH CHECK (public.is_admin());
  END IF;
  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE policyname = 'Admins can update cohort_materials') THEN
    CREATE POLICY "Admins can update cohort_materials" ON public.cohort_materials FOR UPDATE TO authenticated USING (public.is_admin());
  END IF;
  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE policyname = 'Admins can delete cohort_materials') THEN
    CREATE POLICY "Admins can delete cohort_materials" ON public.cohort_materials FOR DELETE TO authenticated USING (public.is_admin());
  END IF;

  -- announcements
  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE policyname = 'Admins can select announcements') THEN
    CREATE POLICY "Admins can select announcements" ON public.announcements FOR SELECT TO authenticated USING (public.is_admin());
  END IF;
  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE policyname = 'Admins can insert announcements') THEN
    CREATE POLICY "Admins can insert announcements" ON public.announcements FOR INSERT TO authenticated WITH CHECK (public.is_admin());
  END IF;
  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE policyname = 'Admins can update announcements') THEN
    CREATE POLICY "Admins can update announcements" ON public.announcements FOR UPDATE TO authenticated USING (public.is_admin());
  END IF;
  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE policyname = 'Admins can delete announcements') THEN
    CREATE POLICY "Admins can delete announcements" ON public.announcements FOR DELETE TO authenticated USING (public.is_admin());
  END IF;

  -- resources
  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE policyname = 'Admins can select resources') THEN
    CREATE POLICY "Admins can select resources" ON public.resources FOR SELECT TO authenticated USING (public.is_admin());
  END IF;
  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE policyname = 'Admins can insert resources') THEN
    CREATE POLICY "Admins can insert resources" ON public.resources FOR INSERT TO authenticated WITH CHECK (public.is_admin());
  END IF;
  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE policyname = 'Admins can update resources') THEN
    CREATE POLICY "Admins can update resources" ON public.resources FOR UPDATE TO authenticated USING (public.is_admin());
  END IF;
  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE policyname = 'Admins can delete resources') THEN
    CREATE POLICY "Admins can delete resources" ON public.resources FOR DELETE TO authenticated USING (public.is_admin());
  END IF;

  -- progress_checklist
  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE policyname = 'Admins can select progress_checklist') THEN
    CREATE POLICY "Admins can select progress_checklist" ON public.progress_checklist FOR SELECT TO authenticated USING (public.is_admin());
  END IF;

  -- Anon policies (student read access)
  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE policyname = 'Anon can select cohorts') THEN
    CREATE POLICY "Anon can select cohorts" ON public.cohorts FOR SELECT TO anon USING (true);
  END IF;
  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE policyname = 'Anon can select cohort_materials') THEN
    CREATE POLICY "Anon can select cohort_materials" ON public.cohort_materials FOR SELECT TO anon USING (true);
  END IF;
  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE policyname = 'Anon can select announcements') THEN
    CREATE POLICY "Anon can select announcements" ON public.announcements FOR SELECT TO anon USING (true);
  END IF;
  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE policyname = 'Anon can select resources') THEN
    CREATE POLICY "Anon can select resources" ON public.resources FOR SELECT TO anon USING (true);
  END IF;
  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE policyname = 'Anon can select progress_checklist') THEN
    CREATE POLICY "Anon can select progress_checklist" ON public.progress_checklist FOR SELECT TO anon USING (true);
  END IF;
  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE policyname = 'Anon can select participants') THEN
    CREATE POLICY "Anon can select participants" ON public.participants FOR SELECT TO anon USING (true);
  END IF;
  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE policyname = 'Anon can select invite_codes') THEN
    CREATE POLICY "Anon can select invite_codes" ON public.invite_codes FOR SELECT TO anon USING (true);
  END IF;
END $$;

-- ============================================================
-- ЧАСТЬ 3: RPC-функции
-- ============================================================

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

-- ============================================================
-- ЧАСТЬ 4: Очистка старых данных
-- ============================================================

DELETE FROM public.meeting_materials;
DELETE FROM public.meetings;
DELETE FROM public.monthly_plans;
DELETE FROM public.presentations;

-- Презентация программы (остаётся в разделе "Презентации" админки)
INSERT INTO public.presentations (title, description, url, sort_order) VALUES
('Программа акселератора', 'Полная 12-недельная программа The Founders Circle', 'https://founders-circle.space/program', 1);
DELETE FROM public.participant_meetings;
DELETE FROM public.participants;
DELETE FROM public.invite_codes;

-- ============================================================
-- ЧАСТЬ 5: Заполнение данных
-- ============================================================

-- Поток 1
INSERT INTO public.cohorts (id, name, start_date, is_active)
VALUES ('a1000000-0000-0000-0000-000000000001', 'Поток 1 — Март 2026', '2026-03-16', true);

-- Код доступа (привязан к потоку)
INSERT INTO public.invite_codes (id, code, cohort_id, is_active, max_uses, used_count, label)
VALUES ('b1000000-0000-0000-0000-000000000001', 'FOUNDERS-2026', 'a1000000-0000-0000-0000-000000000001', true, 10, 0, 'Основной код потока 1');

-- Материалы неделя 1: презентация + запись встречи
INSERT INTO public.cohort_materials (cohort_id, week_number, type, title, url, sort_order) VALUES
('a1000000-0000-0000-0000-000000000001', 1, 'presentation', 'Презентация: Кто ваш клиент', '/programm-week1', 1),
('a1000000-0000-0000-0000-000000000001', 1, 'video', 'Запись встречи 1', 'https://us02web.zoom.us/rec/share/r8Vj1T8tNKRpUflg0BbvFxnbjzQXHFuWpzTGMnR7SKJ5PapMfvPs19alX9mKGdd4.Unqgz6ElkRFZROnX', 2);

-- Материалы неделя 2: презентация
INSERT INTO public.cohort_materials (cohort_id, week_number, type, title, url, sort_order) VALUES
('a1000000-0000-0000-0000-000000000001', 2, 'presentation', 'Презентация: Позиционирование, цена и MVP', '/programm-week2', 1);

-- План встреч: 12 понедельников с 16 марта, 18:30-20:30
-- Используем таблицу meetings + monthly_plans

-- Месяцы
INSERT INTO public.monthly_plans (id, month_number, title) VALUES
('c1000000-0000-0000-0000-000000000001', 1, 'Валидация и фундамент'),
('c1000000-0000-0000-0000-000000000002', 2, 'Построение продукта'),
('c1000000-0000-0000-0000-000000000003', 3, 'Запуск, продажи и рост');

-- 12 встреч
INSERT INTO public.meetings (month_id, week_number, title, agenda, presentation_url) VALUES
('c1000000-0000-0000-0000-000000000001', 1, 'Встреча 1 — Кто ваш клиент и зачем ему ваш продукт',
 E'Дата: 16 марта (пн), 18:30–20:30\nZoom: https://us02web.zoom.us/j/89609077818?pwd=8hJUD5dEbU25lstTFvKQNqKd8KyzLk.1\nID: 896 0907 7818 | Код: 894323', '/programm-week1'),

('c1000000-0000-0000-0000-000000000001', 2, 'Встреча 2 — Позиционирование, цена и что должен делать ваш MVP',
 E'Дата: 23 марта (пн), 18:30–20:30\nZoom: https://us02web.zoom.us/j/89609077818?pwd=8hJUD5dEbU25lstTFvKQNqKd8KyzLk.1\nID: 896 0907 7818 | Код: 894323', '/programm-week2'),

('c1000000-0000-0000-0000-000000000001', 3, 'Встреча 3 — Доработка продукта и создание лендинга',
 E'Дата: 30 марта (пн), 18:30–20:30\nZoom: https://us02web.zoom.us/j/89609077818?pwd=8hJUD5dEbU25lstTFvKQNqKd8KyzLk.1\nID: 896 0907 7818 | Код: 894323', NULL),

('c1000000-0000-0000-0000-000000000001', 4, 'Встреча 4 — Демо-день и подготовка к запуску',
 E'Дата: 6 апреля (пн), 18:30–20:30\nZoom: https://us02web.zoom.us/j/89609077818?pwd=8hJUD5dEbU25lstTFvKQNqKd8KyzLk.1\nID: 896 0907 7818 | Код: 894323', NULL),

('c1000000-0000-0000-0000-000000000002', 5, 'Встреча 5 — Строим MVP с AI',
 E'Дата: 13 апреля (пн), 18:30–20:30\nZoom: https://us02web.zoom.us/j/89609077818?pwd=8hJUD5dEbU25lstTFvKQNqKd8KyzLk.1\nID: 896 0907 7818 | Код: 894323', NULL),

('c1000000-0000-0000-0000-000000000002', 6, 'Встреча 6 — UX, onboarding, первые 60 секунд',
 E'Дата: 20 апреля (пн), 18:30–20:30\nZoom: https://us02web.zoom.us/j/89609077818?pwd=8hJUD5dEbU25lstTFvKQNqKd8KyzLk.1\nID: 896 0907 7818 | Код: 894323', NULL),

('c1000000-0000-0000-0000-000000000002', 7, 'Встреча 7 — Упаковка: лендинг, визуал и текст',
 E'Дата: 27 апреля (пн), 18:30–20:30\nZoom: https://us02web.zoom.us/j/89609077818?pwd=8hJUD5dEbU25lstTFvKQNqKd8KyzLk.1\nID: 896 0907 7818 | Код: 894323', NULL),

('c1000000-0000-0000-0000-000000000002', 8, 'Встреча 8 — Контент и личный бренд',
 E'Дата: 4 мая (пн), 18:30–20:30\nZoom: https://us02web.zoom.us/j/89609077818?pwd=8hJUD5dEbU25lstTFvKQNqKd8KyzLk.1\nID: 896 0907 7818 | Код: 894323', NULL),

('c1000000-0000-0000-0000-000000000003', 9, 'Встреча 9 — Маркетинг с нуля: каналы и воронки',
 E'Дата: 11 мая (пн), 18:30–20:30\nZoom: https://us02web.zoom.us/j/89609077818?pwd=8hJUD5dEbU25lstTFvKQNqKd8KyzLk.1\nID: 896 0907 7818 | Код: 894323', NULL),

('c1000000-0000-0000-0000-000000000003', 10, 'Встреча 10 — Продажи для фаундеров',
 E'Дата: 18 мая (пн), 18:30–20:30\nZoom: https://us02web.zoom.us/j/89609077818?pwd=8hJUD5dEbU25lstTFvKQNqKd8KyzLk.1\nID: 896 0907 7818 | Код: 894323', NULL),

('c1000000-0000-0000-0000-000000000003', 11, 'Встреча 11 — Платный трафик и автоматизация',
 E'Дата: 25 мая (пн), 18:30–20:30\nZoom: https://us02web.zoom.us/j/89609077818?pwd=8hJUD5dEbU25lstTFvKQNqKd8KyzLk.1\nID: 896 0907 7818 | Код: 894323', NULL),

('c1000000-0000-0000-0000-000000000003', 12, 'Встреча 12 — Финальный демо-день и стратегия на 90 дней',
 E'Дата: 1 июня (пн), 18:30–20:30\nZoom: https://us02web.zoom.us/j/89609077818?pwd=8hJUD5dEbU25lstTFvKQNqKd8KyzLk.1\nID: 896 0907 7818 | Код: 894323', NULL);

-- Приветственное объявление
INSERT INTO public.announcements (cohort_id, title, content) VALUES
('a1000000-0000-0000-0000-000000000001', 'Добро пожаловать в акселератор!', 'Рады приветствовать вас в The Founders Circle. Все материалы будут появляться здесь после каждой встречи.');
