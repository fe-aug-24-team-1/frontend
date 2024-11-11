import { Product } from '@/types/Product';

interface Total {
  quantity?: number;
  price: number;
}

export const calculateTotal = (products: Product[]): Total => {
  return products.reduce(
    (currTotal, product) => {
      const newPrice = currTotal.price + product.quantity * product.price;
      const newQuantity = (currTotal.quantity ?? 0) + product.quantity;

      return {
        price: newPrice,
        quantity: newQuantity,
      };
    },
    { quantity: 0, price: 0 }
  );
};
