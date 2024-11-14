import React from 'react';
import styles from './ButtonCommon.module.scss';
import cn from 'classnames';
import { useTranslation } from 'react-i18next';

interface Props {
  onAction?: () => void;
  children?: string;
  isGoodInCart?: boolean | undefined;
  className?: string;
}

export const ButtonCommon: React.FC<Props> = ({
  onAction = () => {},
  isGoodInCart = false,
  className,
}) => {
  const { t } = useTranslation();
  return (
    <>
      <button
        className={cn(
          `${className} ${styles.button} ${isGoodInCart ? styles[`button--selected`] : ''}`
        )}
        onClick={() => onAction()}>
        {isGoodInCart ? (
          <p className={styles.button__text}>{t('productCard.button.added')}</p>
        ) : (
          <p className={styles.button__text}>{t('productCard.button.add')}</p>
        )}
      </button>
    </>
  );
};
