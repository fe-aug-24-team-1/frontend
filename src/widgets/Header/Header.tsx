import logo from '/logo.svg';
import style from './Header.module.scss';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import like from '../../assets/images/icons/light/favourites.svg';
import cartImg from '../../assets/images/icons/light/shopping-bag.svg';
import { NavLink, useSearchParams } from 'react-router-dom';
import cn from 'classnames';
import { Aside } from '../../components/Aside';
import { FC, useState } from 'react';
import { useAppSelector } from '@/app/store/hooks';

const getActiveNavLink = ({ isActive }: { isActive: boolean }) =>
  cn(style.nav__link, {
    [style['nav__link--active']]: isActive,
  });

const getActiveIcon = ({ isActive }: { isActive: boolean }, iconName: string) =>
  cn(style.topbar__iconContainer, style[`topbar__${iconName}`], {
    [style['topbar__iconContainer--active']]: isActive,
  });

const navItems = [
  { path: '/', name: 'Home' },
  { path: 'phones', name: 'Phones' },
  { path: 'tablets', name: 'Tablets' },
  { path: 'accessories', name: 'Accessories' },
];

export const Header: FC = () => {
  const [isMenuActive, setIsMenuActive] = useState(false); // REFACTOR FOR MARIA
  const [searchParams] = useSearchParams();

  const { products } = useAppSelector((state) => state.wishlist);

  const { productsOfCart } = useAppSelector((state) => state.cart);

  const getLengthOfCart = () => {
    return productsOfCart.length;
  };

  return (
    <>
      <div className={style.topbar}>
        <div className={style.topbar__left}>
          <NavLink
            to={'home'}
            className={style.logo__link}>
            <img
              src={logo}
              alt="logo"
              className={style.logo}
            />
          </NavLink>
          <nav className={style.nav}>
            <ul className={style.nav__list}>
              {navItems.map(({ path, name }) => (
                <li
                  key={name}
                  className={style.nav__item}>
                  <NavLink
                    to={path + '?' + searchParams}
                    className={getActiveNavLink}>
                    {name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className={style.topbar__right}>
          <NavLink
            to={'favourites'}
            className={({ isActive }) =>
              getActiveIcon({ isActive }, 'iconLike')
            }>
            <img
              src={like}
              className={style.topbar__icon}
            />
            {!!products.length && (
              <span className={style.topbar__count}>{products.length}</span>
            )}
          </NavLink>

          <NavLink
            to={'cart'}
            className={({ isActive }) =>
              getActiveIcon({ isActive }, 'iconCart')
            }>
            <img
              src={cartImg}
              className={style.topbar__icon}
            />
            {!!productsOfCart.length && (
              <span className={style.topbar__count}>{getLengthOfCart()}</span>
            )}
          </NavLink>

          <div
            className={`${style.topbar__iconContainer} ${style.topbar__burgerMenu}`}
            onClick={() => setIsMenuActive(!isMenuActive)}>
            {isMenuActive ? (
              <AiOutlineClose className={style.topbar__icon} />
            ) : (
              <AiOutlineMenu className={style.topbar__icon} />
            )}
          </div>
        </div>
      </div>
      <Aside />
    </>
  );
};
