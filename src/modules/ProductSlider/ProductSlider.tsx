import { ProductCard } from '../ProductCard';
import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import { getVisibleProducts } from '@/utils/getVisibleProducts.ts';
import { Product } from '@/types/Product.ts';
import { useAppSelector } from '@/app/store/hooks';
import { SwiperButton } from '@/components/SwiperButton';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import 'swiper/scss';

import styles from './ProductSlider.module.scss';

type Props = {
  title: string;
  discount: boolean;
  random: boolean;
};

export const ProductSlider: React.FC<Props> = ({ title, discount, random }) => {
  const { products } = useAppSelector((state) => state.products);

  const [visibleList, setVisibleList] = useState<Product[]>([]);

  useEffect(() => {
    const newList = getVisibleProducts(products, discount, random);

    setVisibleList(newList);
  }, [discount, products, random]);

  const [progressSwiper, setProgressSwiper] = useState(0);

  const handleProgress = (progress: number) => {
    setProgressSwiper(progress);
  };

  return (
    <div className="container">
      <Swiper
        slidesPerView="auto"
        spaceBetween={16}
        onProgress={(_, progress) => {
          handleProgress(progress);
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
          <p className={styles[`swiper__title`]}>{title}</p>
          <div className={styles[`swiper__buttons`]}>
            <SwiperButton
              direction={'left'}
              disabled={progressSwiper === 0}
            />
            <SwiperButton
              direction={'right'}
              disabled={progressSwiper === 1}
            />
          </div>
        </div>

        {visibleList.map((prod) => (
          <SwiperSlide
            key={prod.id}
            className={styles[`swiper__slide`]}>
            <ProductCard prod={prod} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
