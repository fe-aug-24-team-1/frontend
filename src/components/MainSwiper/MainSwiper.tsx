import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import { FreeMode, Navigation } from 'swiper/modules';
import { ProductCard } from '@/components/ProductCard';
//
// import photo from '../../../public/img/banner-tablets.png'

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import 'swiper/scss';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import 'swiper/css/free-mode';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import 'swiper/scss/navigation';

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
        freeMode={false}
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
          630: {},
          320: {},
        }}
        modules={[FreeMode, Navigation]}
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
