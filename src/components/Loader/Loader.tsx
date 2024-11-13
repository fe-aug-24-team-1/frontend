import spinner from '../../assets/images/Spinner.svg';
import style from './Loader.module.scss';

export const Loader = () => (
  <div className={style.container}>
    <img src={spinner} />
  </div>
);
