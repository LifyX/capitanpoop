import { useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { useLanguage } from '../contexts/LanguageContext';
import { useAuth } from '../contexts/AuthContext';
import { useCart } from '../contexts/CartContext';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { toast } from 'sonner';
import { motion } from 'motion/react';
import { ShoppingBag, Lock, CreditCard, Package, CheckCircle, User, Mail, Phone, MapPin } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { getProductImage } from '../data/productImages';
import { CheckoutProgress } from '../components/CheckoutProgress';

export function Checkout() {
  const { t, language } = useLanguage();
  const { user, isAuthenticated } = useAuth();
  const { items, totalPrice, clearCart } = useCart();
  const navigate = useNavigate();

  const [paymentMethod, setPaymentMethod] = useState<'card' | 'mercadopago' | 'pse'>('mercadopago');
  const [shippingInfo, setShippingInfo] = useState({
    firstName: user?.name?.split(' ')[0] || '',
    lastName: user?.name?.split(' ')[1] || '',
    email: user?.email || '',
    phone: user?.phone || '',
    address: '',
    city: '',
    state: '',
    zipCode: ''
  });

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();
    // Clear the cart before navigating to confirmation
    clearCart();
    // Navigate to order confirmation with order details
    const orderNumber = `CP${Date.now().toString().slice(-8)}`;
    navigate(`/order-confirmation?order=${orderNumber}&email=${shippingInfo.email}`);
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#F5C8D8]/10 via-white to-[#C9BFDB]/10 flex items-center justify-center px-6">
        <div className="text-center">
          <ShoppingBag className="w-24 h-24 text-gray-300 mx-auto mb-6" />
          <h1 className="text-3xl font-bold mb-4">{t('checkout.emptyCart')}</h1>
          <Link to="/products">
            <Button size="lg">{t('checkout.continueShopping')}</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#C9BFDB]/20 via-[#F4DB5E]/10 to-[#7BC4DB]/20 py-6 sm:py-12 px-4 sm:px-6">
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

      <div className="max-w-6xl mx-auto relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-6 sm:mb-8"
        >
          <h1 className="text-2xl sm:text-4xl font-bold mb-2">{t('checkout.title')}</h1>
          <div className="flex items-center justify-center gap-2 text-green-600">
            <Lock className="w-4 h-4 sm:w-5 sm:h-5" />
            <span className="text-sm sm:text-base font-semibold">{t('checkout.secureCheckout')}</span>
          </div>
        </motion.div>

        {/* Checkout Progress Stepper */}
        <CheckoutProgress currentStep="delivery" />

        <div className="grid lg:grid-cols-3 gap-6 sm:gap-8">
          {/* Left Column - Shipping & Payment */}
          <div className="lg:col-span-2 space-y-4 sm:space-y-6">
            {/* Shipping Information */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-xl sm:rounded-2xl shadow-xl p-4 sm:p-8"
            >
              <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 flex items-center gap-2">
                <Package className="w-5 h-5 sm:w-6 sm:h-6 text-[#8B7FB8]" />
                {t('checkout.shippingInfo')}
              </h2>

              {/* Saved Info Banner */}
              {isAuthenticated && (
                <div className="mb-4 sm:mb-6 p-3 sm:p-4 bg-green-50 border border-green-200 rounded-lg">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-sm sm:text-base font-semibold text-green-800">
                        {t('checkout.savedInfo')}
                      </p>
                      <p className="text-xs sm:text-sm text-green-700 break-all">
                        {user?.email}
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Not Logged In Banner */}
              {!isAuthenticated && (
                <div className="mb-4 sm:mb-6 p-3 sm:p-4 bg-blue-50 border border-blue-200 rounded-lg">
                  <div className="flex items-start gap-3">
                    <User className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-sm sm:text-base font-semibold text-blue-800">
                        {t('checkout.notLoggedIn')}
                      </p>
                      <Link to="/login" className="text-xs sm:text-sm text-blue-600 hover:underline">
                        {t('auth.login')}
                      </Link>
                    </div>
                  </div>
                </div>
              )}

              <form onSubmit={handlePlaceOrder} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      {t('checkout.firstName')}
                    </label>
                    <Input
                      required
                      value={shippingInfo.firstName}
                      onChange={(e) => setShippingInfo({ ...shippingInfo, firstName: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      {t('checkout.lastName')}
                    </label>
                    <Input
                      required
                      value={shippingInfo.lastName}
                      onChange={(e) => setShippingInfo({ ...shippingInfo, lastName: e.target.value })}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    {t('auth.email')}
                  </label>
                  <Input
                    type="email"
                    required
                    value={shippingInfo.email}
                    onChange={(e) => setShippingInfo({ ...shippingInfo, email: e.target.value })}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    {t('auth.phone')}
                  </label>
                  <Input
                    id="phone"
                    type="tel"
                    required
                    value={shippingInfo.phone}
                    onChange={(e) => setShippingInfo({ ...shippingInfo, phone: e.target.value })}
                    placeholder="+57 321 555 1234"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    {t('checkout.address')}
                  </label>
                  <Input
                    required
                    value={shippingInfo.address}
                    onChange={(e) => setShippingInfo({ ...shippingInfo, address: e.target.value })}
                    placeholder="Calle 123 #45-67"
                  />
                </div>

                <div className="grid sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      {t('checkout.city')}
                    </label>
                    <Input
                      required
                      value={shippingInfo.city}
                      onChange={(e) => setShippingInfo({ ...shippingInfo, city: e.target.value })}
                      placeholder="Bogotá"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      {t('checkout.state')}
                    </label>
                    <Input
                      required
                      value={shippingInfo.state}
                      onChange={(e) => setShippingInfo({ ...shippingInfo, state: e.target.value })}
                      placeholder="Cundinamarca"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      {t('checkout.zipCode')}
                    </label>
                    <Input
                      required
                      value={shippingInfo.zipCode}
                      onChange={(e) => setShippingInfo({ ...shippingInfo, zipCode: e.target.value })}
                      placeholder="110111"
                    />
                  </div>
                </div>

                {/* Payment Method */}
                <div className="pt-4 sm:pt-6">
                  <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 flex items-center gap-2">
                    <CreditCard className="w-5 h-5 text-[#8B7FB8]" />
                    {t('checkout.paymentMethod')}
                  </h3>

                  <div className="space-y-3">
                    <label className="flex items-center gap-3 p-3 sm:p-4 border-2 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors">
                      <input
                        type="radio"
                        name="paymentMethod"
                        value="mercadopago"
                        checked={paymentMethod === 'mercadopago'}
                        onChange={(e) => setPaymentMethod(e.target.value as any)}
                        className="w-4 h-4 flex-shrink-0"
                      />
                      <span className="text-sm sm:text-base font-medium">{t('checkout.mercadoPago')}</span>
                    </label>

                    <label className="flex items-center gap-3 p-3 sm:p-4 border-2 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors">
                      <input
                        type="radio"
                        name="paymentMethod"
                        value="card"
                        checked={paymentMethod === 'card'}
                        onChange={(e) => setPaymentMethod(e.target.value as any)}
                        className="w-4 h-4 flex-shrink-0"
                      />
                      <span className="text-sm sm:text-base font-medium">{t('checkout.creditCard')}</span>
                    </label>

                    <label className="flex items-center gap-3 p-3 sm:p-4 border-2 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors">
                      <input
                        type="radio"
                        name="paymentMethod"
                        value="pse"
                        checked={paymentMethod === 'pse'}
                        onChange={(e) => setPaymentMethod(e.target.value as any)}
                        className="w-4 h-4 flex-shrink-0"
                      />
                      <span className="text-sm sm:text-base font-medium">{t('checkout.pse')}</span>
                    </label>
                  </div>
                </div>

                {/* Place Order Button */}
                <Button
                  type="submit"
                  size="lg"
                  className="w-full mt-4 sm:mt-6 bg-gradient-to-r from-[#8B7FB8] to-[#7BC4DB] hover:opacity-90 transition-opacity text-base sm:text-lg py-5 sm:py-6"
                >
                  <Lock className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                  {t('checkout.placeOrder')}
                </Button>
              </form>
            </motion.div>
          </div>

          {/* Right Column - Order Summary */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-1"
          >
            <div className="bg-white rounded-xl sm:rounded-2xl shadow-xl p-4 sm:p-8 lg:sticky lg:top-6">
              <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">{t('checkout.orderSummary')}</h2>

              {/* Products */}
              <div className="space-y-3 sm:space-y-4 mb-4 sm:mb-6">
                {items.map((item) => {
                  const productName = typeof item.name === 'object' ? item.name[language] : item.name;
                  return (
                    <div key={item.id} className="flex gap-3">
                      <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0">
                        <ImageWithFallback
                          src={getProductImage(item.id)}
                          alt={productName}
                          className="w-full h-full object-cover"
                          query={productName}
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-medium text-xs sm:text-sm truncate">{productName}</p>
                        <p className="text-xs sm:text-sm text-gray-600">
                          {item.quantity} x ${item.price.toLocaleString('es-CO')}
                        </p>
                      </div>
                      <div className="text-sm sm:text-base font-semibold whitespace-nowrap">
                        ${(item.price * item.quantity).toLocaleString('es-CO')}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Totals */}
              <div className="border-t pt-4 sm:pt-6 flex justify-between items-center">
                <span className="text-lg sm:text-xl font-bold">{t('checkout.total')}</span>
                <span className="text-xl sm:text-2xl font-bold text-[#5BA3BD]">
                  ${totalPrice.toLocaleString('es-CO')}
                </span>
              </div>

              {/* Trust Badges */}
              <div className="mt-4 sm:mt-6 pt-4 sm:pt-6 border-t space-y-2 sm:space-y-3">
                <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-600">
                  <Lock className="w-4 h-4 text-green-600 flex-shrink-0" />
                  <span>{t('trust.securePayment')}</span>
                </div>
                <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                  <span>{t('trust.natural')}</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}