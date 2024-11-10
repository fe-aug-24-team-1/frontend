import { FC } from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import { Main } from './pages/Main/Main';
import { App } from './App';
import { Wishlist } from './pages/Wishlist/Wishlist';
import { NotFoundPage } from './pages/NotFoundPage/NotFoundPage';
import { Cart } from './pages/Cart/Cart';

export const Root: FC = () => (
  <HashRouter>
    <Routes>
      <Route
        path="/"
        element={<App />}>
        <Route
          index
          element={<Main />}
        />

        {/* <Route path="phones">
          <Route
            index
            element={}
          />
          <Route
            path=":slug"
            element={}
          />
        </Route> */}

        <Route
          path="favorites"
          element={<Wishlist />}
        />

        <Route
          path="cart"
          element={<Cart />}
        />

        <Route
          path="*"
          element={<NotFoundPage />}
        />
      </Route>
    </Routes>
  </HashRouter>
);
