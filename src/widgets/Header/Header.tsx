import { FC } from 'react';
import { NavLink } from 'react-router-dom';

import logo from '/logo.svg';

import styles from './Header.module.scss';
import cn from 'classnames';

export const Header: FC = () => {
  const getLinkClass = ({ isActive }: { isActive: boolean }) => cn();

  return (
    <header className={styles.header}>
      <div>
        <img
          src={logo}
          alt="Nice gadgets logo"
        />

        <nav className={styles.nav}>
          <ul className={styles.navList}>
            <li className={styles.navItem}>
              <NavLink
                to="/"
                className="">
                home
              </NavLink>
            </li>

            <li className={styles.navItem}>
              <NavLink to="/phones">phones</NavLink>
            </li>

            <li className={styles.navItem}>
              <NavLink to="/tablets">tablets</NavLink>
            </li>

            <li className={styles.navItem}>
              <NavLink to="/accessories">accessories</NavLink>
            </li>
          </ul>
        </nav>
      </div>

      <div>
        <select></select>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </header>
  );
};
