import React from 'react';
// import { Icon } from '@/components/icon/Icon.tsx';

import styles from './SwiperButton.module.scss';
import { useSwiper } from 'swiper/react';

import { Icon } from '@/components/icon/Icon.tsx';

interface Props {
  direction: 'right' | 'left';
  disabled?: boolean;
}

export const SwiperButton: React.FC<Props> = ({
  direction,
  disabled = false,
}) => {
  const swiper = useSwiper();

  return (
    <>
      {direction === 'right' ? (
        <button
          disabled={disabled}
          onClick={() => swiper.slideNext()}
          className={styles[`button`]}>
          {/*<FaChevronRight size={16} />*/}
          <Icon.ChevronRight />
        </button>
      ) : (
        <button
          disabled={disabled}
          onClick={() => swiper.slidePrev()}
          className={styles[`button`]}>
          {/*<FaChevronLeft size={16} />*/}
          <Icon.ChevronLeft />
        </button>
      )}
    </>
  );
};
