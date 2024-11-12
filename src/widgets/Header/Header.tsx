import logo from '/logo.svg';
import style from './Header.module.scss';
import { AiOutlineMenu } from 'react-icons/ai';
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
  cn(style.header__iconContainer, style[`header__${iconName}`], {
    [style['header__iconContainer--active']]: isActive,
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
      {isMenuActive ? (
        <Aside
          isMenuActive={isMenuActive}
          setIsMenuActive={setIsMenuActive}
        />
      ) : (
        <div className={style.header}>
          <div className={style.header__left}>
            <NavLink
              to="home"
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

          <div className={style.header__right}>
            <NavLink
              to={'favourites'}
              className={({ isActive }) =>
                getActiveIcon({ isActive }, 'iconLike')
              }>
              <img
                src={like}
                className={style.header__icon}
              />
              {!!products.length && (
                <span className={style.header__count}>{products.length}</span>
              )}
            </NavLink>

            <NavLink
              to={'cart'}
              className={({ isActive }) =>
                getActiveIcon({ isActive }, 'iconCart')
              }>
              <img
                src={cartImg}
                className={style.header__icon}
              />
              {!!productsOfCart.length && (
                <span className={style.header__count}>{getLengthOfCart()}</span>
              )}
            </NavLink>

            <div
              className={`${style.header__iconContainer} ${style.header__burgerMenu}`}>
              <AiOutlineMenu
                className={style.header__icon}
                onClick={() => setIsMenuActive(true)}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};
