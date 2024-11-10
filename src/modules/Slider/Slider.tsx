import { FC, useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination, Thumbs } from 'swiper/modules';

import 'swiper/scss';
import 'swiper/scss/pagination';

import SLIDE_1_MOBILE from '@/assets/images/slider/slider-1-mobile.png';
import SLIDE_1_TABLET from '@/assets/images/slider/slider-1-tablet.png';
import SLIDE_2 from '@/assets/images/slider/slider-2.png';
import SLIDE_3 from '@/assets/images/slider/slider-3.png';

import styles from './Slider.module.scss';

export const Slider: FC = () => {
  const [isActiveNavigation, setIsActiveNavigation] = useState(false);

  useEffect(() => {
    const updateSwiperSettings = () => {
      if (window.innerWidth > 639) {
        setIsActiveNavigation(true);
      } else {
        setIsActiveNavigation(false);
      }
    };

    updateSwiperSettings();
    window.addEventListener('resize', updateSwiperSettings);

    return () => window.removeEventListener('resize', updateSwiperSettings);
  }, []);

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
        <img
          src={isActiveNavigation ? SLIDE_1_TABLET : SLIDE_1_MOBILE}
          className={styles.img}
        />
      </SwiperSlide>

      <SwiperSlide>
        <div className={styles.img__container}>
          <img
            src={SLIDE_2}
            className={styles.img}
          />
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className={styles.img__container}>
          <img
            src={SLIDE_3}
            className={styles.img}
          />
        </div>
      </SwiperSlide>

      <div
        slot="container-end"
        className={styles.paginationContainer}
      />

      {isActiveNavigation && (
        <>
          <div
            className={`${styles['slider__button--next']} swiper-button-next`}
          />
          <div
            className={`${styles['slider__button--prev']} swiper-button-prev`}
          />
        </>
      )}
    </Swiper>
  );
};
