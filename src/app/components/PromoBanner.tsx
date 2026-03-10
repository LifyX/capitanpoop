import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useLanguage } from '../contexts/LanguageContext';

export function PromoBanner() {
  const { language } = useLanguage();
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      es: 'Dale adiós a los malos olores 🌿',
      en: 'Say goodbye to bad odors 🌿',
      bg: 'from-[#8B7FB8] to-[#C9BFDB]'
    },
    {
      es: '100% Natural y Seguro para toda la familia ✨',
      en: '100% Natural and Safe for the whole family ✨',
      bg: 'from-[#7BC4DB] to-[#5BC0EB]'
    },
    {
      es: 'Pago seguro - Múltiples métodos de pago 💳',
      en: 'Secure payment - Multiple payment methods 💳',
      bg: 'from-[#EFD95A] to-[#F4DB5E]'
    }
  ];

  // Auto-advance slides
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative overflow-hidden">
      <div className={`bg-gradient-to-r ${slides[currentSlide].bg} py-3 transition-colors duration-500`}>
        <div className="mx-auto max-w-7xl px-6 relative">
          {/* Previous Button - Hidden on Mobile */}
          <button
            onClick={prevSlide}
            className="hidden sm:flex absolute left-2 lg:left-4 top-1/2 -translate-y-1/2 w-8 h-8 items-center justify-center rounded-full bg-white/30 hover:bg-white/50 backdrop-blur-sm transition-all z-10 focus:outline-none focus:ring-2 focus:ring-white/50"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-5 h-5 text-white" />
          </button>

          {/* Slide Content */}
          <div className="text-center">
            <AnimatePresence mode="wait">
              <motion.p
                key={currentSlide}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="text-sm sm:text-base font-semibold text-white"
              >
                {language === 'es' ? slides[currentSlide].es : slides[currentSlide].en}
              </motion.p>
            </AnimatePresence>
          </div>

          {/* Next Button - Hidden on Mobile */}
          <button
            onClick={nextSlide}
            className="hidden sm:flex absolute right-2 lg:right-4 top-1/2 -translate-y-1/2 w-8 h-8 items-center justify-center rounded-full bg-white/30 hover:bg-white/50 backdrop-blur-sm transition-all z-10 focus:outline-none focus:ring-2 focus:ring-white/50"
            aria-label="Next slide"
          >
            <ChevronRight className="w-5 h-5 text-white" />
          </button>

          {/* Slide Indicators */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-6 flex gap-1.5">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentSlide
                    ? 'bg-white w-4'
                    : 'bg-white/40 hover:bg-white/60'
                }`}
                aria-label={`Go to slide ${index + 1}`}
                aria-current={index === currentSlide ? 'true' : 'false'}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
