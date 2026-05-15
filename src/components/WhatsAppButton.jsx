import React from "react";

export const WhatsAppButton = () => {
  // Reemplaza este número con el WhatsApp real de la clínica (incluye código de país, ej: 57 para Colombia)
  const phoneNumber = "573000000000"; 
  const message = "Hola, me gustaría agendar una cita de valoración en DentalPro.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      // Posicionamiento fijo con z-50 para estar por encima de todo
      className="fixed bottom-6 right-6 md:bottom-10 md:right-10 z-[100] group flex items-center gap-0 p-3 md:p-4 bg-dental-navy/80 backdrop-blur-xl border border-white/10 rounded-full shadow-[0_0_20px_rgba(251,191,36,0.15)] hover:border-[#25D366]/50 hover:shadow-[0_0_30px_rgba(37,211,102,0.25)] transition-all duration-500 overflow-hidden"
      aria-label="Contactar por WhatsApp"
    >
      {/* Círculo interior de fondo animado que se vuelve verde suave al hacer hover */}
      <div className="absolute inset-0 bg-[#25D366]/0 group-hover:bg-[#25D366]/10 transition-colors duration-500 pointer-events-none" />

      {/* SVG Oficial de WhatsApp */}
      <svg 
        viewBox="0 0 24 24" 
        className="w-7 h-7 md:w-8 md:h-8 fill-white group-hover:fill-[#25D366] transition-colors duration-500 relative z-10 shrink-0"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.82 9.82 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.81 11.81 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.88 11.88 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.82 11.82 0 0 0-3.48-8.413Z"/>
      </svg>
      
      {/* Texto Expansible (Hover Reveal) */}
      <span className="max-w-0 opacity-0 group-hover:max-w-xs group-hover:opacity-100 group-hover:pl-3 group-hover:pr-2 transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] font-sans text-sm font-bold text-white whitespace-nowrap relative z-10 hidden md:block">
        Agendar Cita
      </span>
      
      {/* Punto de notificación (opcional, le da un toque interactivo) */}
      <span className="absolute top-0 right-0 flex h-3 w-3">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-75"></span>
        <span className="relative inline-flex rounded-full h-3 w-3 bg-[#25D366] border-2 border-dental-navy"></span>
      </span>
    </a>
  );
};