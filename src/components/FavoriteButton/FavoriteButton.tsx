import React from 'react';

import styles from './FavoriteButton.module.scss';

interface Props {
  isGoodInFavorite?: boolean;
}

export const FavoriteButton: React.FC<Props> = ({
  isGoodInFavorite = false,
}) => {
  return (
    <>
      {isGoodInFavorite ? (
        <div
          className={`${styles[`favorite-button`]} ${styles[`favorite-button--checked`]}`}
        />
      ) : (
        <div className={styles[`favorite-button`]} />
      )}
    </>
  );
};
