import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Home from "./pages/Home";
import ResidentialFunnel from "./pages/ResidentialFunnel";
import Gallery from "./pages/Gallery";
import About from "./pages/About";
import Commercial from "./pages/Commercial";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import BuckheadKitchenRemodeling from "./pages/BuckheadKitchenRemodeling";
import MidtownKitchenRemodeling from "./pages/MidtownKitchenRemodeling";
import SandySpringsBasementRemodeling from "./pages/SandySpringsBasementRemodeling";
import ViningsKitchenRemodeling from "./pages/ViningsKitchenRemodeling";
import AtlantaBasementFinishing from "./pages/AtlantaBasementFinishing";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import AgencyProposal from "./pages/tools/AgencyProposal";
import GoHighLevelChat from "./components/GoHighLevelChat";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <GoHighLevelChat />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/residential" element={<ResidentialFunnel />} />
          <Route path="/commercial" element={<Commercial />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/tools/agency-proposal" element={<AgencyProposal />} />
          <Route path="/areas/buckhead-kitchen-remodeling" element={<BuckheadKitchenRemodeling />} />
          <Route path="/areas/midtown-kitchen-remodeling" element={<MidtownKitchenRemodeling />} />
          <Route path="/areas/sandy-springs-bathroom-remodeling" element={<SandySpringsBasementRemodeling />} />
          <Route path="/areas/vinings-kitchen-remodeling" element={<ViningsKitchenRemodeling />} />
          <Route path="/services/basement-finishing-atlanta" element={<AtlantaBasementFinishing />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
