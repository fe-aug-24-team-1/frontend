import { AiOutlineClose } from 'react-icons/ai';
import style from './ProductInCart.module.scss';
import { Product } from '../../types/Product';
import cn from 'classnames';
import { Link } from 'react-router-dom';
import { useAppDispatch } from '@/app/store/hooks';
import {
  addToCart,
  decrementItemInCart,
  removeFormCart,
} from '@/features/cart/cartSlice';
import { Icon } from '@/components/icon/Icon.tsx';
import { setNotification } from '@/features/notification/notificationSlice.ts';

interface test extends Product {
  quantity: number;
}

type Props = {
  prod: test;
};

export const ProductInCart: React.FC<Props> = ({ prod }) => {
  const dispatch = useAppDispatch();

  const handleMinusCount = () => {
    dispatch(decrementItemInCart(prod.id));
  };

  const handleDeleteFromCart = () => {
    dispatch(removeFormCart(prod.id));
  };

  const handlePlusCount = () => {
    dispatch(addToCart(prod));
  };

  return (
    <div className={style.product}>
      <div className={style.about}>
        <AiOutlineClose
          className={style.about__close}
          size={16}
          onClick={() => {
            handleDeleteFromCart();
            dispatch(
              setNotification(['Successfully removed from cart', 'success'])
            );
          }}
        />
        <Link
          to={`/${prod.category}/${prod.itemId}`}
          className={style.about__imgLink}>
          <img
            src={prod.image}
            alt="phone"
            className={style.about__img}
          />
        </Link>
        <Link
          to={`/${prod.category}/${prod.itemId}`}
          className={style.about__title}>
          {prod.name}
        </Link>
      </div>
      <div className={style.actions}>
        <div className={style.actions__buttons}>
          <button
            onClick={handleMinusCount}
            disabled={prod.quantity < 2}
            className={cn(style.actions__buttons__button, {
              [style['actions__buttons__button--unactive']]: prod.quantity < 2,
            })}>
            {/*<AiOutlineMinusCircle*/}
            {/*  size={24}*/}
            {/*  style={*/}
            {/*    prod.quantity < 2*/}
            {/*      ? { fill: '#b4bdc3' }*/}
            {/*      : { fill: '' }*/}
            {/*  }*/}
            {/*/>*/}
            {/*<Icon.Minus className={style.actions__buttons__button__inner} />*/}
            <Icon.Minus
              className={cn(style.actions__buttons__button__inner, {
                [style[`actions__buttons__button__inner--disabled`]]:
                  prod.quantity < 2,
              })}
            />
          </button>
          <p className={style.actions__buttons__count}>
            {prod.quantity ? prod.quantity : '000'}
          </p>
          <button
            onClick={handlePlusCount}
            className={style.actions__buttons__button}>
            {/*<AiOutlinePlusCircle size={24} />*/}
            <Icon.Plus className={style.actions__buttons__button__inner} />
          </button>
        </div>
        <h3 className={style.actions__price}>
          ${prod.price * (prod.quantity || 1)}
        </h3>
      </div>
    </div>
  );
};
