import { FC, useContext } from 'react';

import { ThemeStateContext } from '@/app/providers/ThemeProvider';

import { IconProps } from './types/IconProps';

import plusDark from '@/assets/images/icons/dark/plus.svg';
import plusLight from '@/assets/images/icons/light/plus.svg';

export const Plus: FC<IconProps> = ({ className }) => {
  const { theme } = useContext(ThemeStateContext);

  return (
    <img
      src={theme === 'light' ? plusLight : plusDark}
      alt={`Chevron Down Icon - ${theme}`}
      className={className}
    />
  );
};
