import { useNavigate } from 'react-router-dom';
import notFoundPage from '/img/page-not-found.png';
import style from './NotFoundPage.module.scss';
import { useTranslation } from 'react-i18next';

export const NotFoundPage = () => {
  const navigate = useNavigate();

  const { t } = useTranslation();

  return (
    <div className={style.pageNotFound}>
      <h1 className={style.pageNotFound__title}>{t('notFoundPage.title')}</h1>
      <button
        type="button"
        className={style.pageNotFound__button}
        onClick={() => navigate('/home')}>
        {t('notFoundPage.backToHome')}
      </button>
      <img
        src={notFoundPage}
        alt="Empty Cart"
        className={style.pageNotFound__img}
      />
    </div>
  );
};
