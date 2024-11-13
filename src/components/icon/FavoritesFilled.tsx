import { FC, useContext } from 'react';

import { ThemeStateContext } from '@/app/providers/ThemeProvider/ThemeContext';

import { IconProps } from './types/IconProps';

import favoritesFilledDark from '@/assets/images/icons/dark/favourites-filled.svg';
import favoritesFilledLight from '@/assets/images/icons/light/favourites-filled.svg';

export const FavoritesFilled: FC<IconProps> = ({ className }) => {
  const { theme } = useContext(ThemeStateContext);

  return (
    <img
      src={theme === 'light' ? favoritesFilledDark : favoritesFilledLight}
      alt={`Favorites Filled Down Icon - ${theme}`}
      className={className}
    />
  );
};
