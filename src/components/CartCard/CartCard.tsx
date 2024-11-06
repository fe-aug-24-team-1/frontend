import React from 'react';
import styles from './CartCard.module.scss';

import { TypePhone } from '@/types/TypePhone.ts';

interface Props {
  product: TypePhone;
}

export const CartCard: React.FC<Props> = ({ product }) => {
  return (
    <div className={styles[`cart-card`]}>
      <div className={styles[`cart-card__top`]}>
        <div
          className={styles[`cart-card__delete`]}
          aria-disabled={true}></div>
        <div className={styles[`cart-card__image-container`]}>
          <img
            className={styles[`cart-card__image`]}
            src={product.images[0]}
            alt={product.name}
          />
        </div>
        <p className={styles[`cart-card__name`]}>{product.name}</p>
      </div>

      <div className={styles[`cart-card__bottom`]}>
        <div className={styles[`cart-card__amount-control`]}>
          <button className={styles[`cart-card__minus`]}></button>2
          <button className={styles[`cart-card__plus`]}></button>
        </div>

        <p className={styles[`cart-card__price`]}>${product.priceDiscount}</p>
      </div>
    </div>
  );
};
