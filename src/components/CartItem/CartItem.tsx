import { FC } from 'react';
import {
  AiOutlineClose,
  AiOutlineMinusCircle,
  AiOutlinePlusCircle,
} from 'react-icons/ai';
import { Link } from 'react-router-dom';

import styles from './CartItem.module.scss';

export const CartItem: FC = () => {
  return (
    <div className={styles.card}>
      <div>
        <AiOutlineClose />

        <Link to="">
          <img />
        </Link>

        <Link to="">{}</Link>
      </div>

      <div>
        <div>
          <button>
            <AiOutlineMinusCircle />
          </button>

          <p></p>

          <button>
            <AiOutlinePlusCircle />
          </button>

          <h3></h3>
        </div>
      </div>
    </div>
  );
};
