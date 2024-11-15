import styles from './ProductCard.module.scss';
import { Product } from '../../types/Product';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '@/app/store/hooks';

import { toggleWishListProduct } from '@/features/wishlist/wishlistSlice';
import { addToCart, removeFormCart } from '@/features/cart/cartSlice';
import { ButtonCommon } from '@/components/ButtonCommon';
import { FavoriteButton } from '@/components/FavoriteButton/FavoriteButton.tsx';
import { setNotification } from '@/features/notification/notificationSlice.ts';
import { useTranslation } from 'react-i18next';

type Props = {
  prod: Product;
  discount?: boolean;
};

export const ProductCard: React.FC<Props> = ({ prod, discount = true }) => {
  const { t } = useTranslation();

  const { productsOfCart } = useAppSelector((state) => state.cart);
  const { products } = useAppSelector((state) => state.wishlist);
  const dispatch = useAppDispatch();

  const handleLike = (product: Product) => {
    dispatch(toggleWishListProduct(product));
  };

  const getActiveButton = (product: Product) => {
    return productsOfCart.some((item: Product) => product.id === item.id);
  };

  const isInWishlist = products.some((product) => product.id === prod.id);

  const handleAddButton = (product: Product) => {
    if (!getActiveButton(product)) {
      dispatch(addToCart(product));
    } else {
      dispatch(removeFormCart(product.id));
    }
  };

  const handleAddToCartNotification = () => {
    if (getActiveButton(prod)) {
      dispatch(setNotification(['Successfully removed from cart', 'success']));
    } else {
      dispatch(setNotification(['Successfully added to cart', 'success']));
    }
  };

  const handleAddToWishlistNotification = () => {
    if (isInWishlist) {
      dispatch(
        setNotification(['Successfully removed from wishlist', 'success'])
      );
    } else {
      dispatch(setNotification(['Successfully added to wishlist', 'success']));
    }
  };

  return (
    <div className={styles.product}>
      <Link
        className={styles[`product__image-link`]}
        to={{
          pathname: `/${prod.category}/${prod.itemId}`,
          // search: searchParams.toString(),
        }}>
        <img
          className={styles[`product__image`]}
          alt={prod.name}
          src={prod.image}
        />
      </Link>

      <Link
        to={{
          pathname: `/${prod.category}/${prod.itemId}`,
          // search: searchParams.toString(),
        }}
        className={styles[`product__name`]}>
        {prod.name}
      </Link>

      <div
        title="Product prices"
        className={styles[`product__prices`]}>
        <span className={styles[`product__prices--current`]}>
          {/*{`$${prod.priceDiscount}`}*/}$
          {discount ? prod.price : prod.fullPrice}
        </span>

        {prod.fullPrice && discount && (
          <span className={styles[`product__prices--regular`]}>
            {`$${prod.fullPrice}`}
          </span>
        )}
      </div>

      <div className={styles[`product__decorative-line`]}></div>

      <div className={styles[`product__specs`]}>
        <div className={styles[`product__specs-container`]}>
          <span className={styles[`product__specs-name`]}>
            {t('productDetailsCard.info.screen')}
          </span>
          <span className={styles[`product__specs-value`]}>{prod.screen}</span>
        </div>
        <div className={styles[`product__specs-container`]}>
          <span className={styles[`product__specs-name`]}>
            {t('productDetailsCard.info.memory')}
          </span>
          <span className={styles[`product__specs-value`]}>
            {prod.capacity}
          </span>
        </div>
        <div className={styles[`product__specs-container`]}>
          <span className={styles[`product__specs-name`]}>
            {t('productDetailsCard.info.ram')}
          </span>
          <span className={styles[`product__specs-value`]}>{prod.ram}</span>
        </div>
      </div>

      <div className={styles[`product__buttons-container`]}>
        <div
          onClick={() => {
            handleAddButton(prod);
            handleAddToCartNotification();
          }}
          style={{ width: '100%' }}>
          <ButtonCommon isGoodInCart={getActiveButton(prod)} />
        </div>

        <div
          onClick={() => {
            handleLike(prod);
            handleAddToWishlistNotification();
          }}>
          <FavoriteButton isGoodInFavorite={isInWishlist} />
        </div>
      </div>
    </div>
  );
};
