import { CategoryType } from '@/types/CategoryType';
import { Product } from '@/types/Product';

export const getProductByCategory = (
  category: CategoryType,
  products: Product[]
) => {
  return products.filter((product) => product.category === category);
};
