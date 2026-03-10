import { Link, useSearchParams } from 'react-router';
import { useLanguage } from '../contexts/LanguageContext';
import { useAuth } from '../contexts/AuthContext';
import { Button } from '../components/ui/button';
import { motion } from 'motion/react';
import { CheckCircle, Package, Sparkles, Heart, Mail, Home } from 'lucide-react';

export function OrderConfirmation() {
  const { t } = useLanguage();
  const { user, isAuthenticated } = useAuth();
  const [searchParams] = useSearchParams();
  
  const orderNumber = searchParams.get('order') || `CP${Date.now().toString().slice(-8)}`;
  const userEmail = searchParams.get('email') || user?.email || '';

  // Get user's first name if logged in
  const firstName = user?.name?.split(' ')[0] || '';

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#C9BFDB]/30 via-[#F5C8D8]/20 to-[#EFD95A]/20 py-12 px-6 flex items-center justify-center relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-10 right-20 w-96 h-96 rounded-full bg-gradient-to-br from-[#8B7FB8]/30 to-[#C9BFDB]/20 blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.4, 0.6, 0.4],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-20 left-20 w-80 h-80 rounded-full bg-gradient-to-br from-[#F5C8D8]/40 to-[#FF6B7A]/20 blur-3xl"
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
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-gradient-to-br from-[#7BC4DB]/20 to-[#5BC0EB]/10 blur-3xl"
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="max-w-2xl w-full relative">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', stiffness: 200, damping: 20 }}
          className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 text-center"
        >
          {/* Success Icon with Animation */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ 
              type: 'spring', 
              stiffness: 150, 
              damping: 15,
              delay: 0.2 
            }}
            className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center relative"
          >
            <CheckCircle className="w-14 h-14 text-white" strokeWidth={2.5} />
            
            {/* Confetti sparkles */}
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute"
                initial={{ scale: 0, x: 0, y: 0 }}
                animate={{
                  scale: [0, 1, 0],
                  x: Math.cos((i * Math.PI * 2) / 8) * 60,
                  y: Math.sin((i * Math.PI * 2) / 8) * 60,
                }}
                transition={{
                  duration: 1,
                  delay: 0.5 + i * 0.05,
                  ease: "easeOut"
                }}
              >
                <Sparkles className="w-4 h-4 text-[#EFD95A]" />
              </motion.div>
            ))}
          </motion.div>

          {/* Thank You Message - Personalized if logged in */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            {isAuthenticated && firstName ? (
              <h1 className="text-4xl md:text-5xl font-bold mb-3">
                {t('orderConfirm.thankYou')}, {firstName}! 
                <Heart className="inline-block w-10 h-10 ml-2 text-[#F5C8D8] fill-[#F5C8D8]" />
              </h1>
            ) : (
              <h1 className="text-4xl md:text-5xl font-bold mb-3">
                {t('orderConfirm.thankYouGeneral')} 
                <Heart className="inline-block w-10 h-10 ml-2 text-[#F5C8D8] fill-[#F5C8D8]" />
              </h1>
            )}
            
            <p className="text-xl text-gray-600 mb-8">
              {t('orderConfirm.orderPlaced')}
            </p>
          </motion.div>

          {/* Order Number */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6 }}
            className="bg-gradient-to-r from-[#C9BFDB]/20 to-[#7BC4DB]/20 rounded-xl p-6 mb-8"
          >
            <div className="flex items-center justify-center gap-3 mb-2">
              <Package className="w-6 h-6 text-[#8B7FB8]" />
              <p className="text-sm font-semibold text-gray-600">
                {t('orderConfirm.orderNumber')}
              </p>
            </div>
            <p className="text-3xl font-bold text-[#8B7FB8] font-mono">
              {orderNumber}
            </p>
          </motion.div>

          {/* Email Confirmation */}
          {userEmail && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="mb-8"
            >
              <div className="flex items-center justify-center gap-2 text-gray-600">
                <Mail className="w-5 h-5" />
                <p className="text-sm">
                  {t('orderConfirm.emailSent')} <span className="font-semibold">{userEmail}</span>
                </p>
              </div>
            </motion.div>
          )}

          {/* Cute Messages */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="space-y-4 mb-10"
          >
            <div className="flex items-center justify-center gap-3 p-4 bg-green-50 rounded-lg">
              <Package className="w-6 h-6 text-green-600" />
              <p className="text-gray-700">
                {t('orderConfirm.shipping')}
              </p>
            </div>

            {/* Hope to See You Soon Message */}
            <div className="p-6 bg-gradient-to-r from-[#F5C8D8]/30 to-[#C9BFDB]/30 rounded-xl border-2 border-[#F5C8D8]">
              <p className="text-2xl font-bold text-gray-800 mb-2 flex items-center justify-center gap-2">
                <Sparkles className="w-6 h-6 text-[#EFD95A]" />
                {t('orderConfirm.hopeToSeeYou')}
                <Sparkles className="w-6 h-6 text-[#EFD95A]" />
              </p>
              <p className="text-gray-600">
                {t('orderConfirm.comeBackSoon')}
              </p>
            </div>

            {/* Contact Info */}
            <p className="text-sm text-gray-500">
              {t('orderConfirm.contactUs')} 📞 +57 321 555 1234
            </p>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link to="/">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-[#8B7FB8] to-[#7BC4DB] hover:opacity-90 transition-opacity w-full sm:w-auto"
              >
                <Home className="w-5 h-5 mr-2" />
                {t('orderConfirm.backToHome')}
              </Button>
            </Link>
            <Link to="/products">
              <Button 
                size="lg" 
                variant="outline"
                className="border-2 border-[#8B7FB8] text-[#8B7FB8] hover:bg-[#8B7FB8] hover:text-white transition-all w-full sm:w-auto"
              >
                <Package className="w-5 h-5 mr-2" />
                {t('orderConfirm.viewProducts')}
              </Button>
            </Link>
          </motion.div>
        </motion.div>

        {/* Floating hearts animation */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute pointer-events-none"
            initial={{ 
              bottom: -20, 
              left: `${20 + i * 12}%`,
              opacity: 0 
            }}
            animate={{ 
              bottom: '100%', 
              opacity: [0, 1, 0],
              x: Math.sin(i) * 30
            }}
            transition={{
              duration: 4 + i * 0.5,
              delay: 1.5 + i * 0.3,
              repeat: Infinity,
              repeatDelay: 2
            }}
          >
            <Heart className="w-6 h-6 text-[#F5C8D8] fill-[#F5C8D8]" />
          </motion.div>
        ))}
      </div>
    </div>
  );
}