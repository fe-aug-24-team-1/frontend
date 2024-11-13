import style from './CategoryShop.module.scss';
import mobiles from '../../assets/images/categories/mobile.png';
import tablet from '../../assets/images/categories/tablet.png';
import accessories from '../../assets/images/categories/accessories.png';
import { NavLink } from 'react-router-dom';

import { useAppSelector } from '@/app/store/hooks';
import { useTranslation } from 'react-i18next';

export const CategoryShop = () => {
  const { t } = useTranslation();

  const { products } = useAppSelector((state) => state.products);

  const countItemsByCategory = (category: string) => {
    return [...products].filter((item) => item.category === category);
  };

  const categories = [
    {
      img: mobiles,
      name: t('homePage.categories.category.phones'),
      models: t('phonesPage.title.count', {
        count: countItemsByCategory('phones').length,
      }),
      href: 'phones',
    },
    {
      img: tablet,
      name: t('homePage.categories.category.tablets'),
      models: t('tabletsPage.title.count', {
        count: countItemsByCategory('tablets').length,
      }),
      href: 'tablets',
    },
    {
      img: accessories,
      name: t('homePage.categories.category.accessories'),
      models: t('accessoriesPage.title.count', {
        count: countItemsByCategory('accessories').length,
      }),
      href: 'accessories',
    },
  ];

  return (
    <section className={style.categoryShop}>
      <h2 className={style.title}>
        {t('homePage.categories.categoriesTitle')}
      </h2>
      <div className={style.content}>
        {categories.map(({ img, name, models, href }) => (
          <article
            key={href}
            className={style.article}>
            <NavLink to={href}>
              <img
                src={img}
                alt={name}
                className={style.article__img}
              />
              <h4 className={style.article__name}>{name}</h4>
              <p className={style.article__countModels}>{models}</p>
            </NavLink>
          </article>
        ))}
      </div>
    </section>
  );
};
