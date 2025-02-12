import React from 'react';

import styles from './FavoriteButton.module.scss';

import { Icon } from '@/components/icon/Icon.tsx';

interface Props {
  isGoodInFavorite: boolean;
}

export const FavoriteButton: React.FC<Props> = ({
  isGoodInFavorite = false,
}) => {
  return (
    <>
      {isGoodInFavorite ? (
        <div className={styles[`favorite-button`]}>
          <Icon.FavoritesFilled />
        </div>
      ) : (
        <div className={styles[`favorite-button`]}>
          <Icon.Favorites />
        </div>
      )}
    </>
  );
};
