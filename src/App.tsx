import { Outlet } from 'react-router-dom';
import './App.scss';
import { Header } from './widgets/Header';
import { Footer } from './widgets/Footer';
import { FC, useEffect } from 'react';

import '@/app/i18n';
import { useAppDispatch } from './app/store/hooks';
import { getProducts } from './features/products/productsSlice';

export const App: FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <div className="App">
      <Header />

      <main className="App__content">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};
