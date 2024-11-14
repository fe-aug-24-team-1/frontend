import style from './Breadcrumbs.module.scss';
import homeLight from '../../assets/images/icons/light/home.svg';
import homeDark from '../../assets/images/icons/dark/home.svg';
import rightArrow from '../../assets/images/icons/light/chevron-right.svg';
import { NavLink, useLocation } from 'react-router-dom';
import cn from 'classnames';
import { ThemeStateContext } from '@/app/providers/ThemeProvider/ThemeContext';
import { useContext } from 'react';
import { useTranslation } from 'react-i18next';

const getActiveLink = ({ isActive }: { isActive: boolean }) =>
  cn(style.path__direction, {
    [style['path__direction--active']]: isActive,
  });

export const Breadcrumbs: React.FC = () => {
  const { t } = useTranslation();

  const { theme } = useContext(ThemeStateContext);

  const fullPath = useLocation().pathname.split('/');

  const [, category, product] = fullPath;

  const normilizedProduct = product
    ? product
        .replace(/\b\w/g, (char) => char.toUpperCase())
        .split('-')
        .join(' ')
    : '';

  return (
    <div className={style.path}>
      <NavLink
        to="/"
        className={style.path__link}>
        <img
          src={theme === 'light' ? homeLight : homeDark}
          className={style.path__home}
        />
      </NavLink>
      <img
        src={rightArrow}
        className={style.path__arrow}
      />
      <NavLink
        to={`/${category}`}
        relative="path"
        className={getActiveLink}>
        {t(`breadCrumbs.${category}`)}
      </NavLink>
      {normilizedProduct && (
        <>
          <img
            src={rightArrow}
            className={style.path__arrow}
          />
          <p className={style.path__product}>{normilizedProduct}</p>
        </>
      )}
    </div>
  );
};
