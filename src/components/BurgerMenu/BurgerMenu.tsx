import { Link, NavLink } from 'react-router-dom';
import { FC, Dispatch, SetStateAction } from 'react';
import '@/app/i18n';
import i18next from 'i18next';
import { useTranslation } from 'react-i18next';
import { Lang } from '@/types/Lang';
import cn from 'classnames';
import { Icon } from '../icon/Icon';
import { Navigation } from '../Navigation';
import style from './BurgerMenu.module.scss';
import { CounterGoods } from '../CounterGoods';

interface Props {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

export const BurgerMenu: FC<Props> = ({ isOpen, setIsOpen }) => {
  const { t } = useTranslation();

  const changeLang = () => {
    const lang = i18next.language === Lang.EN ? Lang.UK : Lang.EN;

    i18next.changeLanguage(lang);
  };

  const AmountProductsInCurt: number = 44;
  const AmountFavouriteProductsInCurt: number = 122;

  return (
    <div
      id="burger_menu"
      className={cn(style.pageMenu, {
        [style['pageMenu--open']]: isOpen,
      })}>
      <div className={style.container}>
        <div className={`${style.topBar} ${style.menuTop}`}>
          <div className={`${style.nav__i} ${style.logo__header}`}>
            <Link to="/">
              <img
                src="public/logo.svg"
                alt="Nice Gadgets Logo"
              />
            </Link>
          </div>

          <div className={`${style.nav__i}`}>
            <div className={`${style.icon__header}`}>
              <div className="header__theme">
                <div className="header__theme-button">
                  <img
                    alt="Theme"
                    className="header__theme-button-img"
                    // onClick={toggleTheme}
                  />
                </div>
              </div>
            </div>

            <div className={`${style.icon__header}`}>
              <div
                className="header__lang"
                onClick={changeLang}>
                <div className="header__lang-button">{t('header.lang')}</div>
              </div>
            </div>

            <div className={`${style.icon__header}`}>
              <Link
                to="/"
                onClick={() => setIsOpen(false)}>
                <Icon.Close className={cn(style.iconAll)} />
              </Link>
            </div>
          </div>
        </div>

        <div>
          <Navigation isOpen={isOpen} />
        </div>

        <div className={style.buttons}>
          <div className={style.icons}>
            <NavLink
              to="/favourites"
              className={style.acountForProducts}>
              <Icon.Favorites className={cn(style.iconAll)} />

              <CounterGoods
                isOpen={isOpen}
                amountAllProducts={AmountFavouriteProductsInCurt}
              />
            </NavLink>
          </div>

          <div className={style.icons}>
            <NavLink
              to="/cart"
              className={style.acountForProducts}>
              <Icon.ShoppingBag className={style.iconAll} />

              <CounterGoods
                isOpen={isOpen}
                amountAllProducts={AmountProductsInCurt}
              />
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};
