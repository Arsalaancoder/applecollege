import React, { useState, useEffect, useCallback, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronLeft, ChevronRight, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface HeroSlide {
  id: number;
  image: string;
  alt: string;
  eyebrow: string;
  titleBefore: string;
  highlightWord: string;
  titleAfter: string;
  description: string;
  badge: string;
  featurePill: string;
  primaryCtaText: string;
  primaryCtaLink: string;
  secondaryCtaText: string;
  secondaryCtaLink: string;
}

const HERO_SLIDES: HeroSlide[] = [
  {
    id: 1,
    image: '/images/hero-slide-1.jpg',
    alt: 'Apple College of Nursing students in clinical scrubs at campus hospital',
    eyebrow: 'WELCOME TO APPLE COLLEGE OF NURSING',
    titleBefore: 'Building ',
    highlightWord: "Tomorrow's",
    titleAfter: ' Healthcare Professionals',
    description:
      'Discover a premier nursing institute where academic excellence, clinical precision, and compassionate healthcare converge to shape competent nursing leaders.',
    badge: 'Affiliated to KNRUHS · Approved by INC & TSNC',
    featurePill: '⭐ Sponsoring Society: Telangana Xpress Educational Society (Regd. 214/2025)',
    primaryCtaText: 'Book an Appointment',
    primaryCtaLink: '/admissions',
    secondaryCtaText: 'Our Departments',
    secondaryCtaLink: '/academics',
  },
  {
    id: 2,
    image: '/images/hero-slide-2.jpg',
    alt: 'Nursing student attending to patient with clinical care and bedside monitoring',
    eyebrow: 'EXCELLENCE IN CLINICAL PRACTICE',
    titleBefore: 'Empowering ',
    highlightWord: 'Compassionate',
    titleAfter: ' Bedside Patient Care',
    description:
      'Extensive hands-on hospital rotations and bedside postings in reputed multi-speciality hospitals, developing high-standard clinical ethics and empathetic nursing care.',
    badge: 'Supervised Hospital Postings · Real Clinical Exposure',
    featurePill: '🩺 100% Supervised Clinical Rotations & Multi-Speciality Exposure',
    primaryCtaText: 'Explore Programmes',
    primaryCtaLink: '/academics',
    secondaryCtaText: 'Clinical Facilities',
    secondaryCtaLink: '/facilities',
  },
  {
    id: 3,
    image: '/images/hero-slide-3.jpg',
    alt: 'Apple College healthcare and nursing students in modern skills laboratory',
    eyebrow: 'STATE-OF-THE-ART INFRASTRUCTURE',
    titleBefore: 'Modern ',
    highlightWord: 'Skills Laboratories',
    titleAfter: ' & Simulation Labs',
    description:
      'Equipped with advanced anatomy models, maternal & child health simulation equipment, fundamental nursing lab, and modern digital study terminals.',
    badge: '4-Year B.Sc. Nursing & 3-Year GNM · Modern Labs',
    featurePill: '🔬 Advanced Clinical Skills Lab & Simulation Anatomy Mannequins',
    primaryCtaText: 'Apply for Admission',
    primaryCtaLink: '/admissions',
    secondaryCtaText: 'View Campus Gallery',
    secondaryCtaLink: '/gallery',
  },
];

export const HeroSection: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  }, []);

  const goToSlide = (idx: number) => {
    setCurrentSlide(idx);
  };

  // Autoplay timer
  useEffect(() => {
    if (isPaused) return;
    timerRef.current = setInterval(() => {
      nextSlide();
    }, 6000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused, nextSlide]);

  const activeSlide = HERO_SLIDES[currentSlide];

  return (
    <section
      id="home"
      aria-label="Apple College of Nursing Hero Banner"
      className="relative overflow-hidden bg-[#0C1A30] text-white min-h-[580px] sm:min-h-[640px] lg:min-h-[700px] flex flex-col justify-between pt-8 pb-20 sm:pt-12 sm:pb-24 lg:pt-14 lg:pb-28"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* FULL BACKGROUND IMAGE CAROUSEL WITH SMOOTH CROSSFADE */}
      <div className="absolute inset-0 overflow-hidden z-0 pointer-events-none select-none">
        <AnimatePresence initial={false} mode="wait">
          <motion.div
            key={activeSlide.id}
            initial={{ opacity: 0, scale: 1.06 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1.0] }}
            className="absolute inset-0 w-full h-full"
          >
            <img
              src={activeSlide.image}
              alt={activeSlide.alt}
              className="w-full h-full object-cover object-center lg:object-[center_35%]"
              loading={activeSlide.id === 1 ? 'eager' : 'lazy'}
            />
          </motion.div>
        </AnimatePresence>

        {/* Deep Navy Medova Gradient Overlays:
            - Left to Right gradient: heavy opacity on left for crystal-clear readability,
              lighter on right so real students, nurse & clinical setting are vibrantly visible.
            - Bottom gradient for smooth transition into quick-info cards.
        */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A1628]/95 via-[#0E203B]/85 to-[#0E203B]/40 lg:to-[#0E203B]/30" />
        <div className="absolute inset-0 bg-hero-grid opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628] via-transparent to-black/25" />
      </div>

      {/* HERO FOREGROUND CONTENT */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 w-full my-auto">
        <div className="max-w-3xl space-y-5">
          {/* Medova-style Eyebrow with coral wave symbol */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`eyebrow-${activeSlide.id}`}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.35 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-[11px] sm:text-xs font-bold uppercase tracking-[0.16em] text-slate-200"
            >
              <span className="text-[#FF5E5E] text-base font-extrabold leading-none">~</span>
              <span>{activeSlide.eyebrow}</span>
            </motion.div>
          </AnimatePresence>

          {/* Medova Large Heading with Coral Accent Word */}
          <AnimatePresence mode="wait">
            <motion.h1
              key={`title-${activeSlide.id}`}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.45, delay: 0.05 }}
              className="font-display font-extrabold text-3xl sm:text-5xl lg:text-[54px] leading-[1.12] tracking-tight text-white max-w-3xl drop-shadow-sm"
            >
              {activeSlide.titleBefore}
              <span className="text-[#FF5E5E]">{activeSlide.highlightWord}</span>
              {activeSlide.titleAfter}
            </motion.h1>
          </AnimatePresence>

          {/* Supporting description */}
          <AnimatePresence mode="wait">
            <motion.p
              key={`desc-${activeSlide.id}`}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.45, delay: 0.1 }}
              className="text-sm sm:text-base text-slate-200 leading-relaxed max-w-2xl drop-shadow-xs"
            >
              {activeSlide.description}
            </motion.p>
          </AnimatePresence>

          {/* Dual Compact Action Buttons (Medova Exact Style) */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-2">
            <Link
              to={activeSlide.primaryCtaLink}
              className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-[#FF5E5E] hover:bg-[#EE4B4B] text-white text-xs sm:text-sm font-bold shadow-md hover:shadow-lg transition-all"
            >
              <span>{activeSlide.primaryCtaText}</span>
            </Link>

            <Link
              to={activeSlide.secondaryCtaLink}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-[#132847]/85 hover:bg-[#183359] border border-white/20 backdrop-blur-xs text-white text-xs sm:text-sm font-bold transition-all"
            >
              <span>{activeSlide.secondaryCtaText}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Verified Trust Badge */}
          <div className="pt-2 flex items-center gap-2 text-xs text-slate-300">
            <CheckCircle2 className="w-4 h-4 text-[#248568] shrink-0" />
            <span>{activeSlide.badge}</span>
          </div>
        </div>
      </div>

      {/* BOTTOM CAROUSEL CONTROLLER & SCROLL INDICATOR */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 w-full pt-4">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-white/10 pt-4">
          {/* Slide Indicator Bar in Medova Style */}
          <div className="flex items-center gap-3">
            {/* Prev Button */}
            <button
              type="button"
              onClick={prevSlide}
              aria-label="Previous slide"
              className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#FF5E5E] border border-white/15 flex items-center justify-center text-white transition-all shadow-sm"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            {/* Slide Number Counter */}
            <span className="text-xs font-mono font-bold text-white tracking-widest px-1">
              0{activeSlide.id} / 0{HERO_SLIDES.length}
            </span>

            {/* Next Button */}
            <button
              type="button"
              onClick={nextSlide}
              aria-label="Next slide"
              className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#FF5E5E] border border-white/15 flex items-center justify-center text-white transition-all shadow-sm"
            >
              <ChevronRight className="w-4 h-4" />
            </button>

            {/* Interactive Progress Pills */}
            <div className="flex items-center gap-2 ml-2">
              {HERO_SLIDES.map((slide, idx) => (
                <button
                  key={slide.id}
                  type="button"
                  onClick={() => goToSlide(idx)}
                  aria-label={`Go to slide ${idx + 1}`}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    currentSlide === idx ? 'w-8 bg-[#FF5E5E]' : 'w-2 bg-white/30 hover:bg-white/60'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Medova Scroll Mouse Indicator */}
          <div className="hidden md:flex items-center">
            <a
              href="#quick-info"
              className="flex items-center gap-2 text-[10px] font-bold tracking-widest uppercase text-slate-300 hover:text-white transition-colors"
            >
              <div className="w-4 h-6 rounded-full border border-white/40 flex justify-center pt-1">
                <span className="w-1 h-1.5 rounded-full bg-white animate-bounce" />
              </div>
              <span>Scroll</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
