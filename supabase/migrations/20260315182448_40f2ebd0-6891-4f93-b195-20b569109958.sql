
-- Admin users whitelist
CREATE TABLE public.admin_users (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT NOT NULL UNIQUE,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  created_by UUID REFERENCES auth.users(id) ON DELETE SET NULL
);

-- Presentations
CREATE TABLE public.presentations (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT,
  url TEXT,
  sort_order INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Monthly plans
CREATE TABLE public.monthly_plans (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  month_number INTEGER NOT NULL,
  title TEXT NOT NULL,
  content TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Meetings
CREATE TABLE public.meetings (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  month_id UUID REFERENCES public.monthly_plans(id) ON DELETE CASCADE,
  week_number INTEGER,
  title TEXT NOT NULL,
  agenda TEXT,
  presentation_url TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Meeting materials
CREATE TABLE public.meeting_materials (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  meeting_id UUID NOT NULL REFERENCES public.meetings(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  type TEXT NOT NULL DEFAULT 'link',
  url TEXT NOT NULL,
  sort_order INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS on all tables
ALTER TABLE public.admin_users ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.presentations ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.monthly_plans ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.meetings ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.meeting_materials ENABLE ROW LEVEL SECURITY;

-- Security definer function to check admin status
CREATE OR REPLACE FUNCTION public.is_admin()
RETURNS BOOLEAN
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1
    FROM public.admin_users
    WHERE email = (auth.jwt()->>'email')
  )
$$;

-- RLS policies for admin_users
CREATE POLICY "Admins can view admin_users" ON public.admin_users FOR SELECT TO authenticated USING (public.is_admin());
CREATE POLICY "Admins can insert admin_users" ON public.admin_users FOR INSERT TO authenticated WITH CHECK (public.is_admin());
CREATE POLICY "Admins can delete admin_users" ON public.admin_users FOR DELETE TO authenticated USING (public.is_admin());

-- RLS policies for presentations
CREATE POLICY "Admins can select presentations" ON public.presentations FOR SELECT TO authenticated USING (public.is_admin());
CREATE POLICY "Admins can insert presentations" ON public.presentations FOR INSERT TO authenticated WITH CHECK (public.is_admin());
CREATE POLICY "Admins can update presentations" ON public.presentations FOR UPDATE TO authenticated USING (public.is_admin());
CREATE POLICY "Admins can delete presentations" ON public.presentations FOR DELETE TO authenticated USING (public.is_admin());

-- RLS policies for monthly_plans
CREATE POLICY "Admins can select monthly_plans" ON public.monthly_plans FOR SELECT TO authenticated USING (public.is_admin());
CREATE POLICY "Admins can insert monthly_plans" ON public.monthly_plans FOR INSERT TO authenticated WITH CHECK (public.is_admin());
CREATE POLICY "Admins can update monthly_plans" ON public.monthly_plans FOR UPDATE TO authenticated USING (public.is_admin());
CREATE POLICY "Admins can delete monthly_plans" ON public.monthly_plans FOR DELETE TO authenticated USING (public.is_admin());

-- RLS policies for meetings
CREATE POLICY "Admins can select meetings" ON public.meetings FOR SELECT TO authenticated USING (public.is_admin());
CREATE POLICY "Admins can insert meetings" ON public.meetings FOR INSERT TO authenticated WITH CHECK (public.is_admin());
CREATE POLICY "Admins can update meetings" ON public.meetings FOR UPDATE TO authenticated USING (public.is_admin());
CREATE POLICY "Admins can delete meetings" ON public.meetings FOR DELETE TO authenticated USING (public.is_admin());

-- RLS policies for meeting_materials
CREATE POLICY "Admins can select meeting_materials" ON public.meeting_materials FOR SELECT TO authenticated USING (public.is_admin());
CREATE POLICY "Admins can insert meeting_materials" ON public.meeting_materials FOR INSERT TO authenticated WITH CHECK (public.is_admin());
CREATE POLICY "Admins can update meeting_materials" ON public.meeting_materials FOR UPDATE TO authenticated USING (public.is_admin());
CREATE POLICY "Admins can delete meeting_materials" ON public.meeting_materials FOR DELETE TO authenticated USING (public.is_admin());

-- Updated_at trigger function
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

-- Triggers for updated_at
CREATE TRIGGER update_monthly_plans_updated_at BEFORE UPDATE ON public.monthly_plans FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();
CREATE TRIGGER update_meetings_updated_at BEFORE UPDATE ON public.meetings FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

-- Seed the first admin
INSERT INTO public.admin_users (email) VALUES ('barbarych@gmail.com');
