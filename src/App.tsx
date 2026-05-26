import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate, useParams } from "react-router-dom";
import { LanguageProvider } from "@/i18n/LanguageContext";
import { supportedLangs, type Lang } from "@/i18n/translations";
import Agents from "./pages/Agents";
import Landing from "./pages/Landing";
import Lens from "./pages/Lens";
import NewLanding from "./pages/NewLanding";
import MiniCourseLanding from "./pages/MiniCourseLanding";
import PmfAgent from "./pages/PmfAgent";
import Accelerator from "./pages/Accelerator";
import Apply from "./pages/Apply";
import Mentor from "./pages/Mentor";
import PresentationShell from "@/components/presentation/PresentationShell";
import Pitch1Shell from "@/components/presentation/pitch1/Pitch1Shell";
import Register from "./pages/Register";
import Program from "./pages/Program";
import NotFound from "./pages/NotFound";
import ThankYou from "./pages/ThankYou";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import ContactUs from "./pages/ContactUs";
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
import PublicMeeting3Shell from "@/components/presentation/meeting3/PublicMeeting3Shell";
import PublicMeeting4Shell from "@/components/presentation/meeting4/PublicMeeting4Shell";
import PublicMeeting5Shell from "@/components/presentation/meeting5/PublicMeeting5Shell";
import PublicMeeting6Shell from "@/components/presentation/meeting6/PublicMeeting6Shell";
import PublicMeeting7Shell from "@/components/presentation/meeting7/PublicMeeting7Shell";
import PublicMeeting8Shell from "@/components/presentation/meeting8/PublicMeeting8Shell";
import PublicMeeting9Shell from "@/components/presentation/meeting9/PublicMeeting9Shell";
import PublicMeeting10Shell from "@/components/presentation/meeting10/PublicMeeting10Shell";
import PublicMeeting11Shell from "@/components/presentation/meeting11/PublicMeeting11Shell";
import PublicLesson0Shell from "@/components/presentation/recorded-course/lesson0/PublicLesson0Shell";
import PublicLesson1Shell from "@/components/presentation/recorded-course/lesson1/PublicLesson1Shell";
import PublicLesson2Shell from "@/components/presentation/recorded-course/lesson2/PublicLesson2Shell";
import PublicLesson3Shell from "@/components/presentation/recorded-course/lesson3/PublicLesson3Shell";
import PublicLesson4Shell from "@/components/presentation/recorded-course/lesson4/PublicLesson4Shell";
import PublicLesson5Shell from "@/components/presentation/recorded-course/lesson5/PublicLesson5Shell";
import PublicLesson6Shell from "@/components/presentation/recorded-course/lesson6/PublicLesson6Shell";
import PublicLesson7Shell from "@/components/presentation/recorded-course/lesson7/PublicLesson7Shell";
import PublicLesson8Shell from "@/components/presentation/recorded-course/lesson8/PublicLesson8Shell";
import PublicLesson9Shell from "@/components/presentation/recorded-course/lesson9/PublicLesson9Shell";
import PublicLesson11Shell from "@/components/presentation/recorded-course/lesson11/PublicLesson11Shell";
import PublicLesson12Shell from "@/components/presentation/recorded-course/lesson12/PublicLesson12Shell";
import PublicLesson13Shell from "@/components/presentation/recorded-course/lesson13/PublicLesson13Shell";
import PublicLesson14Shell from "@/components/presentation/recorded-course/lesson14/PublicLesson14Shell";
import PublicFOM1Shell from "@/components/presentation/founderOsMini1/PublicFOM1Shell";
import FOM1Shell from "@/components/presentation/founderOsMini1/FOM1Shell";
import PublicFOM2Shell from "@/components/presentation/founderOsMini2/PublicFOM2Shell";
import FOM2Shell from "@/components/presentation/founderOsMini2/FOM2Shell";
import MiniCourseLesson1 from "./pages/MiniCourseLesson1";
import MiniCourseLesson1Text from "./pages/MiniCourseLesson1Text";
import MiniCourseLesson0 from "./pages/MiniCourseLesson0";
import MiniCourseLesson2 from "./pages/MiniCourseLesson2";
import MiniCourseLesson3 from "./pages/MiniCourseLesson3";
import MiniCourseLesson4 from "./pages/MiniCourseLesson4";
import MiniCourseThankYou from "./pages/MiniCourseThankYou";

const queryClient = new QueryClient();

function LangLanding() {
  const { lang } = useParams<{ lang: string }>();
  const validLang = supportedLangs.includes(lang as Lang) ? (lang as Lang) : "ru";
  // Hebrew keeps the original accelerator landing (mini-course content is Russian-only).
  if (validLang === "he") {
    return (
      <LanguageProvider lang={validLang}>
        <NewLanding />
      </LanguageProvider>
    );
  }
  return <MiniCourseLanding />;
}

function LangAcceleratorLanding() {
  const { lang } = useParams<{ lang: string }>();
  const validLang = supportedLangs.includes(lang as Lang) ? (lang as Lang) : "ru";
  return (
    <LanguageProvider lang={validLang}>
      <NewLanding />
    </LanguageProvider>
  );
}

