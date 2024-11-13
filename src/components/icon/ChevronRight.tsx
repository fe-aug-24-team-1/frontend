import { FC, useContext } from 'react';


import { ThemeStateContext } from '@/app/providers/ThemeProvider/ThemeContext';


import { IconProps } from './types/IconProps';

import chevronRightDark from '@/assets/images/icons/dark/chevron-right.svg';
import chevronRightLight from '@/assets/images/icons/light/chevron-right.svg';

export const ChevronRight: FC<IconProps> = ({ className }) => {
  const { theme } = useContext(ThemeStateContext);

  return (
    <img
      src={theme === 'light' ? chevronRightLight : chevronRightDark}
      alt={`Chevron Right Icon - ${theme}`}
      className={className}
    />
  );
};
