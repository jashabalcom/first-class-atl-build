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
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
