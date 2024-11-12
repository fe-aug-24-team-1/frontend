import React from 'react';

import styles from './FavoriteButton.module.scss';
import { CiHeart } from 'react-icons/ci';

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
          <CiHeart
            size={16}
            color={'black'}
          />
        </div>
      ) : (
        <div className={styles[`favorite-button`]}>
          <CiHeart
            size={16}
            color={'green'}
          />
        </div>
      )}
    </>
  );
};