function LangAccelerator() {
  const { lang } = useParams<{ lang: string }>();
  const validLang = supportedLangs.includes(lang as Lang) ? (lang as Lang) : "en";
  return (
    <LanguageProvider lang={validLang}>
      <Accelerator />
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

function LangThankYou() {
  const { lang } = useParams<{ lang: string }>();
  const validLang = supportedLangs.includes(lang as Lang) ? (lang as Lang) : "en";
  return (
    <LanguageProvider lang={validLang}>
      <ThankYou />
    </LanguageProvider>
  );
}

function LangPrivacy() {
  const { lang } = useParams<{ lang: string }>();
  const validLang = supportedLangs.includes(lang as Lang) ? (lang as Lang) : "en";
  return (
    <LanguageProvider lang={validLang}>
      <PrivacyPolicy />
    </LanguageProvider>
  );
}

function LangTerms() {
  const { lang } = useParams<{ lang: string }>();
  const validLang = supportedLangs.includes(lang as Lang) ? (lang as Lang) : "en";
  return (
    <LanguageProvider lang={validLang}>
      <TermsOfService />
    </LanguageProvider>
  );
}

function LangContact() {
  const { lang } = useParams<{ lang: string }>();
  const validLang = supportedLangs.includes(lang as Lang) ? (lang as Lang) : "en";
  return (
    <LanguageProvider lang={validLang}>
      <ContactUs />
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
          <Route path="/" element={<Navigate to="/ru" replace />} />
          <Route path="/:lang" element={<LangLanding />} />
          <Route path="/:lang/accelerator-landing" element={<LangAcceleratorLanding />} />
          <Route path="/:lang/accelerator" element={<LangAccelerator />} />
          <Route path="/:lang/apply" element={<LangApply />} />
          <Route path="/:lang/mentor" element={<LangMentor />} />
          <Route path="/pitch" element={<PresentationShell />} />
          <Route path="/pitch1" element={<Pitch1Shell />} />
          <Route path="/agents" element={<Agents />} />
          <Route path="/agents/lens" element={<Lens />} />
          <Route path="/agents/pmf" element={<PmfAgent />} />
          <Route path="/lens" element={<Navigate to="/agents/lens" replace />} />
          <Route path="/register" element={<Register />} />
          <Route path="/program" element={<Program />} />
          <Route path="/programm-week1" element={<PublicMeeting1Shell />} />
          <Route path="/programm-week2" element={<PublicMeeting2Shell />} />
          <Route path="/programm-week3" element={<PublicMeeting3Shell />} />
          <Route path="/programm-week4" element={<PublicMeeting4Shell />} />
          <Route path="/programm-week5" element={<PublicMeeting5Shell />} />
          <Route path="/programm-week6" element={<PublicMeeting6Shell />} />
          <Route path="/programm-week7" element={<PublicMeeting7Shell />} />
          <Route path="/programm-week8" element={<PublicMeeting8Shell />} />
          <Route path="/programm-week9" element={<PublicMeeting9Shell />} />
          <Route path="/programm-week10" element={<PublicMeeting10Shell />} />
          <Route path="/programm-week11" element={<PublicMeeting11Shell />} />
          <Route path="/recorded-course/lesson0" element={<PublicLesson0Shell />} />
          <Route path="/recorded-course/lesson1" element={<PublicLesson1Shell />} />
          <Route path="/recorded-course/lesson2" element={<PublicLesson2Shell />} />
          <Route path="/recorded-course/lesson3" element={<PublicLesson3Shell />} />
          <Route path="/recorded-course/lesson4" element={<PublicLesson4Shell />} />
          <Route path="/recorded-course/lesson5" element={<PublicLesson5Shell />} />
          <Route path="/recorded-course/lesson6" element={<PublicLesson6Shell />} />
          <Route path="/recorded-course/lesson7" element={<PublicLesson7Shell />} />
          <Route path="/recorded-course/lesson8" element={<PublicLesson8Shell />} />
          <Route path="/recorded-course/lesson9" element={<PublicLesson9Shell />} />
          <Route path="/recorded-course/lesson11" element={<PublicLesson11Shell />} />
          <Route path="/recorded-course/lesson12" element={<PublicLesson12Shell />} />
          <Route path="/recorded-course/lesson13" element={<PublicLesson13Shell />} />
          <Route path="/recorded-course/lesson14" element={<PublicLesson14Shell />} />
          <Route path="/founder-os-mini-session1" element={<PublicFOM1Shell />} />
          <Route path="/admin/founder-os-mini-session1" element={<FOM1Shell />} />
          <Route path="/founder-os-mini-session2" element={<PublicFOM2Shell />} />
          <Route path="/admin/founder-os-mini-session2" element={<FOM2Shell />} />
          <Route path="/mini-course/lesson0" element={<MiniCourseLesson0 />} />
          <Route path="/mini-course/lesson1" element={<MiniCourseLesson1 />} />
          <Route path="/mini-course/lesson1/text" element={<MiniCourseLesson1Text />} />
          <Route path="/mini-course/lesson2" element={<MiniCourseLesson2 />} />
          <Route path="/mini-course/lesson3" element={<MiniCourseLesson3 />} />
          <Route path="/mini-course/lesson4" element={<MiniCourseLesson4 />} />
          <Route path="/mini-course/thank-you" element={<MiniCourseThankYou />} />
          <Route path="/:lang/privacy" element={<LangPrivacy />} />
          <Route path="/:lang/terms" element={<LangTerms />} />
          <Route path="/:lang/contact" element={<LangContact />} />
          <Route path="/:lang/thank-you" element={<LangThankYou />} />
          <Route path="/thank-you" element={<Navigate to="/en/thank-you" replace />} />
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
