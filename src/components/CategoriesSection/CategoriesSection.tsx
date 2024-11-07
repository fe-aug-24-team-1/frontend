import React from 'react';
import styles from './CategoriesSection.module.scss';
import { Link } from 'react-router-dom';

export const CategoriesSection: React.FC = () => {
  return (
    <div className={styles[`section`]}>
      <div className={styles[`section__title`]}>Shop by category</div>

      <div className={styles[`section__category-list`]}>
        <div className={`${styles[`section__category`]} ${styles[`category`]}`}>
          <Link
            to="/phones"
            className={`${styles[`category__image-container`]} ${styles[`category__image-container--phones`]}`}>
            <img
              className={styles[`category__image`]}
              src="/public/img/phones-banner.png"
              alt=""
            />
          </Link>

          <Link
            to="/phones"
            className={styles[`category__title`]}>
            Mobile phone
          </Link>
          <p className={styles[`category__product-quantity`]}>
            Variable models
          </p>
        </div>

        <div className={`${styles[`section__category`]} ${styles[`category`]}`}>
          <Link
            to="/tablets"
            className={`${styles[`category__image-container`]} ${styles[`category__image-container--tablets`]}`}>
            <img
              className={styles[`category__image`]}
              src="public/img/tablets-banner.png"
              alt=""
            />
          </Link>

          <Link
            to="/tablets"
            className={styles[`category__title`]}>
            Tablets
          </Link>
          <p className={styles[`category__product-quantity`]}>
            Variable models
          </p>
        </div>

        <div className={`${styles[`section__category`]} ${styles[`category`]}`}>
          <Link
            to="/accessories"
            className={`${styles[`category__image-container`]} ${styles[`category__image-container--accessories`]}`}>
            <img
              className={styles[`category__image`]}
              src="/public/img/accessories-banner.png"
              alt=""
            />
          </Link>

          <Link
            to="/accessories"
            className={styles[`category__title`]}>
            Accessories
          </Link>
          <p className={styles[`category__product-quantity`]}>
            Variable models
          </p>
        </div>
      </div>
    </div>
  );
};
