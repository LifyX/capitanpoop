import { Link } from 'react-router';
import { useLanguage } from '../contexts/LanguageContext';
import { Button } from '../components/ui/button';
import { motion } from 'motion/react';

export function OurMethod() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#7BC4DB]/10 via-white to-[#8B7FB8]/10 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 right-20 w-96 h-96 rounded-full bg-gradient-to-br from-[#C9BFDB]/20 to-[#8B7FB8]/10 blur-3xl"
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
          className="absolute bottom-40 left-10 w-80 h-80 rounded-full bg-gradient-to-br from-[#F4DB5E]/20 to-[#EFD95A]/10 blur-3xl"
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
          className="absolute top-1/2 right-1/4 w-72 h-72 rounded-full bg-gradient-to-br from-[#7BC4DB]/15 to-[#5BC0EB]/10 blur-3xl"
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

      {/* Capitan Poop Section */}
      <section className="relative py-16 bg-gradient-to-br from-[#E8E3F3] to-[#F5F3FF]">
        <div className="max-w-7xl mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#8B7FB8]">
              {t('method.poop.title')}
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              {t('method.poop.subtitle')}
            </p>
          </div>

          {/* How to Use Steps */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
              {t('method.poop.stepsTitle')}
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {/* Step 1 */}
              <div className="bg-white rounded-xl shadow-md p-8 text-center hover:shadow-xl transition">
                <div className="text-6xl mb-4">🌀</div>
                <h3 className="text-2xl font-bold mb-3 text-[#8B7FB8]">
                  {t('method.poop.step1')}
                </h3>
                <p className="text-gray-700">
                  {t('method.poop.step1Desc')}
                </p>
              </div>

              {/* Step 2 */}
              <div className="bg-white rounded-xl shadow-md p-8 text-center hover:shadow-xl transition">
                <div className="text-6xl mb-4">💨</div>
                <h3 className="text-2xl font-bold mb-3 text-[#8B7FB8]">
                  {t('method.poop.step2')}
                </h3>
                <p className="text-gray-700">
                  {t('method.poop.step2Desc')}
                </p>
              </div>

              {/* Step 3 */}
              <div className="bg-white rounded-xl shadow-md p-8 text-center hover:shadow-xl transition">
                <div className="text-6xl mb-4">😊</div>
                <h3 className="text-2xl font-bold mb-3 text-[#8B7FB8]">
                  {t('method.poop.step3')}
                </h3>
                <p className="text-gray-700">
                  {t('method.poop.step3Desc')}
                </p>
              </div>
            </div>
          </div>

          {/* The Science */}
          <div className="bg-gradient-to-br from-[#C9BFDB]/30 to-white rounded-2xl shadow-lg p-8 md:p-12 mb-12">
            <h2 className="text-3xl font-bold mb-6 text-[#8B7FB8]">
              {t('method.poop.scienceTitle')}
            </h2>
            <div className="space-y-4 text-gray-700 text-lg">
              <p>
                {t('method.poop.scienceDesc1')}
              </p>
              <p>
                {t('method.poop.scienceDesc2')}
              </p>
            </div>
          </div>

          {/* Ingredients */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
              {t('method.poop.ingredientsTitle')}
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Natural Oils */}
              <div className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-xl transition border-2 border-[#C9BFDB]/30">
                <div className="text-5xl mb-4">🌿</div>
                <h3 className="font-bold mb-2 text-lg text-[#8B7FB8]">
                  {t('method.poop.ingredient1')}
                </h3>
                <p className="text-gray-600 text-sm">
                  {t('method.poop.ingredient1Desc')}
                </p>
              </div>

              {/* No Harsh Chemicals */}
              <div className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-xl transition border-2 border-[#C9BFDB]/30">
                <div className="text-5xl mb-4">✨</div>
                <h3 className="font-bold mb-2 text-lg text-[#8B7FB8]">
                  {t('method.poop.ingredient2')}
                </h3>
                <p className="text-gray-600 text-sm">
                  {t('method.poop.ingredient2Desc')}
                </p>
              </div>

              {/* Biodegradable */}
              <div className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-xl transition border-2 border-[#C9BFDB]/30">
                <div className="text-5xl mb-4">🌱</div>
                <h3 className="font-bold mb-2 text-lg text-[#8B7FB8]">
                  {t('method.poop.ingredient3')}
                </h3>
                <p className="text-gray-600 text-sm">
                  {t('method.poop.ingredient3Desc')}
                </p>
              </div>

              {/* Safe for All */}
              <div className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-xl transition border-2 border-[#C9BFDB]/30">
                <div className="text-5xl mb-4">👨‍👩‍👧‍👦</div>
                <h3 className="font-bold mb-2 text-lg text-[#8B7FB8]">
                  {t('method.poop.ingredient4')}
                </h3>
                <p className="text-gray-600 text-sm">
                  {t('method.poop.ingredient4Desc')}
                </p>
              </div>
            </div>
          </div>

          {/* Benefits */}
          <div className="bg-gradient-to-br from-[#8B7FB8] to-[#7A9BB5] text-white rounded-2xl shadow-lg p-8 md:p-12 mb-12">
            <h2 className="text-3xl font-bold mb-8 text-center">
              {t('method.poop.benefitsTitle')}
            </h2>
            <div className="grid md:grid-cols-2 gap-4 max-w-3xl mx-auto">
              <div className="flex items-start gap-3">
                <span className="text-2xl">✓</span>
                <p className="text-lg">{t('method.poop.benefit1')}</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">✓</span>
                <p className="text-lg">{t('method.poop.benefit2')}</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">✓</span>
                <p className="text-lg">{t('method.poop.benefit3')}</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">✓</span>
                <p className="text-lg">{t('method.poop.benefit4')}</p>
              </div>
              <div className="flex items-start gap-3 md:col-span-2">
                <span className="text-2xl">✓</span>
                <p className="text-lg">{t('method.poop.benefit5')}</p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center bg-gradient-to-br from-[#F5C8D8]/40 to-white rounded-2xl p-12">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">
              {t('method.poop.ctaTitle')}
            </h3>
            <p className="text-lg text-gray-700 mb-6">
              {t('method.poop.ctaDesc')}
            </p>
            <Link to="/products?category=bathroom">
              <Button size="lg" className="bg-gradient-to-r from-[#8B7FB8] to-[#7A9BB5] hover:from-[#7A6FA7] hover:to-[#6A8BA4] text-lg px-8 py-6">
                {t('method.poop.ctaButton')}
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Capitan Home Section */}
      <section className="relative py-16 bg-gradient-to-br from-[#D4F1D4] to-[#E8F5E9]">
        <div className="max-w-7xl mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#2E7D32]">
              {t('method.home.title')}
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              {t('method.home.subtitle')}
            </p>
          </div>

          {/* How to Use Steps */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
              {t('method.home.stepsTitle')}
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {/* Step 1 */}
              <div className="bg-white rounded-xl shadow-md p-8 text-center hover:shadow-xl transition">
                <div className="text-6xl mb-4">🌀</div>
                <h3 className="text-2xl font-bold mb-3 text-[#2E7D32]">
                  {t('method.home.step1')}
                </h3>
                <p className="text-gray-700">
                  {t('method.home.step1Desc')}
                </p>
              </div>

              {/* Step 2 */}
              <div className="bg-white rounded-xl shadow-md p-8 text-center hover:shadow-xl transition">
                <div className="text-6xl mb-4">🎯</div>
                <h3 className="text-2xl font-bold mb-3 text-[#2E7D32]">
                  {t('method.home.step2')}
                </h3>
                <p className="text-gray-700">
                  {t('method.home.step2Desc')}
                </p>
              </div>

              {/* Step 3 */}
              <div className="bg-white rounded-xl shadow-md p-8 text-center hover:shadow-xl transition">
                <div className="text-6xl mb-4">✨</div>
                <h3 className="text-2xl font-bold mb-3 text-[#2E7D32]">
                  {t('method.home.step3')}
                </h3>
                <p className="text-gray-700">
                  {t('method.home.step3Desc')}
                </p>
              </div>
            </div>
          </div>

          {/* Where to Use */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
              {t('method.home.whereTitle')}
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Shoes */}
              <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition border-2 border-green-200">
                <div className="text-5xl mb-4">👟</div>
                <h3 className="font-bold mb-2 text-lg text-[#2E7D32]">
                  {t('method.home.where1')}
                </h3>
                <p className="text-gray-600 text-sm">
                  {t('method.home.where1Desc')}
                </p>
              </div>

              {/* Closets */}
              <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition border-2 border-green-200">
                <div className="text-5xl mb-4">🚪</div>
                <h3 className="font-bold mb-2 text-lg text-[#2E7D32]">
                  {t('method.home.where2')}
                </h3>
                <p className="text-gray-600 text-sm">
                  {t('method.home.where2Desc')}
                </p>
              </div>

              {/* Sofas */}
              <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition border-2 border-green-200">
                <div className="text-5xl mb-4">🛋️</div>
                <h3 className="font-bold mb-2 text-lg text-[#2E7D32]">
                  {t('method.home.where3')}
                </h3>
                <p className="text-gray-600 text-sm">
                  {t('method.home.where3Desc')}
                </p>
              </div>

              {/* Textiles */}
              <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition border-2 border-green-200">
                <div className="text-5xl mb-4">🧺</div>
                <h3 className="font-bold mb-2 text-lg text-[#2E7D32]">
                  {t('method.home.where4')}
                </h3>
                <p className="text-gray-600 text-sm">
                  {t('method.home.where4Desc')}
                </p>
              </div>

              {/* Garbage */}
              <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition border-2 border-green-200">
                <div className="text-5xl mb-4">🗑️</div>
                <h3 className="font-bold mb-2 text-lg text-[#2E7D32]">
                  {t('method.home.where5')}
                </h3>
                <p className="text-gray-600 text-sm">
                  {t('method.home.where5Desc')}
                </p>
              </div>

              {/* Car */}
              <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition border-2 border-green-200">
                <div className="text-5xl mb-4">🚗</div>
                <h3 className="font-bold mb-2 text-lg text-[#2E7D32]">
                  {t('method.home.where6')}
                </h3>
                <p className="text-gray-600 text-sm">
                  {t('method.home.where6Desc')}
                </p>
              </div>
            </div>
          </div>

          {/* Advanced Formula */}
          <div className="bg-gradient-to-br from-green-100/50 to-white rounded-2xl shadow-lg p-8 md:p-12 mb-12">
            <h2 className="text-3xl font-bold mb-6 text-[#2E7D32]">
              {t('method.home.formulaTitle')}
            </h2>
            <p className="text-gray-700 text-lg mb-6">
              {t('method.home.formulaIntro')}
            </p>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <span className="text-[#2E7D32] text-xl">●</span>
                <p className="text-gray-700">{t('method.home.formula1')}</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-[#2E7D32] text-xl">●</span>
                <p className="text-gray-700">{t('method.home.formula2')}</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-[#2E7D32] text-xl">●</span>
                <p className="text-gray-700">{t('method.home.formula3')}</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-[#2E7D32] text-xl">●</span>
                <p className="text-gray-700">{t('method.home.formula4')}</p>
              </div>
            </div>
          </div>

          {/* Ingredients */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
              {t('method.home.ingredientsTitle')}
            </h2>
            <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
              {/* Natural */}
              <div className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-xl transition border-2 border-green-200">
                <div className="text-5xl mb-4">🌿</div>
                <h3 className="font-bold mb-2 text-lg text-[#2E7D32]">
                  {t('method.home.ingredient1')}
                </h3>
                <p className="text-gray-600 text-sm">
                  {t('method.home.ingredient1Desc')}
                </p>
              </div>

              {/* Tested */}
              <div className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-xl transition border-2 border-green-200">
                <div className="text-5xl mb-4">🧪</div>
                <h3 className="font-bold mb-2 text-lg text-[#2E7D32]">
                  {t('method.home.ingredient2')}
                </h3>
                <p className="text-gray-600 text-sm">
                  {t('method.home.ingredient2Desc')}
                </p>
              </div>
            </div>
          </div>

          {/* Benefits */}
          <div className="bg-gradient-to-br from-[#43A047] to-[#66BB6A] text-white rounded-2xl shadow-lg p-8 md:p-12 mb-12">
            <h2 className="text-3xl font-bold mb-8 text-center">
              {t('method.home.benefitsTitle')}
            </h2>
            <div className="grid md:grid-cols-2 gap-4 max-w-3xl mx-auto">
              <div className="flex items-start gap-3">
                <span className="text-2xl">✓</span>
                <p className="text-lg">{t('method.home.benefit1')}</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">✓</span>
                <p className="text-lg">{t('method.home.benefit2')}</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">✓</span>
                <p className="text-lg">{t('method.home.benefit3')}</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">✓</span>
                <p className="text-lg">{t('method.home.benefit4')}</p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center bg-gradient-to-br from-[#A5D6A7]/40 to-white rounded-2xl p-12">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">
              {t('method.home.ctaTitle')}
            </h3>
            <p className="text-lg text-gray-700 mb-6">
              {t('method.home.ctaDesc')}
            </p>
            <Link to="/products?category=home">
              <Button size="lg" className="bg-gradient-to-r from-[#43A047] to-[#66BB6A] hover:from-[#388E3C] hover:to-[#4CAF50] text-lg px-8 py-6">
                {t('method.home.ctaButton')}
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}