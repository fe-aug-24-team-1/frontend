import styles from './ProductCard.module.scss';
import { Product } from '../../types/Product';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '@/app/store/hooks';
import { toggleWishListProduct } from '@/features/wishlist/wishlistSlice';
import { addToCart, removeFormCart } from '@/features/cart/cartSlice';
import { ButtonCommon } from '@/components/ButtonCommon';
import { FavoriteButton } from '@/components/FavoriteButton/FavoriteButton.tsx';

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

  const { productsOfCart } = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();

  const handleLike = (product: Product) => {
    dispatch(toggleWishListProduct(product));
  };

  const getActiveButton = (product: Product) => {
    return productsOfCart.some((item: Product) => product.id === item.id);
  };

  const handleAddButton = (product: Product) => {
    if (!getActiveButton(product)) {
      dispatch(addToCart(product));
    } else {
      dispatch(removeFormCart(product.id));
    }
  };

  // return (
  //   <article className={style.card}>
  //     <NavLink
  //       to={`/${prod.category}/${prod.itemId}`}
  //       className={style.img__link}
  //       onClick={() => window.scrollTo(0, 0)}>
  //       <img
  //         src={prod.image}
  //         className={style.img}
  //       />
  //     </NavLink>
  //     <NavLink
  //       to={`/${prod.category}/${prod.itemId}`}
  //       className={style.title}>
  //       {prod.name}
  //     </NavLink>
  //     <div className={style.price}>
  //       <div className={style.price__actual}>
  //         ${discount ? prod.price : prod.fullPrice}
  //       </div>
  //       {prod.fullPrice && discount && (
  //         <div className={style.price__old}>${prod.fullPrice}</div>
  //       )}
  //     </div>
  //     <div className={style.divider} />
  //     <div className={style.specs}>
  //       {specs.map(({ key, value }) => (
  //         <div
  //           className={style.specs__item}
  //           key={key}>
  //           <div className={style.specs__key}>{key}</div>
  //           <div className={style.specs__value}>{value}</div>
  //         </div>
  //       ))}
  //     </div>
  //     <div className={style.buttons}>
  //       <button
  //         className={cn(style.buttons__add, {
  //           [style['buttons__add--active']]: getActiveButton(prod),
  //         })}
  //         onClick={() => handleAddButton(prod)}>
  //         {getActiveButton(prod) ? 'Added' : 'Add to cart'}
  //       </button>
  //       <div
  //         className={cn(style.buttons__like, {
  //           [style['buttons__like--active']]: getActiveLike(prod),
  //         })}
  //         onClick={() => handleLike(prod)}
  //       />
  //     </div>
  //   </article>

  return (
    <div className={styles.product}>
      <Link
        className={styles[`product__image-link`]}
        to={{
          pathname: `/${prod.category}/${prod.itemId}`,
          // search: searchParams.toString(),
        }}>
        <img
          className={styles[`product__image`]}
          alt={prod.name}
          src={prod.image}
        />
      </Link>

      <Link
        to={{
          pathname: `/${prod.category}/${prod.itemId}`,
          // search: searchParams.toString(),
        }}
        className={styles[`product__name`]}>
        {prod.name}
      </Link>

      <div
        title="Product prices"
        className={styles[`product__prices`]}>
        <span className={styles[`product__prices--current`]}>
          {/*{`$${prod.priceDiscount}`}*/}$
          {discount ? prod.price : prod.fullPrice}
        </span>

        {prod.fullPrice && discount && (
          <span className={styles[`product__prices--regular`]}>
            {`$${prod.fullPrice}`}
          </span>
        )}
      </div>

      <div className={styles[`product__decorative-line`]}></div>

      <div className={styles[`product__specs`]}>
        {specs.map(({ key, value }) => (
          <div
            className={styles[`product__specs-container`]}
            key={key}>
            <span className={styles[`product__specs-name`]}>{key}</span>
            <span className={styles[`product__specs-value`]}>{value}</span>
          </div>
        ))}
      </div>

      <div className={styles[`product__buttons-container`]}>
        <div
          onClick={() => handleAddButton(prod)}
          style={{ width: '100%' }}>
          <ButtonCommon isGoodInCart={getActiveButton(prod)} />
        </div>

        <div onClick={() => handleLike(prod)}>
          <FavoriteButton />
        </div>
      </div>
    </div>
  );
};
