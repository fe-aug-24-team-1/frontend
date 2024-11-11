import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { ProductCard } from '@/components/ProductCard';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import 'swiper/scss';

import styles from './MainSwiper.module.scss';
import { SwiperButton } from '@/components/SwiperButton';
import { TypePhone } from '@/types/TypePhone.ts';

interface Props {
  swiperTitle: string;
  products: TypePhone[];
}

export const MainSwiper: React.FC<Props> = ({ swiperTitle, products }) => {
  const [reachFirst, setReachFirst] = useState(true);
  const [reachLast, setReachLast] = useState(false);

  return (
    <>
      <Swiper
        slidesPerView="auto"
        spaceBetween={16}
        onReachBeginning={() => setReachFirst(true)}
        onReachEnd={() => setReachLast(true)}
        onFromEdge={() => {
          setReachLast(false);
          setReachFirst(false);
        }}
        breakpoints={{
          1200: {
            slidesPerView: 4,
          },
          630: {
            slidesPerView: 'auto',
          },
          320: {
            slidesPerView: 'auto',
          },
        }}
        className={styles[`swiper`]}>
        <div
          className={styles[`swiper__top`]}
          slot="container-start">
          <p className={styles[`swiper__title`]}>{swiperTitle}</p>
          <div className={styles[`swiper__buttons`]}>
            <SwiperButton
              direction={'left'}
              disabled={reachFirst}
            />
            <SwiperButton
              direction={'right'}
              disabled={reachLast}
            />
          </div>
        </div>

        {products.map((prod) => (
          <SwiperSlide
            key={prod.id}
            className={styles[`swiper__slide`]}>
            <ProductCard product={prod} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};
