import cn from 'classnames';
import style from './Aside.module.scss';
import { NavLink } from 'react-router-dom';
import { AiOutlineClose } from 'react-icons/ai';
import { useEffect, Dispatch, SetStateAction } from 'react';

import logo from '/logo.svg';
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

interface Props {
  isMenuActive: boolean;
  setIsMenuActive: Dispatch<SetStateAction<boolean>>;
}

export const Aside: React.FC<Props> = ({ isMenuActive, setIsMenuActive }) => {
  // const { isMenuActive, setIsMenuActive } = useContext(MenuContext);
  const { products } = useAppSelector((state) => state.wishlist);
  // const { productsOfCart, getLengthOfCart } = useContext(CartContext);
  const { productsOfCart } = useAppSelector((state) => state.cart);

  // const isMenuActive = false;

  const getLengthOfCart = () => {
    return productsOfCart.length;
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 639 && isMenuActive) {
        setIsMenuActive(false); // MUST BE FROM PROPS
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
      <div className={style['menu__top']}>
        <NavLink
          to="home"
          className={style.logo__link}>
          <img
            src={logo}
            alt="logo"
            className={style.logo}
            onClick={() => setIsMenuActive(false)}
          />
        </NavLink>

        <div className={style.allTopIcons}>
          <div className={style.close}>
            <AiOutlineClose
              className={style.close__icon}
              onClick={() => setIsMenuActive(false)}
            />
          </div>

          <div className={style.close}>
            <AiOutlineClose
              className={style.close__icon}
              onClick={() => setIsMenuActive(false)}
            />
          </div>
        </div>
      </div>

      <nav className={style.nav}>
        <ul className={style.nav__list}>
          {navItems.map(({ path, name }) => (
            <li
              key={name}
              className={style.nav__item}>
              <NavLink
                to={path}
                className={getActiveLink}
                onClick={() => setIsMenuActive(false)}>
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
          onClick={() => setIsMenuActive(false)}>
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
          to={'cart'}
          className={({ isActive }) => getActiveIcon({ isActive }, 'cart')}
          onClick={() => setIsMenuActive(false)}>
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
