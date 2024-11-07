import { FC, PropsWithChildren } from 'react';

import { IconProps } from './types/IconProps';

import { ChevronDown } from './ChevronDown';
import { ChevronLeft } from './ChevronLeft';
import { ChevronRight } from './ChevronRight';
import { ChevronUp } from './ChevronUp';
import { Close } from './Close';
import { Clear } from './Clear';
import { Favorites } from './Favorites';
import { FavoritesFilled } from './FavoritesFilled';
import { Home } from './Home';
import { Menu } from './Menu';
import { Minus } from './Minus';
import { Plus } from './Plus';
import { Search } from './Search';
import { ShoppingBag } from './ShoppingBag';

type Props = PropsWithChildren & IconProps;

const IconComponent: FC<Props> = ({ children, ...rest }) => {
  return <div {...rest}>{children}</div>;
};

export const Icon = Object.assign(IconComponent, {
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ChevronUp,
  Close,
  Clear,
  Favorites,
  FavoritesFilled,
  Home,
  Menu,
  Minus,
  Plus,
  Search,
  ShoppingBag,
});
