import { SmoothScroll } from "./layout/SmoothScroll";
import { Hero } from "./sections/Hero";
import { Services } from "./sections/Services";
import { Technology } from "./sections/Technology";
import { Cases } from "./sections/Cases";
import Testimonials from "./sections/Testimonials";
import { Footer } from "./sections/Footer";
import { WhatsAppButton } from "./components/WhatsAppButton"; 

function App() {
  return (
    <SmoothScroll>
      {/* Fondo base dental-navy para garantizar cero saltos de color */}
      <main className="bg-dental-navy min-h-screen text-white selection:bg-dental-gold selection:text-dental-navy relative">
        
        {/* NAVBAR */}
        <nav className="fixed top-0 w-full z-50 p-6 flex justify-between items-center backdrop-blur-md bg-black/20 border-b border-white/5 pointer-events-none">
          <div className="text-xl font-bold tracking-tighter cursor-pointer pointer-events-auto">
            DENTAL<span className="text-dental-gold">PRO</span>
          </div>
          <div className="hidden md:flex gap-8 text-sm font-medium text-gray-400 pointer-events-auto">
            <a href="#servicios" className="hover:text-white transition-colors">Servicios</a>
            <a href="#tecnologia" className="hover:text-white transition-colors">Tecnología</a>
            <a href="#casos" className="hover:text-white transition-colors">Casos</a>
          </div>
        </nav>
        
        <Hero />
        
        <div id="servicios">
          <Services />
        </div>

        <div id="tecnologia">
          <Technology />
        </div>

        <div id="casos">
          <Cases />
        </div>

        <Testimonials />

        <Footer />

        <WhatsAppButton />

      </main>
    </SmoothScroll>
  );
}

export default App;