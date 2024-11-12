import styles from './ProductInfo.module.scss';
import { AboutProduct } from '../AboutProduct';
import { TechSpecsProduct } from '../TechSpecsProduct';
import { useTranslation } from 'react-i18next';
import { BackButton } from '../BackButton';
import { ProductActions } from '../ProductActions';
import { PhotosBlock } from '../PhotosBlock';
import { Phone } from '@/types/Phone';
import { Accessory } from '@/types/Accessory';
import { Tablet } from '@/types/Tablet';

import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

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

  return (
    <div
      className={`${styles.product} ${className}`}
      {...props}>
      <div className={styles['product__breadcrumbs']}>
        breadcrumb navigation
      </div>

      <div className={styles['product__back-button']}>
        <Skeleton width="100px" /> : <BackButton />
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
          <h2>{t('productDetailsPage.slider.title')}</h2>
        </div>

        <div />
        {/* This div is needed to indent the footer */}
      </div>
    </div>
  );
};
