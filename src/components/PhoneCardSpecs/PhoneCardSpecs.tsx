import styles from '@/components/PhoneCardSpecs/PhoneCardSpecs.module.scss';
import React from 'react';
import { Phone } from '@/types/Phone.ts';

interface Props {
  product: Phone;
  className?: string;
}

export const PhoneCardSpecs: React.FC<Props> = ({
  product,
  className,
  ...props
}) => {
  return (
    <div
      className={className}
      {...props}>
      <div className={styles[`specs-container`]}>
        <span className={styles[`specs-name`]}>Screen</span>
        <span className={styles[`specs-value`]}>{product.screen}</span>
      </div>

      <div className={styles[`specs-container`]}>
        <span className={styles[`specs-name`]}>Capacity</span>
        <span className={styles[`specs-value`]}>{product.capacity}</span>
      </div>

      <div className={styles[`specs-container`]}>
        <span className={styles[`specs-name`]}>Ram</span>
        <span className={styles[`specs-value`]}>{product.ram}</span>
      </div>
    </div>
  );
};
