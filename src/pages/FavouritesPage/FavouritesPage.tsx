import { Breadcrumbs } from '@/components/Breadcrumbs';
import { ProductCard } from '@/modules/ProductCard';
import { Product } from '../../types/Product';
import style from './FavouritesPage.module.scss';
import { useAppSelector } from '@/app/store/hooks';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import prodNotFound from '@/assets/images/EmptyFavorite/product-not-found.png';

const FavouritesPage: FC = () => {
  const { t } = useTranslation();

  const favourites = useAppSelector((state) => state.wishlist.products);

  return (
    <div className={style.favouritesPage}>
      <div className={style.breadcrumbs}>
        <Breadcrumbs />
      </div>

      {!favourites.length && (
        <div className={style.wrapper}>
          <h1 className={style.title}>{t('favoritesPage.title.empty')}</h1>
          <img
            className={style.emptyImage}
            src={prodNotFound}
            alt="No favourites yet"
          />
        </div>
      )}

      {!!favourites.length && (
        <>
          <h1 className={style.title}>{t('favoritesPage.title.text')}</h1>

          <p className={style.countItems}>
            {t('favoritesPage.title.count', { count: favourites.length })}
          </p>

          <div className={style.cards}>
            {favourites.map((item: Product) => (
              <div
                className={style.card}
                key={item.id}>
                <ProductCard prod={item} />
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default FavouritesPage;
