import { FC, useContext } from 'react';

import { ThemeStateContext } from '@/app/providers/ThemeProvider';

import { IconProps } from './types/IconProps';

import menuDark from '@/assets/images/icons/dark/menu.svg';
import menuLight from '@/assets/images/icons/light/menu.svg';

export const Menu: FC<IconProps> = ({ className }) => {
  const { theme } = useContext(ThemeStateContext);

  return (
    <img
      src={theme === 'light' ? menuLight : menuDark}
      alt={`Menu Icon - ${theme}`}
      className={className}
    />
  );
};
