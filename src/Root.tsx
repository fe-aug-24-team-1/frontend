import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import { App } from './App';
import { HomePage } from './pages/HomePage';
import { NotFoundPage } from './pages/NotFoundPage';
import { FavouritesPage } from './pages/FavouritesPage';
import { CartPage } from './pages/CartPage';
import { CatalogPage } from './pages/CatalogPage/CatalogPage';
import { ItemCardPage } from './pages/ItemCardPage/ItemCardPage';

export const Root = () => (
  <HashRouter>
    <Routes>
      <Route
        path="/"
        element={<App />}>
        <Route
          index
          element={<HomePage />}
        />
        <Route
          path="home"
          element={
            <Navigate
              to={'/'}
              replace
            />
          }
        />
        <Route path="phones">
          <Route
            index
            element={<CatalogPage category="phones" />}
          />
          <Route
            path={':productId'}
            element={<ItemCardPage />}
          />
        </Route>
        <Route path="tablets">
          <Route
            index
            element={<CatalogPage category="tablets" />}
          />
          <Route
            path={':productId'}
            element={<ItemCardPage />}
          />
        </Route>
        <Route path="accessories">
          <Route
            index
            element={<CatalogPage category="accessories" />}
          />
          <Route
            path={':productId'}
            element={<ItemCardPage />}
          />
        </Route>

        <Route
          path="favourites"
          element={<FavouritesPage />}
        />
        <Route
          path="cart"
          element={<CartPage />}
        />

        <Route
          path="*"
          element={<NotFoundPage />}
        />
      </Route>
    </Routes>
  </HashRouter>
);
