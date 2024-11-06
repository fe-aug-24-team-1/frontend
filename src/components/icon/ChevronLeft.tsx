import { FC, useContext } from 'react';

import { ThemeStateContext } from '@/app/providers/ThemeProvider';

import { IconProps } from './types/IconProps';

import chevronLeftDark from '@/assets/images/icons/dark/chevron-left.svg';
import chevronLeftLight from '@/assets/images/icons/light/chevron-left.svg';

export const ChevronLeft: FC<IconProps> = ({ className }) => {
  const { theme } = useContext(ThemeStateContext);

  return (
    <img
      src={theme === 'light' ? chevronLeftLight : chevronLeftDark}
      alt={`Chevron Left Icon - ${theme}`}
      className={className}
    />
  );
};
