import { FC, useContext } from 'react';

import { ThemeStateContext } from '@/app/providers/ThemeProvider/ThemeContext';

import { IconProps } from './types/IconProps';

import chevronUpDark from '@/assets/images/icons/dark/chevron-up.svg';
import chevronUpLight from '@/assets/images/icons/light/chevron-up.svg';

export const ChevronUp: FC<IconProps> = ({ className }) => {
  const { theme } = useContext(ThemeStateContext);

  return (
    <img
      src={theme === 'light' ? chevronUpLight : chevronUpDark}
      alt={`Chevron Down Icon - ${theme}`}
      className={className}
    />
  );
};
