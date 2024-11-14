import styles from './BackButton.module.scss';
import { useNavigate } from 'react-router-dom';
import { Icon } from '@/components/icon/Icon';
import { useTranslation } from 'react-i18next';

export const BackButton = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <button
      className={styles[`button`]}
      onClick={() => {
        navigate('../');
      }}>
      <Icon.ChevronLeft className={styles[`button__image`]} />
      <span className={styles[`button__text`]}>{t('cartPage.back')}</span>
    </button>
  );
};
