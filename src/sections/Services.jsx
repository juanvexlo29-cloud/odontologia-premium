import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const servicesList = [
  { 
    id: "01", 
    title: "Smile Design", 
    desc: "Digital planning and ultra-thin veneers for natural, radiant results.",
    tag: "Estética"
  },
  { 
    id: "02", 
    title: "Dental Implants", 
    desc: "Computer-guided surgery for millimetric precision and fast recovery.",
    tag: "Cirugía"
  },
  { 
    id: "03", 
    title: "Invisible Braces", 
    desc: "Next-generation clear aligners, comfortable and virtually invisible.",
    tag: "Ortodoncia"
  },
  { 
    id: "04", 
    title: "Endodontics", 
    desc: "Painless root canal treatments using advanced microscopy.",
    tag: "Salud"
  },
];

export const Services = () => {
  const sectionRef = useRef();
  const wrapperRef = useRef();

  useGSAP(() => {
    let mm = gsap.matchMedia();

    mm.add("(min-width: 1024px)", () => {
      const getScrollAmount = () => wrapperRef.current.scrollWidth - window.innerWidth;

      gsap.to(wrapperRef.current, {
        x: () => -getScrollAmount(),
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          pin: true,
          scrub: 1,
          start: "top top",
          end: () => `+=${getScrollAmount()}`,
          invalidateOnRefresh: true,
        }
      });
    });

    mm.add("(max-width: 1023px)", () => {
      const cards = gsap.utils.toArray(".service-card");
      
      cards.forEach((card) => {
        gsap.from(card, {
          y: 60,
          opacity: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            toggleActions: "play none none reverse",
          }
        });
      });
    });

    return () => mm.revert();
  }, { scope: sectionRef });

  return (
    <section 
      ref={sectionRef} 
      // EL SECRETO 2: Inicia en #111A30 (igual que el difuminado del Hero) y baja a dental-navy
      className="bg-linear-to-b from-[#111A30] to-dental-navy py-24 lg:py-0 lg:h-svh flex flex-col justify-center overflow-hidden relative"
    >
      <div className="px-6 md:px-20 mb-8 lg:mb-12 z-10 w-full shrink-0">
        <h2 className="text-dental-gold text-xs md:text-sm tracking-[0.4em] uppercase font-bold mb-3 opacity-90">
          Specialties
        </h2>
        <p className="text-white text-5xl md:text-6xl lg:text-7xl font-display leading-[1.1] tracking-tight">
          Elite <span className="text-dental-gold italic pr-4">Services.</span>
        </p>
      </div>

      <div 
        ref={wrapperRef} 
        className="flex flex-col lg:flex-row gap-8 lg:gap-10 px-6 md:px-20 items-center w-full lg:w-max relative z-10"
      >
        {servicesList.map((service) => (
          <div 
            key={service.id} 
            className="service-card shrink-0 group relative w-full lg:w-[32vw] min-h-95 lg:h-[55vh] flex flex-col justify-between p-8 md:p-10 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl transition-all duration-500 hover:bg-white/10 hover:border-dental-gold/30 hover:shadow-[0_0_40px_rgba(251,191,36,0.1)]"
          >
            <span className="absolute top-8 right-8 text-[10px] tracking-[0.2em] text-white/50 uppercase border border-white/10 px-4 py-1.5 rounded-full group-hover:border-dental-gold/50 group-hover:text-dental-gold transition-colors duration-300">
              {service.tag}
            </span>

            <div className="text-7xl lg:text-8xl font-display font-bold text-white/5 group-hover:text-dental-gold/15 transition-colors duration-700 pointer-events-none select-none">
              {service.id}
            </div>
            
            <div className="mt-auto">
              <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-3 group-hover:text-dental-gold transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-white/60 text-sm md:text-base leading-relaxed mb-6">
                {service.desc}
              </p>
              
              <button className="flex items-center gap-4 text-white group/btn w-max cursor-pointer">
                <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover/btn:border-dental-gold group-hover/btn:bg-dental-gold transition-all duration-300">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="stroke-white group-hover/btn:stroke-dental-navy transition-colors duration-300">
                    <path d="M5 12h14m-7-7l7 7-7 7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <span className="text-xs font-bold tracking-widest opacity-60 group-hover/btn:opacity-100 transition-opacity uppercase">
                  Details
                </span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};