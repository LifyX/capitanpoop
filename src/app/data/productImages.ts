// Import real product images
import poopBrisaCitrica30 from '../../assets/aab69dd7862b5c47ce34d0c09943fba4c2e1aa95.png';
import poopOleadaHerbal30 from '../../assets/a65971c6f1b0df1026e5f637fc2dd82e61b9177a.png';
import comboBrisaCitrica from '../../assets/ee56ff2db7ca3853f164f05aa64750bcd767fed7.png';
import comboOleadaHerbal from '../../assets/7a7fea315c4182904237817248bb185421e30e77.png';
import poopBrisaCitrica135 from '../../assets/2d8d49cfeaed858ce4d80e110a47b69d63931de1.png';
import poopOleadaHerbal135 from '../../assets/c22992186df96aedd0f20cc9f8babd91e4ef2392.png';

// Export product images map
export const productImages: Record<string, string> = {
  'poop-brisa-citrica-30': poopBrisaCitrica30,
  'poop-oleada-herbal-30': poopOleadaHerbal30,
  'combo-brisa-citrica': comboBrisaCitrica,
  'combo-oleada-herbal': comboOleadaHerbal,
  'poop-brisa-citrica-135': poopBrisaCitrica135,
  'poop-oleada-herbal-135': poopOleadaHerbal135,
  // Add more product images as they become available
};

// Fallback images for products without real images yet
export const fallbackImages: Record<string, string> = {
  'home-brisa-citrica-135': 'https://images.unsplash.com/photo-1766384093044-7dba33a6d1de?w=800&h=800&fit=crop&q=80',
  'home-oleada-herbal-135': 'https://images.unsplash.com/photo-1766384093044-7dba33a6d1de?w=800&h=800&fit=crop&q=80',
};

// Helper function to get product image
export function getProductImage(productId: string): string {
  return productImages[productId] || fallbackImages[productId] || 'https://images.unsplash.com/photo-1699528136768-176df08123d9?w=800&h=800&fit=crop&q=80';
}