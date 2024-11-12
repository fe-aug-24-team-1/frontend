import { Outlet } from 'react-router-dom';
import './App.scss';
import { Header } from './widgets/Header';
import { Footer } from './widgets/Footer';
import { FC } from 'react';
// import { Aside } from './components/Aside';

export const App: FC = () => {
  return (
    <div className="App">
      <Header />

      {/* <Aside /> */}

      <div className="App__content">
        <Outlet />
      </div>

      <Footer />
    </div>
  );
};
