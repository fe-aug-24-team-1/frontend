import { FC, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination, Thumbs } from 'swiper/modules';

import styles from './Slider.module.scss';

import 'swiper/css/bundle';

export const Slider: FC = () => {
  const [isActiveNavigation, setIsActiveNavigation] = useState(false);

  return (
    <Swiper
      modules={[Pagination, Autoplay, Navigation, Thumbs]}
      pagination={{ clickable: true }}
      autoplay={{ delay: 5000 }}
      navigation={
        isActiveNavigation && {
          nextEl: `${styles['slider__button--next']}`,
          prevEl: `${styles['slider__button--prev']}`,
        }
      }
      loop={true}
      centeredSlides={true}
      spaceBetween={20}>
      <SwiperSlide>
        <img src="../../assets/react.svg" />
      </SwiperSlide>

      <SwiperSlide>
        <img src="../../assets/react.svg" />
      </SwiperSlide>

      <SwiperSlide>
        <img src="../../assets/react.svg" />
      </SwiperSlide>
    </Swiper>
  );
};
