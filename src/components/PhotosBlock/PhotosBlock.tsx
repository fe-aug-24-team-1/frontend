import React, { useRef, useState } from 'react';
import styles from './PhotosBlock.module.scss';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperType } from 'swiper';
import { Navigation } from 'swiper/modules';

import PhotoNotFound from '@/assets/images/Photo-not-found.svg';

import 'swiper/css';
import 'swiper/css/navigation';
import { Icon } from '../icon/Icon';

type Props = {
  name: string;
  photos: string[];
  className?: string;
};

export const PhotosBlock: React.FC<Props> = ({
  name,
  photos,
  className,
  ...props
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef<SwiperType | null>(null);
  const visiblePhotos = photos.length ? photos : [PhotoNotFound];

  return (
    <section
      className={`${styles.photos} ${className}`}
      {...props}>
      <div className={styles['photos__main']}>
        <Swiper
          navigation={{
            nextEl: '.custom-next',
            prevEl: '.custom-prev',
          }}
          modules={[Navigation]}
          className={styles['photos__swiper']}
          onSwiper={(swiperInstance) => (swiperRef.current = swiperInstance)}
          onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}>
          {visiblePhotos.map((photoAdress, index) => (
            <SwiperSlide key={photoAdress}>
              <div className={styles['photos__slide']}>
                <img
                  src={photoAdress}
                  className={styles['photos__photo']}
                  alt={`Photo №${index + 1} ${name}`}
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.onerror = null;
                    target.src = PhotoNotFound;
                  }}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div
          className={`${styles.photos__button} ${styles['photos__button--prev']} ${activeIndex === 0 && styles['photos__button--disabled']}`}
          onClick={() => swiperRef.current?.slidePrev()}>
          <Icon.ChevronLeft className="photos__icon" />
        </div>

        <div
          className={`${styles.photos__button} ${styles['photos__button--next']} ${activeIndex === photos.length - 1 && styles['photos__button--disabled']}`}
          onClick={() => swiperRef.current?.slideNext()}>
          <Icon.ChevronRight className="photos__icon" />
        </div>
      </div>

      <aside className={styles['photos__asaid']}>
        {visiblePhotos.map((photoAdress, index) => (
          <div
            key={photoAdress}
            className={`${styles.photos__container} ${index === activeIndex && styles['photos__container--active']}`}
            onClick={() => swiperRef.current?.slideTo(index)}>
            <img
              className={styles['photos__photo']}
              src={photoAdress}
              alt={`Miniature №${index + 1} ${name}`}
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.onerror = null;
                target.src = PhotoNotFound;
              }}
            />
          </div>
        ))}
      </aside>
    </section>
  );
};
