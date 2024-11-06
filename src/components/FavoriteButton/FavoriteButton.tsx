import React from 'react';

import styles from './FavoriteButton.module.scss';
import { Icon } from '@/components/icon/Icon.tsx';

interface Props {
  isGoodInFavorite?: boolean;
}

export const FavoriteButton: React.FC<Props> = ({
  isGoodInFavorite = false,
}) => {
  return (
    <>
      {isGoodInFavorite ? (
        <div className={styles[`favorite-button`]}>
          <Icon.FavoritesFilled className={styles[`favorite-button__icon`]} />
        </div>
      ) : (
        <div className={styles[`favorite-button`]}>
          <Icon.Favorites className={styles[`favorite-button__icon`]} />
        </div>
      )}
    </>
  );
};
