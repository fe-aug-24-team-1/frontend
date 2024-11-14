import { FC, useContext } from 'react';
import { NavLink } from 'react-router-dom';

import { scrollToTop } from '@/utils/scrolltoTop';

import { Icon } from '@/components/icon/Icon';

import logoLight from '../../assets/images/icons/light/logo.svg';
import logoDark from '../../assets/images/icons/dark/logo.svg';
import style from './Footer.module.scss';
import { useTranslation } from 'react-i18next';
import { ThemeStateContext } from '@/app/providers/ThemeProvider/ThemeContext';

export const Footer: FC = () => {
  const { theme } = useContext(ThemeStateContext);

  const { t } = useTranslation();

  const navigation = [
    {
      href: 'https://github.com/fe-aug-24-team-1/frontend',
      name: 'Github',
    },
    {
      href: 'https://github.com/RostyslavSharuiev',
      name: t('footer.contacts'),
    },
    {
      href: 'https://github.com/RostyslavSharuiev',
      name: t('footer.rights'),
    },
  ];

  return (
    <footer className={style.footer}>
      <a
        href="#"
        className={style.logo__link}>
        <img
          src={theme === 'light' ? logoLight : logoDark}
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
        <p className={style.backToTop__text}>{t('footer.backToTop')}</p>
        <div className={style.backToTop__button}>
          <Icon.ChevronUp />
        </div>
      </button>
    </footer>
  );
};
