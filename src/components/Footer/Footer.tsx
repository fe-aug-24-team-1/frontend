import styles from './Footer.module.scss';
import Logo from '../../../public/logo.svg';
import { Link } from 'react-router-dom';
import { SliderButton } from '../SliderButton';
import Arrow from '../../assets/images/icons/chevron-up.svg';

type NavLink = { title: string; path: string };

const links: NavLink[] = [
  { title: 'Github', path: '/' },
  { title: 'Contacts', path: '/' },
  { title: 'Rights', path: '/' },
];

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
};

export const Footer = () => {
  return (
    <footer className={styles.Footer}>
      <div className={styles.Footer__content}>
        <Link
          to="/"
          className={styles.Footer__logo}>
          <img
            src={Logo}
            alt="Logo"
          />
        </Link>

        <nav className={styles.Footer__nav}>
          <ul className={styles.Footer__list}>
            {links.map((link) => (
              <li
                key={link.title}
                className={styles.Footer__item}>
                <a
                  href={link.path}
                  target="_blank"
                  className={styles.Footer__link}
                  rel="noreferrer">
                  {link.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className={styles.Footer__backTop}>
          <span>Back to top</span>
          <SliderButton onClick={scrollToTop}>
            <img
              src={Arrow}
              alt="Scroll to top"
              className={styles.Footer__icon}
            />
          </SliderButton>
        </div>
      </div>
    </footer>
  );
};
