import { motion } from 'motion/react';
import { useLanguage } from '../contexts/LanguageContext';
import { Link } from 'react-router';
import { Leaf, Heart, Sparkles, Target } from 'lucide-react';
import { Button } from '../components/ui/button';

export function About() {
  const { t } = useLanguage();

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#C9BFDB]/30 via-[#7BC4DB]/20 to-[#F5C8D8]/30 py-12 sm:py-20 md:py-32">
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute -top-24 -right-24 w-64 h-64 sm:w-96 sm:h-96 rounded-full bg-gradient-to-br from-[#8B7FB8]/20 to-[#C9BFDB]/10 blur-3xl"
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
            className="absolute bottom-0 -left-32 w-60 h-60 sm:w-80 sm:h-80 rounded-full bg-gradient-to-br from-[#7BC4DB]/20 to-[#5BC0EB]/10 blur-3xl"
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
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-[#8B7FB8] via-[#7BC4DB] to-[#5BC0EB] bg-clip-text text-transparent">
              {t('about.title')}
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto px-4">
              {t('about.subtitle')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-12 sm:py-16 md:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-[#8B7FB8]">
                {t('about.ourStoryTitle')}
              </h2>
              <p className="text-base sm:text-lg text-gray-700 mb-3 sm:mb-4 leading-relaxed">
                {t('about.ourStory1')}
              </p>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                {t('about.ourStory2')}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative bg-gradient-to-br from-[#C9BFDB] to-[#8B7FB8] rounded-2xl sm:rounded-3xl p-8 sm:p-12 shadow-2xl">
                <motion.div
                  animate={{
                    y: [0, -20, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="text-7xl sm:text-9xl text-center"
                >
                  🚽
                </motion.div>
                <div className="absolute -bottom-4 sm:-bottom-6 -right-4 sm:-right-6 w-24 h-24 sm:w-32 sm:h-32 bg-[#EFD95A] rounded-full opacity-80 blur-2xl"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-12 sm:py-16 md:py-24 bg-gradient-to-br from-[#E8F4F2] to-white">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center bg-white rounded-2xl sm:rounded-3xl p-8 sm:p-12 shadow-xl"
          >
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-[#7BC4DB] to-[#5BC0EB] rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
              <Target className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-[#7BC4DB]">
              {t('about.missionTitle')}
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed">
              {t('about.missionText')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-12 sm:py-16 md:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8 sm:mb-12"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
              {t('about.valuesTitle')}
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {[
              {
                icon: Leaf,
                title: t('about.value1Title'),
                desc: t('about.value1Desc'),
                gradient: 'from-[#8B7FB8] to-[#C9BFDB]'
              },
              {
                icon: Sparkles,
                title: t('about.value2Title'),
                desc: t('about.value2Desc'),
                gradient: 'from-[#7BC4DB] to-[#5BC0EB]'
              },
              {
                icon: Heart,
                title: t('about.value3Title'),
                desc: t('about.value3Desc'),
                gradient: 'from-[#EFD95A] to-[#F4DB5E]'
              },
              {
                icon: Target,
                title: t('about.value4Title'),
                desc: t('about.value4Desc'),
                gradient: 'from-[#F5C8D8] to-[#FF6B7A]'
              }
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all border border-gray-100"
              >
                <div className={`w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br ${value.gradient} rounded-full flex items-center justify-center mb-4 sm:mb-6`}>
                  <value.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">{value.title}</h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Lines Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-[#F5F3FF] to-[#E8E3F3]">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t('about.productsTitle')}
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Capitan Poop */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-3xl p-10 shadow-xl hover:shadow-2xl transition-all"
            >
              <div className="relative">
                <motion.div
                  animate={{
                    rotate: [0, -10, 10, 0],
                    y: [0, -10, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="text-7xl mb-6 text-center"
                >
                  🚽
                </motion.div>
                <h3 className="text-3xl font-bold mb-4 text-[#8B7FB8]">
                  {t('about.poopLineTitle')}
                </h3>
                <p className="text-gray-700 text-lg leading-relaxed">
                  {t('about.poopLineDesc')}
                </p>
              </div>
            </motion.div>

            {/* Capitan Home */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-3xl p-10 shadow-xl hover:shadow-2xl transition-all"
            >
              <div className="relative">
                <motion.div
                  animate={{
                    rotate: [0, 10, -10, 0],
                    y: [0, -10, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.5
                  }}
                  className="text-7xl mb-6 text-center"
                >
                  🏠
                </motion.div>
                <h3 className="text-3xl font-bold mb-4 text-[#7BC4DB]">
                  {t('about.homeLineTitle')}
                </h3>
                <p className="text-gray-700 text-lg leading-relaxed">
                  {t('about.homeLineDesc')}
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Natural Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="mx-auto max-w-5xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#8B7FB8]">
              {t('about.whyNaturalTitle')}
            </h2>
          </motion.div>

          <div className="space-y-6">
            {[
              t('about.whyNatural1'),
              t('about.whyNatural2'),
              t('about.whyNatural3')
            ].map((text, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-start gap-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-6"
              >
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-gray-700 text-lg pt-2">{text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Commitment Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-[#E8F4F2] to-[#F0FFFE]">
        <div className="mx-auto max-w-5xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center bg-white rounded-3xl p-12 shadow-xl"
          >
            <div className="w-20 h-20 bg-gradient-to-br from-[#F5C8D8] to-[#FF6B7A] rounded-full flex items-center justify-center mx-auto mb-6">
              <Heart className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {t('about.teamTitle')}
            </h2>
            <p className="text-gray-700 text-xl leading-relaxed">
              {t('about.teamText')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-[#8B7FB8] via-[#7BC4DB] to-[#5BC0EB]">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
              {t('about.ctaTitle')}
            </h2>
            <p className="text-xl text-white/95 mb-8 max-w-2xl mx-auto">
              {t('about.ctaText')}
            </p>
            <Link to="/products">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  size="lg"
                  className="text-lg px-10 py-7 bg-white text-[#8B7FB8] hover:bg-gray-100 shadow-2xl hover:shadow-3xl transition-all font-bold"
                >
                  {t('about.ctaButton')}
                </Button>
              </motion.div>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}