import { Link } from 'react-router';
import { useCart } from '../contexts/CartContext';
import { useWishlist } from '../contexts/WishlistContext';
import { Product } from '../types/product';
import { useLanguage } from '../contexts/LanguageContext';
import { Button } from './ui/button';
import { motion } from 'motion/react';
import { ShoppingCart, Heart } from 'lucide-react';
import { getProductImage } from '../data/productImages';
import { toast } from 'sonner';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();
  const { addToWishlist, removeFromWishlist, isProductInWishlist } = useWishlist();
  const { t, language } = useLanguage();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    addToCart(product);
  };

  const handleAddToWishlist = (e: React.MouseEvent) => {
    e.preventDefault();
    addToWishlist(product);
    toast.success(t('products.addedToWishlist'));
  };

  const handleRemoveFromWishlist = (e: React.MouseEvent) => {
    e.preventDefault();
    removeFromWishlist(product);
    toast.success(t('products.removedFromWishlist'));
  };

  const installments = Math.floor(product.price / 1500);
  
  // Extract language-specific text
  const productName = typeof product.name === 'object' ? product.name[language as keyof typeof product.name] : product.name;
  const productDescription = typeof product.description === 'object' ? product.description[language as keyof typeof product.description] : product.description;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      <Link to={`/product/${product.id}`}>
        <div className="group relative overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm hover:shadow-2xl transition-all duration-300">
          {/* Sale Badge */}
          {product.onSale && (
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="absolute top-4 right-4 z-10 bg-gradient-to-r from-red-500 to-pink-500 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg"
            >
              {t('products.sale')}
            </motion.div>
          )}

          {/* Image Container */}
          <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-blue-50 to-green-50">
            <motion.img
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.4 }}
              src={getProductImage(product.id)}
              alt={productName}
              className={`h-full w-full object-cover ${!product.inStock ? 'opacity-60' : ''}`}
            />
            
            {/* Out of Stock Badge */}
            {!product.inStock && (
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gray-900/80 text-white px-6 py-3 rounded-lg font-bold text-lg">
                {t('products.outOfStock')}
              </div>
            )}
            
            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
              <p className="text-white text-sm line-clamp-2">{productDescription}</p>
            </div>
          </div>

          {/* Content */}
          <div className="p-5">
            <div className="mb-2">
              <motion.span
                whileHover={{ scale: 1.05 }}
                className="inline-block text-xs font-medium px-3 py-1 rounded-full bg-gradient-to-r from-[#C9BFDB]/50 to-[#7BC4DB]/50 text-gray-700"
              >
                {product.category === 'bathroom' ? t('nav.bathroom') : t('nav.home_category')}
              </motion.span>
            </div>

            <h3 className="text-lg font-bold mb-2 text-gray-800 group-hover:text-[#8B7FB8] transition-colors">
              {productName}
            </h3>
            
            <p className="text-sm text-gray-600 mb-4 line-clamp-2">
              {productDescription}
            </p>

            {/* Price */}
            <div className="mb-4">
              <div className="text-2xl font-bold text-[#5BA3BD]">
                ${product.price.toLocaleString()}
              </div>
              {product.installments && (
                <div className="text-sm text-gray-500">
                  {product.installments.months} {t('products.installments')} ${product.installments.amount.toLocaleString()}
                </div>
              )}
            </div>

            {/* Action Buttons */}
            <div className="flex gap-2">
              {/* Add to Cart Button */}
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="flex-1">
                <Button
                  onClick={handleAddToCart}
                  disabled={!product.inStock}
                  className={`w-full ${
                    product.inStock
                      ? 'bg-gradient-to-r from-[#7BC4DB] to-[#5BC0EB] hover:from-[#6AB3CA] hover:to-[#4AB0DA] text-white shadow-md'
                      : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  }`}
                  size="lg"
                >
                  <ShoppingCart className="h-5 w-5" />
                  <span className="ml-2 hidden sm:inline">{product.inStock ? t('products.addToCart') : t('products.outOfStock')}</span>
                </Button>
              </motion.div>

              {/* Add to Wishlist Button */}
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button
                  onClick={isProductInWishlist(product) ? handleRemoveFromWishlist : handleAddToWishlist}
                  className={`${
                    isProductInWishlist(product)
                      ? 'bg-[#FF6B9D] hover:bg-[#FF5A8D] text-white shadow-md'
                      : 'bg-white hover:bg-gray-50 text-[#FF6B9D] border-2 border-[#FF6B9D] shadow-sm'
                  }`}
                  size="lg"
                  aria-label={isProductInWishlist(product) ? t('products.removeFromWishlist') : t('products.addToWishlist')}
                >
                  <Heart 
                    className={`h-5 w-5 ${isProductInWishlist(product) ? 'fill-white' : 'fill-[#FF6B9D]'}`} 
                  />
                </Button>
              </motion.div>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}