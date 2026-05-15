import { useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const TESTIMONIALS = [
  {
    id: 1,
    text: "El nivel de precisión es irreal. Desde el escáner 3D hasta el resultado final, sentí que estaba en una clínica del futuro. Mi rehabilitación fue 100% indolora.",
    author: "Carlos E. Mendoza",
    role: "Rehabilitación sobre Implantes",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: 2,
    text: "No solo cambiaron mi sonrisa, cambiaron mi forma de proyectarme al mundo. El diseño con carillas y la planificación digital me dieron exactamente lo que pedí.",
    author: "Valeria Salazar",
    role: "Diseño de Sonrisa Estético",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: 3,
    text: "Llevaba años posponiendo mi ortodoncia por miedo a los brackets. Los alineadores invisibles guiados por IA hicieron que el proceso fuera rápido y totalmente discreto.",
    author: "Andrés Restrepo",
    role: "Ortodoncia Invisible",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1200&auto=format&fit=crop"
  }
];

// FIX: Exportación por defecto (export default function) para que coincida con tu App.jsx
export default function Testimonials() {
  const sectionRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 75%",
        toggleActions: "play none none reverse"
      }
    });

    tl.fromTo(".js-test-header", 
      { y: 40, opacity: 0 }, 
      { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }
    ).fromTo(".js-test-content",
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
      "-=0.4"
    );

  }, { scope: sectionRef });

  return (
    <section 
      ref={sectionRef} 
      className="relative bg-linear-to-b from-[#0d1528] to-dental-navy py-32 lg:py-48 overflow-hidden min-h-[80vh] flex items-center"
    >
      {/* ─── Imágenes de Fondo (Crossfade) ─── */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {TESTIMONIALS.map((item, index) => (
          <div 
            key={`bg-${item.id}`}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === activeIndex ? 'opacity-100' : 'opacity-0'}`}
          >
            <img 
              src={item.image} 
              alt="Paciente" 
              className="w-full h-full object-cover object-center opacity-20 grayscale mix-blend-luminosity"
            />
            <div className="absolute inset-0 bg-linear-to-r from-dental-navy via-dental-navy/80 to-transparent" />
            <div className="absolute inset-0 bg-linear-to-t from-dental-navy via-transparent to-dental-navy" />
          </div>
        ))}
        {/* Glow dorado ambiental (Cambiado a clases canónicas para evitar advertencias en consola) */}
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-125 h-125 bg-dental-gold/5 rounded-full blur-[150px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full">
        
        <header className="js-test-header mb-16 md:mb-24">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-px bg-dental-gold" />
            <span className="font-sans text-xs font-medium tracking-[0.2em] uppercase text-dental-gold">
              Experiencia del Paciente
            </span>
          </div>
          <h2 className="font-display text-4xl lg:text-6xl font-light text-white leading-tight max-w-2xl">
            Sonrisas que hablan por <span className="text-dental-gold italic">sí solas.</span>
          </h2>
        </header>

        {/* ─── Contenedor del Testimonio ─── */}
        <div className="js-test-content grid lg:grid-cols-12 gap-12 lg:gap-8 items-end">
          
          {/* Tipografía Oversized (Cita) */}
          <div className="lg:col-span-8 relative">
            <span className="absolute -top-16 -left-8 lg:-top-24 lg:-left-12 font-display text-9xl lg:text-[12rem] text-white/5 leading-none select-none">
              &ldquo;
            </span>
            
            <div className="relative min-h-64 lg:min-h-56">
              {TESTIMONIALS.map((item, index) => (
                <div 
                  key={item.id}
                  className={`absolute top-0 left-0 w-full transition-all duration-700 ease-in-out ${
                    index === activeIndex 
                      ? 'opacity-100 translate-y-0 pointer-events-auto' 
                      : 'opacity-0 translate-y-8 pointer-events-none'
                  }`}
                >
                  <p className="font-display text-2xl md:text-3xl lg:text-4xl leading-relaxed text-white font-light">
                    {item.text}
                  </p>
                  
                  <div className="mt-8 flex items-center gap-4">
                    <div className="w-12 h-px bg-white/20" />
                    <div>
                      <h4 className="font-sans font-bold text-white tracking-wide">
                        {item.author}
                      </h4>
                      <p className="font-sans text-sm text-dental-gold uppercase tracking-widest mt-1">
                        {item.role}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ─── Controles de Navegación ─── */}
          <div className="lg:col-span-4 flex flex-col items-start lg:items-end justify-end pb-4">
            <div className="flex items-center gap-4">
              <button 
                onClick={handlePrev}
                className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center text-white hover:border-dental-gold hover:bg-dental-gold hover:text-dental-navy transition-all duration-300 cursor-pointer group"
                aria-label="Testimonio anterior"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="stroke-current transform group-hover:-translate-x-1 transition-transform">
                  <path d="M15 18l-6-6 6-6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              
              <div className="flex gap-2">
                {TESTIMONIALS.map((_, index) => (
                  <button 
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`h-1.5 transition-all duration-500 rounded-full cursor-pointer ${
                      index === activeIndex ? 'w-8 bg-dental-gold' : 'w-2 bg-white/20 hover:bg-white/40'
                    }`}
                    aria-label={`Ir al testimonio ${index + 1}`}
                  />
                ))}
              </div>

              <button 
                onClick={handleNext}
                className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center text-white hover:border-dental-gold hover:bg-dental-gold hover:text-dental-navy transition-all duration-300 cursor-pointer group"
                aria-label="Testimonio siguiente"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="stroke-current transform group-hover:translate-x-1 transition-transform">
                  <path d="M9 18l6-6-6-6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </div>

        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-white/10 to-transparent" />
    </section>
  );
}