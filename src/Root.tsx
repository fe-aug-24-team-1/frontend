import { lazy, Suspense } from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';

import { App } from './App';

import { Loader } from './components/Loader';

import { HomePage } from './pages/HomePage';
import { NotFoundPage } from './pages/NotFoundPage';
import { PhonesPage } from './pages/PhonesPage';
import { TabletsPage } from './pages/TabletsPage';
import { AccessoriesPage } from './pages/AccessoriesPage';

const Catalog = lazy(
  () =>
    import(
      /* webpackChunkName: "CatalogPage" */ '@/pages/CatalogPage/CatalogPage'
    )
);

const Favorites = lazy(
  () =>
    import(
      /* webpackChunkName: "CatalogPage" */ '@/pages/FavouritesPage/FavouritesPage'
    )
);

const Cart = lazy(
  () => import(/* webpackChunkName: "CartPage" */ '@/pages/CartPage/CartPage')
);

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
              to="/"
              replace
            />
          }
        />

        <Route path="phones">
          <Route
            index
            element={
              <Suspense fallback={<Loader />}>
                <Catalog category="phones" />
              </Suspense>
            }
          />
          <Route
            path=":productId?"
            element={<PhonesPage />}
          />
        </Route>

        <Route path="tablets">
          <Route
            index
            element={
              <Suspense fallback={<Loader />}>
                <Catalog category="tablets" />
              </Suspense>
            }
          />
          <Route
            path=":productId?"
            element={<TabletsPage />}
          />
        </Route>

        <Route path="accessories">
          <Route
            index
            element={
              <Suspense fallback={<Loader />}>
                <Catalog category="accessories" />
              </Suspense>
            }
          />
          <Route
            path=":productId?"
            element={<AccessoriesPage />}
          />
        </Route>

        <Route
          path="favourites"
          element={
            <Suspense fallback={<Loader />}>
              <Favorites />
            </Suspense>
          }
        />
        <Route
          path="cart"
          element={
            <Suspense fallback={<Loader />}>
              <Cart />
            </Suspense>
          }
        />

        <Route
          path="*"
          element={<NotFoundPage />}
        />
      </Route>
    </Routes>
  </HashRouter>
);
