import { FC } from 'react';
import { NavLink } from 'react-router-dom';

import { scrollToTop } from '@/utils/scrolltoTop';

import { Icon } from '@/components/icon/Icon';

import logo from '/logo.svg';
import style from './Footer.module.scss';

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
    <footer className={style.footer}>
      <a
        href="#"
        className={style.logo__link}>
        <img
          src={logo}
          className={style.logo}
        />
      </a>
      <nav className={style.nav}>
        <ul className={style.nav__list}>
          {navigation.map(({ href, name }) => (
            <li
              key={name}
              className={style.nav__item}>
              <NavLink
                to={href}
                target="_blank"
                className={style.nav__link}>
                {name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
      <button
        className={style.backToTop}
        onClick={scrollToTop}>
        <p className={style.backToTop__text}>Back to top</p>
        <div className={style.backToTop__button}>
          <Icon.ChevronUp />
        </div>
      </button>
    </footer>
  );
};
