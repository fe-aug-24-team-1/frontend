import { Link, NavLink } from 'react-router-dom';
import { FC, Dispatch, SetStateAction } from 'react';
import cn from 'classnames';
import '@/app/i18n';
import { Navigation } from '../Navigation';
import style from './BurgerMenu.module.scss';
import i18next from 'i18next';
import { Lang } from '@/types/Lang';
import { useTranslation } from 'react-i18next';
import { Icon } from '../icon/Icon';

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
                <Icon.Close className={cn(style.iconTop)} />
              </Link>
            </div>
          </div>
        </div>

        <div>
          <Navigation isOpen={isOpen} />
        </div>

        <div className={style.buttons}>
          <div className={style.icons}>
            <NavLink to="/favourites">
              <Icon.Favorites className={cn(style.iconTop)} />
            </NavLink>
          </div>

          <div className={style.icons}>
            <NavLink to="/cart">
              <Icon.ShoppingBag className={style.iconTop} />
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};
