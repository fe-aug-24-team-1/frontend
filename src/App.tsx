import { FC } from 'react';
import { Outlet } from 'react-router-dom';

import './app/i18n';

import { Header } from '@/widgets/Header';
import { Footer } from '@/widgets/Footer';

export const App: FC = () => {
  return (
    <>
      <Header />

      <main>
        <Outlet />
      </main>

      <Footer />
    </>
  );
};
