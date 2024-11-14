import React from 'react';
import styles from './FilterCapacity.module.scss';
import { Link } from 'react-router-dom';
import { useAppSelector } from '@/app/store/hooks';

type Props = {
  capacityAvailable: string[];
  currentCapacity: string;
  className?: string;
};

export const FilterCapacity: React.FC<Props> = ({
  capacityAvailable,
  currentCapacity,
  className,
  ...props
}) => {
  const { allCapacity } = useAppSelector((state) => state.currentProduct);

  return (
    <div
      className={`${styles.filter} ${className}`}
      {...props}>
      {capacityAvailable.map((capacity) => {
        const product = allCapacity.find((item) => item.capacity === capacity);

        return (
          <Link
            to={
              currentCapacity === capacity
                ? '#'
                : `/${allCapacity[0].category}/${product?.id}`
            }
            key={capacity}
            className={`${styles.filter__cell} ${
              capacity === currentCapacity && styles['filter__cell--active']
            }  ${!product && styles['filter__cell--unavailable']}`}>
            {capacity}
          </Link>
        );
      })}
    </div>
  );
};
