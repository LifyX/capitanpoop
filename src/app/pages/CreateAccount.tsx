import { useState } from 'react';
import { Link } from 'react-router';
import { useLanguage } from '../contexts/LanguageContext';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { toast } from 'sonner';
import { motion } from 'motion/react';
import { CheckCircle, Mail } from 'lucide-react';
import logoImage from '../../assets/2b7c7e01209ff2d4c80d1f9fe0f91e6b30731e2b.png';

export function CreateAccount() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: ''
  });
  const [accountCreated, setAccountCreated] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      toast.error('Las contraseñas no coinciden');
      return;
    }
    // Simulate account creation
    setAccountCreated(true);
  };

  const handleResendLink = () => {
    toast.success('Link reenviado exitosamente');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#C9BFDB]/20 via-[#F4DB5E]/10 to-[#7BC4DB]/20 flex items-center justify-center px-6 py-12 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 right-10 w-96 h-96 rounded-full bg-gradient-to-br from-[#F5C8D8]/25 to-[#FF6B7A]/15 blur-3xl"
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
          className="absolute bottom-10 left-10 w-80 h-80 rounded-full bg-gradient-to-br from-[#8B7FB8]/20 to-[#C9BFDB]/15 blur-3xl"
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
          className="absolute top-1/2 right-1/3 w-72 h-72 rounded-full bg-gradient-to-br from-[#7BC4DB]/20 to-[#5BC0EB]/10 blur-3xl"
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

      <div className="relative w-full max-w-md">
        <div className="text-center mb-8">
          <Link to="/" className="inline-block mb-6">
            <motion.img
              whileHover={{ scale: 1.05, rotate: 2 }}
              transition={{ type: "spring", stiffness: 300 }}
              src={logoImage}
              alt="Capitan Poop"
              className="h-16 w-auto mx-auto"
            />
          </Link>
          <h1 className="text-3xl font-bold mb-2">{t('auth.createAccount')}</h1>
          <p className="text-gray-600">
            {t('auth.createAccountSubtitle')}
          </p>
        </div>

        {!accountCreated ? (
          <>
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    {t('contact.name')}
                  </label>
                  <Input
                    id="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder={t('contact.name')}
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    {t('auth.email')}
                  </label>
                  <Input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="[email protected]"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-2">
                    {t('contact.phone')}
                  </label>
                  <Input
                    id="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+1234567890"
                  />
                </div>

                <div>
                  <label htmlFor="password" className="block text-sm font-medium mb-2">
                    {t('auth.password')}
                  </label>
                  <Input
                    id="password"
                    type="password"
                    required
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    placeholder="••••••••"
                  />
                </div>

                <div>
                  <label htmlFor="confirmPassword" className="block text-sm font-medium mb-2">
                    {t('auth.confirmPassword')}
                  </label>
                  <Input
                    id="confirmPassword"
                    type="password"
                    required
                    value={formData.confirmPassword}
                    onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                    placeholder="••••••••"
                  />
                </div>

                <div className="flex items-start gap-2 text-sm">
                  <input type="checkbox" required className="mt-1 rounded" />
                  <span className="text-gray-600">
                    {t('auth.termsAndConditions')}
                  </span>
                </div>

                <Button type="submit" size="lg" className="w-full">
                  {t('auth.createAccount')}
                </Button>
              </form>

              <div className="mt-6 text-center text-sm text-gray-600">
                {t('auth.hasAccount')}{' '}
                <Link to="/login" className="text-blue-600 font-semibold hover:underline">
                  {t('auth.login')}
                </Link>
              </div>
            </div>

            <div className="mt-6 text-center">
              <Link to="/" className="text-sm text-gray-600 hover:text-blue-600">
                ← {t('auth.backToHome')}
              </Link>
            </div>
          </>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-2xl shadow-xl p-8"
          >
            {/* Success Icon */}
            <div className="flex justify-center mb-6">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                className="bg-green-100 rounded-full p-4"
              >
                <CheckCircle className="w-16 h-16 text-green-600" />
              </motion.div>
            </div>

            {/* Benefit Message */}
            <div className="text-center mb-6">
              <p className="text-lg font-semibold text-gray-800">
                {t('auth.successBenefit')}
              </p>
            </div>

            {/* Success Title */}
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-3">
                {t('auth.successTitle')}
              </h2>
              <div className="flex items-center justify-center gap-2 text-gray-600">
                <Mail className="w-5 h-5 text-blue-600" />
                <p>
                  {t('auth.successMessage')}{' '}
                  <span className="font-semibold text-blue-600">{formData.email}</span>{' '}
                  {t('auth.successMessageEnd')}
                </p>
              </div>
            </div>

            {/* Divider */}
            <div className="border-t border-gray-200 my-6"></div>

            {/* Resend Link */}
            <div className="text-center">
              <p className="text-sm text-gray-600 mb-3">
                {t('auth.resendLink')}
              </p>
              <Button
                variant="outline"
                onClick={handleResendLink}
                className="w-full"
              >
                {t('auth.resendButton')}
              </Button>
            </div>

            {/* Back to Home */}
            <div className="mt-6 text-center">
              <Link to="/" className="text-sm text-gray-600 hover:text-blue-600">
                ← {t('auth.backToHome')}
              </Link>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}