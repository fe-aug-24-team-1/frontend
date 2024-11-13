import React from 'react';
import styles from './FilterColor.module.scss';
import { productsColor } from '@/types/ProductsColor';
import { normalizeColor } from '@/utils/normalizeColor';
import { Link } from 'react-router-dom';
import { useAppSelector } from '@/app/store/hooks';

type Props = {
  colorsAvailable: string[];
  currentColor: string;
  className?: string;
};

export const FilterColor: React.FC<Props> = ({
  colorsAvailable,
  currentColor,
  className,
  ...props
}) => {
  const { allColor } = useAppSelector((state) => state.currentProduct);

  return (
    <div
      className={`${styles.filter} ${className}`}
      {...props}>
      {colorsAvailable.map((color) => {
        const product = allColor.find((item) => item.color === color);

        return (
          <Link
            to={
              currentColor === color
                ? '#'
                : `/${allColor[0].category}/${product?.id}`
            }
            key={color}
            className={`${styles.filter__cell} ${
              color === currentColor && styles['filter__cell--active']
            } ${!product && styles['filter__cell--unavailable']}`}>
            <div
              className={styles['filter__color']}
              style={{
                backgroundColor: productsColor[normalizeColor(color)] ?? color,
              }}
            />
          </Link>
        );
      })}
    </div>
  );
};
