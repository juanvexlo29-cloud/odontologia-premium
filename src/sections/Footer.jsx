/**
 * Footer.jsx — DentalPro · Sección Final
 * * Diseño: Premium Contact Hub con Formulario Glassmorphic
 * Stack : React + Tailwind v4 + GSAP
 */

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export const Footer = () => {
  const footerRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: footerRef.current,
        start: "top 80%",
        toggleActions: "play none none reverse"
      }
    });

    tl.from(".js-footer-fade", {
      y: 40,
      opacity: 0,
      duration: 0.8,
      stagger: 0.15,
      ease: "power3.out"
    });
  }, { scope: footerRef });

  return (
    <footer 
      ref={footerRef} 
      className="relative bg-linear-to-b from-dental-navy to-[#05080f] pt-24 pb-12 overflow-hidden"
    >
      {/* Luces ambientales de fondo */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute bottom-0 left-[-10%] w-125 h-125 bg-dental-gold/5 rounded-full blur-[150px]" />
        <div className="absolute top-0 right-[-5%] w-100 h-100 bg-[#111A30]/40 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24">
          
          {/* COLUMNA IZQUIERDA: Información de Marca */}
          <div className="lg:col-span-5 flex flex-col justify-between js-footer-fade">
            <div>
              <div className="text-2xl font-bold tracking-tighter text-white mb-8">
                DENTAL<span className="text-dental-gold">PRO</span>
              </div>
              <p className="text-white/50 text-lg leading-relaxed max-w-md mb-12">
                Elevando el estándar de la odontología moderna a través de la tecnología, la ciencia y la visión estética.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4 group cursor-pointer">
                  <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:border-dental-gold transition-colors">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-dental-gold">
                      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.81 12.81 0 00.6 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l2.27-2.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.6A2 2 0 0122 16.92z" />
                    </svg>
                  </div>
                  <span className="text-white/80 font-medium">+57 300 000 0000</span>
                </div>
                
                <div className="flex items-center gap-4 group cursor-pointer">
                  <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:border-dental-gold transition-colors">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-dental-gold">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <path d="M22 6l-10 7L2 6" />
                    </svg>
                  </div>
                  <span className="text-white/80 font-medium">contacto@dentalpro.com</span>
                </div>
              </div>
            </div>

            <div className="mt-16 flex gap-4">
              {['Instagram', 'LinkedIn', 'YouTube'].map((social) => (
                <a key={social} href="#" className="text-[10px] uppercase tracking-[0.2em] font-bold text-white/30 hover:text-dental-gold transition-colors">
                  {social}
                </a>
              ))}
            </div>
          </div>

          {/* COLUMNA DERECHA: Formulario de Contacto (Premium UI) */}
          <div className="lg:col-span-7 js-footer-fade">
            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12 backdrop-blur-xl">
              <h3 className="font-display text-3xl text-white mb-8">
                Inicia tu <span className="text-dental-gold italic">transformación.</span>
              </h3>
              
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest text-white/40 font-bold ml-1">Nombre</label>
                    <input 
                      type="text" 
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-dental-gold/50 transition-colors"
                      placeholder="Juan Diego"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest text-white/40 font-bold ml-1">Email</label>
                    <input 
                      type="email" 
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-dental-gold/50 transition-colors"
                      placeholder="email@ejemplo.com"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-white/40 font-bold ml-1">Mensaje</label>
                  <textarea 
                    rows="4"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-dental-gold/50 transition-colors resize-none"
                    placeholder="Cuéntanos sobre el tratamiento que te interesa..."
                  />
                </div>

                <button className="w-full py-5 bg-dental-gold text-dental-navy font-bold rounded-xl hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 shadow-lg shadow-dental-gold/10 uppercase tracking-widest text-xs cursor-pointer">
                  Enviar Mensaje
                </button>
              </form>
            </div>
          </div>

        </div>

        {/* Copyright Bar */}
        <div className="mt-24 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] text-white/20 uppercase tracking-widest">
            © 2026 DentalPro. Todos los derechos reservados.
          </p>
          <div className="flex gap-8">
            <a href="#" className="text-[10px] text-white/20 hover:text-white transition-colors uppercase tracking-widest">Políticas de Privacidad</a>
            <a href="#" className="text-[10px] text-white/20 hover:text-white transition-colors uppercase tracking-widest">Términos</a>
          </div>
        </div>
      </div>
    </footer>
  );
};