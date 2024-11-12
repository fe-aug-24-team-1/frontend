import { Product } from '@/types/Product';
import { FC } from 'react';
import { NavLink } from 'react-router-dom';

import styles from './ProductCard.module.scss';
import cn from 'classnames';
import { useAppDispatch } from '@/app/store/hooks';
import { addToCart } from '@/features/cart/cartSlice';

interface Props {
  product?: Product;
  discount?: boolean;
}

export const ProductCard: FC<Props> = ({ product, discount }) => {
  const specs = [
    { key: 'Screen', value: product?.screen },
    { key: 'Capacity', value: product?.capacity },
    { key: 'Ram', value: product?.ram },
  ];

  const dispatch = useAppDispatch();

  return (
    <article className={styles.card}>
      <NavLink
        to={`${product?.category}/${product?.itemId}`}
        className={styles.img__link}>
        <img
          src={product?.image}
          className={styles.img}
        />
      </NavLink>

      <NavLink
        to={`${product?.category}/${product?.itemId}`}
        className={styles.title}>
        {product?.name}
      </NavLink>

      <div className={styles.price}>
        <div className={styles.price__actual}>
          ${discount ? product?.price : product?.fullPrice}
        </div>
        {product?.fullPrice && discount && (
          <div className={styles.price__old}>${product.fullPrice}</div>
        )}
      </div>

      <div className={styles.divider} />

      <div className={styles.specs}>
        {specs.map(({ key, value }) => (
          <div className={styles.specs__item}>
            <div className={styles.specs__key}>{key}</div>
            <div className={styles.specs__value}>{value}</div>
          </div>
        ))}
      </div>

      <div className={styles.buttons__container}>
        <button
          className={cn(styles.buttons__add, {
            [styles['buttons__add--active']]: true,
          })}
          onClick={() => dispatch(addToCart(product))}>
          Add to cart
        </button>

        <div
          className={cn(styles.buttons__like, {
            [styles['buttons__like--active']]: true,
          })}
        />
      </div>
    </article>
  );
};
