import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

// Registrar ScrollTrigger una sola vez
gsap.registerPlugin(ScrollTrigger);

export const SmoothScroll = ({ children }) => {
  const scrollRef = useRef();

  useEffect(() => {
    // Configuración Premium de Lenis
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      orientation: "vertical",
    });

    // Sincronizar Lenis con GSAP ScrollTrigger
    lenis.on("scroll", ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    // Limpieza Senior para evitar fugas de memoria
    return () => {
      lenis.destroy();
      gsap.ticker.remove(lenis.raf);
    };
  }, []);

  return (
    <div ref={scrollRef} className="smooth-scroll-wrapper">
      {children}
    </div>
  );
};