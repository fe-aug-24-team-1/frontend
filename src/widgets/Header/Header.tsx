import { FC, /* useContext, */ SetStateAction, Dispatch } from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import logo from '/logo.svg';

import './Header.scss';
// import { ThemeDispatchContext } from '@/app/providers/ThemeProvider';
import i18next from 'i18next';
import { Lang } from '@/types/Lang';
import { Icon } from '@/components/icon/Icon';
import { Navigation } from '@/components/Navigation';
import { CounterGoods } from '@/components/CounterGoods';

interface Props {
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  isOpen: boolean;
}

export const Header: FC<Props> = ({ isOpen, setIsOpen }) => {
  // const toggleTheme = useContext(ThemeDispatchContext);

  const { t } = useTranslation();

  const changeLang = () => {
    const lang = i18next.language === Lang.EN ? Lang.UK : Lang.EN;

    i18next.changeLanguage(lang);
  };

  const AmountProductsInCurt: number = 45;
  const AmountFavouriteProductsInCurt: number = 12;

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

          <div className="header_nav-nav">
            <Navigation isOpen={isOpen} />
          </div>
        </div>

        <div className="top-bar_right">
          <div className="icon">
            <div className="header__theme">
              <div className="header__theme-button">
                <img
                  alt="Theme"
                  className="header__theme-button-img"
                  // onClick={toggleTheme}
                />
              </div>
            </div>

            <div
              className="header__lang"
              onClick={changeLang}>
              <div className="header__lang-button">{t('header.lang')}</div>
            </div>

            <NavLink
              to="/favorites"
              className="acountForProducts">
              <Icon.Favorites className="icon--favourites_img" />

              <CounterGoods
                isOpen={isOpen}
                amountAllProducts={AmountFavouriteProductsInCurt}
              />
            </NavLink>

            <NavLink
              to="/cart"
              className="header__icons--cart acountForProducts">
              <Icon.ShoppingBag className="icon--cart_img" />

              <CounterGoods
                isOpen={isOpen}
                amountAllProducts={AmountProductsInCurt}
              />
            </NavLink>
          </div>
        </div>

        <div className="burger_menu_ic">
          <div
            className="burger_menu_icon"
            onClick={() => setIsOpen(true)}>
            <Icon.Menu className="burger_menu_icon_img" />
          </div>
        </div>
      </div>
    </header>
  );
};
