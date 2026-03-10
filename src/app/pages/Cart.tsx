import { Minus, Plus, Trash2, ShoppingBag } from 'lucide-react';
import { Link, useNavigate } from 'react-router';
import { toast } from 'sonner';
import { motion } from 'motion/react';
import { useLanguage } from '../contexts/LanguageContext';
import { useCart } from '../contexts/CartContext';
import { Button } from '../components/ui/button';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { getProductImage } from '../data/productImages';

export function Cart() {
  const { language, t } = useLanguage();
  const { items, removeFromCart, updateQuantity, totalPrice } = useCart();
  const navigate = useNavigate();

  const handleCheckout = () => {
    navigate('/checkout');
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#F5C8D8]/10 via-white to-[#C9BFDB]/10 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute top-40 right-10 w-96 h-96 rounded-full bg-gradient-to-br from-[#7BC4DB]/20 to-[#5BC0EB]/10 blur-3xl"
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
            className="absolute bottom-20 left-10 w-80 h-80 rounded-full bg-gradient-to-br from-[#EFD95A]/15 to-[#F4DB5E]/10 blur-3xl"
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

        <div className="relative text-center px-6 py-12">
          <div className="w-24 h-24 mx-auto mb-6 bg-gray-100 rounded-full flex items-center justify-center">
            <ShoppingBag className="h-12 w-12 text-gray-400" />
          </div>
          <h1 className="text-3xl font-bold mb-4">{t('cart.empty')}</h1>
          <p className="text-gray-600 mb-8">
            Agrega algunos productos a tu carrito para comenzar a comprar.
          </p>
          <Link to="/products">
            <Button size="lg">
              {t('cart.continueShopping')}
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-6 sm:py-12">
        <h1 className="text-2xl sm:text-4xl font-bold mb-6 sm:mb-8">{t('cart.title')}</h1>

        <div className="grid lg:grid-cols-3 gap-6 sm:gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-3 sm:space-y-4">
            {items.map(item => (
              <div key={item.id} className="bg-white rounded-lg p-4 sm:p-6 shadow-sm">
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                  {/* Product Image */}
                  <div className="w-full sm:w-24 h-32 sm:h-24 flex-shrink-0 bg-gray-100 rounded-lg overflow-hidden">
                    <ImageWithFallback
                      src={getProductImage(item.id)}
                      alt={typeof item.name === 'object' ? item.name[language as keyof typeof item.name] : item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Product Info */}
                  <div className="flex-1">
                    <div className="flex justify-between mb-3 sm:mb-2">
                      <div className="flex-1">
                        <Link
                          to={`/product/${item.id}`}
                          className="text-base sm:text-lg font-semibold hover:text-blue-600 transition block"
                        >
                          {typeof item.name === 'object' ? item.name[language as keyof typeof item.name] : item.name}
                        </Link>
                        <p className="text-sm text-gray-600 mt-1">
                          {item.size}
                        </p>
                      </div>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-red-600 hover:text-red-700 ml-2"
                        aria-label="Remove item"
                      >
                        <Trash2 className="h-5 w-5" />
                      </button>
                    </div>

                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                      {/* Quantity Controls */}
                      <div className="flex items-center gap-2 sm:gap-3">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="h-8 w-8 p-0"
                        >
                          <Minus className="h-4 w-4" />
                        </Button>
                        <span className="w-10 sm:w-12 text-center font-medium">
                          {item.quantity}
                        </span>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="h-8 w-8 p-0"
                        >
                          <Plus className="h-4 w-4" />
                        </Button>
                      </div>

                      {/* Price */}
                      <div className="text-left sm:text-right w-full sm:w-auto">
                        <p className="text-lg sm:text-xl font-bold text-[#5BA3BD]">
                          ${(item.price * item.quantity).toLocaleString('es-CO')}
                        </p>
                        <p className="text-sm text-gray-500">
                          ${item.price.toLocaleString('es-CO')} c/u
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg p-4 sm:p-6 shadow-sm lg:sticky lg:top-24">
              <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Resumen del Pedido</h2>

              <div className="space-y-3 mb-4 sm:mb-6 pb-4 sm:pb-6 border-b">
                <div className="flex justify-between text-sm sm:text-base text-gray-600">
                  <span>{t('cart.subtotal')}</span>
                  <span>${totalPrice.toLocaleString('es-CO')}</span>
                </div>
                <div className="flex justify-between text-sm sm:text-base text-gray-600">
                  <span>{language === 'es' ? 'Envío' : 'Shipping'}</span>
                  <span className="text-green-600 font-semibold">{t('checkout.freeShipping')}</span>
                </div>
              </div>

              <div className="flex justify-between text-lg sm:text-xl font-bold mb-4 sm:mb-6">
                <span>{t('cart.total')}</span>
                <span className="text-[#5BA3BD]">
                  ${totalPrice.toLocaleString('es-CO')}
                </span>
              </div>

              <Button
                size="lg"
                className="w-full mb-3 sm:mb-4 text-base sm:text-lg py-5 sm:py-6"
                onClick={handleCheckout}
              >
                {t('cart.checkout')}
              </Button>

              <Link to="/products">
                <Button variant="outline" size="lg" className="w-full text-base sm:text-lg py-5 sm:py-6">
                  {t('cart.continueShopping')}
                </Button>
              </Link>

              {/* Trust badges */}
              <div className="mt-4 sm:mt-6 pt-4 sm:pt-6 border-t space-y-2 sm:space-y-3">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <span className="text-lg sm:text-xl">✓</span>
                  <span>{t('trust.securePayment')}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <span className="text-lg sm:text-xl">✓</span>
                  <span>{t('trust.natural')}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}