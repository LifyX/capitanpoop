import { Link } from 'react-router';
import { useWishlist } from '../contexts/WishlistContext';
import { useCart } from '../contexts/CartContext';
import { useLanguage } from '../contexts/LanguageContext';
import { Button } from '../components/ui/button';
import { ShoppingCart, Trash2, Heart } from 'lucide-react';
import { motion } from 'motion/react';
import { toast } from 'sonner';
import { getProductImage } from '../data/productImages';

export function Wishlist() {
  const { wishlistItems, removeFromWishlist } = useWishlist();
  const { addToCart } = useCart();
  const { t, language } = useLanguage();

  const handleMoveToCart = (item: any) => {
    addToCart(item);
    removeFromWishlist(item);
    toast.success(t('products.addToCart'));
  };

  const handleRemoveFromWishlist = (item: any) => {
    removeFromWishlist(item);
    toast.success(t('wishlist.removedFromWishlist'));
  };

  // Helper to get localized product name
  const getProductName = (product: any) => {
    if (typeof product.name === 'object') {
      return product.name[language as keyof typeof product.name];
    }
    return product.name;
  };

  if (wishlistItems.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-white to-[#E9F4F2] py-12">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-16"
          >
            <Heart className="h-24 w-24 mx-auto text-gray-300 mb-6" />
            <h1 className="text-3xl font-bold text-gray-900 mb-4">{t('wishlist.title')}</h1>
            <p className="text-gray-600 mb-8">{t('wishlist.empty')}</p>
            <Link to="/products">
              <Button className="bg-gradient-to-r from-[#C9BFDB] to-[#E0D7F0] hover:from-[#B8AECB] hover:to-[#D0C7E0] text-gray-800 shadow-md">
                {t('wishlist.viewProducts')}
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-[#E9F4F2] py-12">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">{t('wishlist.title')}</h1>
            <p className="text-gray-600">
              {wishlistItems.length} {wishlistItems.length === 1 ? 'producto' : 'productos'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {wishlistItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="relative aspect-square">
                  <img
                    src={getProductImage(item.id)}
                    alt={getProductName(item)}
                    className="w-full h-full object-cover"
                  />
                  <button
                    onClick={() => handleRemoveFromWishlist(item)}
                    className="absolute top-2 right-2 p-2 bg-white rounded-full shadow-md hover:bg-red-50 transition"
                    aria-label={t('wishlist.removeFromWishlist')}
                  >
                    <Trash2 className="h-5 w-5 text-red-600" />
                  </button>
                </div>
                
                <div className="p-4">
                  <Link to={`/product/${item.id}`}>
                    <h3 className="font-semibold text-gray-900 mb-2 hover:text-[#7BC4DB] transition">
                      {getProductName(item)}
                    </h3>
                  </Link>
                  
                  <p className="text-sm text-gray-600 mb-3 capitalize">
                    {item.category === 'bathroom' ? t('nav.bathroom') : t('nav.home_category')}
                  </p>
                  
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-bold text-[#5BA3BD]">
                      ${item.price.toLocaleString('es-CO')}
                    </span>
                  </div>

                  <Button
                    onClick={() => handleMoveToCart(item)}
                    className="w-full bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white flex items-center justify-center gap-2"
                  >
                    <ShoppingCart className="h-4 w-4" />
                    {t('wishlist.moveToCart')}
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link to="/products">
              <Button variant="outline" className="border-gray-300">
                {t('wishlist.continueShopping')}
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}