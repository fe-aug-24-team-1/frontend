import { FC, useContext } from 'react';

import { ThemeStateContext } from '@/app/providers/ThemeProvider/ThemeProvider';

import { IconProps } from './types/IconProps';

import searchDark from '@/assets/images/icons/dark/search.svg';
import searchLight from '@/assets/images/icons/light/search.svg';

export const Search: FC<IconProps> = ({ className }) => {
  const { theme } = useContext(ThemeStateContext);

  return (
    <img
      src={theme === 'light' ? searchLight : searchDark}
      alt={`Chevron Down Icon - ${theme}`}
      className={className}
    />
  );
};
