/**
 * Cases.jsx — DentalPro · Sección 4: Casos de Éxito
 *
 * Stack   : React 18 · Tailwind CSS v4 · GSAP 3 (ScrollTrigger + useGSAP)
 * Paleta  : dental-navy (#0B1120) · dental-gold (#FBBF24)
 * Desktop : Interactive Depth Cards con parallax de imagen y reveal de texto (GSAP)
 * Mobile  : Snap-scroll horizontal táctil (snap-x snap-mandatory)
 */

import { useRef, useState, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

// ─── Datos de Casos ──────────────────────────────────────────────────────────

const CASES = [
  {
    id: "01",
    category: "Implantes Dentales",
    title: ["Rehabilitación", "Total"],
    description:
      "Restauración completa de la función y estética oral mediante implantes de titanio de última generación, devolviéndole al paciente su sonrisa y calidad de vida.",
    stats: [
      { value: "98%", label: "Tasa de éxito" },
      { value: "6h", label: "Procedimiento" },
      { value: "12m", label: "Seguimiento" },
    ],
    image:
      "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=900&q=80",
    tag: "Caso Destacado",
  },
  {
    id: "02",
    category: "Estética Dental",
    title: ["Diseño de", "Sonrisa"],
    description:
      "Transformación estética personalizada con carillas de porcelana ultrafina y blanqueamiento de precisión láser para una sonrisa de alto impacto.",
    stats: [
      { value: "16", label: "Carillas" },
      { value: "3", label: "Sesiones" },
      { value: "100%", label: "Satisfacción" },
    ],
    image:
      "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=900&q=80",
    tag: "Premium",
  },
  {
    id: "03",
    category: "Invisalign Certificado",
    title: ["Ortodoncia", "Invisible"],
    description:
      "Corrección ortodóntica discreta con alineadores transparentes personalizados de alta precisión, sin brackets ni alambres visibles.",
    stats: [
      { value: "18m", label: "Tratamiento" },
      { value: "48", label: "Alineadores" },
      { value: "0.1mm", label: "Precisión" },
    ],
    image:
      "https://images.unsplash.com/photo-1588776814546-1ffbb2601e5a?w=900&q=80",
    tag: "Alta Tecnología",
  },
];

// ─── Componente Principal ────────────────────────────────────────────────────

export function Cases() {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const cardRefs = useRef([]);
  const sliderRef = useRef(null);
  const [activeSlide, setActiveSlide] = useState(0);

  /** Detecta qué card está centrada en el slider móvil y actualiza el dot activo */
  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    const handleScroll = () => {
      const cardWidth = slider.scrollWidth / CASES.length;
      const index = Math.round(slider.scrollLeft / cardWidth);
      setActiveSlide(Math.max(0, Math.min(index, CASES.length - 1)));
    };

    slider.addEventListener("scroll", handleScroll, { passive: true });
    return () => slider.removeEventListener("scroll", handleScroll);
  }, []);

  /** Hace scroll programático al tocar un dot */
  const scrollToSlide = (idx) => {
    const slider = sliderRef.current;
    if (!slider) return;
    const cardWidth = slider.scrollWidth / CASES.length;
    slider.scrollTo({ left: cardWidth * idx, behavior: "smooth" });
  };


  const assignCardRef = (el, idx) => {
    cardRefs.current[idx] = el;
  };

  // ── GSAP Animations ──────────────────────────────────────────────────────
  useGSAP(
    () => {
      // 1. Heading reveal
      const headingLabel = headingRef.current?.querySelector(
        ".js-heading-label"
      );
      const headingLines = headingRef.current?.querySelectorAll(
        ".js-heading-line"
      );
      const headingSubtitle = headingRef.current?.querySelector(
        ".js-heading-subtitle"
      );

      const headingTl = gsap.timeline({
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 82%",
          toggleActions: "play none none reverse",
        },
        defaults: { ease: "power3.out" },
      });

      if (headingLabel) {
        headingTl.fromTo(
          headingLabel,
          { opacity: 0, x: -20 },
          { opacity: 1, x: 0, duration: 0.55 }
        );
      }

      if (headingLines?.length) {
        headingTl.fromTo(
          headingLines,
          { yPercent: 115 },
          { yPercent: 0, duration: 0.85, stagger: 0.13 },
          "-=0.3"
        );
      }

      if (headingSubtitle) {
        headingTl.fromTo(
          headingSubtitle,
          { opacity: 0, y: 14 },
          { opacity: 1, y: 0, duration: 0.55 },
          "-=0.4"
        );
      }

      // 2. Card animations — solo en desktop (≥ 768 px)
      const mm = gsap.matchMedia();

      mm.add("(min-width: 768px)", () => {
        cardRefs.current.forEach((card) => {
          if (!card) return;

          const imageEl = card.querySelector(".js-card-image");
          const tagEl = card.querySelector(".js-card-tag");
          const categoryEl = card.querySelector(".js-card-category");
          const titleLines = card.querySelectorAll(".js-card-title-line");
          const descEl = card.querySelector(".js-card-desc");
          const statEls = card.querySelectorAll(".js-card-stat");
          const ctaEl = card.querySelector(".js-card-cta");
          const dividerEl = card.querySelector(".js-card-divider");

          // ── Parallax zoom scrubbed con scroll ──
          if (imageEl) {
            gsap.fromTo(
              imageEl,
              { scale: 1.18, yPercent: 5 },
              {
                scale: 1.0,
                yPercent: -5,
                ease: "none",
                scrollTrigger: {
                  trigger: card,
                  start: "top bottom",
                  end: "bottom top",
                  scrub: 1.8,
                },
              }
            );
          }

          // ── Entrance timeline con stagger ──
          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: card,
              start: "top 77%",
              toggleActions: "play none none reverse",
            },
            defaults: { ease: "power3.out" },
          });

          if (tagEl) {
            tl.fromTo(
              tagEl,
              { opacity: 0, x: -14 },
              { opacity: 1, x: 0, duration: 0.42 }
            );
          }

          if (categoryEl) {
            tl.fromTo(
              categoryEl,
              { opacity: 0, x: -10 },
              { opacity: 1, x: 0, duration: 0.42 },
              "-=0.22"
            );
          }

          if (titleLines.length) {
            tl.fromTo(
              titleLines,
              { yPercent: 118 },
              { yPercent: 0, duration: 0.65, stagger: 0.12 },
              "-=0.28"
            );
          }

          if (descEl) {
            tl.fromTo(
              descEl,
              { opacity: 0, y: 16 },
              { opacity: 1, y: 0, duration: 0.5 },
              "-=0.36"
            );
          }

          if (dividerEl) {
            tl.fromTo(
              dividerEl,
              { scaleX: 0, transformOrigin: "left" },
              { scaleX: 1, duration: 0.55, ease: "power2.inOut" },
              "-=0.3"
            );
          }

          if (statEls.length) {
            tl.fromTo(
              statEls,
              { opacity: 0, y: 18 },
              { opacity: 1, y: 0, duration: 0.38, stagger: 0.1 },
              "-=0.28"
            );
          }

          if (ctaEl) {
            tl.fromTo(
              ctaEl,
              { opacity: 0, y: 10 },
              { opacity: 1, y: 0, duration: 0.38 },
              "-=0.22"
            );
          }
        });

        return () => {};
      });

      return () => mm.revert();
    },
    { scope: sectionRef }
  );

  // ── Render ───────────────────────────────────────────────────────────────
  return (
    <section
      ref={sectionRef}
      className="relative bg-linear-to-b from-dental-navy to-[#0d1528] py-32 overflow-hidden"
    >
      {/* ── Ambient glows + top separator ──────────────────────────────── */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none select-none overflow-hidden"
      >
        {/* Top gold line — empalme con sección anterior */}
        <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-dental-gold/25 to-transparent" />

        {/* Ambient glows */}
        <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-192 h-72 bg-dental-gold/5 blur-3xl rounded-full" />
        <div className="absolute top-1/2 -left-48 w-96 h-96 bg-dental-gold/4 blur-3xl rounded-full" />
        <div className="absolute bottom-1/4 -right-32 w-80 h-80 bg-dental-gold/3 blur-3xl rounded-full" />

        {/* Subtle grid texture */}
        <svg
          className="absolute inset-0 w-full h-full opacity-3"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="cases-grid"
              width="48"
              height="48"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 48 0 L 0 0 0 48"
                fill="none"
                stroke="white"
                strokeWidth="0.4"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#cases-grid)" />
        </svg>
      </div>

      {/* ── Content ───────────────────────────────────────────────────── */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">

        {/* ── Section Header ────────────────────────────────────────── */}
        <header ref={headingRef} className="mb-20 max-w-2xl">
          {/* Label */}
          <div className="js-heading-label flex items-center gap-3 mb-8">
            <div className="w-10 h-px bg-dental-gold" />
            <span className="font-sans text-xs font-medium tracking-[0.2em] uppercase text-dental-gold">
              Casos de Éxito
            </span>
          </div>

          {/* Heading — cada línea con overflow-hidden para mask reveal */}
          <div className="space-y-1 mb-7">
            <div className="overflow-hidden">
              <h2 className="js-heading-line font-display text-5xl lg:text-7xl font-light text-white leading-none">
                Transformaciones
              </h2>
            </div>
            <div className="overflow-hidden">
              <h2 className="js-heading-line font-display text-5xl lg:text-7xl font-light text-dental-gold italic leading-none">
                que inspiran.
              </h2>
            </div>
          </div>

          <p className="js-heading-subtitle font-sans text-base text-white/50 leading-relaxed">
            Cada caso es una historia de vida restaurada. Conoce los
            tratamientos que han cambiado sonrisas y transformado vidas con
            ciencia, precisión y visión estética.
          </p>
        </header>

        {/* ── Desktop Grid (md+) ────────────────────────────────────── */}
        <div className="hidden md:grid md:grid-cols-3 gap-6">
          {CASES.map((item, index) => (
            <article
              key={item.id}
              ref={(el) => assignCardRef(el, index)}
              className="group relative flex flex-col rounded-2xl overflow-hidden
                         border border-white/10 bg-white/5 backdrop-blur-xl
                         hover:border-dental-gold/30 hover:shadow-lg hover:shadow-dental-gold/5
                         transition-colors duration-500"
            >
              {/* ── Image ─────────────────────────────────────────── */}
              <div className="relative h-72 overflow-hidden shrink-0">
                <img
                  src={item.image}
                  alt={item.title.join(" ")}
                  loading="lazy"
                  className="js-card-image absolute inset-0 w-full h-full object-cover will-change-transform"
                />

                {/* Gradient overlays */}
                <div className="absolute inset-0 bg-linear-to-b from-[#0B1120]/25 to-transparent" />
                <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-[#0B1120]/88" />

                {/* Case number watermark */}
                <span
                  aria-hidden="true"
                  className="absolute bottom-3 right-4 font-display text-8xl font-bold leading-none text-white/7 select-none"
                >
                  {item.id}
                </span>

                {/* Tag pill */}
                <span className="js-card-tag absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-dental-gold text-dental-navy font-sans text-xs font-semibold tracking-wide">
                  <span className="w-1.5 h-1.5 rounded-full bg-dental-navy/40" />
                  {item.tag}
                </span>
              </div>

              {/* ── Content ───────────────────────────────────────── */}
              <div className="flex flex-col flex-1 p-7">

                {/* Category */}
                <span className="js-card-category mb-3 font-sans text-xs font-medium tracking-[0.18em] uppercase text-dental-gold/75">
                  {item.category}
                </span>

                {/* Title — cada línea con overflow-hidden (mask reveal) */}
                <h3 className="mb-4 leading-tight">
                  {item.title.map((line, li) => (
                    <span key={li} className="block overflow-hidden">
                      <span className="js-card-title-line block font-display text-3xl font-light text-white">
                        {line}
                      </span>
                    </span>
                  ))}
                </h3>

                {/* Description */}
                <p className="js-card-desc font-sans text-sm text-white/55 leading-relaxed flex-1 mb-6">
                  {item.description}
                </p>

                {/* Divider animada */}
                <div className="js-card-divider h-px bg-white/10 mb-5" />

                {/* Stats */}
                <div className="grid grid-cols-3 gap-2 mb-5">
                  {item.stats.map((stat, si) => (
                    <div key={si} className="js-card-stat text-center">
                      <div className="font-display text-2xl font-light text-dental-gold">
                        {stat.value}
                      </div>
                      <div className="font-sans text-xs text-white/40 mt-1 leading-tight">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <button
                  type="button"
                  className="js-card-cta w-full py-3 rounded-xl
                             border border-white/10
                             font-sans text-sm text-white/55 tracking-wide
                             hover:border-dental-gold/50 hover:text-dental-gold hover:bg-dental-gold/5
                             active:scale-95
                             transition-all duration-300"
                >
                  Ver caso completo →
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* ── Mobile Snap Slider (< md) ─────────────────────────────── */}
        <div className="md:hidden">
          <div
            ref={sliderRef}
            className="flex gap-5 overflow-x-auto snap-x snap-mandatory
                        pb-6 -mx-6 px-6 scrollbar-none"
          >
            {CASES.map((item) => (
              <article
                key={item.id}
                className="snap-center shrink-0 w-80 flex flex-col
                           rounded-2xl overflow-hidden
                           border border-white/10 bg-white/5 backdrop-blur-xl"
              >
                {/* Image */}
                <div className="relative h-56 overflow-hidden shrink-0">
                  <img
                    src={item.image}
                    alt={item.title.join(" ")}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-linear-to-b from-[#0B1120]/25 to-transparent" />
                  <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-[#0B1120]/88" />

                  <span
                    aria-hidden="true"
                    className="absolute bottom-3 right-4 font-display text-7xl font-bold leading-none text-white/7 select-none"
                  >
                    {item.id}
                  </span>

                  <span className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-dental-gold text-dental-navy font-sans text-xs font-semibold tracking-wide">
                    <span className="w-1.5 h-1.5 rounded-full bg-dental-navy/40" />
                    {item.tag}
                  </span>
                </div>

                {/* Content */}
                <div className="flex flex-col flex-1 p-5">
                  <span className="mb-2 font-sans text-xs font-medium tracking-[0.18em] uppercase text-dental-gold/75">
                    {item.category}
                  </span>

                  <h3 className="font-display text-2xl font-light text-white mb-3 leading-snug">
                    {item.title.join(" ")}
                  </h3>

                  <p className="font-sans text-sm text-white/55 leading-relaxed flex-1 mb-5">
                    {item.description}
                  </p>

                  <div className="h-px bg-white/10 mb-4" />

                  <div className="grid grid-cols-3 gap-2">
                    {item.stats.map((stat, si) => (
                      <div key={si} className="text-center">
                        <div className="font-display text-xl font-light text-dental-gold">
                          {stat.value}
                        </div>
                        <div className="font-sans text-xs text-white/40 mt-0.5 leading-tight">
                          {stat.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Scroll indicator dots — reactivos y clicables */}
          <div className="flex items-center justify-center gap-2 mt-4">
            {CASES.map((item, idx) => (
              <button
                key={item.id}
                type="button"
                aria-label={`Ir a ${item.title.join(" ")}`}
                onClick={() => scrollToSlide(idx)}
                className={[
                  "rounded-full transition-all duration-300",
                  idx === activeSlide
                    ? "w-6 h-1.5 bg-dental-gold"
                    : "w-1.5 h-1.5 bg-white/25 hover:bg-white/50",
                ].join(" ")}
              />
            ))}
          </div>
        </div>

      </div>

      {/* Bottom separator */}
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-dental-gold/20 to-transparent"
      />
    </section>
  );
}