import { Route, HashRouter as Router, Routes } from 'react-router-dom';
import { App } from './App';

export const Root = () => (
  <Router>
    <Routes>
      <Route
        path={'/'}
        element={<App />}>
        {/* <Route index element={<HomePage />} /> */}
        {/* other roots */}
        {/* <Route path="*" element={<NotFoundPage />} /> */}
      </Route>
    </Routes>
  </Router>
);
