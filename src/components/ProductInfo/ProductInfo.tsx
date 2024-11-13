import styles from './ProductInfo.module.scss';
import { AboutProduct } from '../AboutProduct';
import { TechSpecsProduct } from '../TechSpecsProduct';
import { useTranslation } from 'react-i18next';
import { BackButton } from '../BackButton';
import { ProductActions } from '../ProductActions';
import { PhotosBlock } from '../PhotosBlock';
import { Phone } from '@/types/Phone';
import { Tablet } from '@/types/Tablet';
import { Accessory } from '@/types/Accessory';
import { Breadcrumbs } from '../Breadcrumbs';

import { ProductSlider } from '@/modules/ProductSlider';
import { Product } from '@/types/Product';
import { useLocation } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '@/app/store/hooks';
import { useEffect } from 'react';
import { getCurrentProduct } from '@/features/currentProduct/currentProduct';
import { CategoryType } from '@/types/CategoryType';


type Props = {
  product: Phone | Tablet | Accessory;
  className?: string;
};

export const ProductInfo: React.FC<Props> = ({
  product,
  className,
  ...props
}) => {
  const { t } = useTranslation();

  const location = useLocation();

  const dispatch = useAppDispatch();

  const [category, productId] = location.pathname
    .split('/')
    .filter((chunk) => chunk.length);

  const { currentProduct } = useAppSelector((state) => state.currentProduct);

  console.log(currentProduct);

  useEffect(() => {
    dispatch(getCurrentProduct({ category, productId }));
  }, [category, dispatch, productId]);

  return (
    <div
      className={`${styles.product} ${className}`}
      {...props}>
      <div className={styles['product__breadcrumbs']}>
        <Breadcrumbs />
      </div>

      <div className={styles['product__back-button']}>
        <BackButton />
      </div>

      <h2 className={styles['product__name']}>{product.name}</h2>

      <div className={styles['product__details']}>
        <PhotosBlock
          name={product.name}
          photos={product.images}
          className={styles['product__photo']}
        />

        <ProductActions
          colorsAvailable={product.colorsAvailable}
          color={product.color}
          capacityAvailable={product.capacityAvailable}
          capacity={product.capacity}
          priceDiscount={product.priceDiscount}
          priceRegular={product.priceRegular}
          screen={product.screen}
          resolution={product.resolution}
          processor={product.processor}
          ram={product.ram}
          product={currentProduct}
          className={styles['product__characteristics']}
        />

        <AboutProduct
          description={product.description}
          className={styles['product__about']}
        />

        <TechSpecsProduct
          screen={product.screen}
          resolution={product.resolution}
          processor={product.resolution}
          ram={product.ram}
          capacity={product.capacity}
          camera={'camera' in product ? product.camera : undefined}
          zoom={'zoom' in product ? product.zoom : undefined}
          cell={product.cell}
          className={styles['product__tech-specs']}
        />

        <div className={styles['product__recommendations']}>
          <ProductSlider
            title={t('productDetailsPage.slider.title')}
            discount={true}
            random={true}
          />
        </div>

        <div />
        {/* This div is needed to indent the footer */}
      </div>
    </div>
  );
};
