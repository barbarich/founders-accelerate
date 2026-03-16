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
import { AdminGuard } from "@/components/admin/AdminGuard";
import AdminLogin from "./pages/admin/AdminLogin";
import Meeting1PresentationShell from "@/components/presentation/meeting1/Meeting1PresentationShell";
import PublicMeeting1Shell from "@/components/presentation/meeting1/PublicMeeting1Shell";

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
          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<AdminDashboard />} />
            <Route path="presentations" element={<AdminPresentations />} />
            <Route path="plans" element={<AdminMonthlyPlans />} />
            <Route path="meetings" element={<AdminMeetings />} />
            <Route path="users" element={<AdminUsers />} />
          </Route>
          <Route path="/admin/meeting/:id" element={
            <AdminGuard fallback={<AdminLogin />}>
              <Meeting1PresentationShell />
            </AdminGuard>
          } />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
