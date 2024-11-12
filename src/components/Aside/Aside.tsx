import cn from 'classnames';
import style from './Aside.module.scss';
import { NavLink } from 'react-router-dom';
import { useEffect } from 'react';

import like from '../../assets/images/icons/light/favourites.svg';
import cartImg from '../../assets/images/icons/light/shopping-bag.svg';

import { useAppSelector } from '@/app/store/hooks';

const getActiveLink = ({ isActive }: { isActive: boolean }) =>
  cn(style.nav__link, {
    [style['nav__link--active']]: isActive,
  });

const getActiveIcon = ({ isActive }: { isActive: boolean }, iconName: string) =>
  cn(style.menu__bottom__icon, style[`menu__bottom__icon__${iconName}`], {
    [style['menu__bottom__icon--active']]: isActive,
  });

const navItems = [
  { path: '/', name: 'Home' },
  { path: 'phones', name: 'Phones' },
  { path: 'tablets', name: 'Tablets' },
  { path: 'accessories', name: 'Accessories' },
];

export const Aside: React.FC = () => {
  // const { isMenuActive, setIsMenuActive } = useContext(MenuContext);
  const { products } = useAppSelector((state) => state.wishlist);
  // const { productsOfCart, getLengthOfCart } = useContext(CartContext);
  const { productsOfCart } = useAppSelector((state) => state.cart);

  const isMenuActive = false;

  const getLengthOfCart = () => {
    return productsOfCart.length;
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 639 && isMenuActive) {
        // setIsMenuActive(false); MUST BE FROM PROPS
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [isMenuActive]);

  return (
    <aside
      className={cn(style.menu, {
        [style['menu--active']]: isMenuActive,
      })}>
      <nav className={style.nav}>
        <ul className={style.nav__list}>
          {navItems.map(({ path, name }) => (
            <li
              key={name}
              className={style.nav__item}>
              <NavLink
                to={path}
                className={getActiveLink}
                // onClick={() => setIsMenuActive(false)}
              >
                {name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
      <div className={style.menu__bottom}>
        <NavLink
          to={'favourites'}
          className={({ isActive }) => getActiveIcon({ isActive }, 'like')}
          // onClick={() => setIsMenuActive(false)}
        >
          <img
            src={like}
            className={style.menu__bottom__icon__img}
          />
          {!!products.length && (
            <span className={style.menu__bottom__icon__count}>
              {products.length}
            </span>
          )}
        </NavLink>
        <NavLink
          to={'productsOfCart'}
          className={({ isActive }) =>
            getActiveIcon({ isActive }, 'productsOfCart')
          }
          // onClick={() => setIsMenuActive(false)}
        >
          <img
            src={cartImg}
            className={style.menu__bottom__icon__img}
          />
          {!!productsOfCart.length && (
            <span className={style.menu__bottom__icon__count}>
              {getLengthOfCart()}
            </span>
          )}
        </NavLink>
      </div>
    </aside>
  );
};