import { FC } from 'react';
import style from './CounterGoods.module.scss';
import cn from 'classnames';

interface Props {
  isOpen: boolean;
  amountAllProducts: number;
}

export const CounterGoods: FC<Props> = ({ isOpen, amountAllProducts }) => {
  return (
    <>
      {amountAllProducts > 0 && (
        <span
          className={cn(style.amountProducts, {
            [style.amountProductsGreaterThan99]: amountAllProducts > 99,
            [style.amountProductsGreaterThan999]: amountAllProducts > 999,
            [style.amountProductsHeader]: !isOpen,
          })}>
          {amountAllProducts}
        </span>
      )}
    </>
  );
};
