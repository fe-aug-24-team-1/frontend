import { Link, NavLink, Outlet } from 'react-router-dom';
import style from './App.module.scss';
import cn from 'classnames';
// import { Header } from './modules/shared/Header';
// import { Footer } from './modules/shared/Footer';

export const App = () => {
  const getLinkClass = ({ isActive }: { isActive: boolean }) =>
    cn(style.nav__link, {
      [style.isActive]: isActive,
    });

  // const getIconClass = ({ isActive }: { isActive: boolean }) =>
  //   cn('icons', {
  //     'icons--is-active': isActive,
  //   });

  // const [activeSelectedIcon, setActiveSelectedIcon] = useState({
  //   activeIcon: null,
  //   objects: [
  //     { id: 1, name: 'favourites', url: '' },
  //     { id: 2, name: 'sho' },
  //   ],
  // });

  return (
    <div>
      {/* <Header /> */}

      <aside className={style.pageMenu}>
        <div className={style.container}>
          <div className={`${style.topBar} ${style.menuTop}`}>
            <div className={`${style.nav__i} ${style.logo__header}`}>
              <Link to="/">
                <img
                  // className="top-bar__logo"
                  src="public/logo.svg"
                  alt="Nice Gadgets Logo"
                />
              </Link>
            </div>

            {/* // use nth: not lastchild border-left */}
            <div className={`${style.nav__i}`}>
              <div className={`${style.icon__header}`}>
                <Link
                  to="/"
                  className={`${style.icon} ${style.iconClose}`}></Link>
              </div>

              {/* ${style.nav__i} */}
              <div className={`${style.icon__header}`}>
                <Link
                  to="/"
                  className={`${style.icon} ${style.iconClose}`}></Link>
              </div>
            </div>

            {/* prev stage */}
            {/* <div className={`${style.nav__i} ${style.icon__header}`}>
              <Link
                to="/"
                className={`${style.icon} ${style.iconClose}`}></Link>
            </div>

            <div className={`${style.nav__i} ${style.icon__header}`}>
              <Link
                to="/"
                className={`${style.icon} ${style.iconClose}`}></Link>
            </div> */}
          </div>

          {/* <div className="burger__menu"> */}
          <div>
            <nav className={style.menu__nav}>
              <ul className={style.nav__list}>
                {/* <li className="nav__list"> */}
                <li className={style.nav__item}>
                  <NavLink
                    to="/"
                    // className="nav__link is-active">
                    className={getLinkClass}>
                    Home
                  </NavLink>
                </li>

                <li className={style.nav__item}>
                  <NavLink
                    to="/products"
                    className={getLinkClass}>
                    Products
                  </NavLink>
                </li>

                <li className={style.nav__item}>
                  <NavLink
                    to="/tablets"
                    className={getLinkClass}>
                    Tablets
                  </NavLink>
                </li>

                <li className={style.nav__item}>
                  <NavLink
                    to="/accessories"
                    className={getLinkClass}>
                    Accessories
                  </NavLink>
                </li>
              </ul>
            </nav>
          </div>

          <div className={style.buttons}>
            <div className={style.icons}>
              <NavLink
                to="/favourites"
                className={`${style.icon} ${style.iconFavourite}`}></NavLink>
            </div>

            <div className={style.icons}>
              <NavLink
                to="/cart"
                className={`${style.icon} ${style.iconCart}`}></NavLink>
            </div>
          </div>
        </div>
      </aside>

      <main className="App__main">
        <Outlet />
      </main>

      {/* <Footer /> */}
    </div>
  );
};
