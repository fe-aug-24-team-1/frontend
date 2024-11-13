import logo from '/logo.svg';
import style from './Header.module.scss';
import { AiOutlineMenu } from 'react-icons/ai';
import { FC, useContext, useState } from 'react';
import { NavLink, useSearchParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';

import cn from 'classnames';
import { Aside } from '../../components/Aside';
import { Icon } from '@/components/icon/Icon';
import { Lang } from '@/types/Lang';

import { useAppSelector } from '@/app/store/hooks';
import { ThemeDispatchContext } from '@/app/providers/ThemeProvider/ThemeContext';

const getActiveNavLink = ({ isActive }: { isActive: boolean }) =>
  cn(style.nav__link, {
    [style['nav__link--active']]: isActive,
  });

const getActiveIcon = ({ isActive }: { isActive: boolean }, iconName: string) =>
  cn(style.header__iconContainer, style[`header__${iconName}`], {
    [style['header__iconContainer--active']]: isActive,
  });

export const Header: FC = () => {
  const [isMenuActive, setIsMenuActive] = useState(false);
  const [searchParams] = useSearchParams();

  const { products } = useAppSelector((state) => state.wishlist);

  const { productsOfCart } = useAppSelector((state) => state.cart);

  const { t } = useTranslation();

  const handleChangeLang = () => {
    const lang = i18next.language === Lang.EN ? Lang.UK : Lang.EN;

    i18next.changeLanguage(lang);
  };

  const navItems = [
    { path: '/', name: t('header.nav.home') },
    { path: 'phones', name: t('header.nav.phones') },
    { path: 'tablets', name: t('header.nav.tablets') },
    { path: 'accessories', name: t('header.nav.accessories') },
  ];

  const toggleTheme = useContext(ThemeDispatchContext);

  const getLengthOfCart = () => {
    return productsOfCart.length;
  };

  const handleToggleTheme = () => {
    toggleTheme();
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
            <div
              className={`${style.header__iconContainer} ${style.iconTheme}`}
              onClick={handleToggleTheme}>
              <Icon.Theme className={style.header__icon} />
            </div>

            <div
              className={`${style.header__iconContainer} ${style.iconLang}`}
              onClick={handleChangeLang}>
              <span className={style.header__icon}>{t('header.lang')}</span>
            </div>

            <NavLink
              to={'favourites'}
              className={({ isActive }) =>
                getActiveIcon({ isActive }, 'iconLike')
              }>
              <Icon.Favorites className={style.header__icon} />

              {!!products.length && (
                <span className={style.header__count}>{products.length}</span>
              )}
            </NavLink>

            <NavLink
              to={'cart'}
              className={({ isActive }) =>
                getActiveIcon({ isActive }, 'iconCart')
              }>
              <Icon.ShoppingBag className={style.header__icon} />

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
