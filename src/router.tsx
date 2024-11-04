import { HashRouter, Route, Routes } from 'react-router-dom';
import Root from './Root';
import App from './App';

export default function AppRouter() {
  return (
    <HashRouter>
      <Routes>
        <Route element={<Root />}>
          <Route
            path="/"
            element={<App />}
          />
          {/* Add other routes here */}
        </Route>
      </Routes>
    </HashRouter>
  );
}
