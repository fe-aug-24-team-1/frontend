import React from 'react';
import styles from './Cart.module.scss';
import { CartCard } from '@/components/CartCard';
import { Button } from '@/components/Button';
import { BackButton } from '@/components/BackButton';

const products = {
  id: 'apple-iphone-11-128gb-black',
  category: 'phones',
  namespaceId: 'apple-iphone-11',
  name: 'Apple iPhone 11 128GB Black',
  capacityAvailable: ['64GB', '128GB', '256GB'],
  capacity: '128GB',
  priceRegular: 1100,
  priceDiscount: 1050,
  colorsAvailable: ['black', 'green', 'yellow', 'white', 'purple', 'red'],
  color: 'black',
  images: [
    'img/phones/apple-iphone-11/black/00.webp',
    'img/phones/apple-iphone-11/black/01.webp',
    'img/phones/apple-iphone-11/black/02.webp',
    'img/phones/apple-iphone-11/black/03.webp',
    'img/phones/apple-iphone-11/black/04.webp',
  ],
  description: [
    {
      title: 'And then there was Pro',
      text: [
        'A transformative triple-camera system that adds tons of capability without complexity.',
        'An unprecedented leap in battery life. And a mind-blowing chip that doubles down on machine learning and pushes the boundaries of what a smartphone can do. Welcome to the first iPhone powerful enough to be called Pro.',
      ],
    },
    {
      title: 'Camera',
      text: [
        'Meet the first triple-camera system to combine cutting-edge technology with the legendary simplicity of iPhone. Capture up to four times more scene. Get beautiful images in drastically lower light. Shoot the highest-quality video in a smartphone — then edit with the same tools you love for photos. You’ve never shot with anything like it.',
      ],
    },
    {
      title:
        'Shoot it. Flip it. Zoom it. Crop it. Cut it. Light it. Tweak it. Love it.',
      text: [
        'iPhone 11 Pro lets you capture videos that are beautifully true to life, with greater detail and smoother motion. Epic processing power means it can shoot 4K video with extended dynamic range and cinematic video stabilization — all at 60 fps. You get more creative control, too, with four times more scene and powerful new editing tools to play with.',
      ],
    },
  ],
  screen: "6.1' IPS",
  resolution: '1792x828',
  processor: 'Apple A13 Bionic',
  ram: '4GB',
  camera: '12 Mp + 12 Mp + 12MP',
  zoom: 'Digital, 5x',
  cell: ['GPRS', 'EDGE', 'WCDMA', 'UMTS', 'HSPA', 'LTE'],
};

export const Cart: React.FC = () => {
  return (
    <div className={styles[`cart-page`]}>
      <div className={styles[`container`]}>
        <div className={styles[`cart-page__back-button`]}>
          <BackButton />
        </div>
        <h2 className={styles[`cart-page__title`]}>Cart</h2>
        <div className={`${styles[`cart`]} ${styles[`cart-page__cart`]}`}>
          <div className={styles[`cart__items`]}>
            <CartCard product={products} />
            <CartCard product={products} />
            <CartCard product={products} />
          </div>

          <div className={`${styles[`cart__summary`]} ${styles[`summary`]}`}>
            <div className={styles[`summary__top`]}>
              <p className={styles[`summary__price`]}>$1000</p>

              <p className={styles[`summary__amount`]}>Total for 3 items</p>
            </div>

            <div className={styles[`decorative-line`]} />

            <Button>Checkout</Button>
          </div>
        </div>
      </div>
    </div>
  );
};
