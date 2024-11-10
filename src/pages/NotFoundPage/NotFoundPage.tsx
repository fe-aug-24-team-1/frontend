import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

import styles from './NotFoundPage.module.scss';

import notFoundImg from '/img/page-not-found.png';

export const NotFoundPage: FC = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.page}>
      <h1 className={styles.page__title}>NotFoundPage</h1>

      <img
        src={notFoundImg}
        className={styles.page__img}
      />

      <button
        type="button"
        className={styles.page__button}
        onClick={() => navigate('/')}>
        Go to Home Page
      </button>
    </div>
  );
};
