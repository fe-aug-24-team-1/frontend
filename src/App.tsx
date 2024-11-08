import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import '@/app/i18n';

import { Header } from './widgets/Header/Header';
import { Footer } from '@/components/Footer/Footer';

export const App: FC = () => {
  return (
    <div>
      <Header />

      <main className="App__main">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};
