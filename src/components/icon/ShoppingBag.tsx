import { FC, useContext } from 'react';

import { ThemeStateContext } from '@/app/providers/ThemeProvider';

import { IconProps } from './types/IconProps';

import shoppingBagDark from '@/assets/images/icons/dark/shopping-bag.svg';
import shoppingBagLight from '@/assets/images/icons/light/shopping-bag.svg';

export const ShoppingBag: FC<IconProps> = ({ className }) => {
  const { theme } = useContext(ThemeStateContext);

  return (
    <img
      src={theme === 'light' ? shoppingBagLight : shoppingBagDark}
      alt={`Chevron Down Icon - ${theme}`}
      className={className}
    />
  );
};
