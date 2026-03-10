import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, type CarouselApi } from '../components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import { motion } from 'motion/react';
import { useLanguage } from '../contexts/LanguageContext';
import { Button } from '../components/ui/button';
import { ProductCard } from '../components/ProductCard';
import { products } from '../data/products';
import heroImage1 from '../../assets/604e559dddce9c19e9d9ce56c122faf46547660b.png';
import heroImage2 from '../../assets/27a7140bdd4a4d8ce4d77214858b29ea4c92a21f.png';
import heroImage3 from '../../assets/ca6b5e015fcd27730f2e311a30741d35c64c9a57.png';

export function Products() {
  const { t } = useLanguage();
  const [searchParams] = useSearchParams();
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'bathroom' | 'home'>('all');
  const [carouselApi, setCarouselApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const category = searchParams.get('category');
    if (category === 'bathroom' || category === 'home') {
      setSelectedCategory(category);
    } else {
      setSelectedCategory('all');
    }
  }, [searchParams]);

  useEffect(() => {
    if (!carouselApi) return;

    setCount(carouselApi.scrollSnapList().length);
    setCurrent(carouselApi.selectedScrollSnap());

    carouselApi.on('select', () => {
      setCurrent(carouselApi.selectedScrollSnap());
    });
  }, [carouselApi]);

  const filteredProducts = selectedCategory === 'all'
    ? products
    : products.filter(p => p.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#C9BFDB]/10 via-white to-[#7BC4DB]/10 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 right-10 w-96 h-96 rounded-full bg-gradient-to-br from-[#F5C8D8]/20 to-[#FF6B7A]/10 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-40 left-20 w-80 h-80 rounded-full bg-gradient-to-br from-[#7BC4DB]/20 to-[#5BC0EB]/10 blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.25, 0.4, 0.25],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute top-1/2 right-1/3 w-72 h-72 rounded-full bg-gradient-to-br from-[#EFD95A]/15 to-[#F4DB5E]/10 blur-3xl"
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.2, 0.35, 0.2],
          }}
          transition={{
            duration: 11,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      {/* Hero Carousel */}
      <div className="relative bg-gradient-to-br from-[#8B7FB8]/20 via-[#F4DB5E]/10 to-[#7BC4DB]/20 py-6 sm:py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <Carousel
            setApi={setCarouselApi}
            opts={{
              align: "start",
              loop: true,
            }}
            plugins={[
              Autoplay({
                delay: 4000,
              }),
            ]}
            className="w-full"
          >
            <CarouselContent>
              <CarouselItem>
                <div className="w-full aspect-[16/9] sm:aspect-[16/6] md:aspect-[21/6]">
                  <img 
                    src={heroImage1} 
                    alt="Capitan Poop - Expertos en eliminar el mal olor" 
                    className="w-full h-full rounded-xl sm:rounded-2xl shadow-lg object-cover"
                  />
                </div>
              </CarouselItem>
              <CarouselItem>
                <div className="w-full aspect-[16/9] sm:aspect-[16/6] md:aspect-[21/6]">
                  <img 
                    src={heroImage2} 
                    alt="Dile adiós a los malos olores" 
                    className="w-full h-full rounded-xl sm:rounded-2xl shadow-lg object-cover"
                  />
                </div>
              </CarouselItem>
              <CarouselItem>
                <div className="w-full aspect-[16/9] sm:aspect-[16/6] md:aspect-[21/6]">
                  <img 
                    src={heroImage3} 
                    alt="Amor a primera olida" 
                    className="w-full h-full rounded-xl sm:rounded-2xl shadow-lg object-cover"
                  />
                </div>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious className="left-2 sm:left-4 md:left-8" />
            <CarouselNext className="right-2 sm:right-4 md:right-8" />
          </Carousel>

          {/* Dot Indicators */}
          <div className="flex justify-center gap-2 mt-4">
            {Array.from({ length: count }).map((_, index) => (
              <button
                key={index}
                onClick={() => carouselApi?.scrollTo(index)}
                className={`h-2 rounded-full transition-all ${
                  index === current 
                    ? 'w-8 bg-blue-600' 
                    : 'w-2 bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-8 sm:py-12">
        {/* Header */}
        <div className="mb-6 sm:mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">{t('products.all')}</h1>
        </div>

        {/* Product Info Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-8 sm:mb-12 bg-gradient-to-br from-white to-[#C9BFDB]/5 rounded-2xl shadow-lg p-6 sm:p-8 border border-[#C9BFDB]/20"
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-6 sm:mb-8 text-gray-800">
            {t('products.infoTitle')}
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
            {/* Capitan Poop Info */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-5 sm:p-6 border-2 border-blue-200/50 shadow-md"
            >
              <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                <span className="text-3xl sm:text-4xl">🪄</span>
                <h3 className="text-lg sm:text-xl font-bold text-gray-800">{t('products.poopTitle')}</h3>
              </div>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-2 sm:mb-3">
                {t('products.poopDescription')}
              </p>
              <p className="text-xs sm:text-sm text-gray-600 italic">
                {t('products.poopUsage')}
              </p>
            </motion.div>

            {/* Capitan Home Info */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-5 sm:p-6 border-2 border-green-200/50 shadow-md"
            >
              <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                <span className="text-3xl sm:text-4xl">🏠</span>
                <h3 className="text-lg sm:text-xl font-bold text-gray-800">{t('products.homeTitle')}</h3>
              </div>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-2 sm:mb-3">
                {t('products.homeDescription')}
              </p>
              <p className="text-xs sm:text-sm text-gray-600 italic flex items-center gap-2">
                {t('products.homeNatural')} <span className="text-base sm:text-lg">🍃</span>
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Filters */}
        <div className="mb-6 sm:mb-8 flex flex-wrap gap-2 sm:gap-3">
          <Button
            variant={selectedCategory === 'all' ? 'default' : 'outline'}
            onClick={() => setSelectedCategory('all')}
            className="text-sm sm:text-base"
          >
            {t('category.all')}
          </Button>
          <Button
            variant={selectedCategory === 'bathroom' ? 'default' : 'outline'}
            onClick={() => setSelectedCategory('bathroom')}
            className="text-sm sm:text-base"
          >
            {t('category.bathroom')}
          </Button>
          <Button
            variant={selectedCategory === 'home' ? 'default' : 'outline'}
            onClick={() => setSelectedCategory('home')}
            className="text-sm sm:text-base"
          >
            {t('category.home')}
          </Button>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">No hay productos disponibles en esta categoría.</p>
          </div>
        )}
      </div>
    </div>
  );
}