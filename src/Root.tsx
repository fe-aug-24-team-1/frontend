import { lazy, Suspense } from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';

import { App } from './App';

import { Loader } from './components/Loader';

import { HomePage } from './pages/HomePage';
import { NotFoundPage } from './pages/NotFoundPage';
import { ProductInfo } from './components/ProductInfo';

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
            element={<ProductInfo />}
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
            element={<ProductInfo />}
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
            element={<ProductInfo />}
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
