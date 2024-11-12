import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';

import store from '@/app/store/store';
import { ThemeProvider } from './app/providers/ThemeProvider/ThemeProvider';

import { Root } from './Root';

import '@/styles/index.scss';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
      <Provider store={store}>
        <Root />
      </Provider>
    </ThemeProvider>
  </StrictMode>
);
