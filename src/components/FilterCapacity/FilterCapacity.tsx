import React from 'react';
import styles from './FilterCapacity.module.scss';
import { Link } from 'react-router-dom';

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
  return (
    <div
      className={`${styles.filter} ${className}`}
      {...props}>
      {capacityAvailable.map((capacity) => (
        <Link
          key={capacity}
          to={'../'}
          className={`${styles.filter__cell} ${capacity === currentCapacity && styles['filter__cell--active']}`}>
          {capacity}
        </Link>
      ))}
    </div>
  );
};
