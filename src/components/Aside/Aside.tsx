import cn from 'classnames';
import style from './Aside.module.scss';
import { NavLink } from 'react-router-dom';
import { AiOutlineClose } from 'react-icons/ai';
import { useEffect, Dispatch, SetStateAction, useContext } from 'react';
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';

import logoLight from '../../assets/images/icons/light/logo.svg';
import logoDark from '../../assets/images/icons/dark/logo.svg';

import { useAppSelector } from '@/app/store/hooks';
import { Icon } from '../icon/Icon';
import {
  ThemeDispatchContext,
  ThemeStateContext,
} from '@/app/providers/ThemeProvider/ThemeContext';
import { Lang } from '@/types/Lang';

const getActiveLink = ({ isActive }: { isActive: boolean }) =>
  cn(style.nav__link, {
    [style['nav__link--active']]: isActive,
  });

const getActiveIcon = ({ isActive }: { isActive: boolean }, iconName: string) =>
  cn(style.menu__bottom__icon, style[`menu__bottom__icon__${iconName}`], {
    [style['menu__bottom__icon--active']]: isActive,
  });

interface Props {
  isMenuActive: boolean;
  setIsMenuActive: Dispatch<SetStateAction<boolean>>;
}

export const Aside: React.FC<Props> = ({ isMenuActive, setIsMenuActive }) => {
  const { products } = useAppSelector((state) => state.wishlist);
  const { productsOfCart } = useAppSelector((state) => state.cart);

  const { t } = useTranslation();

  const { theme } = useContext(ThemeStateContext);

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

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 639 && isMenuActive) {
        setIsMenuActive(false);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [isMenuActive, setIsMenuActive]);

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
            src={theme === 'light' ? logoLight : logoDark}
            alt="logo"
            className={style.logo}
            onClick={() => setIsMenuActive(false)}
          />
        </NavLink>

        <div className={style.allTopIcons}>
          <div className={style.icon__container}>
            <Icon.Theme
              className={style.icon__top}
              onClick={toggleTheme}
            />
          </div>

          <div
            className={style.icon__container}
            onClick={handleChangeLang}>
            <span className={style.icon__top}>{t('header.lang')}</span>
          </div>

          <div className={style.icon__container}>
            <AiOutlineClose
              className={style.icon__top}
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
          <Icon.Favorites className={style.menu__bottom__icon__img} />

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
          <Icon.ShoppingBag className={style.menu__bottom__icon__img} />

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
