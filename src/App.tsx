import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate, useParams } from "react-router-dom";
import { LanguageProvider } from "@/i18n/LanguageContext";
import { supportedLangs, type Lang } from "@/i18n/translations";
import Landing from "./pages/Landing";
import Apply from "./pages/Apply";
import Mentor from "./pages/Mentor";
import PresentationShell from "@/components/presentation/PresentationShell";
import Register from "./pages/Register";
import Program from "./pages/Program";
import NotFound from "./pages/NotFound";
import AdminLayout from "./pages/admin/AdminLayout";
import AdminDashboard from "./pages/admin/AdminDashboard";
import AdminPresentations from "./pages/admin/AdminPresentations";
import AdminMonthlyPlans from "./pages/admin/AdminMonthlyPlans";
import AdminMeetings from "./pages/admin/AdminMeetings";
import AdminUsers from "./pages/admin/AdminUsers";
import AdminCohorts from "./pages/admin/AdminCohorts";
import AdminCohortDetail from "./pages/admin/AdminCohortDetail";
import AdminAnnouncements from "./pages/admin/AdminAnnouncements";
import { AdminGuard } from "@/components/admin/AdminGuard";
import AdminLogin from "./pages/admin/AdminLogin";
import CabinetLayout from "./pages/cabinet/CabinetLayout";
import CabinetLogin from "./pages/cabinet/CabinetLogin";
import CabinetDashboard from "./pages/cabinet/CabinetDashboard";
import CabinetProgram from "./pages/cabinet/CabinetProgram";
import CabinetResources from "./pages/cabinet/CabinetResources";
import Meeting1PresentationShell from "@/components/presentation/meeting1/Meeting1PresentationShell";
import PublicMeeting1Shell from "@/components/presentation/meeting1/PublicMeeting1Shell";
import PublicMeeting2Shell from "@/components/presentation/meeting2/PublicMeeting2Shell";

const queryClient = new QueryClient();

function LangLanding() {
  const { lang } = useParams<{ lang: string }>();
  const validLang = supportedLangs.includes(lang as Lang) ? (lang as Lang) : "en";
  return (
    <LanguageProvider lang={validLang}>
      <Landing />
    </LanguageProvider>
  );
}

function LangApply() {
  const { lang } = useParams<{ lang: string }>();
  const validLang = supportedLangs.includes(lang as Lang) ? (lang as Lang) : "en";
  return (
    <LanguageProvider lang={validLang}>
      <Apply />
    </LanguageProvider>
  );
}

function LangMentor() {
  const { lang } = useParams<{ lang: string }>();
  const validLang = supportedLangs.includes(lang as Lang) ? (lang as Lang) : "en";
  return (
    <LanguageProvider lang={validLang}>
      <Mentor />
    </LanguageProvider>
  );
}

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/en" replace />} />
          <Route path="/:lang" element={<LangLanding />} />
          <Route path="/:lang/apply" element={<LangApply />} />
          <Route path="/:lang/mentor" element={<LangMentor />} />
          <Route path="/pitch" element={<PresentationShell />} />
          <Route path="/register" element={<Register />} />
          <Route path="/program" element={<Program />} />
          <Route path="/programm-week1" element={<PublicMeeting1Shell />} />
          <Route path="/programm-week2" element={<PublicMeeting2Shell />} />
          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<AdminDashboard />} />
            <Route path="presentations" element={<AdminPresentations />} />
            <Route path="plans" element={<AdminMonthlyPlans />} />
            <Route path="meetings" element={<AdminMeetings />} />
            <Route path="users" element={<AdminUsers />} />
            <Route path="cohorts" element={<AdminCohorts />} />
            <Route path="cohorts/:id" element={<AdminCohortDetail />} />
            <Route path="announcements" element={<AdminAnnouncements />} />
          </Route>
          <Route path="/admin/meeting/:id" element={
            <AdminGuard fallback={<AdminLogin />}>
              <Meeting1PresentationShell />
            </AdminGuard>
          } />
          <Route path="/cabinet/login" element={<CabinetLogin />} />
          <Route path="/cabinet" element={<CabinetLayout />}>
            <Route index element={<CabinetDashboard />} />
            <Route path="program" element={<CabinetProgram />} />
            <Route path="resources" element={<CabinetResources />} />
          </Route>
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
