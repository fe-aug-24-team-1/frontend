import style from './Footer.module.scss';
import logo from '../../../public/logo.svg';
import { NavLink } from 'react-router-dom';

const navigation = [
  {
    href: 'https://github.com/Sukulynt/react_product-categories/',
    name: 'Github',
  },
  {
    href: 'https://github.com/Sukulynt',
    name: 'Contacts',
  },
  {
    href: 'https://github.com/Sukulynt',
    name: 'Rights',
  },
];

export const Footer = () => (
  <footer className={style.footer}>
    <a
      href="#"
      className={style.logo__link}>
      <img
        src={logo}
        alt="Logo"
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
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
      <p className={style.backToTop__text}>Back to top</p>
      <div className={style.backToTop__button}></div>
    </button>
  </footer>
);
