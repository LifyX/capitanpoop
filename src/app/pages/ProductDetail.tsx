import { useState } from 'react';
import { Link, useParams } from 'react-router';
import { useLanguage } from '../contexts/LanguageContext';
import { useCart } from '../contexts/CartContext';
import { products, getProductImage } from '../data/products';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { ArrowLeft, Shield, RefreshCw, X, ZoomIn } from 'lucide-react';
import { toast } from 'sonner';
import { motion } from 'motion/react';

// Additional product images
import additionalImage1 from '../../assets/a418d0956b6e5712196fd31143ebe4293eaff038.png';
import additionalImage2 from '../../assets/76db0cf464d91759d3bc027bcfbb31a7e0a46c43.png';
import additionalImage3 from '../../assets/27bc4d7aa33bca391c4084cb9f675cbdc41841b9.png';

export function ProductDetail() {
  const { id } = useParams();
  const { language, t } = useLanguage();
  const { addToCart } = useCart();
  const [showInstallmentsModal, setShowInstallmentsModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(0);
  const [showZoom, setShowZoom] = useState(false);
  const [zoomLevel, setZoomLevel] = useState(1);
  const [panPosition, setPanPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });

  const product = products.find(p => p.id === id);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Producto no encontrado</h1>
          <Link to="/products">
            <Button>Ver todos los productos</Button>
          </Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    if (!product.inStock) return;
    addToCart(product);
    toast.success(`${product.name[language]} agregado al carrito`);
  };

  // Reset zoom and pan when modal closes
  const handleCloseZoom = () => {
    setShowZoom(false);
    setZoomLevel(1);
    setPanPosition({ x: 0, y: 0 });
  };

  // Handle mouse wheel zoom
  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    const delta = e.deltaY > 0 ? -0.2 : 0.2;
    setZoomLevel(prev => Math.min(Math.max(1, prev + delta), 3));
  };

  // Handle mouse down for dragging
  const handleMouseDown = (e: React.MouseEvent) => {
    if (zoomLevel > 1) {
      setIsDragging(true);
      setDragStart({ x: e.clientX - panPosition.x, y: e.clientY - panPosition.y });
    }
  };

  // Handle mouse move for dragging
  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging && zoomLevel > 1) {
      setPanPosition({
        x: e.clientX - dragStart.x,
        y: e.clientY - dragStart.y
      });
    }
  };

  // Handle mouse up to stop dragging
  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // Gallery images array - use product-specific images if available, otherwise use default
  const galleryImages = product.galleryImages && product.galleryImages.length > 0
    ? [getProductImage(product.id), ...product.galleryImages]
    : [
        getProductImage(product.id),
        additionalImage1,
        additionalImage2,
        additionalImage3
      ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#7BC4DB]/8 via-white to-[#C9BFDB]/8 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-40 right-20 w-80 h-80 rounded-full bg-gradient-to-br from-[#F5C8D8]/15 to-[#FF6B7A]/10 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.25, 0.4, 0.25],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-20 left-20 w-72 h-72 rounded-full bg-gradient-to-br from-[#8B7FB8]/15 to-[#C9BFDB]/10 blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.35, 0.2],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-12">
        {/* Back Button */}
        <Link to="/products" className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-blue-600 mb-8">
          <ArrowLeft className="h-4 w-4" />
          Volver a productos
        </Link>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Image Section */}
          <div>
            <div className="aspect-square overflow-hidden rounded-2xl bg-gray-100 shadow-xl relative group">
              <ImageWithFallback
                src={galleryImages[selectedImage]}
                alt={product.name[language]}
                className="w-full h-full object-cover cursor-pointer"
                onClick={() => setShowZoom(true)}
              />
              <button
                className="absolute top-4 right-4 bg-white bg-opacity-90 hover:bg-opacity-100 rounded-full p-3 shadow-lg transition-all duration-200 opacity-0 group-hover:opacity-100"
                onClick={() => setShowZoom(true)}
                aria-label="Zoom image"
              >
                <ZoomIn className="h-5 w-5 text-gray-700" />
              </button>
            </div>
            <div className="flex items-center justify-center gap-3 mt-4">
              {galleryImages.map((image, index) => (
                <button
                  key={index}
                  className={`w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${
                    selectedImage === index 
                      ? 'border-blue-600 ring-2 ring-blue-300' 
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                  onClick={() => setSelectedImage(index)}
                >
                  <ImageWithFallback
                    src={image}
                    alt={`${product.name[language]} - imagen ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <h1 className="text-4xl font-bold mb-2">{product.name[language]}</h1>
              {product.tagline && (
                <p className="text-lg text-gray-600 italic mb-3">{product.tagline[language]}</p>
              )}
              <div className="flex items-center gap-3">
                {product.inStock ? (
                  <Badge className="bg-green-500">{t('products.inStock')}</Badge>
                ) : (
                  <Badge variant="secondary">{t('products.outOfStock')}</Badge>
                )}
                <Badge variant="outline" className="text-green-600 border-green-600">
                  {t('detail.natural')}
                </Badge>
              </div>
            </div>

            <div className="border-t border-b py-6">
              <p className="text-4xl font-bold text-[#3B7A94] mb-2">
                ${product.price.toLocaleString('es-CO')}
              </p>
              {product.installments && (
                <button
                  onClick={() => setShowInstallmentsModal(true)}
                  className="text-sm text-blue-600 hover:underline mt-2"
                >
                  o en {product.installments.months} cuotas sin intereses de ${product.installments.amount.toLocaleString('es-CO')}
                  <br />
                  Ver el detalle de las cuotas
                </button>
              )}
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-3">{t('detail.description')}</h2>
              <p className="text-gray-700 leading-relaxed">
                {product.description[language]}
              </p>
              {product.longDescription && (
                <p className="text-gray-700 leading-relaxed mt-3">
                  {product.longDescription[language]}
                </p>
              )}
            </div>

            {product.features && product.features[language].length > 0 && (
              <div>
                <h2 className="text-xl font-semibold mb-3">Características</h2>
                <div className="grid grid-cols-2 gap-3">
                  {product.features[language].map((feature, index) => (
                    <div key={index} className="flex items-center gap-2 text-sm">
                      <span className="text-green-600">✓</span>
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div>
              <h2 className="text-xl font-semibold mb-3">{t('detail.howToUse')}</h2>
              <ol className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="font-semibold text-blue-600">1.</span>
                  {t('howToUse.step1Desc')}
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-semibold text-blue-600">2.</span>
                  {t('howToUse.step2Desc')}
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-semibold text-blue-600">3.</span>
                  {t('howToUse.step3Desc')}
                </li>
              </ol>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-3">{t('detail.ingredients')}</h2>
              <p className="text-gray-700">
                {t('howItWorks.ingredients')}
              </p>
            </div>

            <div className="pt-6">
              <Button
                size="lg"
                className="w-full text-lg py-6"
                onClick={handleAddToCart}
                disabled={!product.inStock}
              >
                {product.inStock ? t('products.addToCart') : t('products.outOfStock')}
              </Button>
            </div>

            {/* Trust badges */}
            <div className="grid grid-cols-2 gap-4 pt-6 border-t">
              <div className="text-center">
                <div className="text-3xl mb-1">🌿</div>
                <p className="text-xs text-gray-600">{t('trust.natural')}</p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-1">🔒</div>
                <p className="text-xs text-gray-600">Pago Seguro</p>
              </div>
            </div>

            {/* Additional Trust Information */}
            <div className="space-y-4 pt-6 border-t">
              <div className="flex items-start gap-3">
                <Shield className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Compra protegida</h3>
                  <p className="text-sm text-gray-600">Tus datos cuidados durante toda la compra.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <RefreshCw className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Cambios y devoluciones</h3>
                  <p className="text-sm text-gray-600">Si no te gusta, podés cambiarlo por otro o devolverlo.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Similar Products Section */}
        <div className="mt-16 border-t pt-12">
          <h2 className="text-3xl font-bold mb-8 text-center">
            {language === 'es' ? 'Productos similares' : 'Similar products'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products
              .filter(p => p.category === product.category && p.id !== product.id)
              .slice(0, 4)
              .map((similarProduct) => (
                <Link
                  key={similarProduct.id}
                  to={`/product/${similarProduct.id}`}
                  className="group"
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                >
                  <div className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                    <div className="aspect-square overflow-hidden bg-gray-100">
                      <ImageWithFallback
                        src={getProductImage(similarProduct.id)}
                        alt={similarProduct.name[language]}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">
                        {similarProduct.name[language]}
                      </h3>
                      <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                        {similarProduct.description[language]}
                      </p>
                      <div className="flex items-center justify-between">
                        <p className="text-xl font-bold text-[#5BA3BD]">
                          ${similarProduct.price.toLocaleString('es-CO')}
                        </p>
                        {!similarProduct.inStock && (
                          <Badge variant="secondary" className="text-xs">
                            {t('products.outOfStock')}
                          </Badge>
                        )}
                      </div>
                      {similarProduct.installments && (
                        <p className="text-xs text-gray-500 mt-2">
                          {similarProduct.installments.months}x ${similarProduct.installments.amount.toLocaleString('es-CO')}
                        </p>
                      )}
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </div>

      {/* Installments Modal */}
      {showInstallmentsModal && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
          onClick={() => setShowInstallmentsModal(false)}
        >
          <div 
            className="bg-white p-8 rounded-lg shadow-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold">Detalle de las cuotas</h2>
              <button 
                className="text-gray-500 hover:text-gray-700" 
                onClick={() => setShowInstallmentsModal(false)}
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            
            <div className="space-y-6">
              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="text-sm text-gray-600 mb-2">Total del producto</p>
                <p className="text-3xl font-bold text-[#7BC4DB]">
                  ${product.price.toLocaleString('es-CO')}
                </p>
              </div>

              {/* Mercado Pago Section */}
              <div className="border-t pt-4">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Mercado Pago</h3>
                <div className="space-y-2">
                  <div className="flex justify-between items-center py-2 border-b">
                    <span className="text-gray-700">1 cuota de</span>
                    <span className="font-semibold">${product.price.toLocaleString('es-CO')} sin intereses</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b">
                    <span className="text-gray-700">2 cuotas de</span>
                    <span className="font-semibold">${Math.round(product.price / 2).toLocaleString('es-CO')} sin intereses</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b">
                    <span className="text-gray-700">3 cuotas de</span>
                    <span className="font-semibold">${Math.round(product.price / 3).toLocaleString('es-CO')} sin intereses</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b">
                    <span className="text-gray-700">4 cuotas de</span>
                    <span className="font-semibold">${Math.round(product.price / 4).toLocaleString('es-CO')} sin intereses</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b">
                    <span className="text-gray-700">5 cuotas de</span>
                    <span className="font-semibold">${Math.round(product.price / 5).toLocaleString('es-CO')} sin intereses</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b">
                    <span className="text-gray-700">6 cuotas de</span>
                    <span className="font-semibold">${Math.round(product.price / 6).toLocaleString('es-CO')} sin intereses</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b">
                    <span className="text-gray-700">12 cuotas de</span>
                    <span className="font-semibold">${Math.round(product.price / 12).toLocaleString('es-CO')} sin intereses</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b">
                    <span className="text-gray-700">18 cuotas de</span>
                    <span className="font-semibold">${Math.round(product.price / 18).toLocaleString('es-CO')} sin intereses</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b">
                    <span className="text-gray-700">24 cuotas de</span>
                    <span className="font-semibold">${Math.round(product.price / 24).toLocaleString('es-CO')} sin intereses</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b">
                    <span className="text-gray-700">36 cuotas de</span>
                    <span className="font-semibold">${product.installments.amount.toLocaleString('es-CO')} sin intereses</span>
                  </div>
                </div>
              </div>

              {/* Pagos Personalizados Section */}
              <div className="border-t pt-4">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Pagos personalizados</h3>
                <div className="space-y-2">
                  <div className="flex justify-between items-center py-2 border-b">
                    <span className="text-gray-700">1 cuota de</span>
                    <span className="font-semibold">${product.price.toLocaleString('es-CO')} sin intereses</span>
                  </div>
                </div>
              </div>

              <div className="space-y-3 pt-4 border-t">
                <div className="flex items-center gap-3">
                  <Shield className="h-5 w-5 text-blue-600 flex-shrink-0" />
                  <p className="text-sm text-gray-700">Compra protegida - Tus datos cuidados</p>
                </div>
                <div className="flex items-center gap-3">
                  <RefreshCw className="h-5 w-5 text-blue-600 flex-shrink-0" />
                  <p className="text-sm text-gray-700">Cambios y devoluciones sin costo</p>
                </div>
              </div>

              <Button
                size="lg"
                className="w-full text-lg py-6"
                onClick={() => {
                  handleAddToCart();
                  setShowInstallmentsModal(false);
                }}
                disabled={!product.inStock}
              >
                {product.inStock ? t('products.addToCart') : t('products.outOfStock')}
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Zoom Modal */}
      {showZoom && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4"
          onClick={handleCloseZoom}
        >
          <div 
            className="relative w-full max-w-4xl h-[80vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-4">
                <h2 className="text-xl font-bold text-white">
                  {language === 'es' ? 'Ver imagen en grande' : 'View large image'}
                </h2>
                <div className="text-sm text-white/80">
                  {language === 'es' ? 'Usa la rueda del mouse para hacer zoom • Arrastra para mover' : 'Use mouse wheel to zoom • Drag to pan'}
                </div>
              </div>
              <button 
                className="text-white hover:text-gray-300 transition-colors" 
                onClick={handleCloseZoom}
              >
                <X className="h-8 w-8" />
              </button>
            </div>
            
            <div 
              className="relative w-full h-full overflow-hidden rounded-2xl bg-gray-900 shadow-2xl"
              onWheel={handleWheel}
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
              style={{ cursor: zoomLevel > 1 ? (isDragging ? 'grabbing' : 'grab') : 'default' }}
            >
              <img
                src={galleryImages[selectedImage]}
                alt={product.name[language]}
                className="w-full h-full object-contain select-none"
                style={{
                  transform: `scale(${zoomLevel}) translate(${panPosition.x / zoomLevel}px, ${panPosition.y / zoomLevel}px)`,
                  transition: isDragging ? 'none' : 'transform 0.1s ease-out'
                }}
                draggable={false}
              />
              
              {/* Zoom Level Indicator */}
              <div className="absolute bottom-4 right-4 bg-black bg-opacity-70 text-white px-4 py-2 rounded-lg text-sm">
                {Math.round(zoomLevel * 100)}%
              </div>
              
              {/* Controls */}
              <div className="absolute bottom-4 left-4 flex gap-2">
                <button
                  className="bg-black bg-opacity-70 text-white px-4 py-2 rounded-lg hover:bg-opacity-90 transition-all"
                  onClick={() => setZoomLevel(prev => Math.min(prev + 0.5, 3))}
                >
                  +
                </button>
                <button
                  className="bg-black bg-opacity-70 text-white px-4 py-2 rounded-lg hover:bg-opacity-90 transition-all"
                  onClick={() => {
                    setZoomLevel(prev => Math.max(prev - 0.5, 1));
                    if (zoomLevel <= 1.5) {
                      setPanPosition({ x: 0, y: 0 });
                    }
                  }}
                >
                  -
                </button>
                <button
                  className="bg-black bg-opacity-70 text-white px-4 py-2 rounded-lg hover:bg-opacity-90 transition-all"
                  onClick={() => {
                    setZoomLevel(1);
                    setPanPosition({ x: 0, y: 0 });
                  }}
                >
                  {language === 'es' ? 'Restablecer' : 'Reset'}
                </button>
              </div>
            </div>
            
            {/* Thumbnail Navigation */}
            <div className="flex items-center justify-center gap-3 mt-4">
              {galleryImages.map((image, index) => (
                <button
                  key={index}
                  className={`w-16 h-16 rounded-lg overflow-hidden border-2 transition-all ${
                    selectedImage === index 
                      ? 'border-blue-400 ring-2 ring-blue-300' 
                      : 'border-gray-400 hover:border-gray-300'
                  }`}
                  onClick={() => {
                    setSelectedImage(index);
                    setZoomLevel(1);
                    setPanPosition({ x: 0, y: 0 });
                  }}
                >
                  <img
                    src={image}
                    alt={`${product.name[language]} - imagen ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}