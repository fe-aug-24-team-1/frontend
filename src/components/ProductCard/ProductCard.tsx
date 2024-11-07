import React from 'react';
import styles from './ProductCard.module.scss';
import { TypePhone } from '@/types/TypePhone.ts';
import { Button } from '@/components/Button';
import { FavoriteButton } from '@/components/FavoriteButton/FavoriteButton.tsx';
import { PhoneCardSpecs } from '@/components/PhoneCardSpecs/PhoneCardSpecs.tsx';
import { Link, useSearchParams } from 'react-router-dom';

interface Props {
  product: TypePhone;
}

export const ProductCard: React.FC<Props> = ({ product }) => {
  const [searchParams] = useSearchParams();
  return (
    <div className={styles.product}>
      <Link
        className={styles[`product__image-link`]}
        to={{
          pathname: `:${product.namespaceId}`,
          search: searchParams.toString(),
        }}>
        <img
          className={styles[`product__image`]}
          alt={product.name}
          src={product.images[0]}
        />
      </Link>

      <Link
        to={{
          pathname: `:${product.namespaceId}`,
          search: searchParams.toString(),
        }}
        className={styles[`product__name`]}>
        {product.name}
      </Link>

      <div
        title="Product prices"
        className={styles[`product__prices`]}>
        <span className={styles[`product__prices--current`]}>
          {`$${product.priceDiscount}`}
        </span>
        <span className={styles[`product__prices--regular`]}>
          {`$${product.priceRegular}`}
        </span>
      </div>

      <div className={styles[`product__decorative-line`]}></div>

      <div className={styles[`product__specs`]}>
        {product.category === 'phones' && <PhoneCardSpecs product={product} />}
      </div>

      <div className={styles[`product__buttons-container`]}>
        <Button />

        <FavoriteButton />
      </div>
    </div>
  );
};
