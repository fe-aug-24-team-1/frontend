import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import '@/styles/index.scss';
import { ThemeProvider } from './app/providers/ThemeProvider';
import { Provider } from 'react-redux';
import store from '@/app/store/store';
import { Root } from './Root';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
      <Provider store={store}>
        <Root />
      </Provider>
    </ThemeProvider>
  </StrictMode>
);
