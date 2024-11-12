import React from 'react';
import styles from './Button.module.scss';
import cn from 'classnames';

interface Props {
  onAction?: () => void;
  children?: string;
  isGoodInCart?: boolean;
}

export const Button: React.FC<Props> = ({
  onAction = () => {},
  children = 'Add to cart',
  isGoodInCart = false,
}) => {
  return (
    <>
      <button
        className={cn(
          `${styles.button} ${isGoodInCart ? styles[`button--selected`] : ''}`
        )}
        onClick={() => onAction()}>
        {isGoodInCart ? (
          <p className={styles.button__text}>Added to cart</p>
        ) : (
          <p className={styles.button__text}>{children}</p>
        )}
      </button>
    </>
  );
};
