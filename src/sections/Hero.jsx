import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export const Hero = () => {
  const container = useRef();

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: "power4.out", duration: 1.2 } });

    tl.from(".hero-elem", {
      y: 30,
      opacity: 0,
      stagger: 0.2,
      delay: 0.3
    });

  }, { scope: container });

  return (
    <section 
      ref={container} 
      className="relative h-svh flex flex-col justify-center px-6 md:px-20 overflow-hidden bg-dental-navy"
    >
      <div className="absolute inset-0 w-full h-full z-0">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="absolute w-full h-full object-cover object-center lg:object-right opacity-90"
        >
          <source 
            src="https://res.cloudinary.com/djbcgcmma/video/upload/v1778729556/Video_Project_14_yibkqt.mp4" 
            type="video/mp4" 
          />
        </video>
        
        <div className="absolute inset-0 bg-linear-to-b from-dental-navy/70 via-dental-navy/90 to-transparent md:bg-linear-to-r md:from-dental-navy md:via-dental-navy/95 md:to-transparent z-1" />
        
        {/* EL SECRETO 1: El desvanecimiento inferior ahora usa un azul con "luz" (#111A30) */}
        <div className="absolute bottom-0 left-0 w-full h-32 bg-linear-to-t from-[#111A30] to-transparent pointer-events-none z-2" />
      </div>

      <div className="relative z-10 w-full max-w-2xl mt-8 md:mt-0">
        <h1 className="hero-elem text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-[1.05] mb-4 tracking-tight drop-shadow-2xl text-white">
          Excellence <br />
          <span className="text-white/90">in </span> 
          <span className="text-dental-gold">Modern</span> <br />
          <span className="text-dental-gold">Dentistry.</span>
        </h1>
        
        <p className="hero-elem text-gray-200 text-sm sm:text-base md:text-lg max-w-md mb-8 font-sans leading-relaxed drop-shadow-lg">
          Odontología de alta complejidad con tecnología de vanguardia y un enfoque centrado en tu bienestar absoluto.
        </p>

        <div className="hero-elem flex flex-col sm:flex-row gap-4">
          <button className="px-8 py-4 bg-dental-gold text-dental-navy font-bold rounded-full transition-all duration-300 hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(251,191,36,0.4)] cursor-pointer">
            Agendar Cita
          </button>
          
          <button className="px-8 py-4 bg-white/5 text-white font-medium rounded-full border border-white/20 hover:border-dental-gold hover:text-dental-gold transition-colors duration-300 backdrop-blur-md cursor-pointer">
            Nuestros Casos
          </button>
        </div>
      </div>
    </section>
  );
};