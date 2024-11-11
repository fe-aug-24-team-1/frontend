import { CategoryShop } from '../../components/CategoryShop/CategoryShop';
import { ProductSlider } from '../../modules/ProductSlider/ProductSlider';
import { Slider } from '@/modules/Slider';
import style from './HomePage.module.scss';
import { useEffect } from 'react';
import { useAppDispatch } from '@/app/store/hooks';
import { getProducts } from '@/features/products/productsSlice';

export const HomePage = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  return (
    <div className={style.homePage}>
      <div className={style.header}>
        <h1 style={{ visibility: 'hidden' }}>Product Catalog</h1>
        <h2 className={style.title}>Welcome to Nice Gadgets store!</h2>
        <Slider />
      </div>

      <div className={style.brandNewModels}>
        <ProductSlider
          title={'Brand new models'}
          discount={false}
          random={false}
        />
      </div>

      <div className={style.categoryShop}>
        <CategoryShop />
      </div>

      <div className={style.hotPrices}>
        <ProductSlider
          title={'Hot prices'}
          discount={true}
          random={false}
        />
      </div>
    </div>
  );
};
