import { Route, Routes, HashRouter as Router } from 'react-router-dom';
import { App } from './App';

export const Root = () => (
  <Router>
    <Routes>
      <Route
        path="/"
        element={<App />}>
        {/* <Route index element={} /> */}
        {/* <Route path="/home" element={<HomePage />} /> */}

        <Route path="tabs">
          {/* <Route path=":tabId?" element={<TabsPage />} /> */}
        </Route>

        {/* <Route path="*" element={<ErrorPage />} /> */}
      </Route>
    </Routes>
  </Router>
);
