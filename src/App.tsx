import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import PageTransition from "./components/PageTransition";
import GoHighLevelChat from "./components/GoHighLevelChat";
import { lazy, Suspense } from "react";

// Core pages
import Home from "./pages/Home";
import ResidentialFunnel from "./pages/ResidentialFunnel";
import Gallery from "./pages/Gallery";
import About from "./pages/About";
import Book from "./pages/Book";
import Commercial from "./pages/Commercial";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import NotFound from "./pages/NotFound";
import BuckheadKitchenRemodeling from "./pages/BuckheadKitchenRemodeling";
import MidtownKitchenRemodeling from "./pages/MidtownKitchenRemodeling";
import SandySpringsBasementRemodeling from "./pages/SandySpringsBasementRemodeling";
import ViningsKitchenRemodeling from "./pages/ViningsKitchenRemodeling";
import AtlantaBasementFinishing from "./pages/AtlantaBasementFinishing";
import AgencyProposal from "./pages/tools/AgencyProposal";
import Auth from "./pages/Auth";
import ResetPassword from "./pages/ResetPassword";

// Location Pages
import Atlanta from "./pages/locations/Atlanta";
import Buckhead from "./pages/locations/Buckhead";
import Midtown from "./pages/locations/Midtown";
import SandySprings from "./pages/locations/SandySprings";
import Brookhaven from "./pages/locations/Brookhaven";
import Dunwoody from "./pages/locations/Dunwoody";
import Roswell from "./pages/locations/Roswell";
import Decatur from "./pages/locations/Decatur";
import JohnsCreek from "./pages/locations/JohnsCreek";
import Marietta from "./pages/locations/Marietta";
import Alpharetta from "./pages/locations/Alpharetta";
import Smyrna from "./pages/locations/Smyrna";
import Duluth from "./pages/locations/Duluth";
import Douglasville from "./pages/locations/Douglasville";
import Norcross from "./pages/locations/Norcross";
import Snellville from "./pages/locations/Snellville";
import Kirkwood from "./pages/locations/Kirkwood";
import EastAtlantaVillage from "./pages/locations/EastAtlantaVillage";
import EastLake from "./pages/locations/EastLake";
import Downtown from "./pages/locations/Downtown";
import CandlerPark from "./pages/locations/CandlerPark";
import InmanPark from "./pages/locations/InmanPark";
import LakeClaire from "./pages/locations/LakeClaire";
import Oakhurst from "./pages/locations/Oakhurst";
import AvondaleEstates from "./pages/locations/AvondaleEstates";
import Mableton from "./pages/locations/Mableton";
import PowderSprings from "./pages/locations/PowderSprings";
import Austell from "./pages/locations/Austell";
import LithiaSprings from "./pages/locations/LithiaSprings";

// Lazy load admin to prevent module loading issues
const AdminDashboard = lazy(() => import("./pages/admin/AdminDashboard"));

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <GoHighLevelChat />
      <BrowserRouter>
        <ScrollToTop />
        <PageTransition>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/residential" element={<ResidentialFunnel />} />
            <Route path="/commercial" element={<Commercial />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/about" element={<About />} />
            <Route path="/book" element={<Book />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/tools/agency-proposal" element={<AgencyProposal />} />
            <Route path="/areas/buckhead-kitchen-remodeling" element={<BuckheadKitchenRemodeling />} />
            <Route path="/areas/midtown-kitchen-remodeling" element={<MidtownKitchenRemodeling />} />
            <Route path="/areas/sandy-springs-bathroom-remodeling" element={<SandySpringsBasementRemodeling />} />
            <Route path="/areas/vinings-kitchen-remodeling" element={<ViningsKitchenRemodeling />} />
            <Route path="/services/basement-finishing-atlanta" element={<AtlantaBasementFinishing />} />
            <Route path="/atlanta" element={<Atlanta />} />
            <Route path="/buckhead" element={<Buckhead />} />
            <Route path="/midtown" element={<Midtown />} />
            <Route path="/sandy-springs" element={<SandySprings />} />
            <Route path="/brookhaven" element={<Brookhaven />} />
            <Route path="/dunwoody" element={<Dunwoody />} />
            <Route path="/roswell" element={<Roswell />} />
            <Route path="/decatur" element={<Decatur />} />
            <Route path="/johns-creek" element={<JohnsCreek />} />
            <Route path="/marietta" element={<Marietta />} />
            <Route path="/alpharetta" element={<Alpharetta />} />
            <Route path="/smyrna" element={<Smyrna />} />
            <Route path="/duluth" element={<Duluth />} />
            <Route path="/douglasville" element={<Douglasville />} />
            <Route path="/norcross" element={<Norcross />} />
            <Route path="/snellville" element={<Snellville />} />
            <Route path="/kirkwood" element={<Kirkwood />} />
            <Route path="/east-atlanta-village" element={<EastAtlantaVillage />} />
            <Route path="/east-lake" element={<EastLake />} />
            <Route path="/downtown" element={<Downtown />} />
            <Route path="/candler-park" element={<CandlerPark />} />
            <Route path="/inman-park" element={<InmanPark />} />
            <Route path="/lake-claire" element={<LakeClaire />} />
            <Route path="/oakhurst" element={<Oakhurst />} />
            <Route path="/avondale-estates" element={<AvondaleEstates />} />
            <Route path="/mableton" element={<Mableton />} />
            <Route path="/powder-springs" element={<PowderSprings />} />
            <Route path="/austell" element={<Austell />} />
            <Route path="/lithia-springs" element={<LithiaSprings />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/auth/reset-password" element={<ResetPassword />} />
            <Route path="/admin" element={<Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}><AdminDashboard /></Suspense>} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </PageTransition>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;