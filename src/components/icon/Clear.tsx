import { FC, useContext } from 'react';


import { ThemeStateContext } from '@/app/providers/ThemeProvider/ThemeContext';


import { IconProps } from './types/IconProps';

import clearDark from '@/assets/images/icons/dark/close.svg';
import clearLight from '@/assets/images/icons/light/close.svg';

export const Clear: FC<IconProps> = ({ className }) => {
  const { theme } = useContext(ThemeStateContext);

  return (
    <img
      src={theme === 'light' ? clearLight : clearDark}
      alt={`Clear Icon - ${theme}`}
      className={className}
    />
  );
};
