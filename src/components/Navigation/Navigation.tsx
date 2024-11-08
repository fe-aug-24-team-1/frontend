import cn from 'classnames';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';
import './Navigation.scss';

interface Props {
  isOpen: boolean;
}

export const Navigation: FC<Props> = ({ isOpen }) => {
  const { t } = useTranslation();

  const getLinkClass = ({ isActive }: { isActive: boolean }) =>
    cn('header__nav--item_link', {
      'header__nav--item_link--active': isActive,
    });
  return (
    <nav
      className={cn('header__nav', {
        'header__nav--burger': isOpen,
      })}>
      <ul
        className={cn('header__nav--list', {
          'header__nav--list--burger': isOpen,
        })}>
        <li
          className={cn('header__nav--item', {
            'header__nav--item--burger': isOpen,
          })}>
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
  );
};
