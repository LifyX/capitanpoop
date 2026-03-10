import { Link } from 'react-router';
import { useLanguage } from '../contexts/LanguageContext';
import { products } from '../data/products';
import { ProductCard } from '../components/ProductCard';
import { Button } from '../components/ui/button';
import { CheckCircle, Sparkles, Leaf, Shield } from 'lucide-react';
import { motion } from 'motion/react';
import { ShoppingCart } from 'lucide-react';

export function Home() {
  const { t, language } = useLanguage();
  
  const featuredProducts = products.filter(p => p.inStock).slice(0, 4);

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white py-12 sm:py-16 md:py-28">
        {/* Colorful Background Shapes */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Large decorative circles */}
          <motion.div
            className="absolute -top-24 -right-24 w-64 h-64 sm:w-96 sm:h-96 rounded-full bg-gradient-to-br from-[#C9BFDB]/30 to-[#8B7FB8]/20 blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute top-1/2 -left-32 w-60 h-60 sm:w-80 sm:h-80 rounded-full bg-gradient-to-br from-[#7BC4DB]/25 to-[#5BC0EB]/15 blur-3xl"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.25, 0.4, 0.25],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute bottom-0 right-1/4 w-56 h-56 sm:w-72 sm:h-72 rounded-full bg-gradient-to-br from-[#F4DB5E]/20 to-[#EFD95A]/15 blur-3xl"
            animate={{
              scale: [1, 1.15, 1],
              opacity: [0.2, 0.35, 0.2],
            }}
            transition={{
              duration: 9,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>
        
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 z-10">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            {/* Left Content */}
            <div className="text-center lg:text-left">
              {/* Top Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-md rounded-full px-4 sm:px-5 py-2 shadow-lg mb-4 sm:mb-6 border-2 border-gray-200"
              >
                <motion.div
                  animate={{ 
                    rotate: [0, 10, -10, 0],
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Sparkles className="h-3 w-3 sm:h-4 sm:w-4 text-[#EFD95A]" />
                </motion.div>
                <span className="text-xs sm:text-sm font-semibold text-gray-700">{t('hero.badge')}</span>
              </motion.div>
              
              {/* Main Headline */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight mb-4 sm:mb-6"
              >
                <span className="bg-gradient-to-r from-[#8B7FB8] via-[#7BC4DB] to-[#5BC0EB] bg-clip-text text-transparent">
                  {t('hero.mainTitle1')}
                </span>
                <br />
                <span className="text-gray-900">{t('hero.mainTitle2')}</span>
              </motion.h1>
              
              {/* Subtitle */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 sm:mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed"
              >
                {t('hero.description')}
                {' '}
                <span className="font-semibold text-gray-800">{t('hero.descriptionBold')}</span>
              </motion.p>

              {/* Trust Badges - Compact */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-wrap gap-2 sm:gap-3 mb-6 sm:mb-8 justify-center lg:justify-start"
              >
                {[
                  { icon: Leaf, text: t('hero.natural'), color: "#8B7FB8" },
                  { icon: Shield, text: t('hero.securePayment'), color: "#EFD95A" },
                  { icon: Sparkles, text: t('hero.veryEffective'), color: "#FF6B7A" }
                ].map((badge, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4 + i * 0.05 }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="flex items-center gap-1.5 sm:gap-2 bg-white border-2 border-gray-200 rounded-full px-3 sm:px-4 py-1.5 sm:py-2 shadow-sm hover:shadow-md transition-all"
                  >
                    <badge.icon className="h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0" style={{ color: badge.color }} />
                    <span className="text-xs sm:text-sm font-medium text-gray-700">{badge.text}</span>
                  </motion.div>
                ))}
              </motion.div>
            
              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start"
              >
                <Link to="/our-method" className="w-full sm:w-auto">
                  <motion.div 
                    whileHover={{ scale: 1.05 }} 
                    whileTap={{ scale: 0.95 }}
                    className="w-full sm:w-auto"
                  >
                    <Button 
                      size="lg" 
                      className="w-full sm:w-auto text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 bg-gradient-to-r from-[#7BC4DB] to-[#5BC0EB] text-white hover:from-[#6AB3CA] hover:to-[#4AB0DA] shadow-lg hover:shadow-xl transition-all font-semibold"
                    >
                      <ShoppingCart className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                      {t('hero.howItWorks')}
                    </Button>
                  </motion.div>
                </Link>
                <Link to="/about" className="w-full sm:w-auto">
                  <motion.div 
                    whileHover={{ scale: 1.05 }} 
                    whileTap={{ scale: 0.95 }}
                    className="w-full sm:w-auto"
                  >
                    <Button 
                      size="lg" 
                      variant="outline" 
                      className="w-full sm:w-auto text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 border-2 border-gray-300 text-gray-700 hover:bg-gray-50 shadow-md hover:shadow-lg transition-all font-semibold"
                    >
                      {t('hero.aboutUs')}
                    </Button>
                  </motion.div>
                </Link>
              </motion.div>
            </div>

            {/* Right Content - Visual Cards */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative hidden lg:block"
            >
              <div className="grid grid-cols-2 gap-6">
                {/* Card 1 - Capitan Poop */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  whileHover={{ scale: 1.05, y: -8, rotate: 2 }}
                  className="bg-gradient-to-br from-[#C9BFDB] to-[#8B7FB8] rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-300 cursor-pointer h-full flex flex-col"
                  style={{
                    boxShadow: '0 20px 60px rgba(139, 127, 184, 0.4)'
                  }}
                >
                  <motion.div 
                    className="bg-white/25 backdrop-blur-sm rounded-2xl p-6 mb-6 shadow-inner flex-1 flex items-center justify-center"
                    animate={{
                      y: [0, -5, 0],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    <motion.div 
                      className="text-6xl text-center"
                      animate={{
                        rotate: [0, -10, 10, 0],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      🚽
                    </motion.div>
                  </motion.div>
                  <h3 className="text-2xl font-bold text-white mb-2">{t('home.poopCard')}</h3>
                  <p className="text-white/95 text-base">{t('home.poopCardDesc')}</p>
                </motion.div>

                {/* Card 2 - Capitan Home */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  whileHover={{ scale: 1.05, y: -8, rotate: -2 }}
                  className="bg-gradient-to-br from-[#7BC4DB] to-[#5BC0EB] rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-300 cursor-pointer h-full flex flex-col"
                  style={{
                    boxShadow: '0 20px 60px rgba(91, 192, 235, 0.4)'
                  }}
                >
                  <motion.div 
                    className="bg-white/25 backdrop-blur-sm rounded-2xl p-6 mb-6 shadow-inner flex-1 flex items-center justify-center"
                    animate={{
                      y: [0, -5, 0],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 0.5
                    }}
                  >
                    <motion.div 
                      className="text-6xl text-center"
                      animate={{
                        rotate: [0, 10, -10, 0],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 0.5
                      }}
                    >
                      🏠
                    </motion.div>
                  </motion.div>
                  <h3 className="text-2xl font-bold text-white mb-2">{t('home.homeCard')}</h3>
                  <p className="text-white/95 text-base">{t('home.homeCardDesc')}</p>
                </motion.div>

                {/* Card 3 - Natural */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                  whileHover={{ scale: 1.05, y: -8, rotate: -2 }}
                  className="bg-gradient-to-br from-[#F4DB5E] to-[#EFD95A] rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-300 cursor-pointer h-full flex flex-col"
                  style={{
                    boxShadow: '0 20px 60px rgba(239, 217, 90, 0.4)'
                  }}
                >
                  <motion.div 
                    className="bg-white/25 backdrop-blur-sm rounded-2xl p-6 mb-6 shadow-inner flex-1 flex items-center justify-center"
                    animate={{
                      y: [0, -5, 0],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 1
                    }}
                  >
                    <motion.div 
                      className="text-6xl text-center"
                      animate={{
                        rotate: [0, -10, 10, 0],
                        scale: [1, 1.1, 1],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 1
                      }}
                    >
                      🌿
                    </motion.div>
                  </motion.div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">{t('home.naturalCard')}</h3>
                  <p className="text-gray-700 text-base">{t('home.naturalCardDesc')}</p>
                </motion.div>

                {/* Card 4 - Effective */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  whileHover={{ scale: 1.05, y: -8, rotate: 2 }}
                  className="bg-gradient-to-br from-[#FF6B7A] to-[#F5C8D8] rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-300 cursor-pointer h-full flex flex-col"
                  style={{
                    boxShadow: '0 20px 60px rgba(255, 107, 122, 0.4)'
                  }}
                >
                  <motion.div 
                    className="bg-white/25 backdrop-blur-sm rounded-2xl p-6 mb-6 shadow-inner flex-1 flex items-center justify-center"
                    animate={{
                      y: [0, -5, 0],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 1.5
                    }}
                  >
                    <motion.div 
                      className="text-6xl text-center"
                      animate={{
                        rotate: [0, 15, -15, 0],
                        scale: [1, 1.15, 1],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 1.5
                      }}
                    >
                      ✨
                    </motion.div>
                  </motion.div>
                  <h3 className="text-2xl font-bold text-white mb-2">{t('home.effectiveCard')}</h3>
                  <p className="text-white/95 text-base">{t('home.effectiveCardDesc')}</p>
                </motion.div>
              </div>

              {/* Floating decorative elements */}
              <motion.div
                animate={{
                  y: [0, -20, 0],
                  rotate: [0, 5, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute -top-8 -right-8 w-32 h-32 bg-gradient-to-br from-[#F5C8D8]/40 to-[#FF6B7A]/30 rounded-full blur-2xl pointer-events-none"
              />
              <motion.div
                animate={{
                  y: [0, 15, 0],
                  rotate: [0, -5, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute -bottom-12 -left-12 w-40 h-40 bg-gradient-to-br from-[#C9BFDB]/30 to-[#8B7FB8]/20 rounded-full blur-3xl pointer-events-none"
              />
            </motion.div>
          </div>
        </div>

        {/* Bottom wave decoration */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
      </section>

      {/* Featured Products */}
      <section className="py-16 md:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {language === 'es' ? 'Compra por Categoría' : 'Shop by Category'}
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              {language === 'es' 
                ? 'Descubre nuestras dos líneas de productos naturales diseñadas para eliminar olores en diferentes espacios' 
                : 'Discover our two natural product lines designed to eliminate odors in different spaces'}
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Capitan Poop - Para el Baño */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Link to="/products?category=bathroom" className="group">
                <motion.div
                  whileHover={{ scale: 1.05, rotate: 1 }}
                  transition={{ type: "spring", stiffness: 200 }}
                  className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-100 to-cyan-100 p-8 h-96 md:h-80 flex flex-col justify-between shadow-lg hover:shadow-2xl transition-all duration-300"
                >
                  {/* Background Image */}
                  <div className="absolute inset-0 opacity-20">
                    <img 
                      src="https://acdn-us.mitiendanube.com/stores/002/134/504/themes/new_linkedman/1-img-1150072435-1657669367-4a3cf4bd2a588483ded267fa1899668f1657669368-640-0.webp?924149970"
                      alt="Capitan Poop Products"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute top-0 right-0 w-64 h-64 bg-blue-200/30 rounded-full blur-3xl -mr-32 -mt-32"></div>
                  
                  <div className="relative z-10">
                    <motion.div
                      animate={{ y: [0, -10, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="text-6xl mb-4"
                    >
                      🚽
                    </motion.div>
                    <h3 className="text-3xl font-bold text-gray-800 mb-3">
                      Capitan Poop
                    </h3>
                    <p className="text-gray-700 mb-6 leading-relaxed">
                      {language === 'es' 
                        ? 'Eliminador de olores para el baño. Bloquea olores antes de que salgan del agua.' 
                        : 'Bathroom odor eliminator. Blocks odors before they leave the water.'}
                    </p>
                  </div>
                </motion.div>
              </Link>
            </motion.div>

            {/* Capitan Home - Para el Hogar */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Link to="/products?category=home" className="group">
                <motion.div
                  whileHover={{ scale: 1.05, rotate: -1 }}
                  transition={{ type: "spring", stiffness: 200 }}
                  className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-green-100 to-emerald-100 p-8 h-96 md:h-80 flex flex-col justify-between shadow-lg hover:shadow-2xl transition-all duration-300"
                >
                  {/* Background Image */}
                  <div className="absolute inset-0 opacity-20">
                    <img 
                      src="https://acdn-us.mitiendanube.com/stores/002/134/504/themes/new_linkedman/1-img-453800411-1658861510-c4167ade1f2ffdd2898ea6a62b803dd41658861511-640-0.webp?924149970"
                      alt="Capitan Home Products"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute top-0 right-0 w-64 h-64 bg-green-200/30 rounded-full blur-3xl -mr-32 -mt-32"></div>
                  
                  <div className="relative z-10">
                    <motion.div
                      animate={{ y: [0, -10, 0] }}
                      transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                      className="text-6xl mb-4"
                    >
                      🏠
                    </motion.div>
                    <h3 className="text-3xl font-bold text-gray-800 mb-3">
                      Capitan Home
                    </h3>
                    <p className="text-gray-700 mb-6 leading-relaxed">
                      {language === 'es' 
                        ? 'Eliminador de olores para el hogar. Ideal para cocina, closets y espacios cerrados.' 
                        : 'Home odor eliminator. Ideal for kitchen, closets and enclosed spaces.'}
                    </p>
                  </div>
                </motion.div>
              </Link>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-12"
          >
            <Link to="/products">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button size="lg" variant="outline" className="text-lg px-8 shadow-md hover:shadow-lg">
                  {t('nav.allProducts')}
                </Button>
              </motion.div>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* How to Use */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-[#E8E3F3] to-[#F5F3FF]">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#8B7FB8]">
              {t('howToUse.poopTitle')}
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              {t('howToUse.poopSubtitle')}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-center bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all"
            >
              <motion.div 
                className="text-6xl mb-4"
                animate={{ rotate: [0, -10, 10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                🪄
              </motion.div>
              <h3 className="text-2xl font-bold mb-2 text-[#8B7FB8]">{t('howToUse.shake')}</h3>
              <p className="text-gray-600">{t('howToUse.shakeDesc')}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-center bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all"
            >
              <motion.div 
                className="text-6xl mb-4"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                💦
              </motion.div>
              <h3 className="text-2xl font-bold mb-2 text-[#8B7FB8]">{t('howToUse.spray')}</h3>
              <p className="text-gray-600">{t('howToUse.sprayDesc')}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-center bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all"
            >
              <motion.div 
                className="text-6xl mb-4"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                🚽
              </motion.div>
              <h3 className="text-2xl font-bold mb-2 text-[#8B7FB8]">{t('howToUse.sit')}</h3>
              <p className="text-gray-600">{t('howToUse.sitDesc')}</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t('trust.title')}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-lg border border-gray-200 hover:border-blue-300 hover:shadow-lg transition">
              <div className="text-5xl mb-4">💳</div>
              <h3 className="font-semibold mb-2">{t('trust.securePayment').split(' ')[0]}</h3>
              <p className="text-sm text-gray-600">{t('trust.securePayment')}</p>
            </div>

            <div className="text-center p-6 rounded-lg border border-gray-200 hover:border-blue-300 hover:shadow-lg transition">
              <div className="text-5xl mb-4">🌿</div>
              <h3 className="font-semibold mb-2">{t('trust.natural')}</h3>
              <p className="text-sm text-gray-600">{t('trust.natural')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-[#E8C4D8]/20 via-[#F4DB5E]/10 to-[#5BC0EB]/20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t('social.title')}
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-12 h-12 bg-[#E8C4D8]/60 rounded-full flex items-center justify-center">
                  👤
                </div>
                <div>
                  <p className="font-semibold">María G.</p>
                  <div className="text-yellow-500">⭐⭐⭐⭐⭐</div>
                </div>
              </div>
              <p className="text-gray-700">{t('social.testimonial1')}</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-12 h-12 bg-[#F4DB5E]/60 rounded-full flex items-center justify-center">
                  👤
                </div>
                <div>
                  <p className="font-semibold">Carlos R.</p>
                  <div className="text-yellow-500">⭐⭐⭐⭐⭐</div>
                </div>
              </div>
              <p className="text-gray-700">{t('social.testimonial2')}</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-12 h-12 bg-[#5BC0EB]/60 rounded-full flex items-center justify-center">
                  👤
                </div>
                <div>
                  <p className="font-semibold">Ana L.</p>
                  <div className="text-yellow-500">⭐⭐⭐⭐⭐</div>
                </div>
              </div>
              <p className="text-gray-700">{t('social.testimonial3')}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}