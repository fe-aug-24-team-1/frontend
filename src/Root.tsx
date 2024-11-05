import { Route, HashRouter, Routes } from 'react-router-dom';
import { App } from './App';
import PageNotFound from './components/PageNotFound/PageNotFound';
import ProductNotFound from './components/ProductNotFound/ProductNotFound';

export const Root = () => (
  <HashRouter>
    <Routes>
      <Route
        path="/"
        element={<App />}>
        {/* <Route index element={} /> */}
        {/* <Route path="/home" element={<HomePage />} /> */}

        <Route path="tabs">
          {/* <Route path=":tabId?" element={<TabsPage />} /> */}
          <Route
            path="*"
            element={<ProductNotFound />}
          />
        </Route>

        <Route
          path="*"
          element={<PageNotFound />}
        />
      </Route>
    </Routes>
  </HashRouter>
);
