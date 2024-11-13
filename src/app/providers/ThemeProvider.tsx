import {
  createContext,
  Dispatch,
  FC,
  ReactNode,
  useEffect,
  useState,
} from 'react';

interface State {
  theme: 'light' | 'dark';
}

interface Action {
  toggleTheme: () => void;
}

const initialState: State = {
  theme: 'light',
};

export const ThemeStateContext = createContext<State>(initialState);
export const ThemeDispatchContext = createContext<Dispatch<Action>>(() => {});

interface Props {
  children: ReactNode;
}

const getStoredTheme = (): 'light' | 'dark' => {
  const storedTheme = localStorage.getItem('theme');
  return storedTheme === 'light' ? 'dark' : 'light';
};

export const ThemeProvider: FC<Props> = ({ children }) => {
  const [theme, setTheme] = useState<'light' | 'dark'>(getStoredTheme());

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';

    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <ThemeDispatchContext.Provider value={toggleTheme}>
      <ThemeStateContext.Provider value={{ theme }}>
        {children}
      </ThemeStateContext.Provider>
    </ThemeDispatchContext.Provider>
  );
};
