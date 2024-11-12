import { FC, useContext } from 'react';

import { ThemeStateContext } from '@/app/providers/ThemeProvider/ThemeProvider';

import { IconProps } from './types/IconProps';

import chevronDownDark from '@/assets/images/icons/dark/chevron-down.svg';
import chevronDownLight from '@/assets/images/icons/light/chevron-down.svg';

export const ChevronDown: FC<IconProps> = ({ className }) => {
  const { theme } = useContext(ThemeStateContext);

  return (
    <img
      src={theme === 'light' ? chevronDownLight : chevronDownDark}
      alt={`Chevron Down Icon - ${theme}`}
      className={className}
    />
  );
};
