import { Link } from 'react-router';
import { Instagram, Mail, Phone, MessageCircle } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { toast } from 'sonner';
import { useState } from 'react';
import logoImage from '../../assets/884e30d97f406d46d806b45565916678a69674e9.png';
import lifyxLogo from '../../assets/884e30d97f406d46d806b45565916678a69674e9.png';

export function Footer() {
  const { t, language } = useLanguage();
  const [email, setEmail] = useState('');
  const [isSubscribing, setIsSubscribing] = useState(false);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate email
    if (!email || !email.includes('@')) {
      toast.error(
        language === 'es' 
          ? 'Por favor ingresa un correo electrónico válido' 
          : 'Please enter a valid email address'
      );
      return;
    }

    setIsSubscribing(true);

    // Simulate API call
    setTimeout(() => {
      toast.success(
        language === 'es' 
          ? `¡Gracias por suscribirte! Te enviaremos nuestras novedades a ${email}` 
          : `Thanks for subscribing! We'll send our updates to ${email}`
      );
      setEmail('');
      setIsSubscribing(false);
    }, 1000);
  };

  return (
    <footer className="bg-[#E9F4F2] text-gray-800 pt-12 pb-6">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 lg:gap-20 mb-8">
          {/* Brand */}
          <div className="flex flex-col items-center sm:items-start">
            <Link to="/" className="inline-block mb-4">
              <img 
                src={logoImage} 
                alt="Capitan Poop" 
                className="h-16 sm:h-20 w-auto"
              />
            </Link>
            <p className="text-gray-600 text-sm text-center sm:text-left">
              Eliminadores de olores 100% naturales para tu baño y hogar.
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center sm:text-left">
            <h3 className="font-semibold mb-4 text-gray-900">{t('footer.quickLinks')}</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="text-gray-600 hover:text-[#7BC4DB] transition">
                  {t('nav.home')}
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-600 hover:text-[#7BC4DB] transition">
                  {t('nav.products')}
                </Link>
              </li>
              <li>
                <Link to="/how-it-works-poop" className="text-gray-600 hover:text-[#7BC4DB] transition">
                  {t('nav.howItWorksPoop')}
                </Link>
              </li>
              <li>
                <Link to="/how-it-works-home" className="text-gray-600 hover:text-[#7BC4DB] transition">
                  {t('nav.howItWorksHome')}
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-600 hover:text-[#7BC4DB] transition">
                  {t('nav.contact')}
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-600 hover:text-[#7BC4DB] transition">
                  FAQs
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="text-center sm:text-left">
            <h3 className="font-semibold mb-4 text-gray-900">{t('nav.contact')}</h3>
            <ul className="space-y-3 text-sm mb-6">
              <li className="flex items-center justify-center sm:justify-start gap-2">
                <Phone className="h-4 w-4" />
                <a href="tel:+573215551234" className="hover:text-[#7BC4DB] transition">
                  +57 321 555 1234
                </a>
              </li>
              <li className="flex items-center justify-center sm:justify-start gap-2 text-gray-600">
                <Mail className="h-4 w-4" />
                <a href="mailto:micapitan.poop@gmail.com" className="hover:text-[#7BC4DB] transition">
                  micapitan.poop@gmail.com
                </a>
              </li>
              <li className="flex items-center justify-center sm:justify-start gap-2 text-gray-600">
                <MessageCircle className="h-4 w-4" />
                <a
                  href="https://api.whatsapp.com/send/?phone=573215551234&text&type=phone_number&app_absent=0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#7BC4DB] transition"
                >
                  WhatsApp
                </a>
              </li>
              <li className="flex items-center justify-center sm:justify-start gap-2 text-gray-600">
                <Instagram className="h-4 w-4" />
                <a
                  href="https://instagram.com/capitan.poop"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#7BC4DB] transition"
                >
                  @capitan.poop
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-semibold mb-4 text-gray-900">{t('footer.newsletter')}</h3>
            <form onSubmit={handleSubscribe} className="space-y-2">
              <Input
                type="email"
                placeholder="Tu email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-white border-gray-300 text-gray-900 placeholder:text-gray-400"
              />
              <Button type="submit" className="w-full bg-[#7BC4DB] hover:bg-[#6AB3CA] text-white">
                {isSubscribing ? t('footer.subscribing') : t('footer.subscribe')}
              </Button>
            </form>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-300 pt-6 space-y-4">
          {/* Crafted by Lifyx */}
          <div className="flex items-center justify-center gap-2 text-sm text-gray-600">
            <span className="font-medium">Crafted with excellence by</span>
            <a 
              href="https://liftyx.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center hover:opacity-80 transition-opacity"
              aria-label="Visit Lifyx website"
            >
              <img 
                src={lifyxLogo} 
                alt="Lifyx" 
                className="h-6 w-auto"
              />
            </a>
          </div>
          
          {/* Copyright */}
          <p className="text-center text-sm text-gray-600">{t('footer.copyright')}</p>
        </div>
      </div>
    </footer>
  );
}