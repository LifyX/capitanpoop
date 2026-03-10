import { useLanguage } from '../contexts/LanguageContext';
import { ShoppingCart, Truck, CreditCard, Check } from 'lucide-react';
import { motion } from 'motion/react';

interface CheckoutProgressProps {
  currentStep: 'cart' | 'delivery' | 'payment';
}

export function CheckoutProgress({ currentStep }: CheckoutProgressProps) {
  const { t } = useLanguage();

  const steps = [
    {
      id: 'cart',
      label: t('checkout.steps.cart'),
      icon: ShoppingCart,
    },
    {
      id: 'delivery',
      label: t('checkout.steps.delivery'),
      icon: Truck,
    },
    {
      id: 'payment',
      label: t('checkout.steps.payment'),
      icon: CreditCard,
    },
  ];

  const getStepStatus = (stepId: string) => {
    const stepIndex = steps.findIndex(s => s.id === stepId);
    const currentIndex = steps.findIndex(s => s.id === currentStep);
    
    if (stepIndex < currentIndex) return 'completed';
    if (stepIndex === currentIndex) return 'current';
    return 'upcoming';
  };

  return (
    <div className="w-full max-w-3xl mx-auto mb-12">
      <div className="relative">
        {/* Progress Line Background */}
        <div className="absolute top-8 left-0 right-0 h-1 bg-gray-200" />
        
        {/* Animated Progress Line */}
        <motion.div
          className="absolute top-8 left-0 h-1 bg-gradient-to-r from-[#8B7FB8] to-[#7BC4DB]"
          initial={{ width: '0%' }}
          animate={{
            width: currentStep === 'cart' ? '0%' : currentStep === 'delivery' ? '50%' : '100%'
          }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
        />

        {/* Steps */}
        <div className="relative flex justify-between">
          {steps.map((step, index) => {
            const status = getStepStatus(step.id);
            const Icon = step.icon;
            
            return (
              <div key={step.id} className="flex flex-col items-center">
                {/* Step Circle */}
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className={`
                    relative w-16 h-16 rounded-full flex items-center justify-center
                    transition-all duration-300 shadow-lg
                    ${status === 'completed' 
                      ? 'bg-gradient-to-br from-green-400 to-green-600 text-white' 
                      : status === 'current'
                      ? 'bg-gradient-to-br from-[#8B7FB8] to-[#7BC4DB] text-white scale-110'
                      : 'bg-white text-gray-400 border-2 border-gray-200'
                    }
                  `}
                >
                  {status === 'completed' ? (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: 'spring', stiffness: 200, damping: 10 }}
                    >
                      <Check className="w-8 h-8" />
                    </motion.div>
                  ) : (
                    <Icon className={`w-7 h-7 ${status === 'current' ? 'animate-pulse' : ''}`} />
                  )}
                  
                  {/* Glow Effect for Current Step */}
                  {status === 'current' && (
                    <motion.div
                      className="absolute inset-0 rounded-full bg-gradient-to-br from-[#8B7FB8] to-[#7BC4DB] opacity-50 blur-xl"
                      animate={{
                        scale: [1, 1.3, 1],
                        opacity: [0.5, 0.3, 0.5],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: 'easeInOut',
                      }}
                    />
                  )}
                </motion.div>

                {/* Step Label */}
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.2 }}
                  className={`
                    mt-3 text-sm font-semibold transition-all duration-300
                    ${status === 'completed' || status === 'current'
                      ? 'text-gray-900'
                      : 'text-gray-400'
                    }
                  `}
                >
                  {step.label}
                </motion.p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
