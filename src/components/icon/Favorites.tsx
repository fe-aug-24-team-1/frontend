import { FC, useContext } from 'react';

import { ThemeStateContext } from '@/app/providers/ThemeProvider/ThemeContext';

import { IconProps } from './types/IconProps';

import favoritesDark from '@/assets/images/icons/dark/favourites.svg';
import favoritesLight from '@/assets/images/icons/light/favourites.svg';

export const Favorites: FC<IconProps> = ({ className }) => {
  const { theme } = useContext(ThemeStateContext);

  return (
    <img
      src={theme === 'light' ? favoritesLight : favoritesDark}
      alt={`Favorites Icon - ${theme}`}
      className={className}
    />
  );
};
