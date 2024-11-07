import { Outlet } from 'react-router-dom';
// import './App.scss';
// import { Header } from './modules/shared/Header';
import { Footer } from '../src/components/Footer/Footer';

export const App = () => {
  return (
    <div>
      {/* <Header /> */}

      <main className="App__main">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};
