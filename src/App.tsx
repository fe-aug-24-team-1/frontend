import { Outlet } from 'react-router-dom';
import './App.scss';
import { Header } from './widgets/Header';
import { Footer } from './widgets/Footer';
import { FC } from 'react';

export const App: FC = () => {
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
