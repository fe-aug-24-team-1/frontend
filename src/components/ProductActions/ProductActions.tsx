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
import { Phone } from '@/types/Phone';
import { Accessory } from '@/types/Accessory';
import { Tablet } from '@/types/Tablet';

type Props = {
  product: Phone | Accessory | Tablet;
  className?: string;
};

export const ProductActions: React.FC<Props> = ({
  product,
  className,
  ...props
}) => {
  const { t } = useTranslation();

  const { productsOfCart } = useAppSelector((state) => state.cart);
  const { products } = useAppSelector((state) => state.products);
  const { products: productsInWishList } = useAppSelector(
    (state) => state.wishlist
  );

  const currentProduct: Product | undefined = products.find(
    (item) => item.itemId === product.id
  );
  const isInWishlist = productsInWishList.some(
    (item) => item.id === currentProduct?.id
  );

  const dispatch = useAppDispatch();

  const handleLike = (prod: Product) => {
    dispatch(toggleWishListProduct(prod));
  };

  const getActiveButton = (prod: Product) => {
    return productsOfCart.some((item: Product) => prod.id === item.id);
  };

  const handleAddButton = (prod: Product) => {
    if (!getActiveButton(prod)) {
      dispatch(addToCart(prod));
    } else {
      dispatch(removeFormCart(prod.id));
    }
  };

  return (
    <div
      className={`${styles.actions} ${className}`}
      {...props}>
      <div className={styles['actions__container']}>
        <div className={styles['actions__InfoBlock']}>
          <span className={styles['actions__title']}>{t('filter.title')}</span>
          <span className={styles['actions__id']}>
            ID: {currentProduct?.id || 0}
          </span>
        </div>
        <FilterColor
          colorsAvailable={product.colorsAvailable}
          currentColor={product.color}
        />
      </div>

      <div className={styles['actions__line']} />

      <div className={styles['actions__container']}>
        <span className={styles['actions__title']}>
          {t('filterCapacity.title')}
        </span>
        <FilterCapacity
          capacityAvailable={product.capacityAvailable}
          currentCapacity={product.capacity}
          className={styles[`actions__prices`]}
        />
      </div>
      <div className={styles['actions__line']} />

      <div className={styles[`actions__buy`]}>
        <div
          title="Product prices"
          className={styles[`actions__prices`]}>
          <span className={styles[`actions__prices--current`]}>
            {`$${product.priceDiscount}`}
          </span>
          {product.priceDiscount !== product.priceRegular && (
            <span className={styles[`actions__prices--regular`]}>
              {`$${product.priceRegular}`}{' '}
            </span>
          )}
        </div>

        {/* У кнопках треба вставити нотифікації на помилки, якщо currentProduct underfind */}

        <div className={styles[`actions__buttons`]}>
          <div
            onClick={
              currentProduct ? () => handleAddButton(currentProduct) : () => {}
            }
            style={{ width: '100%' }}>
            <ButtonCommon
              isGoodInCart={!currentProduct || getActiveButton(currentProduct)}
            />
          </div>

          <div
            onClick={
              currentProduct ? () => handleLike(currentProduct) : () => {}
            }>
            <FavoriteButton isGoodInFavorite={isInWishlist} />
          </div>
        </div>
      </div>

      <div className={styles['actions__techspecs']}>
        <TechSpecsListItem
          name={t('productDetailsCard.info.screen')}
          value={product.screen?.replace("'", '”') || ''}
        />
        <TechSpecsListItem
          name={t('productDetailsCard.info.resolution')}
          value={product.resolution || ''}
        />
        <TechSpecsListItem
          name={t('productDetailsCard.info.processor')}
          value={product.processor || ''}
        />
        <TechSpecsListItem
          name={t('productDetailsCard.info.ram')}
          value={product.ram || ''}
        />
      </div>
    </div>
  );
};
