import { Outlet } from 'react-router-dom';
import { FC, useState } from 'react';
import { Header } from './widgets/Header/Header';
import '@/app/i18n';
import { BurgerMenu } from './components/BurgerMenu';

export const App: FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      {isOpen ? (
        <aside>
          <BurgerMenu
            isOpen={isOpen}
            setIsOpen={setIsOpen}
          />
        </aside>
      ) : (
        <Header
          setIsOpen={setIsOpen}
          isOpen={isOpen}
        />
      )}

      <main className="App__main">
        <Outlet />
      </main>
    </div>
  );
};
