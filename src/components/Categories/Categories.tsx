import { useAppSelector } from '@/app/store/hooks';
import { FC } from 'react';
import { NavLink } from 'react-router-dom';

import mobiles from '@/assets/images/categories/mobile.png';
import tablet from '@/assets/images/categories/tablet.png';
import accessories from '@/assets/images/categories/accessories.png';

import styles from './Categories.module.scss';

export const Categories: FC = () => {
  const { products } = useAppSelector((state) => state.products);

  const countItemsByCategory = (category: string) => {
    return [...products].filter((item) => item.category === category);
  };

  const categories = [
    {
      img: mobiles,
      name: 'Mobile phones',
      models: `${countItemsByCategory('phones').length} models`,
      href: 'phones',
    },
    {
      img: tablet,
      name: 'Tablets',
      models: `${countItemsByCategory('tablets').length} models`,
      href: 'tablets',
    },
    {
      img: accessories,
      name: 'Accessories',
      models: `${countItemsByCategory('accessories').length} models`,
      href: 'accessories',
    },
  ];
  return (
    <section className={styles.categories}>
      <h2 className={styles.categories__title}>Shop by category</h2>

      <article className={styles.categories__content}>
        {categories.map(({ img, name, models, href }) => (
          <NavLink
            to={href}
            className={styles.category}>
            <img
              src={img}
              alt={name}
              className={styles.category__img}
            />
            <h4 className={styles.category__name}>{name}</h4>
            <p className={styles.category__count}>{models}</p>
          </NavLink>
        ))}
      </article>
    </section>
  );
};
