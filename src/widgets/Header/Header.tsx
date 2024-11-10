import { FC, MouseEventHandler, useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { IoSunnyOutline, IoMoonOutline } from 'react-icons/io5';
import cn from 'classnames';
import i18next from 'i18next';

import { Lang } from '@/types/Lang';

import {
  ThemeDispatchContext,
  ThemeStateContext,
} from '@/app/providers/ThemeProvider';
import { Icon } from '@/components/icon/Icon';

import logo from '/logo.svg';

import styles from './Header.module.scss';

const navItems = [
  { path: '/', name: 'home' },
  { path: 'phones', name: 'phones' },
  { path: 'tablets', name: 'tablets' },
  { path: 'accessories', name: 'accessories' },
];

export const Header: FC = () => {
  const toggleTheme = useContext(ThemeDispatchContext);
  const { theme } = useContext(ThemeStateContext);

  const { t } = useTranslation();

  const getLinkClass = ({ isActive }: { isActive: boolean }) =>
    cn(styles.nav__link, {
      [styles['nav__link--active']]: isActive,
    });

  const getActiveIcon = (
    { isActive }: { isActive: boolean },
    iconName: string
  ) =>
    cn(styles.header__iconContainer, styles[`header__${iconName}`], {
      [styles['header__iconContainer--active']]: isActive,
    });

  const handleChangeLang = () => {
    const lang = i18next.language === Lang.EN ? Lang.UK : Lang.EN;

    i18next.changeLanguage(lang);
  };

  // const handleChangeTheme = (event: MouseEventHandler<SVGAElement>) => {
  //   toggleTheme(event);
  // };

  return (
    <>
      <header className={styles.header}>
        <div className={styles.header__left}>
          <NavLink
            to="/"
            className={styles.logo__link}>
            <img
              src={logo}
              alt="Nice gadgets logo"
            />
          </NavLink>

          <nav className={styles.nav}>
            <ul className={styles.nav__list}>
              {navItems.map(({ path, name }) => (
                <li
                  key={name}
                  className={styles.nav__item}>
                  <NavLink
                    to={path}
                    className={getLinkClass}>
                    {t(`header.nav.${name}`)}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className={styles.header__right}>
          <div
            className={`${styles.header__iconContainer} ${styles.header__iconTheme}`}>
            <div className={styles.header__iconCart}>
              {theme === 'dark' ? (
                <IoSunnyOutline
                  className={styles.header__icon}
                  onClick={toggleTheme}
                />
              ) : (
                <IoMoonOutline
                  className={styles.header__icon}
                  onClick={toggleTheme}
                />
              )}
            </div>
          </div>

          <div
            className={`${styles.header__iconContainer} ${styles.header__iconLang}`}
            onClick={handleChangeLang}>
            <div className={styles.header__icon}>{t('header.lang')}</div>
          </div>

          <NavLink
            to="/favorites"
            className={({ isActive }) =>
              getActiveIcon({ isActive }, 'iconLike')
            }>
            <Icon.Favorites className={styles.header__icon} />
          </NavLink>

          <NavLink
            to="/cart"
            className={({ isActive }) =>
              getActiveIcon({ isActive }, 'iconCart')
            }>
            <Icon.ShoppingBag className={styles.header__icon} />
          </NavLink>
        </div>
      </header>
    </>
  );
};
