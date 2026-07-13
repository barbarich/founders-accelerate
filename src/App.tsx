import { lazy, Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate, useParams } from "react-router-dom";
import { LanguageProvider } from "@/i18n/LanguageContext";
import { supportedLangs, type Lang } from "@/i18n/translations";
import { AdminGuard } from "@/components/admin/AdminGuard";

// Eager: default route (/ -> /ru) must paint without an extra network round-trip.
import MiniCourseLanding from "./pages/MiniCourseLanding";
import NotFound from "./pages/NotFound";

// Everything else is code-split: each route loads its own chunk on demand,
// keeping the main bundle small (was a single ~4.3 MB bundle with all decks).
const Agents = lazy(() => import("./pages/Agents"));
const Lens = lazy(() => import("./pages/Lens"));
const NewLanding = lazy(() => import("./pages/NewLanding"));
const PmfAgent = lazy(() => import("./pages/PmfAgent"));
const Accelerator = lazy(() => import("./pages/Accelerator"));
const Apply = lazy(() => import("./pages/Apply"));
const Mentor = lazy(() => import("./pages/Mentor"));
const PresentationShell = lazy(() => import("@/components/presentation/PresentationShell"));
const Pitch1Shell = lazy(() => import("@/components/presentation/pitch1/Pitch1Shell"));
const Register = lazy(() => import("./pages/Register"));
const Program = lazy(() => import("./pages/Program"));
const ThankYou = lazy(() => import("./pages/ThankYou"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const TermsOfService = lazy(() => import("./pages/TermsOfService"));
const ContactUs = lazy(() => import("./pages/ContactUs"));
const AdminLayout = lazy(() => import("./pages/admin/AdminLayout"));
const AdminDashboard = lazy(() => import("./pages/admin/AdminDashboard"));
const AdminPresentations = lazy(() => import("./pages/admin/AdminPresentations"));
const AdminMonthlyPlans = lazy(() => import("./pages/admin/AdminMonthlyPlans"));
const AdminMeetings = lazy(() => import("./pages/admin/AdminMeetings"));
const AdminUsers = lazy(() => import("./pages/admin/AdminUsers"));
const AdminCohorts = lazy(() => import("./pages/admin/AdminCohorts"));
const AdminCohortDetail = lazy(() => import("./pages/admin/AdminCohortDetail"));
const AdminAnnouncements = lazy(() => import("./pages/admin/AdminAnnouncements"));
const AdminLogin = lazy(() => import("./pages/admin/AdminLogin"));
const CabinetLayout = lazy(() => import("./pages/cabinet/CabinetLayout"));
const CabinetLogin = lazy(() => import("./pages/cabinet/CabinetLogin"));
const CabinetDashboard = lazy(() => import("./pages/cabinet/CabinetDashboard"));
const CabinetProgram = lazy(() => import("./pages/cabinet/CabinetProgram"));
const CabinetResources = lazy(() => import("./pages/cabinet/CabinetResources"));
const Meeting1PresentationShell = lazy(() => import("@/components/presentation/meeting1/Meeting1PresentationShell"));
const PublicMeeting1Shell = lazy(() => import("@/components/presentation/meeting1/PublicMeeting1Shell"));
const PublicMeeting2Shell = lazy(() => import("@/components/presentation/meeting2/PublicMeeting2Shell"));
const PublicMeeting3Shell = lazy(() => import("@/components/presentation/meeting3/PublicMeeting3Shell"));
const PublicMeeting4Shell = lazy(() => import("@/components/presentation/meeting4/PublicMeeting4Shell"));
const PublicMeeting5Shell = lazy(() => import("@/components/presentation/meeting5/PublicMeeting5Shell"));
const PublicMeeting6Shell = lazy(() => import("@/components/presentation/meeting6/PublicMeeting6Shell"));
const PublicMeeting7Shell = lazy(() => import("@/components/presentation/meeting7/PublicMeeting7Shell"));
const PublicMeeting8Shell = lazy(() => import("@/components/presentation/meeting8/PublicMeeting8Shell"));
const PublicMeeting9Shell = lazy(() => import("@/components/presentation/meeting9/PublicMeeting9Shell"));
const PublicMeeting10Shell = lazy(() => import("@/components/presentation/meeting10/PublicMeeting10Shell"));
const PublicMeeting11Shell = lazy(() => import("@/components/presentation/meeting11/PublicMeeting11Shell"));
const PublicMeeting12Shell = lazy(() => import("@/components/presentation/meeting12/PublicMeeting12Shell"));
const PublicLesson0Shell = lazy(() => import("@/components/presentation/recorded-course/lesson0/PublicLesson0Shell"));
const PublicLesson1Shell = lazy(() => import("@/components/presentation/recorded-course/lesson1/PublicLesson1Shell"));
const PublicLesson2Shell = lazy(() => import("@/components/presentation/recorded-course/lesson2/PublicLesson2Shell"));
const PublicLesson3Shell = lazy(() => import("@/components/presentation/recorded-course/lesson3/PublicLesson3Shell"));
const PublicLesson4Shell = lazy(() => import("@/components/presentation/recorded-course/lesson4/PublicLesson4Shell"));
const PublicLesson5Shell = lazy(() => import("@/components/presentation/recorded-course/lesson5/PublicLesson5Shell"));
const PublicLesson6Shell = lazy(() => import("@/components/presentation/recorded-course/lesson6/PublicLesson6Shell"));
const PublicLesson7Shell = lazy(() => import("@/components/presentation/recorded-course/lesson7/PublicLesson7Shell"));
const PublicLesson8Shell = lazy(() => import("@/components/presentation/recorded-course/lesson8/PublicLesson8Shell"));
const PublicLesson9Shell = lazy(() => import("@/components/presentation/recorded-course/lesson9/PublicLesson9Shell"));
const PublicLesson10Shell = lazy(() => import("@/components/presentation/recorded-course/lesson10/PublicLesson10Shell"));
const PublicLesson11Shell = lazy(() => import("@/components/presentation/recorded-course/lesson11/PublicLesson11Shell"));
const PublicLesson12Shell = lazy(() => import("@/components/presentation/recorded-course/lesson12/PublicLesson12Shell"));
const PublicLesson13Shell = lazy(() => import("@/components/presentation/recorded-course/lesson13/PublicLesson13Shell"));
const PublicLesson14Shell = lazy(() => import("@/components/presentation/recorded-course/lesson14/PublicLesson14Shell"));
const PublicLesson15Shell = lazy(() => import("@/components/presentation/recorded-course/lesson15/PublicLesson15Shell"));
const PublicFOM1Shell = lazy(() => import("@/components/presentation/founderOsMini1/PublicFOM1Shell"));
const FOM1Shell = lazy(() => import("@/components/presentation/founderOsMini1/FOM1Shell"));
const PublicFOM2Shell = lazy(() => import("@/components/presentation/founderOsMini2/PublicFOM2Shell"));
const FOM2Shell = lazy(() => import("@/components/presentation/founderOsMini2/FOM2Shell"));
const PublicFOM3Shell = lazy(() => import("@/components/presentation/founderOsMini3/PublicFOM3Shell"));
const FOM3Shell = lazy(() => import("@/components/presentation/founderOsMini3/FOM3Shell"));
const PublicFOM4Shell = lazy(() => import("@/components/presentation/founderOsMini4/PublicFOM4Shell"));
const FOM4Shell = lazy(() => import("@/components/presentation/founderOsMini4/FOM4Shell"));
const PublicFOM5Shell = lazy(() => import("@/components/presentation/founderOsMini5/PublicFOM5Shell"));
const FOM5Shell = lazy(() => import("@/components/presentation/founderOsMini5/FOM5Shell"));
const PublicFOM6Shell = lazy(() => import("@/components/presentation/founderOsMini6/PublicFOM6Shell"));
const FOM6Shell = lazy(() => import("@/components/presentation/founderOsMini6/FOM6Shell"));
const MiniCourseLesson1 = lazy(() => import("./pages/MiniCourseLesson1"));
const MiniCourseLesson1Text = lazy(() => import("./pages/MiniCourseLesson1Text"));
const MiniCourseLesson0 = lazy(() => import("./pages/MiniCourseLesson0"));
const MiniCourseLesson2 = lazy(() => import("./pages/MiniCourseLesson2"));
const MiniCourseLesson3 = lazy(() => import("./pages/MiniCourseLesson3"));
const MiniCourseLesson4 = lazy(() => import("./pages/MiniCourseLesson4"));
const MiniCourseThankYou = lazy(() => import("./pages/MiniCourseThankYou"));
const RecordedCourseLanding = lazy(() => import("./pages/RecordedCourseLanding"));
const CourseThankYou = lazy(() => import("./pages/CourseThankYou"));

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
        {/* fallback={null}: the inline script in index.html already paints the
            correct background, so no spinner is needed while a chunk loads. */}
        <Suspense fallback={null}>
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
          <Route path="/programm-week12" element={<PublicMeeting12Shell />} />
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
          <Route path="/recorded-course/lesson10" element={<PublicLesson10Shell />} />
          <Route path="/recorded-course/lesson11" element={<PublicLesson11Shell />} />
          <Route path="/recorded-course/lesson12" element={<PublicLesson12Shell />} />
          <Route path="/recorded-course/lesson13" element={<PublicLesson13Shell />} />
          <Route path="/recorded-course/lesson14" element={<PublicLesson14Shell />} />
          <Route path="/recorded-course/lesson15" element={<PublicLesson15Shell />} />
          <Route path="/founder-os-mini-session1" element={<PublicFOM1Shell />} />
          <Route path="/admin/founder-os-mini-session1" element={<FOM1Shell />} />
          <Route path="/founder-os-mini-session2" element={<PublicFOM2Shell />} />
          <Route path="/admin/founder-os-mini-session2" element={<FOM2Shell />} />
          <Route path="/founder-os-mini-session3" element={<PublicFOM3Shell />} />
          <Route path="/admin/founder-os-mini-session3" element={<FOM3Shell />} />
          <Route path="/founder-os-mini-session4" element={<PublicFOM4Shell />} />
          <Route path="/admin/founder-os-mini-session4" element={<FOM4Shell />} />
          <Route path="/founder-os-mini-session5" element={<PublicFOM5Shell />} />
          <Route path="/admin/founder-os-mini-session5" element={<FOM5Shell />} />
          <Route path="/founder-os-mini-session6" element={<PublicFOM6Shell />} />
          <Route path="/admin/founder-os-mini-session6" element={<FOM6Shell />} />
          <Route path="/mini-course/lesson0" element={<MiniCourseLesson0 />} />
          <Route path="/mini-course/lesson1" element={<MiniCourseLesson1 />} />
          <Route path="/mini-course/lesson1/text" element={<MiniCourseLesson1Text />} />
          <Route path="/mini-course/lesson2" element={<MiniCourseLesson2 />} />
          <Route path="/mini-course/lesson3" element={<MiniCourseLesson3 />} />
          <Route path="/mini-course/lesson4" element={<MiniCourseLesson4 />} />
          <Route path="/mini-course/thank-you" element={<MiniCourseThankYou />} />
          <Route path="/course" element={<RecordedCourseLanding />} />
          <Route path="/ru/course" element={<RecordedCourseLanding />} />
          <Route path="/course/thank-you" element={<CourseThankYou />} />
          <Route path="/ru/course/thank-you" element={<CourseThankYou />} />
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
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
