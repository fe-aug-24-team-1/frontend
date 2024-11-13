import style from './Breadcrumbs.module.scss';
import home from '../../assets/images/icons/light/home.svg';
import rightArrow from '../../assets/images/icons/light/chevron-right.svg';
import { NavLink, useLocation } from 'react-router-dom';
import cn from 'classnames';

const getActiveLink = ({ isActive }: { isActive: boolean }) =>
  cn(style.path__direction, {
    [style['path__direction--active']]: isActive,
  });

export const Breadcrumbs: React.FC = () => {
  const fullPath = useLocation().pathname.split('/');

  const [, category, product] = fullPath;

  return (
    <div className={style.path}>
      <NavLink
        to="/"
        className={style.path__link}>
        <img
          src={home}
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
        {category}
      </NavLink>
      {product && (
        <>
          <img
            src={rightArrow}
            className={style.path__arrow}
          />
          <p className={style.path__product}>{product}</p>
        </>
      )}
    </div>
  );
};
