import { FC, useContext } from 'react';

import { ThemeStateContext } from '@/app/providers/ThemeProvider';

import { IconProps } from './types/IconProps';

import closeDark from '@/assets/images/icons/dark/close.svg';
import closeLight from '@/assets/images/icons/light/close.svg';

export const Close: FC<IconProps> = ({ className }) => {
  const { theme } = useContext(ThemeStateContext);

  return (
    <img
      src={theme === 'light' ? closeLight : closeDark}
      alt={`Close Icon - ${theme}`}
      className={className}
    />
  );
};
