export interface Product {
  id: string;
  name: {
    es: string;
    en: string;
  };
  description: {
    es: string;
    en: string;
  };
  tagline?: {
    es: string;
    en: string;
  };
  longDescription?: {
    es: string;
    en: string;
  };
  features?: {
    es: string[];
    en: string[];
  };
  price: number;
  installments?: {
    months: number;
    amount: number;
  };
  size: string;
  category: 'bathroom' | 'home';
  inStock: boolean;
  image: string;
  isCombo?: boolean;
  galleryImages?: string[];
}

export const products: Product[] = [
  // Combos
  {
    id: 'combo-oleada-herbal',
    name: {
      es: 'Combo Capitan Poop Oleada Herbal',
      en: 'Combo Capitan Poop Herbal Wave'
    },
    description: {
      es: 'Capitan Poop Oleada Herbal 135 ml + Capitan Poop Oleada Herbal 30 ml',
      en: 'Capitan Poop Herbal Wave 135 ml + Capitan Poop Herbal Wave 30 ml'
    },
    longDescription: {
      es: 'Combo especial con dos unidades de Capitan Poop Oleada Herbal para tu baño. Incluye una presentación de 135ml para el hogar y otra de 30ml para llevar contigo.',
      en: 'Special combo with two units of Capitan Poop Herbal Wave for your bathroom. Includes a 135ml presentation for home and a 30ml to take with you.'
    },
    features: {
      es: ['135ml para el hogar', '30ml para llevar', 'Aceites esenciales naturales', '100% Natural'],
      en: ['135ml for home', '30ml to go', 'Natural essential oils', '100% Natural']
    },
    price: 87000,
    installments: {
      months: 36,
      amount: 2417
    },
    size: 'combo',
    category: 'bathroom',
    inStock: true,
    image: 'figma:asset/7a7fea315c4182904237817248bb185421e30e77.png',
    isCombo: true,
    galleryImages: [
      'figma:asset/d5cec3f562c60d29c820d6d6ab080b2403663e10.png'
    ]
  },
  {
    id: 'combo-brisa-citrica',
    name: {
      es: 'Combo Capitan Poop Brisa Cítrica',
      en: 'Combo Capitan Poop Citrus Breeze'
    },
    description: {
      es: 'Capitan Poop Brisa Cítrica 135ml + Capitan Poop Brisa Cítrica 30 ml',
      en: 'Capitan Poop Citrus Breeze 135ml + Capitan Poop Citrus Breeze 30 ml'
    },
    longDescription: {
      es: 'Combo especial con dos unidades de Capitan Poop Brisa Cítrica para tu baño. Incluye una presentación de 135ml para el hogar y otra de 30ml para llevar contigo.',
      en: 'Special combo with two units of Capitan Poop Citrus Breeze for your bathroom. Includes a 135ml presentation for home and a 30ml to take with you.'
    },
    features: {
      es: ['135ml para el hogar', '30ml para llevar', 'Aceites esenciales naturales', '100% Natural'],
      en: ['135ml for home', '30ml to go', 'Natural essential oils', '100% Natural']
    },
    price: 87000,
    installments: {
      months: 36,
      amount: 2417
    },
    size: 'combo',
    category: 'bathroom',
    inStock: true,
    isCombo: true
  },
  // Individual Products - 135ml
  {
    id: 'poop-oleada-herbal-135',
    name: {
      es: 'Capitan Poop – Oleada Herbal 135ml',
      en: 'Capitan Poop – Herbal Wave 135ml'
    },
    tagline: {
      es: 'Para tu baño',
      en: 'For your bathroom'
    },
    description: {
      es: 'Bloquea olores de forma inmediata con aceites esenciales naturales. Perfecto para el baño.',
      en: 'Blocks odors instantly with natural essential oils. Perfect for the bathroom.'
    },
    longDescription: {
      es: 'Eliminador de olores para el baño, completamente natural con aroma herbal a base de aceites esenciales.',
      en: 'Bathroom odor eliminator, completely natural with herbal aroma based on essential oils.'
    },
    features: {
      es: ['Sin Parabenos', 'Sin Ftalatos', 'Sin Aerosoles', 'Sin Fragancias sintéticas'],
      en: ['Paraben-Free', 'Phthalate-Free', 'Aerosol-Free', 'No Synthetic Fragrances']
    },
    price: 62500,
    installments: {
      months: 36,
      amount: 1736
    },
    size: '135ml',
    category: 'bathroom',
    inStock: true,
    image: 'figma:asset/c22992186df96aedd0f20cc9f8babd91e4ef2392.png'
  },
  {
    id: 'poop-brisa-citrica-135',
    name: {
      es: 'Capitan Poop – Brisa Cítrica 135ml',
      en: 'Capitan Poop – Citrus Breeze 135ml'
    },
    tagline: {
      es: 'Para tu baño',
      en: 'For your bathroom'
    },
    description: {
      es: 'Bloquea olores de forma inmediata con aceites esenciales naturales. Perfecto para el baño.',
      en: 'Blocks odors instantly with natural essential oils. Perfect for the bathroom.'
    },
    longDescription: {
      es: 'Eliminador de olores para el baño, completamente natural con aroma cítrico a base de aceites esenciales.',
      en: 'Bathroom odor eliminator, completely natural with citrus aroma based on essential oils.'
    },
    features: {
      es: ['Sin Parabenos', 'Sin Ftalatos', 'Sin Aerosoles', 'Sin Fragancias sintéticas'],
      en: ['Paraben-Free', 'Phthalate-Free', 'Aerosol-Free', 'No Synthetic Fragrances']
    },
    price: 62500,
    installments: {
      months: 36,
      amount: 1736
    },
    size: '135ml',
    category: 'bathroom',
    inStock: true,
    image: 'figma:asset/2d8d49cfeaed858ce4d80e110a47b69d63931de1.png'
  },
  // Individual Products - 30ml
  {
    id: 'poop-brisa-citrica-30',
    name: {
      es: 'Capitan Poop – Brisa Cítrica 30ml',
      en: 'Capitan Poop – Citrus Breeze 30ml'
    },
    tagline: {
      es: 'para llevar contigo',
      en: 'to take with you'
    },
    description: {
      es: 'Pequeño y potente. Ideal para viajes o baños pequeños.',
      en: 'Small and powerful. Ideal for travel or small bathrooms.'
    },
    longDescription: {
      es: 'Eliminador de olores para el baño, completamente natural con aroma cítrico a base de aceites esenciales.',
      en: 'Bathroom odor eliminator, completely natural with citrus aroma based on essential oils.'
    },
    features: {
      es: ['Sin Parabenos', 'Sin Ftalatos', 'Sin Aerosoles', 'Sin Fragancias sintéticas'],
      en: ['Paraben-Free', 'Phthalate-Free', 'Aerosol-Free', 'No Synthetic Fragrances']
    },
    price: 34000,
    installments: {
      months: 24,
      amount: 1417
    },
    size: '30ml',
    category: 'bathroom',
    inStock: true,
    image: 'figma:asset/aab69dd7862b5c47ce34d0c09943fba4c2e1aa95.png'
  },
  {
    id: 'poop-oleada-herbal-30',
    name: {
      es: 'Capitan Poop – Oleada Herbal 30ml',
      en: 'Capitan Poop – Herbal Wave 30ml'
    },
    tagline: {
      es: 'para llevar contigo',
      en: 'to take with you'
    },
    description: {
      es: 'Pequeño y potente. Ideal para viajes o baños pequeños.',
      en: 'Small and powerful. Ideal for travel or small bathrooms.'
    },
    longDescription: {
      es: 'Eliminador de olores para el baño, completamente natural con aroma herbal a base de aceites esenciales.',
      en: 'Bathroom odor eliminator, completely natural with herbal aroma based on essential oils.'
    },
    features: {
      es: ['Sin Parabenos', 'Sin Ftalatos', 'Sin Aerosoles', 'Sin Fragancias sintéticas'],
      en: ['Paraben-Free', 'Phthalate-Free', 'Aerosol-Free', 'No Synthetic Fragrances']
    },
    price: 34000,
    installments: {
      months: 24,
      amount: 1417
    },
    size: '30ml',
    category: 'bathroom',
    inStock: true,
    image: 'figma:asset/faf09bae068ad09f6038aeef6ef92218fa5ff344.png',
    galleryImages: [
      'figma:asset/e9c04b0b3704182a448d21675604292f1744cd00.png',
      'figma:asset/702bef5cb965c45f1452e70a2d8b13f23b70de80.png',
      'figma:asset/bb42787ee77727cacf9303fe4b39788aaa565d65.png'
    ]
  },
  // Home Products
  {
    id: 'home-tierra-vista-250',
    name: {
      es: 'Eliminador de olores para el hogar Capitan Home 250ml - Tierra a la vista',
      en: 'Home Odor Eliminator Capitan Home 250ml - Land Ahoy'
    },
    tagline: {
      es: 'Para tu hogar',
      en: 'For your home'
    },
    description: {
      es: 'Elimina malos olores en el hogar: closets, zapatos, sofás y más.',
      en: 'Eliminates bad odors in the home: closets, shoes, sofas and more.'
    },
    longDescription: {
      es: 'Eliminador de olores para tu hogar. Para eliminar y aromatizar muebles, cortinas, closets, zapatos, ropa, o lo que quieras en tu casa! Con aceites naturales de Canela - Naranja - Vainilla - Jengibre.',
      en: 'Odor eliminator for your home. To eliminate and freshen furniture, curtains, closets, shoes, clothes, or whatever you want in your house! With natural oils of Cinnamon - Orange - Vanilla - Ginger.'
    },
    features: {
      es: ['Sin Ftalatos', 'Sin fragancias sintéticas', 'Sin aerosoles', 'Sin Parabenos'],
      en: ['Phthalate-Free', 'No Synthetic Fragrances', 'Aerosol-Free', 'Paraben-Free']
    },
    price: 105000,
    installments: {
      months: 36,
      amount: 2917
    },
    size: '250ml',
    category: 'home',
    inStock: false,
    image: 'figma:asset/ec494d3a2ed4713962b4caa37a8b117a49a31b10.png',
    galleryImages: [
      'figma:asset/c753d39b1154766c8aec2e43aedb05360841abff.png'
    ]
  },
  {
    id: 'home-mar-en-calma-250',
    name: {
      es: 'Eliminador de olores para el hogar Capitan Home 250ml - Mar en Calma',
      en: 'Home Odor Eliminator Capitan Home 250ml - Calm Sea'
    },
    tagline: {
      es: 'Para tu hogar',
      en: 'For your home'
    },
    description: {
      es: 'Elimina malos olores en el hogar: closets, zapatos, sofás y más.',
      en: 'Eliminates bad odors in the home: closets, shoes, sofas and more.'
    },
    longDescription: {
      es: 'Eliminador de olores para tu hogar. Para eliminar y aromatizar muebles, cortinas, closets, zapatos, ropa, o lo que quieras en tu casa! Con aceites naturales de Eucalipto - Naranja - Vainilla - Lavanda.',
      en: 'Odor eliminator for your home. To eliminate and freshen furniture, curtains, closets, shoes, clothes, or whatever you want in your house! With natural oils of Eucalyptus - Orange - Vanilla - Lavender.'
    },
    features: {
      es: ['Sin Ftalatos', 'Sin fragancias sintéticas', 'Sin aerosoles', 'Sin Parabenos'],
      en: ['Phthalate-Free', 'No Synthetic Fragrances', 'Aerosol-Free', 'Paraben-Free']
    },
    price: 105000,
    installments: {
      months: 36,
      amount: 2917
    },
    size: '250ml',
    category: 'home',
    inStock: false,
    image: 'figma:asset/c6080474d3e04ed35521de832b5ed0b0e021f4f6.png'
  }
];

// Helper function to get product image
export function getProductImage(productId: string): string {
  const product = products.find(p => p.id === productId);
  return product?.image || '';
}