import styles from './BackButton.module.scss';
import { useNavigate } from 'react-router-dom';
import { Icon } from '@/components/icon/Icon.tsx';

export const BackButton = () => {
  const navigate = useNavigate();

  return (
    <button
      className={styles[`button`]}
      onClick={() => {
        navigate('../');
      }}>
      <Icon.ChevronLeft className={styles[`button__image`]} />
      <span className={styles[`button__text`]}>Back</span>
    </button>
  );
};
