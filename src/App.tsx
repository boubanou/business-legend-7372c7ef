import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { Suspense, lazy, useState, useEffect } from "react";
import "@/i18n/config";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";
import Footer from "@/components/Footer";
import { CookieConsent } from "@/components/CookieConsent";
import ContactFormDialog from "@/components/ContactFormDialog";

const queryClient = new QueryClient();

// Route-based code splitting
const Home = lazy(() => import("./pages/Home"));
const Partnerships = lazy(() => import("./pages/Partnerships"));
const Episodes = lazy(() => import("./pages/Episodes"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const NotFound = lazy(() => import("./pages/NotFound"));

const App = () => {
  const [isContactDialogOpen, setIsContactDialogOpen] = useState(false);
  const [hasShownPopup, setHasShownPopup] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!hasShownPopup) {
        setIsContactDialogOpen(true);
        setHasShownPopup(true);
      }
    }, 30000); // 30 seconds

    return () => clearTimeout(timer);
  }, [hasShownPopup]);

  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <ScrollToTop />
            <div className="flex flex-col min-h-screen">
              <Header />
              <main className="flex-grow">
                <Suspense fallback={<div aria-live="polite" role="status" className="flex items-center justify-center min-h-[400px]"><span className="sr-only">Loading</span></div>}>
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/partnerships" element={<Partnerships />} />
                    <Route path="/episodes" element={<Episodes />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                    <Route path="*" element={<NotFound />} />
                  </Routes>
                </Suspense>
              </main>
              <Footer />
            </div>
            <CookieConsent />
            <ContactFormDialog 
              open={isContactDialogOpen} 
              onOpenChange={setIsContactDialogOpen}
            />
          </BrowserRouter>
        </TooltipProvider>
      </QueryClientProvider>
    </HelmetProvider>
  );
};

export default App;
