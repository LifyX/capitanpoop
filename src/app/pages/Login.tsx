import { useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { useLanguage } from '../contexts/LanguageContext';
import { useAuth } from '../contexts/AuthContext';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { toast } from 'sonner';
import { motion } from 'motion/react';
import logoImage from '../../assets/2b7c7e01209ff2d4c80d1f9fe0f91e6b30731e2b.png';

export function Login() {
  const { t } = useLanguage();
  const { login } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    login(email, password);
    toast.success(t('auth.login') + ' exitoso');
    navigate('/account');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#7BC4DB]/20 via-[#F5C8D8]/15 to-[#C9BFDB]/20 flex items-center justify-center px-6 py-12 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 -right-20 w-96 h-96 rounded-full bg-gradient-to-br from-[#8B7FB8]/25 to-[#C9BFDB]/15 blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-20 -left-20 w-80 h-80 rounded-full bg-gradient-to-br from-[#7BC4DB]/25 to-[#5BC0EB]/15 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.25, 0.45, 0.25],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 w-72 h-72 rounded-full bg-gradient-to-br from-[#F4DB5E]/20 to-[#EFD95A]/10 blur-3xl"
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
          <h1 className="text-3xl font-bold mb-2">{t('auth.login')}</h1>
          <p className="text-gray-600">
            {t('auth.subtitle')}
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                {t('auth.email')}
              </label>
              <Input
                id="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="[email protected]"
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
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
              />
            </div>

            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2">
                <input type="checkbox" className="rounded" />
                <span>{t('auth.rememberMe')}</span>
              </label>
              <a href="#" className="text-blue-600 hover:underline">
                {t('auth.forgotPassword')}
              </a>
            </div>

            <Button type="submit" size="lg" className="w-full">
              {t('auth.login')}
            </Button>
          </form>

          <div className="mt-6 text-center text-sm text-gray-600">
            {t('auth.noAccount')}{' '}
            <Link to="/create-account" className="text-blue-600 font-semibold hover:underline">
              {t('auth.createAccount')}
            </Link>
          </div>
        </div>

        <div className="mt-6 text-center">
          <Link to="/" className="text-sm text-gray-600 hover:text-blue-600">
            ← {t('auth.backToHome')}
          </Link>
        </div>
      </div>
    </div>
  );
}