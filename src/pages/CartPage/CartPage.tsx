import style from './CartPage.module.scss';
import { useNavigate } from 'react-router-dom';
import { ProductInCart } from '../../components/ProductInCart';

import emptyCart from '/img/cart-is-empty.png';
import { useAppDispatch, useAppSelector } from '@/app/store/hooks';
import { clearCart } from '@/features/cart/cartSlice';

const CartPage = () => {
  const dispatch = useAppDispatch();
  const { productsOfCart } = useAppSelector((state) => state.cart);
  const navigate = useNavigate();

  const getSum = () => {
    return productsOfCart.reduce(
      (acc, val) => acc + val.price * (val.inCart || 1),
      0
    );
  };

  const handleCheckout = () => {
    const userResponse = confirm(
      'Checkout is not implemented yet, do you want to clear a cart?'
    );

    if (userResponse) {
      dispatch(clearCart());
    }
  };

  const getLengthOfCart = () => {};

  return (
    <div className={style.cartPage}>
      <div
        className={style.backButton}
        onClick={() => navigate(-1)}>
        <div className={style.backButton__arrow} />
        <p className={style.backButton__text}>Back</p>
      </div>

      {!productsOfCart.length && (
        <div className={style.emptyCart}>
          <h1 className={style.emptyCart__title}>Your cart is empty</h1>
          <img
            src={emptyCart}
            alt="Empty Cart"
            className={style.emptyCart__img}
          />
        </div>
      )}

      {!!productsOfCart.length && (
        <>
          <h1 className={style.title}>Cart</h1>

          <ul className={style.main}>
            {productsOfCart.map((prod) => (
              <li
                className={style.card}
                key={prod.id}>
                <ProductInCart prod={prod} />
              </li>
            ))}
          </ul>

          <div className={style.checkout}>
            <div className={style.checkout__items}>
              <h2 className={style.checkout__items__price}>${getSum()}</h2>
              <p className={style.checkout__items__total}>
                Total for {getLengthOfCart()} items
              </p>
            </div>
            <div className={style.checkout__divider} />
            <button
              className={style.checkout__button}
              onClick={handleCheckout}>
              Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default CartPage;
