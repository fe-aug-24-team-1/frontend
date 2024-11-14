import styles from '@/components/ProductCard/ProductCard.module.scss';
import React from 'react';
import { TypePhone } from '@/types/TypePhone.ts';
import { useTranslation } from 'react-i18next';

interface Props {
  product: TypePhone;
}

export const PhoneCardSpecs: React.FC<Props> = ({ product }) => {
  const { t } = useTranslation();

  return (
    <>
      <div className={styles[`product__specs-container`]}>
        <span className={styles[`product__specs-name`]}>
          {t('productDetailsCard.info.screen')}
        </span>
        <span className={styles[`product__specs-value`]}>{product.screen}</span>
      </div>

      <div className={styles[`product__specs-container`]}>
        <span className={styles[`product__specs-name`]}>
          {t('productDetailsCard.info.memory')}
        </span>
        <span className={styles[`product__specs-value`]}>
          {product.capacity}
        </span>
      </div>

      <div className={styles[`product__specs-container`]}>
        <span className={styles[`product__specs-name`]}>
          {t('productDetailsCard.info.ram')}
        </span>
        <span className={styles[`product__specs-value`]}>{product.ram}</span>
      </div>
    </>
  );
};
