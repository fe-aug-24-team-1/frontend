import { FC } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import cn from 'classnames';

import { Icon } from '../icon/Icon';

import styles from './Breadcrumbs.module.scss';

interface Props {
  name?: string | undefined;
}

export const Breadcrumbs: FC<Props> = ({ name }) => {
  const getLinkClass = ({ isActive }: { isActive: boolean }) =>
    cn(styles.path__category, {
      [styles['path__category--active']]: isActive,
    });

  const category = useLocation().pathname.split('/').slice(1, 2).join();

  return (
    <div className={styles.path}>
      <NavLink
        to="/"
        className={styles.path__link}>
        <Icon.Home className={styles.path__home} />
      </NavLink>

      <Icon.ChevronRight className={styles.path__arrow} />

      <NavLink
        to={`/${category}`}
        className={getLinkClass}>
        {category}
      </NavLink>

      {name && (
        <>
          <Icon.ChevronRight className={styles.path__arrow} />
          <p className={styles.path__name}>{name}</p>
        </>
      )}
    </div>
  );
};
