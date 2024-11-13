import styles from '@/components/ProductCard/ProductCard.module.scss';
import React from 'react';
import { TypePhone } from '@/types/TypePhone.ts';

interface Props {
  product: TypePhone;
}

export const PhoneCardSpecs: React.FC<Props> = ({ product }) => {
  return (
    <>
      <div className={styles[`product__specs-container`]}>
        <span className={styles[`product__specs-name`]}>Screen</span>
        <span className={styles[`product__specs-value`]}>{product.screen}</span>
      </div>

      <div className={styles[`product__specs-container`]}>
        <span className={styles[`product__specs-name`]}>Capacity</span>
        <span className={styles[`product__specs-value`]}>
          {product.capacity}
        </span>
      </div>

      <div className={styles[`product__specs-container`]}>
        <span className={styles[`product__specs-name`]}>Ram</span>
        <span className={styles[`product__specs-value`]}>{product.ram}</span>
      </div>
    </>
  );
};
