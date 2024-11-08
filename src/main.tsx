import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { ThemeProvider } from './app/providers/ThemeProvider.tsx';

import { Root } from './Root.tsx';

import '@/styles/index.scss';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
      <Root />
    </ThemeProvider>
  </StrictMode>
);
