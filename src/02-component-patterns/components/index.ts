import { ProductCard as ProductCardHOC } from './ProductCard';
import { ProductTitle } from './ProductTitle';
import { ProductButtons } from './ProductButtons';
import { ProductImage } from './ProductImage';
import { ProductCardHOCPros } from '../interfaces/interfaces';

export { ProductButtons } from './ProductButtons';
export { ProductImage } from './ProductImage';
export { ProductTitle } from './ProductTitle';

export const ProductCard: ProductCardHOCPros = Object.assign(ProductCardHOC, {
  Title: ProductTitle,
  Image: ProductImage,
  Buttons: ProductButtons,
});

export default ProductCard;
