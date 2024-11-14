import { lazy, Suspense } from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';

import { App } from './App';

import { HomePage } from './pages/HomePage';
import { NotFoundPage } from './pages/NotFoundPage';
import FavouritesPageLoader from './pages/FavouritesPage/Loader';
import CatalogPageLoader from './pages/CatalogPage/Loader';
import ProductInfoPageLoader from './pages/ProductInfoPage/Loader';
import CartPageLoader from './pages/CartPage/Loader';

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

const ProductInfo = lazy(
  () =>
    import(
      /* webpackChunkName: "ProductInfo" */ '@/pages/ProductInfoPage/ProductInfoPage'
    )
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
              <Suspense fallback={<CatalogPageLoader />}>
                <Catalog category="phones" />
              </Suspense>
            }
          />
          <Route
            path=":productId?"
            element={
              <Suspense fallback={<ProductInfoPageLoader />}>
                <ProductInfo />
              </Suspense>
            }
          />
        </Route>

        <Route path="tablets">
          <Route
            index
            element={
              <Suspense fallback={<CatalogPageLoader />}>
                <Catalog category="tablets" />
              </Suspense>
            }
          />
          <Route
            path=":productId?"
            element={
              <Suspense fallback={<ProductInfoPageLoader />}>
                <ProductInfo />
              </Suspense>
            }
          />
        </Route>

        <Route path="accessories">
          <Route
            index
            element={
              <Suspense fallback={<CatalogPageLoader />}>
                <Catalog category="accessories" />
              </Suspense>
            }
          />
          <Route
            path=":productId?"
            element={
              <Suspense fallback={<ProductInfoPageLoader />}>
                <ProductInfo />
              </Suspense>
            }
          />
        </Route>

        <Route
          path="favourites"
          element={
            <Suspense fallback={<FavouritesPageLoader />}>
              <Favorites />
            </Suspense>
          }
        />
        <Route
          path="cart"
          element={
            <Suspense fallback={<CartPageLoader />}>
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
