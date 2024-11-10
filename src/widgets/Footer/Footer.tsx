import { FC } from 'react';
import { NavLink } from 'react-router-dom';

import logo from '/logo.svg';

import styles from './Footer.module.scss';

const navigation = [
  {
    href: 'https://github.com/fe-aug-24-team-1/frontend',
    name: 'Github',
  },
  {
    href: 'https://github.com/RostyslavSharuiev',
    name: 'Contacts',
  },
  {
    href: 'https://github.com/RostyslavSharuiev',
    name: 'Rights',
  },
];

export const Footer: FC = () => {
  return (
    <footer className={styles.footer}>
      <a
        href="#"
        className={styles.logo__link}>
        <img
          src={logo}
          className={styles.logo}
        />
      </a>
      <nav className={styles.nav}>
        <ul className={styles.nav__list}>
          {navigation.map(({ href, name }) => (
            <li
              key={name}
              className={styles.nav__item}>
              <NavLink
                to={href}
                target="_blank"
                className={styles.nav__link}>
                {name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
      <button
        className={styles['back-to-top']}
        onClick={() => window.scrollTo({ top: 0 })}>
        <p className={styles['back-to-top__text']}>Back to top</p>
        <div className={styles['back-to-top__button']} />
      </button>
    </footer>
  );
};
