import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const techList = [
  {
    id: "01",
    title: "Escáner Intraoral 3D",
    desc: "Adiós a las pastas molestas. Obtenemos un modelo digital perfecto de tu boca en segundos con precisión milimétrica.",
    img: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "02",
    title: "Planificación con IA",
    desc: "Diseñamos tu sonrisa ideal utilizando algoritmos de inteligencia artificial antes de tocar un solo diente.",
    img: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "03",
    title: "Microscopía Avanzada",
    desc: "Tratamientos de endodoncia indoloros y extremadamente precisos gracias a nuestra visión magnificada de alta resolución.",
    img: "https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?q=80&w=800&auto=format&fit=crop"
  }
];

export const Technology = () => {
  const containerRef = useRef();

  useGSAP(() => {
    const cards = gsap.utils.toArray(".tech-card");
    
    cards.forEach((card) => {
      gsap.from(card, {
        y: 80,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: card,
          start: "top 85%",
          toggleActions: "play none none reverse",
        }
      });
    });
  }, { scope: containerRef });

  return (
    <section 
      ref={containerRef} 
      className="bg-linear-to-b from-dental-navy via-[#0d1528] to-dental-navy relative px-6 md:px-20 py-24 lg:py-32"
    >
      {/* CONTENEDOR DE LUCES AISLADO */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[10%] left-[-10%] w-75 md:w-150 h-75 md:h-150 bg-[#111A30]/80 rounded-full blur-[150px]" />
        <div className="absolute bottom-[20%] right-[-10%] w-62.5 md:w-125 h-62.5 md:h-125 bg-dental-gold/5 rounded-full blur-[150px]" />
      </div>

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24 relative z-10">
        
        {/* FIX APLICADO AQUÍ: 
            Añadimos 'lg:sticky', 'lg:top-32' y 'self-start'.
            'self-start' evita que la columna se estire, permitiendo el efecto anclado. 
        */}
        <div className="w-full lg:w-5/12 lg:sticky lg:top-32 self-start">
          <h2 className="text-dental-gold text-xs md:text-sm tracking-[0.4em] uppercase font-bold mb-4 opacity-90">
            Innovation
          </h2>
          <h3 className="text-white text-5xl md:text-6xl font-display leading-[1.1] tracking-tight mb-6 drop-shadow-lg">
            Cutting-Edge <br />
            <span className="text-dental-gold italic">Technology.</span>
          </h3>
          <p className="text-white/70 text-base md:text-lg leading-relaxed mb-8 max-w-md">
            Equipamiento de última generación y protocolos digitales avanzados para garantizar tratamientos más rápidos, precisos y completamente indoloros.
          </p>
          
          <div className="flex gap-8 border-t border-white/10 pt-8 mt-8">
            <div>
              <p className="text-3xl font-display font-bold text-white mb-1 drop-shadow-md">100%</p>
              <p className="text-xs text-white/50 tracking-widest uppercase">Digital</p>
            </div>
            <div>
              <p className="text-3xl font-display font-bold text-white mb-1 drop-shadow-md">0</p>
              <p className="text-xs text-white/50 tracking-widest uppercase">Molestias</p>
            </div>
          </div>
        </div>

        {/* COLUMNA DERECHA: Tarjetas con Scroll */}
        <div className="w-full lg:w-7/12 flex flex-col gap-8 md:gap-12">
          {techList.map((item) => (
            <div 
              key={item.id} 
              className="tech-card group relative rounded-3xl overflow-hidden bg-white/5 backdrop-blur-sm border border-white/10 p-2 transition-colors hover:border-dental-gold/30 shadow-xl"
            >
              <div className="relative h-64 sm:h-80 w-full overflow-hidden rounded-2xl">
                <img 
                  src={item.img} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-linear-to-t from-[#080D19] via-[#080D19]/40 to-transparent opacity-90" />
              </div>
              
              <div className="p-6 md:p-8 relative">
                <span className="absolute top-0 right-8 -translate-y-1/2 text-5xl font-display font-bold text-white/10">
                  {item.id}
                </span>
                <h4 className="text-2xl font-display font-bold text-white mb-3 group-hover:text-dental-gold transition-colors">
                  {item.title}
                </h4>
                <p className="text-white/60 text-sm md:text-base leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};