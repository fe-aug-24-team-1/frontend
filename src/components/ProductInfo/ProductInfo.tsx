import styles from './ProductInfo.module.scss';
import { AboutProduct } from '../AboutProduct';
import { TechSpecsProduct } from '../TechSpecsProduct';
import { useTranslation } from 'react-i18next';
import { BackButton } from '../BackButton';
import { ProductActions } from '../ProductActions';
import { PhotosBlock } from '../PhotosBlock';
import { Breadcrumbs } from '../Breadcrumbs';

import { ProductSlider } from '@/modules/ProductSlider';
import { useLocation } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '@/app/store/hooks';
import { useEffect } from 'react';
import { getCurrentProduct } from '@/features/currentProduct/currentProduct';
import { CategoryType } from '@/types/CategoryType';

type Props = {
  className?: string;
};

export const ProductInfo: React.FC<Props> = ({ className, ...props }) => {
  const { t } = useTranslation();

  const location = useLocation();

  const dispatch = useAppDispatch();

  const [categoryRaw, productId] = location.pathname
    .split('/')
    .filter((chunk) => chunk.length);

  const { currentProduct: product } = useAppSelector(
    (state) => state.currentProduct
  );
  const category: CategoryType = categoryRaw as CategoryType;

  useEffect(() => {
    dispatch(getCurrentProduct({ category, productId }));
    window.scrollTo(0, 0);
  }, [category, dispatch, productId]);

  if (!product) {
    return <h1>Product is underfined</h1>;
  }

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
          product={product}
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
            key={productId}
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
