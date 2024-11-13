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
  const { otherCapacity } = useAppSelector((state) => state.currentProduct);

  return (
    <div
      className={`${styles.filter} ${className}`}
      {...props}>
      {capacityAvailable.map((capacity) => (
        <Link
          key={capacity}
          to={`/${otherCapacity[0].category}/${otherCapacity.find((item) => item.capacity === capacity)?.id}`}
          className={`${styles.filter__cell} ${capacity === currentCapacity && styles['filter__cell--active']}`}>
          {capacity}
        </Link>
      ))}
    </div>
  );
};
