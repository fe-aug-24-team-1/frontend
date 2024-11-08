import { FC } from 'react';
import { Outlet } from 'react-router-dom';

import { Header } from './widgets/Header/Header';

import '@/app/i18n';

// import { Footer } from './modules/shared/Footer';

export const App: FC = () => {
  return (
    <div>
      <Header />

      <main className="App__main">
        <Outlet />
      </main>

      {/* <Footer /> */}
    </div>
  );
};
