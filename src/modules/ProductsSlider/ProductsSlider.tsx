import { FC } from 'react';
import { ProductCard } from '@/components/ProductCard/ProductCard';

interface Props {
  title: string;
}

export const ProductsSlider: FC<Props> = ({ title }) => {
  return (
    <section>
      <div>
        <h2>{title}</h2>

        <ProductCard />
        <ProductCard />
        <ProductCard />

        <div></div>

        <div></div>
      </div>

      <div></div>
    </section>
  );
};
