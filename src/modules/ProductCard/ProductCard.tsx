import style from './ProductCard.module.scss';
import { Product } from '../../types/Product';
import { NavLink } from 'react-router-dom';
import cn from 'classnames';
import { useContext } from 'react';
// import { FavouritesContext } from '../../store/FavouritesProvider';
// import { CartContext } from '../../store/CartProvider';
import { useAppDispatch, useAppSelector } from '@/app/store/hooks';
import { addToWishlist } from '@/features/wishlist/wishlistSlice';
import { addToCart } from '@/features/cart/cartSlice';

type Props = {
  prod: Product;
  discount?: boolean;
};

export const ProductCard: React.FC<Props> = ({ prod, discount = true }) => {
  const specs = [
    { key: 'Screen', value: prod.screen },
    { key: 'Capacity', value: prod.capacity },
    { key: 'Ram', value: prod.ram },
  ];

  const { products } = useAppSelector((state) => state.wishlist);
  const { productsOfCart } = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();

  const getActiveLike = (product: Product) => {
    return products.some((item: Product) => product.id === item.id);
  };

  const handleLike = (product: Product) => {
    if (getActiveLike(product)) {
      dispatch(
        addToWishlist(
          products.filter((item: Product) => item.id !== product.id)
        )
      );
    }
  };

  const getActiveButton = (product: Product) => {
    return productsOfCart.some((item: Product) => product.id === item.id);
  };

  const handleAddButton = (product: Product) => {
    if (getActiveButton(product)) {
      dispatch(addToCart(product));
    }
  };

  return (
    <article className={style.card}>
      <NavLink
        to={`/${prod.category}/${prod.itemId}`}
        className={style.img__link}
        onClick={() => window.scrollTo(0, 0)}>
        <img
          src={prod.image}
          className={style.img}
        />
      </NavLink>
      <NavLink
        to={`/${prod.category}/${prod.itemId}`}
        className={style.title}>
        {prod.name}
      </NavLink>
      <div className={style.price}>
        <div className={style.price__actual}>
          ${discount ? prod.price : prod.fullPrice}
        </div>
        {prod.fullPrice && discount && (
          <div className={style.price__old}>${prod.fullPrice}</div>
        )}
      </div>
      <div className={style.divider} />
      <div className={style.specs}>
        {specs.map(({ key, value }) => (
          <div
            className={style.specs__item}
            key={key}>
            <div className={style.specs__key}>{key}</div>
            <div className={style.specs__value}>{value}</div>
          </div>
        ))}
      </div>
      <div className={style.buttons}>
        <button
          className={cn(style.buttons__add, {
            [style['buttons__add--active']]: getActiveButton(prod),
          })}
          onClick={() => handleAddButton(prod)}>
          {getActiveButton(prod) ? 'Added' : 'Add to cart'}
        </button>
        <div
          className={cn(style.buttons__like, {
            [style['buttons__like--active']]: getActiveLike(prod),
          })}
          onClick={() => handleLike(prod)}
        />
      </div>
    </article>
  );
};
