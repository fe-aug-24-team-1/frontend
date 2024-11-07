import { FC, useContext } from 'react';

import { ThemeStateContext } from '@/app/providers/ThemeProvider';

import { IconProps } from './types/IconProps';

import minusDark from '@/assets/images/icons/dark/minus.svg';
import minusLight from '@/assets/images/icons/light/minus.svg';

export const Minus: FC<IconProps> = ({ className }) => {
  const { theme } = useContext(ThemeStateContext);

  return (
    <img
      src={theme === 'light' ? minusLight : minusDark}
      alt={`Minus Icon - ${theme}`}
      className={className}
    />
  );
};
