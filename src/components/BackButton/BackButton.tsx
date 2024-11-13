import styles from './BackButton.module.scss';
import { useNavigate } from 'react-router-dom';
import { FaChevronLeft } from 'react-icons/fa';

export const BackButton = () => {
  const navigate = useNavigate();

  return (
    <button
      className={styles[`button`]}
      onClick={() => {
        navigate('../');
      }}>
      <FaChevronLeft className={styles[`button__image`]} />
      <span className={styles[`button__text`]}>Back</span>
    </button>
  );
};
