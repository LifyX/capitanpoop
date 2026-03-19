import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router';
import { useCart } from '../contexts/CartContext';
import { useWishlist } from '../contexts/WishlistContext';
import { useLanguage } from '../contexts/LanguageContext';
import { ShoppingCart, Menu, X, Globe, Heart } from 'lucide-react';
import { Button } from './ui/button';
import { motion, AnimatePresence } from 'motion/react';
import logoImage from '../../assets/2b7c7e01209ff2d4c80d1f9fe0f91e6b30731e2b.png';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { language, toggleLanguage, t } = useLanguage();
  const { totalItems } = useCart();
  const { totalWishlistItems } = useWishlist();
  const location = useLocation();

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const handleHomeClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (location.pathname === '/') {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur shadow-md" role="banner">
      <nav className="mx-auto max-w-7xl px-6 py-4" aria-label="Main navigation">
        <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-x-6">
          {/* Logo - Left aligned */}
          <Link 
            to="/" 
            className="flex items-center gap-2" 
            aria-label="Capitan Poop - Go to homepage"
            onClick={handleHomeClick}
          >
            <motion.img 
              whileHover={{ scale: 1.05, rotate: 2 }}
              transition={{ type: "spring", stiffness: 300 }}
              src={logoImage} 
              alt="Capitan Poop Logo" 
              className="h-12 w-auto" 
            />
          </Link>

          {/* Desktop Navigation - Centered */}
          <div className="hidden lg:flex lg:gap-x-8 lg:items-center justify-center" role="navigation" aria-label="Primary">
            <Link to="/" className="text-sm font-medium hover:text-[#8B7FB8] transition" onClick={handleHomeClick}>
              {t('nav.home')}
            </Link>

            {/* Shop Link - No Dropdown */}
            <Link to="/products" className="text-sm font-medium hover:text-[#8B7FB8] transition">
              {t('nav.shop')}
            </Link>

            <Link to="/about" className="text-sm font-medium hover:text-[#8B7FB8] transition">
              {t('nav.about')}
            </Link>

            <Link to="/our-method" className="text-sm font-medium hover:text-[#8B7FB8] transition">
              {t('nav.ourMethod')}
            </Link>
            <Link to="/contact" className="text-sm font-medium hover:text-[#8B7FB8] transition">
              {t('nav.contact')}
            </Link>
          </div>

          {/* Right side buttons - Right aligned */}
          <div className="flex items-center gap-2 justify-end">
            {/* Login - Desktop Only */}
            <Link to="/login" className="hidden lg:block">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button variant="ghost" size="sm" className="font-medium">
                  {t('nav.login')}
                </Button>
              </motion.div>
            </Link>

            {/* Wishlist - Desktop Only */}
            <Link to="/wishlist" className="relative hidden lg:block" aria-label={`Wishlist with ${totalWishlistItems} items`}>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button variant="ghost" size="sm" className="flex items-center gap-1.5 font-medium">
                  <Heart className="h-5 w-5 text-red-500 fill-red-500" aria-hidden="true" />
                  <span>{t('nav.wishlist')}</span>
                  <AnimatePresence>
                    {totalWishlistItems > 0 && (
                      <motion.span
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        exit={{ scale: 0 }}
                        className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-gradient-to-r from-pink-500 to-red-500 text-white text-xs flex items-center justify-center font-bold shadow-lg"
                        aria-label={`${totalWishlistItems} items in wishlist`}
                      >
                        {totalWishlistItems}
                      </motion.span>
                    )}
                  </AnimatePresence>
                </Button>
              </motion.div>
            </Link>

            {/* Cart */}
            <Link to="/cart" className="relative" aria-label={`Shopping cart with ${totalItems} items`}>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button variant="ghost" size="sm" className="font-medium bg-gray-100 hover:bg-gray-200 border-2 border-gray-300 rounded-lg px-3 py-2 transition-colors">
                  🛒
                  <span className="sr-only">{t('nav.cart')}</span>
                  <AnimatePresence>
                    {totalItems > 0 && (
                      <motion.span
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        exit={{ scale: 0 }}
                        className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-gradient-to-r from-[#7BC4DB] to-[#5AB5D1] text-white text-xs flex items-center justify-center font-bold shadow-lg"
                        aria-label={`${totalItems} items in cart`}
                      >
                        {totalItems}
                      </motion.span>
                    )}
                  </AnimatePresence>
                </Button>
              </motion.div>
            </Link>

            {/* Language Toggle - Desktop Only */}
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="hidden lg:block">
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleLanguage}
                className="flex items-center gap-1.5 bg-[#7BC4DB]/20 hover:bg-[#7BC4DB]/30 border-2 border-[#7BC4DB] rounded-lg px-3 py-2 transition-colors"
                aria-label={`Switch to ${language === 'es' ? 'English' : 'Spanish'}`}
              >
                <Globe className="h-4 w-4 text-[#7BC4DB]" aria-hidden="true" />
                <span className="font-bold text-[#7BC4DB]">{language === 'es' ? 'EN' : 'ES'}</span>
              </Button>
            </motion.div>

            {/* Mobile menu button - Hamburger */}
            <motion.button
              whileTap={{ scale: 0.95 }}
              className="lg:hidden p-2.5 hover:bg-purple-50 transition-colors rounded-md"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-menu"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6 text-[#8B7FB8] stroke-[2.5]" aria-hidden="true" />
              ) : (
                <div className="flex flex-col gap-[5px] w-6" aria-hidden="true">
                  <motion.span 
                    className="block h-[3px] w-full bg-gradient-to-r from-[#8B7FB8] to-[#7BC4DB] rounded-full"
                    initial={false}
                    whileHover={{ scaleX: 1.1 }}
                    transition={{ duration: 0.2 }}
                  ></motion.span>
                  <motion.span 
                    className="block h-[3px] w-full bg-gradient-to-r from-[#8B7FB8] to-[#7BC4DB] rounded-full"
                    initial={false}
                    whileHover={{ scaleX: 1.1 }}
                    transition={{ duration: 0.2, delay: 0.05 }}
                  ></motion.span>
                  <motion.span 
                    className="block h-[3px] w-full bg-gradient-to-r from-[#8B7FB8] to-[#7BC4DB] rounded-full"
                    initial={false}
                    whileHover={{ scaleX: 1.1 }}
                    transition={{ duration: 0.2, delay: 0.1 }}
                  ></motion.span>
                </div>
              )}
            </motion.button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden border-t bg-white overflow-hidden shadow-lg"
            role="navigation"
            aria-label="Mobile navigation"
          >
            <div className="space-y-1 px-6 py-4">
              <Link
                to="/"
                className="block py-3 text-base font-medium hover:text-[#8B7FB8] hover:bg-gray-50 rounded-lg px-3 transition"
                onClick={(e) => {
                  handleHomeClick(e);
                  setMobileMenuOpen(false);
                }}
              >
                🏠 {t('nav.home')}
              </Link>
              <Link
                to="/products"
                className="block py-3 text-base font-medium hover:text-[#8B7FB8] hover:bg-gray-50 rounded-lg px-3 transition"
                onClick={() => setMobileMenuOpen(false)}
              >
                🛍️ {t('nav.allProducts')}
              </Link>
              <Link
                to="/products?category=bathroom"
                className="block py-3 text-sm font-medium pl-6 hover:text-[#8B7FB8] hover:bg-gray-50 rounded-lg px-3 transition"
                onClick={() => setMobileMenuOpen(false)}
              >
                🚽 {t('nav.bathroom')}
              </Link>
              <Link
                to="/products?category=home"
                className="block py-3 text-sm font-medium pl-6 hover:text-[#8B7FB8] hover:bg-gray-50 rounded-lg px-3 transition"
                onClick={() => setMobileMenuOpen(false)}
              >
                🏡 {t('nav.home_category')}
              </Link>
              <Link
                to="/about"
                className="block py-3 text-base font-medium hover:text-[#8B7FB8] hover:bg-gray-50 rounded-lg px-3 transition"
                onClick={() => setMobileMenuOpen(false)}
              >
                ℹ️ {t('nav.about')}
              </Link>
              <Link
                to="/our-method"
                className="block py-3 text-base font-medium hover:text-[#8B7FB8] hover:bg-gray-50 rounded-lg px-3 transition"
                onClick={() => setMobileMenuOpen(false)}
              >
                🔬 {t('nav.ourMethod')}
              </Link>
              <Link
                to="/contact"
                className="block py-3 text-base font-medium hover:text-[#8B7FB8] hover:bg-gray-50 rounded-lg px-3 transition"
                onClick={() => setMobileMenuOpen(false)}
              >
                📞 {t('nav.contact')}
              </Link>
              
              {/* Divider */}
              <div className="border-t border-gray-200 my-2"></div>
              
              {/* Wishlist - Mobile */}
              <Link
                to="/wishlist"
                className="flex items-center justify-between py-3 text-base font-medium hover:text-[#8B7FB8] hover:bg-gray-50 rounded-lg px-3 transition"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span>❤️ {t('nav.wishlist')}</span>
                {totalWishlistItems > 0 && (
                  <span className="h-6 w-6 rounded-full bg-gradient-to-r from-pink-500 to-red-500 text-white text-xs flex items-center justify-center font-bold">
                    {totalWishlistItems}
                  </span>
                )}
              </Link>
              
              {/* Login - Mobile */}
              <Link
                to="/login"
                className="block py-3 text-base font-medium hover:text-[#8B7FB8] hover:bg-gray-50 rounded-lg px-3 transition"
                onClick={() => setMobileMenuOpen(false)}
              >
                👤 {t('nav.login')}
              </Link>
              
              {/* Language Toggle - Mobile */}
              <button
                onClick={() => {
                  toggleLanguage();
                  setMobileMenuOpen(false);
                }}
                className="flex items-center gap-2 py-3 text-base font-medium w-full hover:text-[#8B7FB8] hover:bg-gray-50 rounded-lg px-3 transition text-left"
              >
                <Globe className="h-5 w-5" />
                {language === 'es' ? '🇺🇸 English' : '🇪🇸 Español'}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}