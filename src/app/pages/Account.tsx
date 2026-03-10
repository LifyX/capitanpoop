import { useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { useLanguage } from '../contexts/LanguageContext';
import { useAuth } from '../contexts/AuthContext';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { motion } from 'motion/react';
import { User, Mail, Phone, Package, CheckCircle, ShoppingBag } from 'lucide-react';
import { toast } from 'sonner';

export function Account() {
  const { t } = useLanguage();
  const { user, logout, updateUser } = useAuth();
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: user?.name || '',
    email: user?.email || '',
    phone: user?.phone || ''
  });

  const handleLogout = () => {
    logout();
    toast.success('Sesión cerrada exitosamente');
    navigate('/');
  };

  const handleSave = () => {
    updateUser(formData);
    setIsEditing(false);
    toast.success('Información actualizada exitosamente');
  };

  if (!user) {
    navigate('/login');
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#C9BFDB]/20 via-[#F4DB5E]/10 to-[#7BC4DB]/20 py-12 px-6">
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
      </div>

      <div className="max-w-4xl mx-auto relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <h1 className="text-4xl font-bold mb-2">{t('account.title')}</h1>
          <p className="text-xl text-gray-600">
            {t('account.welcome')}, {user.name}!
          </p>
          <p className="text-gray-600">{t('account.subtitle')}</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Personal Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="md:col-span-2"
          >
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold flex items-center gap-2">
                  <User className="w-6 h-6 text-[#8B7FB8]" />
                  {t('account.personalInfo')}
                </h2>
                {!isEditing && (
                  <Button
                    variant="outline"
                    onClick={() => setIsEditing(true)}
                  >
                    {t('account.editInfo')}
                  </Button>
                )}
              </div>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    {t('account.name')}
                  </label>
                  {isEditing ? (
                    <Input
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  ) : (
                    <div className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg">
                      <User className="w-5 h-5 text-gray-500" />
                      <span>{user.name}</span>
                    </div>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    {t('account.email')}
                  </label>
                  {isEditing ? (
                    <Input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  ) : (
                    <div className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg">
                      <Mail className="w-5 h-5 text-gray-500" />
                      <span>{user.email}</span>
                    </div>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    {t('account.phone')}
                  </label>
                  {isEditing ? (
                    <Input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  ) : (
                    <div className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg">
                      <Phone className="w-5 h-5 text-gray-500" />
                      <span>{user.phone}</span>
                    </div>
                  )}
                </div>

                {isEditing && (
                  <div className="flex gap-3">
                    <Button onClick={handleSave} className="flex-1">
                      {t('account.saveInfo')}
                    </Button>
                    <Button
                      variant="outline"
                      onClick={() => {
                        setIsEditing(false);
                        setFormData({
                          name: user.name,
                          email: user.email,
                          phone: user.phone
                        });
                      }}
                      className="flex-1"
                    >
                      Cancelar
                    </Button>
                  </div>
                )}
              </div>

              {/* Checkout Benefit Message */}
              <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                  <div>
                    <p className="font-semibold text-green-800 mb-1">
                      {t('account.savedForCheckout')}
                    </p>
                    <p className="text-sm text-green-700">
                      {t('account.checkoutBenefit')}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-6"
          >
            {/* Order History */}
            <div className="bg-white rounded-2xl shadow-xl p-6">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Package className="w-5 h-5 text-[#8B7FB8]" />
                {t('account.orderHistory')}
              </h3>
              <div className="text-center py-8">
                <ShoppingBag className="w-12 h-12 text-gray-300 mx-auto mb-3" />
                <p className="text-gray-500 mb-4">{t('account.noOrders')}</p>
                <Link to="/products">
                  <Button size="sm" variant="outline">
                    {t('account.startShopping')}
                  </Button>
                </Link>
              </div>
            </div>

            {/* Logout Button */}
            <Button
              variant="outline"
              className="w-full text-red-600 border-red-200 hover:bg-red-50"
              onClick={handleLogout}
            >
              {t('account.logoutButton')}
            </Button>

            {/* Back to Home */}
            <Link to="/">
              <Button variant="ghost" className="w-full">
                ← {t('auth.backToHome')}
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
