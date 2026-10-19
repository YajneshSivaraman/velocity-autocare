// Import each website section as a separate component.
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SurfaceLab from "./components/SurfaceLab";
import Services from "./components/Services";
import Transformation from "./components/Transformation";
import Configurator from "./components/Configurator";
import Footer from "./components/Footer";

// Render the complete VELOCITY website.
export default function App() {
  return (
    <>
      {/* Keep the navigation separate from the main content. */}
      <Navbar />

      {/* Render all page sections below the navigation. */}
      <main className="min-h-screen bg-[#F5F7FA] text-[#17202B]">
        <Hero />
        <SurfaceLab />
        <Services />
        <Transformation />
        <Configurator />
      </main>

      {/* Keep the footer outside the main content wrapper. */}
      <Footer />
    </>
  );
}