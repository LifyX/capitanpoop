import { useLanguage } from '../contexts/LanguageContext';

export function SkipToContent() {
  const { language } = useLanguage();
  
  const skipText = language === 'es' ? 'Saltar al contenido principal' : 'Skip to main content';
  
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-6 focus:py-3 focus:bg-[#8B7FB8] focus:text-white focus:rounded-lg focus:shadow-xl focus:outline-none focus:ring-4 focus:ring-[#8B7FB8]/50 font-semibold"
    >
      {skipText}
    </a>
  );
}
