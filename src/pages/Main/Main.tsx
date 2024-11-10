import { ProductsSlider } from '@/modules/ProductsSlider/ProductsSlider';
import { Slider } from '@/modules/Slider';
import { FC, useEffect } from 'react';

import styles from './Main.module.scss';
import { Categories } from '@/components/Categories/Categories';
import { useAppDispatch } from '@/app/store/hooks';
import { getProducts } from '@/features/products/productsSlice';

export const Main: FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  return (
    <div className={styles.main}>
      <div>
        <h1 className={styles.main__title}>Welcome to Nice Gadgets store!</h1>
        <Slider />
      </div>

      <div>
        <ProductsSlider title="Brand new models" />
      </div>

      <div>
        <Categories />
      </div>

      <div>
        <ProductsSlider title="Brand new models" />
      </div>
    </div>
  );
};
