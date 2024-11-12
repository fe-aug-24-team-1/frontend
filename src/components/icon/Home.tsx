import { FC, useContext } from 'react';

import { ThemeStateContext } from '@/app/providers/ThemeProvider/ThemeContext';

import { IconProps } from './types/IconProps';

import homeDark from '@/assets/images/icons/dark/home.svg';
import homeLight from '@/assets/images/icons/light/home.svg';

export const Home: FC<IconProps> = ({ className }) => {
  const { theme } = useContext(ThemeStateContext);

  return (
    <img
      src={theme === 'light' ? homeLight : homeDark}
      alt={`Home Icon - ${theme}`}
      className={className}
    />
  );
};
