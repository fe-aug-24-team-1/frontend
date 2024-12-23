import slider1_mobile from '../../assets/images/slider/slider-1-mobile.png';
import slider1_tablet from '../../assets/images/slider/slider-1-tablet.png';
import slider2 from '../../assets/images/slider/slider-2.png';
import slider3 from '../../assets/images/slider/slider-3.png';
import style from './Slider.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';

import { Pagination, Autoplay, Navigation, Thumbs } from 'swiper/modules';
import 'swiper/scss';
import 'swiper/scss/pagination';
import { useEffect } from 'react';
import { useState } from 'react';
import { Icon } from '@/components/icon/Icon';

export const Slider = () => {
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
          nextEl: `.${style.swiperButtonNext}`,
          prevEl: `.${style.swiperButtonPrev}`,
        }
      }
      loop={true}
      centeredSlides={true}
      spaceBetween={20}>
      <SwiperSlide>
        <img
          src={isActiveNavigation ? slider1_tablet : slider1_mobile}
          className={style.img}
        />
      </SwiperSlide>
      <SwiperSlide>
        <div className={style.img__container}>
          <img
            src={slider2}
            className={style.img}
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <img
          src={slider3}
          className={style.img}
        />
      </SwiperSlide>
      <div
        slot="container-end"
        className={style.paginationContainer}
      />

      {isActiveNavigation && (
        <>
          <div className={`${style.swiperButtonNext}`}>
            <Icon.ChevronRight />
          </div>

          <div className={`${style.swiperButtonPrev}`}>
            <Icon.ChevronLeft />
          </div>

          {/* <div className={`${style.swiperButtonNext} swiper-button-next`} /> */}
          {/* <div className={`${style.swiperButtonPrev} swiper-button-prev`} /> */}
        </>
      )}
    </Swiper>
  );
};
