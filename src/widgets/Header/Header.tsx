import { FC, useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import logo from '/logo.svg';

import './Header.scss';
import cn from 'classnames';
import { ThemeDispatchContext } from '@/app/providers/ThemeProvider';
import i18next from 'i18next';
import { Lang } from '@/types/Lang';
import { Icon } from '@/components/icon/Icon';

export const Header: FC = () => {
  const toggleTheme = useContext(ThemeDispatchContext);

  const { t } = useTranslation();

  const getLinkClass = ({ isActive }: { isActive: boolean }) =>
    cn('header__nav--item_link', {
      'header__nav--item_link--active': isActive,
    });

  const changeLang = () => {
    const lang = i18next.language === Lang.EN ? Lang.UK : Lang.EN;

    i18next.changeLanguage(lang);
  };

  return (
    <header className="header">
      <div className="top-bar">
        <div className="top-bar_left">
          <div className="header__logo">
            <img
              src={logo}
              alt="Nice gadgets logo"
            />
          </div>

          <nav className="header__nav">
            <ul className="header__nav--list">
              <li className="header__nav--item">
                <NavLink
                  to="/"
                  className={getLinkClass}>
                  {t('header.nav.home')}
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/phones"
                  className={getLinkClass}>
                  {t('header.nav.phones')}
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/tablets"
                  className={getLinkClass}>
                  {t('header.nav.tablets')}
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/accessories"
                  className={getLinkClass}>
                  {t('header.nav.accessories')}
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>

        <div className="top-bar_right">
          <div className="icon">
            <div className="header__theme">
              <div className="header__theme-button">
                <img
                  alt="Theme"
                  className="header__theme-button-img"
                  onClick={toggleTheme}
                />
              </div>
            </div>

            <div
              className="header__lang"
              onClick={changeLang}>
              <div className="header__lang-button">{t('header.lang')}</div>
            </div>

            <NavLink to="/favorites">
              <Icon.Favorites className="icon--favourites_img" />
            </NavLink>

            <NavLink
              to="/cart"
              className="header__icons--cart">
              <Icon.ShoppingBag className="icon--cart_img" />
            </NavLink>

            <a
              href="#burger_menu"
              className="burger_menu_icon">
              <Icon.Menu className="burger_menu_icon_img" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};
