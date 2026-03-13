import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate, useParams } from "react-router-dom";
import { LanguageProvider } from "@/i18n/LanguageContext";
import { supportedLangs, type Lang } from "@/i18n/translations";
import Landing from "./pages/Landing";
import Apply from "./pages/Apply";
import PresentationShell from "@/components/presentation/PresentationShell";
import Register from "./pages/Register";
import Program from "./pages/Program";
import NotFound from "./pages/NotFound";

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
          <Route path="/pitch" element={<PresentationShell />} />
          <Route path="/register" element={<Register />} />
          <Route path="/program" element={<Program />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
