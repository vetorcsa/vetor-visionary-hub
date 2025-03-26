
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AdminProvider } from "@/contexts/AdminContext";
import Index from "./pages/Index";
import About from "./pages/About";
import Admin from "./pages/Admin";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Navbar from "./components/Layout/Navbar";
import Footer from "./components/Layout/Footer";
import TaxRecovery from "./pages/TaxRecovery";
import WebsiteBenefits from "./pages/WebsiteBenefits";
import ErpSolutions from "./pages/ErpSolutions";
import TransportationPlans from "./pages/TransportationPlans";
import RealEstatePlans from "./pages/RealEstatePlans";
import ProcessAutomation from "./pages/ProcessAutomation";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AdminProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/sobre" element={<About />} />
                <Route path="/contato" element={<Contact />} />
                <Route path="/admin" element={<Admin />} />
                <Route path="/recuperacao-tributaria" element={<TaxRecovery />} />
                <Route path="/crie-seu-site" element={<WebsiteBenefits />} />
                <Route path="/solucoes-erp" element={<ErpSolutions />} />
                <Route path="/planos-transportadoras" element={<TransportationPlans />} />
                <Route path="/planos-imobiliarias" element={<RealEstatePlans />} />
                <Route path="/automacoes-processos" element={<ProcessAutomation />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </BrowserRouter>
      </TooltipProvider>
    </AdminProvider>
  </QueryClientProvider>
);

export default App;
