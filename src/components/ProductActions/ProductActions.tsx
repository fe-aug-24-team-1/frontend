import React from 'react';
import styles from './ProductActions.module.scss';

import { useTranslation } from 'react-i18next';
import { FilterColor } from '../FilterColor';
import { FilterCapacity } from '../FilterCapacity';
import { TechSpecsListItem } from '../TechSpecsListItem';
import { FavoriteButton } from '../FavoriteButton/FavoriteButton';
import { ButtonCommon } from '../ButtonCommon';
import { useAppDispatch, useAppSelector } from '@/app/store/hooks';
import { Product } from '@/types/Product';
import { toggleWishListProduct } from '@/features/wishlist/wishlistSlice';
import { addToCart, removeFormCart } from '@/features/cart/cartSlice';

type Props = {
  colorsAvailable: string[];
  color: string;
  capacityAvailable: string[];
  capacity: string;
  priceDiscount: number;
  priceRegular: number;
  screen?: string;
  resolution?: string;
  processor?: string;
  ram?: string;
  product: Product;
  className?: string;
};

export const ProductActions: React.FC<Props> = ({
  colorsAvailable,
  color,
  capacityAvailable,
  capacity,
  priceDiscount,
  priceRegular,
  screen,
  resolution,
  processor,
  ram,
  product,
  className,
  ...props
}) => {
  const { t } = useTranslation();

  const { productsOfCart } = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();

  const handleLike = (product: Product) => {
    dispatch(toggleWishListProduct(product));
  };

  const getActiveButton = (product: Product) => {
    return productsOfCart.some((item: Product) => product.id === item.id);
  };

  const handleAddButton = (product: Product) => {
    if (!getActiveButton(product)) {
      dispatch(addToCart(product));
    } else {
      dispatch(removeFormCart(product.id));
    }
  };

  return (
    <div
      className={`${styles.actions} ${className}`}
      {...props}>
      <div className={styles['actions__container']}>
        <div className={styles['actions__InfoBlock']}>
          <span className={styles['actions__title']}>{t('filter.title')}</span>
          <span className={styles['actions__id']}>ID: 802390</span>
        </div>
        <FilterColor
          colorsAvailable={colorsAvailable}
          currentColor={color}
        />
      </div>

      <div className={styles['actions__line']} />

      <div className={styles['actions__container']}>
        <span className={styles['actions__title']}>
          {t('filterCapacity.title')}
        </span>
        <FilterCapacity
          capacityAvailable={capacityAvailable}
          currentCapacity={capacity}
          className={styles[`actions__prices`]}
        />
      </div>
      <div className={styles['actions__line']} />

      <div className={styles[`actions__buy`]}>
        <div
          title="Product prices"
          className={styles[`actions__prices`]}>
          <span className={styles[`actions__prices--current`]}>
            {`$${priceDiscount}`}
          </span>
          {priceDiscount !== priceRegular && (
            <span className={styles[`actions__prices--regular`]}>
              {`$${priceRegular}`}{' '}
            </span>
          )}
        </div>
        <div className={styles[`actions__buttons`]}>
          <div
            onClick={() => handleAddButton(product)}
            style={{ width: '100%' }}>
            <ButtonCommon isGoodInCart={getActiveButton(product)} />
          </div>

          <div onClick={() => handleLike(product)}>
            <FavoriteButton />
          </div>
        </div>
      </div>

      <div className={styles['actions__techspecs']}>
        <TechSpecsListItem
          name={t('productDetailsCard.info.screen')}
          value={screen?.replace("'", '”') || ''}
        />
        <TechSpecsListItem
          name={t('productDetailsCard.info.resolution')}
          value={resolution || ''}
        />
        <TechSpecsListItem
          name={t('productDetailsCard.info.processor')}
          value={processor || ''}
        />
        <TechSpecsListItem
          name={t('productDetailsCard.info.ram')}
          value={ram || ''}
        />
      </div>
    </div>
  );
};
