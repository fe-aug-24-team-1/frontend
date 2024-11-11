import { Outlet } from 'react-router-dom';
import './App.scss';
import { Header } from './widgets/Header';
import { Footer } from './widgets/Footer';
import { FC } from 'react';

export const App: FC = () => {
  return (
    <div className="App">
      <Header />

      <div className="App__content">
        <Outlet />
      </div>

      <Footer />
    </div>
  );
};
