import { useAppSelector } from '@/app/store/hooks';
import { FC } from 'react';

import styles from './Cart.module.scss';

export const Cart: FC = () => {
  const { productsOfCart } = useAppSelector((state) => state.cart);

  return (
    <div className={styles.page}>
      <div className={styles['button-back']}>
        <div className={styles['button-back__icon']} />
        <p className={styles['button-back__text']}>Back</p>
      </div>

      {!productsOfCart.length && (
        <div className={styles.cart__empty}>
          <h1>Your cart is empty</h1>

          <img />
        </div>
      )}

      {!!productsOfCart.length && (
        <>
          <h1>Cart</h1>

          <ul>
            {productsOfCart.map(() => (
              <li></li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};
