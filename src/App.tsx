import { FC } from 'react';
import { Header } from './widgets/Header/Header';

import './app/i18n';
import { Breadcrumbs } from './components/Breadcrumbs';
import { Slider } from '@/modules/Slider/Slider';

export const App: FC = () => {
  return (
    <>
      <Header />
      <Breadcrumbs name="12345" />
      <Slider />
    </>
  );
};
