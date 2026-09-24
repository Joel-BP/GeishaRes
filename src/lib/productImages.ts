import type { Product } from './types';

const PEABERRY_IMAGES = [
  '/Panamanian_Coffee_Mockup_4.png',
  '/Panamanian_Coffee_Mockup_Front_Single.png',
  '/Panamanian_Coffee_Mockup_Back_Single.png',
];

export function getProductImages(product: Product): string[] {
  if (product.name.toLowerCase().includes('peaberry')) {
    return PEABERRY_IMAGES;
  }

  return product.image_url
    ? [product.image_url]
    : ['https://images.pexels.com/photos/1695054/pexels-photo-1695054.jpeg'];
}
